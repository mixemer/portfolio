import "./PortfolioModal.css";

export default function PortfolioModal({item}) {
    const dataLink = `https://gh-card.dev/repos/mixemer/${item.gh_card}.svg?link_target=_blank`;

    const imgItms = item.imgs.map((img) => 
    <div className="col-6 col-sm-3">
        <img className='img-fluid img-thumbnail rounded mx-auto d-block' style={{ minHeight: "200px", objectFit: "cover" }} src={require('../img'+img)} alt=''/>
    </div>  
    );

    const hasDetailImgs = item.imgs.length > 0;

    return (
        <>
        <div className="modal fade text-dark" id={item.modal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header flex-column text-center">
                    <button type="button" className="btn-close fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="row">
                        { hasDetailImgs &&
                            <img className='col-2 img-fluid img-thumbnail rounded mx-auto d-block' src={require('../img'+item.img)} alt='' style={{height: "100px", width: "auto", objectFit: "cover"}}/>
                        }
                        <h5 className="modal-title fs-1" id="exampleModalLabel">
                            <b>{item.title}</b>
                        </h5>
                        </div>
                        <p className="p-0 m-0">{item.caption}</p>
                    </div>
                    <div className="modal-body">
                    
                    { !hasDetailImgs &&
                        <img className='img-fluid img-thumbnail rounded mx-auto d-block' src={require('../img'+item.img)} alt=''/>
                    }

                    <div className="row justify-content-center">
                        { hasDetailImgs &&
                            imgItms
                        }
                    </div>

                    </div>
                    { item.detail.length > 0 &&
                        <div className="modal-body">
                         <p>{item.detail}</p>
                        </div>
                    }

                    <div className="modal-body">
                        <p>Created using: {item.tech}</p>
                        <p><b>View this project on:</b>
                        <a href= {item.link} target="_blank"> {item.link}</a>
                        </p>
                    </div>



                    {/* https://github.com/nwtgck/gh-card https://gh-card.dev/ */}
                    { item.gh_card.length > 0 &&
                        <object className="mx-auto mb-3" type="image/svg+xml" data={dataLink}></object>
                    }

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}