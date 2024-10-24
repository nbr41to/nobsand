'use client';

import type { FC } from 'react';

import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
};

export const Basic: FC = () => {
  const [submitValues, setSubmitValues] = useState<FormValues>();
  const { register, handleSubmit } = useForm<FormValues>({
    shouldUseNativeValidation: true,
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitValues(data);
  };

  /* count render */
  const renderCount = useRef<number>(0);
  renderCount.current = renderCount.current + 1;

  return (
    <div>
      <h2 className="text-lg font-bold">Basic usage</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name</label>
        <input className="ml-2 rounded border" {...register('firstName')} />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input className="ml-2 rounded border" {...register('lastName')} />
        <br />
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
