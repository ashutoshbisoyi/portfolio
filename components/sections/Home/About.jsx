import React from 'react';
import styles from '../../../styles/modules/About.module.scss';
import Image from 'next/image';
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillMail,
} from 'react-icons/ai';

const About = () => {
  return (
    <section className={styles.main}>
      <div className={styles.figure}>
        <div className={styles.imageContainer}>
          <Image
            src='/ashutoshbisoyi.png'
            alt='Ashutosh Bisoyi Image'
            width={450}
            height={450}
          />
        </div>
      </div>
      <div className={styles.content}>
        <h2>About Me</h2>
        <p>
          I am Ashutosh from Odisha, India. I am a Front End developer with a
          year experience in building websites and web applications. <br />
          <br /> As a Front End Developer, My role is to write and style the
          front-end components that meet the requirements of mocks and fulfill
          the user stories. With this, I am also experienced in making
          interactive web applications and API integrations.
          <br />
          <br /> Besides developing web applications, I am quite passionate
          about dancing, anchoring, and acting. Want to know more? We are just a
          message away.
        </p>
        <ul className={styles.socialmedia}>
          <li>
            <AiFillLinkedin className={styles.icon} />
          </li>
          <li>
            <AiFillGithub className={styles.icon} />
          </li>
          <li>
            <AiFillMail className={styles.icon} />
          </li>
          <li>
            <AiFillInstagram className={styles.icon} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
