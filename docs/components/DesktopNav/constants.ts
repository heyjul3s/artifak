import { LinkItems } from './typings';

export const links: LinkItems = [
  {
    component: 'Home',
    name: 'Home'
  },
  {
    component: 'GettingStarted',
    name: 'Getting Started'
  },
  {
    component: 'Components',
    name: 'Components',
    children: [
      {
        component: 'Block',
        name: 'Block'
      },
      {
        component: 'Flex',
        name: 'Flex'
      },
      {
        component: 'Grid',
        name: 'Grid'
      },
      {
        component: 'Imagery',
        name: 'Imagery'
      },
      {
        component: 'Typography',
        name: 'Typography'
      }
    ]
  },
  {
    component: 'Utilities',
    name: 'Utilities',
    children: [
      {
        component: 'Media',
        name: 'Media'
      },
      {
        component: 'Generator',
        name: 'Generator'
      }
    ]
  },
  {
    component: 'Cusomisation',
    name: 'Cusomisation'
  },
  {
    component: 'Variants',
    name: 'Variants'
  }
];
