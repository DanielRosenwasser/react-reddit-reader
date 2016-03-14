import * as jQuery from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { ApiResponse } from "./reddit";
import { SubmissionComp } from "./components/RedditSubmission"

function displaySubreddit(subreddit: string) {
    jQuery.ajax({ url: `https://www.reddit.com/r/${subreddit}.json` }).done((response: ApiResponse) => {
        let submissions = response.data.children;
        
        // Only take submissions that link directly to png and jpg files. 
        submissions = submissions.filter(({data}) => /(png|jpg)$/.test(data.url));
        
        // Create our list of components.
        let components = submissions
            .map((value, index) => <SubmissionComp key={index} elementPosition={index} {...value.data} />);
        
        ReactDOM.render(<div>{components}</div>, document.getElementById("content"));
    });
}

displaySubreddit("aww");
