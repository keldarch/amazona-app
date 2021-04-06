import multer from "multer";
import express from "express";
import { isAdmin, isAuth } from "../utils.js";

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads/");
  },
  filename(req, file, callback) {
    callback(null, `${Date.now()}.jpg`);
  },
});

// middleware that will save files to disk upon finding file inputs
const upload = multer({ storage });

// have multer only grab the "image" file field
uploadRouter.post("/", isAuth, isAdmin, upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default uploadRouter;
