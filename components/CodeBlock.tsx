'use client'; // if using Next.js app directory

import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './CodeBlock.css';

export default function CodeBlock({code , language }: { code: string, language: string }) {
  return (
    <SyntaxHighlighter language={language} style={a11yLight} className="code-block text-left rounded-xl my-4 focus-visible:outline-none font-[family-name:var(--font-geist-mono)]">
      {code}
    </SyntaxHighlighter>
  );
}
