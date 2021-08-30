import React from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import { FaReact, FaSass } from 'react-icons/fa';
import { SiMaterialUi } from 'react-icons/si';
import NavBar from '../../../navbar/NavBar';
const HeroSection = () => {
  return (
    <>
      <NavBar />
      <section className={styles.main}>
        <div className={styles.content}>
          <div>
            <span>Hello World!</span>
            <h1>I am Ashutosh</h1>
            <p>I help startups developing outstanding web products.</p>
            <a href='mailto:ashutoshbisoyi205@gmail.com' target='_null'>
              <button>Let’s Catch Up!</button>
            </a>
          </div>
        </div>
        <div className={styles.figure}>
          {/* <Image
            src='/ui-elements/screen.png'
            alt='Ashutosh Bisoyi Logo'
            layout='responsive'
            width={746}
            height={483}
          /> */}
          <div className={styles.image}>
            <div className={styles.reactIllustration}>
              <FaReact className={styles.reactIcon} />
            </div>
            <div className={styles.sassIllustration}>
              <FaSass className={styles.sassIcon} />
            </div>
            <div className={styles.materialIllustration}>
              <SiMaterialUi className={styles.materialIcon} />
            </div>
            <div className={styles.rocketIllustration}>
              <Image
                src='/ui-elements/rocket.png'
                alt='Illustration'
                layout='responsive'
                width={300}
                height={300}
                className={styles.rocket}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
