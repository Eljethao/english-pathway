import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-future-hypotheticals",
  title: "Future plans and hypotheticals",
  summary:
    "Talk about your plans, make predictions and answer “What would you do if…?” questions with the right future forms and the second conditional, as IELTS and TOEFL speaking tasks often require.",
  skill: "speaking",
  level: "B2",
  order: 7,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Speaking Part 1" },
    { exam: "ielts", task: "Speaking Part 3" },
    { exam: "toefl", task: "Speaking – Take an Interview" },
  ],
  objectives: [
    "Choose the right form for plans, arrangements and predictions",
    "Show how sure you are about a prediction (definitely, probably, might, I doubt…)",
    "Use the second conditional and “I'd…” accurately for imagined situations",
    "Pronounce contractions such as I'd, I'll and it'll clearly",
  ],
  warmUp: [
    "What is one thing you are definitely doing next week, and one thing you would like to do one day but probably won't?",
    "If you could live in any country for a year, where would you go? Answer in two sentences.",
  ],
  learn: [
    {
      type: "text",
      title: "Three kinds of future talk",
      body: "Speaking tests ask about the future in three different ways, and each one needs different grammar.\n\n1. **Plans and arrangements** (things you have decided). Use *be going to* for intentions (*I'm going to apply for a master's*) and the **present continuous** for fixed arrangements with a time or place (*I'm starting a new job in March*). Softer plans: *I'm planning to… / I'm hoping to… / I'm thinking of + -ing*.\n2. **Predictions** (what you think will happen). Use *will* with a certainty word (*will definitely*, *will probably*, *probably won't*), *might* or *could* for possibilities, and *I expect… / I doubt…*. Use *going to* when you can see evidence now: *Look at that traffic. We're going to be late.*\n3. **Hypotheticals** (imagined or unlikely situations). Use the **second conditional**: *If + past simple, would + verb*. *If I had more time, I'd learn to sail.* Once the situation is clear, keep going with *I'd…* without repeating the if-clause.\n\nWord order: *probably* goes **after** *will* but **before** *won't*: *It'll probably rain.* / *It probably won't rain.*",
    },
    {
      type: "table",
      title: "The second conditional: forms that score",
      headers: ["Form", "Example", "Note"],
      rows: [
        ["Basic", "If I won some money, I'd travel round South America.", "Past simple in the if-clause, would ('d) in the result."],
        ["With were", "If I were the mayor, I'd ban cars from the centre.", "Were is common with I, he and she, especially in advice (If I were you…). Was is also heard in everyday speech."],
        ["Questions", "What would you do if you lost your passport abroad?", "Answer in the same form: I'd probably…"],
        ["Less certain results", "If I had the chance, I might study abroad.", "Might = perhaps I would; could = I would be able to."],
        ["Without an if-clause", "I'd probably start with a short trip. I wouldn't want to go alone.", "When the situation is already clear from the question."],
        ["Real or imagined?", "If I pass, I'll celebrate. / If I passed, I'd be amazed.", "If + present, will = a real possibility. If + past, would = imagined or unlikely."],
      ],
    },
    {
      type: "text",
      title: "Say the contractions clearly",
      body: "In natural speech, *I would* becomes **I'd** /aɪd/, *I will* becomes **I'll** /aɪl/, and *it will* becomes **it'll** /ˈɪtl/. Learners often drop the final /d/ or /l/, and that changes the meaning:\n\n- *I'd like to live abroad* (a wish) → without the /d/: *I like to live abroad* (a habit)\n- *I'll go by train* (a decision) → without the /l/: *I go by train* (a routine)\n\nKeep the /d/ and /l/ short but audible, and link them to the next word: *I'd‿ask*, *we'll‿always*.",
    },
    {
      type: "example",
      title: "Common mistakes",
      items: [
        "✗ If I will have time, I will help. → ✓ **If I have time, I'll help.**",
        "✗ If I would have more money, I would buy a flat. → ✓ **If I had more money, I'd buy a flat.**",
        "✗ When I will finish university, I want to travel. → ✓ **When I finish university, I want to travel.** (after when, after, before, as soon as: present tense)",
        "✗ I will probably to study medicine. → ✓ **I'll probably study medicine.**",
        "✗ Next month I visit my cousin in Lyon. → ✓ **Next month I'm visiting my cousin in Lyon.**",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: which form fits?",
        questions: [
          {
            prompt: "Examiner: What are you doing this weekend? “I ___ my cousin. We booked the train tickets last week.”",
            options: ["visit", "would visit", "'m visiting", "visited"],
            answer: 2,
            explanation: "A fixed arrangement (the tickets are booked) uses the present continuous: I'm visiting.",
          },
          {
            prompt: "If I ___ more free time, I'd learn to play the guitar.",
            options: ["have", "had", "would have", "will have"],
            answer: 1,
            explanation: "Second conditional: if + past simple (had), would ('d) + verb in the result.",
          },
          {
            prompt: "I think robots ___ do most of the cleaning in hotels within twenty years.",
            options: ["are probably", "will probable", "probably will to", "will probably"],
            answer: 3,
            explanation: "A prediction uses will + the base verb, and probably goes after will: will probably do. Probable is an adjective, and will is never followed by to.",
          },
          {
            prompt: "When I ___ my degree, I'm going to take a year off.",
            options: ["finish", "will finish", "would finish", "am finish"],
            answer: 0,
            explanation: "After time words like when, after and as soon as, use the present simple for the future.",
          },
          {
            prompt: "What ___ if you lost your phone on holiday?",
            options: ["will you do", "would you do", "do you do", "did you do"],
            answer: 1,
            explanation: "An imagined situation (if you lost…) needs would in the question.",
          },
          {
            prompt: "Which sentence shows that the speaker thinks getting the job is unlikely or only imagined?",
            options: ["If I get the job, I'll move to Seoul.", "If I got the job, I'd move to Seoul."],
            answer: 1,
            explanation: "If + past simple, would… presents the situation as imagined or less likely. If + present, will… presents it as a real possibility.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model: IELTS Parts 1 and 3",
      voice: "uk",
      cast: { Examiner: "female", Candidate: "male" },
      transcript:
        "Examiner: Do you have any plans for your next holiday?\nCandidate: Yes, actually. I'm going to Lisbon with my sister in May. We booked the flights in January, so it's all arranged. I'm hoping to do a day trip to the coast as well, but we'll see how much time we have.\nExaminer: What do you think people's homes will be like in fifty years?\nCandidate: That's hard to say, but I think they'll probably be a lot smaller, at least in big cities, because land is getting so expensive. I also expect most homes will be much more automated, so the heating and lights will adjust themselves. I doubt we'll have robots doing all the housework, though. People have been predicting that for decades, and it still hasn't really happened.\nExaminer: If you could design your own home, what would it be like?\nCandidate: Oh, I'd love that. If I could design my own place, I'd make the kitchen the biggest room, because that's where everyone ends up at parties anyway. I'd have huge windows and lots of plants, and I'd definitely want a small garden where I could grow vegetables. I wouldn't bother with a big living room, though. To be honest, I'd probably spend most of my time in the kitchen.",
    },
    {
      type: "text",
      title: "How a strong candidate does it",
      body: "- **Plans with the right level of certainty**: *I'm going to Lisbon* (arranged: *it's all arranged*) versus *I'm hoping to do a day trip… but we'll see* (not decided yet).\n- **Predictions that show how sure the speaker is**: *they'll probably be*, *I also expect*, *I doubt we'll*. Each prediction comes with a reason (*because land is getting so expensive*).\n- **The conditional set up once**: *If I could design my own place, I'd make…* Then the speaker continues with *I'd have…*, *I'd definitely want…*, *I wouldn't bother…*, *I'd probably spend…* without repeating *if*.\n- **Clear contractions**: listen to *I'd*, *we'll* and *they'll*. The final /d/ and /l/ are short but always there.\n- **Natural reactions**: *Yes, actually*, *That's hard to say, but…*, *Oh, I'd love that* make the answers sound like conversation, not a grammar exercise.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Imagined or real?",
        instructions: "Question: “If you could live in any city in the world for a year, which would you choose?” Complete the answer with the correct form of the verbs in brackets. Careful: the last two gaps are about a real plan, not an imagined one.",
        text: "If I {{0}} (can) live anywhere for a year, I {{1}} (choose) Vancouver. I {{2}} (be) there on a short trip three years ago, and I loved how close the mountains are to the city. If I {{3}} (live) there, I'd go hiking every weekend. The only problem is the cost. Rents are really high, so I {{4}} (probably / need) to share a flat. But I'm saving up at the moment, and if I {{5}} (get) a summer job this year, I {{6}} (visit) again next spring.",
        answers: [
          ["could"],
          ["would choose", "'d choose"],
          ["was"],
          ["lived", "was living", "were living"],
          ["would probably need", "'d probably need", "probably would need"],
          ["get"],
          ["will visit", "'ll visit", "am going to visit", "'m going to visit", "will be visiting", "'ll be visiting"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "shadow",
        title: "Contractions and rhythm",
        instructions: "Listen and repeat. Keep the /d/ in I'd and the /l/ in it'll and we'll short but clear, and link them to the next word.",
        voice: "uk",
        sentences: [
          "I'd love to live by the sea one day.",
          "If I had more time, I'd learn to cook properly.",
          "I'm starting a new course in September.",
          "I think it'll probably get easier with time.",
          "I doubt we'll ever stop using cash completely.",
          "What would you do if you could work from anywhere?",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "IELTS Part 3: a prediction question",
        instructions: "No preparation time. Make a clear prediction, show how sure you are, give reasons, and include one “if” idea.",
        prompt: "How do you think the way people work will change in the next twenty years?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "I think the biggest change will probably be in where people work rather than what they do. A lot of office jobs will be done from home or from small local offices, so I doubt city-centre office blocks will be as busy as they are now. I also expect that artificial intelligence will take over a lot of routine tasks, like writing basic reports or answering simple customer questions. That might sound worrying, but I don't think it'll lead to mass unemployment. If machines did the boring parts of a job, people could focus on the creative and human side, like dealing with clients. Having said that, some people will definitely need to retrain, and governments are going to have to help with that. So it'll be a big change, but not necessarily a bad one.",
        targetPhrases: ["will probably", "I doubt", "I also expect", "it'll", "if machines did", "will definitely"],
        checklist: [
          "I made a clear prediction in my first sentence.",
          "I showed how sure I was (definitely, probably, might, I doubt…).",
          "I gave a reason for each prediction.",
          "I used at least one second conditional (If…, people could / would…).",
          "My contractions (it'll, I'd, they'll) were short but clear.",
          "I finished with a short conclusion.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "TOEFL: Take an Interview (an imagined situation)",
        instructions: "No preparation time. Stay in the conditional all the way through (I'd…, I'd probably…, it'd…). Speak for about 45 seconds.",
        prompt:
          "Interviewer: Imagine your university offered you a free year to do any project you wanted, with full funding. What would you do with that year, and why?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "If I had a whole year and the money to do anything, I'd travel along the coast of South America and volunteer with marine conservation projects. I'm studying biology, so it'd be a chance to get real field experience, which is hard to get in a classroom. I'd probably spend three or four months in each place, so I could actually learn some Spanish and get to know local people, rather than just being a tourist. At the end, I'd write a report on what I'd learned for my department. I think it'd make me a much better scientist.",
        targetPhrases: ["if I had", "I'd probably", "it'd be", "so I could", "I think it'd"],
        checklist: [
          "I answered the question directly in my first sentence.",
          "I stayed in the conditional (I'd…, it'd…) and didn't switch to I will.",
          "I gave a reason linked to my own life or studies.",
          "I added specific details (where, how long, what I'd do).",
          "I finished with a clear final sentence within about 45 seconds.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Part 1 may include questions about your plans (*What are you going to do after your course?*). Answer with a real plan form such as *I'm going to…* or *I'm hoping to…*, not *I will* for everything. Using a range of future forms accurately is good evidence of grammatical range.",
    },
    {
      exam: "ielts",
      body: "For Part 3 prediction questions, show your degree of certainty (*will definitely*, *will probably*, *might*, *probably won't*) and give a reason, so your prediction sounds thought through rather than like a guess.",
    },
    {
      exam: "toefl",
      body: "Take an Interview may include an imagined situation (*Imagine… / If you could…*). Answer in the conditional all the way through: *I'd…, I'd probably…, it'd…*. Switching to *I will* halfway through is a common slip.",
    },
  ],
  vocabulary: [
    { word: "I'm hoping to", meaning: "used for a plan you want to happen but are not sure about", example: "I'm hoping to find a job abroad next year.", topic: "everyday" },
    { word: "be thinking of (doing)", meaning: "to be considering a plan", example: "We're thinking of moving to the coast.", topic: "everyday" },
    { word: "take a year off", meaning: "to spend a year not studying or working, often to travel", example: "She took a year off before starting university.", topic: "education" },
    { word: "save up (for)", meaning: "to keep money so that you can pay for something later", example: "I'm saving up for a new laptop.", topic: "everyday" },
    { word: "take over", meaning: "to start doing a job or task that someone or something else did before", example: "Machines have taken over many factory jobs.", topic: "technology" },
    { word: "retrain", meaning: "to learn the skills for a different job", example: "Many drivers may need to retrain in the future.", topic: "work" },
    { word: "automated", meaning: "operated by machines or computers instead of people", example: "The warehouse is almost completely automated.", topic: "technology" },
    { word: "in the long run", meaning: "over a long period of time; in the end", example: "Solar panels save money in the long run.", topic: "everyday" },
    { word: "unlikely", meaning: "not expected to happen", example: "It's unlikely that prices will fall this year.", topic: "academic" },
    { word: "if I were you", meaning: "used to give advice", example: "If I were you, I'd book the tickets early.", topic: "everyday" },
    { word: "funding", meaning: "money given for a particular purpose, such as a project", example: "The research project lost its funding.", topic: "education" },
  ],
  keyPoints: [
    "Plans: be going to, the present continuous for arrangements, and softer forms like I'm hoping to… or I'm thinking of…",
    "Predictions: will + definitely / probably, might, I expect…, I doubt…, always with a reason.",
    "Hypotheticals: if + past simple, would / 'd + verb; then keep going with I'd… without repeating the if-clause.",
    "Real possibilities use if + present and will; imagined ones use if + past and would.",
    "Say the /d/ in I'd and the /l/ in I'll and it'll: without them, your meaning can change.",
  ],
};

export default lesson;
