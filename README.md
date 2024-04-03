<img src="public/logo.png" alt="Logo">

## React Staj Mülakat Projesi

<h3 style="font-weight:300;letter-spacing:1px">iWeather</h3>

It is an application that visualizes weather data using [openweather api](https://openweathermap.org/) according to user inputs

<div style="display:flex;gap:2px">
  <img style='height:50vh' alt='home' src='public/home.png'/>
  <img style='height:50vh' alt='autocomplete' src='public/autocomplete.png'/>
  <img style='height:50vh' alt='loading' src='public/loading.png'/>
  <img style='height:50vh' alt='search' src='public/search.png'/>
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

Deployed Project Link: [https://react-staj-git-main-gorkemeldeniz.vercel.app/](https://react-staj-git-main-gorkemeldeniz.vercel.app/)
