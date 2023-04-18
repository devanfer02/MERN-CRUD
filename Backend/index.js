import express from 'express';
import cors from 'cors'; 
import StudentRoute from './routes/StudentRoute.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(StudentRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});