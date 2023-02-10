import Router from "express";
import { getRatings, getRating, createRating, updateRating, deleteRating } from "../controllers/ratings.js";
import { verifyToken } from "../middleware/auth.js";

const router = Router();

// Get all ratings for an instructor
router.get("/?instructor=:instructorId", verifyToken, getRatings);

// Get all ratings for an instructor and a course
router.get("/?instructor=:instructorId&course=:course", verifyToken, getRatings);

// Get a rating by id
router.get("/:id", verifyToken, getRating);

// Create a rating
router.post("/", verifyToken, createRating);

// Update a rating
router.patch("/:id", verifyToken, updateRating);

// Delete a rating
router.delete("/:id", verifyToken, deleteRating);