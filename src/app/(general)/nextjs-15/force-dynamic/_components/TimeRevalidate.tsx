import { getTimeRevalidate1s } from '../fetchers';
import { RevalidateButton } from './RevalidateButton';

export const TimeRevalidate = async () => {
  const time = await getTimeRevalidate1s();

  return (
    <div>
      <h2>Revalidate 1 second</h2>
      <div>{time}</div>
      <RevalidateButton tag="getTimeRevalidate1s" />
    </div>
  );
};
