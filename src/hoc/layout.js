import React from 'react';
import { Layout } from 'antd';

const { Header, Content } = Layout;

const Layouts = props => {
  return (
    <Layout>
      <Header style={{ background: '#7dbcea', textAlign: 'center' }}>
        <h2 style={{ color: '#ffffff' }}>Gist Example for Sylo Test</h2>
      </Header>
      <Content style={{ height: '100%' }}>{props.children}</Content>
    </Layout>
  );
};

export default Layouts;
