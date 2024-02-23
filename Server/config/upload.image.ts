import multer, { StorageEngine } from 'multer';
import path from "path"

const destinationDirectory = path.join(__dirname, '..', '..', 'Client/src/assets/');

export const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, destinationDirectory);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});