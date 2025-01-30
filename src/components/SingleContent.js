import "./SingleContect.css";
import {useState} from "react"

export const SingleContent = ({ title, img }) => {
    const [showContent , setShowContent] = useState(false)
  return (
    <article className="content">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowContent(!showContent)}>{showContent ? "Hide" : "Let's see my RESUME"}</button>
      </header>
        <div className={`img-container ${showContent ? "show" : ""}`}>
       {showContent &&    img.map((src, index) => (
            <img key={index} src={src} alt={`${title} ${index + 1}`} />
          ))}
        </div>
    </article>
  );
};
