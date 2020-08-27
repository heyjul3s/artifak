import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import coy from 'react-syntax-highlighter/dist/cjs/styles/prism/coy';
import { SmallParagraph, Strong } from '../components/Typography';

const customCoy = {
  ...coy,
  'code[class*="language-"]': {
    ...coy['code[class*="language-"]'],
    fontFamily: null
  },
  'pre[class*="language-"]': {
    ...coy['pre[class*="language-"]'],
    fontFamily: null
  }
};

type Props = {
  language?: string;
  showLineNumbers?: boolean;
  children: React.ReactChild | React.ReactChildren;
};

export function Syntax({
  children,
  showLineNumbers = true,
  language = 'typescript'
}: Props) {
  return (
    <SyntaxHighlighter
      showLineNumbers={showLineNumbers}
      language={language}
      style={customCoy}
      customStyle={{
        backgroundColor: '#fafafa',
        borderRadius: 4,
        fontSize: 13,
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        padding: '1em',
        margin: '1em 0 2em'
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}

export const Params = ({ properties }: any) => {
  const propertyKeys = Object.keys(properties);

  return (
    <>
      <SmallParagraph>
        (
        {propertyKeys.map((key, i) => {
          const comma = i !== propertyKeys.length - 1 ? ', ' : '';

          return (
            <span>
              <Strong>{key}</Strong>
              {`: ${properties[key]}${comma}`}
            </span>
          );
        })}
        )
      </SmallParagraph>
    </>
  );
};
