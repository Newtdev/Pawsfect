import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    var window: UIWindow?

    var reactNativeDelegate: ReactNativeDelegate?
    var reactNativeFactory: RCTReactNativeFactory?

    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
    ) -> Bool {
        let delegate = ReactNativeDelegate()
        let factory = RCTReactNativeFactory(delegate: delegate)
        delegate.dependencyProvider = RCTAppDependencyProvider()

        reactNativeDelegate = delegate
        reactNativeFactory = factory

        window = UIWindow(frame: UIScreen.main.bounds)
        window?.makeKeyAndVisible() // Ensure window is visible early

        // 1. Start React Native. This will set up the window's rootViewController.
        factory.startReactNative(
            withModuleName: "Pawsfect", // Your app's module name
            in: window,
            launchOptions: launchOptions
        )

        // 2. Now, safely access the React Native root view and set the loading view.
        // We expect window.rootViewController?.view to be an RCTRootView.
        if let reactRootView = window?.rootViewController?.view as? RCTRootView {
            // Correctly instantiate the storyboard and view controller
            let launchScreenStoryboard = UIStoryboard(name: "LaunchScreen.storyboard", bundle: nil) // No 'if let' here
          let potentialLaunchScreenVC: UIViewController? = launchScreenStoryboard.instantiateViewController(withIdentifier: "LaunchScreenViewController")

                  if let launchScreenVC = potentialLaunchScreenVC {
                      // Check if the rootViewController's view is indeed an RCTRootView
                      if let reactRootView = window?.rootViewController?.view as? RCTRootView {
                          launchScreenVC.view.frame = window?.bounds ?? UIScreen.main.bounds
                          reactRootView.loadingView = launchScreenVC.view
                      } else {
                          // This warning means the React Native root view wasn't found or wasn't an RCTRootView
                          print("Warning: Could not find RCTRootView to set loadingView. Is 'Pawsfect' module loaded correctly?")
                      }
                  } else {
                      // This warning means the storyboard or the specific view controller couldn't be found
                      print("Warning: LaunchScreenViewController with identifier 'LaunchScreenViewController' not found in storyboard 'LaunchScreen'.")
                  }




        }

        // Remove the problematic super.application call
        return true // Signal that app launched successfully
    }
}

class ReactNativeDelegate: RCTDefaultReactNativeFactoryDelegate {
    override func sourceURL(for bridge: RCTBridge) -> URL? {
        self.bundleURL()
    }

    override func bundleURL() -> URL? {
#if DEBUG
        return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
        return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
    }
}
