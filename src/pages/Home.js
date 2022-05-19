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
                <img className="img-fluid img-thumbnail img-circle" id="profile_pic" src={require('../img/profile.JPG')} width="250" height="250" alt="my profile"/>
                <h1 className="fs-1 mb-1"> Mehmet Sahin </h1>
                <h3 className="mb-5"> Software Enginner </h3>

                <br></br>

                <a className="p-3 m-2 btn btn-light btn-lg shadow-lg border" href={"#"+headerIds.skills} role="button">
                    <i class="fa-solid fa-chevron-down p-2"></i>
                    Enter Portfolio
                    <i class="fa-solid fa-chevron-down p-2"></i>
                 </a>
                </div>
            </div>
        </div>
    );
}

export default Home;