'use client';

import type { FC } from 'react';

import { useRef, useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
};

export const Context: FC = () => {
  const [submitValues, setSubmitValues] = useState<FormValues>();
  const methods = useForm<FormValues>({
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
      <h2 className="text-lg font-bold">Context usage</h2>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <NestedFormInput />
          <input className="rounded border p-2" type="submit" />
        </form>
      </FormProvider>

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

const NestedFormInput = () => {
  const { register } = useFormContext();

  return (
    <>
      <label htmlFor="firstName">First Name</label>
      <input className="ml-2 rounded border" {...register('firstName')} />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input className="ml-2 rounded border" {...register('lastName')} />
      <br />
    </>
  );
};
