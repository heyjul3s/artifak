import { HR, Doc, Paragraph, Syntax, APIheading } from '@components';
import { fluidSizingExampleUsage } from './examples';

export function FluidSizing() {
  return (
    <Doc title="fluidSizing">
      <FluidSizingContent />
    </Doc>
  );
}

export function FluidSizingContent() {
  return (
    <>
      <Paragraph>
        A fluid sizing utility function that creates a calc value based off of
        the min and max values provided.{' '}
      </Paragraph>

      <HR />

      <APIheading
        name="fluidSizing"
        params={{
          minElementSize: 'number',
          maxElementSize: 'number',
          minViewportWidth: 'number',
          maxViewportWidth: 'number',
          unit: `em | rem | px`
        }}
      />

      <Paragraph>
        This function writes a CSS rule that allows for fluid sizing.
        Essentially, this eliminates the need for media queries as the element
        will resize in accordance to the viewport constraints that you provide.
        To use this, specify the minimum size and maximum size of your element
        and also the minimum and maximum size of the viewport width that you
        intend to use as constraints. Below is an example of how you may use it.
      </Paragraph>

      <Syntax>{fluidSizingExampleUsage}</Syntax>

      <br />
    </>
  );
}
