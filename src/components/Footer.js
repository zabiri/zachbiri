import React from "react";
import Footer from '../blocks/Footer/'


const footer = () => {
  return (
    <Footer>
      <Footer.Logobox> &nbsp; </Footer.Logobox>
      <Footer.Flex>
        <Footer.Left>
          <p>Yards & Gods Forever</p>
        </Footer.Left>
        <Footer.Right>
          <Footer.List>
            <li>
              <a href="http://zachbiri.com">
                <i className="fab fa-react" />
                &nbsp;
                <i className="fab fa-html5" />
                &nbsp;
                <i className="fab fa-js-square" />
                &nbsp;
                <i className="fab fa-sass" />: Zach Biri
              </a>
            </li>
            <li>
              <a href="mailto:zachbiri@gmail.com">
                <i className="fas fa-envelope" /> : zachbiri@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/yardsandgods/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook" /> : @yardsandgods
              </a>
            </li>
            <li>
              <a
                href="http://zachbiri.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-copyright" /> : Zach Biri 2018
              </a>
            </li>
          </Footer.List>
        </Footer.Right>
      </Footer.Flex>
    </Footer>
  );
};
export default footer;
