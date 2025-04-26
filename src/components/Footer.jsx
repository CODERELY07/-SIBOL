import Logo from "./Logo/Logo";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900" style={{position: 'relative',bottom: 0,width: '100%'}}>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Logo/>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
           
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                  <a href="https://www.wikipedia.org/" className="hover:underline">Wikipedia</a>
                  </li>
                  <li>
                  <a href="https://www.scribd.com/" class="hover:underline">Scribd</a>
                  </li>
                </ul>
              </div>
             
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Researchers
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li>
                    <a href="#" className="hover:underline">
                     Reseacher 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                    Reseacher 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                    Reseacher 3
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2025{" "}
              <a className="hover:underline">
                Sibol™
              </a>
              . All Rights Reserved.
            </span>
        
          </div>
        </div>
      </footer>

    );
}
export default Footer;