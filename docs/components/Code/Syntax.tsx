import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import coy from 'react-syntax-highlighter/dist/cjs/styles/prism/coy';
import { Paragraph, Strong } from '../../components/Typography';

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
        fontSize: '1rem',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        padding: '1em 1em 1em 0',
        margin: '1em 0 2em',
        border: '1px solid rgba(0,0,0,0.1)'
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
