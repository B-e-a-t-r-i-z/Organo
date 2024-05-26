import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModiicada = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderModiicada}/>
        </div>
    )
}

export default CampoTexto
