import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

import reviews from "./route/review.route.js"

app.use("/api/v1/reviews", reviews)
app.use("/hehe", (_, res) => res.status(404).json({ error: "not found" }))

export default app