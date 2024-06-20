const heroCards = document.getElementById("heroCards");

function HeroCards() {
  const cardImages = [
    "horizon-adventures-keyart",
    "astro-bot-keyart",
    "V-Rising-Launch-hero-keyart",
    "concord-keyart",
    "FC24-euros-keyart",
    "shin-megami-tensei-v-vengeance-keyart",
    "more",
  ];
  return (
    <>
      <section class="hero-cards">
        {cardImages.map((img, index) => {
          return (
            <div key={index} className="option">
              <img
                src={`assets/img/hero/hero-cards/${img}.webp`}
                alt={img}
              />
            </div>
          );
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(heroCards).render(<HeroCards />);
