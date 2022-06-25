import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navbar.module.css";
import React, { useState, useEffect, useRef } from "react";
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
  // Custom functions
  const randCharacters =
    "~!@#$%^&*()_+1234567890-=][poiuytrewqasdfghjkl{}?/><mnbvcxz";

  const randomString = (length) => {
    let temp = "";
    for (let i = 0; i < length; i++) {
      temp = temp + randCharacters.charAt(Math.floor(Math.random() * 59));
    }
    return temp;
  };

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // useRefs
  const menu = useRef();

  // useStates
  const [small, setSmall] = useState(false);
  const [width, setWidth] = useState(0);
  const [workText, setWorkText] = useState("work");
  const [aboutText, setAboutText] = useState("about");
  const [contactText, setContactText] = useState("contact");
  const [isMousedOver, setIsMousedOver] = useState(false);

  // useEffects
  useEffect(() => {
    setWidth(window.innerWidth);
  });

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

  const checkWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (small) {
      // add when mounted
      document.addEventListener("mousedown", handleClickOutside);
      // return function to be called when unmounted
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [small]);

  //Handle Functions

  const handleClickOutside = (e) => {
    if (menu.current.contains(e.target)) {
      menu.current.style.visibility = "visible";
      return;
    }
    // outside click
    menu.current.style.visibility = "hidden";
  };

  const handleMove = async (key) => {
    if (key == "work") {
      for (let i = 0; i < 20; i++) {
        setWorkText((prev) => {
          return randomString(prev.length);
        });
        await wait(2);
        if (i == 19) {
          setWorkText(key);
        }
      }
    } else if (key == "about") {
      for (let i = 0; i < 20; i++) {
        setAboutText((prev) => {
          return randomString(prev.length);
        });
        await wait(2);
        if (i == 19) {
          setAboutText(key);
        }
      }
    } else if (key == "contact") {
      for (let i = 0; i < 20; i++) {
        setContactText((prev) => {
          return randomString(prev.length);
        });
        await wait(2);
        if (i == 19) {
          setContactText(key);
        }
      }
    }
  };

  const handleLeave = (key) => {
    if (key == "work") {
      setWorkText(key);
    } else if (key == "about") {
      setAboutText(key);
    } else if (key == "contact") {
      setContactText(key);
    }
  };

  const handleClick = () => {
    if (menu.current.style.visibility == "visible") {
      menu.current.style.visibility = "hidden";
    } else {
      menu.current.style.visibility = "visible";
    }
  };

  const handleMouseEnter = () => {
    setIsMousedOver(true);
  };

  const handleMouseLeave = () => {
    setIsMousedOver(false);
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
              <CgMenu className={styles.icon}></CgMenu>
              <div ref={menu} className={styles.navbar_hamburger_hidden}>
                <Link href="/work">
                  <div
                    onMouseMove={() => handleMove("work")}
                    onMouseLeave={() => handleLeave("work")}
                    className={styles.navbar_content_hidden}
                  >
                    {workText}
                  </div>
                </Link>
                <Link href="/about">
                  <div
                    onMouseMove={() => handleMove("about")}
                    onMouseLeave={() => handleLeave("about")}
                    className={styles.navbar_content_hidden}
                  >
                    {aboutText}
                  </div>
                </Link>
                <Link href="/contact">
                  <div
                    onMouseMove={() => handleMove("contact")}
                    onMouseLeave={() => handleLeave("contact")}
                    className={styles.navbar_content_hidden}
                  >
                    {contactText}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.navbar}>
          <div className={styles.navbar_left}>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={styles.navbar_title}
            >
              {isMousedOver ? (
                <Link href="/">
                  <Image
                    src="/portfolio_large.png"
                    alt="logo"
                    width={190}
                    height={15}
                  ></Image>
                </Link>
              ) : (
                <Link href="/">Mauricio Del Castillo</Link>
              )}
            </div>
          </div>
          <div className={styles.navbar_right}>
            <div className={styles.navbar_content}>
              <Link href="/work">
                <div
                  onMouseMove={() => handleMove("work")}
                  onMouseLeave={() => handleLeave("work")}
                >
                  {workText}
                </div>
              </Link>
            </div>
            <div className={styles.navbar_content}>
              <Link href="/about">
                <div
                  onMouseMove={() => handleMove("about")}
                  onMouseLeave={() => handleLeave("about")}
                >
                  {aboutText}
                </div>
              </Link>
            </div>
            <div className={styles.navbar_content}>
              <Link href="/contact">
                <div
                  onMouseMove={() => handleMove("contact")}
                  onMouseLeave={() => handleLeave("contact")}
                >
                  {contactText}
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
