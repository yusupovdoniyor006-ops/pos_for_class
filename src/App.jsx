import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '24px', background: '#f0f2f5' }}>
        <Routes>
          <Route path="/" element={<div><h1>POS System</h1><p>Welcome to the Point of Sale System</p></div>} />
          {/* Add more routes here later */}
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
