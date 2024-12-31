import React from "react";
import { assets } from "../assets/assets";
import "../Components/css/About.css";
const About = () => {
  return (
    <div>
      <div className="about">
        <p>
          ABOUT<span className="spans"> US</span>
        </p>
      </div>

      <div className="aboutpage ">
        <img
          className="aboutimg aboutimage-md"
          src={assets.about_image}
          alt=""
        />
        <div className="aboutlist aboutlist-md">
          <p>
            About Us At Healthcare Hospital, we are committed to delivering
            exceptional medical care with a personal touch. Our mission is to
            provide a safe, compassionate, and healing environment for patients
            and their families. With state-of-the-art facilities and a team of
            experienced healthcare professionals, we strive to meet the unique
            needs of every individual. Your health and well-being are at the
            heart of everything we do.{" "}
          </p>
          <p>
            Founded on the principles of excellence and innovation, Healthcare
            Hospital has become a trusted name in the community. From advanced
            diagnostics to specialized treatments, we offer a comprehensive
            range of medical services under one roof. Our dedicated staff works
            tirelessly to ensure every patient receives the highest standard of
            care. Together, we aim to build a healthier tomorrow, one life at a
            time.
          </p>
          <b className="aboutbold">
            <h3>Our Vision</h3>
          </b>
          <p>
            At Healthcare Hospital, our vision is to be a beacon of excellence
            in healthcare, setting the standard for quality and compassionate
            care. We aspire to empower healthier communities through innovation,
            advanced treatments, and patient-centered approaches. By fostering
            trust and building lasting relationships, we aim to be the first
            choice for health and wellness. Together, we envision a future where
            everyone has access to world-class medical care.
          </p>
        </div>
      </div>
      <div className="points">
        <p className="text">
          Why<span className="pointspan"> Choose Us</span>{" "}
        </p>
      </div>
      <div className="allcolumn allcolumn-md">
        <div className="firtcol">
          <b className="boldpara">Efficiency</b>
          <p className="colpara">
            We provide prompt, accurate diagnoses and treatments to ensure
            minimal wait times and effective care.
          </p>
        </div>
        <div className="firtcol">
          <b className="boldpara">Convinence</b>
          <p className="colpara">
            Healthcare Hospital offers a wide range of services under one roof,
            making healthcare more accessible and hassle-free.
          </p>
        </div>

        <div className="firtcol">
          <b className="boldpara">Personality</b>
          <p className="colpara">
            Our team takes the time to understand your concerns, building trust
            and delivering care with empathy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
