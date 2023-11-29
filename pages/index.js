import Head from "next/head";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Main from "../components/Main.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";
import Publications from "../components/Publications.jsx";
import Education from "../components/Education.jsx";
import Certificates from "../components/Certificates.jsx";
import Timeline from "../components/Timeline.jsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hamed Nasr | Machine Learning Engineer</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Certificates />
      <Publications />
      <Education />
      <Contact />
    </div>
  );
}
