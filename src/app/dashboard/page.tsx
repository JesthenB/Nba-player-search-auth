'use client'
export default function Dashboard() {
  const handleClick = async () =>{
    // console.log('it works');
    try{
      const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=');
      const data = await response.json();
      console.log('data from api', data);
    } catch (error) {
      console.error('Error fetching data:', error)
    }
};
    

  return (
    <div className="container">
      <form className="search-input">
        <input type="search"></input>
        <button type="button" onClick={handleClick}>Search</button>
      </form>
      <div className="card start-hero">
        <p className="text-body-2 start-hero-intro"></p>
        <p className="text-display-2"></p>
      </div>
    </div>
  );
}
