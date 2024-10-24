import { getTimeForceCache } from '../fetchers';
import { RevalidateButton } from './RevalidateButton';

export const TimeForceCache = async () => {
  const time = await getTimeForceCache();

  return (
    <div>
      <h2>ForceCache</h2>
      <div>{time}</div>
      <RevalidateButton tag="getTimeForceCache" />
    </div>
  );
};
