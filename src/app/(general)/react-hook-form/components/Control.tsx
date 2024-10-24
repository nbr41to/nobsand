'use client';

import type { FC } from 'react';

import { Button, NumberInput, TextInput } from '@mantine/core';
import { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

type FormValues = {
  email: string;
  age: number | '';
};

export const Control: FC = () => {
  const [submitValues, setSubmitValues] = useState<FormValues>();
  const { register, handleSubmit, control, reset, setValue } =
    useForm<FormValues>({
      shouldUseNativeValidation: false,
      defaultValues: {
        email: '',
        age: '',
      },
    });

  const onSubmit = async (data: FormValues) => {
    setSubmitValues(data);
  };
  const setValues = () => {
    setValue('email', 'example@example.com');
    setValue('age', 20);
  };

  /* count render */
  const renderCount = useRef<number>(0);
  renderCount.current = renderCount.current + 1;

  return (
    <div>
      <h2 className="text-lg font-bold">Controller usage</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="email"
          label="Email"
          {...register('email', {
            required: 'email is required',
          })}
        />
        <Controller
          name="age"
          control={control}
          render={({
            // field: { onChange, onBlur, value, name, ref },
            field,
            fieldState,
          }) => (
            <NumberInput
              label="Age"
              {...field}
              error={fieldState.error?.message}
            />
          )}
          rules={{
            required: 'age is required',
            min: {
              value: 18,
              message: 'age must be greater than or equal to 18',
            },
            max: {
              value: 99,
              message: 'age must be less than or equal to 99',
            },
          }}
        />
        {/* <NumberInput label="Age" {...register('age')} /> */}

        <Button type="submit">submit</Button>
        <Button variant="outline" onClick={() => reset()}>
          reset
        </Button>
        <Button variant="outline" onClick={() => setValues()}>
          setValues
        </Button>
      </form>

      <p>renderCount: {renderCount.current}</p>

      <div>
        <p>submit values</p>
        <pre>
          <code>{JSON.stringify(submitValues, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};
