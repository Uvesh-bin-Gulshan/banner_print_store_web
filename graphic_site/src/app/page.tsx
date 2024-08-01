import Image from "next/image";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import Hero from "./_component/Hero";
import Category from "./_component/CategoryLeft";
import Count from "./_component/Count";
import Preview from "./_component/Preview";
import SocialMedia from "./_component/SocialMedia";
import CategoryCard1 from "./category-detail.tsx/CategoryCard1";
import CategoryCard2 from "./category-detail.tsx/CategoryCard2";
import CategoryCard3 from "./category-detail.tsx/CategoryCard3";
import Carousel from "./_component/Carousel";
import Contact from "./_component/Contact";
import AboutIntro from "./about-contact-us/AboutIntro";
import HeroOurWork from "./_component/HomeOurWork";


export default function Home() {
  return (
  <>
  <Header/>
  <Hero/>
  <CategoryCard1/>
  <CategoryCard2/>
  <CategoryCard3/>
  <HeroOurWork/>
  <Footer/>

  </>
  );
}
