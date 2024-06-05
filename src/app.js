require('./db');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const geoHelper = require('./utils/geoHelper');
const SoldProductRoutes = require('./routes/SoldProductRoute');

const app = express();

app.set('trust proxy', 1);

app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000' || 'https://www.thunderclient.com' || 'https://stellarstudio.vercel.app',
  credentials: true
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: Infinity
});

app.use(limiter);
app.name = 'STELLAR STUDIO API';
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

app.use(express.json());

app.use('/api', SoldProductRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

app.get('/geo', async (req, res) => {
  try {
      const geolocation = await geoHelper.fetchGeolocation();
      res.json(geolocation);
  } catch (error) {
      res.status(404).json({ message: 'Geolocation not found' });
  }
});

module.exports = app;