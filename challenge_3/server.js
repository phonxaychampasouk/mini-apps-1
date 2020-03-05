const express= require('express')
const app = express();
const PORT = 3000;
app.use(express.urlencoded())
app.use(express.static('public'))

app.post('/api/client',((req, res)=>{
    
    console.log('Req: ',req.body.name)
    console.log('Email: ',req.body.email)
    console.log('Password: ',req.body.password)}
))



app.listen(PORT,()=> console.log(`Listening on port: ${PORT}`));

