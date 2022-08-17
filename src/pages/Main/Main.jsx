import React, { lazy, Suspense } from 'react';

import Loader from '../../components/Loader/Loader';

/* COMPONETS */
const Hero = lazy(() => import('../../components/Hero/Hero'));
const AboutMe = lazy(() => import('../../components/AboutMe/AboutMe'));
const Portfolio = lazy(() => import('../../components/Portfolio/Portfolio'));

export default function Index() {
  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      <AboutMe />
      <Portfolio />
    </Suspense>
  );
}
