import {useState} from "react"

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(){
        
        setUserEmail('')
        console.log(userEmail)
    }
    return(
        <div>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="digite seu emsal"
                >

                </input>
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
              {userEmail && (
                <div>
                    <p>O email do usuario é: {userEmail}</p>
                    <button onClick={limparEmail}>limparEmail</button>
                </div>
              )}
            </form>
        </div>
    )
}
export default Condicional