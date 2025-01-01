import Topbar from "../Components/Topbar";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import SectioncCom from "../Components/SectioncCom";
import SectionCon from "../Components/SectionCon"
import Section2Con from "../Components/Section2Con";
import OurAchiv from "../Components/OurAchiv";
import Courses from  "../Components/Courses";
import CoursesSec from "../Components/CoursesSec";
import ReviewSec from "../Components/ReviewSec";
import Testimonial from "../Components/Testimonial";
import Image from "next/image";
import Head from "next/head"; 
export default function Home() {
  return (
    <>
      <Head>
        <title>Home - My Website</title>
        <meta name="description" content="Welcome to the homepage of our site, featuring services, products, and more!" />
        <meta name="robots" content="index, follow" />
      </Head>
      
      <Topbar />
      <Navbar />
      <Hero />
      <SectioncCom />
      <SectionCon />
      <Section2Con />
      <OurAchiv />
      <Courses />
      <CoursesSec />
      <ReviewSec />
      <Testimonial />
      <h1>Welcome to the Home Page</h1>
    </>
  );
}
