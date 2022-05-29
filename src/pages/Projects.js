import React, {useRef, useEffect} from 'react';
import useOnScreen from '../useOnScreen';
import { headerIds, projects } from "../globals";
import PortfolioItem from '../components/PortfolioItem';
import "./Projects.css";


// TODO: make this page as a Tab, each tab is different title
export default function Projects({setActive}) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)


    useEffect(() => {
        if (isVisible) {
            setActive(headerIds.projects)
        }
      }, [isVisible])

    return (
        <section className="content-section projects text-center text-white" id={headerIds.projects}>
            <div ref={ref} className="container">
                {/* content header */}
                <div>
                    <h2> Projects </h2>
                </div>
                {/* content header details */}
                <div>
                    <p>Here you can see some of the projects I've done on my own time.</p>
                </div>
                 <hr></hr>

                 <Titles />
                 <br></br>
                 <ProjectsBody />
            </div>
        </section>
    );
}

function Titles() {

    const titles = Object.keys(projects).map((key) => 
        <li key={key} className="nav-item" role="presentation">
            <button className="nav-link" id={"pills-"+key+"-tab"} data-bs-toggle="pill" data-bs-target={"#pills-"+key} type="button" role="tab" aria-controls={"pills-"+key} aria-selected="false">{projects[key].name}</button>
        </li>);


    return (
        <ul className="nav nav-pills justify-content-center mt-4" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button>
            </li>
            { titles }
        </ul>   
    )
}

function ProjectsBody() {
    const allItems = Object.keys(projects).map((key) =>
        projects[key].items.map((item) =>
        <PortfolioItem key={item.title} item={item} />));

    const groupedByNameItems = Object.keys(projects).map((key) => 
        <div key={key.title} className="tab-pane fade" id={"pills-"+key} role="tabpanel" aria-labelledby={"pills-"+key+"-tab"} tabIndex="0">
            {getItems(key)}
        </div>);
    

    return (
        <>        
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">
                <div className='row'>
                { allItems }
                </div>
            </div>
            { groupedByNameItems }
        </div>
        </>
    );
}

function getItems(key) {
    const items = projects[key].items.map((item) =><PortfolioItem key={item.title} item={item} />)
    return (
        <div className='row'>
            { items}
        </div>
    );
}

