import { Paragraph } from '../../components/Typography';
import { Syntax } from '../../components/Code/Syntax';
import { List } from '../../components/List';
import {
  createTypographComponentsExampleUsage,
  createTypographyComponentsDemo,
  fontWeightExampleUsage
} from './examples';
import { HR } from '../../components/Global/HR';
import { Doc } from '../../components/Article';
import { APIheading } from '../../components/APIheading';

export function Typography() {
  return (
    <Doc title="Typography">
      <TypographyContent />
    </Doc>
  );
}

export function TypographyContent() {
  return (
    <>
      <Paragraph>
        The typography library offers utilities to help you scaffold your React
        typography components which include...
      </Paragraph>

      <List
        data={['createTypographyComponents', 'fluidSizing', 'fontWeight']}
      />

      <HR />

      <APIheading
        name="createTypographyComponents"
        params={{ styles: 'CSSobject' }}
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

      <HR />

      <APIheading name="fontWeight" />
      <Paragraph>
        fontWeight is essentially just a constant. Nothing special here. This is
        just to provide a fully typed and ready-to-use constant for usage and or
        to simply add to your styles theme. Simply import this to use.
      </Paragraph>
      <Syntax>{fontWeightExampleUsage}</Syntax>
    </>
  );
}
