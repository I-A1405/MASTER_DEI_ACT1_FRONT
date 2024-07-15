
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";
function ProductIndex() {


    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmited = (e) => {
        e.preventDefault();
        console.log("Data -->", search);
        if (search !== "") {
            setSearch("");
            e.target.reset();
            console.log("buscara el contenido", search);
            navigate(`/products/productssearch?keyword=${search}`);
        }
    }


    return (
        <div className="main-content">
            <div className="row">
                <div className="col-12">
                    <h1 className="content__title">Products List</h1>
                </div>
                <div className="col-4">
                    <form onSubmit={handleSubmited}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" value={search} onChange={e => setSearch(e.target.value)}
                                placeholder="Search for products..."
                                aria-label="Search for productss..." />
                            <button className="btn btn-outline-success" disabled={!search} type="submit" id="button-addon2">Find!</button>
                        </div>
                    </form>
                </div>
                <div className="col-4">
                    <div class="badge bg-primary text-wrap">
                        This text should wrap.
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default ProductIndex;