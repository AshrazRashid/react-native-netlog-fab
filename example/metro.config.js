const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const monorepoRoot = path.resolve(__dirname, '..');
const exampleModules = path.resolve(__dirname, 'node_modules');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
module.exports = mergeConfig(getDefaultConfig(__dirname), {
  watchFolders: [monorepoRoot],
  resolver: {
    // Prevent Metro from walking up from ../src into the root node_modules (duplicate React).
    disableHierarchicalLookup: true,
    nodeModulesPaths: [exampleModules],
    extraNodeModules: {
      'react': path.resolve(exampleModules, 'react'),
      'react/jsx-runtime': path.resolve(exampleModules, 'react/jsx-runtime'),
      'react-native': path.resolve(exampleModules, 'react-native'),
      'react-native-gesture-handler': path.resolve(
        exampleModules,
        'react-native-gesture-handler'
      ),
      'react-native-network-logger': path.resolve(
        exampleModules,
        'react-native-network-logger'
      ),
      'react-native-netlog-fab': path.resolve(monorepoRoot, 'src'),
    },
  },
});
