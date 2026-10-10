import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-b1-review-test",
  title: "B1 reading review test",
  summary:
    "A 45-minute review test for the B1 reading course: everyday texts, a timetable, a short article and grammar tasks in IELTS, TOEFL and TOEIC style, with 41 questions and full explanations.",
  skill: "reading",
  level: "B1",
  order: 12,
  minutes: 45,
  exams: [
    { exam: "ielts", task: "Reading – Matching headings" },
    { exam: "ielts", task: "Reading – True/False/Not Given" },
    { exam: "ielts", task: "Reading – Short-answer questions" },
    { exam: "toefl", task: "Reading – Read in Daily Life" },
    { exam: "toefl", task: "Reading – Complete the Words" },
    { exam: "toeic", task: "Reading Part 5 – Incomplete Sentences" },
    { exam: "toeic", task: "Reading Part 7 – Reading Comprehension" },
  ],
  objectives: [
    "Complete 41 questions in mixed IELTS, TOEFL and TOEIC formats under timed conditions",
    "Use the strategies from the B1 course: skimming, scanning, guessing words from context, reference words, fact and opinion, word forms and multiple choice",
    "Use your results to decide which B1 lessons to review",
  ],
  warmUp: [
    "Which lesson in the B1 reading course helped you most? Which question type is still difficult for you?",
    "You have 45 minutes for five sections. How will you make sure you reach the last section?",
  ],
  learn: [
    {
      type: "text",
      title: "How this test works",
      body: "This test reviews the whole B1 reading course. It has **five sections** and **41 questions**, and you have **45 minutes**.\n\n- Section 1: a notice and an email (multiple choice)\n- Section 2: a museum timetable (short answers)\n- Section 3: a short article (main ideas, True/False/Not Given and multiple choice)\n- Section 4: sentences with a gap (word forms and tenses)\n- Section 5: a paragraph with half-words (TOEFL Complete the Words)\n\nStart the timer on each passage when you begin it, and move on when it ends. Answer every question, even if you have to guess. Check your answers only after you finish all five sections.",
    },
    {
      type: "table",
      title: "Your time plan",
      headers: ["Section", "Questions", "Time", "Skills from the course"],
      rows: [
        ["1. Notice and email: Northside Recycling Centre", "1–5", "7 minutes", "Notices and emails, multiple-choice strategies"],
        ["2. Timetable: Hillcrest Museum workshops", "6–10", "6 minutes", "Scanning, timetables and tables"],
        ["3. Article: All aboard the walking bus", "11–25", "17 minutes", "Skimming, True/False/Not Given, vocabulary from context, reference words, fact or opinion"],
        ["4. Incomplete sentences", "26–31", "5 minutes", "Word forms and verb tenses"],
        ["5. Complete the Words", "32–41", "5 minutes", "Word forms, spelling and grammar"],
        ["Check your answers", "", "5 minutes", ""],
      ],
    },
    {
      type: "table",
      title: "After the test: what your score suggests",
      headers: ["Score (out of 41)", "What it suggests", "Next step"],
      rows: [
        ["36–41", "Secure B1 reading; ready for B2", "Start the B2 reading course"],
        ["28–35", "Good B1 with one or two weak areas", "Review the lesson for the section where you lost most marks"],
        ["19–27", "Developing B1", "Repeat lessons 1–4 (skimming, scanning, vocabulary, notices) and the lesson for your weakest section"],
        ["0–18", "Core B1 skills need more practice", "Work through the B1 course again, slowly, and do every exercise twice"],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "This score guide is only approximate. Real exams use complete tests, and each exam changes raw scores into band or scale scores in its own way.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "Warm-up extract: the new bike lane",
      paragraphs: [
        "Last month, the city opened a new bike lane along River Road. It is 3 kilometres long and goes from the train station to the university. The council says it will make cycling safer. However, some shop owners are not happy. They say their customers can no longer park outside, and they have lost business. In my view, the lane is an excellent idea.",
      ],
    },
    {
      type: "text",
      title: "Four reminders before you start",
      body: "**Scan for the detail.** *How long is the bike lane?* Scan for a number: **3 kilometres**. Read the whole sentence to check it is about the lane.\n\n**False or Not Given?** *Statement: The bike lane goes to the hospital.* The text says it goes from the station to the university → **False**. *Statement: The bike lane cost a lot of money.* The text says nothing about cost → **Not Given**.\n\n**Follow the reference word.** In *They say their customers…*, *They* = **some shop owners**. Look back to the nearest noun that makes sense.\n\n**Fact or opinion?** *It is 3 kilometres long* is a fact: you can check it. *The lane is an excellent idea* is the writer's opinion: *In my view* and *excellent* show this.\n\nNow start Section 1 and its timer.",
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Section 1: Notice and email",
      timerMinutes: 7,
      paragraphs: [
        "Text 1: Notice",
        "Northside Recycling Centre: new opening hours and rules",
        "From Monday 2 September, the centre will be open from 8 a.m. to 6 p.m., Monday to Saturday. It will be closed on Sundays.",
        "Cars can enter without booking. Vans and trailers must book a time on our website at least 24 hours before they visit.",
        "Garden waste, glass, paper and metal are free. There is a charge of £5 per item for large furniture, such as sofas and beds. We cannot accept paint or car batteries; please take these to the Southfield centre instead.",
        "Staff can help you lift heavy items. Please ask at the gate when you arrive.",
        "Text 2: Email",
        "From: Paul Grant | To: Northside Recycling Centre | Subject: Visit on Saturday",
        "Hello, I'm moving house next week, and I'd like to bring some things to the centre on Saturday morning. I'll be using a small van that I'm borrowing from a friend. I have an old sofa, two bags of garden waste, two half-full tins of paint and a box of glass bottles. Can I bring everything to Northside? Also, I hurt my back last month, so I may need some help with the sofa. Thanks, Paul",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Questions 1–5",
        instructions: "Read the notice and the email. Choose the best answer.",
        questions: [
          {
            prompt: "1. What is the notice mainly about?",
            options: [
              "Changes at the recycling centre",
              "The opening of a new recycling centre",
              "Why recycling is important",
              "Jobs at the recycling centre",
            ],
            answer: 0,
            explanation: "The notice gives new opening hours and rules. Nothing says the centre is new (B), and C and D are not in the text.",
          },
          {
            prompt: "2. What must Paul do before his visit?",
            options: [
              "Pay £5 on the website",
              "Phone the Southfield centre",
              "Ask a friend to help him",
              "Book a time online",
            ],
            answer: 3,
            explanation: "Paul is using a van, and “Vans and trailers must book a time on our website at least 24 hours before they visit.”",
          },
          {
            prompt: "3. How much will Paul probably pay at Northside?",
            options: ["Nothing", "£5", "£10", "£15"],
            answer: 1,
            explanation: "Only the sofa costs money (£5 per item of large furniture). Garden waste and glass are free, and Northside cannot accept the paint.",
          },
          {
            prompt: "4. Which of Paul's things should he take to Southfield?",
            options: ["The sofa", "The garden waste", "The paint", "The glass bottles"],
            answer: 2,
            explanation: "“We cannot accept paint or car batteries; please take these to the Southfield centre instead.”",
          },
          {
            prompt: "5. What should Paul do about his sofa when he arrives?",
            options: [
              "Leave it outside the gate",
              "Ask the staff at the gate for help",
              "Come back on a Sunday",
              "Bring it in a car instead",
            ],
            answer: 1,
            explanation: "Paul has a bad back. The notice says “Staff can help you lift heavy items. Please ask at the gate when you arrive.” A is a word trap: *gate* is in the text, but nothing says to leave things there.",
          },
        ],
      },
    },
    {
      type: "table",
      title: "Section 2: Hillcrest Museum – summer workshops for children",
      headers: ["Workshop", "Day", "Time", "Ages", "Price"],
      rows: [
        ["Fossil detectives", "Monday", "10.00–11.30", "6–8", "£6"],
        ["Build a robot", "Tuesday", "14.00–16.00", "9–12", "£10"],
        ["Ancient Egypt: make a mask", "Wednesday", "10.00–12.00", "6–12", "£8"],
        ["Draw like an artist", "Thursday", "14.00–15.30", "9–12", "£6"],
        ["Night at the museum", "Friday", "18.00–20.00", "8–12", "£12"],
      ],
    },
    {
      type: "passage",
      title: "Hillcrest Museum: workshop notes",
      timerMinutes: 6,
      paragraphs: [
        "All workshops take place in the Learning Room on the first floor. Children aged 6–8 must come with an adult. Adults do not pay.",
        "You must book a place: book online or at the information desk. Museum members get 20% off all workshop prices.",
        "Please arrive ten minutes before the start time. For Night at the museum, each child should bring a torch and a snack.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Questions 6–10",
        instructions:
          "Use the timetable and the notes. Answer the questions. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
        text: "6. On which day can an eleven-year-old learn about robots? {{0}}\n7. What will children make in the Wednesday workshop? {{1}}\n8. In which room do all the workshops take place? {{2}}\n9. What must each child bring to the Friday workshop, as well as a snack? {{3}}\n10. A museum member books one place on Build a robot. How much do they pay? {{4}}",
        answers: [
          ["Tuesday", "on Tuesday"],
          ["a mask", "mask", "masks", "an Egyptian mask", "Egyptian mask", "an Ancient Egyptian mask"],
          ["the Learning Room", "Learning Room"],
          ["a torch", "torch"],
          ["£8", "8", "8 pounds", "eight pounds", "£8.00", "£ 8"],
        ],
      },
    },
    {
      type: "passage",
      title: "Section 3: All aboard the walking bus",
      labelled: true,
      timerMinutes: 17,
      paragraphs: [
        "Every morning at 8.15, a line of about twenty children in bright yellow jackets leaves the car park of the Green Lane shops in Marston. Two adults walk at the front and one at the back. This is the Marston “walking bus”: a group of children who walk to school together along a fixed route, with stops where more children can join, just like a real bus.",
        "The idea started three years ago, when parents at Marston Primary School became worried about traffic. Every morning, hundreds of cars stopped outside the school gates, and the road became dangerous. “Parents were driving their children because they thought walking wasn't safe,” says Helen Shaw, who organised the first walking bus. “But the cars were the reason it wasn't safe.”",
        "Today there are three routes, and about sixty children use them. Each route has a timetable, and the “drivers” are parents, grandparents and other volunteers. They all have safety training before they start. When it rains, the bus still runs, but the children are given waterproof covers for their bags.",
        "The school says the walking bus has made a real difference. There are far fewer cars outside the gates in the morning, and teachers believe that children who walk arrive calmer and more ready to learn. Some children have also made new friends from other classes on the way.",
        "Not everyone is happy, however. Some parents say the routes do not go near their homes, and a few volunteers have stopped because they could not walk every day. The organisers now hope to find more volunteers, so that they can add a fourth route next year. Every town should try this simple idea.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Questions 11–15: Main ideas",
        instructions:
          "Skim the article. Choose the best heading for each paragraph from the list (i–vii). There are two headings you do not need.",
        labels: "roman",
        left: ["11. Paragraph A", "12. Paragraph B", "13. Paragraph C", "14. Paragraph D", "15. Paragraph E"],
        right: [
          "How the walking bus works today",
          "Problems and plans for the future",
          "What a walking bus is",
          "Why the walking bus began",
          "The good results of the walking bus",
          "How to train as a volunteer",
          "Walking buses in other countries",
        ],
        answer: [2, 3, 0, 4, 1],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "tfng",
        title: "Questions 16–21: True / False / Not Given",
        instructions:
          "Do the statements agree with the information in the article? Choose True if the statement agrees, False if it says the opposite, and Not Given if there is no information about it.",
        statements: [
          {
            text: "16. The walking bus leaves at the same time every morning.",
            answer: "T",
            explanation: "Paragraph A: “Every morning at 8.15…”.",
          },
          {
            text: "17. Helen Shaw is a teacher at Marston Primary School.",
            answer: "NG",
            explanation: "Paragraph B says she organised the first walking bus, but it does not say what her job is.",
          },
          {
            text: "18. Before the walking bus started, many parents thought it was dangerous for children to walk to school.",
            answer: "T",
            explanation: "Paragraph B: parents drove their children “because they thought walking wasn't safe”.",
          },
          {
            text: "19. The walking bus does not run when it rains.",
            answer: "F",
            explanation: "Paragraph C: “When it rains, the bus still runs”.",
          },
          {
            text: "20. All the volunteers are parents of children at the school.",
            answer: "F",
            explanation: "Paragraph C: the volunteers are “parents, grandparents and other volunteers”, so not all are parents.",
          },
          {
            text: "21. Children who use the walking bus get better marks in tests.",
            answer: "NG",
            explanation: "Paragraph D says teachers believe the children arrive calmer and more ready to learn. It says nothing about test marks.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "mcq",
        title: "Questions 22–25",
        instructions: "Use the same article. Choose the best answer.",
        questions: [
          {
            prompt: "22. In paragraph A, the word *route* is closest in meaning to…",
            options: [
              "a kind of vehicle",
              "a group of children",
              "a school rule",
              "the way you go from one place to another",
            ],
            answer: 3,
            explanation: "The children walk “along a fixed route, with stops” to school: a route is the way from one place to another.",
          },
          {
            prompt: "23. In paragraph B, what does *it* refer to in “the cars were the reason it wasn't safe”?",
            options: ["the school", "walking to school", "the first walking bus", "the traffic"],
            answer: 1,
            explanation: "The sentence before says parents “thought walking wasn't safe”. Helen Shaw repeats the same words, *wasn't safe*: walking to school was not safe, and the cars were the reason. Test it: “the cars were the reason walking to school wasn't safe” makes sense.",
          },
          {
            prompt: "24. Why does the writer mention new friends in paragraph D?",
            options: [
              "To give another good result of the walking bus",
              "To explain a problem with the routes",
              "To show that the children are tired",
              "To describe the volunteers",
            ],
            answer: 0,
            explanation: "Paragraph D lists good results: fewer cars, calmer children and, also, new friends.",
          },
          {
            prompt: "25. Which sentence from the article is an opinion, not a fact?",
            options: [
              "Today there are three routes.",
              "Each route has a timetable.",
              "Every town should try this simple idea.",
              "A few volunteers have stopped.",
            ],
            answer: 2,
            explanation: "*Should* shows the writer's view; you cannot check it. The other sentences give information that can be checked.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex6",
        kind: "mcq",
        title: "Section 4: Questions 26–31",
        instructions: "Choose the word or phrase that best completes each sentence.",
        questions: [
          {
            prompt: "26. The hotel staff were very ______ during our stay.",
            options: ["help", "helped", "helpfully", "helpful"],
            answer: 3,
            explanation: "After *were very* we need an adjective: *helpful*.",
          },
          {
            prompt: "27. Mr. Cho ______ to the accounts department two years ago.",
            options: ["moves", "has moved", "moved", "is moving"],
            answer: 2,
            explanation: "*Two years ago* is a finished time in the past → past simple: *moved*. We don't use the present perfect with *ago*.",
          },
          {
            prompt: "28. We are sorry for any ______ caused by the building work.",
            options: ["inconvenient", "inconvenience", "inconveniently", "inconvenienced"],
            answer: 1,
            explanation: "After *any* we need a noun: *inconvenience*.",
          },
          {
            prompt: "29. The new software will help us to process orders more ______.",
            options: ["quick", "quicker", "quickness", "quickly"],
            answer: 3,
            explanation: "The gap describes how we *process* orders, so we need an adverb: *more quickly*.",
          },
          {
            prompt: "30. The concert ______ because the singer was ill.",
            options: ["was cancelled", "cancelled", "has cancelled", "is cancelling"],
            answer: 0,
            explanation: "Someone cancelled the concert; the concert did not cancel anything. We need the past passive: *was cancelled*.",
          },
          {
            prompt: "31. I can't talk now because I ______ dinner. Can I call you back later?",
            options: ["cook", "cooked", "am cooking", "have cooked"],
            answer: 2,
            explanation: "*Now* = an action in progress → present continuous: *am cooking*.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex7",
        kind: "gap",
        title: "Section 5: Questions 32–41",
        instructions:
          "TOEFL Complete the Words. Complete the missing letters in the paragraph. Type only the missing letters (typing the whole word is also accepted).",
        text: "Many people find it hard to sleep well at night. One com{{0}} reason i{{1}} that th{{2}} use pho{{3}} and comp{{4}} late i{{5}} the eve{{6}}. The bri{{7}} light fr{{8}} screens c{{9}} make the brain think that it is still daytime. Experts often suggest switching off all screens an hour before bed and reading a paper book instead. Keeping the bedroom cool, dark and quiet can also help, and so can going to bed at the same time every night.",
        answers: [
          ["mon", "common"],
          ["s", "is"],
          ["ey", "they"],
          ["nes", "phones"],
          ["uters", "computers"],
          ["n", "in"],
          ["ning", "evening", "nings", "evenings"],
          ["ght", "bright"],
          ["om", "from"],
          ["an", "can"],
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In True/False/Not Given, False means the text says the opposite, and Not Given means the text does not tell you. Don't use your own knowledge: if the article doesn't say how good the children's marks are, the answer is Not Given.",
    },
    {
      exam: "toefl",
      body: "In Read in Daily Life, read the question first and scan the short text for the information. In Complete the Words, use the first full sentence to understand the topic, and check that every word you complete fits the grammar of its sentence.",
    },
    {
      exam: "toeic",
      body: "In Part 5, decide what the gap needs before you look at the meaning of the options: a noun after *any*, an adjective after *very*, an adverb next to a verb. Don't spend too long on one sentence: you need most of your time for Part 7.",
    },
  ],
  vocabulary: [
    { word: "recycling centre", meaning: "a place where people take things so they can be used again", example: "We took our old fridge to the recycling centre.", topic: "environment" },
    { word: "trailer", meaning: "a vehicle without an engine that is pulled by a car", example: "He moved the furniture in a trailer behind his car.", topic: "everyday" },
    { word: "charge", meaning: "an amount of money that you have to pay for something", example: "There is a small charge for parking.", topic: "business" },
    { word: "workshop", meaning: "a short course where people learn by doing something", example: "I went to a photography workshop at the weekend.", topic: "education" },
    { word: "torch", meaning: "a small electric light that you carry in your hand (US: flashlight)", example: "Take a torch because the path is dark.", topic: "everyday" },
    { word: "route", meaning: "the way you go from one place to another", example: "This bus route goes past the hospital.", topic: "travel" },
    { word: "volunteer", meaning: "a person who does a job without being paid", example: "Volunteers helped to clean the beach.", topic: "society" },
    { word: "waterproof", meaning: "not allowing water to go through", example: "You'll need a waterproof jacket for the walk.", topic: "everyday" },
    { word: "calm", meaning: "relaxed and not worried, angry or excited", example: "She stayed calm when the fire alarm rang.", topic: "health" },
    { word: "inconvenience", meaning: "a small problem that causes difficulty", example: "We apologise for any inconvenience during the repairs.", topic: "business" },
  ],
  keyPoints: [
    "Read the question first, then skim or scan the text for the part you need.",
    "Cross out wrong options for a reason, and remember that False and Not Given are different.",
    "Use the words around a gap to decide the word class and the tense.",
    "Follow reference words back to the nearest noun or idea that makes sense.",
    "Review the lesson for the section where you lost most marks, then try the test again in a week.",
  ],
};

export default lesson;
