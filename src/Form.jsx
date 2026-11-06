import { useState } from "react"

function Form() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const [showSignup, setShowSignup] = useState(false)

    // Transmettre les données au back
    function handleSignup() {
        console.log([username, email, password, passwordConfirm])
        // ...
    }

    // Transmettre les données au back
    function handleLogin() {
        console.log([username, password])
        // ...
    }

    return (
        <>
            <h1>Page Form</h1>

            { showSignup == true ?
                <>
                    <input type="text" placeholder="username..." onChange={(e) => setUsername(e.target.value)} />
                    <input type="text" placeholder="email..." onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="password..." onChange={(e) => setPassword(e.target.value)} />
                    <input type="text" placeholder="password-confirm..." onChange={(e) => setPasswordConfirm(e.target.value)} />

                    <button type="submit" onClick={() => handleSignup()}>Créer un compte</button>

                    <button onClick={() => setShowSignup(false)}>Vous avez déjà un compte ? Se connecter</button>
                </>
            :
                <>
                    <input type="text" placeholder="username..." onChange={(e) => setUsername(e.target.value)} />
                    <input type="text" placeholder="password..." onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit" onClick={() => handleLogin()}>Se connecter</button>

                    <button onClick={() => setShowSignup(true)}>Vous n'avez pas de compte ? Créer un compte</button>
                </>
            }

            
        </>
    )
}

export default Form