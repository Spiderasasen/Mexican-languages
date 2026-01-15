function LanguageCard({data}) {
    return(
        <div className="language-card">
            <h3>{data.name}</h3>
            <img src={data.image} alt={data.imageAlt} />
            <p><strong>People still speaking it: </strong>{data.population}</p>
            <p>{data.description}</p>
        </div>
    )
}
export default LanguageCard;