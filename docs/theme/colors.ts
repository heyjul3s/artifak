import { Property } from 'csstype';

export enum NeutralColorKeys {
  BLACK = 'black',
  WHITE = 'white',
  DEEP_GREY = 'deepGrey',
  GREY = 'grey',
  LIGHT_GREY = 'lightGrey',
  EXTRA_LIGHT_GREY = 'extraLightGrey'
}

export type NeutralColors = {
  [key in NeutralColorKeys]: Property.Color;
};

const neutralColors = {
  [NeutralColorKeys.BLACK]: '#231F20',
  [NeutralColorKeys.WHITE]: '#FFF',
  [NeutralColorKeys.DEEP_GREY]: '#4A4A4D',
  [NeutralColorKeys.GREY]: '#565659',
  [NeutralColorKeys.LIGHT_GREY]: '#939399',
  [NeutralColorKeys.EXTRA_LIGHT_GREY]: '#D0D0D9'
};

export enum ThemeColorKeys {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LINK = 'link',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  HEADING = 'heading',
  TEXT = 'text',
  DISABLED = 'disabled',
  BORDER = 'border'
}

export type ThemeColors = {
  [key in ThemeColorKeys]: Property.Color;
};

const themeColors = {
  [ThemeColorKeys.PRIMARY]: '#F15E22',
  [ThemeColorKeys.SECONDARY]: '#F6161F',
  [ThemeColorKeys.LINK]: neutralColors[NeutralColorKeys.DEEP_GREY],
  [ThemeColorKeys.SUCCESS]: '#2D9583',
  [ThemeColorKeys.ERROR]: '#E04C43',
  [ThemeColorKeys.TEXT]: neutralColors[NeutralColorKeys.GREY],
  [ThemeColorKeys.DISABLED]: '#C6C6CC',
  [ThemeColorKeys.BORDER]: neutralColors[NeutralColorKeys.EXTRA_LIGHT_GREY]
};

export type Colors = ThemeColors & NeutralColors;

export const colors: Partial<Colors> = {
  ...themeColors,
  ...neutralColors
};
