import React from 'react';
import type { NextPage } from 'next'
import Hero from '../components/Layout/Hero';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Hero />
      <main className='container mx-auto text-blue-400'>
        <h1>Why was the student report card red?</h1>
      </main>
    </React.Fragment>
  );
};

export default Home
