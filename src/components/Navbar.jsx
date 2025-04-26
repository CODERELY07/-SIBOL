import Logo from "./Logo/Logo";

const Navbar = () =>{
    return (
        <nav
            className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg"
            id="navbar"
            >
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                <Logo/>
                <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                <button
                    data-collapse-toggle="mega-menu-icons"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mega-menu-icons"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                    >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                    </svg>
                </button>
                </div>
                <div
                id="mega-menu-icons"
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                >
                <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                    <li>
                    <button
                        id="mega-menu-icons-dropdown-button"
                        data-dropdown-toggle="mega-menu-icons-dropdown"
                        className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        Mga Akdang pampanitikan
                        <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                        />
                        </svg>
                    </button>
                    <div
                        id="mega-menu-icons-dropdown"
                        className="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700 z-40"
                    >
                        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                        <ul
                            className="space-y-4"
                            aria-labelledby="mega-menu-icons-dropdown-button"
                        >
                            <li>
                            <a
                                href="./panitikan/maikling-kwento.html"
                                className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                            >
                                Maikling kwento
                            </a>
                            </li>
                            <li>
                            <a
                                href="./panitikan/alamat.html"
                                className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                            >
                                Alamat
                            </a>
                            </li>
                            <li>
                            <a
                                href="./panitikan/nobela.html"
                                className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                            >
                                Nobela
                            </a>
                            </li>
                            <li>
                            <a
                                href="./panitikan/tula.html"
                                className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                            >
                                Tula
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                        <ul className="space-y-4">
                            <li>
                            <a
                                href="./panitikan/dula.html"
                                className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                            >
                                Dula
                            </a>
                            </li>
                            <li>
                            <a
                                href="./panitikan/epiko.html"
                                className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                            >
                                Epiko
                            </a>
                            </li>
                            <li>
                            <a
                                href="./panitikan/parabula.html"
                                className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                            >
                                Parabula
                            </a>
                            </li>
                            <li>
                            <a
                                href="./panitikan/Anekdota.html"
                                className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                            >
                                Anekdota
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="p-4 text-gray-900 dark:text-white">
                        <ul className="space-y-4">
                            <li>
                            <a
                                href="./panitikan/talambuhay.html"
                                className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                            >
                                Talambuhay
                            </a>
                            </li>
                            <li>
                            <a
                                href="./panitikan/pabula.html"
                                className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                            >
                                Pabula
                            </a>
                            </li>
                            <li>
                            <a
                                href="./panitikan/talaarawan.html"
                                className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                            >
                                Talaarawan
                            </a>
                            </li>
                            <li>
                            <a
                                href="./panitikan/awtobiyograpiya.html"
                                className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                            >
                                Awtobiyograpiya
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

    ); 
}

export default Navbar;