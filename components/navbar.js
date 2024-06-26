const nav = document.getElementById("nav");

function NavBar() {
  return (
    <>
      <img src="assets/img/playstation.svg" />

      <div class="nav-items">
        <a href="/">
          Games<i class="bx bxs-chevron-down"></i>
        </a>
        <a href="/">
          PS5<i class="bx bxs-chevron-down"></i>
        </a>
        <a href="/">
          PS4<i class="bx bxs-chevron-down"></i>
        </a>
        <a href="/">
          Hardware<i class="bx bxs-chevron-down"></i>
        </a>
        <a href="/">
          Services<i class="bx bxs-chevron-down"></i>
        </a>
        <a href="/">
          News<i class="bx bxs-chevron-down"></i>
        </a>
        <a href="/">
          Shop<i class="bx bxs-chevron-down"></i>
        </a>
        <a href="/">
          Support<i class="bx bxs-chevron-down"></i>
        </a>
      </div>

      <button>Sign In</button>
      <img src="assets/img/search.svg" alt="" />
    </>
  );
}

const root = ReactDOM.createRoot(nav).render(<NavBar />);
