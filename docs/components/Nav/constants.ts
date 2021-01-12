import { LinkItems } from './typings';

export const links: LinkItems = {
  Home: {
    route: '/',
    component: 'Home',
    name: 'Home'
  },
  Usage: {
    component: 'Usage',
    name: 'Usage',
    mobileNavIndex: 0,
    children: [
      {
        route: '/docs?content=getting-started',
        component: 'GettingStarted',
        name: 'Getting Started'
      },
      {
        route: '/docs?content=customisation',
        component: 'Cusomisation',
        name: 'Cusomisation'
      }
      // {
      //   route: '/docs?content=variants',
      //   component: 'Variants',
      //   name: 'Variants'
      // }
    ]
  },
  Components: {
    component: 'Components',
    name: 'Components',
    mobileNavIndex: 1,
    children: [
      // {
      //   route: '/docs?content=block',
      //   component: 'Block',
      //   name: 'Block'
      // },
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
  Utilities: {
    component: 'Utilities',
    name: 'Utilities',
    mobileNavIndex: 2,
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
      },
      {
        route: '/docs?content=fluidsizing',
        component: 'FluidSizing',
        name: 'Fluid Sizing'
      }
    ]
  },
  Hooks: {
    component: 'Hooks',
    name: 'Hooks',
    mobileNavIndex: 3,
    children: [
      {
        route: '/docs?content=usematchmedia',
        component: 'UseMatchMedia',
        name: 'useMatchMedia'
      },
      {
        route: '/docs?content=usewindowsize',
        component: 'Usewindowsize',
        name: 'useWindowSize'
      }
    ]
  }
};
