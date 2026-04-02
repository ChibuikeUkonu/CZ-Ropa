
  'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import LoadingScreen from '../components/LoadingScreen';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import { products } from '../utils/products';
import Footer from '../components/Footer';
import ContactSection from '@/components/ContactSection';
import AboutUsSection from '@/components/AboutUsSection';
import NewsletterForm from '@/components/NewsletterForm';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // control time here

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <>
      <Header/>
      <Hero />
      <ProductGrid products={[]} />
      <AboutUsSection/>
      <ContactSection />
      <NewsletterForm/>
      <Footer />
    </>
  )
}

export default HomePage
