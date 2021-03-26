import Banner from './components/Banner'
import Comments from './components/Comments'
import ContactForm from './components/ContactForm'
import Content from './components/Content'
import Footer from './components/Footer'
import ImageSlider from './components/ImageSlider'
import Logo from './components/Logo'
import Menu from './components/Menu'
import { SliderData } from './components/SliderData'
import Subscribe from './components/Subscribe'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Menu />
        <ImageSlider slides={ SliderData } />
        <Banner />
        <Content />
        <Subscribe />
        <Comments />
        <ContactForm />
        <Footer />
      </header>
    </div>
  );
}

export default App;
