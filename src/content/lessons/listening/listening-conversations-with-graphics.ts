import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-conversations-with-graphics",
  title: "Conversations with graphics",
  summary:
    "Answer TOEIC Part 3 “Look at the graphic” questions by combining what the speakers say with a schedule, price list, directory or forecast, and handle the other two questions in each set at the same time.",
  skill: "listening",
  level: "B2",
  order: 8,
  minutes: 25,
  exams: [{ exam: "toeic", task: "Listening Part 3 – Conversations" }],
  objectives: [
    "Read a graphic before the audio and work out which column the answer options come from",
    "Listen for the information in the other columns, including paraphrases, comparisons and changes of plan",
    "Combine audio and graphic to answer “Look at the graphic” questions",
    "Answer all three questions in a TOEIC Part 3 set, including the speakers' problem and next action",
  ],
  warmUp: [
    "When you choose a train, which information on the timetable do you look at first: the departure time, the arrival time or the platform? Why?",
    "Think of a menu or price list. How might someone describe one item without saying its name?",
  ],
  learn: [
    {
      type: "text",
      title: "How graphic questions work",
      body: "In TOEIC Listening Part 3 you hear conversations between two or three people at work or in daily life, and each conversation has three questions. Some conversations come with a graphic, such as a schedule, a price list, an office directory or a weather forecast. One of the three questions then begins **“Look at the graphic.”**\n\nIn an earlier lesson you saw that the audio usually does **not** say the answer to this question directly. Here is why. The four answer options come from **one column** of the graphic. The speakers talk about a **different column**. Your job is to hear the information from one column and find the matching item in the other.\n\nFor example, the options are four prices, but the speakers never say a price. They say *two hundred and fifty cards on the better paper*. You find that row in the table and read the price.",
    },
    {
      type: "table",
      title: "What the speakers say instead of the answer",
      headers: ["The speakers…", "Example", "What you do"],
      rows: [
        ["mention a different column", "“Let's get the express.” (options are platforms)", "Find the express in the table, then read its platform."],
        ["use a position or order", "“the session right after lunch”", "Find the first time after lunch."],
        ["compare", "“whichever is cheaper” / “the one that serves the most people”", "Compare the rows and pick the one that fits."],
        ["describe or paraphrase", "“the talk on money” = Budget planning", "Match the meaning, not the exact words."],
        ["change a plan", "“They're not on their usual floor this week.”", "Cross out the obvious row and listen for the new one."],
        ["reject options", "“Not the windy day, and not the cloudy one.”", "Eliminate rows until one is left."],
      ],
    },
    {
      type: "text",
      title: "A method for each set",
      body: "1. **Read all three questions** before the conversation starts. Usually one asks about the topic or a problem, one is the graphic question, and one asks about a request or what happens next.\n2. **Look at the options of the graphic question.** Which column are they from? Put your finger on the **other** column: that is what you will hear.\n3. **Listen for the speakers' names and roles** at the start. Questions ask what a particular person says or will do.\n4. **Answer in order.** The questions follow the order of the conversation, so when you hear the answer to one, move straight on to the next.\n5. **Wait for the final decision.** Speakers often mention one row, reject it and choose another.",
    },
    {
      type: "table",
      title: "Quick check graphic: Conference workshops, Friday",
      headers: ["Time", "Workshop", "Room"],
      rows: [
        ["9.00", "Social media basics", "Room 101"],
        ["11.00", "Writing better emails", "Room 204"],
        ["1.30", "Managing small teams", "Room 101"],
        ["3.30", "Budget planning", "Room 310"],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: link the words to the graphic",
        instructions: "Look at the workshop schedule above. Read what a speaker says, then choose the answer.",
        questions: [
          {
            prompt: "A speaker says: “I'd like to go to the session that starts right after lunch.” Which workshop does the speaker want to attend?",
            options: ["Social media basics", "Writing better emails", "Managing small teams", "Budget planning"],
            answer: 2,
            explanation: "Lunch is usually around midday, so the first session after it is the 1.30 workshop, Managing small teams.",
          },
          {
            prompt: "A speaker says: “Anna's giving the talk on money, you know, planning how we spend next year.” What time is Anna's talk?",
            options: ["9.00", "11.00", "1.30", "3.30"],
            answer: 3,
            explanation: "“Planning how we spend” is a paraphrase of Budget planning, which is at 3.30.",
          },
          {
            prompt: "A speaker says: “I'll skip the first session. I already know all about posting things online.” Which workshop will the speaker miss?",
            options: ["Social media basics", "Writing better emails", "Managing small teams", "Budget planning"],
            answer: 0,
            explanation: "“The first session” is at 9.00, and “posting things online” describes social media.",
          },
          {
            prompt: "A speaker says: “The email workshop has moved. It's now in the same room as the first session of the day.” Where is Writing better emails now?",
            options: ["Room 101", "Room 204", "Room 310"],
            answer: 0,
            explanation: "The first session (9.00) is in Room 101. Room 204 was the original room, so it is a distractor.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "table",
      title: "Model graphic: Quickprint price list (business cards)",
      headers: ["Quantity", "Standard paper", "Premium paper"],
      rows: [
        ["100 cards", "$25", "$40"],
        ["250 cards", "$45", "$70"],
        ["500 cards", "$65", "$110"],
        ["1,000 cards", "$120", "$190"],
      ],
    },
    {
      type: "text",
      title: "Before you listen",
      body: "Read the three questions and the price list.\n\n1. Why is Rosa ordering business cards?\n2. Look at the graphic. How much will Rosa pay for each set of cards? (A) $45 (B) $65 (C) $70 (D) $110\n3. What does Kevin ask Rosa to do?\n\nThe options in question 2 are prices, so the speakers will probably talk about the **quantity** and the **type of paper** instead.",
    },
    {
      type: "audio",
      title: "Model conversation: ordering business cards",
      voice: "us",
      transcript:
        "Kevin: Good morning, Quickprint. Kevin speaking.\nRosa: Hi Kevin, this is Rosa Mendes from Harlow Architects. We have two new designers starting next month, and I need to order business cards for them.\nKevin: Of course. How many cards would you like for each person?\nRosa: I was going to order five hundred each, but they'll mostly be working in the office, so two hundred and fifty should be plenty.\nKevin: Fine. And which paper would you like, standard or premium?\nRosa: Our old cards were on standard paper, and honestly, they felt a bit thin. Clients notice that kind of thing, so let's go with premium this time.\nKevin: Good choice. That's one set per person, so I'll put through two orders. If you email me the names and job titles today, the cards will be ready by Thursday.\nRosa: Great. I'll send them over after lunch.",
    },
    {
      type: "text",
      title: "How a strong listener answers",
      body: "1. **New staff are joining her company.** Rosa says *we have two new designers starting next month*. That is the reason for the order.\n2. **$70.** Rosa first says *five hundred*, but then corrects herself: *two hundred and fifty should be plenty*. She rejects standard paper because *they felt a bit thin* and chooses premium. The row *250 cards* and the column *Premium paper* meet at **$70**.\n\n- $65 is the trap for listeners who stop at *five hundred* and assume standard paper.\n- $45 is 250 cards on standard paper, the paper she rejected.\n- $110 is 500 cards on premium paper.\n\n3. **Email the names and job titles.** Kevin says *If you email me the names and job titles today…*. Rosa's reply, *I'll send them over after lunch*, confirms it.\n\nNotice that every distractor in question 2 matches **something** Rosa says. Only the final decision on both quantity and paper leads to the right cell.",
    },
  ],
  practice: [
    {
      type: "table",
      title: "Conversation 1 graphic: departures to Brookfield",
      headers: ["Departs", "Arrives", "Platform", "Service"],
      rows: [
        ["8.15", "9.40", "Platform 2", "Stopping"],
        ["8.45", "9.55", "Platform 5", "Express"],
        ["9.10", "10.35", "Platform 3", "Stopping"],
        ["9.30", "10.40", "Platform 4", "Express"],
      ],
    },
    {
      type: "audio",
      title: "Conversation 1: catching a train to a meeting",
      voice: "us",
      transcript:
        "Mei: Daniel, I don't think we'll make the eight fifteen. The traffic on the bridge is terrible this morning.\nDaniel: Don't worry, Mei. I've just checked the timetable. There's an express a bit later that still gets in before ten.\nMei: Will that give us enough time? The meeting with Lakeside Foods starts at ten thirty, and their office is about fifteen minutes from the station.\nDaniel: It should be fine. And the express is usually quieter, so we can go over the presentation on the way.\nMei: Good, because I still want to change the chart on slide six. The sales figures for March were updated yesterday.\nDaniel: Right. I'll call Lakeside's reception and let them know we'll arrive a little later than we planned.\nMei: Good idea. And I'll buy our tickets online now, so we don't have to queue at the station.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Conversation 1 (TOEIC Part 3 with a graphic)",
        instructions: "Read the questions and the timetable first. Then listen and choose the best answer.",
        questions: [
          {
            prompt: "What problem does Mei mention?",
            options: ["Their train has been cancelled.", "The traffic is very heavy.", "A client meeting has been moved.", "Some sales figures are missing."],
            answer: 1,
            explanation: "“The traffic on the bridge is terrible this morning.” The sales figures were updated, not missing.",
          },
          {
            prompt: "Look at the graphic. Which platform will the speakers' train most likely leave from?",
            options: ["Platform 2", "Platform 3", "Platform 4", "Platform 5"],
            answer: 3,
            explanation: "Daniel chooses “an express a bit later that still gets in before ten”. The only express arriving before ten is the 8.45, which leaves from Platform 5. The 9.30 express arrives at 10.40, after the meeting starts.",
          },
          {
            prompt: "What does Daniel say he will do?",
            options: ["Buy the train tickets", "Change a chart in the presentation", "Contact the client's office", "Book a taxi from the station"],
            answer: 2,
            explanation: "“I'll call Lakeside's reception.” Mei will buy the tickets and change the chart.",
          },
        ],
      },
    },
    {
      type: "table",
      title: "Conversation 2 graphic: Green Leaf Catering lunch platters",
      headers: ["Platter", "Serves", "Price"],
      rows: [
        ["Sandwich selection", "10 people", "£60"],
        ["Vegetarian wraps", "10 people", "£55"],
        ["Salad bowls", "8 people", "£48"],
        ["Hot pasta", "12 people", "£75"],
      ],
    },
    {
      type: "audio",
      title: "Conversation 2: three colleagues order lunch",
      voice: "uk",
      transcript:
        "Olivia: Hassan, Grace, have you got a minute? We need to order lunch for Thursday's training day.\nHassan: Sure, Olivia. How many people are coming?\nOlivia: Ten, including the trainer.\nGrace: I've got the Green Leaf menu here. The hot pasta is really popular, and there'd be enough for everyone.\nHassan: There would, but the training room has nowhere to keep food warm, and the kitchen's on another floor. It'd be cold by the time we served it.\nGrace: Good point. So one of the platters for ten people, then.\nOlivia: Yes, and let's go with whichever is cheaper. Our training budget is almost used up for this quarter.\nGrace: Fine. I'll place the order this afternoon. Should I ask them to deliver at twelve?\nOlivia: Make it half past twelve. The morning session always runs late on the first day.\nHassan: And I'll check with the trainer whether anyone in the group has a food allergy.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Conversation 2 (three speakers)",
        instructions: "Read the questions and the menu first. Then listen and choose the best answer.",
        questions: [
          {
            prompt: "What are the speakers mainly discussing?",
            options: ["Planning a training budget", "Arranging food for a work event", "Choosing a trainer", "Booking a training room"],
            answer: 1,
            explanation: "Olivia says, “We need to order lunch for Thursday's training day,” and the whole conversation is about the order.",
          },
          {
            prompt: "Look at the graphic. Which platter will the speakers order?",
            options: ["Sandwich selection", "Vegetarian wraps", "Salad bowls", "Hot pasta"],
            answer: 1,
            explanation: "The hot pasta is rejected because it would get cold. They want “one of the platters for ten people” and “whichever is cheaper”. Both the sandwiches and the wraps serve ten, and the wraps are cheaper (£55). Salad bowls are the cheapest overall but serve only eight.",
          },
          {
            prompt: "What will Hassan do?",
            options: ["Place the order", "Change the delivery time", "Ask the trainer about food allergies", "Find a way to keep the food warm"],
            answer: 2,
            explanation: "“I'll check with the trainer whether anyone in the group has a food allergy.” Grace will place the order, and Olivia changes the delivery time.",
          },
        ],
      },
    },
    {
      type: "table",
      title: "Conversation 3 graphic: Westgate Business Centre directory",
      headers: ["Floor", "Occupant"],
      rows: [
        ["Ground floor", "Reception and café"],
        ["Floor 1", "Atlas Travel"],
        ["Floor 2", "Brightline Dental Clinic"],
        ["Floor 3", "Corwin and Webb, lawyers"],
        ["Floor 4", "Conference rooms"],
      ],
    },
    {
      type: "audio",
      title: "Conversation 3: a delivery to an office building",
      voice: "uk",
      cast: { Sami: "male" },
      transcript:
        "Ellen: Westgate Business Centre, reception. Ellen speaking.\nSami: Hi Ellen, it's Sami from City Couriers. I'm outside your building with a parcel for Corwin and Webb, the law firm. It needs a signature.\nEllen: Hi Sami. You can bring it straight up, but don't go to their usual floor. Their offices are being repainted this week, so the whole team is working in the conference rooms.\nSami: OK, no problem. Is there anywhere I can park? The street outside is full.\nEllen: Use the loading area behind the building. You can stay there for up to twenty minutes.\nSami: Great. Should I ask for anyone in particular?\nEllen: Ask for Joanna, Mr Webb's assistant. She's expecting it. Oh, and before you go upstairs, you'll need to sign in at the front desk and pick up a visitor's badge.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Conversation 3 (TOEIC Part 3 with a graphic)",
        instructions: "Read the questions and the directory first. Then listen and choose the best answer.",
        questions: [
          {
            prompt: "Why is Sami calling?",
            options: ["To arrange a meeting with a lawyer", "To deliver a parcel", "To ask for directions to the building", "To complain about parking"],
            answer: 1,
            explanation: "Sami works for a courier company and is “outside your building with a parcel”.",
          },
          {
            prompt: "Look at the graphic. Which floor will Sami go to?",
            options: ["Floor 1", "Floor 2", "Floor 3", "Floor 4"],
            answer: 3,
            explanation: "The law firm is usually on Floor 3, but this week “the whole team is working in the conference rooms”, which are on Floor 4. Floor 3 is the trap.",
          },
          {
            prompt: "What does Ellen tell Sami to do before he goes upstairs?",
            options: ["Park on the street", "Call Mr Webb's assistant", "Sign in at the front desk", "Wait for twenty minutes"],
            answer: 2,
            explanation: "“Before you go upstairs, you'll need to sign in at the front desk.” The street is full, and twenty minutes is the time limit for the loading area.",
          },
        ],
      },
    },
    {
      type: "table",
      title: "Conversation 4 graphic: weather forecast for this week",
      headers: ["Day", "Forecast", "Temperature"],
      rows: [
        ["Wednesday", "Sunny", "24°C"],
        ["Thursday", "Heavy rain", "17°C"],
        ["Friday", "Cloudy", "20°C"],
        ["Saturday", "Strong winds", "19°C"],
      ],
    },
    {
      type: "audio",
      title: "Conversation 4: moving a photo shoot",
      voice: "us",
      transcript:
        "Nadia: Liam, have you seen the forecast for this week? Our outdoor photo shoot for the new brochure is on the day with heavy rain.\nLiam: Oh no. We can't take pictures of the garden terrace in the rain. Can we move it?\nNadia: I've already called the photographer, Alberto. He's free on any of the other days this week.\nLiam: What about the end of the week? That would give us more time to get the terrace ready.\nNadia: I thought about that, but it's going to be very windy, and we're planning to have flags and paper decorations in the pictures.\nLiam: True. And a grey, cloudy sky won't really show off the terrace either. So it'll have to be the sunny day.\nNadia: Agreed. That means the caterers need to set up their tables a day earlier than planned. Could you call them this afternoon?\nLiam: Sure. And I'll ask the cleaning team to start on the terrace this afternoon.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "mcq",
        title: "Conversation 4 (TOEIC Part 3 with a graphic)",
        instructions: "Read the questions and the forecast first. Then listen and choose the best answer.",
        questions: [
          {
            prompt: "What problem does Nadia mention?",
            options: [
              "The photographer is not available.",
              "Bad weather is expected on the day of an event.",
              "The terrace is being repaired.",
              "The brochure is behind schedule.",
            ],
            answer: 1,
            explanation: "“Our outdoor photo shoot… is on the day with heavy rain.” The photographer is free on the other days.",
          },
          {
            prompt: "Look at the graphic. On which day will the photo shoot most likely take place?",
            options: ["Wednesday", "Thursday", "Friday", "Saturday"],
            answer: 0,
            explanation: "Thursday (heavy rain) is the original day. Saturday, the end of the week, is rejected because of the wind, and Friday because a cloudy sky won't show off the terrace. Liam says “it'll have to be the sunny day”, which is Wednesday.",
          },
          {
            prompt: "What does Nadia ask Liam to do?",
            options: ["Call the photographer", "Contact the caterers", "Clean the terrace", "Order some decorations"],
            answer: 1,
            explanation: "“Could you call them this afternoon?” refers to the caterers. Nadia has already called the photographer, and the cleaning team, not Liam, will clean the terrace.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "In Parts 3 and 4, read the three questions, and the graphic, before the conversation starts. For a “Look at the graphic” question, check which column the options come from. The speakers will almost always mention a **different** column, so that is the information to listen for.",
    },
    {
      exam: "toeic",
      body: "Graphic questions often have a trap: the row that the speakers mention **first** and then reject. A speaker says *I was going to…*, *that one's no good* or *not their usual floor*. Wait for the final choice before you mark your answer.",
    },
    {
      exam: "toeic",
      body: "Some Part 3 conversations have three speakers. In the real test, questions usually refer to speakers by gender (“the woman”) or by job (“the receptionist”), not by name. As soon as a conversation starts, notice each voice and each person's role, and listen for the names and jobs the speakers mention.",
    },
  ],
  vocabulary: [
    { word: "express", meaning: "(of a train or bus) fast, because it stops at only a few places", example: "The express gets in before ten.", topic: "travel" },
    { word: "platform", meaning: "the place in a station where you get on and off a train", example: "The train leaves from Platform 5.", topic: "travel" },
    { word: "premium", meaning: "of higher quality and more expensive than the standard type", example: "Let's go with premium paper this time.", topic: "business" },
    { word: "put through (an order)", meaning: "to process an order so that it goes ahead", example: "I'll put through two orders today.", topic: "business" },
    { word: "platter", meaning: "a large plate of food for a group of people to share", example: "We ordered a sandwich platter for the meeting.", topic: "everyday" },
    { word: "quarter", meaning: "a period of three months in a company's financial year", example: "Our budget is almost used up for this quarter.", topic: "business" },
    { word: "allergy", meaning: "a medical condition that makes you ill when you eat or touch a particular thing", example: "Does anyone have a food allergy?", topic: "health" },
    { word: "courier", meaning: "a person or company that delivers parcels and documents", example: "A courier is waiting at reception with a parcel.", topic: "work" },
    { word: "loading area", meaning: "a place where vehicles can stop to load or unload goods", example: "Park in the loading area behind the building.", topic: "work" },
    { word: "sign in", meaning: "to write your name when you arrive at a building or event", example: "All visitors must sign in at the front desk.", topic: "work" },
    { word: "brochure", meaning: "a small magazine with pictures that gives information about a product or service", example: "The photos are for the new brochure.", topic: "business" },
    { word: "caterer", meaning: "a person or company that provides food for events", example: "The caterers will set up the tables on Wednesday.", topic: "business" },
  ],
  keyPoints: [
    "In a “Look at the graphic” question, the options come from one column, and the speakers talk about another.",
    "Listen for paraphrases, positions (“right after lunch”), comparisons (“whichever is cheaper”) and changes (“not their usual floor”).",
    "The first row the speakers mention is often a trap: wait for the final decision.",
    "Read all three questions first. They follow the order of the conversation: usually topic or problem, graphic, then next action.",
    "Track each speaker's name and role so that you know who will do what.",
  ],
};

export default lesson;
