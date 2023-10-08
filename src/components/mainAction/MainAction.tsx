import { useSpring, animated, config } from "@react-spring/web"
import "./MainAction.css";

function MainAction() {
  const buttonProps = useSpring({
    opacity: 1,
    from: { opacity: 0},
    delay: 600,
    config: config.slow, // Cambia la curva de aceleración a una más lenta
  });

  return (
    <div className="mainAction-container">
      <animated.button style={buttonProps}>GET AN APP</animated.button>
    </div>
  );
}

export default MainAction;