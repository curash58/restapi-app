import express from "express"; // Importing the express framework for building the server
import upload from "../middleware/multer.js"; // Importing the multer middleware for handling file uploads

const router = express.Router(); // Creating a new router instance

// Route for handling single file uploads
router.post("/single", upload.single("file"), (req, res) => {
  console.log("Uploaded File:", req.file); // Logging the uploaded file information

  // Check if a file was uploaded
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" }); // Respond with an error if no file is found
  }

  // Respond with a success message and the file path
  res.json({
    message: "Image uploaded successfully",
    filePath: `/uploads/${req.file.filename}`, // Path to the uploaded file
  });
});

export default router; // Exporting the router for use in other parts of the application
