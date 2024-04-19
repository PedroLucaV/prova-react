import './ContainerModal.css'

const ContainerModal = ({TextFocus, TextRest}) => {
    return(
        <div className='ContModal'>
            <p><strong className='focusT'>{TextFocus}</strong> then $20/mo. Thereafter</p>
        </div>
    )
}

export default ContainerModal;