import './LinkModal.css'

const LinkModal = ({Link}) => {
    return(
        <>
        <span className='link'>
            <p>By clicking the button you are ageeing to our <a href="">{Link}</a></p>
        </span>
        </>
    )
}

export default LinkModal;