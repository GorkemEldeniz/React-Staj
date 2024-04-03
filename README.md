<img src="public/logo.png" alt="Logo">

## React Staj Mülakat Projesi

<h3 style="font-weight:300;letter-spacing:1px">iWeather</h3>

It is an application that visualizes weather data using [openweather api](https://openweathermap.org/) according to user inputs

<div style="display:flex;gap:2px">
  <img style='height:50vh' alt='autocomplete' src='https://utfs.io/f/1c43f202-df81-4405-b639-8c45b1aa2647-1wrmn.png'/>
  <img style='height:50vh' alt='search' src='https://utfs.io/f/0db75c69-da81-43cc-ae98-9bd1e095e8b8-duw4d4.png'/>
  <img style='height:50vh' alt='loading' src='https://utfs.io/f/32a44f37-b41a-4739-a842-8b49dab97305-5kfl8c.png'/>
  <img style='height:50vh' alt='home' src='https://utfs.io/f/e0c35d9e-3284-4c2c-8cd2-3700f64ef501-ezlxzs.png'/>
</div>

### Built With

- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [phosphor-icons](https://phosphoricons.com/)
- [redux-toolkit](https://redux-toolkit.js.org/)
- [usehooks](https://usehooks.com/)
- [axios](https://axios-http.com/)
- [class-variance-authority](https://cva.style/docs)
- [react-hook-form](https://react-hook-form.com/)
- [react-router-dom](https://reactrouter.com/en/main)
- [recharts](https://recharts.org/en-US)
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge)
- [zod](https://zod.dev/)

### Installation

1. Get a free API Key at [https://openweathermap.org](https://openweathermap.org/)
2. Clone the repo:
   ```sh
   git clone https://github.com/GorkemEldeniz/React-Staj.git
   ```
3. Navigate to the project directory:
   ```sh
   cd react-staj
   ```
4. Install NPM packages
   ```sh
   pnpm install
   ```
5. Create a enviroment file `.env.local`
   ```sh
   VITE_OPENWHEATHER_GEOCODE_URL = "http://api.openweathermap.org/geo/1.0/direct?limit=4&appid={YOUR_APIKEY}"
   VITE_OPENWHEATHER_FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast/daily?cnt=5&appid={YOUR_APIKEY}&units=metric"
   ```
6. Start the server on http://localhost:<your_port>:
   ```sh
   pnpm dev --port=<your_port>
   ```

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Görkem Eldeniz - gorkemeldeniz30@gmail.com

Deployed Project Link: [https://react-staj.vercel.app/](https://react-staj.vercel.app/)
