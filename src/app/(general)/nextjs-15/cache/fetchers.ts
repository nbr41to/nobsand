'use server';

export const getTimeForceCache = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Asia/Tokyo',
    {
      cache: 'force-cache',
      next: {
        tags: ['getTimeForceCache'],
      },
    },
  );
  const data = await response.json();

  return data.unixtime;
};
