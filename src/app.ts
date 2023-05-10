import express, { Application } from 'express'

const app: Application = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

export { app }
