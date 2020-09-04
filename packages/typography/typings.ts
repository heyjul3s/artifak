import CSS from 'csstype';
import { Theme, RequiredTheme, ResponsiveValue } from 'styled-system';
import { BaseComponentProps } from '@artifak/component-generator';

export interface TextDecorationProps<ThemeType extends Theme = RequiredTheme> {
  textDecoration?: ResponsiveValue<CSS.Property.TextDecoration, ThemeType>;
}

export interface TextIndentProps<ThemeType extends Theme = RequiredTheme> {
  textIndent?: ResponsiveValue<CSS.Property.TextIndent, ThemeType>;
}

export interface TextTransformProps<ThemeType extends Theme = RequiredTheme> {
  textTransform?: ResponsiveValue<CSS.Property.TextTransform, ThemeType>;
}

export interface TextOverflowProps<ThemeType extends Theme = RequiredTheme> {
  textOverflow?: ResponsiveValue<CSS.Property.TextOverflow, ThemeType>;
}

export interface WhiteSpaceProps<ThemeType extends Theme = RequiredTheme> {
  whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace, ThemeType>;
}

export interface WordBreakProps<ThemeType extends Theme = RequiredTheme> {
  wordBreak?: ResponsiveValue<CSS.Property.WordBreak, ThemeType>;
}

export interface WordSpacingProps<ThemeType extends Theme = RequiredTheme> {
  wordSpacing?: ResponsiveValue<CSS.Property.WordSpacing, ThemeType>;
}

type TypographyProps =
  | TextDecorationProps
  | TextIndentProps
  | TextTransformProps
  | TextOverflowProps
  | WhiteSpaceProps
  | WordBreakProps
  | WordSpacingProps;

export type TypographyBaseProps = BaseComponentProps & TypographyProps;
