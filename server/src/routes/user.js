const express = require('express');
const router = express.Router();

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); 
  },
  filename: (req, file, cb) => {
    const uniqueFilename = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueFilename); 
  },
});

const upload = multer({ storage });
router.post('/upload', upload.single('image'), (req, res) => {
  const fileName = req.file.filename;
  const imagePath = req.file.path;

  try {
    console.log({"img" : imagePath});
    res.status(200).json({ message: 'Image uploaded successfully', imagePath });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});



router.get("/home", (req, res) => {
  res.json({ success: true });
});

module.exports = router;
