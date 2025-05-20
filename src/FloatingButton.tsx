import React, { useRef } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Icon, { Icons } from './Icons';

interface FloatingButtonProps {
  onPress?: () => void;
  color?: string;
  icon?: React.ReactNode;
  position?: { bottom?: number; right?: number };
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  onPress,
  color = 'lightgray',
  icon,
  position,
}) => {
  const translateX = useRef(new Animated.Value(position?.right || 15)).current;
  const translateY = useRef(
    new Animated.Value(position?.bottom || 100)
  ).current;
  const lastOffset = useRef({
    x: position?.right || 15,
    y: position?.bottom || 100,
  });

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.setValue(event.translationX + lastOffset.current.x);
      translateY.setValue(event.translationY + lastOffset.current.y);
    })
    .onEnd(() => {
      translateX.extractOffset();
      translateY.extractOffset();
      translateX.addListener(({ value }) => {
        lastOffset.current.x = value;
      });
      translateY.addListener(({ value }) => {
        lastOffset.current.y = value;
      });
    });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View
        style={[
          styles.draggableContainer,
          {
            transform: [{ translateX: translateX }, { translateY: translateY }],
          },
        ]}
      >
        <Animated.View
          style={[styles.button, { backgroundColor: color }]}
          onTouchEnd={onPress}
        >
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
