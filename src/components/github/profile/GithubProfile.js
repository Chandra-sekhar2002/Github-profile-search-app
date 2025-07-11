import React from "react";
import GithubProfileDetails from "./GithubProfileDetails";
import GithubProfileCard from "./GithubProfileCard";
class GithubProfile extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-3">
                        <GithubProfileCard githubProfile={this.props.githubProfile}/>
                    </div>
                    <div className="col-md-9">
                        <GithubProfileDetails githubProfile={this.props.githubProfile}/>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default GithubProfile;