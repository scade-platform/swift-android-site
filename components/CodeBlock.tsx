'use client'; // if using Next.js app directory

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import gradle from 'react-syntax-highlighter/dist/esm/languages/hljs/gradle';
import kotlin from 'react-syntax-highlighter/dist/esm/languages/hljs/kotlin';
import './CodeBlock.css';

SyntaxHighlighter.registerLanguage('gradle', gradle);
SyntaxHighlighter.registerLanguage('kotlin', kotlin);

export default function CodeBlock({code , language }: { code: string, language: string }) {
  return (
    <SyntaxHighlighter language={language} style={a11yLight} className="code-block text-left rounded-xl my-4 focus-visible:outline-hidden font-(family-name:--font-geist-mono)">
      {code}
    </SyntaxHighlighter>
  );
}
