import React from "react";
import styled from "styled-components";
const Login = () => {
	return (
		<Container>
			<Content>
				<CTA>
					<CTALogoOne src="images/cta-logo-one.svg" />
					<SignUp>Git All There</SignUp>
					<Description>
						Get Premier Access to Raya and the Last Dragon for an additional fee
						with a Disney+ subscription. As of 03/26/24, the price of Disney+
						and The Disney Bundle will increase by $1.
					</Description>
					<CTALogoTwo src="/images/cta-logo-two.png" />
				</CTA>
				<BgImage />
			</Content>
		</Container>
	);
};

const Container = styled.section`
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
`;
const Content = styled.div`
	margin-bottom: 10vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 100%;
	min-height: 100vh;
	padding: 80px 40px;
	height: 100%;
`;
const BgImage = styled.div`
	background-image: url("images/login-background.jpg");
	height: 100%;
	background-position: top;
	background-size: cover;
	background-repeat: no-repeat;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	z-index: -1;
`;
const CTA = styled.div`
	margin-bottom: 2vw;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	text-align: center;
	max-width: 650px;
	margin-top: 0;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	transition-timing-function: ease-in-out;
	transition: opacity 0.2s;
`;
const CTALogoOne = styled.img`
	margin-bottom: 12px;
	width: 100%;
	min-height: 1px;
	max-width: 600px;
	display: block;
`;
const SignUp = styled.a`
	font-weight: bold;
	color: #f9f9f9;
	background-color: #0063e5;
	margin-bottom: 12px;
	width: 100%;
	letter-spacing: 1.5px;
	font-size: 18px;
	padding: 16.5px 0;
	border: 1px solid transparent;
	border-radius: 4px;

	&:hover {
		background-color: #0483ee;
	}
`;

const Description = styled.p`
	color: hsla(0, 0%, 95.3%, 1);
	font-size: 12px;
	margin: 0 0 24px;
	line-height: 1.5;
	letter-spacing: 1.5px;
`;
const CTALogoTwo = styled.img`
	max-width: 600px;
	margin-bottom: 20px;
	display: inline-block;
	vertical-align: bottom;
	width: 100%;
`;

export default Login;
