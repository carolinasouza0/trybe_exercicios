let order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {
  let deliveryPerson = order.order.delivery.deliveryPerson;
  let customer = order.name;
  let phoneNumber = order.phoneNumber;
  let street = order.address.street;
  let number = order.address.number;
  let apt = order.address.apartment;

  console.log(
    "Olá, " +
      deliveryPerson +
      ", entrega para: " +
      customer +
      ", Telefone: " +
      phoneNumber +
      ", " +
      street +
      ", Nº: " +
      number +
      ", AP: " +
      apt
  );
}

customerInfo(order);

function orderModifier(order) {
  order.name = "Luiz Silva";
  order.payment.total = "50,00";
  let customer = order.name;
  let pizzas = Object.keys(order.order.pizza);
  let drinks = order.order.drinks.coke.type;
  let newTotal = order.payment.total;

  console.log(
    "Olá " +
      customer +
      ", o total do seu pedido de " +
      pizzas[0] +
      ", " +
      pizzas[1] +
      " é R$ " +
      newTotal
  );
}

orderModifier(order);
