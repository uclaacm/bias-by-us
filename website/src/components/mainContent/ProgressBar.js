import React, { useContext } from "react";
import "../../main.css";
import "../../index.css";
import "../posts/posts.css";
import "./mainContent.css";
import "./progressBar.css";
import { useWindowDimensions } from "./commonLogic";
import { Link } from "react-scroll";
import { VisibilityContext } from "./commonLogic";

export default function ProgressBar(props) {
  const [windowWidth, windowHeight] = useWindowDimensions();
  const { visibleSections } = useContext(VisibilityContext);

  // Gets the indices of the post sections
  const indices = props.content.reduce((posts, cur, index) => {
    if (cur.post) posts.push(index);
    return posts;
  }, []);

  let content = props.content
    .filter((s, index) => indices.includes(index))
    .map((section, index) => {
      return (
        /* scrollTo configuration options:
            - smooth: animates the scrolling with smooth movement
            - offset: scroll additional px (like padding), so that we can see the content under the navbar
            - duration: total duration of the scroll animation
        */
        <Link
          activeClass="active"
          to={section.post.header}
          smooth={true}
          offset={-100}
          duration={500}
          className="progress-button"
          key={index}
          aria-label={`move to ${section.post.header}`}
        >
          <img
            className={`profile-pic no-margin static-size ${
              props.content.indexOf(section) > visibleSections
                ? "gray-image"
                : ""
            }`}
            src={section.post.profilePic}
            alt={`the icon for the "${section.post.header}" section`}
          />
        </Link>
      );
    });

  /*conditionally render either null or the progress bar 
  depending on the window width */
  return windowWidth > 1300 && windowHeight > 95 * indices.length ? (
    <div className="progress-bar">{content}</div>
  ) : null;
}
