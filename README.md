# 🌦️ Weather App

A simple Node.js weather application that fetches and displays weather forecasts using the **[OpenWeather API](https://openweathermap.org/api)**.  

Users can search for a city and view the forecast data presented dynamically on the frontend.

---

## 🚀 Features
- Search for weather forecasts by city name  
- Fetches **5-day forecast data** from OpenWeather API  
- Built with **Node.js**, **Express**, and **EJS**  
- Error handling for invalid city names or API issues  

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express  
- **Frontend:** EJS templates, CSS/Static files (served from `public/`)
- **Technologies & Concepts:** Restful APIs and Fetch requests
- **API:** OpenWeather API  
- **Other:** dotenv for environment variables  

---

## 📂 Project Structure
      
      ├── public/          # Static assets (CSS, images, JS)
      ├── views/           # EJS templates (index.ejs)
      ├── app.js           # Main server file
      ├── .env             # Environment variables (API key)
      ├── package.json     
      └── README.md


---

## ⚙️ Setup & Installation

  1. **Clone the repository**
         ```
         git clone https://github.com/yourusername/weather-app.git
         cd weather-app
          ```

  2. **Install dependencies**
         ```
         npm install
         ```
   
  3. **Set up environment variable**
  4. **Create a .env file in the project root:**
       ```
       APIKEY=your_openweather_api_key
       ```
  5. **Run the app**
       ```
       node index.js
       ```
  6. **Open your browser and navigate to:**
      ```
      http://localhost:3000
      ```
---

## 🌍 Example

Search for a city:

Enter London → view 5-day forecast.

If the city name is invalid, an error message will be displayed.

---

## 🔑 API Reference

This project uses the OpenWeather 5 Day / 3 Hour Forecast API:

https://api.openweathermap.org/data/2.5/forecast?q={CITY_NAME}&appid={API_KEY}

---

## 📜 License

This project is licensed under the MIT License.
