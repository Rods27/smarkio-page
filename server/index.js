const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const error = require('./middlewares/error');
const models = require('./models/commentModel');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (_request, response) => response.send("Ok"));

app.get('/api/comments', models.getAll);

app.post('/api/comments', models.create);

app.post('/read', models.read);

app.delete('/api/comments', models.exclude);

app.use(error);