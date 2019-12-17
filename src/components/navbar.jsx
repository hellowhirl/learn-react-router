import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        {/* 'to' will simply update the URL, but won't send additional request to server */}
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;
