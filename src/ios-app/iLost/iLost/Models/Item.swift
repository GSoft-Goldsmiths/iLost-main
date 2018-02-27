//
//  Item.swift
//  iLost
//
//  Created by Nyo on 29/01/2018.
//  Copyright © 2018 GSoft. All rights reserved.
//

import UIKit

class Item {
    
    // MARK: Properties
    
    var name: String
    var photo: UIImage?
    var isTracked: Bool
    var trackerID: String   // TBC
    
    // MARK: Initialisation
    
    init? (name: String, photo: UIImage?, trackerID: String) {
        
        // The name must not be empty
        guard !name.isEmpty else {
            return nil
        }
        
        // The trackerID must not be empty
        guard !trackerID.isEmpty else{
            return nil
        }
        
        
        // Initialise stored properties
        self.name = name
        self.photo = photo
        self.isTracked = false
        self.trackerID = trackerID
        
    }
    
}
