import React from 'react'
import "./Portfolio.css"
import Project from "../Project/Project"

export default function Portfolio() {
    return (
        <div class="container-port float-left ml-4 my-5">
            <h1><b>Portfolio</b></h1>
            <hr class="my-3" />
            <div class="row">
                <Project />
        </div>
    </div>
    )
}
