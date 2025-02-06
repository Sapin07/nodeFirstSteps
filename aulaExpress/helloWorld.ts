import express from 'express';
import {config} from 'dotenv';
import path from 'path';
import { readFileSync, writeFile, writeFileSync } from 'fs';
import { randomUUID } from 'crypto';
import dbJson from '../server.json';
import { json } from 'stream/consumers';
import { userRoutes } from './routes/userRoutes';
import cors from 'cors'

config()
const app = express()
app.use(express.json())
app.use(cors())
app.use('/client',express.static(path.join(__dirname, 'public')))
const url = 'http://localhost:';
const port = 3300;
// const dbJson = readFileSync(dbJsonPath)
// const users: User[] = JSON.parse(dbJson.toString()).users


app.listen(port , () => {
    console.log(`server rodando no endereco ${url+port}`)
})