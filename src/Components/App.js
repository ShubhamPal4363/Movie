import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="container" style={{ margin: "0px" }}>
        <div className="row">
          <div className="col-6 col-md-4 pt-4">
            <Header />
          </div>
          <div className="col-12 col-md-8 pt-4">
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
