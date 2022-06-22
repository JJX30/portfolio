import Link from "next/link";
import styles from "../styles/navbar.module.css";
import React, { useState, useEffect, useRef } from "react";
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
  const menu = useRef();
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
      menu.current.style.visibility = "hidden";
    } else {
      menu.current.style.visibility = "visible";
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
            <div onClick={handleClick} className={styles.navbar_hamburger}>
              <CgMenu className={styles.icon} size={47}></CgMenu>
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
