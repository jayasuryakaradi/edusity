import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>setPlayState(true)}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis </p>
        <p>Dignissimos voluptatum quos fugiat voluptatibus impedit quasi assumenda, vitae nam eaque exercitationem, velit ex!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quisquam accusantium sunt quasi! Esse ab necessitatibus perferendis voluptatem! Voluptatum, deserunt.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus eveniet alias numquam fugiat fuga, provident tenetur nostrum libero perspiciatis porro?</p>
      </div>
    
    </div>
  );
};

export default About;
