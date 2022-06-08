import Sidebar from '../../Sidebar'
import { Container, Main, Header } from './layoutElements'
import WidgetLayout from './widgetLayout'
import { AddWidget } from '../../../Assets/Images/Widgets'
import { AddWidgetBtn } from './layoutElements'
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