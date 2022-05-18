const Header = () => {
    
    return (
        <>
            <header
                id="vinderup"
                className="flex justify-center items-center pt-16 h-screen w-100 bg-fixed"
                style={{
                    backgroundImage: "url(./img/header-cover.jpg)",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#BC604B'
                }}>
                <section>
                    <h1 className="text-center mb-20">
                        <span className="font-oswald text-3xl 3xsm:text-4xl 2xsm:text-5xl xsm:text-6xl md:text-7xl lg:text-8xl font-semibold uppercase text-white">
                            Vinderup
                        </span>
                        <br />
                        <span className="font-permanent-marker text-4xl  3xsm:text-5xl 2xsm:text-6xl xsm:text-7xl md:text-8xlg lg:text-9xl text-secondary">
                            Nordvestjylland
                        </span>
                    </h1>
                    <h2 className="text-center">
                        <span className="font-oswald text-3xl 3xsm:text-4xl 2xsm:text-5xl xsm:text-6xl md:text-7xl lg:text-8xl font-semibold uppercase text-white">
                            Indbyggere
                        </span>
                        <br />
                        <span className="font-permanent-marker text-4xl 3xsm:text-5xl 2xsm:text-6xl  xsm:text-7xl md:text-8xl lg:text-9xl text-secondary">
                            3095
                        </span>
                    </h2>
                </section>
            </header>
        </>
    );
}

export default Header;
