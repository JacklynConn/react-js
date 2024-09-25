import "./Poster.css";

const Poster = ({ imageSrc, name, text }) => {
  return (
    <article>
      <img src={imageSrc} alt="pic" />
      <h2>{name}</h2>
      <p>{text}</p>
    </article>
  );
};

export default Poster;
