
export const SinglePage = ({ id, title, url, thumbnailUrl }) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px', border: '2px solid black' }}>
            <img src={url} alt='error' width={110} />
            <p>{id}</p>
            <p>{title}</p>
        </div>
    )
}

