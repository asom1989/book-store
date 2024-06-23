import Hero from "../../components/Hero/Hero";
import BookSlider from "../.././components/Services/BookSlider/BookSlider";
import Services from "../../components/Services/Services";
import { books } from "../../assets/data/books";
import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <HeadingTitle title="Most gifted" />
      <BookSlider data={books} />
      <HeadingTitle title="Best seller" />
      <BookSlider data={books} />
      <HeadingTitle title="Most wished for" />
      <BookSlider data={books} />
    </div>
  );
}

export default Home;
