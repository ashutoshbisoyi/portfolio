import React from 'react';
import styles from '../../../styles/modules/Connect.module.scss';
import Lottie from 'react-lottie';
import animationData from '../../../Lottie Animations/riding.json';
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillMail,
} from 'react-icons/ai';
const Connect = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <section>
      <div className={styles.animation}>
        <Lottie options={defaultOptions} className={styles.animation} />
      </div>
      <div className={styles.content}>
        <div>
          <h2>
            <span>Work Hard</span>
            <br />
            Play Hard
          </h2>
          <p>
            I am excited to discuss your next project and develope your idea.
          </p>
          <a href='mailto:ashutoshbisoyi205@gmail.com' target='_blank'>
            <button>Hire Me!</button>
          </a>
          <a href='mailto:ashutoshbisoyi205@gmail.com' target='_blank'>
            <button>Freelance Work!</button>
          </a>
          <ul className={styles.socialmedia}>
            <a
              href='https://www.linkedin.com/in/ashutoshbisoyi/'
              target='_null'
            >
              <li>
                <AiFillLinkedin className={styles.icon} />
              </li>
            </a>
            <a href='https://github.com/ashutoshbisoyi' target='_null'>
              <li>
                <AiFillGithub className={styles.icon} />
              </li>
            </a>
            <a href='mailto:ashutoshbisoyi205@gmail.com' target='_null'>
              <li>
                <AiFillMail className={styles.icon} />
              </li>
            </a>
            <a href='https://www.instagram.com/ashutoshbisoyi/' target='_null'>
              <li>
                <AiFillInstagram className={styles.icon} />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Connect;
