import { H1, H2, Paragraph } from '../components/Typography';
import { Syntax } from '../components/Syntax';
import { List } from '../components/List';

export function Introduction() {
  return (
    <>
      <H1>Introduction</H1>

      <Paragraph>
        Artifak is a library that comprises of basic UI primitives and utility
        functions to help you build your React application system components.
        Built with Typescript and Styled System, the aim is to attempt to
        provide basic building blocks with sensible defaults so that you don't
        have to fight your teammates ala trial by combat in regards to some
        minor/trivial details when scaffolding your project. No lives were lost
        in creating this library. No tears were shed either as boys don't cry.
        We simply just sweat through our eyes occassionally.
      </Paragraph>

      <Paragraph>
        As a TLDR, think of it as an extra thin layer on top of Styled System
        with some bonus utility functions so knowledge in Styled Components and
        Styled System required.{' '}
      </Paragraph>

      <H2>Installation</H2>

      <Paragraph>To install for Yarn, simply run</Paragraph>

      <Syntax
        showLineNumbers={false}
        language="bash"
      >{`yarn add artifak`}</Syntax>

      <Paragraph>To install for NPM, simply run</Paragraph>

      <Syntax
        showLineNumbers={false}
        language="bash"
      >{`npm install artifak`}</Syntax>

      <Paragraph>
        The Artifak library is also available as stand-alone packages
      </Paragraph>

      <List
        data={[
          '@artifak/block',
          '@artifak/grid',
          '@artifak/typography',
          '@artifak/flex'
          // '@artifak/component-generator'
        ]}
      />

      <Paragraph>More to come. Stay tuned.</Paragraph>
    </>
  );
}
