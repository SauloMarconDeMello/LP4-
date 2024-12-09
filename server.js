// Importação das bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rotasVeiculos = require('./src/routes/veiculos'); // Importa as rotas de veículos

// Criação do app Express
const app = express();

// Configuração do body-parser  
app.use(bodyParser.json());

// Configuração para servir arquivos estáticos
app.use(express.static('src/routes/pages')); // Permite acessar arquivos estáticos na pasta 'pages'

// Definição de parâmetros do servidor
const hostname = '127.0.0.1';
const port = 8080;

// Rota principal: Página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'routes', 'pages', 'index.html')); // Envia a página HTML
});

// Uso das rotas para veículos
app.use('/veiculo', rotasVeiculos);

// Inicialização do servidor
app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});