import React, { useState } from 'react';
import {
  RadarChartOutlined,
  DribbbleOutlined,
  GoldOutlined,
  RiseOutlined,
  UserOutlined,
  SettingOutlined,
  DingtalkOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Sider, Footer } = Layout;

const items1 = [
  { key: '1', label: <Link to="/">Home</Link>, icon: <HomeOutlined /> },
  { key: '2', label: <Link to="/about-us">About us</Link>, icon: <DingtalkOutlined /> },
  {
    key: 'sub5',
    icon: React.createElement(SettingOutlined),
    label: 'Open Setting',
    children: [
      { key: '16', label: 'B2B' },
      { key: '17', label: 'B2C' },
    ],
  },
  { key: '4', label: <Link to="/worker-account">Worker Account</Link>, icon: <UserOutlined /> },
];

const items2 = [
  {
    key: 'sub1',
    icon: React.createElement(GoldOutlined),
    label: 'Gold',
    children: [
      { key: '5', label: '14 Carat' },
      { key: '6', label: '18 Carat' },
      { key: '7', label: '22 Carat' },
      { key: '8', label: 'Raw Gold' },
      { key: '9', label: 'Fine Fold' },
    ],
  },
  {
    key: 'sub2',
    icon: React.createElement(RadarChartOutlined),
    label: 'Diamond',
    children: [
      { key: '10', label: 'Polki' },
      { key: '11', label: 'Panna' },
    ],
  },
  {
    key: 'sub3',
    icon: React.createElement(DribbbleOutlined),
    label: 'Stones',
    children: [
      { key: '12', label: 'Colors Stone' },
      { key: '13', label: 'Kundan' },
    ],
  },
  {
    key: 'sub4',
    icon: React.createElement(RiseOutlined),
    label: 'Stocks',
    children: [
      { key: '14', label: 'Raw Stocks' },
      { key: '15', label: 'Ready Stocks' },
    ],
  },
];

const combinedItems = [...items1, ...items2];

const Headermain = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (items2.map((item) => item.key).indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[]}
          mode="inline"
          items={combinedItems}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
        />
      </Sider>
      <Layout>
       
        <Content
          style={{
            margin: '10px 16px',
          }}
        >
          
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Anurag Nanda
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Headermain;