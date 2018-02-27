//
//  ItemTableViewCell.swift
//  iLost
//
//  Created by Nyo on 29/01/2018.
//  Copyright © 2018 GSoft. All rights reserved.
//

import UIKit

class ItemListTableViewCell: UITableViewCell {
    
    // MARK: Properties
    
    @IBOutlet weak var nameLabel: UILabel!    
    @IBOutlet weak var trackingSwitch: UISwitch!
    @IBOutlet weak var itemPhotoImageView: UIImageView!
    @IBOutlet weak var itemContentView: UIView!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }
    
    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
        
        // Configure the view for the selected state
    }
    
    
}
