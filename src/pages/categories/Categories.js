import CategoriesIndex from "../../component/categories";
import Header from "../../component/layout/header";
import Menu from "../../component/layout/menu";

function Categories() {
    return (

        <div>
            <Header userName={"Ivan E. "} />
            <div className="app__body">
                <Menu />
                <CategoriesIndex/>
            </div>
        </div>
    );
}

export default Categories;