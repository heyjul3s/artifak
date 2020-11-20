import React from 'react';
import styled from 'styled-components';
import { Grid, GridItem } from 'artifak';
import { H2, Paragraph } from '../../../components/Typography';
import { Section } from '../../../components/Section';
import { SectionTitle } from '../../../components/SectionTitle';

const modules = [
  {
    name: '@artifak/block',
    content:
      'Provides a basic building block suited for creation of container elements.'
  },
  {
    name: '@artifak/grid',
    content:
      'Grid components for building your own grid with some default grid column capabilities included.'
  },
  {
    name: '@artifak/typography',
    content:
      'Typography component generator with a few utilities thrown in for easier development experience.'
  },
  {
    name: '@artifak/flex',
    content:
      'Flex components that provides grid capabilities with FlexRow and FlexCol.'
  },
  {
    name: '@artifak/component-generator',
    content:
      'Generator for usage to further extend your styled components or create your own component generator.'
  },
  {
    name: '@artifak/imagery',
    content:
      'Due to varying different needs for imagery, Artifak Imagery component is simply a basic one.'
  },
  {
    name: '@artifak/media',
    content:
      'A Styled Component media query mixin with "AND" and "OR" support along with some newer supported media queries.'
  }
];

export function Modules() {
  return (
    <Section>
      <SectionTitle title="Modules" />
      <Paragraph textAlign="center" mb="2em">
        A list of available packages to use at your own discretion
      </Paragraph>

      <ModulesTable columnLength={[1, 2]}>
        {modules.map(({ name, content }, i) => {
          return (
            <ModuleRow key={`module-${i}`} name={name} content={content} />
          );
        })}
      </ModulesTable>
    </Section>
  );
}

const ModulesTable = styled(Grid)`
  max-width: 900px;
  margin: 0 auto;
`;

type ModuleRowProps = {
  name: string;
  content: string;
};

function ModuleRow({ name, content }: ModuleRowProps) {
  return (
    <ModuleItem>
      <ModuleItemName>
        <Paragraph color="white" fontWeight={900} m={0} p={0}>
          {name}
        </Paragraph>
      </ModuleItemName>

      <ModuleItemDescription>
        <Paragraph>{content}</Paragraph>
      </ModuleItemDescription>
    </ModuleItem>
  );
}

const ModuleItem = styled(GridItem)`
  ${({ theme }) => `
    position: relative;
    border: 1px solid ${theme.colors.primary};
    padding: 0 2em;
  `}
`;

const ModuleItemName = styled.div`
  ${({ theme }) => `
    display: block;
    margin-left: -2em;
    margin-right: -2em;
    margin-bottom: 1em;
    padding: 1.5em 0 1em;
    text-align: center;
    background: ${theme.colors.primary};
  `}
`;

const ModuleItemDescription = styled.div`
  display: block;
`;
