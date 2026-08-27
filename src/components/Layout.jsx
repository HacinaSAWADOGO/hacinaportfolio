import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      {/* Structural background decoration */}
      <div className="bg-wave-container">
        {/* Large flowing soft pink circles representing background waves */}
        <div className="bg-wave" style={{ width: '600px', height: '600px', top: '-10%', left: '-10%' }} />
        <div className="bg-wave" style={{ width: '800px', height: '800px', top: '35%', right: '-15%' }} />
        <div className="bg-wave" style={{ width: '500px', height: '500px', bottom: '-5%', left: '5%' }} />
      </div>
      
      <Navbar />
      
      <main className="app-container">
        {children}
      </main>
      
      <Footer />
    </>
  );
}
