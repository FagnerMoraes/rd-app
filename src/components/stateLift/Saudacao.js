function Saudacao({nome}){

    function gerarSaudacao(algumNome){
        return `ola, ${algumNome}, tudo bem?`
    }

    return (
    <>
    {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
    )
}
export default Saudacao