export enum ContainerSize {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl'
}

export type Container = {
  [key in ContainerSize]: number;
};

const containerWidth = {
  [ContainerSize.SM]: '540px',
  [ContainerSize.MD]: '720px',
  [ContainerSize.LG]: '960px',
  [ContainerSize.XL]: '1140px'
};

export const container: string[] = [
  containerWidth[ContainerSize.SM],
  containerWidth[ContainerSize.MD],
  containerWidth[ContainerSize.LG],
  containerWidth[ContainerSize.XL]
];
