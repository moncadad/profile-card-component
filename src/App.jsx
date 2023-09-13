import "./App.sass";

function App() {
  return (
    <div className="wrapper">
      <img
        src="/images/bg-pattern-card.svg"
        alt="Pattern"
        className="top-pattern"
      />{" "}
      <img src="/images/image-victor.jpg" alt="Profile" className="profile" />
      <main className="content">
        <section className="user">
          <h1>
            Victor Crest <span>26</span>
          </h1>
          <p>London</p>
        </section>
        <section className="stats">
          <div className="followers">
            <h1>80K</h1>
            <p>Followers</p>
          </div>
          <div className="likes">
            <h1>803K</h1>
            <p>Likes</p>
          </div>
          <div className="likes">
            <h1>1.4K</h1>
            <p>Photos</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
