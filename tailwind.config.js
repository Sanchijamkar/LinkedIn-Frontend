  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          "xxs": "500px",
          "xs": "524px", 
          "s": "550px",
          "ss": "590px",
          "smd": "779px",
          "d": "850px",
          "dl": "997px",
          "gx": "1200px",
        },
        width: {
          "500": "650px",
          "620": "620px",
          "590": "590px",
          "779": "749px",
          "977": "967px",
          "1024": "1144px",
          "1020": "1160px",
          "1050": "1250px",
        },
        color: {
          "bdr-separator": "#e5e5e5",
        }
      },
    },
    plugins: [],
  }

