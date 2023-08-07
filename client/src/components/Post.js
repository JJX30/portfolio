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
        <h1 className={styles.blog_title}>{props.title}</h1>
        <p className={styles.blog_date}>{props.date}</p>
        <p className={styles.blog_body}>{props.body}</p>
        <Link
          onMouseMove={() => handleMove("Read more")}
          onMouseLeave={() => handleLeave("Read more")}
          href="/blog"
          className={styles.blog_more}
        >
          {readmoreText}
        </Link>
      </div>
    </>
  );
}
