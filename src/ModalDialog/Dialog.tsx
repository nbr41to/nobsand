import { FC, forwardRef, ReactNode, Ref } from 'react';

type Props = {
  ref: Ref<HTMLDialogElement>;
  onClose: () => void;
  children: ReactNode;
};

export const Dialog: FC<Props> = forwardRef<HTMLDialogElement, Props>(
  ({ onClose, children }, ref) => {
    return (
      <dialog
        className='backdrop:cursor-pointer backdrop:bg-blue-800/60'
        ref={ref}
        onClick={onClose}
      >
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </dialog>
    );
  },
);

Dialog.displayName = 'Dialog'; // ESLint: react/display-nameの回避のため
