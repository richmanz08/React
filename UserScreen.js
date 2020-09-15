import React from "react";
import { Link } from "react-router-dom";
import {
  
  Navbar
   
} from "react-bootstrap";
export default function UserScreen(props) {

  return (
    
    <Navbar
      
      className="navbar-custom"
      sticky="top"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div style={{ display: "flex" }} >
        {/* <Flip> */}
          <img
            src="kusmall.png"
            width="70"
            height="60"
            className="d-inline-block align-top logo-ku-userpage"
            alt="noo"/>
           
        
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              className="backAdmin"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span
                className="adminword"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  fontFamily: "kanit",
                  fontSize: `1.6rem`,
                  color: "rgba(222, 237, 238, 0.998)",
                  fontWeight: 400,
                  paddingRight: `8px`,
                  paddingLeft: `8px`,
                  letterSpacing: `1px`,
                }}
              >
                หน้าหลัก
              </span>
            </div>
          </div>
        
      </div>
      <div className="head-userpage usernav">
        <strong className="user-welcomee">
          {/* <FadeInLeft>{words[current]}</FadeInLeft> */}
          {/* <AnimateOnChange
            animationOut="bounceOut"
            animationIn="bounceIn"
            durationOut="500"
          >
            {words[current]}
          </AnimateOnChange> */}
          ยินดีต้อนรับคุณ
        </strong>
        <font className="user-welcomee-name">POK</font>
        <div className="admin-word-nav-user">
          <div
            className="head-nav-user"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span
              className="goadminword-user"
              style={{
                // display: "flex",
                // flexDirection: "column",
                // justifyContent: "center",
                // fontFamily: "kanit",
                // fontSize: `2rem`,
                color: "#000",
                // fontWeight: 400,
              }}
            >
            </span>
          </div>
        </div>
      </div>
      {/* <IconButton> */}
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="logout-user" >
          {/* <p className="p-logout">ออกจากระบบ</p> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: `6px`,
            }}
          >
            <div
              className="backlogout"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span
                className="goadminword"
                style={{
                  color: "rgba(222, 237, 238, 0.998)",
                  // fontWeight: 400,
                }}
              >
                ออกจากระบบ
              </span>
            </div>
          </div>
          <div className="logo-logout-navbar">
            
          </div>
        </div>
      </Link>
      {/* </IconButton> */}
    </Navbar>
   
  )}