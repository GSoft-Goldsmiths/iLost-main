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
import Contacts

class ItemDetailsViewController: UIViewController, UITableViewDelegate, UITableViewDataSource, CLLocationManagerDelegate {
    
    // MARK: Properties
    
    var itemLocations: [ItemLocation] = [ItemLocation]()
    let cellIdentifier = "historyLocationTableViewCell"
    var locationManager: CLLocationManager!
    let regionRadius: CLLocationDistance = 1000
    @IBOutlet weak var locationMapView: MKMapView!
    @IBOutlet weak var itemDetailsLocationTableView: UITableView!
    
    // set goldsmiths as the temporary geolocation
    let initLocation = CLLocation(latitude: 51.47427313512371, longitude: -0.03544807434082031)
    
    // temporaty item detail
    let itemLocationLatitude = 51.4750316
    let itemLocationLongitude = -0.0455983
    let itemLocationRecordedTime = "45 mins"
    let itemLocationRecordedDistance = "4 km"
    
    // MARK: Private Methods
    private func loadSampleLocations() {
        let sampleItemLocation1 = ItemLocation(time: "3 mins", distance: "3km", coordinate: CLLocationCoordinate2D(latitude: 51.46, longitude: -0.035))
        let sampleItemLocation2 = ItemLocation(time: "10 mins", distance: "4km", coordinate: CLLocationCoordinate2D(latitude: 51.45, longitude: -0.035))
        let sampleItemLocation3 = ItemLocation(time: "13 mins", distance: "5km", coordinate: CLLocationCoordinate2D(latitude: 51.44, longitude: -0.035))
        let sampleItemLocation4 = ItemLocation(time: "10 mins", distance: "6km", coordinate: CLLocationCoordinate2D(latitude: 51.43, longitude: -0.035))
        itemLocations += [sampleItemLocation1, sampleItemLocation2, sampleItemLocation3, sampleItemLocation4]
        locationMapView.addAnnotations(itemLocations)
    }
    
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
    
    func pinItemLocationOnMap (latitude: Double, longitude: Double) {
        
        // Create new Item Location object
        let item = ItemLocation(time: itemLocationRecordedTime, distance: itemLocationRecordedDistance, coordinate: CLLocationCoordinate2D(latitude: latitude, longitude: longitude))
        
        // add annotation to the map
        locationMapView.addAnnotation(item)
        
    }
    
    
    // MARK: Main methods
    
    func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
        if status != .authorizedWhenInUse { return }
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
        locationManager.startUpdatingLocation()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        //        centerMapOnLocation(location: initLocation)
        itemDetailsLocationTableView.delegate = self
        itemDetailsLocationTableView.dataSource = self
        loadSampleLocations()
        setupLocationManager()
        loadAllPositionData { (dist: NSDictionary) in
            let latitude = Double(dist.object(forKey: "latitude") as! String)!
            let longitude = Double(dist.object(forKey: "longitude") as! String)!
            let initLocation = CLLocation(latitude: latitude, longitude: longitude)
            self.centerMapOnLocation(location: initLocation)
            self.pinItemLocationOnMap(latitude: latitude, longitude: longitude)
            
        }
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
    
    // MARK: - Table view data source
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.itemLocations.count
    }
    
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) ->
        UITableViewCell {
            
            // Table view cells are reused and should be dequeued using a cell identifier
            
            
            guard let cell: ItemDetailsLocationTableViewCell =  itemDetailsLocationTableView.dequeueReusableCell(withIdentifier: cellIdentifier) as? ItemDetailsLocationTableViewCell else {
                fatalError("The dequeued cell is not an instance of ItemDetailsLocationTableViewCell")
            }
            // Configure the cell...
            
            // Fetches the appropriate item for the data source layout
            let itemLocation = itemLocations[indexPath.row]
            cell.distanceLabelView.text = itemLocation.title
            cell.timeLabelView.text = itemLocation.subtitle
            return cell
    }
    
    
    // recenter the map if the cell is clicked
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let targetItemLocation: ItemLocation = itemLocations[indexPath.row]
        let location: CLLocation = CLLocation(latitude: targetItemLocation.coordinate.latitude, longitude: targetItemLocation.coordinate.longitude)
        self.centerMapOnLocation(location: location)
    }
}
