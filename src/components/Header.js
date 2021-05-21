import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Fab Sports</h1>
          <div>Fab sports</div>
          <div>Buy All Kind Of Sports Products Here</div>
          <div>Tambaram,Chennai</div>
        </a>
      </div>
      <div>
        <Link to="/order">
          Cart{" "}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </Link>{" "}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}
