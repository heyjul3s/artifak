import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

export function Syntax({ children }) {
  return (
    <SyntaxHighlighter
      language="typescript"
      style={atomDark}
      customStyle={{ padding: '1em', margin: '1em 0' }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
