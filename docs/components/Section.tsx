import { createBlockComponents } from 'artifak';

const styles = {
  Section: {
    marginBottom: ['1.5em', '5em'],
    as: 'section'
  }
};

export const { Section } = createBlockComponents<typeof styles>(styles);
