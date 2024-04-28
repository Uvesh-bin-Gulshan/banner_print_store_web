import Image from "next/image";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import Hero from "./_component/Hero";
import Category from "./_component/Category";
import Count from "./_component/Count";
import Preview from "./_component/Preview";
import SocialMedia from "./_component/SocialMedia";

export default function Home() {
  return (
  <>
  <Header/>
  <Hero/>
  <Category/>
  <Preview/>
  <Count/>
  <SocialMedia/>
  <Footer/>

  </>
  );
}
