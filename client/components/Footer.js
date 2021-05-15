import React from "react";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <footer className="bg-red-600 md:hidden">
     <div className="container mx-auto flex justify-center pin-b">    
        <div className="inline-flex py-3 px-3 my-8">
          <SocialIcon
            url="https://www.linkedin.com/in/aberisha/"
            className="mr-4 overflow-auto"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
            rel ="noopener noreferrer"
            />
          <SocialIcon
            url="https://github.com/aBearish/"
            className="mr-4 overflow-auto"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
            rel ="noopener noreferrer"
            />
          <SocialIcon
            url="mailto: ndekogq3i@relay.firefox.com?subject=AntonBerisha.com"
            className="mr-4 overflow-auto"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
            rel ="noopener noreferrer"
            />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
