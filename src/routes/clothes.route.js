"use strict";

const express = require("express");

const { clothesCollection } = require("../models/index");

const clothesRouter = express.Router();

clothesRouter.get("/clothes", getClothes);
clothesRouter.get("/clothes/:id", getOneClothes);
clothesRouter.post("/clothes", creatClothes);
clothesRouter.put("/clothes/:id", updateClothes);
clothesRouter.delete("/clothes/:id", deleteClothes);

async function getClothes(req, res) {
  const allClothes = await clothesCollection.read();
  res.status(200).json(allClothes);
}

async function getOneClothes(req, res) {
  const id = parseInt(req.params.id);
  const getOneClothes = await clothesCollection.read(id)
  
  res.status(200).json(getOneClothes);
}

async function creatClothes(req, res) {
  const obj = req.body;
  const creatClothes = await clothesCollection.create(obj);
  res.status(201).json(creatClothes);
}

async function updateClothes(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  const updateClothes = await clothesCollection.update(id, obj); 
  res.status(201).json(updateClothes);
}

async function deleteClothes(req, res) {
  const id = parseInt(req.params.id);
  const deleteClothes = await clothesCollection.delete(id)
  res.status(204).json(deleteClothes);
}

module.exports = clothesRouter;
