//
//  ItemLocation.swift
//  iLost
//
//  Created by Nyo on 01/02/2018.
//  Copyright © 2018 GSoft. All rights reserved.
//

import MapKit

class ItemLocation: NSObject, MKAnnotation {
    
    // MARK: Properties
    
    var title: String? {
        if let timeString = time {
            return "\(timeString)"
        } else {
            return ""
        }
    }
    var subtitle: String? {
        if let distanceString = distance {
            return " \(distanceString) km away"
        } else {
            return ""
        }
    }
    let coordinate: CLLocationCoordinate2D
    let time: String?
    let distance: String?
    
    // MARK: Initialisation
    
    init(time: String, distance: String, coordinate: CLLocationCoordinate2D) {
        
        self.time = time
        self.distance = distance
        self.coordinate = coordinate
        super.init()
        
    }
}
