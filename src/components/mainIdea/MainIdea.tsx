import { useSpring, animated, config } from "@react-spring/web"
import mainIdea from "../../assets/mainIdea.svg";
import "./MainIdea.css";

function MainIdea() {
  const imageProps = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(100px)" },
    config: config.slow, // Cambia la curva de aceleración a una más lenta
  });

  return (
    <div className="mainIdea-container">
      <animated.img
        src={mainIdea}
        style={{
          ...imageProps,
        }}
      />
    </div>
  );
}

export default MainIdea;