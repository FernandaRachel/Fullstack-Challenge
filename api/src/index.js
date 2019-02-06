// imports
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')
var logger = require('./log/creator/logCreator')
var swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('../swagger.json');


//set up express
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json({
  type: 'application/json'
}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', express.Router());

// passing to controller the app express
require('./controllers/user/userController')(app);


logger.log('info', 'Logging !!!!' + new Date());

app.listen(3000);