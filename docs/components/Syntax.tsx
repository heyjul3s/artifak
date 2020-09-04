import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import coy from 'react-syntax-highlighter/dist/cjs/styles/prism/coy';
import { Paragraph, Strong } from '../components/Typography';

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
        fontSize: '1.2rem',
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

export const ParamsDescription = ({ label = '<props>', params }) => {
  return (
    <>
      <Paragraph display="inline-block">
        <Strong>
          <em>{label}</em>
        </Strong>
        &nbsp;
      </Paragraph>
      <Params params={params} />
    </>
  );
};

export const Params = ({ params }: any) => {
  const propertyKeys = Object.keys(params);

  return (
    <>
      <Paragraph display="inline-block">
        (
        {propertyKeys.map((key, i) => {
          const comma = i !== propertyKeys.length - 1 ? ', ' : '';

          return (
            <span>
              <Strong>{key}</Strong>
              {`: ${params[key]}${comma}`}
            </span>
          );
        })}
        )
      </Paragraph>
    </>
  );
};
