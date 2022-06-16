import "./style-hero.css";
export default function Hero() {
  return (
    <div className="Hero-app">
      <div className="hero-container">
        <div className="hero-texts left-hero">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productive soar.
          </p>
          <button>Learn more</button>
          <div className="hero-left-logos left-logos-hero">
            <img
              src="../imgs/client-logo/client-databiz.svg"
              alt="logo-databiz"
            />
            <img
              src="../imgs/client-logo/client-audiophile.svg"
              alt="logo-audiophile"
            />
            <img src="../imgs/client-logo/client-meet.svg" alt="logo-meet" />
            <img src="../imgs/client-logo/client-maker.svg" alt="logo-maker" />
          </div>
        </div>
        <div className="hero-img right-hero">
          <img src="../imgs/image-hero-desktop.png" alt="hero-image" />
        </div>
      </div>
    </div>
  );
}
