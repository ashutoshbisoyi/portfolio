import Head from 'next/head';
import HeroSection from '../components/sections/Home/HeroSection';
import About from '../components/sections/Home/About';
import Details from '../components/sections/Home/Details';
import Statistics from '../components/sections/Home/Statistics';
import WorkSample from '../components/sections/Home/WorkSample';
import Testimonial from '../components/sections/Home/Testimonial';
import Connect from '../components/sections/Home/Connect';
export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <title>Ashutosh Bisoyi - Frontend Developer</title>
        <meta
          name='description'
          content='Ashutosh Bisoyi - Frontend developer portfolio'
        />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <HeroSection />
        <About />
        <Details />
        <Statistics />
        <WorkSample />
        <Testimonial />
        <Connect />
      </main>
      {/* <footer>footer</footer> */}
    </div>
  );
}
