
import Hero from "./Hero";
import Placelist from "./Placelist";


const Home = () => {
  return <div>
    <section id="home_page">
    <div className="home_container">
        <Hero/>
        <div className="placeContainer">
            <Placelist />
        </div>
        
    </div>
</section>
  </div>;
};

export default Home;
