import React from 'react';
import Particles from 'react-particles-js';

import styles from './ParticleBackground.module.scss';

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
