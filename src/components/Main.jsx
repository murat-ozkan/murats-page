import "./Main.css";

const Main = (props) => {
  const { img, title, desc } = props;
  return (
    <div className="main">
      <div className="card">
        <img src={img} alt="" className="mainİmg" />
        <h4 className="title">{title}</h4>
        <div className="desc">
          <p className="desc">{desc}</p>
        </div>
        <button style={{cursor: "pointer"}} className="btn" type="submit">
          Enrollment
        </button>
      </div>
    </div>
  );
};

export default Main;
