import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-schedules-documents",
  title: "Questions about schedules and documents",
  summary:
    "Handle TOEIC Speaking “Respond to questions using information provided” at B2: read a busy schedule in 45 seconds, turn notes into full spoken sentences, correct wrong information politely and summarise several items in 30 seconds.",
  skill: "speaking",
  level: "B2",
  order: 9,
  minutes: 25,
  exams: [{ exam: "toeic", task: "Speaking – Respond to questions using information provided" }],
  objectives: [
    "Use 45 seconds of reading time to find the information the questions are likely to need",
    "Turn times, abbreviations and notes into natural spoken sentences",
    "Correct a caller's wrong information politely and give the right details",
    "Summarise two or three items clearly in a 30-second answer",
  ],
  warmUp: [
    "When you look at a conference programme, a train timetable or a class schedule, what information do you look for first?",
  ],
  learn: [
    {
      type: "text",
      title: "How the task works",
      body: "Questions 8–10 of the TOEIC Speaking test show you a document on screen: for example, a conference programme, a travel itinerary, an interview schedule or a training timetable. You have **45 seconds to read it** before the questions begin. Then a speaker, often someone phoning for information, asks you three questions about it.\n\n- For each question you have **3 seconds to prepare**.\n- You have **15 seconds to answer questions 8 and 9**.\n- You have **30 seconds to answer question 10**, and you hear question 10 **two times**.\n\nThe information is all on the screen, so this task is not about ideas. It tests whether you can find the right detail fast and say it **accurately, completely and in clear spoken English**.",
    },
    {
      type: "table",
      title: "What the three questions often ask",
      headers: ["Question", "Timing", "Often asks…", "What to do"],
      rows: [
        ["8", "3 s to prepare, 15 s to answer", "For basic facts: When does it start, and where is it?", "Find the detail and answer every part of the question in one or two full sentences."],
        ["9", "3 s to prepare, 15 s to answer", "To check something the caller believes, which may be wrong: I heard the workshop is on Friday. Is that right?", "Check the document. If the caller is wrong, correct them politely and give the right information."],
        ["10", "Heard twice; 3 s to prepare, 30 s to answer", "For a summary: Can you tell me about all the sessions after lunch?", "Say how many items there are, then give each one with its time, title and person or place."],
      ],
    },
    {
      type: "text",
      title: "Turning notes into speech",
      body: "Documents use notes and abbreviations, not sentences. Reading them aloud word for word (*Ten fifteen, eleven, Room three B*) sounds like a list and may confuse the listener. Turn them into full sentences, with the right prepositions:\n\n- **at** + a time: *at nine thirty*\n- **on** + a day or date: *on Thursday*, *on the twelfth of November*\n- **in** + a room, a month or part of the day: *in Room 204*, *in May*, *in the afternoon*\n- **from… to / until…** for a period: *from ten fifteen to eleven*\n\nSay abbreviations in full: *Q&A* → a question-and-answer session, *TBC* → still to be confirmed, *Rm* → Room, *Dept.* → department, *a.m. / p.m.* → in the morning / in the afternoon or evening. Room numbers are often said digit by digit: *Room 204* → Room two-oh-four.",
    },
    {
      type: "example",
      title: "Useful sentence frames",
      items: [
        "The conference starts **at** nine thirty **on** Thursday, **in** the main hall.",
        "**Actually, I'm afraid that's not quite right.** The workshop has been moved to Friday afternoon.",
        "**Don't worry,** you won't miss it. It starts at two, straight after lunch.",
        "**There are two sessions** on marketing. **The first one is**… **The second one is**…",
        "**According to the schedule,** lunch will be served in the café on the ground floor.",
        "**I'm sorry, but** that session has been cancelled.",
      ],
    },
    {
      type: "tip",
      exam: "toeic",
      body: "Raters judge whether your answers are **accurate and complete** as well as your language. If a question has two parts (*when and where*), answer both. A short, correct sentence is better than a long answer with the wrong time.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: say it naturally",
        questions: [
          {
            prompt: "The schedule says “10:15–11:00 a.m. Workshop: Social media for small businesses, Rm 3B”. A caller asks, “When and where is the social media workshop?” Which answer is best?",
            options: [
              "Ten fifteen, eleven, Room three B.",
              "It's from ten fifteen to eleven in the morning, in Room three B.",
              "The workshop is at Room three B in ten fifteen.",
              "It's in the morning, I think.",
            ],
            answer: 1,
            explanation: "It answers both parts (when and where) in a full sentence with the right prepositions: from… to…, in Room…",
          },
          {
            prompt: "The itinerary says “6:30 p.m. Shuttle bus to hotel”. A caller says, “The shuttle bus leaves at seven, right?” Which answer is best?",
            options: [
              "No, you're wrong.",
              "Yes, that's right, at seven.",
              "Actually, I'm afraid it leaves a bit earlier, at six thirty in the evening.",
              "The shuttle is a bus to the hotel.",
            ],
            answer: 2,
            explanation: "The caller is wrong, so you need to correct them, politely, and give the right time. “No, you're wrong” sounds rude, and it doesn't give the correct information.",
          },
          {
            prompt: "Choose the correct prepositions: “The training session is ___ Tuesday ___ two o'clock.”",
            options: ["in / at", "on / at", "at / on", "on / in"],
            answer: 1,
            explanation: "On + a day, at + a clock time.",
          },
          {
            prompt: "A document says “Guest speaker: TBC”. How should you say this?",
            options: [
              "The guest speaker is T, B, C.",
              "The guest speaker has been cancelled.",
              "The guest speaker is still to be confirmed.",
              "There isn't a guest speaker.",
            ],
            answer: 2,
            explanation: "TBC means to be confirmed: a speaker is planned, but the name has not been announced yet.",
          },
          {
            prompt: "Question 10 asks about “all the events on the second day”. There are three. Which is the best way to begin?",
            options: [
              "There are three events on the second day.",
              "Second day: many events.",
              "Let me see… um… let me see…",
              "The second day is very busy, so it is difficult to say.",
            ],
            answer: 0,
            explanation: "Saying how many items there are helps the listener follow, and it gives you a plan for the rest of your 30 seconds: the first one…, the second one…, and finally…",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "table",
      title: "Hartwell Bank · New staff orientation · Monday 2 November · Head office, 5th floor",
      headers: ["Time", "Session", "Led by", "Location"],
      rows: [
        ["8:45–9:15 a.m.", "Welcome and coffee", "Maria Lopez, HR Director", "Staff lounge"],
        ["9:15–10:30 a.m.", "Company history and values", "Maria Lopez", "Room 501"],
        ["10:45 a.m.–12:00 p.m.", "Workshop: Data security", "Kevin Osei, IT", "Room 503"],
        ["12:00–1:00 p.m.", "Lunch (provided)", "—", "Staff café"],
        ["1:00–2:30 p.m.", "Workshop: Customer service", "Hana Ito", "Room 501"],
        ["2:45–4:00 p.m.", "Tour of branch offices", "Kevin Osei", "Meet at reception"],
      ],
    },
    {
      type: "audio",
      title: "Model: questions 8–10",
      voice: "us",
      cast: { Caller: "male", Candidate: "female" },
      transcript:
        "Caller: Hi, I'm starting at the bank next month, and I'd like some information about the orientation day. What time does it start, and where should I go?\nCandidate: It starts at eight forty-five in the morning, with a welcome and coffee. You should go to the staff lounge, which is on the fifth floor of the head office.\nCaller: I heard that Maria Lopez is leading the customer service workshop. Is that right?\nCandidate: Actually, I'm afraid that's not quite right. Maria Lopez is leading the welcome and the session on company history. The customer service workshop is led by Hana Ito, from one to two thirty.\nCaller: Could you tell me about the sessions that Kevin Osei is leading?\nCandidate: Sure. Kevin Osei is leading two sessions. The first one is a workshop on data security. That's in the morning, from ten forty-five until twelve, in Room five-oh-three. The second one is in the afternoon, from two forty-five to four, when he's giving a tour of the branch offices. For that one, you should meet him at reception.",
    },
    {
      type: "text",
      title: "How a strong candidate does it",
      body: "- **Question 8** has two parts (*what time* and *where*), and the answer covers both in two short sentences. It also adds *on the fifth floor* from the title of the document, which makes the answer complete.\n- **Question 9** is based on wrong information. The candidate corrects it politely (*Actually, I'm afraid that's not quite right*), explains what Maria Lopez really does, and then gives the correct leader **and** the time.\n- **Question 10** starts with the number of items (*Kevin Osei is leading two sessions*), then uses *The first one is… The second one is…* For each session, the answer gives the title, the time and the place, plus the useful note *meet him at reception*.\n- **Notes become speech**: *10:45 a.m.–12:00 p.m.* → *from ten forty-five until twelve*; *Room 503* → *Room five-oh-three*.\n- **Timing**: each answer fits inside its time at a calm, natural pace (about 30 words for 15 seconds, about 60 words for 30 seconds).",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "From notes to sentences",
        instructions: "Each note comes from a schedule. Complete the spoken sentence with one word in each gap.",
        text: "“9:00–9:30 a.m. Registration, Lobby” → Registration is {{0}} nine {{1}} nine thirty, {{2}} the lobby.\n“Thu 12 Nov: Sales meeting” → The sales meeting is {{3}} Thursday the twelfth of November.\n“Product launch – CANCELLED” → I'm afraid the product launch {{4}} been cancelled.\n“Speaker: TBC” → The speaker is still {{5}} be confirmed.\n“Lunch (provided)” → Lunch {{6}} provided, so you don't need to bring anything.",
        answers: [["from", "between"], ["to", "until", "till", "and"], ["in"], ["on"], ["has"], ["to"], ["is"]],
      },
    },
    {
      type: "table",
      title: "Greenfield Regional Tourism Conference · Friday 21 May · Lakeview Hotel",
      headers: ["Time", "Session", "Speaker(s)", "Room"],
      rows: [
        ["9:00–9:30 a.m.", "Registration and breakfast", "—", "Lobby"],
        ["9:30–10:30 a.m.", "Keynote: The future of eco-tourism", "Prof. Sara Whitfield", "Ballroom"],
        ["10:45–11:45 a.m.", "Panel: Marketing small hotels online", "Daniel Park, Leo Brandt", "Room A"],
        ["11:45 a.m.–1:00 p.m.", "Lunch (included in registration)", "—", "Garden Restaurant"],
        ["1:00–2:00 p.m.", "Workshop: Using customer reviews", "Leo Brandt", "Room B"],
        ["2:15–3:15 p.m.", "Workshop: Planning group tours", "Amira Haddad", "Room A"],
        ["3:30–4:00 p.m.", "Closing remarks", "Prof. Sara Whitfield", "Ballroom"],
      ],
    },
    {
      type: "text",
      title: "Before you answer",
      body: "Set a timer and read the conference programme for **45 seconds**, as in the real test. Then answer questions 8, 9 and 10 below without looking at the model answers. Each question gives you 3 seconds to prepare. For question 10, read the question twice before you start, because in the test you hear it two times.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "speak",
        title: "Question 8 (15 seconds)",
        instructions: "Answer every part of the question in one or two full sentences.",
        prompt: "Caller: Hi, I'm planning to attend the tourism conference. Could you tell me the date of the conference and where it's being held?",
        prepSeconds: 3,
        speakSeconds: 15,
        modelAnswer:
          "Sure. The conference is on Friday the twenty-first of May, and it's being held at the Lakeview Hotel. It starts with registration and breakfast in the lobby at nine in the morning.",
        targetPhrases: ["on Friday", "it's being held at", "Lakeview Hotel"],
        checklist: [
          "I gave both the date and the place.",
          "I used full sentences, not just notes.",
          "I used the right prepositions (on + date, at / in + place).",
          "I finished within 15 seconds.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "Question 9 (15 seconds)",
        instructions: "Check the programme. If the caller is wrong, correct them politely and give the right information.",
        prompt: "Caller: I'd really like to go to Leo Brandt's workshop on customer reviews. I think it starts at two o'clock. Is that right?",
        prepSeconds: 3,
        speakSeconds: 15,
        modelAnswer:
          "Actually, I'm afraid it starts a bit earlier than that. Leo Brandt's workshop on using customer reviews is from one to two in the afternoon, in Room B, so it's straight after lunch.",
        targetPhrases: ["actually", "I'm afraid", "a bit earlier", "in the afternoon"],
        checklist: [
          "I corrected the caller politely (Actually, I'm afraid…).",
          "I gave the correct time, not just “No”.",
          "I added the room, so the answer was complete.",
          "I finished within 15 seconds.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "Question 10 (30 seconds)",
        instructions: "Read the question twice, as you would hear it twice in the test. Say how many sessions there are, then give the details of each one.",
        prompt: "Caller: I'm mainly interested in the sessions in Room A. Could you give me the details of everything that's happening in that room?",
        prepSeconds: 3,
        speakSeconds: 30,
        modelAnswer:
          "Sure. There are two sessions in Room A. The first one is in the morning, from ten forty-five to eleven forty-five. It's a panel discussion on marketing small hotels online, with Daniel Park and Leo Brandt. The second one is in the afternoon, from two fifteen to three fifteen. It's a workshop on planning group tours, and it's led by Amira Haddad.",
        targetPhrases: ["sessions in Room A", "the first one is", "the second one is", "led by"],
        checklist: [
          "I said how many sessions there were before giving details.",
          "I included both Room A sessions and nothing from other rooms.",
          "For each session I gave the title, the time and the speaker.",
          "I used linking phrases (The first one… The second one…).",
          "I finished within 30 seconds without rushing.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "Use the 45 seconds of reading time actively. Read the title, date and place first, then scan the times, names and any notes such as *cancelled*, *moved*, *provided* or *TBC*. The harder questions often depend on exactly these details.",
    },
    {
      exam: "toeic",
      body: "Question 10 is asked two times. Use the second hearing to find every matching item on the document and count them, so you can start with *There are two / three…* as soon as your preparation time ends.",
    },
    {
      exam: "toeic",
      body: "Don't read the document aloud as notes (*One, two, Room B*). Full, accurate sentences with the right prepositions (*It's from one to two in Room B*) are clearer and show the rater you can use the language, not just copy the words.",
    },
  ],
  vocabulary: [
    { word: "itinerary", meaning: "a detailed plan of a journey, with times and places", example: "Our itinerary includes two nights in Rome.", topic: "travel" },
    { word: "orientation", meaning: "an introduction to a new job, school or place", example: "New staff attend an orientation on their first day.", topic: "work" },
    { word: "keynote", meaning: "the main talk at a conference, usually by an important speaker", example: "The keynote was given by a well-known economist.", topic: "business" },
    { word: "panel (discussion)", meaning: "a discussion by a group of experts in front of an audience", example: "She took part in a panel on green energy.", topic: "business" },
    { word: "be held", meaning: "(of an event) to take place", example: "The meeting will be held in Room 2.", topic: "business" },
    { word: "venue", meaning: "the place where an event happens", example: "The venue has space for five hundred guests.", topic: "business" },
    { word: "registration", meaning: "the process of signing up or checking in for an event", example: "Registration opens at eight in the morning.", topic: "business" },
    { word: "reschedule", meaning: "to change the time or date of a planned event", example: "The interview has been rescheduled for Friday.", topic: "work" },
    { word: "to be confirmed (TBC)", meaning: "not yet decided or officially announced", example: "The name of the speaker is still to be confirmed.", topic: "business" },
    { word: "lead a session", meaning: "to be in charge of and run a meeting, class or workshop", example: "Ms Ito will lead the afternoon session.", topic: "work" },
  ],
  keyPoints: [
    "You get 45 seconds to read the document and 3 seconds to prepare for each question: 15 seconds for questions 8 and 9, 30 seconds for question 10, which you hear twice.",
    "Answer in full sentences with the right prepositions: at + time, on + day or date, in + room.",
    "When the caller has the wrong information, correct it politely (Actually, I'm afraid…) and give the right details.",
    "For the summary question, say how many items there are, then give each one with its time, title and person.",
    "Notes such as cancelled, moved and TBC are often the key to the harder questions.",
  ],
};

export default lesson;
