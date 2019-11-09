import React from "react";
import { Link, Route } from "react-router-dom";

function About() {
    return (
        <div>
            <h1>About Don't Match the Socks</h1>
            <p>
                As the the development of this game is only beginning to be developed at the time of this writing, all of this is subject to change.
                That said, the basic idea for the game is that if you are someone who wears pattered socks, you certainly wouldn't want to ever wear a matching pair
                (unless you're a psychopath). But let's take things a step further. Lets try to have 14 unique socks, 2 for each day of the week, never once wearing
                a single sock more than once.
      </p>
            <p>
                You can find more information about the app, including all the source code, on our <Link to="https://github.com/LandGod/Dont-Match-the-Socks">GitHub page</Link>!
      </p>
        </div>
    );
}

export default About;
