import { FunctionComponent, ReactNode } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Sidebar1 from '../Sidebar/Sidebar1'

type LayoutProps = {
  children?: ReactNode
}

const Layout1: FunctionComponent<LayoutProps> = ({
  children,
}) => {
    return (
        <div id="wrapper">
            <Sidebar1></Sidebar1>
            <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Header></Header>
                {children}
            </div>
            <Footer></Footer>
            </div>
        </div>
    )
}

export default Layout1
