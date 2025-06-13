import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import FloatingButton from './FloatingButton';
import LoggerModal from './LoggerModal';
import Icon, { Icons } from './Icons';
import { startNetworkLogging } from 'react-native-network-logger';

interface NetworkLoggerFABProps {
  // FAB Props
  color?: string;
  icon?: React.ReactNode | string;
  iconSize?: number;
  iconColor?: string;
  position?: { bottom?: number; right?: number };
  showIn?: 'dev' | 'always';
  modalHeight?: number;

  // NetworkLogger Props
  theme?:
    | 'light'
    | 'dark'
    | {
        colors?: {
          background?: string;
          text?: string;
          border?: string;
          [key: string]: string | undefined;
        };
      };
  sort?: 'asc' | 'desc';
  maxRows?: number;
  compact?: boolean;
  onBackPressed?: () => void;

  // Logging Options
  maxRequests?: number;
  ignoredHosts?: string[];
  ignoredUrls?: string[];
  ignoredPatterns?: RegExp[];
  forceEnable?: boolean;
}

const NetworkLoggerFAB: React.FC<NetworkLoggerFABProps> = ({
  // FAB Props
  color = '#6200ee',
  icon,
  iconSize = 30,
  iconColor = '#ffffff',
  position = { bottom: 20, right: 20 },
  showIn = 'dev',
  modalHeight = 0.7,

  // NetworkLogger Props
  theme = 'light',
  sort = 'desc',
  maxRows,
  compact = false,
  onBackPressed,

  // Logging Options
  maxRequests = 500,
  ignoredHosts = [],
  ignoredUrls = [],
  ignoredPatterns = [],
  forceEnable = false,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    // Start network logging with the provided options
    startNetworkLogging({
      maxRequests,
      ignoredHosts,
      ignoredUrls,
      ignoredPatterns,
      forceEnable,
    });
  }, [maxRequests, ignoredHosts, ignoredUrls, ignoredPatterns, forceEnable]);

  const handlePress = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  // Only render in development if showIn is 'dev'
  if (showIn === 'dev' && __DEV__ === false) {
    return null;
  }

  // Render the icon based on the type of icon prop
  const renderIcon = () => {
    if (React.isValidElement(icon)) {
      return icon;
    }
    if (typeof icon === 'string') {
      return (
        <Icon
          type={Icons.MaterialIcons}
          name={icon}
          size={iconSize}
          color={iconColor}
        />
      );
    }
    // Default icon if none provided
    return (
      <Icon
        type={Icons.MaterialIcons}
        name="expand-less"
        size={iconSize}
        color={iconColor}
      />
    );
  };

  return (
    <>
      <FloatingButton
        color={color}
        icon={renderIcon()}
        position={position}
        onPress={handlePress}
        style={styles.fab}
      />
      <LoggerModal
        visible={isModalVisible}
        onClose={handleClose}
        height={modalHeight}
        theme={theme}
        sort={sort}
        maxRows={maxRows}
        compact={compact}
        onBackPressed={onBackPressed}
      />
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    zIndex: 999,
  },
});

export default NetworkLoggerFAB;
