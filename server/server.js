const express =require("express")
//const utils = require('utility')
const bodyParser =require("body-parser")
const cookieParser = require("cookie-parser")
//const model = require('./model')
const app =express()
// work with express
//const server = require('http').Server(app)


const userRouter = require("./user")


app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)
app.listen(9093,function(){
	console.log('node app start at port:9093')
})

