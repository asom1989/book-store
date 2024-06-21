import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import BookSlider from "./components/Services/BookSlider/BookSlider";
import Services from "./components/Services/Services";
import { books } from "./assets/data/books";
import HeadingTitle from "./components/HeadingTitle/HeadingTitle";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <HeadingTitle title="Most gifted" />
      <BookSlider data={books} />
      <HeadingTitle title="Best seller" />
      <BookSlider data={books} />
      <HeadingTitle title="Most wished for" />
      <BookSlider data={books} />
      <Footer />
    </>
  );
}

export default App;
