const express = require('express');
const routes = express.Router();

// Inventário de automóveis
const cars = [
    { id: 1, name: 'Polo', manufacturer: 'Volkswagen', year: 2021, fuel: 'Gasolina', color: 'Azul', price: 65000 },
    { id: 2, name: 'HB20', manufacturer: 'Hyundai', year: 2022, fuel: 'Flex', color: 'Cinza', price: 80000 },
    { id: 3, name: 'Civic', manufacturer: 'Honda', year: 2020, fuel: 'Gasolina', color: 'Branco', price: 100000 },
];

// Rota para adicionar veículo
routes.post('/add', (req, res) => {
    const { name, manufacturer, year, fuel, color, price } = req.body;
    const newCar = { id: cars.length + 1, name, manufacturer, year, fuel, color, price };
    cars.push(newCar);
    res.status(201).json({ message: 'Carro adicionado com sucesso!', car: newCar });
});

// Rota para atualizar informações
routes.put('/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { price } = req.body;
    const car = cars.find((c) => c.id === id);

    if (car) {
        car.price = price;
        res.status(200).send('Preço atualizado!');
    } else {
        res.status(404).send('Veículo não encontrado.');
    }
});

// Rota para remover veículo
routes.delete('/remove/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = cars.findIndex((c) => c.id === id);

    if (index !== -1) {
        cars.splice(index, 1);
        res.status(200).send(`Veículo com ID ${id} removido.`);
    } else {
        res.status(404).send('Veículo não encontrado.');
    }
});

module.exports = routes;
