import React from 'react'
import '../Home/Home.css'
import imgGhost from "../../assets/ghost-img.png";

function Home() {
  return (
    <>
        <main className="main">
            <section className="home">
                <div className="home__container containerA">
                    <div className="home__data">
                        <span className="home__subtitle">Error 404</span>
                        <h1 className="home__title">Hey Buddy</h1>
                        <p className="home__description">
                            We can't seem to find the page <br></br> you are looking for.
                        </p>
                        <a href="#" className="home__button">Go Home</a>
                    </div>

                    <div className="home__img">
                        <img src={imgGhost} alt=""></img>
                        <div className="home__shadow"></div>
                    </div>
                </div>
                <footer className="home__footer">
                    <span>(554) 987-654</span>
                    <span>|</span>
                    <span>info@company.com</span>
                </footer>
            </section>
        </main>
    </>
  )
}

export default Home