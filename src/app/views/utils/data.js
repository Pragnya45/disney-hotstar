const releases = [
  {
    id: "1",
    title: "The Hanuman of Legend",
    img: "/assets/images/hanuman.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/hanuman-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/hovercard-hanuman.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2024",
        seasons: "3",
        totalLanguage: "7",
        ua: "7+",
        description:
          "Setting his mighty foot on Lanka, Hanuman  unleashes himself against Ravan. Watch the  legendary hero and the demon king go head to  head in this ultimate war.",
      },
    ],
  },
  {
    id: "2",
    title: "Echo",
    img: "/assets/images/echo-2.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/echo-title.webp",
        language: "English",
        coverpic: "/assets/images/echo.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2024",
        seasons: "1",
        totalLanguage: "4",
        ua: "16+",
        description:
          "Pursued by Fisk’s criminal empire, Maya journeys home where she confronts her own family and legacy.",
      },
    ],
  },
  {
    id: "3",
    title: "Periloor premium league",
    img: "/assets/images/telugu-2.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/telugu-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/telugu.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2024",
        seasons: "1",
        totalLanguage: "7",
        ua: "13+",
        description:
          "Following her childhood crush, Malavika comes to the Perilloor village. Much to her dismay, the kooky natives force her to fight in the panchayat elections.",
      },
    ],
  },
  {
    id: "4",
    title: "The Hanuman of Legend",
    img: "/assets/images/Luke.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/luke-title.webp",
        language: "English",
        coverpic: "/assets/images/luke-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2024",
        seasons: "1",
        totalLanguage: "1",
        ua: "13+",
        description:
          "Luke Nguyen circumnavigates south India, discovering the sounds, colours & cuisines of the region. He meets local chefs, who introduce him to Indian cuisine.",
      },
    ],
  },
  {
    id: "5",
    title: "NEVER SAY NEVER",
    img: "/assets/images/never.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/never-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/never-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2021",
        seasons: "1",
        totalLanguage: "4",
        ua: "13+",
        description:
          "Travel writer Jeff Jenkins criss-crosses the globe in search of unique ways to push beyond his comfort zone.",
      },
    ],
  },
  {
    id: "6",
    title: "The Mission",
    img: "/assets/images/misson.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/mission-title.webp",
        language: "English",
        coverpic: "/assets/images/mission-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2023",
        seasons: "1",
        totalLanguage: "4",
        ua: "16+",
        description:
          "John Chau, an American missionary is killed as he attempts to contact an Indigenous group, living in complete isolation, off the coast of India.",
      },
    ],
  },
  {
    id: "7",
    title: "Dance+",
    img: "/assets/images/dance+.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/dance-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/dance-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2024",
        seasons: "6",
        totalLanguage: "1",
        ua: "16+",
        description:
          "The hunt for India’s new dancing superstar is on! With high-end tech and innovative dance acts, emerging talents bring their A-game to bag the coveted title.",
      },
    ],
  },
  {
    id: "8",
    title: "Believe in Magic",
    img: "/assets/images/believe-in-magic-2.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/belive-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/believe-in-magic.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2024",
        seasons: "1",
        totalLanguage: "1",
        ua: "5+",
        description:
          "They’re in it to win it! Alongside host Sahil Khattar, emerging cricket stars share their breakout stories whilst embracing the notion - ‘Believing Is Magic’.",
      },
    ],
  },
  {
    id: "9",
    title: "The Freelancer",
    img: "/assets/images/freelancer.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/freelance-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/freelancer-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2023",
        seasons: "1",
        totalLanguage: "7",
        ua: "16+",
        description:
          "A single misplaced word could mean death, and a new bride finds herself in such a situation in a conflict-ridden land. Who will save her?",
      },
    ],
  },
  {
    id: "10",
    title: "12th Fail",
    img: "/assets/images/12thfail.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/12thFail-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/12thFail-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2024",
        seasons: "1",
        totalLanguage: "1",
        ua: "5+",
        description:
          "Every fight begins with a failure! Braving against the odds, Manoj Kumar Sharma puts it all on the line to crack the nation’s much sought-after exam: UPSC.",
      },
    ],
  },
  {
    id: "11",
    title: "Indian Cricket Show",
    img: "/assets/images/indian-cricket.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/indian-cricket-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/indian-cricket-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2023",
        seasons: "2",
        totalLanguage: "2",
        ua: "7+",
        description:
          "Along with Gaurav Kapur, legends Yuvraj Singh and Gautam Gambhir weigh in on Team India’s chances in the upcoming T20 World Cup. Join in the engaging debate!",
      },
    ],
  },
  {
    id: "12",
    title: "Parking",
    img: "/assets/images/parking.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/parking-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/parking-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2023",
        seasons: "1",
        totalLanguage: "5",
        ua: "16+",
        description:
          "A clash over a shared space transforms two men from diverse backgrounds into aggressors. Will ego triumph, or can shared intentions lead to resolution?",
      },
    ],
  },
  {
    id: "13",
    title: "The Great North",
    img: "/assets/images/greatNorth.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/greate-north-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/great-north-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2024",
        seasons: "4",
        totalLanguage: "1",
        ua: "13+",
        description:
          "SHOW ON BREAK. Follow the Alaskan adventures of the Tobin family, a single dad Beef tries to keep his kids close.",
      },
    ],
  },
  {
    id: "14",
    title: "Falimy",
    img: "/assets/images/falimy.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/falimy-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/falimy-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2023",
        seasons: "1",
        totalLanguage: "5",
        ua: "13+",
        description:
          "To fulfill the elderly patriarch's wish, a dissonant family embarks on a trip to Varanasi. Will this journey mend their bonds or deepen the fault lines?",
      },
    ],
  },
];
const cardData = [
  {
    id: "1",
    title: "The Hanuman of Legend",
    img: "/assets/images/hanuman.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/hanuman-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/hovercard-hanuman.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2024",
        seasons: "3",
        totalLanguage: "7",
        ua: "7+",
        description:
          "Setting his mighty foot on Lanka, Hanuman  unleashes himself against Ravan. Watch the  legendary hero and the demon king go head to  head in this ultimate war.",
      },
    ],
  },
  {
    id: "2",
    title: "Echo",
    img: "/assets/images/echo-2.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/echo-title.webp",
        language: "English",
        coverpic: "/assets/images/echo.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2024",
        seasons: "1",
        totalLanguage: "4",
        ua: "16+",
        description:
          "Pursued by Fisk’s criminal empire, Maya journeys home where she confronts her own family and legacy.",
      },
    ],
  },
  {
    id: "3",
    title: "Periloor premium league",
    img: "/assets/images/telugu-2.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/telugu-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/telugu.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2024",
        seasons: "1",
        totalLanguage: "7",
        ua: "13+",
        description:
          "Following her childhood crush, Malavika comes to the Perilloor village. Much to her dismay, the kooky natives force her to fight in the panchayat elections.",
      },
    ],
  },
  {
    id: "4",
    title: "The Hanuman of Legend",
    img: "/assets/images/Luke.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/luke-title.webp",
        language: "English",
        coverpic: "/assets/images/luke-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2024",
        seasons: "1",
        totalLanguage: "1",
        ua: "13+",
        description:
          "Luke Nguyen circumnavigates south India, discovering the sounds, colours & cuisines of the region. He meets local chefs, who introduce him to Indian cuisine.",
      },
    ],
  },
  {
    id: "5",
    title: "NEVER SAY NEVER",
    img: "/assets/images/never.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/never-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/never-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2021",
        seasons: "1",
        totalLanguage: "4",
        ua: "13+",
        description:
          "Travel writer Jeff Jenkins criss-crosses the globe in search of unique ways to push beyond his comfort zone.",
      },
    ],
  },
  {
    id: "6",
    title: "The Mission",
    img: "/assets/images/misson.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/mission-title.webp",
        language: "English",
        coverpic: "/assets/images/mission-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2023",
        seasons: "1",
        totalLanguage: "4",
        ua: "16+",
        description:
          "John Chau, an American missionary is killed as he attempts to contact an Indigenous group, living in complete isolation, off the coast of India.",
      },
    ],
  },
  {
    id: "7",
    title: "Dance+",
    img: "/assets/images/dance+.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/dance-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/dance-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2024",
        seasons: "6",
        totalLanguage: "1",
        ua: "16+",
        description:
          "The hunt for India’s new dancing superstar is on! With high-end tech and innovative dance acts, emerging talents bring their A-game to bag the coveted title.",
      },
    ],
  },
  {
    id: "8",
    title: "Believe in Magic",
    img: "/assets/images/believe-in-magic-2.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/belive-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/believe-in-magic.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2024",
        seasons: "1",
        totalLanguage: "1",
        ua: "5+",
        description:
          "They’re in it to win it! Alongside host Sahil Khattar, emerging cricket stars share their breakout stories whilst embracing the notion - ‘Believing Is Magic’.",
      },
    ],
  },
  {
    id: "9",
    title: "The Freelancer",
    img: "/assets/images/freelancer.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/freelance-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/freelancer-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2023",
        seasons: "1",
        totalLanguage: "7",
        ua: "16+",
        description:
          "A single misplaced word could mean death, and a new bride finds herself in such a situation in a conflict-ridden land. Who will save her?",
      },
    ],
  },
  {
    id: "10",
    title: "12th Fail",
    img: "/assets/images/12thfail.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/12thFail-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/12thFail-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2024",
        seasons: "1",
        totalLanguage: "1",
        ua: "5+",
        description:
          "Every fight begins with a failure! Braving against the odds, Manoj Kumar Sharma puts it all on the line to crack the nation’s much sought-after exam: UPSC.",
      },
    ],
  },
  {
    id: "11",
    title: "Indian Cricket Show",
    img: "/assets/images/indian-cricket.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/indian-cricket-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/indian-cricket-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2023",
        seasons: "2",
        totalLanguage: "2",
        ua: "7+",
        description:
          "Along with Gaurav Kapur, legends Yuvraj Singh and Gautam Gambhir weigh in on Team India’s chances in the upcoming T20 World Cup. Join in the engaging debate!",
      },
    ],
  },
  {
    id: "12",
    title: "Parking",
    img: "/assets/images/parking.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/parking-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/parking-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2023",
        seasons: "1",
        totalLanguage: "5",
        ua: "16+",
        description:
          "A clash over a shared space transforms two men from diverse backgrounds into aggressors. Will ego triumph, or can shared intentions lead to resolution?",
      },
    ],
  },
  {
    id: "13",
    title: "The Great North",
    img: "/assets/images/greatNorth.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/greate-north-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/great-north-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2024",
        seasons: "4",
        totalLanguage: "1",
        ua: "13+",
        description:
          "SHOW ON BREAK. Follow the Alaskan adventures of the Tobin family, a single dad Beef tries to keep his kids close.",
      },
    ],
  },
  {
    id: "14",
    title: "Falimy",
    img: "/assets/images/falimy.jpg",
    hovercardData: [
      {
        titleImg: "/assets/images/falimy-title.webp",
        language: "Hindi",
        coverpic: "/assets/images/falimy-2.webp",
        video: "/assets/videos/Blender.mp4",
        year: "2023",
        seasons: "1",
        totalLanguage: "5",
        ua: "13+",
        description:
          "To fulfill the elderly patriarch's wish, a dissonant family embarks on a trip to Varanasi. Will this journey mend their bonds or deepen the fault lines?",
      },
    ],
  },
];
export { releases, cardData };
