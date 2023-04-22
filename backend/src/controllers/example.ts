import { Request, Response } from "express";
import mongoose from "mongoose";
import Example from "../models/example.js";

export const getAllExamples = async (request: Request, response: Response) => {
    const examples = await Example.find({}).sort({ createdAt: -1 });
    response.status(200).json(examples);
};

export const getExample = async (request: Request, response: Response) => {
    const id = request.params["id"];
    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(404).json({ error: "No such example" });
        return;
    }
    const example = await Example.findById(id);
    if (!example) {
        response.status(404).json({ error: "No such example" });
        return;
    }
    response.status(200).json(example);
};

export const createExample = async (request: Request, response: Response) => {
    const { title, count } = request.body;
    try {
        const example = await Example.create({ title, count });
        response.status(200).json(example);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
};

export const deleteExample = async (request: Request, response: Response) => {
    const id = request.params["id"];
    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(404).json({ error: "No such example" });
        return;
    }
    const example = await Example.findOneAndDelete({ _id: id });
    if (!example) {
        response.status(404).json({ error: "No such example" });
        return;
    }
    response.status(200).json(example);
};

export const updateExample = async (request: Request, response: Response) => {
    const id = request.params["id"];
    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(404).json({ error: "No such example" });
        return;
    }
    const example = await Example.findOneAndUpdate({ _id: id }, { ...request.body });
    if (!example) {
        response.status(404).json({ error: "No such example" });
        return;
    }
    response.status(200).json(example);
};
