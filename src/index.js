// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import {app} from './app.js'
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.on('error', (err) => {
            console.error(`ERROR OCCUR IN LISTENING APP`, err)
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port:${process.env.PORT}`)

        })
    })
    .catch((err) => {
        console.log(`MongoDB connection FAILED !! `, err)
    })

// import express from 'express';

// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.on('error', (err) => {
//             console.log('ERROR: ', err)
//             throw err
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })

//     } catch (err) {
//         console.error('Error: ', err)
//         throw err
//     }
// })()