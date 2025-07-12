'use client'; // if using Next.js app directory

import { useEffect } from 'react';
import Prism from 'prismjs';
import './CodeBlock.css';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-swift';

export default function CodeBlock({code , language }: { code: string, language: string }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="text-left rounded-xl my-4 pl-12 focus-visible:outline-none font-[family-name:var(--font-geist-mono)] overflow-auto">
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
}
