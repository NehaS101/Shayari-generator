const express = require('express');
const {Configuration,OpenAIApi} = require('openai');
const axios = require('axios');
const cors = require('cors');
require("dotenv").config();

const config = new Configuration({
    apiKey:process.env.AI_Key
})
const api = new OpenAIApi(config);

const app = express();

app.use(express.json());
app.use(cors());

app.post('/shayari',async(req,res)=>{
    let keyword = req.query.keyword;
    try {
        
    } catch (error) {
        
    }
})

app.listen(process.env.PORT,()=>{
    console.log('listening on port '+process.env.PORT);
})
