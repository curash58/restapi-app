import express from "express";
import fs from "fs";
import path from "path";
import _ from "lodash";
import { fileURLToPath } from "url";

const router = express.Router();

// Get current directory for this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const upload_directory = path.join(__dirname, "../uploads");

// Fetch a single random image
router.get("/single", (req, res) => {
  const files_array = fs.readdirSync(upload_directory);

  if (files_array.length === 0) {
    return res.status(503).json({ message: "No images" });
  }

  const filename = _.sample(files_array);
  res.sendFile(path.join(upload_directory, filename));
});

// Fetch multiple random image filenames
router.get("/multiple", (req, res) => {
  const files_array = fs.readdirSync(upload_directory);

  if (files_array.length === 0) {
    return res.status(503).json({ message: "No images" });
  }

  const filenames = _.sampleSize(files_array, 3);
  res.json(filenames);
});

// Serve a specific file by filename
router.get("/file/:filename", (req, res) => {
  const filepath = path.join(upload_directory, req.params.filename);

  if (!fs.existsSync(filepath)) {
    return res.status(404).json({ message: "File not found" });
  }

  res.sendFile(filepath);
});

export default router;