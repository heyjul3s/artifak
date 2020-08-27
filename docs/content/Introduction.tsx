import { H1, H2, Paragraph } from '../components/Typography';
import { Syntax } from '../components/Syntax';
import { List } from '../components/List';

export function Introduction() {
  return (
    <>
      <H1>Introduction</H1>

      <Paragraph>
        Artifak is a library that comprises of basic UI primitives and utility
        functions to help you build React application system components. The aim
        is to attempt to provide basic building blocks with sensible defaults to
        help you build your components so that you don't have to fight your
        teammates ala trial by combat on how to scaffold your system components.
        No lives were lost in creating this library. No tears were shed either
        as boys don't cry. We simply just sweat through our eyes occassionally.
      </Paragraph>

      <Paragraph>
        This library is written in Typescript and built on styled-system.
      </Paragraph>

      <H2>Installation</H2>

      <Paragraph>To install for Yarn, simply run</Paragraph>

      <Syntax>{`yarn add artifak`}</Syntax>

      <Paragraph>To install for NPM, simply run</Paragraph>

      <Syntax>{`npm install artifak`}</Syntax>

      <Paragraph>
        The Artifak library is also available as stand-alone packages
      </Paragraph>

      <List data={['@artifak/block', '@artifak/grid', '@artifak/typography']} />

      <Paragraph>
        Additional components are also in the pipeline namely Flex, Image and
        others. More to come.
      </Paragraph>
    </>
  );
}
