const itemCard = document.getElementById("itemCard");

function ItemCard() {
  const itemImages = ["01", "02", "03", "04", "05", "06"];
  return (
    <>
      <section class="purchase-items">
        {itemImages.map((itemImage, index) => {
          return (
            <div key={index} class="items">
              <div class="item-img">
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

const root = ReactDOM.createRoot(itemCard).render(<ItemCard />);
