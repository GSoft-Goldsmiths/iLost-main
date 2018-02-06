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

func accessData() {
    
}

func downloadData(bucketName: String, fileName: String) {
    let expression = AWSS3TransferUtilityDownloadExpression()
    expression.progressBlock = {(task, progress) in DispatchQueue.main.async(execute: {
        // Do something e.g. Update a progress bar.
    })
    }
    
    var completionHandler: AWSS3TransferUtilityDownloadCompletionHandlerBlock?
    completionHandler = { (task, URL, data, error) -> Void in
        DispatchQueue.main.async(execute: {
            print("Download completed?")
            
            do {
                // parse file to
                let jsonData: NSData = data! as NSData/* get your json data */
                let jsonDict = try JSONSerialization.jsonObject(with: jsonData as Data) as! NSDictionary
                for (key, value) in jsonDict {
                    print("key \(key) is \(value)")
                }
                let longitude = jsonDict.object(forKey: "longitude") ?? 0
                let latitude = jsonDict.object(forKey: "latitude") ?? 0
                print(longitude)
                print(latitude)
                
            } catch {
                
            }
            
            
            
            
//            print(task as Any)
//            print(data as Any)
//            print(URL as Any)
//            print(error as Any)
            
            // Do something e.g. Alert a user for transfer completion.
            // On failed downloads, `error` contains the error object.
        })
    }
    
    let transferUtility = AWSS3TransferUtility.default()
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
                print("Download success")
                // Do something with downloadTask.
                
            }
            return nil;
    }
}
