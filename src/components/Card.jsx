function Card (character) {
    return (
        <>
        <article>
            <h3>{character.name}</h3>
            <h4>{character.status}</h4>
            <p>{character.gender}</p>
            <img src={character.image} alt= "" />
        </article>
        </>
    )
}
export default Card;

