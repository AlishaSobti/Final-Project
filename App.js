 import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom";
import './App.css';
import * as React from 'react';

import New from "./New";
import SkinCare from "./SkinCare";
import BodyMist from "./BodyMist";

// Layout component with navigation and Outlet for nested routes
const Layout = () => (
  <>
    <div style={{
      display: "flex",
      background: "pink",
      padding: "5px 0 5px 5px",
      fontSize: "20px"
    }}>
      <div style={{ margin: "10px" }}>
        <NavLink to="/new" style={({ isActive }) => ({
          color: isActive ? 'greenyellow' : 'white'
        })}>New</NavLink>
      </div>
      <div style={{ margin: "10px" }}>
        <NavLink to="/skincare" style={({ isActive }) => ({
          color: isActive ? 'greenyellow' : 'white'
        })}>SkinCare</NavLink>
      </div>
      <div style={{ margin: "10px" }}>
        <NavLink to="/bodymist" style={({ isActive }) => ({
          color: isActive ? 'greenyellow' : 'white'
        })}>BodyMist</NavLink>
      </div>
    </div>

   
    <Outlet />
  </>
);
