import React from 'react';
import { Layout, Menu, Dropdown, theme } from 'antd';
import logo from "../Assets/logo.png";
const { Header} = Layout;

const nestedDropdownMenu = (
  <Menu>
    <Menu.SubMenu key="b2b" title="B2B">
      <Menu.SubMenu key="kundan" title="Kundan Meena">
        <Menu.Item key="kundan1">18 kt</Menu.Item>
        <Menu.Item key="kundan2">22 kt</Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu key="diamond" title="Diamond Polki">
        <Menu.Item key="kundan1">18 kt</Menu.Item>
        <Menu.Item key="kundan2">22 kt</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="setting" title="Open Setting">
        <Menu.Item key="kundan1">14 kt</Menu.Item>
        <Menu.Item key="kundan2">18 kt</Menu.Item>
        <Menu.Item key="kundan2">22 kt</Menu.Item>
      </Menu.SubMenu>
    </Menu.SubMenu>
    <Menu.SubMenu key="b2c" title="B2C">
      <Menu.SubMenu key="kundan" title="Kundan Meena">
        <Menu.Item key="kundan1">18 kt</Menu.Item>
        <Menu.Item key="kundan2">22 kt</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="diamond" title="Diamond Polki">
        <Menu.Item key="kundan1">18 kt</Menu.Item>
        <Menu.Item key="kundan2">22 kt</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="setting" title="Open Setting">
        <Menu.Item key="kundan1">14 kt</Menu.Item>
        <Menu.Item key="kundan2">18 kt</Menu.Item>
        <Menu.Item key="kundan2">22 kt</Menu.Item>
      </Menu.SubMenu>
    </Menu.SubMenu>
  </Menu>
);


const Navbar = () => {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo">
          <img src={logo} alt="Logo" className=' w-32 h-20' />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Dropdown overlay={nestedDropdownMenu} key="dropdown">
            <Menu.Item>Ready Items</Menu.Item>
          </Dropdown>
          <Menu.Item key="3">Raw Stock / Working Capital</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;