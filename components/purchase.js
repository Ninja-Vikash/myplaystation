const purchase = document.getElementById("purchase");

function Purchase() {
  const itemImages = ["01", "02", "03", "04", "05", "06"];

  return (
    <>
      <section className="ps-acces">
        <div className="product-detail">
          <h2>Introducing the PS5 console and accessories</h2>

          <h4>PlayStation 5 Console</h4>
          <p>
            Experience an all-new generation of incredible PlayStation games.
          </p>
          <div className="buttons">
            <button>Find out more</button>
          </div>
        </div>

        <div className="side-image">
          <img src={`assets/img/purchaseItemList/01.webp`} />
        </div>
      </section>

      <section className="purchase-items">
        {itemImages.map((itemImage, index) => {
          return (
            <div key={index} className="items">
              <div className="item-img">
                <img src={`assets/img/purchaseItemList/${itemImage}.webp`} />
              </div>
              <p>PS5 Console</p>
            </div>
          );
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(purchase).render(<Purchase />);
