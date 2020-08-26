import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import { Layout } from '../components/Layout';
import { H1, H2, Paragraph } from '../components/Typography';

export default function Home() {
  return (
    <Layout>
      <>
        <H1>Introduction</H1>

        <Paragraph>
          Artifak is a library that comprises of basic UI primitives and utility
          functions to help you build React application system components. The
          aim is to attempt to provide basic building blocks with sensible
          defaults to help you build your components so that you don't have to
          fight your teammates ala trial by combat on how to scaffold your
          system components. No lives were lost in creating this library. No
          tears were shed either as boys don't cry. We simply just sweat through
          our eyes occassionally.
        </Paragraph>

        <H2>Installation</H2>

        <Paragraph>To install for Yarn, simply run</Paragraph>

        <SyntaxHighlighter
          language="typescript"
          style={atomDark}
          customStyle={{ padding: '1em', margin: '1em 0' }}
        >{`yarn add artifak`}</SyntaxHighlighter>

        <Paragraph>To install for NPM, simply run</Paragraph>

        <SyntaxHighlighter
          language="typescript"
          style={atomDark}
          customStyle={{ padding: '1em', margin: '1em 0' }}
        >{`npm install artifak`}</SyntaxHighlighter>

        <Paragraph>
          The Artifak library is also available as stand-alone packages
        </Paragraph>

        <ul>
          <li>@artifak/block</li>
          <li>@artifak/grid</li>
          <li>@artifak/typography</li>
        </ul>

        <Paragraph>
          Additional components are also in the pipeline namely Flex, Image and
          others. More to come.
        </Paragraph>
      </>
    </Layout>
  );
}
