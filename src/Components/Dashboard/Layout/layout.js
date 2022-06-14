import Sidebar from '../../Sidebar/sidebar.js'
import { Container, Main, Header } from './layout-elements'
import WidgetLayout from './widget-layout'
import { AddWidget } from '../../../Assets/Images/Widgets/widget-assets.js'
import { AddWidgetBtn } from './layout-elements'
const Layout = () => {
  return (
    <Container>
        <Sidebar/>
        <Main>
          <Header>Dashboard</Header>
          <WidgetLayout/>
          <AddWidgetBtn>
            <img src={AddWidget} alt="add widget button"/>
          </AddWidgetBtn>
        </Main>
    </Container>
  )
}

export default Layout