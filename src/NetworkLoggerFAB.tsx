import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FloatingButton from './FloatingButton';
import LoggerModal from './LoggerModal';

interface NetworkLoggerFABProps {
  color?: string;
  icon?: React.ReactNode;
  position?: { bottom?: number; right?: number };
  showIn?: 'dev' | 'always';
  modalHeight?: number;
}

const NetworkLoggerFAB: React.FC<NetworkLoggerFABProps> = ({
  color = '#6200ee',
  icon,
  position,
  showIn = 'dev',
  modalHeight = 0.7,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  return (
    <View style={styles.container}>
      <FloatingButton
        color={color}
        icon={icon}
        position={position}
        onPress={handlePress}
      />
      <LoggerModal
        visible={isModalVisible}
        onClose={handleClose}
        height={modalHeight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default NetworkLoggerFAB;
