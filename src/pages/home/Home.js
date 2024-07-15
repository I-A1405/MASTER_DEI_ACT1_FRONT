import Header from "../../component/layout/header";
import Menu from "../../component/layout/menu";
import Welcome from "../../component/welcome/welcome";


function Home() {
    return (
        <div>
            <Header userName={"Ivan E. "} />
            <div className="app__body">
                <Menu />
                <Welcome/>
            </div>
        </div>
    );
}

export default Home;