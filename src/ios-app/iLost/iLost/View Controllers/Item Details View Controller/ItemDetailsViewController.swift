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
    let regionRadius: CLLocationDistance = 300
    @IBOutlet weak var locationMapView: MKMapView!
    @IBOutlet weak var itemDetailsLocationTableView: UITableView!
    
    // set goldsmiths as the temporary geolocation
    let initLocation = CLLocation(latitude: 51.47427313512371, longitude: -0.03544807434082031)
    
    // temporaty item detail
    let itemName = "My bag"
    
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
    
    
    // MARK: Main methods
    
    func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
        if status != .authorizedWhenInUse { return }
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
        locationManager.startUpdatingLocation()
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        itemDetailsLocationTableView.delegate = self
        itemDetailsLocationTableView.dataSource = self
        setupLocationManager()
        loadAllPositionData(handler: { (dist: NSDictionary) in
            
            let latitude = Double(dist.object(forKey: "latitude") as! String)!
            let longitude = Double(dist.object(forKey: "longitude") as! String)!
            let date = dist.object(forKey: "date") as! String
            
            // parse time data
            var time = dist.object(forKey: "time") as! String
            time = time.components(separatedBy: ".000")[0]
            
            // get the distance between current location the item location and round make it in KM by dividing it by 1000
            let disatnce = self.initLocation.distance(from: CLLocation(latitude: latitude, longitude: longitude))/1000 as Double
            
            // round to one decimal digit
            let disatnceStr = String(format: "%.1f", disatnce)
            
            let itemLocation = ItemLocation(time: "\(date) - \(time)", distance: disatnceStr, coordinate: CLLocationCoordinate2D(latitude: latitude, longitude: longitude))
            
            self.itemLocations += [itemLocation]
            self.locationMapView.addAnnotation(itemLocation)
            self.centerMapOnLocation(location: CLLocation(latitude: latitude, longitude: longitude))
            self.itemDetailsLocationTableView.reloadData()
            
        }) {
            DispatchQueue.main.sync {
                self.itemDetailsLocationTableView.reloadData()
            }
            
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
            
            // store the row as the index to trigger differnt location navigation
            cell.navigationButtonView.tag = indexPath.row
            
            return cell
    }
    
    
    // recenter the map if the cell is clicked
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let targetItemLocation: ItemLocation = itemLocations[indexPath.row]
        let location: CLLocation = CLLocation(latitude: targetItemLocation.coordinate.latitude, longitude: targetItemLocation.coordinate.longitude)
        self.centerMapOnLocation(location: location)
    }
    
    
    // trigge the maps app to nagivate to the item
    @IBAction func navigationButtonAction(_ sender: UIButton) {
        
        // use the tag to get the corresponding item location
        let itemLocation = itemLocations[sender.tag]
        let regionDistance: CLLocationDistance = 10000
        let coordinates = itemLocation.coordinate
        let regionSpan = MKCoordinateRegionMakeWithDistance(coordinates, regionDistance, regionDistance)
        
        // use driving mode as the default navigation way
        let options = [
            MKLaunchOptionsMapCenterKey: NSValue(mkCoordinate: regionSpan.center),
            MKLaunchOptionsMapSpanKey: NSValue(mkCoordinateSpan: regionSpan.span),
            MKLaunchOptionsDirectionsModeKey: MKLaunchOptionsDirectionsModeDriving
            ] as [String : Any]
        let placemark = MKPlacemark(coordinate: coordinates, addressDictionary: nil)
        let mapItem = MKMapItem(placemark: placemark)
        mapItem.name = "\(self.itemName)"
        mapItem.openInMaps(launchOptions: options)
    }

    
}
