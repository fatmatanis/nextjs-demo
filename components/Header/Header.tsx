import Link from "next/link";
import React from "react";

import classes from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <nav className={classes.container}>
        <ul className={classes.title}>
          {/* <li onClick={() => router.push("/")}>Home</li> */}
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
          <li>
            <Link href="/comment">Comment</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
