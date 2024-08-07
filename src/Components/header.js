import React from 'react';
import { RadarChartOutlined, DribbbleOutlined, GoldOutlined , RiseOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Sider } = Layout;

const items1 = [
  { key: '1', label: 'Home' },
  { key: '2', label: 'About us' },
  { key: '3', label: 'Open Setting' },
  { key: '4', label: 'Worker Account' },

];

const items2 = [
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
    label: ' Stocks',
    children: [
      { key: '11', label: 'Raw Stocks' },
      { key: '12', label: 'Ready Stocks' },

    ],
  },
];

const Headermain = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
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
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Headermain;