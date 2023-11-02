import "./index.css";

const index = () => {
  const navbarContent = ["Home", "About", "Products", "Contacts"];

  return (
    <div className="wrapper">
      <div className="wrapper-inner-nav">
        <ul>
          {navbarContent.map((i) => (
            <li key={i}>
              <a href="#">{i}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default index;
