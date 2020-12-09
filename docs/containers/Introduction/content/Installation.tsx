import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../../components/Typography';
import { Syntax } from '../../../components/Code/Syntax';

export function Installation() {
  return <InstallationInstructions />;
}

export function InstallationInstructions() {
  return (
    <InstallationInstructionsContainer>
      <Syntax
        showLineNumbers={false}
        language="bash"
      >{`yarn add artifak`}</Syntax>

      <Paragraph m={0} pl={'1em'} pr={'1em'}>
        or
      </Paragraph>

      <Syntax
        showLineNumbers={false}
        language="bash"
      >{`npm install artifak`}</Syntax>
    </InstallationInstructionsContainer>
  );
}

const InstallationInstructionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints[1]}) {
      flex-direction: row;
    }
  `}
`;
