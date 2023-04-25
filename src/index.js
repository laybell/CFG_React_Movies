import React from 'react';
import ReactDOM from 'react-dom/client';


//pages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import AppReview from './pages/Review';

export default function AppIndex() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="Review" element={<AppReview />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


<AppIndex />



);



