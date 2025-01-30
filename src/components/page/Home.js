import { useState } from "react";
import "./Home.css";
import ResumeData from "../../data/ResumeData";
import { SingleContent } from "../SingleContent";

const Home = () => {
  const [content, setContent] = useState(ResumeData);

  return (
    <main>
      <div className="main-container">
        <div className="header">
          <h2>Thank you for visiting my profile!</h2>
          <h2>I appreciate your time and interest.</h2>
        </div>
        <section className="resume">
          {content.map((data) => {
            return <SingleContent key={data.id} {...data} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Home;
