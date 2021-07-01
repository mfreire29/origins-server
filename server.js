import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import routes from './routes/routes.js';

const app = express()
app.use(cors())

const port = process.env.PORT || 9000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes)

app.listen(port, ()=>{
    console.log('COnectadooo')
})