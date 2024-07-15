import './welcome.css';
import { FaGrinStars } from "react-icons/fa";
function Welcome() {
    return (

        <div className="main-content">
            <h1 className="content__title">
                <FaGrinStars className='pl-5' />
                Welcome to Avichuela's Store!</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card content__card">
                        <div className="card-body">
                            <h5 className="card-title">Total Products</h5>
                            <p className="card-text">100</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card content__card">
                        <div className="card-body">
                            <h5 className="card-title">Categories</h5>
                            <p className="card-text">10</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card content__card">
                        <div className="card-body">
                            <h5 className="card-title">Users</h5>
                            <p className="card-text">50</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );



}

export default Welcome;