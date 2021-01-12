import React from 'react';
import { Paragraph } from '../../../../components/Typography';
import { Section } from '../../../../components/Section';
import { SectionTitle } from '../../../../components/SectionTitle';
import {
  BuildIcon,
  ModularIcon,
  ExtensibleIcon,
  TSIcon,
  LightweightIcon,
  SimpleIcon
} from './Icons';
import { FeaturesGrid, FeatureItem } from './components';

const IntroductionContent = [
  {
    title: 'Freedom To Build',
    content:
      'Made in mind to provide a solid foundation to build, the rest is up to you.',
    Icon: BuildIcon
  },
  {
    title: 'Modular',
    content:
      'Distributed packages allows you to install only the packages that you want.',
    Icon: ModularIcon
  },
  {
    title: 'Extensible',
    content: 'Add custom CSS properties and customise to your needs.',
    Icon: ExtensibleIcon
  },
  {
    title: 'Typescript',
    content:
      "Written in Typescript so you don't have to tame another idiosyncratic JS beast.",
    Icon: TSIcon
  },
  {
    title: 'Lightweight',
    content:
      'A mere minified 4.7kb of goodness to help you build your system components.',
    Icon: LightweightIcon
  },
  {
    title: 'Simple',
    content: 'Tools at the ready with simple and easy to use interfaces.',
    Icon: SimpleIcon
  }
];

export function Features() {
  return (
    <Section>
      <SectionTitle title="Features" />
      <Paragraph textAlign="center" mb="2em">
        Here’s why you want to consider and use the Artifak UI primitives
        library.
      </Paragraph>

      <FeaturesGrid columnLength={[1, 2, 2, 3]}>
        {IntroductionContent.map(({ title, content, Icon }, i) => {
          return (
            <FeatureItem
              key={`feature-${i}`}
              title={title}
              content={content}
              Icon={Icon}
            />
          );
        })}
      </FeaturesGrid>
    </Section>
  );
}
