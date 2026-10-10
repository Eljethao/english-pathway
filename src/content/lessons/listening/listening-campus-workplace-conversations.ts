import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-campus-workplace-conversations",
  title: "Campus and workplace conversations",
  summary:
    "Follow conversations between students, teachers and colleagues: recognise suggestions and whether they are accepted, keep track of who will do what, and understand what speakers really mean.",
  skill: "listening",
  level: "B1",
  order: 10,
  minutes: 25,
  exams: [
    { exam: "toefl", task: "Listening – Conversation" },
    { exam: "toeic", task: "Listening Part 3 – Conversations" },
    { exam: "ielts", task: "Listening Part 3" },
  ],
  objectives: [
    "Recognise suggestions and advice, and whether the other speaker accepts them",
    "Keep track of who will do what in a conversation with three speakers",
    "Understand what a speaker means when the meaning is not said directly",
    "Complete notes on a conversation about a study project",
  ],
  warmUp: [
    "Think of a time you asked a teacher, a classmate or a colleague for advice. What did they suggest?",
    "When you work in a group, how do you decide who does each task?",
  ],
  learn: [
    {
      type: "text",
      title: "Conversations at college and at work",
      body: "Exam conversations often happen at a college or university (a student and a professor, an adviser or a classmate) or at work (colleagues, or a manager and an employee). Most of them have the same shape:\n\n1. Someone has a **problem** or needs something.\n2. They talk about **options**, and one speaker gives **advice**.\n3. They agree on a **plan**: who will do what, and when.\n\nTypical questions: Why does the student go to see the professor? What does the professor suggest? What will the student do next?",
    },
    {
      type: "table",
      title: "Suggestions and replies",
      headers: ["Making a suggestion", "Accepting", "Not accepting"],
      rows: [
        ["Why don't you …?", "That's a good idea.", "I'm not sure that will work, because …"],
        ["Have you thought about …?", "I hadn't thought of that.", "I've already tried that."],
        ["You might want to …", "I'll do that.", "I'd rather not, because …"],
        ["It might be a good idea to …", "OK, that works.", "I'd love to, but …"],
        ["If I were you, I'd …", "Great, I'll …", "Thursday's difficult for me."],
      ],
    },
    {
      type: "text",
      title: "Three speakers: who will do what?",
      body: "Some TOEIC Part 3 conversations have three speakers. Questions often ask what one person will do, so you need to know who is who.\n\n- Listen for **names** when people greet each other (“Hi Maria, hi Tom, thanks for joining”).\n- Listen for **offers** (*I can …*, *I'll …*) and **requests** (*Could you …?*, *Can you also …?*).\n- Be careful with plans that change: “I'd love to, but I'm away on Friday. I could do Monday, though.”",
    },
    {
      type: "example",
      title: "What do they really mean?",
      items: [
        "“Are you coming to the party tonight?” “**I've got an exam at nine tomorrow.**” → Probably not.",
        "“Shall we get the bus to the library?” “**It's only a ten-minute walk.**” → Let's walk.",
        "“Do you need a lift to the station?” “**My sister's picking me up.**” → No, thanks.",
        "“Could you check my report today?” “**I can look at it on Friday.**” → Not today.",
      ],
    },
    {
      type: "tip",
      exam: "toefl",
      body: "In TOEFL Listen to a Conversation, you hear a short conversation between two people, mostly about campus or daily life, followed by two questions. Ask yourself: Why are they talking? What will happen next?",
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model conversation: in the professor's office",
      voice: "us",
      transcript:
        "Leo: Hi, Professor Grant. Do you have a minute?\nProfessor: Sure, Leo. Come in. What's up?\nLeo: It's about my research paper. I chose city gardens as my topic, but I can't find enough sources.\nProfessor: Hmm. That topic is quite new, so there isn't much published on it yet. Have you thought about making it a bit wider? For example, green spaces in cities in general.\nLeo: That's a good idea. Then I could still include the gardens.\nProfessor: Exactly. And you might want to talk to Dana at the library. Dana helps students find sources every afternoon.\nLeo: Great, I'll go there after class. Can I still hand in my outline on Friday?\nProfessor: Let's say Monday, since you're changing your topic.",
      cast: { Professor: "female" },
    },
    {
      type: "text",
      title: "How a strong listener does it",
      body: "1. **Problem**: Leo “can't find enough sources” for the research paper. This answers “Why does Leo go to see the professor?”\n2. **Suggestions**: two pieces of advice. “Have you thought about making it a bit wider?” and “You might want to talk to Dana at the library.”\n3. **Accepted?** Yes, both: “That's a good idea” and “I'll go there after class.”\n4. **Plan**: Leo will visit the library after class, and the outline is now due on **Monday**, not Friday.\n\nA question like “When is the outline due?” has a trap: Friday is mentioned first, but the professor changes it.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice audio 1: at the career center",
      voice: "us",
      transcript:
        "Adviser: Hi, welcome to the Career Center. How can I help?\nStudent: Hi. I'm looking for a part-time job on campus, but I don't know where to start.\nAdviser: Well, all campus jobs are listed on the student website. Have you looked there?\nStudent: Yes, but most of them need experience, and I've never had a job.\nAdviser: I see. The library and the dining hall often hire first-year students with no experience. And you might want to come to our workshop on Thursday. It's about writing your first job application.\nStudent: Thursday afternoon? I have a science lab then.\nAdviser: There's an evening session too, at six.\nStudent: Perfect. I'll sign up for that one.",
      cast: { Adviser: "female", Student: "male" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "TOEFL-style questions",
        instructions: "Listen to the conversation. Choose the best answer to each question.",
        questions: [
          {
            prompt: "Why does the student go to the Career Center?",
            options: [
              "To get help finding a job on campus",
              "To complain about the student website",
              "To apply for a job at the library",
              "To change the time of a science lab",
            ],
            answer: 0,
            explanation: "“I'm looking for a part-time job on campus, but I don't know where to start.” The library is mentioned later, as the adviser's idea.",
          },
          {
            prompt: "Why does the adviser mention the library and the dining hall?",
            options: [
              "They pay more than other campus jobs.",
              "They are open in the evening.",
              "They often hire students without experience.",
              "The workshop takes place there.",
            ],
            answer: 2,
            explanation: "“The library and the dining hall often hire first-year students with no experience.” This answers the student's problem.",
          },
          {
            prompt: "What will the student probably do?",
            options: [
              "Go to the Thursday afternoon workshop",
              "Go to the evening workshop",
              "Ask the professor to change the lab",
              "Look at the student website again",
            ],
            answer: 1,
            explanation: "The student has a lab on Thursday afternoon, so the adviser offers the evening session at six: “Perfect. I'll sign up for that one.”",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 2: planning a first day at work",
      voice: "uk",
      transcript:
        "Amara: Kenji, Lucas, thanks for coming. As you know, our two new colleagues start on Monday, so let's plan their first day.\nKenji: Sure. I can set up their laptops and email accounts on Friday afternoon.\nAmara: Great, thanks, Kenji. Lucas, could you show them around the building on Monday morning?\nLucas: I'd love to, but I'm at a client meeting all Monday morning. I could take them out for lunch, though.\nAmara: OK, that works. Then I'll do the tour myself. And someone needs to order their ID cards.\nKenji: I'll do that too. I need to contact security about the laptops anyway.\nAmara: Perfect. Lucas, can you also send them the welcome pack today?\nLucas: No problem. I'll email it this afternoon.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Who will do it?",
        instructions: "Listen to the conversation. Match each task with the person who will do it. You can use a name more than once.",
        left: [
          "set up the laptops and email accounts",
          "show the new colleagues around the building",
          "take the new colleagues out for lunch",
          "order the ID cards",
          "send the welcome pack",
        ],
        right: ["Amara", "Kenji", "Lucas"],
        answer: [1, 0, 2, 1, 2],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "TOEIC-style questions",
        instructions: "Answer these questions about the same conversation. Listen again if you need to.",
        questions: [
          {
            prompt: "What are the speakers mainly discussing?",
            options: [
              "A meeting with a client",
              "Plans for new employees",
              "Problems with some laptops",
              "A change to security rules",
            ],
            answer: 1,
            explanation: "“Our two new colleagues start on Monday, so let's plan their first day.”",
          },
          {
            prompt: "Why can't Lucas give the tour?",
            options: [
              "Lucas will be at a client meeting.",
              "Lucas doesn't know the building well.",
              "Lucas starts work in the afternoon.",
              "Lucas is setting up the laptops.",
            ],
            answer: 0,
            explanation: "“I'm at a client meeting all Monday morning.” Lucas offers to do lunch instead.",
          },
          {
            prompt: "Why does Kenji offer to order the ID cards?",
            options: [
              "Kenji has done it many times before.",
              "Amara is too busy to do it.",
              "Kenji will be talking to security anyway.",
              "The ID cards are needed on Friday.",
            ],
            answer: 2,
            explanation: "“I'll do that too. I need to contact security about the laptops anyway.”",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 3: a tutorial about a project",
      voice: "uk",
      transcript:
        "Tutor: So, Mia and Omar, how's your project on local transport going?\nMia: Quite well. We've decided to do a survey of students about how they travel to college.\nTutor: Good. How many people will you ask?\nOmar: We were thinking fifty, but Mia thinks that's too many.\nMia: Yes, we only have two weeks. So we'll ask thirty.\nTutor: That's sensible. Will you do it online or face to face?\nOmar: Face to face, in the canteen at lunchtime. People are more likely to answer.\nTutor: And how will you show the results?\nMia: In a bar chart. Omar's good with spreadsheets.\nTutor: Fine. Remember, the presentation is ten minutes long, and it's on the eighteenth, not the eighth as it says on the old timetable.",
      cast: { Tutor: "male" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "Note completion: project plan",
        instructions: "Listen and complete the notes. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        text: "Project plan: Mia and Omar\n\nTopic: local {{0}}\nMethod: a {{1}} of students\nNumber of students to ask: {{2}}\nWhere: in the {{3}} at lunchtime\nResults shown in: a {{4}}\nLength of presentation: {{5}} minutes\nDate of presentation: the {{6}}",
        answers: [
          ["transport"],
          ["survey"],
          ["30", "thirty"],
          ["canteen"],
          ["bar chart"],
          ["10", "ten"],
          ["18th", "18", "eighteenth"],
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 4: what do they mean?",
      voice: "us",
      transcript:
        "Narrator: Number one.\nAna: Could you help me move these boxes this afternoon?\nBen: I'm completely swamped this week.\nNarrator: Number two.\nRosa: When's the deadline for the history essay?\nTom: Have you checked the course website?\nNarrator: Number three.\nHana: The printer on our floor is broken again.\nSam: The one on the third floor is working.\nNarrator: Number four.\nLiam: Can we have the team meeting in Room 2?\nZoe: That room only holds six people, and there are ten of us.\nNarrator: Number five.\nEmma: Did you enjoy the guest lecture?\nRyan: Well, I've heard better.",
      cast: { Narrator: "female", Sam: "male" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "mcq",
        title: "What does the second speaker mean?",
        instructions: "Listen to five short exchanges. Choose what the second speaker means.",
        questions: [
          {
            prompt: "Number one",
            options: ["Ben is too busy to help.", "Ben will help after the weekend.", "Ben has already moved the boxes.", "Ben doesn't know where the boxes are."],
            answer: 0,
            explanation: "“Swamped” means very busy, so Ben is saying no politely.",
          },
          {
            prompt: "Number two",
            options: ["Tom doesn't know what the essay is about.", "The deadline is on the course website.", "The website isn't working.", "Tom has already finished the essay."],
            answer: 1,
            explanation: "Tom answers with a question. It means the information is on the course website.",
          },
          {
            prompt: "Number three",
            options: ["Sam will repair the printer.", "Sam is going to the third floor now.", "Hana should use the printer on the third floor.", "All the printers are broken."],
            answer: 2,
            explanation: "Sam is suggesting a solution: use the printer that is working.",
          },
          {
            prompt: "Number four",
            options: ["Zoe agrees to book Room 2.", "Only six people can come to the meeting.", "Zoe wants to cancel the meeting.", "Room 2 is too small for the team."],
            answer: 3,
            explanation: "Room 2 holds six people, but there are ten, so they need a bigger room.",
          },
          {
            prompt: "Number five",
            options: ["Ryan missed the lecture.", "Ryan didn't think the lecture was very good.", "Ryan thought it was the best lecture of the year.", "Ryan couldn't hear the speaker."],
            answer: 1,
            explanation: "“I've heard better” is a polite way to say it wasn't very good.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toefl",
      body: "With only two questions per conversation, every line matters. Questions often ask why the speakers are talking, about a detail, or what happens next. If a speaker rejects one idea (“I have a lab then”), listen for the new plan that follows.",
    },
    {
      exam: "toeic",
      body: "Part 3 conversations can have two or three speakers. Read the three questions first and notice any names or jobs in them. Then listen for offers like “I can …” and “I'll …”: they tell you who will do each task.",
    },
    {
      exam: "ielts",
      body: "Part 3 is a conversation in an education or training context, for example students discussing a project with a tutor. Speakers often discuss an idea before they decide, so the first number or date you hear (“fifty”, “the eighth”) may not be the final answer.",
    },
  ],
  vocabulary: [
    { word: "source", meaning: "a book, article or website that gives you information for your work", example: "I need more sources for my research paper.", topic: "education" },
    { word: "outline", meaning: "a short plan that shows the main points of a piece of writing", example: "Please hand in your essay outline by Monday.", topic: "education" },
    { word: "office hours", meaning: "times when a teacher is in their office and students can visit", example: "I'll ask the professor about it in office hours.", topic: "education" },
    { word: "part-time", meaning: "working only some of the day or week", example: "Many students have part-time jobs on campus.", topic: "work" },
    { word: "workshop", meaning: "a short class where people learn a practical skill together", example: "The Career Center runs a workshop on job applications.", topic: "work" },
    { word: "sign up for", meaning: "to put your name on a list to join something", example: "I signed up for the evening session.", topic: "education" },
    { word: "set up", meaning: "to prepare a machine or system so it is ready to use", example: "Kenji will set up the new laptops on Friday.", topic: "technology" },
    { word: "welcome pack", meaning: "a set of useful information given to new people", example: "New staff get a welcome pack before their first day.", topic: "work" },
    { word: "survey", meaning: "a set of questions you ask many people to find out what they think or do", example: "We did a survey of thirty students.", topic: "education" },
    { word: "swamped", meaning: "(informal) extremely busy", example: "I'm swamped this week. Can we talk on Monday?", topic: "work" },
  ],
  keyPoints: [
    "College and work conversations usually move from a problem, to advice and options, to a plan.",
    "Notice suggestions (*Why don't you …?*, *You might want to …*) and whether they are accepted or rejected.",
    "In three-speaker conversations, listen for names, offers (*I'll …*) and requests (*Could you …?*) to know who does what.",
    "Speakers don't always answer directly. “I'm swamped” means no, and “Have you checked the website?” means the answer is there.",
  ],
};

export default lesson;
