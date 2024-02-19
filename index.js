import cors from 'cors'
import express from 'express'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json({ msg: 'hello there' })
})

export { app }
