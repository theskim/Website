'use client'

import { Provider } from 'react-redux'
import { store } from '../src/Redux/store'
import Home from '../src/components/pages/Main/Home'
import Experiences from '../src/components/pages/Experiences/Experiences'
import Education from '../src/components/pages/Education/Education'
import Projects from '../src/components/pages/Projects/Projects'
import NavBar from '../src/components/NavBar/Navbar'
import Footer from '../src/components/Footer/Footer'
import BackgroundAll from '../src/assets/Background/Background'
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop'
import IntersectionObserver from '../src/components/IntersectionObserver/IntersectionObserver'

export default function HomePage() {
  return (
    <Provider store={store}>
      <NavBar />
      <BackgroundAll>
        <IntersectionObserver animationClass="fade-in">
          <Home />
        </IntersectionObserver>
        <IntersectionObserver animationClass="fade-in-delay-1">
          <Experiences id="experience" />
        </IntersectionObserver>
        <IntersectionObserver animationClass="fade-in-delay-2">
          <Education id="education" />
        </IntersectionObserver>
        <IntersectionObserver animationClass="fade-in-delay-3">
          <Projects id="project" />
        </IntersectionObserver>
      </BackgroundAll>
      <Footer />
      <ScrollToTop />
    </Provider>
  )
} 