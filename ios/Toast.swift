//
//  Toast.swift
//  AwesomeTSProject
//
//  Created by SoadTech on 10/12/21.
//

import Foundation
import UIKit

@objc(Toast)

class Toast: NSObject, RCTBridgeModule {
  
  static func moduleName() -> String! {
    return "Toast"
  }
  
  static func requiresMainQueueSetup() -> Bool {
    return true;
  }
  
  @objc
  func ShowMessage(_ title: NSString, message: NSString, duration: Double) -> Void {
    let alert = UIAlertController(title: title as String, message: message as String, preferredStyle: .alert);
    let seconds:Double = duration;
    alert.view.backgroundColor = .black
    alert.view.alpha = 0.5
    alert.view.layer.cornerRadius = 14
    
    DispatchQueue.main.async {
      (UIApplication.shared.delegate as? AppDelegate)?.window.rootViewController?.present(alert, animated: true, completion: nil);
    }
    
    DispatchQueue.main.asyncAfter(deadline: DispatchTime.now() + seconds, execute: {
      alert.dismiss(animated: true, completion: nil);
    })
    
  }

}
