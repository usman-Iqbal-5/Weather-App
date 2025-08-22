import bodyParser from "body-parser";
import express from "express";
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = 3000;
const apiKey = process.env.APIKEY;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index.ejs");
})

app.post("/getWeather", async (req, res)=>{
    const city = req.body.city;

    const baseUrl = `https://api.openweathermap.org/data/2.5/forecast`;
    const params = new URLSearchParams({
        q : city,
        appid: apiKey

    })

    const url = `${baseUrl}?${params.toString()}`
    console.log(url)

    try {
        const responseJson = await fetch(url);

        if (!responseJson.ok){
            throw new Error(`${responseJson.status}`);
        }

        const response = await responseJson.json();
        // console.log(response);
        return res.render("index.ejs", {
            content: response,
            cityName: city
        })
        
    } catch (error) {
        // console.log(`${error.message}`);
        res.render("index.ejs", {
            content: null,
            content: null,
            cityName: null,
        });
    }
})

app.listen(port, ()=>{
    console.log(`sever is running on port ${port}`);
})

