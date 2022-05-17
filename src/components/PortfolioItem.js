import "./PortfolioItem.css";

export default function PortfolioItem() {
    return (
        <a className="portfolio-item" data-bs-toggle="modal" href="#exampleModal" role="button">
            <span className="caption">
                <span className='caption-content text-start'>
                    <h5 className='fw-bold'> Neural Model Library </h5>
                    <p className='mb-0 fw-bold'>
                    Simple creation of feed forward and recurrent neural models in TensorFlow.
                    </p>
                </span>
            </span>
            <img className='img-fluid portfolio-img' src="/background.jpg" alt=''/>
        </a>
    );
}