import { Header } from './components/Header/Header'
import { Welcome } from './components/Welcome/Welcome'
import { Footer } from './components/Footer/Footer'
import { AboutUs } from './components/AboutUs/AboutUs'
import { Services } from './components/Services/Services'

export const App = () => {
  return (
    <>
        <Header/>
        <Welcome/>
        <AboutUs/>
        <Services/>

        <Footer/>
    </>
  )
}
