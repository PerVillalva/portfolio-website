import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import SocialMediaIcons from '../components/SocialMediaIcons';

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase().replace(' ', '-');
    return (
        <AnchorLink
            className={`${
                selectedPage === lowerCasePage ? 'text-teal-500' : ''
            } hover:text-teal-500 transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
    const navbarBackground = isTopOfPage
        ? ' '
        : 'bg-opaque-navy backdrop-blur-md bg-opaque-navy md:shadow-sm md:shadow-navy-shadow [&>div>h4]:text-teal-500';
    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-4`}>
            <div className='flex items-center justify-between mx-auto w-5/6'>
                <h4 className='font-playfair text-3xl font-bold'>
                    <AnchorLink href='#home'>PV</AnchorLink>
                </h4>

                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div
                        className={`flex justify-between gap-16 text-sm font-semibold`}
                    >
                        <Link
                            page='Projects'
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page='Articles'
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page='Skills'
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />

                        <Link
                            page='Contact'
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <button
                        className='rounded-full p-2'
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img src='../assets/menu-icon.svg' alt='menu-icon' />
                    </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className='fixed right-0 bottom-0 h-full bg-navy w-[300px]'>
                        {/* CLOSE ICON */}
                        <div className='flex justify-end p-12'>
                            <button
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <img
                                    src='../assets/close-icon.svg'
                                    alt='close-icon'
                                />
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className='flex flex-col gap-10 ml-[33%] text-2x'>
                            <Link
                                page='Projects'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page='Articles'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page='Skills'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page='Contact'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
