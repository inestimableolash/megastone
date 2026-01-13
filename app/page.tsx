import About from "./components/About";
import Hero from "./components/Hero";
import Service from "./components/Service";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <About />
      <WhyChooseUs />
      <Testimonial />
    </main>
  );
}
