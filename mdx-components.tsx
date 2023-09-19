/**
 * mdxをpageにするために必要なファイル
 * @see https://nextjs.org/docs/app/building-your-application/configuring/mdx
 */
import type { MDXComponents } from 'mdx/types';

import { CodeBlock } from '@/components/CodeBlock';
import { ShortCode } from '@/components/ShortCode';

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="text-2xl font-bold"># {children}</h1>,
    h2: ({ children }) => (
      <h2 className="border-b text-xl font-bold">## {children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-lg font-bold">### {children}</h3>,
    a: ({ children, href }) => {
      const isExternal = href?.startsWith('http');

      return (
        <a
          className="px-1 underline"
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => <ShortCode>{children as string}</ShortCode>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pre: ({ children: { props } }: any) => {
      const { children, className } = props;

      return (
        <CodeBlock language={className?.replace('language-', '')}>
          {children as string}
        </CodeBlock>
      );
    },
    ...components,
  };
}
