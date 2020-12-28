import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Menu } from "element-react"

const Header = ({ siteTitle }) => {
  const handleMenuSelect = index => {
    console.log("DDD", index)
  }
  return (
    <header className="flex justify-between navbar">
      <div className="my-5 logo-container">
        <h2>{siteTitle}</h2>
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
          <Menu.Item index="/work?type=architecture">Architecture</Menu.Item>
          <Menu.Item index="/work?type=electronics">Electronics</Menu.Item>
          <Menu.Item index="/work?type=it">Information Technology</Menu.Item>
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
        `}
      </style>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
