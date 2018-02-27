//
//  iLostTests.swift
//  iLostTests
//
//  Created by Nyo on 26/01/2018.
//  Copyright © 2018 GSoft. All rights reserved.
//

import XCTest
@testable import iLost

class iLostTests: XCTestCase {
    
    override func setUp() {
        super.setUp()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testExample() {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
    }
    
    func testPerformanceExample() {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.
        }
    }

    
    // MARK: Item Class Test
    
    // Confirm that the Item initialiser returns a Item object when passed valid parameters
    func testItemInitialiserSucceeds() {
        let validItem = Item.init(name: "Valid Item", photo: nil, trackerID: "fake ID")
        XCTAssertNotNil(validItem)
    }
    
    // Confirm that the Item initialiser return nil when passed a empty namd or empty trackID
    func testItemInitialiserFailes() {
        
        // Empty name
        let emptyNameItem = Item.init(name: "", photo: nil, trackerID: "fake ID")
        XCTAssertNil(emptyNameItem)
        
        // Empty tracker ID
        let emptyTrackerID = Item.init(name: "Item Name", photo: nil, trackerID: "")
        XCTAssertNil(emptyTrackerID)
    }
}
