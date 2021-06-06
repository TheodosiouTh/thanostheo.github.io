import React, { lazy } from 'react';

import styles from './ParticleBackground.module.scss';

const Particles = lazy(() => import('react-particles-js'));

export default function ParticleBackground() {
  return (
    <>
      <Particles
        className={styles.particles}
        params={{
          particles: {
            number: {
              value: 75,
            },
          },
        }}
      />
      <Particles
        className={styles.mobileParticles}
        params={{
          particles: {
            number: {
              value: 25,
            },
            size: {
              value: 1,
            },
          } }}
      />
    </>
  );
}
