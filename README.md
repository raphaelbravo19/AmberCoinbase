# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Build and run your app

Open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Development Time

The implementation took approximately 1 hour and 57 minutes to complete.

# Notes

### Color and Accessibility

I made sure to choose colors with good contrast. When a cryptocurrency is selected, its background color changes accordingly, and the text remains clearly readable regardless of the background.

### Swift + Native Modules (React Native 0.71+) 

Since React Native now fully supports Swift, native module creation requires manually defining the bridge using an Objective-C .m file. Without this, React Native won't detect your Swift-based native modules.

### Real-time Socket Handling and Price Direction
I implemented real-time WebSocket connections to update crypto prices on demand. Additionally, I track price direction (up/down/same) by comparing the new price to the previous one, allowing visual indicators when values change.