export const navLinks = [
  {
    title: "Home",
    path: "/",
  },

  {
    title: "About",
    children: [
      { title: "Overview", path: "/about" },
      { title: "Chairman's Message", path: "/about#chairman-message" },
      { title: "Principal's Message", path: "/about#principal-message" },
      { title: "Campus", path: "/about#campus" },
      { title: "Recognition & Awards", path: "/about#awards" },
    ],
  },

  {
    title: "Admission",
    children: [
      { title: "Overview", path: "/admission" },
      { title: "Registration", path: "/Admission#registration" },
      { title: "Fee Structure", path: "/Admission#fee-structure" },
      { title: "Fee Payment", path: "/Admission#fee-payment" },
    ],
  },

  {
    title: "Academics",
    children: [
      { title: "Overview", path: "/academics" },
      { title: "Academic Structure", path: "/academics#academic-structure" },
      { title: "Subjects", path: "/subjects" },
      { title: "Teaching Methodology", path: "/academics#teaching-methodology" },
      { title: "Career Guidance", path: "/academics#career-guidance" },
    ],
  },

  {
    title: "Co-Curricular",
    children: [
      {title: "Overview", path:"/co-curricular"},
      { title: "Sports", path: "/co-curricular#sports" },
      { title: "Fine Arts", path: "/co-curricular#fine-arts" },
      { title: "Performing Arts", path: "/co-curricular#performing-arts" },
      { title: "Community Engagement", path: "/co-curricular#community-engagement" },
    ],
  },

  // {
  //   title: "Events",
  //   children: [
  //     { title: "Recent Events", path: "/recent-events" },
  //     { title: "Upcoming Events", path: "/upcoming-events" },
  //   ],
  // },

  {
    title: "Gallery",
    path: "/gallery",
  },

  {
    title: "Contact",
    path: "/contact",
  },
];