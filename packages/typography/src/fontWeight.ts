enum FontWeightKeys {
  THIN = 'thin',
  EXTRA_LIGHT = 'extraLight',
  LIGHT = 'light',
  REGULAR = 'regular',
  MEDIUM = 'medium',
  SEMI_BOLD = 'semiBold',
  BOLD = 'bold',
  EXTRA_BOLD = 'extraBold',
  BLACK = 'black'
}

type FontWeight = {
  [key in FontWeightKeys]: number;
};

export const fontWeight = Object.keys(FontWeightKeys).reduce(
  (acc: FontWeight, key, i) => {
    const index = (i += 1);
    acc[key as keyof FontWeight] = index * 100;

    return acc;
  },
  {} as FontWeight
);
