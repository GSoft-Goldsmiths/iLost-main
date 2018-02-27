//
//  cloudData.swift
//  iLost
//
//  Created by Nyo on 06/02/2018.
//  Copyright © 2018 GSoft. All rights reserved.
//

import Foundation
import AWSCore
import AWSS3


/**
 *   Load position data via S3 bucket api and get the position data
 */
public func loadAllPositionData(handler: @escaping (NSDictionary) -> Void, completeHandler: @escaping () -> Void) {
    
    let crendetinalsProviders: AWSStaticCredentialsProvider = AWSStaticCredentialsProvider.init(accessKey: aws_accessKey, secretKey: aws_secretKey)
    let configuration: AWSServiceConfiguration = AWSServiceConfiguration.init(region: AWSRegionType.EUWest2, credentialsProvider: crendetinalsProviders)
    AWSS3.register(with: configuration, forKey: aws_key)
    let s3 = AWSS3.s3(forKey: aws_key)
    
    
    let listRequest: AWSS3ListObjectsRequest = AWSS3ListObjectsRequest()
    listRequest.bucket = aws_bucketName
    
    s3.listObjects(listRequest).continueWith(block: { (task) -> Void in
        if (task.result != nil){
            
            // Get all the data name in the reuslt
            for object in (task.result?.contents)! {
                if(object.key != nil) {
                    getData(bucketName: aws_bucketName, fileName: object.key!, handler: handler)
                }
            }
            completeHandler()
            
        }else{
            print("can't find the bucket.")
        }
    })
    
}

/**
 *  Get data with the filename and do something
 */
public func getData(bucketName: String, fileName: String, handler: @escaping (NSDictionary)->Void) {
    let expression = AWSS3TransferUtilityDownloadExpression()
    var completionHandler: AWSS3TransferUtilityDownloadCompletionHandlerBlock?
    let transferUtility = AWSS3TransferUtility.default()
    
    expression.progressBlock = {(task, progress) in DispatchQueue.main.async(execute: {
        // Do something e.g. Update a progress bar.
    })}
    
    completionHandler = { (task, URL, data, error) -> Void in
        
        // parse data into json format
        let dataString = NSString(data: data!, encoding: String.Encoding.utf8.rawValue)
        if let string = dataString {
            let string = string.replacingOccurrences(of: "Location: ", with: "")
            let jsonDict: NSDictionary = convertStringTODictionary(text: string)!
            handler(jsonDict)
            
        }
    }
    
    transferUtility.downloadData(
        fromBucket: bucketName,
        key: fileName,
        expression: expression,
        completionHandler: completionHandler
        ).continueWith {
            (task) -> AnyObject! in if let error = task.error {
                print("Error: \(error.localizedDescription)")
            }
            
            if let _ = task.result {
                // Do something with downloadTask.
                
            }
            return nil;
    }
    
}

private func convertStringTODictionary(text: String) -> NSDictionary? {
    if let data = text.data(using: String.Encoding.utf8) {
        do {
            return try JSONSerialization.jsonObject(with: data, options: []) as? NSDictionary
        } catch {
            print(error.localizedDescription)
        }
    }
    return nil
}

