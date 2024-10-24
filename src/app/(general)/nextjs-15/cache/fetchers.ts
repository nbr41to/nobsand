'use server';

export const getTimeForceCache = async () => {
  const response = await fetch('/api/get-time', {
    cache: 'force-cache',
    next: {
      tags: ['getTimeForceCache'],
    },
  });
  const data = await response.json();

  return data.time;
};
