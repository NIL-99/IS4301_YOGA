import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Header from "../../components/Header/Header.js";

import DataLockIcon from "../../icons/datalock.png";
import UserProfileIcon from "../../icons/user_profile_pic.png";
import AmazonIcon from "../../icons/amazon.png";
import TaobaoIcon from "../../icons/taobao.png";
import GrabIcon from "../../icons/grab.png";
import TwitterIcon from "../../icons/twitter.png";
import DBSIcon from "../../icons/dbs.png";
import VisaIcon from "../../icons/visa.png";
import TigerBrokerIcon from "../../icons/tiger_broker.png";
import GoogleIcon from "../../icons/google.png";
import AppleIcon from "../../icons/apple.png";
import SingPassIcon from "../../icons/singpass.png";
import AdditionIcon from "../../icons/addition.png";

import EmailDataTable from "../../icons/tables/email_data.png";
import LocationDataTable from "../../icons/tables/location_data.png";
import LoanChanceTable from "../../icons/tables/loan_chance.png";
import MaximumLoanAmountTable from "../../icons/tables/maximum_loan_amount.png";
import GoogleAccountTable from "../../icons/tables/google_account_data.png";
import AppleAccountTable from "../../icons/tables/apple_account_data.png";
import CreditScoreTable from "../../icons/tables/credit_score.png";
import InterestRateTable from "../../icons/tables/interest_rate.png";

export const user = {
	name: "Jon",
};

function Home() {
	const [user, loading, error] = useAuthState(auth);
	const [name, setName] = useState("");
	const navigate = useNavigate();

	const fetchUserName = async () => {
		try {
			const q = query(collection(db, "users"), where("uid", "==", user?.uid));
			const doc = await getDocs(q);
			const data = doc.docs[0].data();

			setName(data.name);
		} catch (err) {
			console.error(err);
			alert("An error occured while fetching user data");
		}
	};

	useEffect(() => {
		if (loading) return;
		if (!user) return navigate("/");

		fetchUserName();
	}, [user, loading]);

	return (
		<>
			<Header />
			<Container className="container">
				<Container className="inner_container">
					<img
						className="brand_image"
						src={DataLockIcon}
						alt="Brand Logo"
						height={100}
						width={100}
					/>
					<h1 className="title">Your Dashboard</h1>
					<div>
						<img
							className="profile_image"
							src={UserProfileIcon}
							alt="User Profile"
							height={80}
							width={80}
						/>
						<p style={{ textAlign: "center" }}>Welcome {name} !</p>
					</div>
				</Container>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						border: "1px solid black",
						borderRadius: "10%",
						display: "flex",
						textAlign: "center",
					}}
				>
					<Card.Body>
						<Card.Title>This Month's Credit</Card.Title>
						<Card.Text style={{ fontSize: "2rem" }}>SGD: 5.31</Card.Text>
						<Card.Text>
							<a href="/credit">See where your Credit is coming from</a>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="card" style={{ width: "30%" }}>
					<Card.Body>
						<div>
							<Card.Title style={{ textDecoration: "underline" }}>
								Signed in Services:
							</Card.Title>
							<Card.Text>
								<Button
									href="/DBS"
									style={{ backgroundColor: "white", border: "none" }}
								>
									<img
										src={DBSIcon}
										alt="DBS"
										height={50}
										width={50}
										style={{ margin: "0.5rem" }}
									/>
								</Button>
								<Button
									href="/Amazon"
									style={{ backgroundColor: "white", border: "none" }}
								>
									<img
										src={AmazonIcon}
										alt="Amazon"
										height={50}
										width={50}
										style={{ margin: "0.5rem" }}
									/>
								</Button>
								<Button
									href="/Taobao"
									style={{ backgroundColor: "white", border: "none" }}
								>
									<img
										src={TaobaoIcon}
										alt="Taobao"
										height={50}
										width={50}
										style={{ margin: "0.5rem" }}
									/>
								</Button>
								<Button
									href="/Grab"
									style={{ backgroundColor: "white", border: "none" }}
								>
									<img
										src={GrabIcon}
										alt="Grab"
										height={50}
										width={50}
										style={{ margin: "0.5rem" }}
									/>
								</Button>
								<Button
									href="/Twitter"
									style={{ backgroundColor: "white", border: "none" }}
								>
									<img
										src={TwitterIcon}
										alt="Twitter"
										height={50}
										width={50}
										style={{ margin: "0.5rem" }}
									/>
								</Button>
								<Button
									href="/addServices"
									style={{ backgroundColor: "white", border: "none" }}
								>
									<img
										src={AdditionIcon}
										alt="More Services"
										height={50}
										width={50}
										style={{ margin: "0.5rem" }}
									/>
								</Button>
							</Card.Text>
						</div>
					</Card.Body>
				</Card>
			</Container>
			<Container className="container">
				<Card className="card" style={{ width: "30%" }}>
					<Card.Body>
						<div>
							<Card.Title style={{ textDecoration: "underline" }}>
								Financial Services:
							</Card.Title>
							<Card.Text>
								<Button
									href="/DBS"
									style={{ backgroundColor: "white", border: "none" }}
								>
									<img
										src={DBSIcon}
										alt="DBS"
										height={50}
										width={50}
										style={{ margin: "0.5rem" }}
									/>
								</Button>
								<Button
									href="/Visa"
									style={{ backgroundColor: "white", border: "none" }}
								>
									<img
										src={VisaIcon}
										alt="Visa"
										height={50}
										width={50}
										style={{ margin: "0.5rem" }}
									/>
								</Button>
								<Button
									href="/TigerBroker"
									style={{ backgroundColor: "white", border: "none" }}
								>
									<img
										src={TigerBrokerIcon}
										alt="Tiger Broker"
										height={50}
										width={50}
										style={{ margin: "0.5rem" }}
									/>
								</Button>
								<Button
									href="/addServices"
									style={{ backgroundColor: "white", border: "none" }}
								>
									<img
										src={AdditionIcon}
										alt="More Services"
										height={50}
										width={50}
										style={{ margin: "0.5rem" }}
									/>
								</Button>
							</Card.Text>
						</div>
					</Card.Body>
				</Card>
				<Card className="card" style={{ width: "30%", justifyContent: "left" }}>
					<Card.Body>
						<div>
							<Card.Title style={{ textDecoration: "underline" }}>
								Connected Accounts:
							</Card.Title>
							<Card.Text>
								<Button
									href="/Google"
									style={{ backgroundColor: "white", border: "none" }}
								>
									<img
										src={GoogleIcon}
										alt="Google"
										height={50}
										width={50}
										style={{ margin: "0.5rem" }}
									/>
								</Button>
								<Button
									href="/Apple"
									style={{ backgroundColor: "white", border: "none" }}
								>
									<img
										src={AppleIcon}
										alt="Apple"
										height={50}
										width={50}
										style={{ margin: "0.5rem" }}
									/>
								</Button>
								<Button
									href="/SingPass"
									style={{ backgroundColor: "white", border: "none" }}
								>
									<img
										src={SingPassIcon}
										alt="SingPass"
										height={50}
										width={50}
										style={{ margin: "0.5rem" }}
									/>
								</Button>
								<Button
									href="/addServices"
									style={{ backgroundColor: "white", border: "none" }}
								>
									<img
										src={AdditionIcon}
										alt="More Services"
										height={50}
										width={50}
										style={{ margin: "0.5rem" }}
									/>
								</Button>
							</Card.Text>
						</div>
					</Card.Body>
				</Card>
			</Container>
			<Container className="container">
				<Card
					className="card"
					style={{
						display: "flex",
						width: "80%",
						boxBorder: "none",
					}}
				>
					<div>
						<img
							src={EmailDataTable}
							alt="Email Data"
							height={300}
							width={225}
							style={{ margin: "0.5rem" }}
						/>
						<img
							src={LocationDataTable}
							alt="Location Data"
							height={300}
							width={225}
							style={{ margin: "0.5rem" }}
						/>
						<img
							src={LoanChanceTable}
							alt="Loan Chance"
							height={300}
							width={225}
							style={{ margin: "0.5rem" }}
						/>
						<img
							src={MaximumLoanAmountTable}
							alt="Maximum Loan Amount"
							height={300}
							width={225}
							style={{ margin: "0.5rem" }}
						/>
					</div>
					<div>
						<img
							src={GoogleAccountTable}
							alt="Google Account Data"
							height={300}
							width={225}
							style={{ margin: "0.5rem" }}
						/>
						<img
							src={AppleAccountTable}
							alt="Apple Account Data"
							height={300}
							width={225}
							style={{ margin: "0.5rem" }}
						/>
						<img
							src={CreditScoreTable}
							alt="Credit Score Data"
							height={300}
							width={225}
							style={{ margin: "0.5rem" }}
						/>
						<img
							src={InterestRateTable}
							alt="Interest Rate Data"
							height={300}
							width={225}
							style={{ margin: "0.5rem" }}
						/>
					</div>
				</Card>
			</Container>
		</>
	);
}

export default Home;
