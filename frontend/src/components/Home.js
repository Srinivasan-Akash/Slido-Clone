import { Link } from "react-router-dom"
import Info from "./Info";
import Navbar from "./Navbar";
import "../styles/home.css"

export default function Home() {
  return (
    <main>
        <Navbar/>
        <Info/>
        <section className='home'>
            <div className='participant'>
                <h3>Joining as a participant?</h3>
                <form>
                    <span>#</span>
                    <input type="text" placeholder="Enter Code Here..."/>
                    <button type="submit">
                        Go
                    </button>
                </form>
            </div>
            <section className="main">
                <h1>Your go-to interaction app for hybrid meetings</h1>
                <article>
                Engage your participants with live polls, Q&A, quizzes and word clouds
                — whether you meet in the office, online or in-between.
                </article>
                <div className='btns-home'>
                    <button>
                        <Link to="/Register">Get started for free</Link>
                    </button>
                    <button>Schedule a demo</button>
                </div>
            </section>

        </section>
    </main>
  )
}
