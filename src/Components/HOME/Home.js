import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../HOME/NAVBAR/NavBar';
import Banner from './BANNER/Banner';
import Trending from './TRENDING/Trending';
import Category from '../HOME/PopularCategories/Category';
import Blog from './Blogs/Blog';
import PriceSection from './PRICE/PriceSection';
import Footer from './Footer/Footer';


const Home = () => {
  return (
    <>
        <NavBar/>
        <Banner/>
        <Trending/>
        <Category/>
        <PriceSection/>
        <Blog/>
        <Footer/>
    </>    
  );
};

export default Home;
