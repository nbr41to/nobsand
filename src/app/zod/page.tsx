'use client';

import type { ZodError, ZodFormattedError } from 'zod';

import { Button } from '@mantine/core';
import { useState } from 'react';
import { z } from 'zod';

import { JsonViewer } from '@/components/JsonViewer';

const schema = z.object({
  string: z.string(), // stringじゃないとダメ
  coercionString: z.coerce.string(), // stringじゃなくてもstringに変換してくれる
  number: z.number(),
  coercionNumber: z.coerce.number(), // numberにしてくれるけど NaN になるのはエラー
  data: z.date(), // Date じゃないとダメ
  coercionDate: z.coerce.date(), // Date にしてくれるけど Invalid Date になるのはエラー
  literals: z.literal('literal'), // 'literal' じゃないとダメ
});
type Data = z.infer<typeof schema>;

const data = {
  string: 'string',
  coercionString: () => {}, // 123, new Date(), true, object, array, null, undefined, Symbol() など
  number: 123,
  coercionNumber: '123', // 'a123' はエラー
  data: new Date(),
  coercionDate: '2021-01-01', // '2021-01-01T00:00:00.000Z' になる
  literals: 'literal',
};

export default function ZodPage() {
  const [parsed, setParsed] = useState<Data>();
  const [errors, setErrors] = useState<ZodError>();
  const [formattedErrors, setFormattedErrors] =
    useState<ZodFormattedError<Data>>();

  const parse = () => {
    try {
      const parsed = schema.parse(data);

      setErrors(undefined);
      setParsed(parsed);
    } catch (error) {
      setParsed(undefined);
      setErrors(error as ZodError);
      setFormattedErrors((error as ZodError).format());
    }
  };

  return (
    <div>
      <div>
        <Button onClick={parse}>parse</Button>
        {parsed && (
          <div className="py-4">
            <p className="font-bold">Parsed data</p>
            <JsonViewer data={parsed} />
          </div>
        )}

        {errors && (
          <div className="py-4">
            <p className="font-bold text-red-500">
              Parse Error (Validation Error)
            </p>
            <JsonViewer data={errors} />
            <p className="font-bold text-red-500">
              Formatted Error <code>(error as ZodError).format()</code>
            </p>
            <JsonViewer data={formattedErrors} />
          </div>
        )}
      </div>
    </div>
  );
}
