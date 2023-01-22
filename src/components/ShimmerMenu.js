const ShimmerMenu = () => {
  return (
    <div className="menu">
      <div>
        <h1></h1>
        <h2></h2>
        <img src style={{ width: "500px", height: "400px" }}></img>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
      </div>
      <div>
        <h1></h1>
        <ul tyle={{ disply: "flex" }}>
          {Array(30)
            .fill("")
            .map((item) => (
              <li key={item}></li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ShimmerMenu;
