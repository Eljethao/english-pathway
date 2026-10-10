import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-information-provided",
  title: "Answering from a schedule",
  summary:
    "Answer three questions about a schedule quickly and accurately, including correcting wrong information politely, for TOEIC Speaking: Respond to questions using information provided.",
  skill: "speaking",
  level: "B1",
  order: 10,
  minutes: 25,
  exams: [{ exam: "toeic", task: "Speaking – Respond to questions using information provided" }],
  objectives: [
    "Use 45 seconds of reading time to find the key information in a schedule",
    "Turn short notes in a table into full spoken sentences",
    "Correct wrong information politely: Actually, I'm afraid…",
    "List several items from a schedule clearly in 30 seconds",
  ],
  warmUp: [
    "When did you last read a timetable, a programme or an agenda? What did you need to find?",
    "How do you say these aloud: 9:30, 2:15 p.m., $25?",
  ],
  learn: [
    {
      type: "text",
      title: "The task",
      body: "In this part of the TOEIC Speaking test, you see a document on the screen, usually a schedule such as a conference programme, a training day, a travel plan or an interview timetable. You have **45 seconds to read it**.\n\nThen you **hear three questions**, often from a person who is calling for information. After each question you have only about **3 seconds** before you start speaking. You have **15 seconds** for each of the first two answers and **30 seconds** for the last one.",
    },
    {
      type: "text",
      title: "Three typical jobs",
      body: "The three questions usually ask you to do different things:\n\n1. **Find a detail.** *What time does the first session start, and where is it?* Give exactly what is asked, in a full sentence. Many questions have two parts, so answer both.\n2. **Correct a mistake.** Sometimes the caller says something that isn't true: *I heard the workshop costs twenty dollars. Is that right?* Check the schedule carefully and correct it politely.\n3. **List several things** (30 seconds). *Could you tell me about all the sessions in the afternoon?* Say how many there are, then give each one in order with its time and one or two details.",
    },
    {
      type: "table",
      title: "Say it, don't read it",
      headers: ["On the schedule", "Say"],
      rows: [
        ["9:00–10:30", "from nine to ten thirty"],
        ["12:15 p.m.", "at twelve fifteen / at a quarter past twelve"],
        ["Mon 14 Oct", "on Monday the fourteenth of October"],
        ["Rm 2B", "in room two B"],
        ["$25 / Free", "It costs twenty-five dollars. / It's free."],
        ["Dr Mensah", "Doctor Mensah"],
        ["CANCELLED", "I'm afraid that session has been cancelled."],
      ],
    },
    {
      type: "table",
      title: "Useful sentences",
      headers: ["Job", "Useful language"],
      rows: [
        ["Give a detail", "The workshop starts at… and it's in… / It takes place on…"],
        ["Confirm", "Yes, that's right. It starts at…"],
        ["Correct politely", "Actually, I'm afraid that's not quite right. It's on…, not… / I'm sorry, but that session has been cancelled."],
        ["List items", "There are two sessions in the afternoon. The first one is… After that,… Finally,…"],
        ["Extra help", "You'll need to… / Don't forget to… / You could go to… instead."],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Quick check: say it aloud",
        instructions: "Match each note from a schedule to the way you say it. There is one extra option that you do not need.",
        left: ["2:45 p.m.", "Rm 3C", "10:00–11:30", "Tues 3 June", "$40", "Dr Patel"],
        right: [
          "from ten to eleven thirty",
          "forty dollars",
          "at a quarter to three in the afternoon",
          "Doctor Patel",
          "in room three C",
          "at a quarter past two",
          "on Tuesday the third of June",
        ],
        answer: [2, 4, 0, 6, 1, 3],
      },
    },
  ],
  model: [
    {
      type: "table",
      title: "Greenford Library Skills Day: Saturday 12 April",
      headers: ["Time", "Session", "Room", "Leader"],
      rows: [
        ["9:30–10:00", "Welcome and coffee", "Main hall", "–"],
        ["10:00–11:30", "Writing a strong CV", "Room 1", "Anna Kowalski"],
        ["11:45–12:45", "Starting a small online shop", "Room 2", "David Osei"],
        ["12:45–1:45", "Lunch (not provided)", "–", "–"],
        ["1:45–3:00", "Job interview practice", "Room 1", "Anna Kowalski"],
        ["3:15–4:15", "Smartphone photography for beginners", "Room 3", "Mei Tanaka"],
        ["Note", "All sessions are free. Booking required for Job interview practice (12 places).", "", ""],
      ],
    },
    {
      type: "audio",
      title: "Model: three questions and answers",
      transcript:
        "Caller: Hi, I'm interested in the Skills Day at the library, and I have a few questions. What date is the Skills Day, and what time does the first session start?\nSpeaker: The Skills Day is on Saturday the twelfth of April. It starts at nine thirty with a welcome and coffee in the main hall, and the first workshop begins at ten.\nCaller: I heard I need to pay for the workshops. Is that right?\nSpeaker: Actually, I'm afraid that's not right. All the sessions are free. But you do need to book a place for the job interview practice, because there are only twelve places.\nCaller: Could you tell me about the sessions that Anna Kowalski is leading?\nSpeaker: Sure. Anna Kowalski is leading two sessions, and both of them are in Room 1. The first one is Writing a strong CV, from ten to eleven thirty in the morning. Then, after lunch, she's leading Job interview practice, from one forty-five to three. Remember that you need to book a place for the second one, because there are only twelve places.",
      cast: { Caller: "male", Speaker: "female" },
    },
    {
      type: "text",
      title: "How a strong speaker does it",
      body: "- **Question 1 (15 seconds)** has two parts, the date *and* the start time, so the answer gives both. The speaker turns *12 April* and *9:30* into natural spoken English.\n- **Question 2 (15 seconds)** contains wrong information. The speaker checks the schedule, then corrects it politely: *Actually, I'm afraid that's not right.* Then she adds one useful fact about booking.\n- **Question 3 (30 seconds)** needs a list. The speaker says how many items there are (*two sessions*), then gives each one in time order, with its time and room: *The first one… Then, after lunch…*\n- She never reads the table line by line. She only gives the information the caller asked for.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Choose the best answer",
        instructions: "Use the Greenford Library Skills Day schedule from the model. Choose the best spoken answer.",
        questions: [
          {
            prompt: "A caller asks: “Where is the photography session?”",
            options: [
              "Room 3.",
              "The smartphone photography session is in Room 3, from three fifteen to four fifteen.",
              "Smartphone photography for beginners, Mei Tanaka, Room 3, 3:15–4:15.",
            ],
            answer: 1,
            explanation: "It is a full, natural sentence with the room and a useful extra detail (the time). The first answer is too short, and the third just reads the table.",
          },
          {
            prompt: "A caller says: “Lunch is included, right?”",
            options: [
              "Yes, that's right.",
              "Actually, I'm afraid lunch isn't provided, so you'll need to bring your own or buy something nearby.",
              "Lunch is from twelve forty-five to one forty-five.",
            ],
            answer: 1,
            explanation: "The schedule says “Lunch (not provided)”, so the caller is wrong. A good answer corrects this politely and adds useful advice.",
          },
          {
            prompt: "Which is the best way to start a 30-second answer about the morning workshops?",
            options: [
              "There are two workshops in the morning, after the welcome coffee.",
              "OK, so, um, let me see what the schedule says here.",
              "Nine thirty, ten, eleven forty-five.",
            ],
            answer: 0,
            explanation: "Saying how many items there are helps the listener follow the list. The other starts waste time or just read out numbers.",
          },
          {
            prompt: "A caller asks: “Is David Osei's session in the afternoon?”",
            options: [
              "Yes, it's at one forty-five.",
              "No, it starts in the late morning, at eleven forty-five, and finishes at twelve forty-five.",
              "No, I'm afraid it's been cancelled.",
            ],
            answer: 1,
            explanation: "David Osei's session (Starting a small online shop) is from 11:45 to 12:45. Nothing on this schedule is cancelled.",
          },
          {
            prompt: "During the 45 seconds of reading time, what is the most useful thing to do?",
            options: [
              "Read every word aloud quietly.",
              "Check the title, date and place, then look at the times, rooms and any notes, such as “not provided” or “booking required”.",
              "Try to memorise the names of all the speakers.",
            ],
            answer: 1,
            explanation: "Questions often ask about the date and place, times and small notes. You can see the schedule while you answer, so you don't need to memorise it.",
          },
        ],
      },
    },
    {
      type: "text",
      title: "Your turn: three questions",
      body: "1. Read the schedule below for **45 seconds**. Use a timer.\n2. Before each task, play the question. Try not to read it first; in the real test you only hear it.\n3. Press Start. You have about 3 seconds before you speak, then 15 or 30 seconds to answer.",
    },
    {
      type: "table",
      title: "Lakeside Hotel Sales Conference: Thursday 6 November",
      headers: ["Time", "Event", "Location", "Speaker"],
      rows: [
        ["8:30–9:00", "Registration and breakfast", "Lobby", "–"],
        ["9:00–9:45", "Opening talk: Our year in numbers", "Ballroom", "Carla Diaz, Sales Director"],
        ["10:00–11:00", "Workshop: Winning new customers", "Room A", "Tom Becker"],
        ["11:00–12:00", "Workshop: Using our new booking app", "Room B", "Priya Nair"],
        ["12:00–1:00", "Lunch", "Garden Restaurant", "–"],
        ["1:00–2:00", "Panel discussion: The future of online sales", "Ballroom", "Three regional managers"],
        ["2:15–3:00", "Workshop: Dealing with difficult calls (CANCELLED)", "Room A", "Tom Becker"],
        ["3:00–3:30", "Closing remarks", "Ballroom", "Carla Diaz"],
        ["Note", "Please bring your staff ID card. Parking is free for conference guests.", "", ""],
      ],
    },
    {
      type: "audio",
      title: "Question 1 (15 seconds)",
      transcript:
        "Hello, I'm going to the sales conference next week, and I have a few questions. Where is the conference, and what time does registration start?",
      cast: { narrator: "female" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "speak",
        title: "Question 1: find the details",
        instructions: "Use the Lakeside Hotel Sales Conference schedule. Play Question 1 above, then answer both parts of the question in a full sentence.",
        prompt: "“Where is the conference, and what time does registration start?”",
        prepSeconds: 3,
        speakSeconds: 15,
        modelAnswer:
          "The conference is at the Lakeside Hotel on Thursday the sixth of November. Registration starts at eight thirty in the lobby, and there's breakfast at the same time, so you can eat when you arrive.",
        targetPhrases: ["The conference is at", "Registration starts at", "in the lobby"],
        checklist: [
          "I answered both parts: the place and the registration time.",
          "I said the time naturally (eight thirty), not by reading the table.",
          "I used a full sentence and started quickly.",
          "I finished within 15 seconds.",
        ],
      },
    },
    {
      type: "audio",
      title: "Question 2 (15 seconds)",
      transcript:
        "I'd really like to go to Tom Becker's workshop on dealing with difficult calls in the afternoon. That's still happening, isn't it?",
      cast: { narrator: "female" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "Question 2: correct the caller politely",
        instructions: "Use the Lakeside Hotel Sales Conference schedule. Play Question 2 above. The caller has the wrong idea: correct it politely, then offer something useful.",
        prompt: "“I'd really like to go to Tom Becker's workshop on dealing with difficult calls in the afternoon. That's still happening, isn't it?”",
        prepSeconds: 3,
        speakSeconds: 15,
        modelAnswer:
          "I'm afraid that workshop has been cancelled. But Tom Becker is also leading a workshop called Winning new customers, from ten to eleven in the morning in Room A, so you could go to that one instead.",
        targetPhrases: ["I'm afraid", "has been cancelled", "you could go to"],
        checklist: [
          "I corrected the information politely (I'm sorry, but… / I'm afraid…).",
          "I used the correct facts from the schedule.",
          "I offered a useful alternative.",
          "I finished within 15 seconds.",
        ],
      },
    },
    {
      type: "audio",
      title: "Question 3 (30 seconds)",
      transcript: "Could you tell me what's happening in the Ballroom during the day?",
      cast: { narrator: "female" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "Question 3: list the events",
        instructions: "Use the Lakeside Hotel Sales Conference schedule. Play Question 3 above. Say how many events there are, then give each one in time order with its time and one detail.",
        prompt: "“Could you tell me what's happening in the Ballroom during the day?”",
        prepSeconds: 3,
        speakSeconds: 30,
        modelAnswer:
          "Sure. There are three events in the Ballroom. First, at nine o'clock, the sales director, Carla Diaz, is giving the opening talk, called Our year in numbers. It finishes at nine forty-five. Then, after lunch, from one to two, there's a panel discussion on the future of online sales with three regional managers. Finally, Carla Diaz is giving the closing remarks from three to three thirty.",
        targetPhrases: ["There are three events", "First", "Then, after lunch", "Finally"],
        checklist: [
          "I said how many events there are before listing them.",
          "I gave all three events in time order, with their times.",
          "I used First, Then and Finally to guide the listener.",
          "I spoke in full sentences, not just times and names.",
          "I used most of the 30 seconds and didn't stop halfway.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "Use the 45 seconds of reading time well: check the title, date and place first, then the times, rooms and names. Look carefully at small notes such as *cancelled*, *not provided* or *booking required*. They are easy to miss, and they are often what a caller has got wrong.",
    },
    {
      exam: "toeic",
      body: "Answer in full spoken sentences, not by reading the table: *The workshop starts at ten in Room A*, not *Ten, Room A*. In the 30-second answer, start by saying how many items there are, then give them in time order.",
    },
    {
      exam: "toeic",
      body: "You have only about 3 seconds after each question, so start with words from the question: *Registration starts at…* If you make a small mistake, correct it quickly (*sorry, I mean ten thirty*) and keep going.",
    },
  ],
  vocabulary: [
    { word: "schedule", meaning: "a plan that shows the times of events or activities", example: "The schedule shows three workshops in the afternoon.", topic: "business" },
    { word: "agenda", meaning: "a list of things to discuss or do at a meeting or event", example: "The first item on the agenda is the budget.", topic: "business" },
    { word: "session", meaning: "a period of time for one activity, such as a talk or class", example: "The morning session finishes at noon.", topic: "work" },
    { word: "registration", meaning: "putting your name on a list when you arrive at, or before, an event", example: "Registration opens at eight thirty.", topic: "business" },
    { word: "workshop", meaning: "a meeting where people learn a skill by doing practical activities", example: "I went to a workshop on public speaking.", topic: "work" },
    { word: "panel discussion", meaning: "a discussion where a group of experts answer questions in front of an audience", example: "There's a panel discussion after lunch.", topic: "business" },
    { word: "cancelled", meaning: "stopped, so it will not happen", example: "The 2:15 workshop has been cancelled.", topic: "everyday" },
    { word: "book a place", meaning: "to arrange in advance to go to something", example: "You need to book a place because there are only twelve seats.", topic: "everyday" },
    { word: "provided", meaning: "given to you, so you don't need to bring it or pay for it", example: "Lunch is not provided, so bring your own.", topic: "business" },
    { word: "lobby", meaning: "the large entrance area in a hotel or office building", example: "Let's meet in the hotel lobby.", topic: "travel" },
    { word: "venue", meaning: "the place where an event happens", example: "The venue is a hotel near the station.", topic: "business" },
  ],
  keyPoints: [
    "You get 45 seconds to read the schedule, then three questions: 15, 15 and 30 seconds, with about 3 seconds before each answer.",
    "Answer exactly what is asked, in full spoken sentences; don't read the table aloud.",
    "Turn notes into speech: 9:00–10:30 → from nine to ten thirty.",
    "Correct wrong information politely: Actually, I'm afraid… / I'm sorry, but that session has been cancelled.",
    "For the 30-second answer, say how many items there are, then give them in order with First, Then and Finally.",
  ],
};

export default lesson;
