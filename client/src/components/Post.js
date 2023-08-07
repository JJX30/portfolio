"use client";
import styles from "./post.module.css";
import { useState } from "react";
import Link from "next/link";
export default function Post(props) {
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

  const [readmoreText, setReadmoreText] = useState("Read more");

  const handleMove = async (key) => {
    for (let i = 0; i < 20; i++) {
      setReadmoreText((prev) => {
        return randomString(prev.length);
      });
      await wait(2);
      if (i == 19) {
        setReadmoreText(() => {
          return key;
        });
      }
    }
  };
  const handleLeave = (key) => {
    setReadmoreText("Read more");
  };
  return (
    <>
      <div className={styles.blog_div}>
        <h1 className={styles.blog_title}>
          <span className={styles.blog_highlight}>{props.title}</span>
        </h1>
        <p className={styles.blog_date}>
          <span className={styles.blog_highlight}>{props.date}</span>
        </p>
        <p className={styles.blog_body}>
          <span className={styles.blog_highlight}>{props.body}</span>
        </p>
        <Link
          onMouseMove={() => handleMove("Read more")}
          onMouseLeave={() => handleLeave("Read more")}
          href="/blog"
          className={styles.blog_more}
        >
          <span className={styles.blog_highlight}>{readmoreText}</span>
        </Link>
      </div>
    </>
  );
}
