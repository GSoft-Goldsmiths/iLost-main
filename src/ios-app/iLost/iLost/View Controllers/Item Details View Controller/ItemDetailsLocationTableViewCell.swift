//
//  ItemDetailsLocationTableViewCell
//  iLost
//
//  Created by Nyo on 19/02/2018.
//  Copyright © 2018 GSoft. All rights reserved.
//

import UIKit

class ItemDetailsLocationTableViewCell: UITableViewCell {

    
    @IBOutlet weak var distanceLabelView: UILabel!
    @IBOutlet weak var timeLabelView: UILabel!
    @IBOutlet weak var navigationButtonView: UIButton!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
