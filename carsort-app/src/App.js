import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
    const carList=[
      {
        name: "BMW M6",
        url:
          "https://img.freepik.com/premium-photo/a-blue-bmw-m4-sits-on-a-wet-street-at-night_916680-3.jpg?size=626&ext=jpg&ga=GA1.1.111110796.1707721450&semt=ais",
        release_year: 2020
      },
      {
        name: "VW Polo",
        url:
          "https://img.freepik.com/free-photo/couple-near-new-white-car-man-driving-to-the-work-and-his-wife-will-waiting-him_496169-275.jpg?size=626&ext=jpg&ga=GA1.1.111110796.1707721450&semt=ais",
        release_year: 2018
      },
      {
        name: "Audi S6",
        url:
          "https://img.freepik.com/free-photo/dark-black-fast-sports-car-on-street-background_158538-26152.jpg?size=626&ext=jpg&ga=GA1.1.111110796.1707721450&semt=ais",
        release_year: 2020
      },
      {
        name: "BMW M2",
        url:
          "https://img.freepik.com/free-photo/silver-sedan-with-red-lights-parked-on-the-port_114579-4385.jpg?size=626&ext=jpg&ga=GA1.1.111110796.1707721450&semt=ais",
        release_year: 2019
      },
      {
        name: "Audi A3",
        url: "https://img.freepik.com/premium-photo/headlight-of-modern-expensive-car_141188-293.jpg?size=626&ext=jpg&ga=GA1.1.111110796.1707721450&semt=ais",
        release_year: 2019
      }
    ];
  
}
