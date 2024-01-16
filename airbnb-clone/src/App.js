import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const elementData = data.map(e => {
    return <Card 
              img={e.coverImg}
              rating={e.stats.rating}
              reviewCount={e.stats.reviewCount}
              country={e.location}
              title={e.title}
              price={e.price}
              openSpots={e.openSpots}
          />
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className='card-list'>
        {elementData}
      </section>
    </div>
  );
}

export default App;
