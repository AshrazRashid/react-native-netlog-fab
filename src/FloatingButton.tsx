import React, { useRef } from 'react';
import { StyleSheet, Animated } from 'react-native';
import type { ViewStyle } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Icon, { Icons } from './Icons';

interface FloatingButtonProps {
  onPress?: () => void;
  color?: string;
  icon?: React.ReactNode;
  position?: { bottom?: number; right?: number };
  style?: ViewStyle;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  onPress,
  color = 'lightgray',
  icon,
  position,
  style,
}) => {
  const initialX = position?.right ?? 15;
  const initialY = position?.bottom ?? 100;
  const translateX = useRef(new Animated.Value(initialX)).current;
  const translateY = useRef(new Animated.Value(initialY)).current;
  const lastOffset = useRef({ x: initialX, y: initialY });

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.setValue(lastOffset.current.x + event.translationX);
      translateY.setValue(lastOffset.current.y + event.translationY);
    })
    .onEnd((event) => {
      lastOffset.current = {
        x: lastOffset.current.x + event.translationX,
        y: lastOffset.current.y + event.translationY,
      };
      translateX.setValue(lastOffset.current.x);
      translateY.setValue(lastOffset.current.y);
    });

  const tapGesture = Gesture.Tap().onEnd(() => {
    onPress?.();
  });

  const gesture = Gesture.Exclusive(panGesture, tapGesture);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          styles.draggableContainer,
          style,
          {
            transform: [{ translateX }, { translateY }],
          },
        ]}
      >
        <Animated.View style={[styles.button, { backgroundColor: color }]}>
          {icon || (
            <Icon type={Icons.MaterialIcons} name="expand-less" size={30} />
          )}
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  draggableContainer: {
    position: 'absolute',
    zIndex: 1,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FloatingButton;
