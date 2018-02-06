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
    
    let title: String?
    let locationName: String?
    let coordinate: CLLocationCoordinate2D
    var subtitle: String? {
        return locationName
    }
    
    // MARK: Initialisation
    
    init(title: String, locationName: String, coordinate: CLLocationCoordinate2D) {

        self.title = title
        self.locationName = locationName
        self.coordinate = coordinate
        super.init()
        
    }
}
