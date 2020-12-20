import { TargetAndTransition, Transition } from 'framer-motion';

export type SlidePosition = {
  initial?: { x: number; y: number };
  current?: { x: number; y: number };
};

export type IsMouseDown = boolean;

export type MovementDirection = 'left' | 'right' | '';

export type SliderProps = {
  onChangeViewIndex?: (index: number) => void;
  viewIndex?: number;
  disabled?: boolean;
  slideAnimation?: (
    position: SlidePosition,
    slideIndex: number
  ) => TargetAndTransition;
  slideTransition?: Transition;
  slideContainerTransition?: Transition;
  className?: string;
  disableSlideDiff?: boolean;
  wrapperRef?: React.Ref<HTMLDivElement>;
  children?:
    | ((position: SlidePosition) => React.ReactElement | React.ReactElement[])
    | React.ReactElement
    | React.ReactElement[];
};
