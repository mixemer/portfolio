import "./PortfolioItem.css";

export default function PortfolioItem( {item} ) {
    //exampleModal shouldbe item.modal.
    return (
        <a className="portfolio-item" data-bs-toggle="modal" href={"#exampleModal"} role="button" data-bs-config='{"delay":0, "title":123}'>
            <span className="caption">
                <span className='caption-content text-start'>
                    <h5 className='fw-bold'> {item.title} </h5>
                    <p className='mb-0 fw-bold'>
                        {item.detail}
                    </p>
                </span>
            </span>
            <img className='img-fluid portfolio-img' src={require('../img/project_imgs/'+item.img)} alt=''/>
        </a>
    );
}