import express from "express";
import Note from "../models/Note.js";
import middleWare from "../middleware/middleware.js";

const router = express.Router();
router.post("/add", middleWare, async (req, res) => {
  try {
    const { title, description } = req.body;

    const newNote = new Note({
      title,
      description,
      userId: req.user.id,
    });

    await newNote.save();

    return res
      .status(200)
      .json({ success: true, message: "Note Created Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed To Create Note" });
  }
});

export default router;
