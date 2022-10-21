import "../styles/register.css"
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <main className="register">
        <aside className="sidePanel-participant">
            <h2>Joining as a participant?</h2>
            <p>No Account Required</p>
            <form className="form">
                <span>#</span>
                <input type="text" placeholder="Enter Code Here..."/>
                <button type="submit">
                    Go
                </button>
            </form>
        </aside>

        <section className="mainPanel-host">
            <main className="registerForm">
                <h2>Sign up as a meeting host</h2>
                <h1 className="logo">slido</h1>
                <p>Already a account holder <Link className="loginLink" to="/logIn">LogIn</Link></p>
                <div className="logInBySocialMedia">
                    <button>
                        <svg className="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" _ngcontent-fkc-c23=""> <title>google-logo</title> <path fill="#527bbe" d="M23.095 9.914h-9.787c-0.431 0-0.783 0.352-0.783 0.783v3.127c0 0.431 0.352 0.783 0.783 0.783h5.513c-0.605 1.566-1.73 2.878-3.169 3.712l2.348 4.069c3.769-2.18 6-6.009 6-10.289 0-0.609-0.047-1.045-0.136-1.538-0.066-0.375-0.389-0.647-0.769-0.647z"></path><path fill="#34a752" d="M12 19.303c-2.7 0-5.053-1.472-6.319-3.656l-4.069 2.344c2.072 3.591 5.948 6.009 10.388 6.009 2.175 0 4.233-0.586 6-1.608v-0.005l-2.348-4.069c-1.078 0.623-2.32 0.984-3.652 0.984z"></path><path fill="#f7bb17" d="M4.697 12c0-1.331 0.361-2.573 0.984-3.647l-4.069-2.344c-1.027 1.758-1.612 3.806-1.612 5.991s0.586 4.233 1.612 5.995l4.069-2.344c-0.623-1.078-0.984-2.32-0.984-3.652z"></path><path fill="#e84234" d="M12 4.697c1.758 0 3.375 0.623 4.636 1.664 0.309 0.258 0.764 0.239 1.050-0.047l2.217-2.217c0.323-0.323 0.3-0.853-0.047-1.153-2.114-1.833-4.866-2.944-7.856-2.944-4.439 0-8.316 2.419-10.387 6.005l4.069 2.344c1.266-2.18 3.619-3.652 6.319-3.652z"></path></svg>
                        Sign Up Via Google
                    </button>

                    <button>
                        <svg className="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" _ngcontent-fkc-c23=""> <title>google-logo</title> <path fill="#527bbe" d="M23.095 9.914h-9.787c-0.431 0-0.783 0.352-0.783 0.783v3.127c0 0.431 0.352 0.783 0.783 0.783h5.513c-0.605 1.566-1.73 2.878-3.169 3.712l2.348 4.069c3.769-2.18 6-6.009 6-10.289 0-0.609-0.047-1.045-0.136-1.538-0.066-0.375-0.389-0.647-0.769-0.647z"></path><path fill="#34a752" d="M12 19.303c-2.7 0-5.053-1.472-6.319-3.656l-4.069 2.344c2.072 3.591 5.948 6.009 10.388 6.009 2.175 0 4.233-0.586 6-1.608v-0.005l-2.348-4.069c-1.078 0.623-2.32 0.984-3.652 0.984z"></path><path fill="#f7bb17" d="M4.697 12c0-1.331 0.361-2.573 0.984-3.647l-4.069-2.344c-1.027 1.758-1.612 3.806-1.612 5.991s0.586 4.233 1.612 5.995l4.069-2.344c-0.623-1.078-0.984-2.32-0.984-3.652z"></path><path fill="#e84234" d="M12 4.697c1.758 0 3.375 0.623 4.636 1.664 0.309 0.258 0.764 0.239 1.050-0.047l2.217-2.217c0.323-0.323 0.3-0.853-0.047-1.153-2.114-1.833-4.866-2.944-7.856-2.944-4.439 0-8.316 2.419-10.387 6.005l4.069 2.344c1.266-2.18 3.619-3.652 6.319-3.652z"></path></svg>
                        Sign Up Via WebEx
                    </button>
                </div>
            </main>
        </section>
    </main>
  )
}
