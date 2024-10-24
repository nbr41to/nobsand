import { getTimeNoStore } from '../fetchers';
import { RevalidateButton } from './RevalidateButton';

export const TimeNoStore = async () => {
  const time = await getTimeNoStore();

  return (
    <div>
      <h2>NoStore</h2>
      <div>{time}</div>
      <RevalidateButton tag="getTimeNoStore" />
    </div>
  );
};
