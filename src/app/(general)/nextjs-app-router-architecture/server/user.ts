let userDB = {
  name: 'John Doe',
  email: 'sample@example.com',
  zipcode: '12345',
  address: '1234 Main St',
  city: 'Anytown',
  state: 'CA',
  country: 'USA',
};

export const getUser = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return userDB;
};

export const updateUser = async (data: typeof userDB) => {
  userDB = { ...userDB, ...data };
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return userDB;
};
