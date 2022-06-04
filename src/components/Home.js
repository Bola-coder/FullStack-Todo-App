import React from "react";
import calendarImage from "./../images/calendar-image.png";
import "./../css/home.css";
const Home = () => {
  //   const animateText = (text) => {
  //     let splitedText = "";
  //     splitedText = ;
  //     // for (let i = 0; i < text.split("").length; i++) {

  //     // }
  //   };
  return (
    <section className="home">
      <div className="home-text">
        <h1>Welcome...</h1>
        <p>This is a one stop place to organize of your tasks.</p>
        <button>Get Started</button>
      </div>
      <div className="home-image">
        <img src={calendarImage} alt="" />
      </div>
    </section>
  );
};

export default Home;
