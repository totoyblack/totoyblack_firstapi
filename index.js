import express from 'express';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes.js';

const app = express();


app.use(cors());
app.use(express.json());

app.use('/students', studentRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
