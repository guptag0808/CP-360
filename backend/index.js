const express= require("express")
const {connection} = require("./db")

const app= express()
app.use(express.json())

app.get("/",(req,res)=>{
	res.send("This Is basic page")
})

 app.listen(3000,async()=>{
	try{
		await connection
		console.log("connected to db")
	}catch(err){
		console.log("err.message")
	}
	console.log("Connected to port 3000")
 })