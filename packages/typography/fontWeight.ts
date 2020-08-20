enum EFontWeightKeys {
  THIN = 'thin',
  EXTRA_LIGHT = 'extraLight',
  LIGHT = 'light',
  REGULAR = 'regular',
  MEDIUM = 'medium',
  SEMI_BOLD = 'semiBold',
  BOLD = 'bold',
  EXTRA_BOLD = 'extraBold',
  BLACK = 'black',
}

type TFontWeight = {
  [key in EFontWeightKeys]: number;
};

export const fontWeight = Object.keys(EFontWeightKeys).reduce((acc, key, i) => {
  const index = i === 0 ? 1 : i;
  acc[key] = index * 100;

  return acc;
}, {} as TFontWeight);
