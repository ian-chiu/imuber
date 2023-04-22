import { Router } from "express";
import {
    getExample,
    getAllExamples,
    createExample,
    deleteExample,
    updateExample
} from "../controllers/example.js";

const router = Router();

// GET all workouts
router.get("/", getAllExamples);

// GET a single workout
router.get("/:id", getExample);

// POST a new workout
router.post("/", createExample);

// DELETE a workout
router.delete("/:id", deleteExample);

// PATCH a workout
router.patch("/:id",  updateExample);

export default router;
