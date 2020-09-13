import Customer from '@model/Customer';

export default class CustomerService {
  log() {
    const customer: Customer = {
      id: '1',
      name: 'Erico',
    };
    console.log('Chamou CustomerService');
    console.log(customer);
    const customer2 = new Customer();
    customer2.id = '2';
    customer2.name = 'Jéssica';
    console.log(customer2);
  }
}
