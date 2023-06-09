import { Header } from './components/Header/Header'
import { Welcome } from './components/Welcome/Welcome'
import { Footer } from './components/Footer/Footer'
import { AboutUs } from './components/AboutUs/AboutUs'

export const App = () => {
  return (
    <>
        <Header/>
        <Welcome/>
        <AboutUs/>
        <Footer/>
    </>
  )
}
