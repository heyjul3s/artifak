import { H1, Paragraph, LargeLead } from '../components/Typography';
import { Syntax, Params } from '../components/Syntax';
import { List } from '../components/List';
import {
  createTypographComponentsExampleUsage,
  createTypographyComponentsDemo
} from '../codeExamples/typography/createTypographyComponents';

import { fluidSizingExampleUsage } from '../codeExamples/typography/fluidSizing';
import { fontWeightExampleUsage } from '../codeExamples/typography/fontWeight';

export function Typography() {
  return (
    <>
      <H1>Typography</H1>

      <Paragraph>
        The typography library offers utilities to help you scaffold your React
        typography components which include...
      </Paragraph>

      <List
        data={['createTypographyComponents', 'fluidSizing', 'fontWeight']}
      />

      <LargeLead>createTypographyComponents</LargeLead>

      <Params
        properties={{
          styles: 'object'
        }}
      />

      <Paragraph>
        As implied, this utility function will generate typography components
        for you. All that is needed is to pass a styles object to the function
        with the object keys being the name of what you would like to name your
        component as. Below is an example.
      </Paragraph>

      <Syntax>{createTypographComponentsExampleUsage}</Syntax>

      <Paragraph>
        Note that it is essential to specify the <strong>"as"</strong> property
        in your styles object to render the component as the HTML element that
        is intended. After generating the components, you can use it as you
        normally would...
      </Paragraph>

      <Syntax>{createTypographyComponentsDemo}</Syntax>

      <LargeLead>fluidSizing</LargeLead>
      <Params
        properties={{
          minElementSize: 'number',
          maxElementSize: 'number',
          minViewportWidth: 'number',
          maxViewportWidth: 'number'
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

      <LargeLead>fontWeight</LargeLead>

      <Paragraph>
        fontWeight is essentially just a constant. Nothing special here. This is
        just to provide a fully typed and ready-to-use constant for usage and or
        to simply add to your styles theme. Simply import this to use.
      </Paragraph>

      <Syntax>{fontWeightExampleUsage}</Syntax>
    </>
  );
}
