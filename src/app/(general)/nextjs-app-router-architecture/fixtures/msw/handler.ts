import { HttpResponse, http } from 'msw';

export const handler = http.get('/user', () => {
  return HttpResponse.json({
    name: 'John Doe',
    email: '',
    zipcode: '12345',
    address: '1234 Main St',
    city: 'Anytown',
    state: 'CA',
    country: 'USA',
  });
});
