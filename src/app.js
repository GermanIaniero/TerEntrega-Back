import express from 'express'
import config from './config/config.js'
import usersRouter from './routes/users.router.js'
import storesRouter from './routes/stores.router.js'
import ordersRouter from './routes/orders.router.js'
import cartsRouter from './routes/carts.router.js'
import productsRouter from './routes/products.router.js'
import nodemailer from 'nodemailer'
import twilio from 'twilio'


const app = express()

const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'r2coderhouse@gmail.com',
        pass: 'rjyneosjatqblvku'
    }
})

const client = twilio(env.TWILIO_ACCOUNT_SID, env.TWILIO_AUTHO_TOKEN)


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', usersRouter)
app.use('/api/stores', storesRouter)
app.use('/api/orders', ordersRouter)
app.use('/api/carts', cartsRouter)
app.use('/api/products', productsRouter)

app.get('/mail', async(req, res) => {
    const result = await transport.sendMail({
        from: 'r2coderhouse@gmail.com',
        to: ['r2coderhouse@gmail.com', 'valentinabalo9@gmail.com'],
        subject: 'Felicitaciones por tu nuevo trabajo !!',
        html: `
            <div>
                Bienvenido a tu nuevo puesto de Senior Backend
                <br> Tu salario es <b>140.000 USD</b> per year.
                <img src="cid:image1" />
            </div>
        `,
        attachments: [
            {
                filename: 'spider.jpg',
                path: `${__dirname}/images/spider.jpg`,
                cid: 'image1'
            }
        ]
    })

    console.log(result)
    res.send('Email sent')
})

app.get('/sms', async(req, res) => {
    const result = await client.messages.create({
        body: 'You have been hired',
        from: TWILIO_SMS_NUMBER,
        to: '+😅'
    })

    console.log(result)
    res.send('SMS sent!')
})

app.listen(config.PORT, ()  => console.log('Listening...'))