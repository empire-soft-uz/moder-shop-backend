import mongoose from 'mongoose'
import { app } from './app'

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://orihero:asdf12345@cluster0.heflyts.mongodb.net/',
    )
    console.log('Connect to mongodb')
    app.listen(4000, () => {
      console.log('Server running on port 4000')
    })
  } catch (err) {
    console.log(err)
  }
}
connectDB()
