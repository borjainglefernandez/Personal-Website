import React from "react";
import { Link, withRouter } from "react-router-dom";

const linkStyle = {
	color: "#66FCF1",
	fontFamily: "Georgia",
};

function Navbar(props) {
	return (
		<div className='navigation'>
			<nav
				class='navbar navbar-expand'
				style={{
					backgroundColor: "#0B0C10",
					color: "coral",
				}}
			>
				<div class='container'>
          <Link class='navbar-brand' to='/' style={ linkStyle }>
						Borja Ingle-Fernandez
					</Link>

					<div>
						<ul class='navbar-nav ml-auto'>
							<li
								class={`nav-item  ${
									props.location.pathname === "/" ? "active" : ""
								}`}
							>
								<Link class='nav-link' to='/' style={linkStyle}>
									Home
									<span class='sr-only'>(current)</span>
								</Link>
							</li>
							<li
								class={`nav-item  ${
									props.location.pathname === "/about" ? "active" : ""
								}`}
							>
								<Link class='nav-link' to='/about' style={linkStyle}>
									About
								</Link>
							</li>
							<li
								class={`nav-item  ${
									props.location.pathname === "/education" ? "active" : ""
								}`}
							>
								<Link class='nav-link' to='/education' style={linkStyle}>
									Education
								</Link>
							</li>
							<li
								class={`nav-item  ${
									props.location.pathname === "/experience" ? "active" : ""
								}`}
							>
								<Link class='nav-link' to='/experience' style={linkStyle}>
									Experience
								</Link>
							</li>
							<li
								class={`nav-item  ${
									props.location.pathname === "/contact" ? "active" : ""
								}`}
							>
								<Link class='nav-link' to='/contact' style={linkStyle}>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default withRouter(Navbar);
