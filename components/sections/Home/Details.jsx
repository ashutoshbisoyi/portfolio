import React from 'react';
import styles from '../../../styles/modules/Details.module.scss';
import Image from 'next/image';

const Details = () => {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2>What I do</h2>
        <p>
          I will help you in shaping your business idea as real-world web
          product. Starting from the design till a optimum development and SEO.
        </p>
        <div className={styles.btnContainer}>
          <button>View Work Sample</button>
        </div>
      </div>
      <div className={styles.figure}>
        <div className={styles.design}></div>
        <div className={styles.spaceCol}></div>
        <div className={styles.firstCol}>
          <div className={styles.developCard}>
            <h3>Develope</h3>
            <p>Building smarter websites, that makes your work done.</p>
            <div className={styles.cardImage}>
              <Image
                src='/ui-elements/developing.png'
                alt='Web Development'
                width={140}
                height={130}
              />
            </div>
          </div>
        </div>
        <div className={styles.spaceCol}></div>
        <div className={styles.secondCol}>
          <div className={styles.designCard}>
            <h3>Design</h3>
            <p>Creative, flexible and affordable website design for you.</p>
            <div className={styles.cardImage}>
              <Image
                src='/ui-elements/designing.png'
                alt='Web Development'
                width={140}
                height={130}
              />
            </div>
          </div>
          <div className={styles.seoCard}>
            <h3>Seo</h3>
            <p>Google only loves you when everyone else loves you first.</p>
            <div className={styles.cardImage}>
              <Image
                src='/ui-elements/seo.png'
                alt='Web Development'
                width={150}
                height={130}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
