import React from 'react';

import {
  LinkedIn,
  GitHub,
  Instagram,
  FileCopy,
  Email,
} from '@material-ui/icons';

import { IconLink } from '../../components/Links/Links';

import styles from './About.module.scss';

const { PUBLIC_URL } = process.env;

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>
        <header className={styles.pageHead}>About</header>
        <section className={styles.mainInfo}>
          <img
            src={`${PUBLIC_URL}/assets/images/me.jpg`}
            alt="Thanos Theodosiou"
            className={styles.personalImage}
          />
          <div className={styles.personalMessage}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            repellendus aut maxime nam explicabo, minima reprehenderit quas
            optio exercitationem totam id. Ut aspernatur id at quaerat modi vero
            blanditiis consectetur?
          </div>
        </section>
        <section className={styles.subInfo}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            sint, nulla voluptatum laudantium adipisci animi iste impedit
            exercitationem deleniti consequuntur perferendis corporis. Impedit
            veniam labore blanditiis at et pariatur ducimus iste, rem voluptates
            perferendis non quo laborum cupiditate expedita aliquid asperiores
            porro atque commodi necessitatibus eaque eum deleniti. Temporibus,
            excepturi. Illo recusandae eius dolore quis reiciendis consequatur
            excepturi placeat fuga? Itaque accusantium hic id provident earum
            magnam aut aperiam nulla numquam amet error natus quas, ex minima
            labore quaerat, exercitationem dolore similique alias molestias
            dolor velit eos? Officia corporis cupiditate quisquam molestiae
            doloribus repudiandae, ut odit voluptatibus, amet voluptates
            perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            sint, nulla voluptatum laudantium adipisci animi iste impedit
            exercitationem deleniti consequuntur perferendis corporis. Impedit
            veniam labore blanditiis at et pariatur ducimus iste, rem voluptates
            perferendis non quo laborum cupiditate expedita aliquid asperiores
            porro atque commodi necessitatibus eaque eum deleniti. Temporibus,
            excepturi. Illo recusandae eius dolore quis reiciendis consequatur
            excepturi placeat fuga? Itaque accusantium hic id provident earum
            magnam aut aperiam nulla numquam amet error natus quas, ex minima
            labore quaerat, exercitationem dolore similique alias molestias
            dolor velit eos? Officia corporis cupiditate quisquam molestiae
            doloribus repudiandae, ut odit voluptatibus, amet voluptates
            perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            sint, nulla voluptatum laudantium adipisci animi iste impedit
            exercitationem deleniti consequuntur perferendis corporis. Impedit
            veniam labore blanditiis at et pariatur ducimus iste, rem voluptates
            perferendis non quo laborum cupiditate expedita aliquid asperiores
            porro atque commodi necessitatibus eaque eum deleniti. Temporibus,
            excepturi. Illo recusandae eius dolore quis reiciendis consequatur
            excepturi placeat fuga? Itaque accusantium hic id provident earum
            magnam aut aperiam nulla numquam amet error natus quas, ex minima
            labore quaerat, exercitationem dolore similique alias molestias
            dolor velit eos? Officia corporis cupiditate quisquam molestiae
            doloribus repudiandae, ut odit voluptatibus, amet voluptates
            perferendis!
          </p>
        </section>
        <section className={styles.links}>
          <div className={styles.resume}>
            <IconLink
              title="Resume"
              route={`${PUBLIC_URL}/assets/images/me.jpg`}
              download
            >
              <FileCopy />
            </IconLink>
          </div>
          <div className={styles.social}>
            <IconLink
              title="LinkedIn Page"
              route="https://www.linkedin.com/in/thanos-theodosiou-61365b18b/"
            >
              <LinkedIn />
            </IconLink>
            <IconLink
              title="Github Page"
              route="https://github.com/TheodosiouTh"
            >
              <GitHub />
            </IconLink>
            <IconLink
              title="Instagram Page"
              route="https://www.instagram.com/thanoswasbusy/"
            >
              <Instagram />
            </IconLink>
          </div>
          <div className={styles.contact}>
            <IconLink title="Contact" route="mailto:thanosthd@gmail.com">
              <Email />
            </IconLink>
          </div>
        </section>
      </div>
    </div>
  );
}
