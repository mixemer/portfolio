import "./SkillCard.css";

export default function SkillCard() {
    return (
        <div class="col-lg-4 col-md-6 mb-5">
            <div class="card h-100 bg-transparent">
                <span className="service-icon mb-3">
                    <i className="fa-brands fa-java fa-2x"></i>
                </span>
                <div class="card-body">
                    <h5 class="card-title">Java</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    );
}