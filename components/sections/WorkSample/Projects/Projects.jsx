import React, { useEffect, useState } from 'react';
import ProjectData from '../../../../src/Data/ProjectData';
import ProjectCard from '../../../projectcard/ProjectCard';
import styles from './Projects.module.scss';
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('top');
  const [projects, setProjects] = useState(ProjectData);
  useEffect(() => {
    const newData = ProjectData.filter((project) =>
      project.tag.includes(selectedCategory)
    );
    setProjects(newData);
  }, []);
  const setCategory = (name) => {
    setSelectedCategory(name);
    const newData = ProjectData.filter((project) => project.tag.includes(name));
    setProjects(newData);
  };
  console.log(selectedCategory);
  return (
    <section className='block'>
      <div className={styles.topbar}>
        <ul className={styles.filters}>
          <li>
            <button
              className={selectedCategory === 'top' ? styles.selected : ''}
              onClick={() => setCategory('top')}
            >
              Top
            </button>
          </li>
          <li>
            <button
              className={selectedCategory === 'all' ? styles.selected : ''}
              onClick={() => setCategory('all')}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={selectedCategory === 'react' ? styles.selected : ''}
              onClick={() => setCategory('react')}
            >
              React
            </button>
          </li>
          <li>
            <button
              className={selectedCategory === 'next' ? styles.selected : ''}
              onClick={() => setCategory('next')}
            >
              Next
            </button>
          </li>
          <li>
            <button
              className={selectedCategory === 'basic' ? styles.selected : ''}
              onClick={() => setCategory('basic')}
            >
              Basic
            </button>
          </li>
        </ul>
        <span
          className={styles.status}
        >{`${projects.length} / ${ProjectData.length}`}</span>
      </div>
      <div className={styles.cardContainer}>
        {projects.map((value, index) => {
          return <ProjectCard key={index} {...value} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
