import "./Poster.css";

const Poster = ({ imageSrc, name, text, children }) => {
  console.log(children);
  return (
    <article>
      <img src={imageSrc} alt="pic" />
      <h2>{name}</h2>
      <p>{text}</p>
      {children}
    </article>
  );
};

export default Poster;
