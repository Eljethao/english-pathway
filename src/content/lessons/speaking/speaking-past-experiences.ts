import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-past-experiences",
  title: "Talking about past experiences",
  summary:
    "Tell clear stories about past experiences: use the past simple and past continuous, put events in order with sequencing words, and say -ed endings correctly, for IELTS Speaking and the TOEFL interview.",
  skill: "speaking",
  level: "B1",
  order: 6,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Speaking Part 1" },
    { exam: "ielts", task: "Speaking Part 2" },
    { exam: "toefl", task: "Speaking – Take an Interview" },
  ],
  objectives: [
    "Use the past simple for main events and the past continuous for background",
    "Put a story in order with words like at first, then, after that and in the end",
    "Say -ed endings correctly: /t/, /d/ or /ɪd/",
    "Tell a short story about a past experience for up to 2 minutes",
  ],
  warmUp: [
    "What is the most interesting thing you did last year?",
    "Think of a day when something went wrong. What happened first?",
  ],
  learn: [
    {
      type: "text",
      title: "Stories in speaking tests",
      body: "Many speaking questions ask about the past. IELTS Part 1 may ask *What did you do last weekend?* IELTS Part 2 may ask you to describe an event, a trip or a time when something happened. In the TOEFL interview, the early questions are about your own experience.\n\nA good spoken story is easy to follow. It has a clear **order**, the right **tenses**, and a short **ending** that says how you felt or what you learned.",
    },
    {
      type: "table",
      title: "Past tenses for stories",
      headers: ["Tense", "Use it for", "Example"],
      rows: [
        ["Past simple", "the main events, one after another", "We *got* on the train and *found* our seats."],
        ["Past continuous", "the background: what was happening at that time", "It *was raining* and everyone *was waiting* for the bus."],
        ["Past continuous + past simple", "a longer action interrupted by a short one", "I *was cooking* dinner when the lights *went* out."],
        ["Present perfect, then past simple", "an experience with no time, then the details with a time", "I've *been* to Rome twice. I *went* there last spring."],
      ],
    },
    {
      type: "text",
      title: "“Have you ever…?” Switch tenses",
      body: "When a question starts with *Have you ever…?*, answer with the present perfect. Then **switch to the past simple** for the details, because now you are talking about a finished time:\n\n- *Have you ever been to a music festival?*\n- *Yes, I **have**. I **went** to one in my hometown two years ago. It **was** amazing.*\n\nDon't say *I have been there last year*. With a finished time (*last year*, *in 2022*, *when I was ten*), use the past simple.",
    },
    {
      type: "table",
      title: "Sequencing words",
      headers: ["Stage of the story", "Useful words"],
      rows: [
        ["Start", "A few years ago,… / One day,… / At first,…"],
        ["Next events", "Then,… / After that,… / When…, / As soon as…,"],
        ["Something unexpected", "Suddenly,… / Unfortunately,… / Luckily,…"],
        ["Finish", "In the end,… / Finally,… / Since then,…"],
      ],
    },
    {
      type: "text",
      title: "At first, in the end, at the end of",
      body: "*At first* means “at the beginning, before something changed”: *At first I was nervous, but then I relaxed.* *In the end* means “finally, after everything”: *In the end, we got home at midnight.* Don't confuse it with *at the end of* + a noun: *at the end of the film*.",
    },
    {
      type: "text",
      title: "Saying -ed endings",
      body: "Regular past verbs end in *-ed*, but there are three ways to say it:\n\n- **/ɪd/**, an extra syllable, only after a /t/ or /d/ sound: *want-ed*, *decid-ed*, *need-ed*.\n- **/t/** after voiceless sounds such as /p/, /k/, /s/, /ʃ/, /tʃ/ and /f/: *stopped*, *walked*, *missed*, *finished*, *watched*, *laughed*.\n- **/d/** after all other sounds, including vowels: *played*, *called*, *arrived*, *opened*.\n\nA common mistake is to add an extra syllable to every verb (*walk-ed*). *Walked* has one syllable and sounds like *walkt*.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: tenses and sequencing",
        questions: [
          {
            prompt: "I … a shower when the doorbell rang, so I didn't hear it at first.",
            options: ["had", "was having", "have had"],
            answer: 1,
            explanation: "The shower was the longer background action; the doorbell interrupted it. Use the past continuous for the background.",
          },
          {
            prompt: "“Have you ever tried surfing?” “Yes, I have. I … it in Portugal two years ago.”",
            options: ["have tried", "tried", "was trying"],
            answer: 1,
            explanation: "Two years ago is a finished time, so switch to the past simple for the details.",
          },
          {
            prompt: "Which sentence is correct?",
            options: [
              "I have visited my cousins last summer.",
              "I visited my cousins last summer.",
              "I have visit my cousins last summer.",
            ],
            answer: 1,
            explanation: "Last summer is a finished time, so use the past simple.",
          },
          {
            prompt: "At first I didn't like my new job, but … I started to enjoy it.",
            options: ["at the end", "after a few weeks", "at first"],
            answer: 1,
            explanation: "After a few weeks shows that time passed and something changed. At the end usually needs of + a noun (at the end of the month), and at first is already used at the start of the sentence.",
          },
          {
            prompt: "We missed the last bus. …, a kind taxi driver stopped and took us home.",
            options: ["Luckily", "Unfortunately", "At first"],
            answer: 0,
            explanation: "Luckily introduces good news after a problem.",
          },
          {
            prompt: "The film was very long, but … it, everybody clapped.",
            options: ["in the end", "at the end of", "finally of"],
            answer: 1,
            explanation: "At the end of + noun (it = the film). In the end is used alone, without a noun after it.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The task card",
      body: "**Describe a day out that you really enjoyed.**\n\nYou should say:\n\n- where you went\n- who you went with\n- what you did\n- and explain why you enjoyed it so much.",
    },
    {
      type: "audio",
      voice: "uk",
      cast: { narrator: "male" },
      title: "Model: IELTS Speaking Part 2 (about 2 minutes)",
      transcript:
        "I'd like to talk about a day out I had about two years ago, when my friend Leila and I went hiking in the mountains near my city.\n\nIt was a Saturday in October. We'd planned the trip for weeks, but the weather was bad every weekend, so we kept changing the date. In the end, we just decided to go. We got up really early and took the first bus at six o'clock. When we arrived at the bottom of the mountain, it was still dark and very cold, and I was starting to think it was a bad idea.\n\nBut then the sun came up, and everything changed. While we were walking up the path, we could see the whole valley in the morning light. It was beautiful. After about three hours, we reached a small lake near the top. We sat down, ate our sandwiches and just looked at the view. Leila had brought some hot chocolate, which was perfect.\n\nOn the way down, we got a bit lost, to be honest. We took the wrong path, and we only noticed after half an hour. Luckily, we met an old farmer, and he showed us the way back to the bus stop. We finally got home at about eight in the evening, tired but really happy.\n\nI think I enjoyed it so much because it was so simple. There were no phones, no work and no plans, just a good friend and a lot of fresh air. Since then, we've tried to go hiking at least once a year.",
    },
    {
      type: "text",
      title: "How a strong candidate does it",
      body: "- **A clear start**: *I'd like to talk about a day out I had about two years ago* gives the topic and the time.\n- **Main events in the past simple**, in order: *got up*, *took*, *arrived*, *reached*, *sat down*, *ate*.\n- **Background in the past continuous**: *I was starting to think it was a bad idea*, *While we were walking up the path…*\n- **Sequencing words** guide the listener: *In the end*, *But then*, *After about three hours*, *On the way down*, *Luckily*, *finally*.\n- **A small problem** makes the story interesting: they got lost, and a farmer helped them.\n- **The last point on the card** (why you enjoyed it) gets its own short ending, which links to now: *Since then, we've tried to…*\n- Listen to the -ed endings: *planned* /d/, *decided* /ɪd/, *reached* /t/, *showed* /d/.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "order",
        mode: "lines",
        title: "Put the story in order",
        instructions: "Question: “Tell me about a time when you were late for something important.” Put the answer in order. Use the tenses and the sequencing words to help you.",
        items: [
          "A few months ago, I had a job interview in the city centre at ten o'clock.",
          "I left home early, but while I was waiting for the train, there was an announcement.",
          "The train was cancelled because of a problem with the line.",
          "At first I didn't know what to do, so I just stood there.",
          "Then I called a taxi, and I arrived at the office twenty minutes late.",
          "In the end, the interviewer was very kind about it, and I got the job!",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "How do you say -ed?",
        instructions: "Say each verb aloud. Is the -ed ending /t/, /d/ or /ɪd/ (an extra syllable)?",
        questions: [
          { prompt: "walked", say: "walked", options: ["/t/", "/d/", "/ɪd/ (extra syllable)"], answer: 0, explanation: "Walk ends in /k/, a voiceless sound, so -ed is /t/: walkt." },
          { prompt: "played", say: "played", options: ["/t/", "/d/", "/ɪd/ (extra syllable)"], answer: 1, explanation: "Play ends in a vowel sound, so -ed is /d/." },
          { prompt: "wanted", say: "wanted", options: ["/t/", "/d/", "/ɪd/ (extra syllable)"], answer: 2, explanation: "Want ends in /t/, so you add a syllable: want-ed." },
          { prompt: "stopped", say: "stopped", options: ["/t/", "/d/", "/ɪd/ (extra syllable)"], answer: 0, explanation: "Stop ends in /p/, a voiceless sound, so -ed is /t/: stopt." },
          { prompt: "arrived", say: "arrived", options: ["/t/", "/d/", "/ɪd/ (extra syllable)"], answer: 1, explanation: "Arrive ends in /v/, a voiced sound, so -ed is /d/." },
          { prompt: "decided", say: "decided", options: ["/t/", "/d/", "/ɪd/ (extra syllable)"], answer: 2, explanation: "Decide ends in /d/, so you add a syllable: de-cid-ed." },
          { prompt: "finished", say: "finished", options: ["/t/", "/d/", "/ɪd/ (extra syllable)"], answer: 0, explanation: "Finish ends in /ʃ/ (sh), a voiceless sound, so -ed is /t/: finisht." },
          { prompt: "cleaned", say: "cleaned", options: ["/t/", "/d/", "/ɪd/ (extra syllable)"], answer: 1, explanation: "Clean ends in /n/, a voiced sound, so -ed is /d/." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "shadow",
        voice: "uk",
        title: "Listen and repeat: past stories",
        instructions: "Listen and repeat. Make the -ed endings clear but short, and only add an extra syllable to verbs like waited and decided.",
        sentences: [
          "I walked to the station and waited for the train.",
          "While I was waiting, I started talking to an old man.",
          "We missed the bus, so we decided to walk.",
          "At first I was nervous, but then I relaxed.",
          "In the end, we arrived two hours late.",
          "I've been to Scotland twice. I went there last summer.",
          "Luckily, a kind woman helped us find the right path.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "IELTS Speaking Part 2: a story",
        instructions: "You have one minute to prepare. Write a few key words for each point, in the order things happened. Then speak for up to two minutes.",
        prompt: "Describe a time when something did not go as planned.",
        cueCard: [
          "what you planned to do",
          "what went wrong",
          "what you did about it",
          "and explain how you felt about it afterwards",
        ],
        prepSeconds: 60,
        speakSeconds: 120,
        modelAnswer:
          "I'm going to talk about my sister's birthday last year, when I planned a surprise picnic for her, and almost nothing went as planned.\n\nMy plan was simple. I wanted to take her to a big park by the river, with a picnic, a cake and a few of her best friends. I spent the whole morning making sandwiches and decorating the cake, and I told her we were just going for a walk.\n\nUnfortunately, when we were leaving the house, it started to rain. At first it was only a few drops, but by the time we got to the park, it was pouring. Her friends were already there, standing under a tree and getting very wet. Then, while I was carrying the cake from the car, I dropped it on the path. That was the worst moment, to be honest.\n\nSo I had to think quickly. I remembered a small café near the park, and luckily they had a free table for six people. We ran there, ordered hot drinks and some lunch, and sat by the window, watching the rain. The owner even found a candle and put it in a piece of their chocolate cake, so my sister still got her birthday cake.\n\nAfterwards, I felt a bit embarrassed at first, because I'd planned everything so carefully. But my sister said it was one of her best birthdays ever, because it was so funny. Now, whenever it rains, she says, “Shall we have a picnic?” So in the end, I learned that a day doesn't have to be perfect to be special.",
        targetPhrases: ["My plan was", "Unfortunately", "At first", "while I was", "luckily", "Afterwards", "in the end"],
        checklist: [
          "I covered all four points on the card, in order.",
          "I used the past simple for main events and the past continuous for background.",
          "I used sequencing words (at first, then, after that, in the end).",
          "I said the -ed endings clearly (started /ɪd/, dropped /t/, ordered /d/).",
          "I explained my feelings at the end.",
          "I kept talking for most of the 2 minutes.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In Part 2 you have one minute to prepare, and you can make notes. For a story, write a few key words for each point on the card in the order things happened (*rain → cake dropped → café*). Use them as a map while you speak, and keep going until the examiner stops you.",
    },
    {
      exam: "ielts",
      body: "If a Part 1 question is about the past (*What did you do last weekend?*), answer in the past simple, but keep it short: one main event and one detail are enough for 20–30 seconds.",
    },
    {
      exam: "toefl",
      body: "In Take an Interview there is no preparation time. For a question about your own experience, start with when and where (*About a year ago, at my old school…*), give two or three events in order, and finish with what you learned. That fits well into 45 seconds.",
    },
  ],
  vocabulary: [
    { word: "day out", meaning: "a trip for one day to a place you enjoy", example: "We had a lovely day out at the beach.", topic: "travel" },
    { word: "memorable", meaning: "easy to remember because it was special", example: "Our trip to the lake was really memorable.", topic: "travel" },
    { word: "go as planned", meaning: "to happen in the way you expected", example: "The party didn't go as planned because the band was late.", topic: "everyday" },
    { word: "unfortunately", meaning: "sadly; used before bad news", example: "Unfortunately, the museum was closed.", topic: "everyday" },
    { word: "luckily", meaning: "used before good news, often after a problem", example: "Luckily, someone found my wallet and gave it back.", topic: "everyday" },
    { word: "at first", meaning: "at the beginning, before something changed", example: "At first I hated running, but now I love it.", topic: "everyday" },
    { word: "in the end", meaning: "finally, after a lot of things happened", example: "We waited for an hour, but in the end we got a table.", topic: "everyday" },
    { word: "get lost", meaning: "to not know where you are or how to go back", example: "We got lost in the old part of the city.", topic: "travel" },
    { word: "pouring", meaning: "raining very heavily", example: "It was pouring, so we stayed inside.", topic: "environment" },
    { word: "embarrassed", meaning: "feeling silly or uncomfortable because of something you did", example: "I was embarrassed when I forgot my friend's name.", topic: "everyday" },
    { word: "since then", meaning: "from that time until now", example: "I visited Japan in 2019, and since then I've wanted to go back.", topic: "everyday" },
  ],
  keyPoints: [
    "Past simple for main events; past continuous for background and interrupted actions.",
    "Have you ever…? Answer with the present perfect, then switch to the past simple for details.",
    "Guide the listener with at first, then, after that, luckily and in the end.",
    "Say -ed as an extra syllable /ɪd/ only after /t/ and /d/ (wanted, decided); otherwise it is /t/ or /d/.",
    "Finish a story with how you felt or what you learned.",
  ],
};

export default lesson;
