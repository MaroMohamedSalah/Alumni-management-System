import { useState } from "react";
import Backbtn from "../components/Backbtn";
import ProfileAboutSec from "../components/ProfileAboutSec";
import ProfileCV from "../components/ProfileCV";
import ProfileContactInfoSec from "../components/ProfileContactInfoSec";
import ProfileEditBtn from "../components/ProfileEditBtn";
import ProfileEdu from "../components/ProfileEdu";
import ProfileExperience from "../components/ProfileExperiece";
import ProfileImg from "../components/ProfileImg";
import ProfileJobTitle from "../components/ProfileJobTitle";
import ProfileName from "../components/ProfileName";
import ProfileSkills from "../components/ProfileSkills";
import ProfileURLsSec from "../components/ProfileURLsSec";
import ProfileUsername from "../components/ProfileUsername";
import "./Profile.css";
const HRprofile = () => {
	return (
		<div className="HRprofile profile">
			<div className="container">
				<Backbtn
					btnColor={"var(--Alumni-color)"}
					btnSize={"19px"}
					btnTop={"10px"}
					btnColorMobile={"var(--Alumni-color)"}
					btnSizeMobile={"19px"}
					btnTopMobile={"10px"}
				/>

				<div className="row mt-5">
					<div className="col-12 col-md-2">
						<ProfileImg actor={"HR"} />
					</div>
					<div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center align-items-md-start">
						<div className="order-md-1 order-2 w-100">
							<ProfileUsername />
						</div>
						<div className="order-md-2 order-1">
							<ProfileName />
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-12 col-md-6">
						<ProfileURLsSec />
					</div>

					<div className="col-12 col-md-6">
						<ProfileCV />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<ProfileAboutSec />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<ProfileContactInfoSec />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<ProfileSkills />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<ProfileExperience />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HRprofile;
