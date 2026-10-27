/**
 * Remark plugin that resolves file-system-relative links in markdown to
 * absolute URL slugs. This allows links in docs to be written as file paths
 * (e.g. `../reference/platforms`) and have them resolve correctly regardless
 * of whether Astro serves pages with or without a trailing slash.
 *
 * Links that are already absolute (start with `/` or a protocol) or are
 * anchor-only (start with `#`) are left unchanged.
 */

import path from 'node:path';
import fs from 'node:fs';
import { visit } from 'unist-util-visit';

/**
 * @param {{ docsDir: string, slugBase: string }} opts
 */
export function remarkResolveLinks({ docsDir, slugBase }) {
  return function (tree, vfile) {
    const currentFile = vfile.path ?? vfile.history?.[vfile.history.length - 1];
    if (!currentFile) return;
    const currentDir = path.dirname(currentFile);

    visit(tree, 'link', (node) => {
      try {
        const href = node.url;
        // Leave absolute URLs, root-relative links, and anchor-only links alone
        if (!href || href.startsWith('http') || href.startsWith('/') || href.startsWith('#')) return;

        const [hrefPath, anchor] = href.split('#');
        if (!hrefPath) return;

        // Resolve the path relative to the current file's directory
        let resolved = path.resolve(currentDir, hrefPath);

        // If no extension, the link might point to a directory — try overview.md
        if (!path.extname(resolved)) {
          for (const ext of ['.md', '.mdx']) {
            if (fs.existsSync(resolved + ext)) break;
            const withOverview = path.join(resolved, 'overview' + ext);
            if (fs.existsSync(withOverview)) { resolved = path.join(resolved, 'overview'); break; }
          }
        }

        // Make relative to docs root and normalize separators
        const relative = path.relative(docsDir, resolved)
          .split(path.sep)
          .join('/');

        // Strip file extensions and trailing /index
        const slug = relative
          .replace(/\.(md|mdx)$/, '')
          .replace(/\/index$/, '');

        node.url = `/${slugBase}/${slug}` + (anchor ? `#${anchor}` : '');
      } catch {
        // Leave the link unchanged if resolution fails
      }
    });
  };
}
