
import { useEffect } from 'react'
import './App.css'
import Layout from './components/Layout'
import Aos from 'aos'
import 'aos/dist/aos.css'
function App() {
  
    useEffect(()=>{
      Aos.init();
    },[]);

    return (
      <>
        <Layout>
        <>
          <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-100 py-20 overflow-hidden md:h-100">
              <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                <section className="md:h-100vh md:m-t0 flex justify-center align-center bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                  <div className="px-4 flex justify-center align-center h-100 flex-col mx-auto max-w-screen-xl text-center z-10 relative">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                      Mga Akdang Pampanitikan
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                      Ang panitikan ay nag mula sa “pang-titik-an”. Ang kahulugan nito
                      ay ang literatura o mga akdang nasusulat.
                    </p>
                  </div>
                </section>
              </div>
              {/* Item 2 */}
              <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                <section className="md:h-[100vh] md:m-t0 flex bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                  <div className="px-4 mx-auto flex justify-center align-center h-100 flex-col  max-w-screen-xl text-center z-10 relative">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                      Ang Alamat
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                      Ang alamat ay isang uri ng panitikan na nagkukuwento tungkol sa
                      mga pinagmulan ng mga bagaybagay sa daigdig. Ang alamat ay kuwento
                      na kathang isip lamang na kinasasangkutan ng kababalaghan
                    </p>
                  </div>
                </section>
              </div>
              {/* Item 3 */}
              <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                <section className="md:h-[100vh] md:m-t0 flex bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                  <div className="px-4 mx-auto flex justify-center align-center h-100 flex-col  max-w-screen-xl text-center z-10 relative">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                      Maikling Kwento
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                      Ang maikling kuwento - binaybay ding maikling kwento - ay isang
                      maiksing salaysay hinggil sa isang mahalagang pangyayaring
                      kinasasangkutan ng isa o ilang tauhan at may iisang kakintalan o
                      impresyon lamang.
                    </p>
                  </div>
                </section>
              </div>
            </div>
            {/* <div class="w-full max-w-md mx-auto">   
                      <a href="#more">
                          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Explore
                          </button>
                      </a>
                  </div> */}
          </div>
          <div className="wrapper">
            <div className="scroll-icon">
              <span>Scroll</span>
              <div className="mouse-icon">
                <div className="mouse-icon_wheel" />
              </div>
            </div>
          </div>
          <section className="bg-white dark:bg-gray-900" id="more">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-1">
              <div
                data-aos="zoom-in-up"
                data-aos-duration={1000}
                className="hover:scale-105 hover:shadow-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 cursor-pointer dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8"
              >
                <a
                  href="#"
                  className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
                >
                  Akdang Pampanitikan
                </a>
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                  Ano ang SIBOL?
                </h1>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                  Suri sa Inobatibong Batay sa Online Learning. Gamit ang Online
                  Platform na ito maari mong masaba at matuto tungkol ibat ibat uri ng
                  mga panitikan katulad ng mga Alamat,Maikling kwento at iba pa.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div
                  data-aos="flip-left"
                  data-aos-duration={1000}
                  className="hover:scale-105 hover:shadow-lg bg-gray-50 dark:bg-gray-800 border cursor-pointer border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
                >
                  <a
                    href="#"
                    className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
                  >
                    Alamat
                  </a>
                  <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                    Ano ang alamat?
                  </h2>
                  <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                    Ang alamat ay isang uri ng panitikan na nagkukuwento tungkol sa mga
                    pinagmulan ng mga bagaybagay sa daigdig. Ang alamat ay kuwento na
                    kathang isip lamang na kinasasangkutan ng kababalaghan
                  </p>
                </div>
                <div
                  data-aos="flip-right"
                  data-aos-duration={1000}
                  className="hover:scale-105 hover:shadow-lg bg-gray-50 dark:bg-gray-800 border cursor-pointer border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
                >
                  <a
                    href="#"
                    className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
                  >
                    Maikling Kwento
                  </a>
                  <h2 className="text-gray-900 dark:text-white cursor-pointer text-3xl font-extrabold mb-2">
                    Ano ang Maikling kwento?
                  </h2>
                  <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                    Ang maikling kuwento - binaybay ding maikling kwento - ay isang
                    maiksing salaysay hinggil sa isang mahalagang pangyayaring
                    kinasasangkutan ng isa o ilang tauhan at may iisang kakintalan o
                    impresyon lamang.{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>

        </Layout>
      </>
    )
}

export default App
