// package import
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'

import QRcode from 'qrcode'
import generatePayload from 'promptpay-qr'

// express instance
const app = express()

// middleware
app.use(cors())
app.use(express.json())

// routes
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    return res.json({ msg: "hello world" })
})

app.post("/generate", (req: Request, res: Response, next: NextFunction) => {
    const amount = parseFloat(req.body.amount)
    console.log(amount)
    const mobileNumber = "0989054159"
    const payload = generatePayload(mobileNumber, { amount })
    const option = {
        color: {
            dark: '#000',
            light: '#fff'
        }
    }

    QRcode.toDataURL(payload, option, (err, url) => {
        if (err) {
            console.log("generate failed")
            return res.status(400).json({
                msg: "generate failed",
                statusCode: 400
            })
        }

        return res.status(200).json({
            msg: "generate success",
            statusCode: 200,
            result: url
        })
    })
})


// listening
const server = app.listen(5050, () => {
    console.log(`listening at port: 5050`)
})


