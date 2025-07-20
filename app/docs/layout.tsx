import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { ThemeProvider } from 'next-themes'
import "./docs.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      disableThemeSwitch={true}
    searchToggle={{
      enabled: false
    }} tree={source.pageTree} >
      <ThemeProvider> {children} </ThemeProvider>
    </DocsLayout>
  );
}


