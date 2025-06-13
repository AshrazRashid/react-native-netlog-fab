# react-native-netlog-fab

react-native-netlog-fab is a lightweight and developer-friendly React Native package that provides a floating action button (FAB) designed specifically for real-time network request logging. Ideal for debugging and monitoring network activity during development, this tool allows developers to quickly toggle a network inspector overlay directly within the app interface.

## Features

🛰️ **Real-time Network Logging** – Monitor HTTP requests and responses made by your app, including headers, payloads, and status codes.

🧲 **Floating Action Button (FAB)** – Easily accessible FAB to toggle the network log panel on or off from anywhere in your app.

🔧 **Minimal Setup** – Seamless integration into new or existing React Native projects.

🎯 **Development Focused** – Designed for development and debugging; can be disabled or hidden in production builds.

## Use Case

Whether you're debugging API issues, inspecting backend communication, or validating request payloads, react-native-netlog-fab helps you visualize network activity without leaving the app context.

## Installation

```sh
npm install react-native-netlog-fab
# or using yarn
yarn add react-native-netlog-fab
```

## Dependencies

This package has the following dependencies:

### Required Peer Dependencies

- `react` >= 16.8.0
- `react-native` >= 0.60.0
- `react-native-network-logger` ^2.0.0

### Required Dependencies

- `react-native-gesture-handler` ^2.25.0

Make sure to install these dependencies in your project. The peer dependencies are required for the package to work properly, while the required dependencies will be installed automatically when you install `react-native-netlog-fab`.

For more details, see the Medium article: [Introducing react-native-netlog-fab: Effortless In-App Network Debugging for React Native](https://medium.com/@ashraz.developer/introducing-react-native-netlog-fab-effortless-in-app-network-debugging-for-react-native-862ee0d57395)

## Usage

```jsx
import { NetworkLoggerFAB } from 'react-native-netlog-fab';

// In your component:
<NetworkLoggerFAB
  // FAB Props
  color="#6200ee" // Custom FAB color
  icon="network-check" // Custom icon (📡)
  iconSize={24} // Custom icon size
  iconColor="#ffffff" // Custom icon color
  position={{ bottom: 20, right: 20 }} // Custom position
  showIn="dev" // Show only in development
  modalHeight={0.7} // Modal height (70% of screen)
  // NetworkLogger Props
  theme="dark" // Use dark theme
  sort="asc" // Sort requests ascending
  maxRows={100} // Show max 100 rows
  compact // Use compact rows
  onBackPressed={() => {}} // Custom back handler
  // Logging Options
  maxRequests={1000} // Store max 1000 requests
  ignoredHosts={['api.example.com']} // Ignore specific hosts
  ignoredUrls={['https://api.example.com/health']} // Ignore specific URLs
  ignoredPatterns={[/^GET http:\/\/test\.example\.com\/.*$/]} // Ignore URL patterns
  forceEnable // Force enable logging
/>;
```

## Props

### FAB Props

| Prop        | Type                                | Default                   | Description                                              |
| ----------- | ----------------------------------- | ------------------------- | -------------------------------------------------------- |
| color       | string                              | '#6200ee'                 | Color of the floating action button                      |
| icon        | React.ReactNode \| string           | undefined                 | Custom icon for the FAB (string for Material Icons)      |
| iconSize    | number                              | 30                        | Size of the icon                                         |
| iconColor   | string                              | '#ffffff'                 | Color of the icon                                        |
| position    | { bottom?: number; right?: number } | { bottom: 20, right: 20 } | Custom position for the FAB                              |
| showIn      | 'dev' \| 'always'                   | 'dev'                     | When to show the FAB ('dev' or 'always')                 |
| modalHeight | number                              | 0.7                       | Height of the modal as a fraction of screen height (0-1) |

### NetworkLogger Props

| Prop          | Type                             | Default   | Description                       |
| ------------- | -------------------------------- | --------- | --------------------------------- |
| theme         | 'light' \| 'dark' \| ThemeObject | 'light'   | Theme for the network logger      |
| sort          | 'asc' \| 'desc'                  | 'desc'    | Sort order of requests            |
| maxRows       | number                           | undefined | Maximum number of rows to display |
| compact       | boolean                          | false     | Use compact rows for more content |
| onBackPressed | () => void                       | undefined | Custom back button handler        |

### Logging Options

| Prop            | Type     | Default | Description                                       |
| --------------- | -------- | ------- | ------------------------------------------------- |
| maxRequests     | number   | 500     | Maximum number of requests to store               |
| ignoredHosts    | string[] | []      | Hosts to ignore in logging                        |
| ignoredUrls     | string[] | []      | URLs to ignore in logging                         |
| ignoredPatterns | RegExp[] | []      | URL patterns to ignore in logging                 |
| forceEnable     | boolean  | false   | Force enable logging even with other interceptors |

## Available Icons

The component supports various Material Icons that can be used with the `icon` prop:

- `network-check` (📡) - Network monitoring icon
- `bug-report` (🐛) - Debug icon
- `code` (💻) - Code icon
- `analytics` (📊) - Analytics icon
- `wifi` (📶) - Network icon
- `settings` (⚙️) - Settings icon
- `list` (📋) - List icon
- `search` (🔍) - Search icon
- And many more from the Material Icons set

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
