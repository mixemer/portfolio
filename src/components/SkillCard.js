import "./SkillCard.css";

export default function SkillCard({ skill, icon }) {
    return (
        <div className="col-lg-4 col-md-6 mb-5">
            <div className="card h-100 bg-transparent">
                <span className="service-icon mx-auto mb-3 text-secondary">
                    {icon}
                </span>
                <div className="card-body">
                    <h4 className="card-title"><b>{skill.name}</b></h4>
                    <p className="card-text text-faded opacity-75 fs-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    );
}