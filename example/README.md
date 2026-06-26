# Example app

Demo app for [`react-native-netlog-fab`](../README.md).

## Run from the repo root

```sh
# Install dependencies (first time)
yarn

# Build the library
yarn prepare

# Start Metro
yarn example start
```

In a second terminal:

```sh
# Android
yarn example android

# iOS (after pod install)
cd example/ios && pod install && cd ../..
yarn example ios
```

## What to try

1. Tap **Send sample request** to trigger a network call.
2. Tap the purple **FAB** (bottom-right) to open the network log panel.
3. Drag the FAB to reposition it.

The example uses `GestureHandlerRootView` at the app root, which is required for the draggable FAB.

## iOS note

If `bundle install` fails due to Ruby version, run `pod install` directly inside `example/ios`:

```sh
cd example/ios && pod install
```

## Troubleshooting

If you see `Cannot read property 'useState' of null`, Metro is loading duplicate React copies. Restart with a clean cache:

```sh
yarn example start --reset-cache
```
