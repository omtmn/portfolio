import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import ProjectInfo from "../components/Projects/ProjectInfo";

const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <ProjectInfo />
      <Contact/>
    </>
  );
};

export default Home;
