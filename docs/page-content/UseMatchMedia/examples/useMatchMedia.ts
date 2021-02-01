export const useMatchMediaExampleUsage = `
  import { useMatchMedia } from 'artifak';
  import { ExampleMobile } from './ExampleMobile';
  import { ExampleDesktop } from './ExampleDesktop';

  export function Nav() {
    const matchedMobile = useMatchMedia('(hover: none)');

    return (
      <>
        {matchedMobile && <ExampleMobile />}
        {!matchedMobile && <ExampleDesktop />}
      </>
    )
  }
`;
