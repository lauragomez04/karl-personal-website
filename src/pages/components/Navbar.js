import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="#">
          Karl Wienhold
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" href="#">
                Research &amp; Projects{" "}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                My Content
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                What I'm Open to
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
