
import Header from "./Header"
import Footer from "./Footer"
import Styles from "../styles/Home.module.scss"
export default function Layout({ children }: any) {
  return (
    <>
      <div className={Styles.container}>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </>
  )
}