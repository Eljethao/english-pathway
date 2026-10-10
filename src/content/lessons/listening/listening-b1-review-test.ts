import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-b1-review-test",
  title: "B1 listening review test",
  summary:
    "A mixed mock test that reviews the whole B1 listening course: question–response, photographs, a booking form, a voicemail, service and campus conversations, a guided talk and an announcement, with 35 questions and full explanations.",
  skill: "listening",
  level: "B1",
  order: 12,
  minutes: 40,
  exams: [
    { exam: "toeic", task: "Mock test" },
    { exam: "toeic", task: "Listening Part 1 – Photographs" },
    { exam: "toeic", task: "Listening Part 2 – Question-Response" },
    { exam: "toeic", task: "Listening Part 3 – Conversations" },
    { exam: "toeic", task: "Listening Part 4 – Talks" },
    { exam: "ielts", task: "Listening Part 1" },
    { exam: "ielts", task: "Listening Part 2" },
    { exam: "toefl", task: "Listening – Listen and Choose a Response" },
    { exam: "toefl", task: "Listening – Conversation" },
    { exam: "toefl", task: "Listening – Announcement" },
  ],
  objectives: [
    "Complete a mixed listening test under exam-like conditions, hearing each recording once",
    "Use the course strategies: question words, photo traps, form headings and word limits, message structure, problems and solutions, signposts",
    "Find the lessons you need to review from your results",
  ],
  warmUp: [
    "Which lesson in this course helped you most? Which type of question do you still find hardest?",
    "What will you do in this test if you miss an answer in the middle of a recording?",
  ],
  learn: [
    {
      type: "text",
      title: "How this review test works",
      body: "This test reviews the whole B1 listening course. It has eight sections and **35 questions**, and it takes about 40 minutes. The sections practise tasks from TOEIC, IELTS and TOEFL.\n\nTo get a realistic result:\n\n1. Play each recording **once only**.\n2. Before each recording, take **20–30 seconds** to read the questions and think about what you need to hear.\n3. Don't open the transcript until you have checked your answers.\n4. Spell carefully and keep to the word limits.\n5. If you miss an answer, keep going. Use the next question to find your place.",
    },
    {
      type: "table",
      title: "Test overview",
      headers: ["Section", "Task", "Voice", "Questions", "Review lesson"],
      rows: [
        ["1", "Question–response (TOEIC Part 2, TOEFL)", "British and American", "1–7", "Question–response"],
        ["2", "Photographs (TOEIC Part 1)", "American and British", "8–9", "TOEIC Part 1: photographs"],
        ["3", "Booking a party (IELTS Part 1, form completion)", "British", "10–17", "Booking calls; Numbers, dates, spelling"],
        ["4", "A voicemail (TOEIC Part 4)", "American", "18–20", "Telephone messages and voicemail"],
        ["5", "At the post office (TOEIC Part 3)", "British", "21–23", "Shops, services and problems"],
        ["6", "At the library (TOEFL Conversation)", "American", "24–25", "Campus and workplace conversations"],
        ["7", "A sports centre open day (IELTS Part 2, notes)", "British", "26–32", "Following directions; Tours and guided talks"],
        ["8", "A campus announcement (TOEFL Announcement)", "American", "33–35", "Announcements and instructions"],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "In IELTS Listening you hear each recording once, and the answers come in the same order as the recording. If you miss one, leave it and listen for the next question. Make a sensible guess at the end rather than leaving a gap.",
    },
  ],
  model: [
    {
      type: "text",
      title: "Example: wait for the final answer",
      body: "Before you start, here is one example item. You need to write the day and time of a meeting.\n\nDay and time: ______",
    },
    {
      type: "audio",
      title: "Example recording",
      voice: "uk",
      transcript:
        "Jon: I've booked the meeting room for Tuesday at two.\nAisha: Tuesday? I thought we said Wednesday.\nJon: Oh, you're right. Sorry. I'll change it to Wednesday at two, then.",
    },
    {
      type: "text",
      title: "How a strong listener answers",
      body: "**Wednesday, 2.00.** Tuesday is said first, but Aisha corrects it, and Jon agrees: “I'll change it to Wednesday.” The time doesn't change.\n\nThis is the most common pattern in the course: the first piece of information is changed, and the **final** information is the answer. Use the same habits in every section: read the questions first, listen to the end of each turn, and keep moving if you miss something.",
    },
  ],
  practice: [
    {
      type: "text",
      title: "Section 1: Questions 1–7",
      body: "You will hear seven questions or comments. For each one, choose the best reply. Questions 1–5 have three replies, like TOEIC Part 2. Questions 6–7 have four replies, like TOEFL Listen and Choose a Response.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "respond",
        title: "Questions 1–7: choose the best reply",
        instructions: "Listen to each question or comment. Choose the best reply.",
        items: [
          {
            audio: "When does the next train to Leeds leave?",
            options: ["Yes, I'm leaving soon.", "In about ten minutes, from platform four.", "It's a very long train."],
            answer: 1,
            explanation: "“When” needs a time. A starts with *yes* and repeats *leave*; C repeats *train*.",
          },
          {
            audio: "Could you help me carry these chairs?",
            options: ["Sure. Where do they need to go?", "They're very comfortable chairs.", "I carried it yesterday."],
            answer: 0,
            explanation: "This is a request, so a good reply agrees or refuses. B repeats *chairs*, and C repeats *carry*.",
          },
          {
            audio: "Why is the café closed today?",
            options: ["Yes, it's close to the office.", "From nine to five.", "There's a problem with the water supply."],
            answer: 2,
            explanation: "“Why” needs a reason. A uses a similar word (*close*, *closed*), and B gives opening hours.",
          },
          {
            audio: "Who's giving the presentation this afternoon?",
            options: ["In the main hall.", "I think it's someone from the marketing team.", "It was a great presentation."],
            answer: 1,
            explanation: "“Who” needs a person. A answers *where*, and C is about a past presentation.",
          },
          {
            audio: "Shall we eat inside or on the terrace?",
            options: ["Yes, let's eat.", "The terrace was built last year.", "Inside, I think. It's a bit cold."],
            answer: 2,
            explanation: "This is a choice question, so *yes* doesn't work. C chooses one option and gives a reason.",
          },
          {
            audio: "I missed the lecture on Monday because I was sick.",
            options: [
              "The lecture hall is upstairs.",
              "Do you want to borrow my notes?",
              "Yes, I missed the bus too.",
              "It starts at nine on Mondays.",
            ],
            answer: 1,
            explanation: "The speaker missed a class, so offering notes is the most helpful reply. C repeats *missed* with a different meaning.",
          },
          {
            audio: "Haven't you registered for next semester's classes yet?",
            options: [
              "The register is on the teacher's desk.",
              "Next semester starts in January.",
              "No, I'm meeting my adviser tomorrow to decide.",
              "I took that class last year.",
            ],
            answer: 2,
            explanation: "“No, I'm meeting my adviser tomorrow” answers the question and explains why. A uses a similar word (*register*).",
          },
        ],
      },
    },
    {
      type: "text",
      title: "Section 2: Questions 8–9",
      body: "Look at each picture. You will hear four statements. Choose the statement that best describes the picture.",
    },
    {
      type: "image",
      src: "/images/listening-b1-review-test-checkout.svg",
      alt: "A simple drawing of a shop. On the left, there are shelves with colourful products on three levels. Nobody is near the shelves. In the middle, a shop assistant in a red top is standing behind the checkout counter and holding a small green box over a scanner on the counter. There is a screen next to the assistant. On the right, a customer in a blue top is standing in front of the counter, holding a shopping bag. There is no shopping cart, and nobody is carrying a box.",
      caption: "Question 8",
    },
    {
      type: "audio",
      title: "Question 8: four statements",
      voice: "us",
      cast: { narrator: "female" },
      transcript:
        "Statement A. A customer is pushing a shopping cart.\n\nStatement B. Some shelves are being filled.\n\nStatement C. A shop assistant is scanning an item.\n\nStatement D. A customer is carrying a large box.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Question 8",
        questions: [
          {
            prompt: "8. Which statement best describes the picture?",
            options: ["Statement A", "Statement B", "Statement C", "Statement D"],
            answer: 2,
            explanation: "The assistant is holding a box over the scanner: “A shop assistant is scanning an item.” There is no cart (A), nobody is filling the shelves (B), and the customer is holding a bag, not a box (D).",
          },
        ],
      },
    },
    {
      type: "image",
      src: "/images/listening-b1-review-test-kitchen.svg",
      alt: "A simple drawing of a kitchen. In the middle, a chef in a white hat and a white jacket is standing at a long counter and cutting vegetables on a wooden chopping board with a knife. There are carrots and tomatoes on the board. On the left there is a sink with a tap, but there are no dishes in it. On the right, two pots are sitting on a cooker. The cupboard doors under the counter are closed. A shelf with plates and cups is on the wall above the chef.",
      caption: "Question 9",
    },
    {
      type: "audio",
      title: "Question 9: four statements",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Statement A. A chef is cutting some vegetables.\n\nStatement B. A chef is washing some dishes.\n\nStatement C. Some pots are being put away.\n\nStatement D. A chef is shutting a cupboard.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Question 9",
        questions: [
          {
            prompt: "9. Which statement best describes the picture?",
            options: ["Statement A", "Statement B", "Statement C", "Statement D"],
            answer: 0,
            explanation: "The chef is cutting carrots and tomatoes on a board. B uses the sink (wrong action), C uses the pots (nobody is putting them away), and D uses a similar sound (*shutting*, *cutting*).",
          },
        ],
      },
    },
    {
      type: "text",
      title: "Section 3: Questions 10–17",
      body: "You will hear a phone call to a bowling centre. First, read the form. Then listen and complete it.",
    },
    {
      type: "audio",
      title: "Section 3: booking a party",
      voice: "uk",
      cast: { Assistant: "male", Caller: "female" },
      transcript:
        "Assistant: Good afternoon, Starlight Bowling. How can I help?\nCaller: Hi. I'd like to book a party for my son's birthday, on Saturday the ninth of November.\nAssistant: Lovely. How many children?\nCaller: Twelve. Oh no, wait, fourteen. Two of his cousins are coming too.\nAssistant: Fourteen, fine. On Saturdays we have parties at eleven in the morning or three in the afternoon.\nCaller: Three, please. The morning's too early for some families.\nAssistant: OK. The party package is nine pounds fifty per child. That includes two games of bowling and a drink. Food is extra.\nCaller: What food do you have?\nAssistant: Most people choose pizza, but we also do hot dogs.\nCaller: Pizza, please.\nAssistant: And can I have your name?\nCaller: Leila Haddad. That's H, A, double D, A, D.\nAssistant: Thank you. Please arrive fifteen minutes early to collect the bowling shoes.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "Questions 10–17: form completion",
        instructions: "Complete the form. Write ONE WORD AND/OR A NUMBER for each answer.",
        text: "Starlight Bowling: party booking\n\nDate: Saturday {{0}} November\nNumber of children: {{1}}\nStart time: {{2}}\nPrice per child: £{{3}}\nPackage includes: two games and a {{4}}\nFood chosen: {{5}}\nName: Leila {{6}}\nArrive early to collect bowling {{7}}",
        answers: [
          ["9", "9th", "ninth"],
          ["14", "fourteen"],
          ["3", "3.00", "3:00", "3 pm", "3pm", "3.00 pm", "3:00 pm", "3 p.m.", "15:00", "15.00", "three", "three o'clock", "3 o'clock"],
          ["9.50"],
          ["drink"],
          ["pizza", "pizzas"],
          ["Haddad"],
          ["shoes"],
        ],
      },
    },
    {
      type: "text",
      title: "Section 4: Questions 18–20",
      body: "You will hear a voicemail. Read the questions first.",
    },
    {
      type: "audio",
      title: "Section 4: a voicemail",
      voice: "us",
      cast: { narrator: "male" },
      transcript:
        "Hello, this is a message for Sofia Reyes. My name's Daniel Cho, and I'm the office manager at Pinewood Accountants. Thanks for coming to the interview on Tuesday. We were very impressed, and we'd like to offer you the job of office assistant. We'd like you to start on Monday the third, if possible. Before then, could you send me a copy of your passport and your bank details, so we can set up your pay? You can email them to me any time this week. If you have any questions, call me on five five five, oh one four seven. I look forward to hearing from you.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "mcq",
        title: "Questions 18–20",
        instructions: "Choose the best answer to each question.",
        questions: [
          {
            prompt: "18. Who most likely is the speaker?",
            options: ["A bank employee", "A travel agent", "A manager at an office", "A university teacher"],
            answer: 2,
            explanation: "“I'm the office manager at Pinewood Accountants.” The bank details are for the listener's pay.",
          },
          {
            prompt: "19. Why is the speaker calling?",
            options: [
              "To arrange an interview",
              "To offer the listener a job",
              "To ask about an unpaid bill",
              "To change a start date",
            ],
            answer: 1,
            explanation: "“We'd like to offer you the job of office assistant.” The interview has already happened.",
          },
          {
            prompt: "20. What does the speaker ask the listener to do?",
            options: [
              "Send some personal documents",
              "Come to a second interview",
              "Call back before Monday",
              "Open a new bank account",
            ],
            answer: 0,
            explanation: "“Could you send me a copy of your passport and your bank details?” Calling is only if the listener has questions.",
          },
        ],
      },
    },
    {
      type: "text",
      title: "Section 5: Questions 21–23",
      body: "You will hear a conversation at a post office. Read the questions first.",
    },
    {
      type: "audio",
      title: "Section 5: at the post office",
      voice: "uk",
      cast: { Clerk: "female", Customer: "male" },
      transcript:
        "Clerk: Good morning. How can I help?\nCustomer: Hi. I was expecting a parcel yesterday, but I got this card. It says you tried to deliver it while I was out.\nClerk: Yes, we keep parcels here for two weeks. Can I see the card and some photo ID?\nCustomer: Here's the card. Oh no, I've left my driving licence at home.\nClerk: I'm afraid I can't give you the parcel without ID. But if you like, we can deliver it again on Thursday, free of charge.\nCustomer: Thursday's fine. I work from home that day.\nClerk: Great. Just sign here, and I'll book the delivery.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex6",
        kind: "mcq",
        title: "Questions 21–23",
        instructions: "Choose the best answer to each question.",
        questions: [
          {
            prompt: "21. Why has the customer come to the post office?",
            options: ["To send a parcel", "To collect a parcel", "To buy stamps", "To complain about a late letter"],
            answer: 1,
            explanation: "The post office tried to deliver a parcel while the customer was out, so the customer has come to collect it.",
          },
          {
            prompt: "22. What is the problem?",
            options: [
              "The customer has lost the card.",
              "The parcel has been sent back.",
              "The customer doesn't have any ID.",
              "The post office is closing.",
            ],
            answer: 2,
            explanation: "“I've left my driving licence at home.” The clerk can't give the parcel without ID. The customer does have the card.",
          },
          {
            prompt: "23. What will happen on Thursday?",
            options: [
              "The parcel will be delivered again.",
              "The customer will bring ID to the post office.",
              "The customer will pay for a delivery.",
              "The parcel will be returned to the sender.",
            ],
            answer: 0,
            explanation: "“We can deliver it again on Thursday, free of charge.” “Thursday's fine.”",
          },
        ],
      },
    },
    {
      type: "text",
      title: "Section 6: Questions 24–25",
      body: "You will hear a conversation between a student and a librarian. Read the questions first.",
    },
    {
      type: "audio",
      title: "Section 6: at the library",
      voice: "us",
      cast: { Student: "male", Librarian: "female" },
      transcript:
        "Student: Excuse me, is this where I can book a study room?\nLibrarian: Yes, but all the rooms are booked online now, on the library website.\nStudent: Oh, I tried that, but it asks for a student number, and I've only just started here. I don't have my student card yet.\nLibrarian: Ah. In that case, you can use the temporary number on your welcome letter.\nStudent: I left the letter in my room. Hmm.\nLibrarian: Then I can book one for you here. Just tell me your name and the time you need.\nStudent: Great. Three o'clock tomorrow, for two hours, please.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex7",
        kind: "mcq",
        title: "Questions 24–25",
        instructions: "Choose the best answer to each question.",
        questions: [
          {
            prompt: "24. What is the student's problem?",
            options: [
              "All the study rooms are full.",
              "The library website isn't working.",
              "The student can't book a room online.",
              "The student has lost a library book.",
            ],
            answer: 2,
            explanation: "The website asks for a student number, and the student doesn't have a card or the welcome letter.",
          },
          {
            prompt: "25. What will the librarian probably do next?",
            options: [
              "Book a study room for the student",
              "Print a new welcome letter",
              "Give the student a student card",
              "Show the student how to use the website",
            ],
            answer: 0,
            explanation: "“I can book one for you here. Just tell me your name and the time you need.” The student then gives the time.",
          },
        ],
      },
    },
    {
      type: "text",
      title: "Section 7: Questions 26–32",
      body: "You will hear a guide at a sports centre open day. First, read the notes. Then listen and complete them.",
    },
    {
      type: "audio",
      title: "Section 7: a sports centre open day",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Hello, everyone, and welcome to the open day at Lakeview Sports Centre. I'm Grace, and I'll tell you where everything is. We're standing in the main entrance hall. The reception desk is straight ahead of you, and the changing rooms are on the left, next to the stairs. The swimming pool is through the double doors behind reception. Today, you can try a free swimming lesson at eleven or at two.\n\nUpstairs, on the first floor, you'll find the gym. It used to be our dance studio, but last year we moved the dance classes to the new building next door. And finally, the café is on the ground floor, opposite the changing rooms. Everyone who joins today gets a free drink there, so don't forget to show your new membership card.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex8",
        kind: "gap",
        title: "Questions 26–32: note completion",
        instructions: "Complete the notes. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        text: "Lakeview Sports Centre: open day\n\nChanging rooms: on the left, next to the {{0}}\nSwimming pool: through the double doors behind {{1}}\nFree swimming lessons today: at 11.00 and {{2}}\nGym: on the {{3}} floor\nDance classes are now in the {{4}} next door\nCafé: opposite the {{5}}\nNew members get a free {{6}} in the café",
        answers: [
          ["stairs"],
          ["reception", "the reception", "reception desk"],
          ["2", "2.00", "2:00", "2 pm", "2pm", "2.00 pm", "2:00 pm", "2 p.m.", "14:00", "14.00", "two", "two o'clock", "2 o'clock"],
          ["first", "1st"],
          ["new building"],
          ["changing rooms", "changing room"],
          ["drink"],
        ],
      },
    },
    {
      type: "text",
      title: "Section 8: Questions 33–35",
      body: "You will hear an announcement on a college campus. Read the questions first.",
    },
    {
      type: "audio",
      title: "Section 8: a campus announcement",
      voice: "us",
      cast: { narrator: "female" },
      transcript:
        "Attention, students. The bus between the main campus and the sports fields will not run this Friday because of road repairs on College Avenue. Instead, a minibus will leave from the library parking lot every thirty minutes, starting at eight a.m. Please note that the minibus has only fifteen seats, so allow extra time for your journey. The normal bus service will start again on Monday.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex9",
        kind: "mcq",
        title: "Questions 33–35",
        instructions: "Choose the best answer to each question.",
        questions: [
          {
            prompt: "33. What is the main purpose of the announcement?",
            options: [
              "To explain a change to a transport service",
              "To advertise a new sports field",
              "To ask students to help with road repairs",
              "To announce a new parking rule",
            ],
            answer: 0,
            explanation: "The bus won't run on Friday, and a minibus will replace it. The road repairs are the reason, not the purpose.",
          },
          {
            prompt: "34. Where will the minibus leave from?",
            options: ["The sports fields", "College Avenue", "The library parking lot", "The main bus station"],
            answer: 2,
            explanation: "“A minibus will leave from the library parking lot every thirty minutes.”",
          },
          {
            prompt: "35. What are students advised to do?",
            options: [
              "Book a seat on the minibus",
              "Allow extra time for the journey",
              "Walk to the sports fields",
              "Wait until Monday",
            ],
            answer: 1,
            explanation: "“The minibus has only fifteen seats, so allow extra time for your journey.”",
          },
        ],
      },
    },
    {
      type: "text",
      title: "Check your score",
      body: "Count your correct answers out of 35.\n\n- **30–35**: excellent. You are ready for the B2 listening course.\n- **22–29**: good. Review the lessons for the sections where you lost the most marks.\n- **Below 22**: go back to the lessons in the test overview, starting with the sections you found hardest, and then try this test again.\n\nThen look at your mistakes. Did you choose an answer because you heard a word from it? Did you miss a correction like “Oh no, wait, fourteen”? Did you break a word limit? Knowing *why* you lost a mark is the fastest way to improve.",
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "In the real TOEIC Listening test there are 100 questions in four parts, and nothing is printed for Part 1 and Part 2. Keep moving: if you miss a question, guess and get ready for the next one. There is no penalty for guessing.",
    },
    {
      exam: "ielts",
      body: "In Part 1 and Part 2, read the form or notes before the audio starts, check the word limit, and don't repeat words that are already printed. Speakers often correct themselves, so always write the final information.",
    },
    {
      exam: "toefl",
      body: "Listen and Choose a Response, Conversation and Announcement tasks are short. Focus on what the speaker wants or what will change, and listen until the end, because the final plan often comes in the last line.",
    },
  ],
  vocabulary: [
    { word: "package", meaning: "a set of things that you buy together for one price", example: "The party package includes two games and a drink.", topic: "business" },
    { word: "extra", meaning: "not included in the price, so you pay more", example: "Food is extra.", topic: "business" },
    { word: "offer someone a job", meaning: "to say that you would like someone to work for you", example: "They offered me the job after the second interview.", topic: "work" },
    { word: "bank details", meaning: "information about your bank account, needed to pay you", example: "Please send us your bank details so we can set up your pay.", topic: "work" },
    { word: "parcel", meaning: "something wrapped in paper or in a box, sent by post", example: "I'm collecting a parcel from the post office.", topic: "everyday" },
    { word: "driving licence", meaning: "an official card that shows you can drive (driver's license in US English)", example: "You can use your driving licence as photo ID.", topic: "everyday" },
    { word: "temporary", meaning: "used for a short time only", example: "Use the temporary number until your card arrives.", topic: "education" },
    { word: "open day", meaning: "a day when people can visit a place to see what it offers", example: "The sports centre has an open day on Saturday.", topic: "everyday" },
    { word: "changing room", meaning: "a room where you change your clothes, e.g. at a sports centre", example: "The changing rooms are next to the stairs.", topic: "everyday" },
    { word: "minibus", meaning: "a small bus for about 10–20 passengers", example: "A minibus will run every thirty minutes.", topic: "travel" },
  ],
  keyPoints: [
    "Read the questions before each recording and decide what you are listening for.",
    "The first information is often changed. Always wait for the final answer.",
    "Many wrong options repeat words from the audio or use similar sounds, so check that the whole option is true.",
    "In forms and notes, follow the headings, keep to the word limit and don't repeat printed words.",
    "Use your score to choose the lessons to review before you start the B2 course.",
  ],
};

export default lesson;
