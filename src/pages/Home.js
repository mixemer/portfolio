import React, {useRef, useEffect} from 'react'
import useOnScreen from '../useOnScreen';
import "./Home.css";
import { headerIds } from "../globals";

function Home({ setActive }) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    useEffect(() => {
        if (isVisible) {
            setActive("")
        }
      }, [isVisible])

    return (
        <div className="home d-flex" ref={ref}>
            <div className="container text-center my-auto home_content">
                <div>
                <img className="img-fluid img-thumbnail img-circle m-auto" id="profile_pic" src={require('../img/profile.JPG')} width="250" height="250" alt="Professional picture of Mehmet Sahin"/>
                <h1 className="mb-1"> Mehmet Sahin </h1>
                <h3 className="mb-5"> Software Enginner </h3>

                <br></br>

                <a className="p-3 m-2 btn btn-light btn-lg shadow-lg border" href={"#"+headerIds.skills} role="button">
                    <i className="fa-solid fa-chevron-down p-2"></i>
                    Enter Portfolio
                    <i className="fa-solid fa-chevron-down p-2"></i>
                 </a>
                </div>
            </div>
        </div>
    );
}

export default Home;