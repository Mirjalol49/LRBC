import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";

import ServicePage from "./ServicesPage/ServicesPage";
import { Stats } from "./KeyStats/Stats";
import Steps from "./Steps/Steps";
import VideoPage from "./VidPage/VideoPage";

const Main = () => {
  return (
    <main>
      <Hero />

      <ServicePage />
      <Stats />
      <Steps />
      <VideoPage />
      {/* <WhyChoose /> */}
    </main>
  );
};

export default Main;
