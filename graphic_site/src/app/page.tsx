import Image from "next/image";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import Hero from "./_component/Hero";
import Category from "./_component/Category";
import Count from "./_component/Count";
import SocialMedia from "./_component/SocialMedia";
import CategoryCard2 from "./category-detail.tsx/CategoryTwo";
import CategoryCard3 from "./category-detail.tsx/CategoryThree";
import Carousel from "./_component/Carousel";
import Contact from "./_component/Contact";
import AboutIntro from "./about-contact-us/AboutIntro";
import HomeOurWork from "./_component/HomeOurWork";
import CategoryCard1 from "./category-detail.tsx/CategoryOne";


export default function Home() {
  return (
  <>
  <Header/>
  <Hero/>
  <div className="md:mt-36">

  <CategoryCard1/>
  <CategoryCard2/>
  <CategoryCard3/>
  </div>
  <HomeOurWork/>
  <Footer/>

  </>
  );
}
