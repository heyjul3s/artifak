import { LinkItems } from './Desktop/typings';

export const links: LinkItems = [
  {
    route: '/',
    component: 'Home',
    name: 'Home'
  },
  {
    route: '/docs?content=getting-started',
    component: 'GettingStarted',
    name: 'Getting Started'
  },
  {
    component: 'Components',
    name: 'Components',
    children: [
      {
        route: '/docs?content=block',
        component: 'Block',
        name: 'Block'
      },
      {
        route: '/docs?content=flex',
        component: 'Flex',
        name: 'Flex'
      },
      {
        route: '/docs?content=grid',
        component: 'Grid',
        name: 'Grid'
      },
      {
        route: '/docs?content=imagery',
        component: 'Imagery',
        name: 'Imagery'
      },
      {
        route: '/docs?content=typography',
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
        route: '/docs?content=media',
        component: 'Media',
        name: 'Media'
      },
      {
        route: '/docs?content=generator',
        component: 'Generator',
        name: 'Generator'
      }
    ]
  },
  {
    route: '/docs?content=customisation',
    component: 'Cusomisation',
    name: 'Cusomisation'
  },
  {
    route: '/docs?content=variants',
    component: 'Variants',
    name: 'Variants'
  }
];
