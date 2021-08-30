import React from 'react';
import styles from './HeroSection.module.scss';
import NavBar from '../../../navbar/NavBar';
import { AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
const HeroSection = () => {
  return (
    <div>
      <div className={styles.hero}>
        <NavBar />
        <div className={styles.content}>
          <div>
            <h1>Work Samples</h1>
            <p>I help startups developing outstanding web products.</p>
            <a
              href='https://github.com/ashutoshbisoyi?tab=repositories'
              target='_null'
            >
              <button>
                <AiFillGithub className='mr-3' /> Explore in GitHub
              </button>
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='/octocat.png'
            alt='Github Octocat'
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
