import  React from "react";
import  User  from "./containers/user";
import  Main  from "./containers/main";
import {Title} from "./components/title";


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Title />
                <Main />
                <User />
            </div>
        );
    }
}

export default App;
