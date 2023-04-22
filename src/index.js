import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalProvider } from './context/GlobalState';


//pages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Watchlist from './pages/Watchlist';
import AppReview from './pages/Review';

export default function AppIndex() {
    return (
      <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Watchlist" element={<Watchlist />} />
            <Route path="Review" element={<AppReview />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
      </GlobalProvider>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


<AppIndex />



);



