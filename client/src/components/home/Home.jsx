import Hero from "./Hero";
import Placelist from "./Placelist";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <section id="home_page" className="h-auto w-full">
        <div className="home_container w-full mx-auto max-w-full px-4 sm:px-6 lg:px-8 py-12">
          <Hero />
          <div className="placeContainer mt-10 p-6 bg-white shadow-lg rounded-lg w-full">
            <div>

            <div className="pTitle text-2xl font-bold text-gray-800 mb-4">
              <span>Search by place</span>
            </div>
            <div className="w-full">
              <Placelist />
            </div>
            
            </div>
            <div className="mt-3">
            <div className="pTitle text-2xl font-bold text-gray-800 mb-4">
              <span>Search by category</span>
            </div>
            <div className="w-full">
              <Placelist />
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
