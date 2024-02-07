export default function Dashboard() {
  return (
    <div className="container">
      <form className="search-input">
        <input type="search"></input>
        <button type="button">Search</button>
      </form>
      <div className="card start-hero">
        <p className="text-body-2 start-hero-intro"></p>
        <p className="text-display-2"></p>
      </div>
    </div>
  );
}
