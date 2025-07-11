import React from "react";
import './App.css';
import GithubProfileSearch from "./components/GithubProfileSearch";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark navbar-expand bg-primary">
                    <a href="/" className="navbar-brand">Contact App With React</a>
                </nav>
                <GithubProfileSearch />

                <div style={{marginBottom:'200px'}}/>
            </React.Fragment>
        )
    }
}
export default App;
