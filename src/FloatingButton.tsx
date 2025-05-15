import React, { useRef } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Icon, { Icons } from './Icons';

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
  const translateX = useRef(new Animated.Value(position?.right || 15)).current;
  const translateY = useRef(
    new Animated.Value(position?.bottom || 100)
  ).current;
  const lastOffset = useRef({
    x: position?.right || 15,
    y: position?.bottom || 100,
  }).current;

  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: false }
  );

  const onHandlerStateChange = (event: any) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastOffset.x += event.nativeEvent.translationX;
      lastOffset.y += event.nativeEvent.translationY;
      translateX.setOffset(lastOffset.x);
      translateX.setValue(0);
      translateY.setOffset(lastOffset.y);
      translateY.setValue(0);
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
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
            <Icon
              type={Icons.MaterialIcons}
              name="expand-less"
              size={30}
              color="#fff"
            />
          )}
        </Animated.View>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  draggableContainer: {
    position: 'absolute',
    zIndex: 1,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default FloatingButton;
