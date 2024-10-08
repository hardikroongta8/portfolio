import image from "../assets/images/image.jpg"

export type Link = {
  title: string;
  url: string;
};

export type ProjectInfo = {
  id: number;
  path: string;
  title: string;
  summary: string,
  description: string;
  imageUrl: string;
  githubLinks: Array<Link>;
  appLinks: Array<Link>;
  otherLinks: Array<Link>;
};

export const projects: Array<ProjectInfo> = [
  {
    id: 1,
    path: "collegecupid",
    title: "CollegeCupid IITG",
    summary: "A fully encrypted matchmaking app for campus students.",
    description: "A completely encrypted matchmaking app designed for campus students.\nIt employs the Diffie-Hellman Key Exchange algorithm to maintain privacy.\nUsers can confidentially declare their crushes, and on Valentine's Day, the server identifies the matches.\nThese declarations are encrypted, and a matches are found by detecting duplicate shared secrets.",
    imageUrl: image,
    githubLinks: [
      {
        title: "Server Repo",
        url: "https://github.com/swciitg/college_cupid_backend",
      },
      {
        title: "App Repo",
        url: "https://github.com/swciitg/college_cupid",
      },
    ],
    appLinks: [
      {
        title: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.swciitg.collegecupid",
      },
      {
        title: "App Store",
        url: "https://apps.apple.com/in/app/collegecupid-iitg/id6475586355",
      },
    ],
    otherLinks: [
      {
        title: "Medium Blog",
        url: "https://medium.com/@swciitghy/introducing-collegecupid-find-your-valentine-on-campus-685bcaa6fc92",
      },
    ],
  },
  {
    id: 2,
    path: "onestop",
    title: "OneStop IITG",
    summary: "A student-centric mobile app, assisting in daily challenges and enhancing essential utilities at IIT Guwahati.",
    description:
      "A student-centric mobile app, assisting in daily challenges and enhancing essential utilities at IIT Guwahati.",
    imageUrl: image,
    githubLinks: [
      {
        title: "Server Repo",
        url: "https://github.com/swciitg/one-stop-2021",
      },
      {
        title: "App Repo",
        url: "https://github.com/swciitg/onestop_flutter",
      },
    ],
    appLinks: [
      {
        title: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.swciitg.onestop2",
      },
      {
        title: "App Store",
        url: "https://apps.apple.com/in/app/onestop-iitg/id1642792642",
      },
    ],
    otherLinks: [],
  },
  {
    id: 3,
    title: "GateLog IITG",
    path: "gatelog",
    summary: "A device that logs student entries and exits at campus gates by scanning QR present on the mobile app.",
    description:
      "This is an Arduino based device, which scans the QR from the student's phone, and logs their entries and exits at campus gates.\nA network request is made by the device, containing the Student's ID and other relevant information.\nThe App on the student's phone connects to the server using a WebSocket protocol, for receiving scan results.",
    imageUrl: image,
    githubLinks: [
      {
        title: "Server Repo",
        url: "https://github.com/swciitg/khokha_entry_backend",
      },
      {
        title: "App Repo",
        url: "https://github.com/swciitg/khokha_entry_onestop",
      },
    ],
    appLinks: [
      {
        title: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.swciitg.onestop2",
      },
      {
        title: "App Store",
        url: "https://apps.apple.com/in/app/onestop-iitg/id1642792642",
      },
    ],
    otherLinks: [
      {
        title: "Demo Video",
        url: "",
      },
    ],
  },
  {
    id: 4,
    title: "MyChats",
    path: "mychats",
    summary: "A WhatsApp like realtime chatting application.",
    description:
      "It's a WhatsApp-like chat application that supports real-time communication using WebSockets when both users are online.\nMessages are stored locally on the device, and if the recipient is offline, they are temporarily stored in a database. Once the recipient receives the message, it is deleted from the database.",
    imageUrl: image,
    githubLinks: [
      {
        title: "Server Repo",
        url: "https://github.com/hardikroongta8/mychats_backend",
      },
      {
        title: "App Repo",
        url: "https://github.com/hardikroongta8/mychats_client",
      },
    ],
    appLinks: [],
    otherLinks: [
      {
        title: "Screenshots",
        url: "https://drive.google.com/drive/folders/1tAkyJa958yoLpkKETplrXkoLEWrGRT9L?usp=sharing",
      },
    ],
  },
  {
    id: 5,
    title: "HotShot",
    path: "hotshot",
    summary: "A food delivery/takeout app for IITG Campus students.",
    description:
      "A mobile app that allows students to order food for takeout from campus eatries (e.g. Canteens and Food Court).",
    imageUrl: image,
    githubLinks: [
      {
        title: "App & Server Repo",
        url: "https://github.com/ptayal76/hotshot",
      },
    ],
    appLinks: [
      {
        title: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.swciitg.onestop2",
      },
      {
        title: "App Store",
        url: "https://apps.apple.com/in/app/onestop-iitg/id1642792642",
      },
    ],
    otherLinks: [],
  }
];
