import React from 'react'
import "../../styles/Team.css"
import team01 from "../../assets/images/team-01.png"

const teamMember = [
    {
        imgUrl: team01,
        name: "Naim",
        description: "Web Developer",
    },
    {
        imgUrl: team01,
        name: "Naim",
        description: "Accountant",
    },
    {
        imgUrl: team01,
        name: "Naim",
        description: "Web Developer",
    },
    {
        imgUrl: team01,
        name: "Naim",
        description: "Web Developer",
    },
]


const Team = () => {
    return (
        <section className='our_team'>
            <div className='container'>
                <div className="team_content">
                    <div className="subtitle">Our Team</div>
                    <h2>Meet With <span className="highlight">Our Team</span></h2>
                </div>
                <div className="team_wrapper">
                    {/* <div className="team_item">
                        <div className="team_img"><img src={team01}></img></div>
                    </div> */}
                    {/* <div className="team_details">
                        <h4>Naim</h4>
                        <p className="description">Web Developer</p>
                        <div className="team_member-social">
                            <span><i className="ri-linkedin-line"></i></span>
                            <span><i className="ri-twitter-line"></i></span>
                        </div>
                    </div> */}
                    {/* card section */}
                    <div class="card1">
                        <img class="card__image" src={team01} />
                        <p class="card__name">Naim</p> <br />
                        <p class="card__title">CEO</p>
                        <div class="grid-container">
                        </div>
                        <ul class="social-icons">
                            <li><a href="#"><i class="ri-instagram-line"></i></a></li>
                            <li><a href="#"><i class="ri-twitter-x-fill"></i></a></li>
                            <li><a href="#"><i class="ri-linkedin-fill"></i></a></li>
                            <li><a href="#"><i class="ri-facebook-circle-fill"></i></a></li>
                        </ul>
                        <button class="btn draw-border">Message</button>

                    </div>
                    <div class="container1">
                        {

                            teamMember.map((item, index) => (
                                <div class="card">
                                    <img class="card__image" src={team01} />
                                    <p class="card__name">{item.name}</p>
                                    <p class="card__title">{item.description}</p>
                                    <div class="grid-container">
                                    </div>
                                    <ul class="social-icons">
                                        <li><a href="#"><i class="ri-instagram-line"></i></a></li>
                                        <li><a href="#"><i class="ri-twitter-x-fill"></i></a></li>
                                        <li><a href="#"><i class="ri-linkedin-fill"></i></a></li>
                                        <li><a href="#"><i class="ri-facebook-circle-fill"></i></a></li>
                                    </ul>

                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Team