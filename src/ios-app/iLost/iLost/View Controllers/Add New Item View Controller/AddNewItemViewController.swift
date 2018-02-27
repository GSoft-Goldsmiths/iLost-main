//
//  ViewController.swift
//  iLost
//
//  Created by Nyo on 26/01/2018.
//  Copyright © 2018 GSoft. All rights reserved.
//

import UIKit
import Foundation
import AWSCore
import AWSS3

class AddNewItemViewController: UIViewController, UITextFieldDelegate, UIImagePickerControllerDelegate, UINavigationControllerDelegate {
    
    // MARK: Properties
    
    @IBOutlet weak var itemNameTextField: UITextField!
    @IBOutlet weak var newItemViewTitle: UILabel!
    @IBOutlet weak var photoImageView: UIImageView!
    @IBOutlet var photoImageViewTagGesture: UITapGestureRecognizer!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        // Handle the text field's uer input through delegate callbacks.
        itemNameTextField.delegate = self
        
        // Enable the gesture recogniser
        photoImageView.isUserInteractionEnabled = true
        
        // Make the image round corner, 75 is half of the round icon size
        photoImageView.layer.cornerRadius = 75
        photoImageView.layer.masksToBounds = true
               
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    // MARK: UITextFieldDelegate
    
    // It calls when a user taps keyboard's return button.
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        
        // Hide the keyboard.
        itemNameTextField.resignFirstResponder()
        
        // Bool indicates whether the system should process the press of the Return key
        return true
    }
    
    // It calls after the text field resign its' first-responder status.
    func textFieldDidEndEditing(_ textField: UITextField) {
        print("New item name: " + textField.text!)
    }
    
    // MARK: UIIMagePickerControllerDelegate
    
    func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        
        // Dismiss the picker if the user canceled.
        dismiss(animated: true, completion: nil)
    }
    
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [String : Any]) {
        
        // if the condition is not met, execute the else statement
        guard let selectedImage = info[UIImagePickerControllerOriginalImage] as? UIImage else {
            fatalError("Expected a dictionary containing an image, but was provided the following: \(info)")
        }
        
        photoImageView.image = selectedImage
        dismiss(animated: true, completion: nil)
    }
    
    // MARK: Actions
    @IBAction func selectImageFromPhotoLibrary(_ sender: UITapGestureRecognizer) {
        
        print("select image from photo library")
        
        // Hide the keyboard.
        itemNameTextField.resignFirstResponder()
        
        let imagePickerController = UIImagePickerController()
        imagePickerController.sourceType = .photoLibrary
        
        // Make sure ViewController is notified when the user picks an image
        imagePickerController.delegate = self
        present(imagePickerController, animated: true, completion: nil)
        
    }
    
    @IBAction func toNextView(_ sender: UIButton) {
        print("Done button pressed")
        
    }
    
    
    

}

