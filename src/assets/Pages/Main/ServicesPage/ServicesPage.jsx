/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ServicesPage.css";
import ItPark from "../../../../images/itpark.jpg";
import Image2 from "../../../../images/metall.jpg"; // Example images
import Image3 from "../../../../images/tamirlash.jpg";
import Image4 from "../../../../images/aloqabank.jpg";
import Image5 from "../../../../images/collegue.jpg";

const HoverImageLink = ({ text, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseMove = (e) =>
    setMousePosition({ x: e.clientX, y: e.clientY });

  return (
    <section className="service-link-container">
      <a
        href="#"
        className="service-link"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {text}
      </a>

      {isHovered && (
        <img
          src={image}
          alt="Service"
          className="hover-image"
          style={{
            left: mousePosition.x + 300 + "px",
            top: mousePosition.y + 20 + "px",
          }}
        />
      )}
    </section>
  );
};

const ServicesPage = () => {
  const links = [
    {
      text: "Davlat va xususiy sektor uchun qurilish xizmatlari",
      image: ItPark,
    },
    { text: "Metall qurilish ishlab chiqarish va o‘rnatish", image: Image2 },
    { text: "Rekonstruksiya va ta’mirlash xizmatlari", image: Image3 },
    { text: "Maxsus bankomat kabinalarini ishlab chiqarish", image: Image4 },
    { text: "Professional va malakali ishchi kuchi", image: Image5 },
  ];

  return (
    <div className="container">
      <h2 className="service-title">Xizmatlar</h2>
      <div className="services-page">
        {links.map((link, index) => (
          <HoverImageLink key={index} text={link.text} image={link.image} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
