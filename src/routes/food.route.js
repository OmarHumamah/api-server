"use strict";

const express = require("express");

const { foodCollection } = require("../models/index");

const foodRouter = express.Router();

foodRouter.get("/food", getFood);
foodRouter.get("/food/:id", getOneFood);
foodRouter.post("/food", creatFood);
foodRouter.put("/food/:id", updateFood);
foodRouter.delete("/food/:id", deleteFood);

async function getFood(req, res) {
  const allFood = await foodCollection.read();
  res.status(200).json(allFood);
}

async function getOneFood(req, res) {
  const id = parseInt(req.params.id);
  const getOneFood = await foodCollection.read(id);
  res.status(200).json(getOneFood);
}

async function creatFood(req, res) {
  const obj = req.body;
  const creatFood = await foodCollection.create(obj);
  res.status(201).json(creatFood);
}

async function updateFood(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  const updateFood = await foodCollection.update(id, obj); 
  res.status(201).json(updateFood);
}

async function deleteFood(req, res) {
  const id = parseInt(req.params.id);
  const deleteFood = await foodCollection.delete(id);
  res.status(204).json(deleteFood);
}

module.exports = foodRouter;
