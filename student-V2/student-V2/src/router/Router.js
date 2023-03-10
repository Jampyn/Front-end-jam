import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import MainHome from '../view/home/MainHome';
import MainStudent from '../view/student/MainStudent';
import Maintest from '../test/Maintest';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/student" element={<MainStudent />} />
          <Route path="/test" element={<Maintest />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
