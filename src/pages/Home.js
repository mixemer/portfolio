import React, {useRef, useEffect} from 'react'
import useOnScreen from '../useOnScreen';
import "./Home.css";

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
                <img className="img-fluid img-thumbnail img-circle" id="profile_pic" src="/profile.jpg" width="250" height="250" alt="my profile"/>
                <h1 className="fs-1 mb-1"> Mehmet Sahin </h1>
                <h3 className="mb-5"> Software Enginner </h3>

                <br></br>

                <button type="button" className="p-3 btn btn-light btn-lg">Enter Portfolio </button>

                </div>
            </div>
        </div>
    );
}

export default Home;