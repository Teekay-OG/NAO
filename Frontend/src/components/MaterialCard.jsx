import "./MaterialCard.css";

function MaterialCard({

    name,
    category,
    description,
    risk

}){

    return(

        <div className="material-card">

            <div className="material-header">

                <h3 className="material-name">
                    {name}
                </h3>

                <span className={`badge ${risk.toLowerCase()}`}>
                    {risk}
                </span>

            </div>

            <p className="material-category">
                {category}
            </p>

            <p className="material-description">
                {description}
            </p>

            <span className="view-link">
                View Details →
            </span>

        </div>

    )

}

export default MaterialCard;