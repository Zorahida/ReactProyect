function CardEpisodes (episode) {
    return (
        <>
        <article>
            <h3>{episode.id}</h3>
            <img src={episode.url} alt= "" />
        </article>
        </>
    )

}
export default CardEpisodes;