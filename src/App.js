// App.js
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Tobi Yusuf",
        bio: "Software Developer at GoMyCode.",
        imgSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPa99MCk4QM3Nb5Zlpjx21klJq1r_CMr7CNg&s",
        profession: "Developer",
      },
      shows: false,
      mountedTime: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;

    const { person, shows, mountedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {shows && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt="Profile" />
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since mount: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
