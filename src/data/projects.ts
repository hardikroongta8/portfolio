export type GithubLinks = {
    backendLink: string,
    frontendLink: string,
}
export type AppLinks = {
    playstoreLink: string,
    appstoreLink: string,
}
export type OtherLink = {
    title: string,
    url: string,
}

export type ProjectInfo = {
    id: number,
    path: string,
    title: string,
    description: string,
    imageUrl: string,
    githubLinks: GithubLinks,
    appLinks: AppLinks,
    otherLinks: Array<OtherLink>,
}

export const projects: Array<ProjectInfo>= [
    {
        id: 1,
        path: "collegecupid",
        title: "CollegeCupid IITG",
        description: "A fully encrypted matchmaking app for campus students.",
        imageUrl: "",
        githubLinks: {
            "backendLink": "https://github.com/swciitg/college_cupid_backend",
            "frontendLink": "https://github.com/swciitg/college_cupid",
        },
        appLinks: {
            "playstoreLink": "https://play.google.com/store/apps/details?id=com.swciitg.collegecupid",
            "appstoreLink": "https://apps.apple.com/in/app/collegecupid-iitg/id6475586355",
        },
        otherLinks: [{
            "title": "Medium Blog",
            "url": "https://medium.com/@swciitghy/introducing-collegecupid-find-your-valentine-on-campus-685bcaa6fc92"
        }],
    },
    {
        id: 2,
        path: "onestop",
        title: "OneStop IITG",
        description: "A student-centric mobile app, assisting in daily challenges and enhancing essential utilities at IIT Guwahati.",
        imageUrl: "",
        githubLinks: {
            "backendLink": "https://github.com/swciitg/one-stop-2021",
            "frontendLink": "https://github.com/swciitg/onestop_flutter",
        },
        appLinks: {
            "playstoreLink": "https://play.google.com/store/apps/details?id=com.swciitg.onestop2",
            "appstoreLink": "https://apps.apple.com/in/app/onestop-iitg/id1642792642",
        },
        otherLinks: [],
    },
    {
        id: 3,
        title: "GateLog",
        path: "gatelog",
        description: "A device that logs student entries and exits at campus gates by scanning QR present on the mobile app.",
        imageUrl: "",
        githubLinks: {
            "backendLink": "https://github.com/swciitg/khokha_entry_backend",
            "frontendLink": "https://github.com/swciitg/khokha_entry_onestop",
        },
        appLinks: {
            "playstoreLink": "https://play.google.com/store/apps/details?id=com.swciitg.onestop2",
            "appstoreLink": "https://apps.apple.com/in/app/onestop-iitg/id1642792642",
        },
        otherLinks: [{
            "title": "Demo",
            "url": "",
        }],
    }
];