import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-short-news-articles",
  title: "Short news articles",
  summary:
    "Read short news reports efficiently: understand headline grammar, find who, what, when, where and why in the first paragraph, and separate the main point from details and quotes.",
  skill: "reading",
  level: "B1",
  order: 9,
  minutes: 25,
  exams: [
    { exam: "toeic", task: "Reading Part 7 – Reading Comprehension" },
    { exam: "ielts", task: "Reading – Short-answer questions" },
  ],
  objectives: [
    "Understand the special grammar and vocabulary of news headlines",
    "Find who, what, when, where and why in the first paragraph of a report",
    "Tell the main point of an article from details, quotes and background",
    "Choose a suitable headline and follow the usual order of a news report",
  ],
  warmUp: [
    "Where do you usually read the news: on a website, an app, social media or in a printed newspaper?",
    "Look at this headline: *Local school wins national science prize*. What do you expect the article to tell you?",
  ],
  learn: [
    {
      type: "text",
      title: "How news reports are built",
      body: "Most news reports follow the same plan. The **most important information comes first**, and the details become less important as you read down. This way, a busy reader can stop after the first paragraph and still know the main story.\n\n1. **Headline**: the story in a few words.\n2. **First paragraph (the lead)**: who, what, when, where and often why. This is the main point.\n3. **Middle paragraphs**: details, numbers and **quotes** from people involved.\n4. **Last paragraph**: background information or what will happen next.",
    },
    {
      type: "table",
      title: "Headline grammar",
      headers: ["Headline", "What it means", "Rule"],
      rows: [
        ["Town hall reopens after repairs", "The town hall **has reopened** after repairs.", "Present simple for a recent event"],
        ["Council to close two libraries", "The council **is going to** close two libraries.", "*to* + verb = a future plan"],
        ["Bridge closed by storm", "The bridge **was closed** by a storm.", "Past participle alone = passive (*was* / *has been* is left out)"],
        ["Teen chef wins top prize", "**A** teenage chef has won **a** top prize.", "*a* and *the* are often left out"],
        ["Bus fares up again", "Bus fares **have gone up** again.", "*up* = increase, *down* = decrease"],
      ],
    },
    {
      type: "text",
      title: "Short words in headlines",
      body: "Headlines use short, strong words. These are common:\n\n- **back** = support (*Parents back new school hours*)\n- **bid** = an attempt (*Town makes bid to host cycling race*)\n- **cut** = reduce (*Firm cuts prices*)\n- **hit** = affect badly (*Floods hit farmers*)\n- **row** (rhymes with *now*) = an argument (*Row over new car park*)\n- **set to** = expected to, going to (*Prices set to rise*)",
    },
    {
      type: "text",
      title: "Main point, details and quotes",
      body: "When a question asks *What is the article mainly about?*, use the headline and the first paragraph. Don't choose an answer because of one quote or one number in the middle.\n\nQuotes are introduced by **reporting verbs**: *said, explained, added, warned, announced, admitted*. The verb often shows the speaker's purpose:\n\n- *explained* = gave a reason\n- *added* = said something more\n- *warned* = talked about a possible problem or danger\n- *admitted* = said something they did not really want to say",
    },
    {
      type: "tip",
      exam: "toeic",
      body: "Part 7 includes articles as well as emails and notices. For *What is the article mainly about?*, read the headline and the first paragraph. For a detail, scan the middle paragraphs for the name or number in the question.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "Library to open on Sundays after student campaign",
      labelled: true,
      paragraphs: [
        "Westford Central Library will open on Sundays from next month, after a group of local students collected more than 3,000 signatures asking for longer opening hours. The library, which has been closed on Sundays for more than ten years, will open from 11 am to 4 pm, starting on the first Sunday in November.",
        "The campaign was started in March by Leila Haddad, 17, and two friends from Westford High School. They needed a quiet place to study at weekends, because their homes were too crowded and noisy. “Many of us share a bedroom with brothers or sisters,” Leila explained. “The library is the only place where we can really concentrate.”",
        "The students collected signatures outside supermarkets and at the town's Saturday market, and they also started an online petition. In September, they presented the petition to the town council.",
        "Councillor Tom Bright said the council had listened carefully. “The students made a very strong case,” he said. However, he warned that the extra hours would cost about £40,000 a year, and that the decision would be reviewed after twelve months.",
        "The library will need five new part-time staff for the Sunday opening. The jobs will be advertised on the council's website next week.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader reads a news report",
      body: "**Headline:** *Library to open on Sundays after student campaign*. *to open* = a future plan. So the story is: the library is going to open on Sundays because students campaigned.\n\n**First paragraph (the lead):**\n\n- Who? Westford Central Library and a group of local students\n- What? The library will open on Sundays, from 11 am to 4 pm.\n- When? From next month (the first Sunday in November).\n- Where? Westford.\n- Why? The students collected more than 3,000 signatures.\n\nThat is the main point. The rest of the article gives **details** (how the campaign started and how the signatures were collected), **quotes** from Leila and from the councillor, and **what happens next** (new staff, a review after twelve months).\n\nNotice the reporting verbs: Leila *explained* (she gives a reason), and the councillor *warned* (he talks about a possible problem: the cost).",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "What do the headlines mean?",
        instructions: "Match each headline to its meaning. There are two extra meanings that you do not need.",
        left: [
          "Museum to charge entry fee",
          "Factory fire: two workers hurt",
          "Mayor backs plan for new cycle lanes",
          "Ferry services cut as fuel costs rise",
          "Row over plan to close village school",
          "Rents set to rise again",
        ],
        right: [
          "The mayor has decided to stop the cycle lanes.",
          "Fewer ferries are running because fuel has become more expensive.",
          "The museum is going to start asking visitors to pay.",
          "People are arguing about a plan to close a school.",
          "Two people were injured in a fire at a factory.",
          "The museum has closed because it had no money.",
          "Rents are expected to increase again.",
          "The mayor supports a plan to build cycle lanes.",
        ],
        answer: [2, 4, 7, 1, 3, 6],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Check the model article",
        instructions: "Use “Library to open on Sundays after student campaign”. Choose the correct answer.",
        questions: [
          {
            prompt: "What is the main point of the article?",
            options: [
              "Many students need quiet places to study.",
              "The library will start opening on Sundays because of a student campaign.",
              "The council is looking for five new part-time workers.",
              "The library has been closed on Sundays for many years.",
            ],
            answer: 1,
            explanation: "The headline and paragraph A give the main point. The other options are details from later in the article or background.",
          },
          {
            prompt: "Why did the students want the library to open on Sundays?",
            options: [
              "They wanted to borrow more books.",
              "Their school was closed at weekends.",
              "They wanted part-time jobs.",
              "They needed a quiet place to study.",
            ],
            answer: 3,
            explanation: "Paragraph B: “They needed a quiet place to study at weekends, because their homes were too crowded and noisy.”",
          },
          {
            prompt: "In paragraph D, the councillor *warned* that…",
            options: [
              "the students had not collected enough signatures",
              "the library would close on Saturdays",
              "the Sunday opening would be expensive",
              "nobody would use the library on Sundays",
            ],
            answer: 2,
            explanation: "He warned that “the extra hours would cost about £40,000 a year”. *Warned* introduces a possible problem.",
          },
          {
            prompt: "What will happen after twelve months?",
            options: [
              "The library will close.",
              "The council will look at the decision again.",
              "Leila will start a new campaign.",
              "The library will open every evening.",
            ],
            answer: 1,
            explanation: "Paragraph D: “the decision would be reviewed after twelve months”. *Review* = look at again.",
          },
          {
            prompt: "In paragraph D, *case* in “The students made a very strong case” is closest in meaning to…",
            options: ["argument", "box", "problem", "court"],
            answer: 0,
            explanation: "To *make a case* for something is to give good reasons for it. The students argued well for Sunday opening.",
          },
          {
            prompt: "Which of these would also be a good headline for the article?",
            options: [
              "Councillor warns of rising costs",
              "Teenagers share bedrooms",
              "Students win Sunday opening for library",
              "Library jobs advertised online",
            ],
            answer: 2,
            explanation: "A good headline gives the main point. The other headlines are about single details.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Snow closes Norhaven Airport for second day",
      labelled: true,
      timerMinutes: 4,
      paragraphs: [
        "Norhaven Airport was closed for a second day on Tuesday after more than 40 centimetres of snow fell overnight. Around 120 flights were cancelled, and airport staff said that up to 15,000 passengers had been affected.",
        "Snow ploughs worked through the night to clear the main runway, but strong winds kept blowing snow back onto it. “As soon as we clear one end, the other end is covered again,” said Sandra Wells, the airport's operations manager. She added that the airport hoped to reopen at 6 am on Wednesday if the wind dropped.",
        "Hundreds of passengers spent Monday night in the terminal building. The airport gave out blankets, bottled water and food vouchers, and a nearby hotel offered rooms at half price. Many travellers were patient, but some complained that they had received no information from their airlines.",
        "“Nobody told us anything for six hours,” said Kevin Marsh, who was trying to fly home to Dublin with his two young children. “We only found out that our flight was cancelled from the departures board.”",
        "Train companies have added extra services to the capital, and passengers with tickets for cancelled flights can travel by train for free until Thursday. More snow is expected in the north of the country later this week.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Short answers",
        instructions:
          "Read “Snow closes Norhaven Airport for second day” in four minutes. Answer the questions. Write NO MORE THAN THREE WORDS AND/OR A NUMBER from the article for each answer.",
        text: "1. How much snow fell overnight? {{0}}\n2. About how many flights were cancelled? {{1}}\n3. What kept blowing snow back onto the runway? {{2}}\n4. What is Sandra Wells's job? {{3}}\n5. Where did hundreds of passengers spend Monday night? {{4}}\n6. Where did Kevin Marsh find out that his flight was cancelled? {{5}}\n7. Until which day can passengers with cancelled flights travel by train for free? {{6}}",
        answers: [
          ["more than 40 centimetres", "40 centimetres", "over 40 centimetres", "40 cm", "more than 40 cm", "40 centimeters", "more than 40 centimeters", "over 40 centimeters", "40cm", "more than 40cm", "over 40 cm"],
          ["120", "around 120", "about 120", "120 flights", "around 120 flights", "about 120 flights"],
          ["strong winds", "winds", "strong wind", "wind", "the wind"],
          ["operations manager", "the operations manager", "airport's operations manager", "airport operations manager"],
          ["terminal building", "the terminal building", "the terminal", "terminal", "in the terminal"],
          ["departures board", "the departures board", "departure board", "the departure board"],
          ["Thursday"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Main point, details and quotes",
        instructions: "Use the same article. Choose the correct answer.",
        questions: [
          {
            prompt: "What is the article mainly about?",
            options: [
              "Problems at an airport caused by heavy snow",
              "A family's trip to Dublin",
              "New train services to the capital",
              "How snow ploughs work",
            ],
            answer: 0,
            explanation: "The headline and paragraph A give the main point: the airport was closed and many flights were cancelled because of snow.",
          },
          {
            prompt: "What does the airport hope will happen on Wednesday?",
            options: [
              "More snow will fall.",
              "It will reopen if the wind becomes weaker.",
              "All passengers will get a hotel room.",
              "The trains will stop running.",
            ],
            answer: 1,
            explanation: "Paragraph B: “the airport hoped to reopen at 6 am on Wednesday if the wind dropped”. *Dropped* = became weaker.",
          },
          {
            prompt: "What did some passengers complain about?",
            options: [
              "The price of hotel rooms",
              "The food vouchers",
              "Getting no information from their airlines",
              "The cold in the terminal",
            ],
            answer: 2,
            explanation: "Paragraph C: “some complained that they had received no information from their airlines”.",
          },
          {
            prompt: "Why does the writer include Kevin Marsh's words in paragraph D?",
            options: [
              "To give a real example of the lack of information",
              "To explain how the runway was cleared",
              "To show that all passengers were patient",
              "To advertise travelling by train",
            ],
            answer: 0,
            explanation: "Paragraph C says some passengers got no information. Kevin's quote (“Nobody told us anything for six hours”) is a real example of this complaint.",
          },
          {
            prompt: "In paragraph B, the verb *added* in “She added that…” shows that Sandra Wells…",
            options: [
              "did a calculation",
              "changed her mind",
              "disagreed with the passengers",
              "said something more after her first comment",
            ],
            answer: 3,
            explanation: "*Add* as a reporting verb means to say something more. She first talked about the wind, then *added* the plan to reopen.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "order",
        title: "Put the news report in order",
        instructions:
          "These sentences make a short news report, but they are mixed up. Put them in order: the main point first, then the details, then what happens next. Words like *the discovery*, *Two days later* and *This date* will help you.",
        mode: "lines",
        items: [
          "A 14-year-old boy has found a very old gold coin in his grandmother's garden in Ashby Green.",
          "Sam Fowler made the discovery last Saturday while he was digging a hole for a new apple tree.",
          "Two days later, he took the coin to the town museum, where experts said it was made in the early 1600s.",
          "This date makes it one of the oldest objects ever found in the town.",
          "The museum hopes to show the coin in an exhibition next year, if Sam's family agrees.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "Part 7 includes short articles. Questions often ask about the purpose of the article or one detail. Answer purpose questions from the headline and first paragraph; for details, scan for the name, date or number in the question and read the whole sentence around it.",
    },
    {
      exam: "ielts",
      body: "IELTS Academic Reading texts can come from newspapers and magazines, so news structure helps you find information fast. In short-answer questions, use words from the text and keep to the word limit; the answers usually come in the same order as the text.",
    },
  ],
  vocabulary: [
    { word: "headline", meaning: "the title of a news story, printed in large letters", example: "I only had time to read the headlines this morning.", topic: "everyday" },
    { word: "campaign", meaning: "a planned group of activities to change something", example: "The students started a campaign for longer library hours.", topic: "society" },
    { word: "signature", meaning: "your name written in your own special way", example: "The petition has more than 3,000 signatures.", topic: "everyday" },
    { word: "petition", meaning: "a document signed by many people that asks someone in authority to do something", example: "We signed a petition against the new car park.", topic: "society" },
    { word: "councillor", meaning: "an elected member of a town or city council", example: "Local councillors will vote on the plan next week.", topic: "society" },
    { word: "concentrate", meaning: "to give all your attention to something", example: "I can't concentrate when the TV is on.", topic: "education" },
    { word: "review", meaning: "to look at something again to decide whether to change it", example: "The rules will be reviewed at the end of the year.", topic: "work" },
    { word: "warn", meaning: "to tell someone about a possible danger or problem", example: "The police warned drivers about ice on the roads.", topic: "everyday" },
    { word: "affect", meaning: "to change or have an influence on something or someone", example: "The strike affected thousands of travellers.", topic: "everyday" },
    { word: "runway", meaning: "the long, flat road where planes take off and land", example: "The plane waited on the runway for twenty minutes.", topic: "travel" },
    { word: "terminal", meaning: "a building at an airport where passengers arrive and leave", example: "Our flight leaves from Terminal 2.", topic: "travel" },
    { word: "voucher", meaning: "a piece of paper that you can use instead of money", example: "The airline gave us a £10 food voucher.", topic: "business" },
  ],
  keyPoints: [
    "News reports put the most important information first: the headline, then a lead paragraph with who, what, when, where and why.",
    "Headline grammar: present simple for recent events, to + verb for future plans, a past participle for the passive, and small words left out.",
    "Middle paragraphs give details and quotes; the last paragraph often gives background or what happens next.",
    "Reporting verbs such as explained, added, warned and admitted show what the speaker is doing.",
  ],
};

export default lesson;
