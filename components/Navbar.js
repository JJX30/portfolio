import Link from "next/link";
import styles from "../styles/navbar.module.css";
import React, { useState, useEffect, useRef } from "react";
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
  const menu = useRef();
  const background = useRef();
  const iconBlack = {
    color: "black",
  };
  const iconWhite = {
    color: "white",
  };

  const [iconColor, setIconColor] = useState({ color: "white" });
  const [small, setSmall] = useState(false);
  const [width, setWidth] = useState(0); // default width, detect on server.
  useEffect(() => {
    setWidth(window.innerWidth);
  });

  const checkWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    if (width < 532) {
      setSmall(true);
    }
    if (width >= 532) {
      setSmall(false);
    }
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [width]);

  const handleClick = () => {
    if (menu.current.style.visibility == "visible") {
      background.current.style.backgroundColor = "black";
      menu.current.style.visibility = "hidden";
      setIconColor({ color: "white" });
    } else {
      background.current.style.backgroundColor = "white";
      menu.current.style.visibility = "visible";
      setIconColor({ color: "black" });
    }
  };

  return (
    <div>
      {small ? (
        <div className={styles.navbar}>
          <div className={styles.navbar_left}>
            <div className={styles.navbar_title_small}>
              <Link href="/">Mauricio Del Castillo</Link>
            </div>
          </div>
          <div className={styles.navbar_right}>
            <div
              onClick={handleClick}
              ref={background}
              className={styles.navbar_hamburger}
            >
              <CgMenu
                style={iconColor}
                className={styles.icon}
                size={47}
              ></CgMenu>
              <div ref={menu} className={styles.navbar_hamburger_hidden}>
                <div className={styles.navbar_content_hidden}>
                  <Link href="/work">work</Link>
                </div>
                <div className={styles.navbar_content_hidden}>
                  <Link href="/about">about</Link>
                </div>
                <div className={styles.navbar_content_hidden}>
                  <Link href="/contact">contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.navbar}>
          <div className={styles.navbar_left}>
            <div className={styles.navbar_title}>
              <Link href="/">Mauricio Del Castillo</Link>
            </div>
          </div>
          <div className={styles.navbar_right}>
            <div className={styles.navbar_content}>
              <Link href="/work">work</Link>
            </div>
            <div className={styles.navbar_content}>
              <Link href="/about">about</Link>
            </div>
            <div className={styles.navbar_content}>
              <Link href="/contact">contact</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
