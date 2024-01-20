// Home.js
import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { db } from "../firebase"; // Import db from firebase
import { selectUserName } from "../features/user/userSlice";
import { setMovies } from "../features/movie/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";

const Home = () => {
	const dispatch = useDispatch();
	const userName = useSelector(selectUserName);
	const recommends = [];
	const newDisneys = [];
	const originals = [];
	const trending = [];

	useEffect(() => {
		console.log(recommends);
		const unsubscribe = onSnapshot(collection(db, "movies"), (snapshot) => {
			snapshot.docs.forEach((doc) => {
				switch (doc.data().type) {
					case "recommend":
						recommends.push({ id: doc.id, ...doc.data() });
						break;

					case "new":
						newDisneys.push({ id: doc.id, ...doc.data() });
						break;

					case "original":
						originals.push({ id: doc.id, ...doc.data() });
						break;

					case "trending":
						trending.push({ id: doc.id, ...doc.data() });
						break;

					default:
						break;
				}
			});

			dispatch(
				setMovies({
					recommend: recommends,
					newDisney: newDisneys,
					original: originals,
					trending: trending,
				})
			);
		});

		// Unsubscribe when the component unmounts
		return () => unsubscribe();
	}, [userName, dispatch]);

	return (
		<Container>
			<ImgSlider />
			<Viewers />
			<Recommends />
			<NewDisney />
			<Originals />
			<Trending />
		</Container>
	);
};

const Container = styled.main`
	position: relative;
	min-height: calc(100vh - 250px);
	overflow: hidden;
	display: block;
	top: 72px;
	padding: 0 calc(3.5vw + 5px);

	&:after {
		background: url("/images/home-background.png") center center / cover
			no-repeat fixed;
		content: "";
		position: absolute;
		inset: 0px;
		opacity: 1;
		z-index: -1;
	}
`;

export default Home;
