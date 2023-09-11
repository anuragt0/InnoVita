const router = require('express').Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Uploads will be stored in the 'uploads' directory
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`); // Generate a unique filename
    },
  });
  
  const upload = multer({ storage });



// Handle the image upload route
router.post("/image-upload", upload.single('image'), (req, res) => {
    // Access the uploaded image through req.file

    console.log("HERE");
    try {
        const imagePath = req.file.path;
        
        res.status(200).json({ message: 'Image uploaded successfully', imagePath });
        
    } catch (error) {
        res.status(500).json({success:false, message: error.message});
    }
  });

router.get("/home", (req,res)=>{
    res.json({success: true});
})



module.exports = router;