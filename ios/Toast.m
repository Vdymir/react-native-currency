//
//  Toast.m
//  AwesomeTSProject
//
//  Created by SoadTech on 10/12/21.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"
@interface RCT_EXTERN_MODULE(Toast,NSObject)
RCT_EXTERN_METHOD(ShowMessage:(NSString *)title message:(NSString *)message duration:(double *)duration)
@end

