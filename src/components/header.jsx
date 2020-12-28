import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useMedia } from "react-use"

import { Menu, Dropdown, Button } from "element-react"

import logo from "../images/logo.jpeg"

const MobileHeader = () => {
  return (
    <div className="flex justify-between mx-10 mt-10">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <Dropdown
        menu={
          <Dropdown.Menu
            style={{
              width: "50vw",
            }}
          >
            <Dropdown.Item>
              <Link to="/">Home</Link>
            </Dropdown.Item>
            <Dropdown
              menu={
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/work?category=architecture">Architecture</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/work?category=electronics">Electronics</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/work?category=information-technology">IT</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              }
            >
              <Dropdown.Item>
                Projects <i className="el-icon-caret-right el-icon--right"></i>
              </Dropdown.Item>
            </Dropdown>
            <Dropdown.Item>
              <Link to="/about">About Us</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        }
      >
        <Button type="text" className="text-black hover:text-gray-500">
          Menu <i className="el-icon-menu el-icon--right"></i>
        </Button>
      </Dropdown>
      <style jsx="true">
        {`
          .logo {
            width: 55px;
            height: 55px;
          }
        `}
      </style>
    </div>
  )
}

const Header = ({ siteTitle }) => {
  const handleMenuSelect = index => {
    console.log("DDD", index)
  }

  return (
    <header className="flex justify-between navbar">
      <div className="my-5 logo-container">
        <Link to="/">
          <img src={logo} alt={siteTitle} className="logo" />
        </Link>
      </div>
      <Menu
        defaultActive="/"
        className="el-menu-demo"
        mode="horizontal"
        onSelect={handleMenuSelect}
      >
        <Menu.Item index="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.SubMenu index="/work" title="Work">
          <Menu.Item index="/work?category=architecture">
            Architecture
          </Menu.Item>
          <Menu.Item index="/work?category=electronics">Electronics</Menu.Item>
          <Menu.Item index="/work?category=information-technology">
            Information Technology
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item index="/about">
          <Link to="/about">About Us</Link>
        </Menu.Item>
        <Menu.Item index="/contact">
          <Link to="/contact">Contact Us</Link>
        </Menu.Item>
      </Menu>

      <style jsx="true">
        {`
          .el-menu-demo {
            padding-right: 5%;
            background: #ffffff;
          }

          .logo-container {
            padding-left: 5%;
          }

          .navbar {
            width: 100vw;
            top: 0;
            left: 0;
            background: #ffffff;
          }

          .logo {
            width: 55px;
            height: 55px;
          }
        `}
      </style>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Magis Let`,
}

export default () => {
  const isMobile = useMedia("(max-width:768px)")

  console.log("IS MOOO", isMobile)

  return isMobile ? <MobileHeader /> : <Header />
}
