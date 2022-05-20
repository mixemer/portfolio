import PortfolioItem from "../components/PortfolioItem";
import { projects } from "../globals";

/**
 * 
 * @param {projectGroupName} based on the projects of globals.js 
 */
export default function ProjectGroup({ projectGroupName }) {
    // make sure there is an array for projectGroupName in projects
    const projectGroup = projects[projectGroupName];
    const items = projectGroup.map((item) =>
        <div className="col-lg-4 col-md-6 p-0">
            <PortfolioItem item={item} />
        </div>
    );

    return (
        <>
        <br></br>
        <h4 className="text-start"> {projectGroupName} </h4>
        <div className="row">
            {items}
        </div>
        </>
    );
}