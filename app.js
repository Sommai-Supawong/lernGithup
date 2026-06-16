import React from "react";
import "./App.css";

function App() {
    return (
        <div className="app">
            <header className="navbar">
                <h2>My Website</h2>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">Abouts</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <section id="home" className="hero">
                <h1>Welcome to My Website</h1>
                <p>
                    This is a simple one-page React application built with App.js.
                </p>
                <button>Get Started</button>
            </section>

            <section id="about" className="section">
                <h2>About</h2>
                <p>
                    This page is created as a clean and simple single-page layout.
                    You can edit the text, colors, and sections as needed.
                </p>
            </section>

            <section id="contact" className="section contact">
                <h2>Contact</h2>
                <p>Email: example@email.com</p>
                <p>Phone: 012-345-6789</p>
            </section>

            <footer>
                <p>© 2026 My Website. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;