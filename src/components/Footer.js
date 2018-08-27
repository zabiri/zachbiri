import React from "react";
import Footer from "../blocks/Footer/";

const footer = () => {
  return (
    <Footer>
      <Footer.Logobox> &nbsp; </Footer.Logobox>
      <Footer.Flex>
        <Footer.Left>
          <p>
            Made with{" "}
            <span aria-label="love" role="img">
              💜
            </span> &
          </p>
          <p>
            <a href="https://github.com/zabiri/zachbiri" target="_blank" rel="noopener noreferrer" alt="View this site's source on Github">
              <i className="fab fa-react" />
              &nbsp;
              <i className="fab fa-html5" />
              &nbsp;
              <i className="fab fa-js-square" />
              &nbsp;
              <span
                aria-label="styled-components"
                alt="styled-components"
                role="img"
              >
                💅
              </span>
            </a>
          </p>
        </Footer.Left>
        <Footer.Right>
        <p>
            <a
              href="http://zachbiri.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-copyright" /> Zach Biri 2018
            </a>
          </p>
          <p>
            <a
              href="https://github.com/zabiri/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
            &nbsp;
            <a
              href="https://www.facebook.com/zachbiri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook" />
            </a>
            &nbsp;
            <a
              href="https://www.instagram.com/zachbiri/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
            &nbsp;
            <a
              href="https://twitter.com/zachbiri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
            &nbsp;
            <a
              href="https://www.linkedin.com/in/zachbiri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
            &nbsp;
            <a
              href="https://soundcloud.com/zachbiri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-soundcloud" />
            </a>
            &nbsp;
            <a href="mailto:zachbiri@gmail.com">
              <i className="fas fa-envelope" />
            </a>
          </p>
          
        </Footer.Right>
      </Footer.Flex>
    </Footer>
  );
};
export default footer;
