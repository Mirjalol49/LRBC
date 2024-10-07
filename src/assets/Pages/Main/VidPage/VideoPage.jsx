// src/assets/Pages/Main/VidPage/VideoPage.tsx
import HeroVideoDialog from "../../../../components/ui/hero-video-dialog";
import Thmb from "../../../../images/thumbnail.jpg";
const VideoPage = () => {
  return (
    <div className="container">
      <div className="relative">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/dkpEn__VfMo" // Correct embed URL
          thumbnailSrc={Thmb}
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
};

export default VideoPage; // Ensure you're using default export
