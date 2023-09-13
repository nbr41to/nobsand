---
name: 'new page'
root: 'src/app'
output: '.'
ignore: []
questions:
  value: 'Please enter any text.'
---

# `{{ inputs.value | kebab }}/layout.tsx`

<!-- Layout -->

```tsx
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: '{{ inputs.value }} | nobsand',
};

export default function {{ inputs.value | pascal }}Layout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <PageHeader title="{{ inputs.value }}" pathname="{{ inputs.value | kebab }}" />
      {children}
    </div>
  );
}
```

<!-- Page -->

# `{{ inputs.value | kebab }}/page.tsx`

```tsx
export default function {{ inputs.value | pascal }}Page() {
  return (
    <div>
      <h2>{/* content */}</h2>
    </div>
  );
}
```

<!-- Document -->

# `{{ inputs.value | kebab }}/doc/page.mdx`

```md
# {{ inputs.value }}

[Reference]()

## Overview

## 参考URL

-
```
