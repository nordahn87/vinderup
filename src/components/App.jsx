import React from 'react';
import Homepage from './homepage'
import Gallery from './gallery';
import Footer from './footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './scroll-to-top';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/galleri" element={<Gallery />} />
        </Routes>
      </ScrollToTop>
      <Footer />

    </BrowserRouter >
  );
}

export default App;
