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

router.get("/", middleWare, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user. id });
    return res.status(200).json({ success: true, notes });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Can't Retrieve Notes" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedNote = await Note.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ success: true, updatedNote });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Can't Update Notes" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedNote = await Note.findByIdAndDelete(id);
    return res.status(200).json({ success: true, updatedNote });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Can't Delete Notes" });
  }
});
export default router;
