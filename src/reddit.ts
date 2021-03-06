export interface ApiResponse {
    data: Listing
}

export interface Listing {
    children: { data: Submission }[];
}

export interface Submission {
    author: string;
    created_utc: string;
    domain: string;
    title: string;
    subreddit: string;
    url: string;
}