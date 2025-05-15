import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  PanResponder,
  Animated,
} from 'react-native';
import type { ViewStyle } from 'react-native';

interface FloatingButtonProps {
  color?: string;
  icon?: React.ReactNode;
  position?: { bottom?: number; right?: number };
  onPress?: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  color = '#6200ee',
  icon,
  position,
  onPress,
}) => {
  const [pan] = useState(new Animated.ValueXY());

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  const buttonStyle: ViewStyle = {
    ...styles.button,
    backgroundColor: color,
    ...(position ? { bottom: position.bottom, right: position.right } : {}),
  };

  return (
    <Animated.View
      style={[
        buttonStyle,
        { transform: [{ translateX: pan.x }, { translateY: pan.y }] },
      ]}
      {...panResponder.panHandlers}
    >
      <TouchableOpacity onPress={onPress} style={styles.touchable}>
        {icon}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  touchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FloatingButton;
