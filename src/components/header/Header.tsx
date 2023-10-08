import { useSpring, animated, config } from "@react-spring/web";
import logo from "../../assets/logo.svg";
import info from "../../assets/info.svg";
import lenguaje from "../../assets/lenguaje.svg";
import login from "../../assets/login.svg";
import "./Header.css";

function Header() {
  const titleProps = useSpring({
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(-100px)" },
    config: config.slow,
  });
  const constActionBarProps = useSpring({
    opacity: 1,
    transform: "translateX(-32px)",
    from: { opacity: 0, transform: "translateX(0px)" },
    config: config.slow,
  });

  return (
    <header className="header-container">
      <animated.img src={logo} style={{ ...titleProps, position: "relative" }} />
      <animated.div className="header-actionBar" style={{ ...constActionBarProps, position: "relative" }}>
        <img src={info} />
        <img src={lenguaje} />
        <img src={login} />
      </animated.div>
      
    </header>
  );
}

export default Header;