import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import VacationCourses from '../components/VacationCourses';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Training Horizons</title>
        <meta name="description" content="Get your skills upgraded with us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Categories />
      <VacationCourses />
      <Testimonials />
      <Footer />
    </div>
  );
}
