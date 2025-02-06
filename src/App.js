import SideMenu from '../src/components/SideMenu';
import AppRoutes from './components/AppRoutes';
import {Layout, Image} from "antd";
const { Sider, Content, Footer} = Layout;

function App() {
  return (
    <Layout>
      <Sider style={{height: "100vh", backgroundColor: 'white'}}>
        <Image src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg" preview={false}/>
        <SideMenu />
      </Sider>
        <Content>
          <AppRoutes/>
        </Content>
        <Footer style={{ textAlign: 'center'}}>
          Uber Eats Restaurant Dashboard @2022
        </Footer>
    </Layout>
  );
}
export default App;