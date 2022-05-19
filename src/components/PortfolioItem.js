import "./PortfolioItem.css";

export default function PortfolioItem( {to} ) {
    return (
        <a className="portfolio-item" data-bs-toggle="modal" href={"#"+to} role="button" data-bs-config='{"delay":0, "title":123}'>
            <span className="caption">
                <span className='caption-content text-start'>
                    <h5 className='fw-bold'> Neural Model Library </h5>
                    <p className='mb-0 fw-bold'>
                    Simple creation of feed forward and recurrent neural models in TensorFlow.
                    </p>
                </span>
            </span>
            <img className='img-fluid portfolio-img' src={require('../img/background.jpg')} alt=''/>
        </a>
    );
}