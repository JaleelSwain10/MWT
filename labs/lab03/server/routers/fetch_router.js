import express from "express";
import fs from "fs";
import lodash from "lodash";
import path from "path";
import { uploadsDir } from "../middleware/multer.js";

const router = express.Router();

router.get("/single", (req, res) => {
    const uploadArray = fs.readdirSync(uploadsDir);
    const randomFile = lodash.sample(uploadArray);
    if (!randomFile) {
        return res.status(404).json({message: "Empty directory"})
    }
    res.sendFile(path.join(uploadsDir, randomFile));
});

router.get("/multiple", (req, res) => {
    const uploadArray = fs.readdirSync(uploadsDir);
    const randomFile = lodash.sampleSize(uploadArray, 3);
    if (!randomFile) {
        return res.status(404).json({message: "Empty directory"})
    }
    res.json(randomFile);
});


router.get("/file/:filename/", (req, res) =>{
    res.sendFile(path.join(uploadsDir, req.params.filename));
})

export default router;
