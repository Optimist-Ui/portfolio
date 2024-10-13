import About from "./about/page";
import Contact from "./contact/page";
import Header from "./components/Header";
import MyWork from "./latestwork/page";

export default function Home() {
  return (
    <>
      <Header />
      <MyWork />
      <About />
      <Contact />
    </>
  );
}
