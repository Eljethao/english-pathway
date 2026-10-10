import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-daily-life-texts",
  title: "Everyday texts at speed",
  summary:
    "Read short notices, messages, emails, schedules and adverts quickly and accurately, with a question-first method for TOEFL Read in Daily Life and TOEIC single passages.",
  skill: "reading",
  level: "B2",
  order: 10,
  minutes: 25,
  exams: [
    { exam: "toefl", task: "Reading – Read in Daily Life" },
    { exam: "toeic", task: "Reading Part 7 – Reading Comprehension" },
  ],
  objectives: [
    "Recognise the type and purpose of a short everyday text in a few seconds",
    "Read the question first and scan for the detail you need",
    "Notice the conditions, exceptions and changes that decide many answers",
    "Answer purpose, detail and inference questions on texts of 15–150 words within a time limit",
  ],
  warmUp: [
    "How many short texts (messages, signs, emails, menus) do you read in a normal day? Which ones do you read carefully?",
    "Have you ever missed something important in a notice or email because you read it too quickly?",
  ],
  learn: [
    {
      type: "text",
      title: "Short texts, real situations",
      body: "In **TOEFL Read in Daily Life**, you read short everyday texts of about 15–150 words, such as notices, emails, menus, schedules, text messages and adverts. Each text has **2 or 3 multiple-choice questions**. TOEIC Part 7 uses similar texts in its single-passage sets.\n\nIn the B1 course you learned what notices, emails and adverts usually contain. At B2 the challenge is **speed with accuracy**: the texts are short, but the questions often depend on one small word such as *except*, *unless*, *at least* or *no longer*.\n\nThree question types appear again and again:\n\n- **Purpose**: Why was the email written? What is the notice mainly about?\n- **Detail**: When will the centre open on Thursday? How much does a visitor pay?\n- **Inference**: What will the student probably do next? What is suggested about the café?",
    },
    {
      type: "table",
      title: "Where to look in each kind of text",
      headers: ["Text type", "Purpose is usually…", "Watch out for…"],
      rows: [
        ["Email", "in the subject line and first sentence", "requests and deadlines near the end"],
        ["Notice", "in the headline", "exceptions (*except*, *unless*) and changes (*no longer*, *will now*)"],
        ["Schedule or timetable", "in the title", "footnotes and special dates at the bottom"],
        ["Text messages", "in the first message", "informal language and things that are implied, not stated"],
        ["Advert", "in the first line", "conditions (*minimum*, *only*, *from*) and what is or is not included"],
      ],
    },
    {
      type: "text",
      title: "A question-first method",
      body: "1. **Glance at the text for two seconds.** What type is it, and who is it for?\n2. **Read the first question.** Underline the key words: a time, a person, a price, *NOT*, *probably*.\n3. **Scan** for those words or synonyms, then read the whole sentence around them.\n4. **Check the small words** nearby: conditions, exceptions and changes often turn a wrong option into the right one.\n5. **Move on.** These texts are short, so one careful reading is enough. Do not read the whole text again for every question.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Speed drill: one text, one question",
        instructions: "Each text is very short. Try to answer each question in about 20 seconds.",
        questions: [
          {
            prompt: "Sign: “Staff parking only, 7 a.m.–6 p.m., Monday to Friday. Visitors may park here at weekends.” When can a visitor park here?",
            options: ["on Monday morning", "on Wednesday afternoon", "on Saturday afternoon", "at any time"],
            answer: 2,
            explanation: "Visitors may park “at weekends”. On weekdays the car park is for staff only.",
          },
          {
            prompt: "Text message: “Running 15 min late. Train stuck outside the station. Start without me, I'll catch up on the notes.” What does the writer want the reader to do?",
            options: ["wait for him at the station", "begin without waiting for him", "send him the notes now", "cancel the meeting"],
            answer: 1,
            explanation: "“Start without me” = begin without waiting. He will read the notes later (“catch up”).",
          },
          {
            prompt: "Label: “Keep refrigerated after opening and use within 3 days. Not suitable for freezing.” What is true about this product?",
            options: [
              "It must be kept in the fridge before it is opened.",
              "It can be frozen for up to three days.",
              "It should be used within three days of opening.",
              "It can be stored anywhere after opening.",
            ],
            answer: 2,
            explanation: "“Use within 3 days” applies after opening. The label says nothing about storage before opening, and it must not be frozen.",
          },
          {
            prompt: "Email: “Your library books are due on 3 March. You can renew them online once, unless another user has requested them.” When can the books NOT be renewed online?",
            options: [
              "when they are due on 3 March",
              "when another person has asked for them",
              "when they have never been renewed",
              "when the library is closed",
            ],
            answer: 1,
            explanation: "*Unless another user has requested them* gives the exception. Watch for small condition words like *unless*.",
          },
          {
            prompt: "Notice: “Lost: small black umbrella with a wooden handle, left in Room 204 on Monday. If found, please hand it in at the main office.” What should someone who finds the umbrella do?",
            options: ["leave it in Room 204", "take it to the main office", "call the owner", "keep it until Monday"],
            answer: 1,
            explanation: "*Hand it in at the main office* = take it to the main office.",
          },
          {
            prompt: "Advert: “Guitar lessons for beginners. First lesson half price! Lessons in your home or at our studio (studio lessons $5 cheaper).” What is suggested about lessons at home?",
            options: [
              "They are only for experienced players.",
              "They cost more than lessons at the studio.",
              "The first one is free.",
              "They are not available at weekends.",
            ],
            answer: 1,
            explanation: "If studio lessons are $5 cheaper, home lessons must cost more. The first lesson is half price, not free.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "passage",
      title: "Email: Water shut-off on Thursday",
      paragraphs: [
        "From: Campus Housing Office · To: All residents of Linden Hall · Subject: Water shut-off on Thursday",
        "Dear residents,",
        "To allow essential repairs to the main water pipe, the water supply to Linden Hall will be turned off on Thursday from 9 a.m. until approximately 3 p.m. During this time, the toilets and showers in the building will not be available. Residents can use the facilities in the Student Centre next door, which will open an hour earlier than usual that day, at 7 a.m.",
        "Please make sure all taps are fully closed before 9 a.m. When the water is turned back on, it may look slightly brown for a few minutes. This is normal and not harmful: simply run the tap until the water is clear.",
        "If you have any questions, please contact the Housing Office on extension 4410. Thank you for your patience.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader answers",
      body: "**Glance:** an email from the Housing Office to all residents. The subject line already gives the topic.\n\n**Question 1 (purpose):** What is the main purpose of the email?\n→ *To tell residents about a temporary interruption to the water supply.* The subject line and first sentence say this. An option such as *to ask residents to report a broken pipe* uses words from the text (*pipe*) but gives the wrong purpose.\n\n**Question 2 (detail):** When will the Student Centre open on Thursday?\nScan for *Student Centre*: “an hour earlier than usual that day, at **7 a.m.**” → **7 a.m.** The trap is 8 a.m., the usual time, which is implied but not the answer.\n\n**Question 3 (inference):** What should a resident probably do if the water is brown when it comes back on?\nThe text says “simply run the tap until the water is clear”. → *Let the water run for a short time.* An option like *call the Housing Office* is reasonable in real life but is not what the text advises.",
    },
    {
      type: "passage",
      title: "Text messages",
      paragraphs: [
        "Maya (4:12 p.m.): Hey, are we still meeting at the library at 5 to finish the slides?",
        "Leo (4:15 p.m.): Yes, but the group study rooms are all booked. Could we use the café on the ground floor instead?",
        "Maya (4:16 p.m.): Too noisy for practising the talk. What about my place? It's a 10-minute walk from campus.",
        "Leo (4:18 p.m.): Perfect. I'll bring my laptop. Yours still isn't fixed, right?",
        "Maya (4:18 p.m.): Right. See you at 5!",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Your turn: text messages",
        instructions: "Read the messages and answer the questions. Aim for about 1 minute in total.",
        questions: [
          {
            prompt: "Why does Maya not want to use the café?",
            options: [
              "It closes before 5 p.m.",
              "It would be difficult to rehearse their talk there.",
              "It is too far from the library.",
              "It has no space for laptops.",
            ],
            answer: 1,
            explanation: "“Too noisy for practising the talk.” *Rehearse* is a paraphrase of *practise*.",
          },
          {
            prompt: "Where will Maya and Leo most likely meet?",
            options: ["in a group study room", "in the café", "at Maya's home", "at the campus entrance"],
            answer: 2,
            explanation: "Maya suggests “my place”, and Leo replies “Perfect”. *My place* is an informal way to say *my home*.",
          },
          {
            prompt: "What is suggested about Maya's laptop?",
            options: [
              "It is not working at the moment.",
              "She lent it to Leo.",
              "It has the slides on it.",
              "She left it in the library.",
            ],
            answer: 0,
            explanation: "Leo asks, “Yours still isn't fixed, right?” and Maya says “Right.” So her laptop is still broken.",
          },
        ],
      },
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Notice: Fitness Centre summer hours",
      timerMinutes: 2,
      paragraphs: [
        "NOTICE: Fitness Centre – Summer Opening Hours",
        "From 10 June to 25 August, the Fitness Centre will be open from 7 a.m. to 8 p.m. on weekdays and from 9 a.m. to 5 p.m. on Saturdays. It will be closed on Sundays.",
        "Because many students are away, group exercise classes will be reduced to two per day. Class places must now be reserved online at least 24 hours in advance; places can no longer be booked at reception.",
        "Summer memberships are available for staff and students staying on campus. The fee is $45 for the whole period, or $20 per month. Students who already hold an annual membership do not need to buy a summer membership.",
        "The swimming pool will be closed for cleaning from 1 to 14 July.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Practice 1: a notice",
        instructions: "Answer the 3 questions in about 2 minutes.",
        questions: [
          {
            prompt: "What is the notice mainly about?",
            options: [
              "changes to the Fitness Centre's services over the summer",
              "the opening of a new swimming pool",
              "an increase in the price of annual memberships",
              "new exercise classes for students",
            ],
            answer: 0,
            explanation: "The headline and every paragraph describe summer arrangements: hours, classes, memberships and the pool closure.",
          },
          {
            prompt: "A student wants to join a class at 10 a.m. on a Wednesday in July. What must she do?",
            options: [
              "book a place at reception on Wednesday morning",
              "reserve a place online by 10 a.m. on Tuesday",
              "arrive at the centre before 7 a.m.",
              "buy an annual membership",
            ],
            answer: 1,
            explanation: "Places must be reserved online “at least 24 hours in advance” and “can no longer be booked at reception”.",
          },
          {
            prompt: "What is indicated about students with an annual membership?",
            options: [
              "They must pay $20 per month in the summer.",
              "They can use the swimming pool throughout July.",
              "They can use the centre in the summer without paying more.",
              "They have priority when booking classes.",
            ],
            answer: 2,
            explanation: "They “do not need to buy a summer membership”. B is wrong because the pool is closed from 1 to 14 July.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Schedule: Campus shuttle",
      timerMinutes: 2,
      paragraphs: [
        "Campus Shuttle – Spring Semester Service",
        "Route 1 (Main Gate – Library – Science Park): every 10 minutes, 7.30 a.m.–7.00 p.m., Monday to Friday.",
        "Route 2 (Main Gate – Student Village – Sports Fields): every 20 minutes, 8.00 a.m.–10.00 p.m., every day.",
        "Night Service (all stops): on request only, 10.00 p.m.–1.00 a.m. Call 555-0142 at least 15 minutes before you want to be picked up.",
        "All shuttles are free with a valid student ID. Visitors pay $1.50 per trip (exact change only).",
        "Please note: during exam weeks (5–16 May), Route 1 will run until 11.00 p.m.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Practice 2: a schedule",
        instructions: "Answer the 3 questions in about 2 minutes.",
        questions: [
          {
            prompt: "On a Tuesday in April, a student wants to go from the Library to the Science Park at 10.30 p.m. What should she do?",
            options: ["take Route 1", "take Route 2", "phone to request the Night Service", "pay $1.50 to the driver"],
            answer: 2,
            explanation: "Route 1 stops at 7 p.m. in normal weeks, and Route 2 does not go to the Science Park. After 10 p.m. the Night Service runs “on request only”, so she must call.",
          },
          {
            prompt: "What is indicated about visitors who use the shuttle?",
            options: [
              "They cannot use the Night Service.",
              "They should have the exact fare ready.",
              "They need a student ID.",
              "They travel free at weekends.",
            ],
            answer: 1,
            explanation: "Visitors pay $1.50 “exact change only”, so they need the exact amount of money.",
          },
          {
            prompt: "On Thursday, 8 May, at 10.30 p.m., how can a student travel from the Main Gate to the Library without making a phone call?",
            options: ["by Route 1", "by Route 2", "by the Night Service", "There is no shuttle at that time."],
            answer: 0,
            explanation: "Thursday, 8 May, is a weekday in exam weeks (5–16 May), when Route 1 runs until 11 p.m. The footnote at the bottom changes the answer.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Speed round: three short texts",
      timerMinutes: 5,
      paragraphs: [
        "Text 1 – Advert: Room available. Furnished single room in a quiet three-bedroom flat, five minutes' walk from the north campus. $520 per month, including water and internet; electricity is shared between flatmates. Available from 1 September for a minimum of six months. Non-smokers only. We are two graduate students who enjoy cooking together at weekends. Email Jonah to arrange a viewing.",
        "Text 2 – Café board: Green Leaf Café, today's lunch specials (11.30 a.m.–2.30 p.m.). Soup of the day with bread $5 · Grilled vegetable wrap $7.50 · Chicken rice bowl $9. Bring your own cup and get 25 cents off any hot drink. Meal-plan cards accepted for all items except bottled drinks.",
        "Text 3 – Email from a professor: Subject: Thursday's class. Hi everyone, I have to attend a conference on Thursday, so our class will not meet in person. Instead, please watch the recorded lecture on the course website and post one question about it on the discussion board by Friday at noon. The quiz that was planned for Thursday will now take place next Tuesday at the start of class. Best wishes, Professor Adeyemi",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "mcq",
        title: "Practice 3: speed round",
        instructions: "Questions 1–2 are about Text 1, questions 3–4 about Text 2 and questions 5–7 about Text 3. Try to finish in 5 minutes.",
        questions: [
          {
            prompt: "Text 1: What is included in the rent?",
            options: ["water and internet", "electricity and water", "all bills", "weekend meals"],
            answer: 0,
            explanation: "“$520 per month, including water and internet; electricity is shared between flatmates.”",
          },
          {
            prompt: "Text 1: Who would be most suitable for the room?",
            options: [
              "a non-smoker who needs a room for a year",
              "a student who needs a room for three months",
              "a couple looking for a room to share",
              "a smoker who is happy to smoke outside",
            ],
            answer: 0,
            explanation: "The room is a single room, for “a minimum of six months”, for “non-smokers only”. Only the first option meets every condition.",
          },
          {
            prompt: "Text 2: How can a customer pay less for a coffee?",
            options: ["by ordering before 11.30 a.m.", "by bringing their own cup", "by using a meal-plan card", "by buying a lunch special"],
            answer: 1,
            explanation: "“Bring your own cup and get 25 cents off any hot drink.”",
          },
          {
            prompt: "Text 2: What can NOT be paid for with a meal-plan card?",
            options: ["a bowl of soup", "a hot drink", "a bottle of juice", "a vegetable wrap"],
            answer: 2,
            explanation: "Meal-plan cards are accepted “for all items except bottled drinks”.",
          },
          {
            prompt: "Text 3: Why will the class not meet in person on Thursday?",
            options: [
              "The professor will be at a conference.",
              "The classroom is not available.",
              "The students have a quiz in another class.",
              "The lecture has been cancelled.",
            ],
            answer: 0,
            explanation: "“I have to attend a conference on Thursday.” The lecture is not cancelled: it is recorded and online.",
          },
          {
            prompt: "Text 3: What must students do by Friday at noon?",
            options: [
              "take the quiz online",
              "post a question about the lecture",
              "email the professor their notes",
              "record a short presentation",
            ],
            answer: 1,
            explanation: "“Post one question about it on the discussion board by Friday at noon.”",
          },
          {
            prompt: "Text 3: When will the quiz take place?",
            options: ["on Thursday", "on Friday at noon", "at the start of next Tuesday's class", "on the course website"],
            answer: 2,
            explanation: "The quiz “will now take place next Tuesday at the start of class”. *Will now* signals a change from the original plan.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toefl",
      body: "Read in Daily Life texts are about 15–150 words, with 2 or 3 questions each. Read the question first and scan for the detail you need. Because the Reading section is adaptive, accurate answers early on matter, so do not rush past small words like *except* and *unless*.",
    },
    {
      exam: "toefl",
      body: "Inference questions (*What is suggested…?*, *What will the student probably do?*) still need evidence in the text. Choose the option that must be true from what is written, not the one that is merely likely in real life.",
    },
    {
      exam: "toeic",
      body: "TOEIC Part 7 single passages use the same kinds of texts, including text-message chains, notices and adverts. With 54 questions in Part 7, short texts are where you can save time for the longer double and triple passages.",
    },
  ],
  vocabulary: [
    { word: "approximately", meaning: "a little more or less than an exact number or time", example: "The water will be off until approximately 3 p.m.", topic: "everyday" },
    { word: "facilities", meaning: "rooms, equipment or services provided for a particular purpose", example: "Residents can use the facilities in the Student Centre.", topic: "everyday" },
    { word: "extension", meaning: "one of several phone lines inside the same organisation", example: "Call the office on extension 4410.", topic: "work" },
    { word: "in advance", meaning: "before a particular time or event", example: "Classes must be booked 24 hours in advance.", topic: "everyday" },
    { word: "valid", meaning: "officially acceptable and not out of date", example: "You need a valid student ID to travel free.", topic: "everyday" },
    { word: "exact change", meaning: "the precise amount of money, so that no change needs to be given back", example: "The bus driver only accepts exact change.", topic: "travel" },
    { word: "on request", meaning: "only when someone asks for it", example: "The night bus runs on request only.", topic: "travel" },
    { word: "furnished", meaning: "with furniture already in it", example: "The flat is fully furnished.", topic: "everyday" },
    { word: "renew", meaning: "to make something such as a loan or membership continue for a longer time", example: "You can renew your library books online.", topic: "education" },
    { word: "catch up on", meaning: "to do something you did not have time to do earlier", example: "I need to catch up on my reading this weekend.", topic: "education" },
  ],
  keyPoints: [
    "Read in Daily Life: everyday texts of about 15–150 words, each with 2 or 3 questions.",
    "Glance at the text type, read the question first, then scan.",
    "Small words decide many answers: except, unless, at least, no longer, will now.",
    "Check footnotes, special dates and conditions before you choose.",
    "Inference answers must follow from the text, not from what usually happens in real life.",
  ],
};

export default lesson;
