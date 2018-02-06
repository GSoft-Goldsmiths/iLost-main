//
//  ItemDetailsViewController.swift
//  iLost
//
//  Created by Nyo on 31/01/2018.
//  Copyright © 2018 GSoft. All rights reserved.
//

import UIKit
import MapKit
import CoreLocation

class ItemDetailsViewController: UIViewController, CLLocationManagerDelegate {
    
    // MARK: Properties
    
    @IBOutlet weak var locationMapView: MKMapView!

    var locationManager: CLLocationManager!
    let regionRadius: CLLocationDistance = 1000
    
    // set goldsmiths as the temporary geolocation
    let initLocation = CLLocation(latitude: 51.47427313512371, longitude: -0.03544807434082031)
    
    // temporaty item detail
    let itemTitle = "my bag"
    let itemLocationName = "New Cross Gate"
    let itemLocationLatitude = 51.4750316
    let itemLocationLongitude = -0.0455983
    
    // MARK: Private Methods
    
    func centerMapOnLocation (location: CLLocation) {
        let coordinateRegion = MKCoordinateRegionMakeWithDistance(location.coordinate, regionRadius, regionRadius)
        locationMapView.setRegion(coordinateRegion, animated: true)
    }
    
    // Set up location manager for displaying and updating user's location
    func setupLocationManager() -> Void {
        locationManager = CLLocationManager()
        locationManager.delegate = self
        locationManager.requestWhenInUseAuthorization()
        locationMapView.showsUserLocation = true
    }
    
    func pinItemLocationOnMap () {
        
        // Create new Item Location object
        let item = ItemLocation(title: itemTitle, locationName: itemLocationName, coordinate: CLLocationCoordinate2D(latitude: itemLocationLatitude, longitude: itemLocationLongitude))
        
        // add annotation to the map
        locationMapView.addAnnotation(item)
        
    }
    
    func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
        if status != .authorizedWhenInUse { return }
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
        locationManager.startUpdatingLocation()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        centerMapOnLocation(location: initLocation)
        pinItemLocationOnMap()
        setupLocationManager()
        
        
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */
    
    

}
