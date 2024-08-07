import React, { useState } from 'react';
import {
  RadarChartOutlined,
  DribbbleOutlined,
  GoldOutlined,
  RiseOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Sider, Footer } = Layout;


const items1 = [
  { key: '1', label: 'Home' },
  { key: '2', label: 'About us' },
  { key: '3', label: 'Open Setting' },
  { key: '4', label: 'Worker Account' },
  {
    key: 'sub1',
    icon: React.createElement(GoldOutlined),
    label: 'Gold',
    children: [
      { key: '1', label: '14 Carat' },
      { key: '2', label: '18 Carat' },
      { key: '3', label: '22 Carat' },
      { key: '4', label: 'Raw Gold' },
      { key: '5', label: 'Fine Fold' },
    ],
  },
  {
    key: 'sub2',
    icon: React.createElement(RadarChartOutlined),
    label: 'Diamond',
    children: [
      { key: '6', label: 'option6' },
      { key: '7', label: 'option7' },
      { key: '8', label: 'option8' },
    ],
  },
  {
    key: 'sub3',
    icon: React.createElement(DribbbleOutlined),
    label: 'Stones',
    children: [
      { key: '9', label: 'Colors Stone' },
      { key: '10', label: 'Kundan' },
    ],
  },
  {
    key: 'sub4',
    icon: React.createElement(RiseOutlined),
    label: 'Stocks',
    children: [
      { key: '11', label: 'Raw Stocks' },
      { key: '12', label: 'Ready Stocks' },
    ],
  },
];

const getItem = (label, key, icon, children) => ({
  key,
  icon,
  children,
  label,
});

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const Headermain = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items1} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
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
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Headermain;
