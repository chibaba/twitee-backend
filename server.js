const Express = require('express')
const dotenv = require('dotenv')
const AppRouter = require('./routes/index')
const Cors = require('cors')
const App = Express()
const port = process.env.PORT || 5500
const path = require('path')
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'JSONPlaceholder',
      url: 'https://jsonplaceholder.typicode.com',
    },
  },
  servers: [
    {
      url: 'https://twitweeapp.herokuapp.com/',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);


dotenv.config()
App.use(Express.json())
App.use(Cors())

App.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

App.use('/twitwee/api/v1', AppRouter);



if (process.env.NODE_ENV === 'production') {
  App.use(Express.static(path.join(__dirname, '../client/dist')))
  App.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  })
}

App.listen(port, () => {
  console.log(`Server runnin on port ${port}`)
})