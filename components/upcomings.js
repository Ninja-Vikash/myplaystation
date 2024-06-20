const upcomingCards = document.getElementById("upcomingCards");

function Upcoming() {
  const upcomingCard = [
    {
      cardImg: "img1",
      cardLabel: "ps4",
      cardTitle: "Hogwarts Legacy",
    },
    {
      cardImg: "img2",
      cardLabel: "ps5",
      cardTitle: "Marvel's Spider-Man 2",
    },
    {
      cardImg: "img3",
      cardLabel: "ps5",
      cardTitle: "Tekken 8",
    },
    {
      cardImg: "img4",
      cardLabel: "ps4",
      cardTitle: "EA SPORTS™ FC 24 IV",
    },
    {
      cardImg: "img5",
      cardLabel: "ps5",
      cardTitle: "Suicide Squad: Kill the Just..",
    },
    {
      cardImg: "img6",
      cardLabel: "ps4",
      cardTitle: "Prince of Persia The Lost Cr..",
    },
    {
      cardImg: "img7",
      cardLabel: "ps4",
      cardTitle: "God of War Ragnarök",
    },
    {
      cardImg: "img8",
      cardLabel: "ps5",
      cardTitle: "The Last of Us™ Part I",
    },
    {
      cardImg: "img9",
      cardLabel: "ps5",
      cardTitle: "Alan Wake 2",
    },
    {
      cardImg: "img10",
      cardLabel: "ps5",
      cardTitle: "Final Fantasy XVI",
    },
    {
      cardImg: "img11",
      cardLabel: "ps4",
      cardTitle: "Call of Duty: Modern Warfare",
    },
    {
      cardImg: "img12",
      cardLabel: "ps4",
      cardTitle: "LEGO Fortnite",
    },
  ];

  return (
    <>
      <div className="card-container">
        {upcomingCard.map((card, index) => {
          return (
            <div key={index} className="card">
              <div className="card-img">
                <img
                  src={`assets/img/upcoming/${card.cardImg}.webp`}
                  alt={`${card.cardTitle}`}
                />
                <img
                  src={`assets/img/upcoming/${card.cardLabel}.svg`}
                  alt={`${card.cardLabel}`}
                />
                <div className="shadow"></div>
              </div>
              <h4>{card.cardTitle}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(upcomingCards).render(<Upcoming />);
