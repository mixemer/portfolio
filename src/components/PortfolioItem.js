import "./PortfolioItem.css";

export default function PortfolioItem( {item} ) {
    //exampleModal shouldbe item.modal.
    const s = "/puncher/puncher.png"
    return (
        <div key={item.title} className="col-lg-4 col-md-6 p-0">
            <a className="portfolio-item" data-bs-toggle="modal" href={"#"+item.modal} role="button" data-bs-config='{"delay":0, "title":123}'>
                <span className="caption">
                    <span className='caption-content text-start'>
                        <h5 className="fw-bold"> {item.title} </h5>
                        <p className='mb-0 '>
                            {item.caption}
                        </p>
                    </span>
                </span>
                <img className='img-fluid portfolio-img' src={require("../img"+item.img)} alt='Project image'/>
            </a>
        </div>
    );
}