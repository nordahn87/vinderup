import logoLigt from "../logo/vinderup-logo-light.svg";

const Footer = () => {

    return (
        <>
            <footer className="bg-secondary text-white flex flex-col justify-center items-center mt-5 h-full p-8">
                <img
                    src={logoLigt}
                    className="w-24 mb-4"
                    alt="Billede af logo" />
                <p className="text-center">2021 © Copyright Charley Nordahn</p>
            </footer>
        </>
    );
}

export default Footer;
