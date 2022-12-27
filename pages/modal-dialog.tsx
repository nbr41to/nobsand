import { Button } from '@mantine/core';
import { NextPage } from 'next';
import { useDialog, Dialog } from 'src/ModalDialog';

const ModalDialog: NextPage = () => {
  const { ref, showModal, closeModal } = useDialog();

  return (
    <div>
      <h1>My ModalDialog</h1>
      <p>HTMLのdialogを使ったModal</p>

      <Button onClick={showModal}>Open</Button>

      <Dialog ref={ref} onClose={closeModal}>
        <div className='p-20'>
          <h3>ModalDialog</h3>
          <p>dialogを使ったModal</p>
        </div>
        <Button onClick={closeModal}>Close</Button>
      </Dialog>
    </div>
  );
};

export default ModalDialog;
