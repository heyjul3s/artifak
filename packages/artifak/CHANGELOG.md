# artifak

## 2.0.2

### Patch Changes

- Fix missing style for FlexCol
- Updated dependencies [undefined]
  - @artifak/flex@1.1.7

## 2.0.1

### Patch Changes

- Fix flex basis for FlexCol
- Correct width output for Flex
- Fix Media regex to include px units
- Add window check for useMatchMedia
- Typings fix for Generator
- Updated dependencies [undefined]
  - @artifak/component-generator@2.0.1
  - @artifak/flex@1.1.6
  - @artifak/media@1.0.2
  - @artifak/usematchmedia@1.0.2
  - @artifak/usewindowsize@1.0.2

## 2.0.0

### Major Changes

- New breaking API changes for Generator package
- New breaking API changes to Typography package
- Moved fluidSizing as independent package from typography package
- Additional useMatchMedia hook for media queries
- Additional useWindowSize hook for querying window sizes
- Additional Media package utility for media queries

### Patch Changes

- Updated dependencies [undefined]
  - @artifak/component-generator@2.0.0
  - @artifak/typography@2.0.0
  - @artifak/fluidsizing@1.0.1
  - @artifak/media@1.0.1
  - @artifak/usematchmedia@1.0.1
  - @artifak/usewindowsize@1.0.1
  - @artifak/block@1.1.5
  - @artifak/flex@1.1.5
  - @artifak/grid@1.1.5
  - @artifak/imagery@1.0.7

## 1.1.5

### Patch Changes

- Fix key type error in createTypographyComponents
- Updated dependencies [undefined]
  - @artifak/typography@1.1.5

## 1.1.4

### Patch Changes

- remove babel for build process and added terser for minification
- remove usage of type keyword for type imports/exports for lint support
- move files of packages to src dir for easier handling
- add coverage, bundlesize check for Travis CI
- add badges to readme
- add coverage script

- Updated dependencies [undefined]
  - @artifak/block@1.1.4
  - @artifak/component-generator@1.1.4
  - @artifak/flex@1.1.4
  - @artifak/grid@1.1.4
  - @artifak/imagery@1.0.6
  - @artifak/typography@1.1.4

## 1.1.3

### Patch Changes

- @artifak/bundler dependency version bump in all packages
- Fix invalid fontWeight prop key in Typography module
- Updated dependencies [undefined]
  - @artifak/block@1.1.3
  - @artifak/component-generator@1.1.3
  - @artifak/flex@1.1.3
  - @artifak/grid@1.1.3
  - @artifak/imagery@1.0.5
  - @artifak/typography@1.1.3

## 1.1.2

### Patch Changes

- Build fix
- Updated dependencies [undefined]
  - @artifak/block@1.1.2
  - @artifak/component-generator@1.1.2
  - @artifak/flex@1.1.2
  - @artifak/grid@1.1.2
  - @artifak/imagery@1.0.4
  - @artifak/typography@1.1.2

## 1.1.1

### Patch Changes

- replaced rollup-plugin-typescript2 to fix typescript build error
- update build configuration to exclude styled-components and styled system
- update build output configuration to use dir to work with @rollup/plugin-typescript
- update jest config to exclude \*.d.ts files
- fix types property in package.json

- Updated dependencies
  - @artifak/block@1.1.1
  - @artifak/component-generator@1.1.1
  - @artifak/flex@1.1.1
  - @artifak/grid@1.1.1
  - @artifak/imagery@1.0.3
  - @artifak/typography@1.1.1

## 1.1.0

### Minor Changes

- Add Imagery component
- Update Readme
- Storybook update

### Patch Changes

- Updated dependencies
  - @artifak/imagery@1.0.2

## 1.0.8

### Patch Changes

- generator bundle fix
- vulnerability patches
- reduced bundle size
- Updated dependencies
  - @artifak/block@1.0.6
  - @artifak/component-generator@1.0.4
  - @artifak/flex@1.0.4
  - @artifak/grid@1.0.8
  - @artifak/typography@1.0.8

## 1.0.7

### Patch Changes

- fix type exports: Flex, Grid, component-generator
- update types for Typography
- added new CSS properties for Typography
- add package namespace to bundler

- Updated dependencies
  - @artifak/component-generator@1.0.3
  - @artifak/flex@1.0.3
  - @artifak/grid@1.0.7
  - @artifak/typography@1.0.7

## 1.0.6

### Patch Changes

- Minor Patch - Cleanup style props to generator, flex, grid, typography
- Updated dependencies
  - @artifak/block@1.0.5
  - @artifak/component-generator@1.0.2
  - @artifak/flex@1.0.2
  - @artifak/grid@1.0.6
  - @artifak/typography@1.0.6

## 1.0.5

### Patch Changes

- Added component generator
- New flex component
- Additional types
- Updated dependencies
  - @artifak/block@1.0.4
  - @artifak/component-generator@1.0.1
  - @artifak/flex@1.0.1
  - @artifak/grid@1.0.5
  - @artifak/typography@1.0.5

## 1.0.4

### Patch Changes

- fix type exports
- Updated dependencies
  - @artifak/block@1.0.3
  - @artifak/grid@1.0.4
  - @artifak/typography@1.0.4

## 1.0.3

### Patch Changes

- Bug fix for fontWeight
- Update Grid to accept media query values
- Refactor bundler
- Updated dependencies
  - @artifak/grid@1.0.3
  - @artifak/typography@1.0.3

## 1.0.2

### Patch Changes

- Export updates
- Type Updates

- Updated dependencies
  - @artifak/block@1.0.2
  - @artifak/grid@1.0.2
  - @artifak/typography@1.0.2

## 1.0.1

### Patch Changes

- Updated dependencies
  - @artifak/block@1.0.1
  - @artifak/grid@1.0.1
  - @artifak/typography@1.0.1
