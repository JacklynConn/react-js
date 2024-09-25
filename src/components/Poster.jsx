import imgSrc from '../assets/boy.png'
import "./Poster.css"

const poster = () => {
  return (
    <article>
        <img src={imgSrc} alt="pic" />
        <h2>Mak Mach</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel fugiat hic suscipit.
        </p>
    </article>
  )
}

export default poster