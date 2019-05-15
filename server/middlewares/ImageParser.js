import multer from 'multer';
import cloudinary from 'cloudinary';
import cloudinaryStorage from 'multer-storage-cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    cloud_name: process.env.CLOUD_NAME,
});
const storage = cloudinaryStorage({
    cloudinary,
    params: {
        folder: 'audio',
        format: 'mp4',
        resource_type: 'video',
    },
});

export default multer({ storage });
