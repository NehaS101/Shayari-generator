const express = require('express');
const {Configuration,OpenAIApi} = require('openai');
const axios = require('axios');
const cors = require('cors');
require("dotenv").config();

const config = new Configuration({
    apiKey:process.env.AI_Key
})
const openai = new OpenAIApi(config);

const app = express();

app.use(express.json());
app.use(cors());

app.post('/shayari',async(req,res)=>{
    let keyword = req.query.keyword;
    try {
        const prompt = async() =>{
            const text = `Please provide a shayari that contains word ${keyword} in hindi`;
            const response = await openai.createCompletion({
                model:"text-davinci-003",
                prompt:text,
                max_token:500,
                n:1
            });
            const generatedShayari = response.data.choices[0].text;

            return generatedShayari
        }
        const shayari = await prompt();
        res.send(shayari);
    } catch (error) {
        res.send({error: error.message});
    }
})

app.listen(process.env.PORT,()=>{
    console.log('listening on port '+process.env.PORT);
})
