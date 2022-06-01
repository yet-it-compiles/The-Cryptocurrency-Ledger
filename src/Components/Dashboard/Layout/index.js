import Sidebar from '../../Sidebar'
import { Container, Main } from './layoutElements'

const Layout = ({children}) => {
  return (
    <Container>
        <Sidebar/>
        <Main>{children}</Main>
    </Container>
  )
}

export default Layout