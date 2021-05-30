import React from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./ProfilePic.jpeg";
import "./HomePage.css";
import { AiFillGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { IconContext } from "react-icons";

import RotundaPhoto from "./Rotunda.jpeg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { icon } from "@fortawesome/fontawesome-svg-core";

const Text = styled.p`
	color: #c5c6c7;
	font-family: "Georgia";
	padding-left: ${(props) => props.paddingLeft || "0px"};
	padding-right: ${(props) => props.paddingRight || "0px"};
	padding-top: ${(props) => props.paddingTop || "0px"};
`;

const Header = styled.h1`
	font-family: Georgia;
	color: #66fcf1;
	padding-left: ${(props) => props.paddingLeft || "100px"};
`;

const Seperator = styled.hr`
	border-top: 2px solid #c5c6c7;
	border-radius: 5px;
	width: 50%;
`;

const imageLinkStyle = {
	paddingLeft: "190px",
	paddingTop: "190px",
};

const iconStyle = {
	color: "#c5c6c7",
	width: "30px",
	height: "30px",
};

function ProfilePicture() {
	return (
		<div
			style={{
				paddingLeft: "100px",
				paddingTop: "30px",
				paddingBottom: "30px",
			}}
		>
			<ReactRoundedImage
				image={MyPhoto}
				roundedSize='0'
				imageWidth='200'
				imageHeight='200'
			/>
			<h5
				style={{
					paddingTop: "20px",
					color: "#66FCF1",
				}}
			>
				Borja Ingle-Fernandez
			</h5>
			<Text paddingLeft='20px' paddingTop='8px'>
				Full-Stack Developer
			</Text>
			<div style={{ paddingLeft: "30px" }}>
				{" "}
				<a href='https://github.com/borjainglefernandez'>
					<AiFillGithub style={iconStyle} className='icon__github' />
				</a>
				<a
					href='https://www.linkedin.com/in/borja-ingle-fernandez/'
					style={{ paddingLeft: "10px" }}
				>
					<AiOutlineLinkedin style={iconStyle} className='icon__linkedin' />
				</a>
				<a
					href='mailto:borja.ingle@gmail.com'
					style={{ paddingLeft: "10px" }}
				>
					<AiOutlineMail style={iconStyle} className='icon__email' />
				</a>
			</div>
		</div>
	);
}

function NameDescription() {
	return (
		<div
			style={{
				paddingLeft: "100px",
				paddingRight: "140px",
			}}
		>
			<Text>
				{" "}
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</Text>
			<Text>
				{" "}
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</Text>
		</div>
	);
}

function HomePage() {
	return (
		<div
			style={{
				paddingTop: "20px",
				backgroundColor: "#202020",
			}}
		>
			<div
				className='Introduction'
				style={{
					display: "flex",
					justifyContent: "center",
					width: "80%",
					margin: "auto",
				}}
			>
				<ProfilePicture />
				<div
					style={{
						paddingTop: "50px",
					}}
				>
					<Header>About My Website</Header>
					<NameDescription />
				</div>
			</div>
			<Seperator></Seperator>
			<div
				style={{
					paddingBottom: "40px",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						width: "100%",
						margin: "auto",
						paddingTop: "40px",
					}}
				>
					<Link to='/about' style={{ paddingRight: "80px" }}>
						<div className='about__overlay'>
							<Header paddingLeft='0px'>About Page</Header>
							<Text paddingLeft='50px' paddingRight='50px'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets
								containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of
								Lorem Ipsum.
							</Text>
						</div>

						<img src={RotundaPhoto} class='rotunda'></img>
					</Link>
					<Link to='/education'>
						<img src={RotundaPhoto}></img>
					</Link>
				</div>

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						width: "100%",
						margin: "auto",
						paddingTop: "80px",
					}}
				>
					<Link to='/experience' style={{ paddingRight: "80px" }}>
						<img src={RotundaPhoto}></img>
					</Link>
					<Link to='/contact'>
						<img src={RotundaPhoto}></img>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
