import { FunctionComponent, ReactNode } from 'react'
import Footer from '../Footer'
import Sidebar from '../Sidebar/Sidebar'

type LayoutProps = {
  children?: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({
  children,
}) => {
  return (
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          {children}
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Layout
