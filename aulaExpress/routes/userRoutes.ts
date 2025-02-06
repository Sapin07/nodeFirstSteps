import { Router } from "express";
import express from 'express';
import {config} from 'dotenv';
import path from 'path';
import { readFileSync, writeFile, writeFileSync } from 'fs';
import { randomUUID } from 'crypto';
import dbJson from '../../server.json';
import { json } from 'stream/consumers';


interface User {
    id: string
    name: string
    idade: number
}
type CreateUserDTO = Omit<User, "id">

const userRoutes = Router();
const users: User[] = dbJson.users;
const dbJsonPath = path.resolve(process.cwd(), 'server.json')


userRoutes.get("/oi", (request, response) => {
  //const homePagePath = path.join(__dirname, 'index.html')
  //const homePage = readFileSync(homePagePath)
  //return response.send(homePage);
  //return response.json(users)
});

userRoutes.post("api/users", async (request, response) => {
  const { name, idade }: CreateUserDTO = request.body;

  if (!name || idade < 0) {
    const errMessage = "bad request";
    return response.status(400).send(errMessage);
  }
  const user = { id: randomUUID(), name, idade };
  users.push(user);

  writeFileSync(dbJsonPath, JSON.stringify({ ...dbJson, users }));

  return response.status(201).json(user);
});

userRoutes.delete("api/users/:id", async (request, response) => {
  const { id } = request.params;

  if (!id) {
    const errMessage = "id faltando";
    return response.status(400).send(errMessage);
  }

  const foundUser = users.find((user) => user.id === id);

  if (!foundUser) {
    const errMessage = "user not found";
    return response.status(400).send(errMessage);
  }

  const updatedUsers = users.filter((user) => user.id !== id);

  writeFileSync(dbJsonPath, JSON.stringify({ ...dbJson, users: updatedUsers }));

  return response.status(204).send(users);
});


app.get('api/users', (request, response) => {
    return response.status(204).send(users);
})

export {userRoutes}