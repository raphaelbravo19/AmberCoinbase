//
//  HapticsModule.swift
//  AmberCoinbase
//
//  Created by Raphael Bravo on 16/05/25.
//


import Foundation
import React
import UIKit

@objc(HapticsModule)
class HapticsModule: NSObject {

  @objc
  func trigger() {
    let generator = UIImpactFeedbackGenerator(style: .medium)
    generator.impactOccurred()
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false
  }
}

