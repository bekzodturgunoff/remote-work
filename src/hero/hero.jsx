import logoDatabiz from "../../imgs/client-logo/client-databiz.svg";
import logoAudiophile from "../../imgs/client-logo/client-audiophile.svg";
import logoMeet from "../../imgs/client-logo/client-meet.svg";
import logoMaker from "../../imgs/client-logo/client-maker.svg";
import heroImg from "../../imgs/image-hero-desktop.png";
import "../App.css";
export default function Hero() {
  return (
    <div className="hero-app">
      <div className="hero-container">
        <div className="hero-texts left-hero">
          <h1>Make remote work</h1>
          <p text-3xl font-bold underline>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productive soar.
          </p>
          <button>Learn more</button>
          <div className="hero-left-logos left-logos-hero">
            <img src={logoDatabiz} alt="logo-databiz" />
            <img src={logoAudiophile} alt="logo-audiophile" />
            <img src={logoMeet} alt="logo-meet" />
            <img src={logoMaker} alt="logo-maker" />
          </div>
        </div>
        <div className="hero-img right-hero">
          <img src={heroImg} alt="hero-image" />
        </div>
      </div>
    </div>
  );
}
