import styled from 'styled-components';
import { theme } from '../theme';
import { space, maxWidth } from 'styled-system';

const StyledContainer = styled.div`
  ${maxWidth}
  ${space}
`;

const ContainerStyles = {
  margin: '0 auto',
  width: '100%',
  maxWidth: theme.container
};

export const Container = ({ children }) => (
  <StyledContainer {...ContainerStyles}>{children}</StyledContainer>
);
