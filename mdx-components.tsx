/**
 * mdxをpageにするために必要なファイル
 * @see https://nextjs.org/docs/app/building-your-application/configuring/mdx
 */

import type { MDXComponents } from 'mdx/types';
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="py-2 text-2xl">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="border-b border-slate-900 py-2 text-xl dark:border-white">
        {children}
      </h2>
    ),
    ...components,
  };
}
