'use client';

import type { FC } from 'react';

import { Button, TextInput } from '@mantine/core';
import { useRef, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

type FormValues = {
  title: string;
  variables: {
    key: string;
    value: string;
  }[];
};

export const FieldArray: FC = () => {
  const [submitValues, setSubmitValues] = useState<FormValues>();
  const { control, register, handleSubmit } = useForm<FormValues>({
    shouldUseNativeValidation: false,
    defaultValues: {
      title: '',
      variables: [
        {
          key: '',
          value: '',
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'variables',
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitValues(data);
  };

  /* count render */
  const renderCount = useRef<number>(0);
  renderCount.current = renderCount.current + 1;

  return (
    <div>
      <h2 className="text-lg font-bold">FieldArray usage</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput label="Title" {...register('title')} />
        <label className="text-sm">Variables</label>
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-end">
            <TextInput label="key" {...register(`variables.${index}.key`)} />
            <TextInput
              label="value"
              {...register(`variables.${index}.value`)}
            />
            <Button disabled={fields.length <= 1} onClick={() => remove(index)}>
              delete
            </Button>
          </div>
        ))}
        <Button
          disabled={fields.length >= 5}
          onClick={() => append({ key: '', value: '' })}
        >
          add
        </Button>
        <br />
        <Button type="submit">submit</Button>
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
