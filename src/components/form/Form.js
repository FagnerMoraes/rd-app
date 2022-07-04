import {useState} from "react";

function Form(){
    
    function cadastrarUsuario(e){
        e.preventDefault()
        
        console.log(`Ola, ${name} voce foi cadastrado!, ${password}`)
    }
    
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    
    return(
        <>
        <h1>Formulario de cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <div className="nameField">
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome">
                    
                </input>
            </div>
            <div className="passwordField">
                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha">
                </input>
            </div>
            <input type="submit" value="Cadastrar"></input>
        </form>
        </>
    )
}

export default Form