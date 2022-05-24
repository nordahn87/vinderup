import logoLightText from '../logo/vinderup-logo-light-text.svg';
import logoDarkText from '../logo/vinderup-logo-dark-text.svg';
import { useState } from 'react';
import NavigationItem from './navigation/item';
import NavItemsData from '../.data/navigation-items';
import GalleryButton from './gallery/button'

const Navigation = () => {

  const [toggleMobileNavMenu, setToggleMobileNavMenu] = useState(false)

  const closeOpen = () => {
    setToggleMobileNavMenu(!toggleMobileNavMenu)
    const logo = document.querySelector("#logo")

    logo.addEventListener("click", () => {
      setToggleMobileNavMenu(false)
    })
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1023) {
      setToggleMobileNavMenu(false)
    }
  })

  return (
    <>
      <nav>
        <div
          id="nav-desktop"
          className="flex items-center w-full justify-between md:px-9 h-16 z-3 fixed px-4">

          <a
            href="#vinderup"
            id="logo"
            className=" z-3">
            <img
              src={toggleMobileNavMenu ? logoDarkText : logoLightText}
              className="w-32"
              alt="Billede af logo" />
          </a>

          <button
            className="flex justify-center items-center w-12 h-12 z-3 lg:hidden"
            onClick={closeOpen}>
            <i className={(toggleMobileNavMenu ? 'las la-times text-secondary' : 'las la-bars text-white') + ' text-3xl'}></i>
          </button>

          <div className="font-oswald text-white hidden lg:flex items-center z-3 ">
            {NavItemsData.map((item, index) => {
              return (
                <NavigationItem
                  key={index}
                  name={item.name}
                  slug={item.slug} />
              )
            })}
            <GalleryButton />
          </div>
        </div>

        {/* ---nav-mobile--- */}
        <div
          id="nav-mobile">
          <div className={(toggleMobileNavMenu ? 'top-0' : '-top-screen') + ' lg:hidden flex flex-col justify-center top-0 items-center fixed w-screen h-screen text-xl bg-white font-oswald text-secondary transition-300 z-2'}>
            {NavItemsData.map((item, index) => {
              return (
                <NavigationItem
                  key={index}
                  name={item.name}
                  toggleCloseOpen={closeOpen}
                  slug={item.slug} />
              )
            })}
            <GalleryButton />
          </div>
        </div>
        <span className="bg-secondary fixed h-16 w-full top-0 -left-0 z-1 "></span>
      </nav>
    </>
  );
}
export default Navigation;
