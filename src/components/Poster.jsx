import "./Poster.css";

const Poster = (props) => {
  console.log(props);
  return (
    <article>
      <img src={props.imageSrc} alt="pic" />
      <h2>{props.name}</h2>
      <p>{props.text}</p>
    </article>
  );
};

export default Poster;
