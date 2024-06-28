import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        // upload the file on cloudinary
      let response = await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })
        // file had been uploaded successfully
        console.log("file is uploaded on cloudinary", response.url);
        return response;

    } catch(err){
        fs.unlinkSync(localFilePath) // Remove the locally saved temporary file as the uploaded opration got failed
        return null;
    }
}

export {uploadOnCloudinary}