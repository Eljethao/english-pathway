import type { PlacementQuestion } from "@/lib/types";

export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  /* ---------- B1 ---------- */
  {
    id: "p1",
    area: "grammar",
    level: "B1",
    prompt: "Choose the correct option: \"I ___ in this city since 2019.\"",
    options: ["live", "lived", "have lived", "am living"],
    answer: 2,
  },
  {
    id: "p2",
    area: "vocabulary",
    level: "B1",
    prompt: "Choose the best word: \"Could you ___ me your pen for a minute? I've forgotten mine.\"",
    options: ["borrow", "lend", "take", "keep"],
    answer: 1,
  },
  {
    id: "p3",
    area: "grammar",
    level: "B1",
    prompt: "Choose the correct option: \"If it ___ tomorrow, we'll stay at home and watch a film.\"",
    options: ["rains", "will rain", "rained", "would rain"],
    answer: 0,
  },
  {
    id: "p4",
    area: "listening",
    level: "B1",
    prompt: "Listen to the conversation. How many people is the table for?",
    audio:
      "Woman: Hi, I'd like to book a table for Saturday evening, please.\nMan: Of course. For how many people?\nWoman: There'll be four of us, but my sister might bring her husband, so let's say five.\nMan: Five people at seven thirty, then. Is that all right?\nWoman: Perfect. Thank you very much.",
    options: ["Four", "Five", "Six", "Seven"],
    answer: 1,
  },
  {
    id: "p5",
    area: "reading",
    level: "B1",
    prompt: "Read the notice. What can people do at the library on Monday?",
    passage:
      "Greenfield Library will be closed on Monday 3rd June for staff training. During this time, you can still return books using the box outside the main entrance. The online catalogue will be available as usual, and the library will reopen at 9 a.m. on Tuesday.",
    options: [
      "Borrow new books",
      "Use the computers inside",
      "Join a training session",
      "Return books",
    ],
    answer: 3,
  },
  {
    id: "p6",
    area: "vocabulary",
    level: "B1",
    prompt: "Choose the best word: \"The train was ___ by two hours because of the heavy snow.\"",
    options: ["delayed", "cancelled", "missed", "booked"],
    answer: 0,
  },

  /* ---------- B2 ---------- */
  {
    id: "p7",
    area: "grammar",
    level: "B2",
    prompt: "Choose the correct option: \"The streets are all wet. It ___ last night.\"",
    options: ["must rain", "can have rained", "must have rained", "would rain"],
    answer: 2,
  },
  {
    id: "p8",
    area: "vocabulary",
    level: "B2",
    prompt:
      "Choose the best option: \"The manager was ill, so we had to ___ the meeting until next week.\"",
    options: ["put off", "put up", "put out", "put through"],
    answer: 0,
  },
  {
    id: "p9",
    area: "listening",
    level: "B2",
    prompt: "Listen to the announcement. What has changed about the train to Bristol?",
    audio:
      "Good afternoon, passengers. This is an announcement for those travelling on the four fifteen service to Bristol. Due to engineering work on the line, this train will now depart from platform nine instead of platform six. It is still expected to leave on time. Please also note that the buffet car will not be available today, although a trolley service will operate between Reading and Swindon. We apologise for any inconvenience.",
    cast: { narrator: "female" },
    options: ["Its departure time", "Its destination", "Its ticket prices", "Its platform"],
    answer: 3,
  },
  {
    id: "p10",
    area: "grammar",
    level: "B2",
    prompt:
      "Choose the correct option: \"The new bridge, ___ was opened last year, has reduced traffic in the town centre.\"",
    options: ["that", "which", "what", "who"],
    answer: 1,
  },
  {
    id: "p11",
    area: "reading",
    level: "B2",
    prompt: "According to the passage, what was a disadvantage of working from home?",
    passage:
      "Many people assume that working from home makes employees less productive. However, a study at one large company found the opposite: staff who worked from home completed more work and took fewer sick days. The researchers did note one drawback. Remote workers were less likely to be promoted, possibly because managers noticed them less.",
    options: [
      "Employees completed fewer tasks.",
      "Employees took more sick days.",
      "Employees had fewer chances of promotion.",
      "Managers spent less time at the office.",
    ],
    answer: 2,
  },
  {
    id: "p12",
    area: "grammar",
    level: "B2",
    prompt: "Choose the correct option: \"I'd rather you ___ my phone without asking.\"",
    options: ["don't use", "won't use", "not to use", "didn't use"],
    answer: 3,
  },
  {
    id: "p13",
    area: "listening",
    level: "B2",
    prompt: "Listen to the conversation. Why hasn't Anna finished the report?",
    audio:
      "Tom: Anna, have you finished the report for Thursday's meeting?\nAnna: Almost. I just need the sales figures from Mark.\nTom: Didn't he send them yesterday?\nAnna: He did, but he sent last year's figures by mistake. He's promised to send the right ones this afternoon, so I should be able to finish it tonight.\nTom: Great. Let me know if you need any help with the charts.",
    options: [
      "The meeting has been moved to Thursday.",
      "Mark hasn't started his part yet.",
      "She is waiting for the correct figures.",
      "She lost last year's figures.",
    ],
    answer: 2,
  },

  /* ---------- C1 ---------- */
  {
    id: "p14",
    area: "vocabulary",
    level: "C1",
    prompt:
      "Choose the best word: \"The policy has been widely criticised, but its supporters argue that the benefits ___ the costs.\"",
    options: ["outweigh", "overtake", "outrun", "overcome"],
    answer: 0,
  },
  {
    id: "p15",
    area: "grammar",
    level: "C1",
    prompt: "Choose the correct option: \"Not only ___ the deadline, but they also went over budget.\"",
    options: ["they missed", "they did miss", "did they miss", "had missed they"],
    answer: 2,
  },
  {
    id: "p16",
    area: "reading",
    level: "C1",
    prompt: "What is the writer's attitude to the recent decision?",
    passage:
      "For decades, the town's planners treated the river as an inconvenience: something to be bridged, channelled and, where possible, hidden behind warehouses. The recent decision to open up the riverbank with footpaths and cafés has been hailed as visionary. Yet it might be more accurate to call it overdue, since residents had been asking for exactly this since the 1980s.",
    options: [
      "It is a mistake that ignores what residents want.",
      "It is the most original idea the planners have ever had.",
      "It may damage the river by attracting too many visitors.",
      "It is welcome but should have happened much earlier.",
    ],
    answer: 3,
  },
  {
    id: "p17",
    area: "grammar",
    level: "C1",
    prompt:
      "Choose the correct option: \"It was not until she moved abroad ___ she realised how much she missed her family.\"",
    options: ["when", "that", "since", "then"],
    answer: 1,
  },
  {
    id: "p18",
    area: "vocabulary",
    level: "C1",
    prompt:
      "Choose the best word: \"Her argument was so ___ that even her strongest critics found it hard to disagree.\"",
    options: ["compelling", "compulsory", "complacent", "complimentary"],
    answer: 0,
  },
  {
    id: "p19",
    area: "listening",
    level: "C1",
    prompt: "Listen to part of a lecture. What is the speaker's main point about the printing press?",
    audio:
      "Now, it's often claimed that the printing press caused an immediate revolution in literacy. It's a tidy story, and you'll find it in plenty of textbooks. But the evidence suggests something rather slower. For decades after Gutenberg, many printed books were religious or legal texts, often in Latin. They were still expensive, and they were read mostly by the same small, educated group who had always read manuscripts. So what the press changed first wasn't who read, but how many copies of a text could exist, and how consistent those copies were. The real expansion of readership came later, and it depended just as much on schools and cheaper paper as it did on the press itself.",
    cast: { narrator: "male" },
    options: [
      "At first it changed how many copies existed, not who could read.",
      "It quickly made reading available to most ordinary people.",
      "It mattered less than the spread of schools and cheaper paper.",
      "Textbooks have exaggerated how expensive early printed books were.",
    ],
    answer: 0,
  },
  {
    id: "p20",
    area: "reading",
    level: "C1",
    prompt: "Why does the writer say the trial results \"should be read with caution\"?",
    passage:
      "Supporters of the four-day working week often cite trials in which productivity held steady while staff wellbeing improved. Such findings are encouraging, but they should be read with caution. Firms that volunteer for trials are, almost by definition, those most confident that the change will succeed, and employees who know they are being observed may work harder than they would in the long term.",
    options: [
      "The trials measured wellbeing but not productivity.",
      "Most of the trials ended before any results were available.",
      "The companies and workers involved may not be typical.",
      "Employees worked more hours than the trials reported.",
    ],
    answer: 2,
  },
];
