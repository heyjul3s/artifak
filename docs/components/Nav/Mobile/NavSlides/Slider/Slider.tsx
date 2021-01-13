import * as React from 'react';
import { CarouselContainer, CarouselSlides, CarouselSlide } from './styles';
import {
  SlidePosition,
  SliderProps,
  MovementDirection,
  IsMouseDown
} from './typings';

import { getDevicePosition } from './utils';

export function Slider({
  children,
  onChangeViewIndex,
  viewIndex,
  slideTransition,
  slideAnimation,
  slideContainerTransition,
  disabled = false,
  className,
  disableSlideDiff,
  wrapperRef
}: SliderProps) {
  const THRESHOLD = 35;

  const initialPositionState = {
    initial: {
      x: 0,
      y: 0
    },
    current: {
      x: 0,
      y: 0
    }
  };

  const [position, setPosition] = React.useState<SlidePosition>(
    initialPositionState
  );

  const [isMouseDown, setIsMouseDown] = React.useState<IsMouseDown>(false);

  const [moveDirection, setMoveDirection] = React.useState<MovementDirection>(
    ''
  );

  const slides = typeof children === 'function' ? children(position) : children;

  React.useEffect(() => {
    setPosition({ ...position });
  }, [viewIndex]);

  React.useEffect(() => {
    setMoveDirection(getMovementDirection());
  }, [position.current]);

  const callbackOnMove = {
    left() {
      if (viewIndex > 0) {
        onChangeViewIndex(viewIndex - 1);
      }
    },

    right() {
      if (viewIndex < React.Children.count(slides) - 1) {
        onChangeViewIndex(viewIndex + 1);
      }
    }
  };

  const getMovementDirection = (): MovementDirection => {
    const { initial, current } = position;

    if (initial.x > current.x + THRESHOLD) {
      return 'right';
    }

    if (initial.x < current.x - THRESHOLD) {
      return 'left';
    }

    return '';
  };

  const onMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (!disabled) {
      const { x, y } = getDevicePosition(e);

      setIsMouseDown(true);
      setPosition({
        initial: { x, y },
        current: { x, y }
      });
    }
  };

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    (isMouseDown || !disabled) &&
      setPosition({
        ...position,
        current: { ...getDevicePosition(e) }
      });
  };

  const onMouseUp = () => {
    !!callbackOnMove[moveDirection] && callbackOnMove[moveDirection]();

    setIsMouseDown(false);
    setPosition(initialPositionState);
  };

  const resetState = (e: React.MouseEvent) => {
    if (!!moveDirection) {
      e.stopPropagation();
      e.preventDefault();

      setIsMouseDown(false);
      setPosition(initialPositionState);
    }
  };

  const animateSlide = (slideIndex: number) => {
    const defaultSlideAnimation = {
      x: 0,
      slideIndex
    };

    return !disableSlideDiff
      ? animateSlideWithCallback(
          getPositionXanimationValue(defaultSlideAnimation)
        )
      : {};
  };

  const getPositionXanimationValue = (config: any) => {
    return !!moveDirection && config.slideIndex !== viewIndex && isMouseDown
      ? { ...config, x: position.current.x - position.initial.x }
      : config;
  };

  const animateSlideWithCallback = (config: any) => {
    return {
      x: config.x,
      ...(slideAnimation?.(position, config.slideIndex) || {})
    };
  };

  return (
    <CarouselContainer ref={wrapperRef} className={className}>
      <CarouselSlides
        animate={{ x: `${-100 * viewIndex}%` }}
        transition={{
          x: {
            duration: 0.4,
            stiffness: 2000,
            damping: 400
          },
          ...slideContainerTransition
        }}
        onClickCapture={resetState}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseLeave={resetState}
        onTouchStart={onMouseDown}
        onTouchEnd={onMouseUp}
        onTouchMove={onMouseMove}
      >
        {React.Children.map(slides, (child, index) => {
          const animate = animateSlide(index);

          return (
            <CarouselSlide
              key={`slide-${index}`}
              animate={animate}
              transition={slideTransition}
            >
              {child}
            </CarouselSlide>
          );
        })}
      </CarouselSlides>
    </CarouselContainer>
  );
}
