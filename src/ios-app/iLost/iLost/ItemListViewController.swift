//
//  ItemListViewController.swift
//  iLost
//
//  Created by Nyo on 29/01/2018.
//  Copyright © 2018 GSoft. All rights reserved.
//

import UIKit

class ItemListViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    // MARK: Properties
    var items: [Item] = [Item]()
    let cellIdentifier = "ItemTableViewCell"
    @IBOutlet weak var itemListTableView: UITableView!
    
    // MARK: Private methods
    private func loadSampleItems() {
        
        // Load sample images
        let photo1 = UIImage(named: "sample-item-1")
        let photo2 = UIImage(named: "sample-item-2")
        let photo3 = UIImage(named: "sample-item-3")
        
        // instantiate sample items.
        guard let sampleItem1 = Item(name: "School Bag", photo: photo1, trackerID: "lorem") else {
            fatalError("Unable to instantiate item 1.")
        }
        
        guard let sampleItem2 = Item(name: "Shopping Bag", photo: photo2, trackerID: "lorem") else {
            fatalError("Unable to instantiate item 2.")
        }
        
        guard let sampleItem3 = Item(name:"Travel Bag", photo: photo3, trackerID: "lorem") else {
            fatalError("Unable to instantiate item 3.")
        }
        
        items += [sampleItem1, sampleItem2, sampleItem3]
        
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Load the sample data
        loadSampleItems()
                
        itemListTableView.delegate = self
        itemListTableView.dataSource = self
        
        
        // Uncomment the following line to preserve selection between presentations
        // self.clearsSelectionOnViewWillAppear = false
        
        // Uncomment the following line to display an Edit button in the navigation bar for this view controller.
        // self.navigationItem.rightBarButtonItem = self.editButtonItem
        
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
        return items.count
    }
    
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) ->
        UITableViewCell {
            
            // Table view cells are reused and should be dequeued using a cell identifier
            
            
            guard let cell: ItemTableViewCell = itemListTableView.dequeueReusableCell(withIdentifier: cellIdentifier) as? ItemTableViewCell else {
                fatalError("The dequeued cell is not an instance of ItemTableViewCell")
            }
            // Configure the cell...
            
            // Fetches the appropriate item for the data source layout
            let item = items[indexPath.row]
            cell.nameLabel.text = "item.name"
            cell.itemPhotoImageView.image = item.photo

            
            
            // Adds round corner to the cell and image photo
            cell.itemPhotoImageView.layer.cornerRadius = 25
            cell.itemPhotoImageView.layer.masksToBounds = true
            cell.layer.cornerRadius = 25
            cell.layer.masksToBounds = true
            
            return cell
    }


}
