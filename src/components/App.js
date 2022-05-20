import React from "react";
import UserForm from "./UserForm";
import CardList from "./CardList";

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div>
    	    <div className="header">{this.props.title}</div>
            <UserForm onSubmit={this.addNewProfile} />
            <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}

export default App;