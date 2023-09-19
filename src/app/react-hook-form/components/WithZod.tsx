'use client';

import type { FC } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput } from '@mantine/core';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  firstName: z
    .string()
    .min(2, 'too short.(zod error)')
    .max(10, 'too long.(zod error)'),
  lastName: z
    .string()
    .min(2, 'too short.(zod error)')
    .max(10, 'too long.(zod error)'),
});
type FormValues = z.infer<typeof schema>;

export const WithZod: FC = () => {
  const [submitValues, setSubmitValues] = useState<FormValues>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    shouldUseNativeValidation: false,
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitValues(data);
  };

  /* count render */
  const renderCount = useRef<number>(0);
  renderCount.current = renderCount.current + 1;

  return (
    <div>
      <h2 className="text-lg font-bold">With zod usage</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="First Name"
          error={errors.firstName?.message}
          {...register('firstName')}
        />
        <TextInput
          label="Last Name"
          error={errors.lastName?.message}
          {...register('lastName')}
        />
        <input className="rounded border p-2" type="submit" />
      </form>

      <p>renderCount: {renderCount.current}</p>

      <div>
        <p>submit values</p>
        <pre className="p-2 font-mono">
          <code>{JSON.stringify(submitValues, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};
