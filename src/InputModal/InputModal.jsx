import './Input.css'

const InputModal = ({placeH}) => {
    return(
        <>
            <input type="text" placeholder={placeH} name={placeH} className="Inp"/>
        </>
    )
}

export default InputModal;