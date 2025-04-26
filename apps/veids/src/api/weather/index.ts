import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/metar/:icao', async (req, res, next) => {
  try {
    if (req.params.icao) {
      const response = await axios.get<string>(
        `https://aviationweather.gov/api/data/metar`,
        { params: { ids: req.params.icao }, responseType: 'text' }
      );

      res.send(response.data);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

export default router;
