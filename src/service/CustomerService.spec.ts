import Customer from '@model/Customer';

it('should return valid customer', () => {
  const customer = new Customer();
  customer.id = '1';
  customer.name = 'Erico';
  expect(customer).toHaveProperty('id', '1');
  expect(customer).toHaveProperty('name', 'Erico');
});
