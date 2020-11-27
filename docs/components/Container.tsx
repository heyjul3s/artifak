import { theme } from '../theme';
import { createBlockComponents } from 'artifak';

const settings = {
  Container: {
    styles: {
      margin: '0 auto',
      maxWidth: theme.container
    }
  }
};

export const { Container } = createBlockComponents<typeof settings>(settings);
