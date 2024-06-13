import React, { useContext } from "react";
import styles from "./css/course.module.css";
import { ThemeContext } from "../context/ThemeContext";
import { Helmet } from "react-helmet";

export default function About() {
  const [isDarkMode] = useContext(ThemeContext);

  return (
    <>
      <Helmet>
        <title>Portfolio | About me</title>
      </Helmet>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <div className={styles.headerText}>
            <h1 className="header">About me</h1>
          </div>
        </div>
        <div className={styles.articleContainer}>
          <div>
            <h1>Kevin Dworschak</h1>
            <small>
              <i>Full stack JavaScript Developer</i>
            </small>
            <p>
              At 25, I'm a programming student with a head full of code and a
              heart that beats to the rhythm of the Caribbean. My Dominican
              roots fuel my passion for both software development and capturing
              the world through photography. Whether it's building the next big
              app or freezing a perfect sunset, I bring a touch of island energy
              to everything I do.
            </p>
          </div>
          <div>
            {isDarkMode ? (
              <img
                className={styles.image}
                src="/assets/img/wolfboy_cap_no_background.png"
                alt="Liquicity"
                credits="Art by @art_of_asare on Instagram"
              />
            ) : (
              <img
                className={styles.image}
                src="/assets/img/wolfboy_no_background.png"
                alt=""
                credits="Art by @art_of_asare on Instagram"
              />
            )}
          </div>
          <div>
            <h2>Interests</h2>
            <p>
              My life's a vibrant mix – the rhythm of dance floors fuels my
              energy, like a jolt of electricity coursing through my veins. The
              melody of a song gets my soul soaring, whether it's a
              heart-pounding anthem or a soulful ballad that tugs at my
              emotions. When I'm not slaying dragons in fantastical video game
              worlds, I'm out there seeking real-life adventures. Whether it's
              exploring a new city, getting lost in the awe-inspiring beauty of
              nature, or simply trying a new cuisine, my wanderlust is
              ever-present. But at the end of the day, there's nothing quite
              like the joy of social gatherings. Sharing laughter with friends,
              new and old, and forging connections over shared experiences is
              what truly fills my cup. It's in these moments of connection that
              I feel most alive.
            </p>
          </div>
          <div>
            <h2>All about music</h2>
            <p>
              Imagine waking up to a symphony of sound – that's my daily
              routine. Music isn't just an accessory, it's the soundtrack to my
              life. Upbeat melodies greet the dawn, chasing away sleep and
              setting the mood for the day. Coding becomes an artistic dance
              with a perfectly chosen drum and bass beat pulsing in my ears,
              keeping me focused and fueled by the rhythm. The kitchen
              transforms into a fiesta when it's time to cook, salsa or merengue
              adding a vibrant energy to every stir and sizzle. But as the sun
              dips low, the tempo slows with me. Jazz rap or smooth, soulful
              melodies become the soundtrack to unwinding, washing away the
              day's stress and allowing me to drift into relaxation. Music isn't
              just background noise for me; it's the ever-present companion that
              weaves its magic through every aspect of my world.
            </p>
          </div>
          <div>
            {isDarkMode ? (
              <img
                className={styles.image}
                src="/assets/img/liquicity.jpg"
                alt="Liquicity"
              />
            ) : (
              <img
                className={styles.image}
                src="/assets/img/JulieenKevin_BWPH-8.jpg"
                alt=""
              />
            )}
          </div>
          <div>
            <h2>Back to the roots</h2>
            <p>
              My heritage is a beautiful tapestry woven from two distinct
              threads. Born in Belgium, I carry the legacy of my Flemish father.
              Yet, the vibrant colors of the Dominican Republic paint a strong
              influence on my life, thanks to my Dominican mother. Though I
              haven't yet had the chance to explore the DR myself, it holds a
              special place in my heart. Perhaps that's where my love for anime
              and all things Japanese comes in! Maybe in a past life, I walked
              the streets of Tokyo? One day, I hope to visit both the Dominican
              Republic and Japan, fully embracing the rich tapestry of cultures
              that make me who I am.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
