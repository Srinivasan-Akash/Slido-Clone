import "../styles/navbar.css"

export default function Navbar() {
  return (
    <nav>
        <div className='logo'>slido</div>
        <ul>
            <li>Product</li>
            <li>Solutions</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li>Enterprice</li>
        </ul>
        <div className='btns'>
            <button>Log In</button>
            <button>Sign Up</button>
        </div>
    </nav>
  )
}
