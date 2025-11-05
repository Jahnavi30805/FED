import {link} from "react-router-dom"
const HomePage = () => {
return (
<div>
    <nav>
        <div>
            <img src="klef.jpeg" alt="klef"/>
            <h1> Product Management System</h1>
        </div>
        <div>
            <link to="SignIn">SignIn</link>
        </div>
    </nav>
</div>
)
}

export default HomePage;
