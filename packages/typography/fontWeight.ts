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
  console.log(i);
  const index = (i += 1);
  acc[key] = index * 100;

  return acc;
}, {} as TFontWeight);
