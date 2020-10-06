import React from 'react'
import "./AboutText.css"

export default function AboutText() {
    return (
        <div class="col">
        <p>
            <img src={require("../../assets/headshot.png")} class="img-thumbnail mr-3" alt="profile-pic"/>
            Hey there! My name is Cooper Seibert, and I am an aspiring web
            developer. I have used computers my entire life, and while most of
            that time was spent gaming or using social media, I have always had
            an interest in what makes these programs "tick". My interest was not
            truely piqued until I was involved in the rollout of a payment
            processing software at my most recent job. As with most new software
            programs, there were quite a few bugs and issues during the initial
            rollout period, and while my job was mostly to just assist customers
            and report bugs as I found them, I couldn't help but wonder what{" "}
            <i>exactly</i> was causing these errors. I started to find myself
            using the Chrome dev tools to take a look at the web-app side of
            things, and although most of it was gibberish at the time, I started
            to pick up on little parts of it. I decided to take my interest one
            step further and sign up for a Codecademy Pro account, which I ended
            up enjoying thoroughly and eventually led to me enrolling in the
            University of Arizona's Full-Stack Developement program.
        </p>
        <br />
        <p>
          I am enjoying the program immensely and cannot wait to take what
          I've learned and apply it in a "real life" setting, whether it be
          through a new career, or just helping a friend with their personal
          websites! You can view some of my work by checking out my GitHub
          profile below, or by clicking the "Portfolio" section above. Thank
          you for reading this far! :)
        </p>
        </div>
    )
}
