import { Basic } from '@/app/react-hook-form/components/Basic';
import { Context } from '@/app/react-hook-form/components/Context';
import { Control } from '@/app/react-hook-form/components/Control';
import { FieldArray } from '@/app/react-hook-form/components/FieldArray';
import { NoReactHookForm } from '@/app/react-hook-form/components/NoReactHookForm';
import { WithZod } from '@/app/react-hook-form/components/WithZod';

export default function ReactHookFormPage() {
  return (
    <div className="space-y-8">
      <NoReactHookForm />
      <Basic />
      <Control />
      <Context />
      <FieldArray />
      <WithZod />
    </div>
  );
}
