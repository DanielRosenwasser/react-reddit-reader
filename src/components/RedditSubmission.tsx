import * as React from "react";
import { Submission } from "../reddit"

export interface SubmissionProps extends Submission {
    elementPosition: number;
}

let imageStyle = {
    maxWidth: "600px",
    maxHeight: "600px",
};

export const SubmissionComp = (submission: SubmissionProps) =>
    <div>
        {submission.elementPosition ? <br /> : ""}
        
        <span className="title">
            <span>{submission.elementPosition + 1}. </span>
            <a href={submission.url}>{submission.title}</a>
        </span>
        <span> ({submission.domain})</span>

        <div>Submitted by {submission.author}.</div>
        <br />
        <img src={submission.url} style={imageStyle} />
    </div>;
