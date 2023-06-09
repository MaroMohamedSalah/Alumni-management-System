import { useState } from "react";
import icon2 from "../imgs/sign up  2.svg";
const LastnameInput = ({ lastNameError }) => {
	return (
		<div className="lname mb-3">
			<div className="input-group p-2">
				<span className="input-group-text" id="basic-addon1">
					<img src={icon2} alt="" />
				</span>
				<input
					name="lname"
					id="lname"
					type="text"
					className="form-control"
					placeholder="Last Name"
					aria-label="Last Name"
					aria-describedby="basic-addon1"
					onChange={(e) => {
						// Trim the value
						let value = e.target.value.trim();

						// Capitalize the first letter
						value = value.charAt(0).toUpperCase() + value.slice(1);

						// Update the input value
						e.target.value = value;
					}}
				/>
			</div>
			<h5 className="error">{lastNameError}</h5>
		</div>
	);
};

export default LastnameInput;
