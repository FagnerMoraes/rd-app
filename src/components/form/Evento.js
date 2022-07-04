import Button from './Button'
function Evento (){

    function meuEvento(){
        
        console.log(`Ativado primeiro evento`)
    }

    function segundoEvento()
    {
        console.log('Ativando segundo evento')
    }
    return(
        <div>
        <p>Clice para disparar um evento</p>
        <Button event={meuEvento} text="Primeiro evento" />
        <Button event={segundoEvento} text="Segundo evento" />
        </div>
    )
}

export default Evento