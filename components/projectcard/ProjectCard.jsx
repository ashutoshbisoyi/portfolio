import React from 'react';
import styles from './ProjectCard.module.scss';
import { AiOutlineLink } from 'react-icons/ai';
import { ImOffice } from 'react-icons/im';
import Link from 'next/link';
const ProjectCard = ({
  name,
  headline,
  description,
  imagePath,
  type,
  organization,
  link,
}) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url('/projects/${imagePath}.png')` }}
      ></div>
      <div className={styles.content}>
        <div>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.headline}>{headline}</p>
        </div>
        <div className={styles.btnContainer}>
          {organization ? (
            organization.link ? (
              <a href={organization.link} target='_null'>
                <span className={styles.tag}>
                  <ImOffice className={styles.icon} />
                  {organization.name}
                </span>
              </a>
            ) : (
              <span className={styles.tag}>{organization.name}</span>
            )
          ) : (
            <span className={styles.tag}>{type}</span>
          )}
          <a href={link} target='_null'>
            <button>Visit Site</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
