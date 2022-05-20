import React from "react";
import UserCard from "./UserCard";

const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <UserCard key={profile.id} {...profile}/>)}
	</div>
);

export default CardList;