import React from 'react';
import styles from '../../../styles/modules/HeroSection.module.scss';
import Image from 'next/image';
import { AiFillInstagram, AiFillGithub, AiFillMail } from 'react-icons/ai';
import { FaReact, FaSass } from 'react-icons/fa';
import { SiMaterialUi } from 'react-icons/si';
const HeroSection = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.leftList}>
          <div className={styles.logo}>
            <Image
              src='/logo.png'
              alt='Ashutosh Bisoyi Logo'
              width={20}
              height={20}
            />
          </div>
          <ul>
            <li>About</li>
            <li>Works</li>
          </ul>
        </div>
        <ul className={styles.rightList}>
          <li>
            <AiFillInstagram className={styles.icon} />
            Instagram
          </li>
          <li>
            <AiFillGithub className={styles.icon} />
            Github
          </li>
          <li>
            <div className={styles.mail}>
              <AiFillMail className={styles.icon} />
            </div>
          </li>
        </ul>
      </nav>
      <section className={styles.main}>
        <div className={styles.content}>
          <div>
            <span>Hello World!</span>
            <h1>I am Ashutosh</h1>
            <p>I help startups developing outstanding web products.</p>
            <button>Let’s Catch Up!</button>
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
