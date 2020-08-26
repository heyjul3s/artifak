import { theme } from '../theme';
import { createBlockComponents } from 'artifak';

const styles = {
  Container: {
    margin: '0 auto',
    maxWidth: theme.container
  }
};

export const { Container } = createBlockComponents<typeof styles>(styles);
