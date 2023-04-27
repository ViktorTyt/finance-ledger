import css from "./Hero.module.css";
import { ReactComponent as AngleIcon } from "../../images/fa-solid_angle-right.svg";
import Container from "../Container/Container";

const Hero = () => {
  return (
    <section className={css.heroImg}>
      <Container>
        <h2 className={css.heroTitle}> The Sky Is The Limit</h2>
        <p className={css.heroText}>
          We provide world class financial assistance
        </p>
        <button className={css.heroBtn}>
          <AngleIcon />
          Read More
        </button>
      </Container>
    </section>
  );
};

export default Hero;
