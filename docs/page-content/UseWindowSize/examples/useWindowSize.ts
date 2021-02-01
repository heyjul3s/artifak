export const useWindowSizeExampleUsage = `
  import { useWindowSize } from 'artifak';
  import { ExampleMobile } from './ExampleMobile';
  import { ExampleDesktop } from './ExampleDesktop';

  export function Nav() {
    const windowSize = useWindowSize();

    return (
      <>
        {windowSize.innerWidth < 1000 && <ExampleMobile />}
        <ExampleDesktop />
      </>
    )
  }
`;
