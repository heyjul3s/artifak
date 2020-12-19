import styled from 'styled-components';
import { motion, Transition } from 'framer-motion';

export const CarouselContainer = styled.div`
  display: flex;
  flex: 1 0 0%;
  position: relative;
  white-space: nowrap;
`;

export const CarouselSlides = styled(motion.div)<Transition>`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const CarouselSlide = styled(motion.div)`
  display: inline-flex;
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  white-space: normal;
  opacity: 1;
  transition: inherit;
`;
