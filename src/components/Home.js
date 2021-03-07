const Home = () => {
  const handleClick = (e) => {
    console.log('Hi Martin', e);
  }
  const handleClickAgain = (name) => {
    console.log(`hello ${name}`);
  }
  return ( 
    <div className="home">
      <h1>home sec</h1>
      <button onClick={handleClick}>Click here</button>
      <button onClick={ () => handleClickAgain('Martin')}>Click me</button>
    </div>
   );
}
 
export default Home;