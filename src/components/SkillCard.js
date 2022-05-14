import "./SkillCard.css";

export default function SkillCard({
    title, description, icon
}) {
    return (
        <div class="col-lg-4 col-md-6 mb-5">
            <div class="card h-100 bg-transparent">
                <span className="service-icon mx-auto mb-3 text-secondary">
                    {icon}
                </span>
                <div class="card-body">
                    <h4 class="card-title"><b>{title}</b></h4>
                    <p class="card-text text-faded opacity-75">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    );
}