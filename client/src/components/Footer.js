import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./footer.module.css";
import { TfiGithub } from "react-icons/tfi";
import { BiLogoLinkedin } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
const Footer = (props) => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  const handleMouseOver = (e) => {
    switch (e.target.id) {
      case "1":
        console.log("Moused over 1");
        setHovered1(true);
        break;
      case "2":
        console.log("Moused over 2");
        setHovered2(true);
        break;
      case "3":
        console.log("Moused over 3");
        setHovered3(true);
        break;
    }
  };

  if (props.isHome) {
    return (
      <>
        <div className={styles.footer_div}>
          <div className={styles.footer_icon_div}>
            <div
              id="1"
              onMouseOver={handleMouseOver}
              onMouseLeave={() => {
                setHovered1(false);
                console.log("mouse left 1");
              }}
              className={styles.footer_icon_border}
            >
              <BiLogoLinkedin color={hovered1 ? "black" : "white"} size={17} />
            </div>
            <div
              id="2"
              onMouseOver={handleMouseOver}
              onMouseLeave={() => {
                setHovered2(false);
                console.log("mouse left 2");
              }}
              className={styles.footer_icon_border}
            >
              <TfiGithub color={hovered2 ? "black" : "white"} size={17} />
            </div>
            <div
              id="3"
              onMouseOver={handleMouseOver}
              onMouseLeave={() => {
                setHovered3(false);
                console.log("mouse left 3");
              }}
              className={styles.footer_icon_border}
            >
              <MdOutlineAlternateEmail
                color={hovered3 ? "black" : "white"}
                size={17}
              />
            </div>
          </div>
          <div className={styles.footer_end_div}>
            {" "}
            • 2023 •{" "}
            <Link href="#top" className={styles.footer_link}>
              <span className={styles.highlight}>
                {"<Mauricio Del Castillo />"}
              </span>
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.footer_div}>
          <div className={styles.footer_icon_div}>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={styles.footer_icon_border}
            >
              <BiLogoLinkedin size={17} />
            </div>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={styles.footer_icon_border}
            >
              <TiSocialGithub size={50} />
            </div>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={styles.footer_icon_border}
            >
              <MdOutlineAlternateEmail size={17} />
            </div>
          </div>
          <div className={styles.footer_end_div}>
            {" "}
            • 2023 •{" "}
            <Link href="/" className={styles.footer_link}>
              {"<Mauricio Del Castillo />"}
            </Link>
          </div>
        </div>
      </>
    );
  }
};

export default Footer;
