import "./PortfolioModal.css";

export default function PortfolioModal({item}) {
    const dataLink = `https://gh-card.dev/repos/mixemer/${item.gh_card}.svg?link_target=_blank`;
    return (
        <>
        <div className="modal fade text-dark" id={item.modal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header flex-column text-center">
                    <button type="button" className="btn-close fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
                        <h5 className="modal-title fs-1" id="exampleModalLabel">
                            <b>{item.title}</b>
                        </h5>
                        <p className="p-0 m-0">{item.caption}</p>
                    </div>
                    <div className="modal-body">
                    <img className='img-fluid img-thumbnail rounded mx-auto d-block' src={require('../img/project_imgs/'+item.img)} alt=''/>

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