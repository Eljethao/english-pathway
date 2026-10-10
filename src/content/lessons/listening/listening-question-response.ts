import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-question-response",
  title: "Question–response: choosing the right reply",
  summary:
    "Hear a short question or comment and choose the most natural reply. Learn to catch the question word, avoid sound-alike traps and recognise indirect answers.",
  skill: "listening",
  level: "B1",
  order: 4,
  minutes: 15,
  exams: [
    { exam: "toeic", task: "Listening Part 2 – Question-Response" },
    { exam: "toefl", task: "Listening – Listen and Choose a Response" },
  ],
  objectives: [
    "Recognise the question word at the start of a question and the kind of reply it needs",
    "Avoid common traps such as repeated words and similar sounds",
    "Choose natural indirect replies, such as “Let me check”",
  ],
  warmUp: [
    "How many ways can you answer the question “Where's the meeting?” without saying a place?",
    "What do you say when someone asks you something and you don't know the answer?",
  ],
  learn: [
    {
      type: "text",
      title: "Catch the first words",
      body: "In this task you hear one short question or comment, then choose the best reply. The question is said only once, so the most important thing is to catch the **first one to three words**. They tell you what kind of reply is needed.",
    },
    {
      type: "table",
      title: "Question types and good replies",
      headers: ["You hear …", "A good reply gives …", "Example reply"],
      rows: [
        ["Where …?", "a place", "In the meeting room on the second floor."],
        ["When …? / What time …?", "a time or a day", "Not until Thursday."],
        ["Who …?", "a person or a job", "The new manager, I think."],
        ["Why …?", "a reason", "Because the printer's broken."],
        ["How long …? / How often …?", "an amount of time or how many times", "About twenty minutes."],
        ["Do you …? / Is it …?", "yes, no, or information that means yes or no", "I already have one, thanks."],
        ["… or …?", "one of the choices, both, or neither", "The earlier one, please."],
        ["Could you …? / Would you like …?", "agreeing, refusing, accepting or saying no thanks", "Sure, I'll do it now."],
      ],
    },
    {
      type: "text",
      title: "Three common traps",
      body: "1. **Repeated word.** The reply repeats a word from the question, but doesn't answer it. “Did you **book** the hotel?” → “I'm reading a good **book**.” (wrong)\n2. **Similar sound.** The reply has a word that sounds like a word in the question. “Is the **copier** working?” → “I'd like a **coffee**.” (wrong)\n3. **Wrong question type.** The reply answers a different question. “**When** does the train leave?” → “From platform four.” (wrong: this answers *where*)\n\nAlso be careful with *yes* and *no*. They can't answer a Wh- question. “Where's the bank?” → “Yes, it is.” is always wrong.",
    },
    {
      type: "text",
      title: "Indirect replies are often correct",
      body: "Real people don't always answer directly. They may say they don't know, tell you who to ask, or answer with another question. These replies are often the correct answer in the exam.",
    },
    {
      type: "example",
      title: "Indirect but correct",
      items: [
        "“Who's leading the training session?” → “**It hasn't been decided yet.**”",
        "“When does the shop close?” → “**Let me check the website.**”",
        "“Is this seat free?” → “**My friend's just gone to get a coffee.**” (= no, it's taken)",
        "“Would you mind opening the window?” → “**Not at all.**” (= yes, I'll do it)",
      ],
    },
    {
      type: "tip",
      exam: "toeic",
      body: "In TOEIC Part 2 nothing is printed in your test book: you hear a question or comment and three replies, once only. If you miss the question, choose your best guess and get ready for the next one immediately.",
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model item 1",
      voice: "us",
      cast: { Narrator: "female" },
      transcript:
        "Woman: When is the new printer being delivered?\nNarrator: A.\nMan: In the copy room, next to the kitchen.\nNarrator: B.\nMan: Yes, it prints in colour.\nNarrator: C.\nMan: The supplier said Friday morning.",
    },
    {
      type: "text",
      title: "How a strong listener does it",
      body: "The first word is **When**, so the reply must give a time.\n\n- **A** gives a place. It answers *where*, so it is wrong.\n- **B** starts with *yes*, which can't answer a *When* question. It also repeats a sound from the question (*printer*, *prints*).\n- **C** gives a time: Friday morning. **C is correct.**",
    },
    {
      type: "audio",
      title: "Model item 2",
      voice: "us",
      cast: { Narrator: "male" },
      transcript:
        "Man: Who's going to lead the team meeting today?\nNarrator: A.\nWoman: In the large meeting room.\nNarrator: B.\nWoman: Didn't Joe send an email about it?\nNarrator: C.\nWoman: Yes, it was a long meeting.",
    },
    {
      type: "text",
      title: "An indirect answer",
      body: "The question starts with **Who**, so we expect a person.\n\n- **A** gives a place and repeats the word *meeting*.\n- **C** talks about a past meeting and starts with *yes*.\n- **B** doesn't give a name, but it tells the man where to find the answer: Joe's email. It is a natural reply. **B is correct.**\n\nDon't reject an answer just because it doesn't contain the information directly.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "respond",
        title: "TOEIC-style question–response",
        instructions: "Listen to each question or comment. Choose the best reply.",
        items: [
          {
            audio: "Where can I find a train timetable?",
            options: ["It leaves at six.", "I'm training a new employee.", "There's one on the wall by the entrance."],
            answer: 2,
            explanation: "“Where” needs a place. A gives a time, and B uses a similar word (*training*).",
          },
          {
            audio: "Would you like some help carrying those boxes?",
            options: ["Thanks, that would be great.", "They're at the box office.", "I'd like a large one."],
            answer: 0,
            explanation: "This is an offer, so a good reply accepts or refuses. B repeats *box*, and C repeats *like*.",
          },
          {
            audio: "Why was the meeting moved to Thursday?",
            options: ["Yes, it was a good meeting.", "In room twelve.", "The manager is away on Wednesday."],
            answer: 2,
            explanation: "“Why” needs a reason. *Yes* can't answer a Why question, and B gives a place.",
          },
          {
            audio: "Would you prefer tea or coffee?",
            options: ["Yes, please.", "Just water for me, thanks.", "The café opens at eight."],
            answer: 1,
            explanation: "This is a choice question, so “Yes, please” doesn't work. Choosing neither (“Just water”) is a natural reply.",
          },
          {
            audio: "Who's in charge of ordering office supplies?",
            options: ["Anna in the finance team.", "Some paper and pens.", "Every Monday."],
            answer: 0,
            explanation: "“Who” needs a person. B says *what* is ordered and C says *when*.",
          },
          {
            audio: "The air conditioning isn't working again.",
            options: ["He's working on the report.", "I'll call the repair company.", "The air is very fresh here."],
            answer: 1,
            explanation: "This is a comment about a problem, so a good reply offers a solution. A and C repeat *working* and *air*.",
          },
          {
            audio: "How long does it take to get to the airport?",
            options: ["Terminal two.", "It's a long flight.", "About forty minutes by taxi."],
            answer: 2,
            explanation: "“How long” needs an amount of time. B repeats *long* but talks about the flight, not the journey to the airport.",
          },
          {
            audio: "Haven't you finished the sales report yet?",
            options: ["The sales were last week.", "I'm just sending it to you now.", "Yes, I'll report it."],
            answer: 1,
            explanation: "“I'm just sending it” means it is finished. A repeats *sales*, and C repeats *report* with a different meaning.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "respond",
        title: "TOEFL-style: daily life and campus",
        instructions: "Listen to each sentence. Choose the most natural reply.",
        items: [
          {
            audio: "Have you started the reading for Professor Lee's class yet?",
            options: [
              "I read about half of it last night.",
              "She teaches on Tuesdays.",
              "It's the book with the red cover.",
              "I'm in her Monday class.",
            ],
            answer: 0,
            explanation: "This is a yes/no question. “I read about half of it” means yes, I've started.",
          },
          {
            audio: "I can't believe the bookstore is closed again today.",
            options: [
              "I bought two books there.",
              "I know. The sign says it's a staff training day.",
              "It's closer than the library.",
              "Yes, I believe you.",
            ],
            answer: 1,
            explanation: "The speaker is complaining. B agrees and gives a reason. C uses a similar sound (*closed*, *closer*), and D repeats *believe*.",
          },
          {
            audio: "Would you mind if I borrowed your notes from Monday's lecture?",
            options: [
              "The lecture was on Monday.",
              "Yes, I'd love to.",
              "No, not at all. I'll email them to you.",
              "I don't mind the noise.",
            ],
            answer: 2,
            explanation: "“Would you mind …?” means “Is it a problem?”. “No, not at all” means “It's fine, you can.”",
          },
          {
            audio: "Which bus goes to the sports centre?",
            options: [
              "Tennis and swimming.",
              "It takes about ten minutes.",
              "The centre opens at seven.",
              "Any of them except the number nine.",
            ],
            answer: 3,
            explanation: "“Which bus” needs a bus. D answers it. The other options are about the sports centre, not the bus.",
          },
          {
            audio: "Why don't we study together before the exam?",
            options: [
              "Because it was difficult.",
              "That's a great idea. How about Thursday?",
              "I studied biology.",
              "The exam is in the main hall.",
            ],
            answer: 1,
            explanation: "“Why don't we …?” is a suggestion, not a real question about a reason. A good reply accepts or refuses it.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio: six questions",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Question one. Why did you leave the party so early?\n\nQuestion two. Shall I carry your bag for you?\n\nQuestion three. Who left this umbrella on my desk?\n\nQuestion four. Would you prefer a window seat or an aisle seat?\n\nQuestion five. How about going to the beach this weekend?\n\nQuestion six. Where's the nearest cash machine?",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "What does the speaker want?",
        instructions: "Listen to six questions. Match each question with what the speaker is doing. There is one extra option you do not need.",
        left: ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6"],
        right: [
          "making a suggestion",
          "asking for a place",
          "asking for a reason",
          "making an offer",
          "asking for a time",
          "asking you to choose",
          "asking about a person",
        ],
        answer: [2, 3, 6, 5, 0, 1],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "dictation",
        title: "Catch the whole question",
        instructions: "Listen and type each question exactly. Pay special attention to the first few words.",
        voice: "us",
        sentences: [
          "Where are we meeting after class?",
          "Could you send me the report by Friday?",
          "How often does the shuttle bus run?",
          "Didn't you say the meeting was on Tuesday?",
          "Would you rather walk or take the bus?",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "Watch out for replies that repeat a word from the question or use a word that sounds similar. In Part 2 these are usually traps. The correct reply often uses different words.",
    },
    {
      exam: "toeic",
      body: "Listen to all three replies before you choose. An indirect reply such as “I'll ask Mr Kim” may be the best one, even if it comes last.",
    },
    {
      exam: "toefl",
      body: "In Listen and Choose a Response, you hear one short sentence from daily or campus life and choose the best reply. Think about what the speaker *wants*: information, help, agreement or a decision. Then choose the reply that gives them that.",
    },
  ],
  vocabulary: [
    { word: "timetable", meaning: "a list of times when buses, trains or classes happen (schedule in US English)", example: "Check the timetable for the last train home.", topic: "travel" },
    { word: "in charge of", meaning: "responsible for something or someone", example: "Anna is in charge of ordering office supplies.", topic: "work" },
    { word: "office supplies", meaning: "things used in an office, like paper, pens and printer ink", example: "We're running out of office supplies.", topic: "work" },
    { word: "Would you mind …?", meaning: "a polite way to ask for something; “No, not at all” means yes", example: "Would you mind closing the door? – Not at all.", topic: "everyday" },
    { word: "borrow", meaning: "to take and use something that belongs to someone else, and give it back later", example: "Can I borrow your notes from Monday?", topic: "education" },
    { word: "aisle", meaning: "the passage between rows of seats on a plane, train or in a theatre", example: "I prefer an aisle seat on long flights.", topic: "travel" },
    { word: "shuttle bus", meaning: "a bus that goes regularly between two places", example: "The shuttle bus runs every twenty minutes.", topic: "travel" },
    { word: "suggestion", meaning: "an idea or plan that you offer for someone to think about", example: "“Why don't we study together?” is a suggestion.", topic: "everyday" },
    { word: "offer", meaning: "to ask if someone would like something or would like you to do something", example: "She offered to carry my bags.", topic: "everyday" },
    { word: "repair", meaning: "to fix something that is broken", example: "They're coming to repair the air conditioning tomorrow.", topic: "everyday" },
  ],
  keyPoints: [
    "The first words (Where, When, Who, Why, Do, Could …) tell you what kind of reply you need.",
    "Replies that repeat words or use similar-sounding words are usually traps.",
    "*Yes* and *no* can't answer Wh- questions or choice questions.",
    "The best reply is often indirect: “Let me check”, “Ask Joe”, “It hasn't been decided yet”.",
  ],
};

export default lesson;
