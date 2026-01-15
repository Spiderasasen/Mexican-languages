function LanguageCard({data}) {
    return(
        <div className="language-card">
            <h3>{data.name}</h3>
            <p><strong>Region: {data.region}</strong></p>
            <p><strong>Status: {data.status}</strong></p>
            <p>{data.description}</p>
        </div>
    )
}
export default LanguageCard;