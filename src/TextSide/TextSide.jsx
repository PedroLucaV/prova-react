import './TextSide.css'

const TextSide = ({Title, Paragraph}) => {
    return(
        <>
            <div className="TextSide">
                <h1 style={{fontWeight: 700}}>{Title}</h1>
                <p style={{fontWeight: 400}}>{Paragraph}</p>
            </div>
        </>
    )
}

export default TextSide;