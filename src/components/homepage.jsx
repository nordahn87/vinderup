import Navigation from './navigation';
import Header from './header';
import Articles from './articles';
import Main from './main'

const Homepage = () => {
    return (
        <>
            <Navigation />
                <Header />
            <Main>
                <Articles />
            </Main>
        </>
    );
}

export default Homepage;
