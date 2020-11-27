import { createBlockComponents } from 'artifak';

const settings = {
  Section: {
    styles: {
      marginBottom: ['1.5em', '5em'],
      as: 'section'
    }
  }
};

export const { Section } = createBlockComponents<typeof settings>(settings);
