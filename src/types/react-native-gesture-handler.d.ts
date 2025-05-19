declare module 'react-native-gesture-handler' {
  import { ComponentType } from 'react';

  export enum State {
    UNDETERMINED = 0,
    FAILED = 1,
    BEGAN = 2,
    CANCELLED = 3,
    ACTIVE = 4,
    END = 5,
  }

  export interface PanGestureHandlerGestureEvent {
    nativeEvent: {
      translationX: number;
      translationY: number;
      absoluteX: number;
      absoluteY: number;
      x: number;
      y: number;
      velocityX: number;
      velocityY: number;
      state: State;
    };
  }

  export interface PanGestureHandlerProps {
    onGestureEvent?: (event: PanGestureHandlerGestureEvent) => void;
    onHandlerStateChange?: (event: PanGestureHandlerGestureEvent) => void;
    enabled?: boolean;
    minDist?: number;
    minPointers?: number;
    maxPointers?: number;
    avgTouches?: boolean;
    id?: string;
    simultaneousHandlers?: React.RefObject<any> | React.RefObject<any>[];
    waitFor?: React.RefObject<any> | React.RefObject<any>[];
    shouldCancelWhenOutside?: boolean;
    hitSlop?: {
      left?: number;
      right?: number;
      top?: number;
      bottom?: number;
      vertical?: number;
      horizontal?: number;
    };
    children: React.ReactNode;
  }

  export const PanGestureHandler: ComponentType<PanGestureHandlerProps>;
  export const GestureHandlerRootView: ComponentType<any>;
}
