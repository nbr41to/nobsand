'use client';

import type { FC, FormEvent } from 'react';

import { useRef, useState } from 'react';

type FormValues = {
  firstName: string;
  lastName: string;
};

export const NoReactHookForm: FC = () => {
  const [submitValues, setSubmitValues] = useState<FormValues>();
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitValues(formValues);
  };

  /* count render */
  const renderCount = useRef<number>(0);
  renderCount.current = renderCount.current + 1;

  return (
    <div>
      <h2 className="text-lg font-bold">Not Use React Hook Form</h2>

      <form onSubmit={onSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          className="ml-2 rounded border"
          value={formValues.firstName}
          onChange={(e) =>
            setFormValues({ ...formValues, firstName: e.target.value })
          }
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          className="ml-2 rounded border"
          value={formValues.lastName}
          onChange={(e) =>
            setFormValues({ ...formValues, lastName: e.target.value })
          }
        />
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
