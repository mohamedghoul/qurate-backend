import Rating from "../models/Rating.js";

// Get all ratings for an instructor
export const getRatings = async (req, res) => {
    try {
        const ratings = await Rating.find({ instructor: req.query.instructorId });
        res.status(200).json(ratings);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Get all ratings for an instructor and a course
export const getRatingsForCourse = async (req, res) => {
    try {
        const ratings = await Rating.find({
     instructor: req.query.instructorId,
            course: req.query.course,
        });
        res.status(200).json(ratings);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Get a rating by id
export const getRating = async (req, res) => {
    try {
        const rating = await Rating.findById(req.params.id);
        res.status(200).json(rating);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Create a rating
export const createRating = async (req, res) => {
    const rating = req.body;
    const newRating = new Rating(rating);
    try {
        await newRating.save();
        res.status(201).json(newRating);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Update a rating
export const updateRating = async (req, res) => {
    const { id: _id } = req.params;
    const rating = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No rating with that id");
    try {
        const updatedRating = await Rating.findByIdAndUpdate(
            _id,
            { ...rating, _id },
            { new: true }
        );
        res.json(updatedRating);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Delete a rating
export const deleteRating = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No rating with that id");
    await Rating.findByIdAndRemove(id);
    res.json({ message: "Rating deleted successfully" });
}
