import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-multiple-choice-strategies",
  title: "Multiple-choice reading strategies",
  summary:
    "Answer multiple-choice reading questions with more confidence: find the answer in the text first, then cross out each wrong option for a clear reason. Practise with everyday texts in IELTS General Training, TOEFL and TOEIC style.",
  skill: "reading",
  level: "B1",
  order: 11,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Reading – Multiple choice" },
    { exam: "toefl", task: "Reading – Read in Daily Life" },
    { exam: "toeic", task: "Reading Part 7 – Reading Comprehension" },
  ],
  objectives: [
    "Find the answer in the text before you look at the options",
    "Cross out wrong options for five clear reasons",
    "Answer NOT questions and \"choose TWO\" questions",
  ],
  warmUp: [
    "When you do a multiple-choice question, do you read the options first or the text first? Why?",
    "Have you ever chosen an option because it used the same words as the text, and then found out it was wrong?",
  ],
  learn: [
    {
      type: "text",
      title: "Find the answer, then remove the rest",
      body: "In a multiple-choice question, only one option is fully correct. The other options are written to **look** correct. They often use words from the text, or talk about the right topic but give the wrong detail.\n\nSo a strong reader does two things:\n\n1. **Finds the answer in the text first.** Read the question (not the options yet), underline the key words, find the right part of the text and read it slowly. Try to say the answer in your own words.\n2. **Proves that the other options are wrong.** Read the options and cross out each wrong one **for a reason**. Then check the last option against the text one more time.\n\nIf you can't find a reason to cross out an option, read that part of the text again.",
    },
    {
      type: "passage",
      title: "Mini text: the museum café",
      paragraphs: [
        "The museum café is open from 10 a.m. to 4 p.m., Tuesday to Sunday. On Mondays, when the museum is closed, the café is used for private events. Hot food is served until 2 p.m., but sandwiches and cakes are available all day.",
      ],
    },
    {
      type: "table",
      title: "Five reasons to cross out an option",
      headers: ["Reason", "What it means", "Example (question: What can visitors buy at 3 p.m.?)"],
      rows: [
        ["Not in the text", "The text does not say this at all.", "*Coffee and tea* (the text never mentions drinks)"],
        ["Wrong detail", "The text talks about this, but the time, number, place or person is different.", "*A hot lunch* (hot food is only served until 2 p.m.)"],
        ["Word trap", "It repeats words from the text, but the meaning is different.", "*Food from a private event* (private events are on Mondays, and are not for visitors)"],
        ["True but not the answer", "The text says this, but it does not answer this question.", "*The café opens at 10 a.m.* (true, but the question is about 3 p.m.)"],
        ["Too strong", "A word like *always, never, all, only* or *every* makes it wrong.", "*Only cakes* (sandwiches are also available)"],
      ],
    },
    {
      type: "text",
      title: "Two special question types",
      body: "**NOT questions.** *Which of the following is NOT mentioned?* Here, three options **are** in the text. Find each one and cross it out. The option you can't find is the answer.\n\n**Choose TWO.** Some questions have five options and ask you to choose two. Treat each option like a True/False question: is it true according to the text? Choose the two that are true. Don't choose an option just because it sounds sensible.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: why is it wrong?",
        instructions: "Use the mini text about the museum café. Each option below is wrong. Choose the best reason.",
        questions: [
          {
            prompt: "Question: *What can visitors buy at 3 p.m.?* Wrong option: *Soup and a hot meal.*",
            options: ["Wrong detail", "Not in the text", "Too strong"],
            answer: 0,
            explanation: "The text talks about hot food, but it is only served until 2 p.m. The time is wrong.",
          },
          {
            prompt: "Question: *When is the café open to visitors?* Wrong option: *Every day from 10 a.m. to 4 p.m.*",
            options: ["Not in the text", "Word trap", "Too strong"],
            answer: 2,
            explanation: "*Every day* is too strong: on Mondays the café is used for private events.",
          },
          {
            prompt: "Question: *What happens in the café on Mondays?* Wrong option: *Visitors can buy cheaper food.*",
            options: ["Not in the text", "Wrong detail", "True but not the answer"],
            answer: 0,
            explanation: "The text says nothing about prices. Don't add information from your own ideas.",
          },
          {
            prompt: "Question: *What happens in the café on Mondays?* Wrong option: *The museum is closed.*",
            options: ["Too strong", "Word trap", "True but not the answer"],
            answer: 2,
            explanation: "The museum **is** closed on Mondays, but that is not what happens in the café. The answer is that the café is used for private events.",
          },
        ],
      },
    },
    {
      type: "tip",
      exam: "ielts",
      body: "In IELTS Reading, multiple-choice options often use different words from the text (*tools are kept in the shed* → *equipment is stored in a building*). An option with exactly the same words as the text is not always right: check that the meaning is the same.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "Westbrook Community Garden: information for new members",
      labelled: true,
      paragraphs: [
        "Welcome to Westbrook Community Garden! Here is some information to help you in your first few weeks.",
        "Your plot. Every member has a plot of about 10 square metres. You can grow anything you like, but please do not plant trees, because their roots damage the paths. You must keep your plot tidy. If a plot is not used for three months, we will offer it to someone on our waiting list.",
        "Tools and water. Tools are kept in the green shed next to the main gate. You can borrow them at any time, but please clean them and return them on the same day. Water is free, but in summer we ask members to water their plots before 9 a.m. or after 6 p.m., when less water is lost in the heat.",
        "Work days. On the first Saturday of every month, members work together on shared jobs, such as cutting the grass and repairing fences. These work days start at 10 a.m. and finish with lunch at 1 p.m. Please try to come to at least four work days a year.",
        "Fees. Membership costs £40 a year. Students and people over 65 pay half price. You can pay at the office, which is open on Wednesday and Saturday mornings.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader answers",
      body: "**Question 1: Why should members not plant trees?**\n\nA. Trees need too much water.\nB. Their roots cause damage.\nC. They make the plot untidy.\nD. Trees are only allowed on large plots.\n\nThe key words are *not plant trees*. Paragraph B says: *do not plant trees, because their roots damage the paths*. My answer in my own words: the roots damage things.\n\n- A: the text doesn't say this → **not in the text**.\n- C: *tidy* is in the text, but in a different sentence about keeping your plot tidy → **word trap**.\n- D: the text never talks about large plots → **not in the text**.\n- B matches. **Answer: B.**\n\n**Question 2: What are members asked to do in summer?**\n\nA. Water their plots only at certain times of day.\nB. Pay extra for the water they use.\nC. Return tools before 9 a.m.\nD. Come to every work day.\n\nParagraph C: *in summer we ask members to water their plots before 9 a.m. or after 6 p.m.* My answer: water early or late.\n\n- B: the text says water is **free** → **wrong detail**.\n- C: *9 a.m.* is about watering, not tools; tools go back *on the same day* → **word trap**.\n- D: *every* is too strong, and work days are not about summer; members should come to *at least four* a year → **too strong**.\n- **Answer: A.** *Before 9 a.m. or after 6 p.m.* = *certain times of day*.",
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Harbour Ferries: travelling with bikes, pets and luggage",
      labelled: true,
      timerMinutes: 6,
      paragraphs: [
        "Bicycles. Bicycles can be taken on all ferries except the 7.30 a.m. and 5.15 p.m. services from Monday to Friday, when the boats are busiest. There is no charge for standard bicycles, but electric bikes cost £2 each way because they must be stored in a special area. Folding bikes that are folded and carried in a bag count as luggage, so they can travel on any ferry.",
        "Pets. Dogs are welcome on the outside deck and must be kept on a lead at all times. Small pets, such as cats and rabbits, must travel in a closed box. Only assistance dogs are allowed inside the passenger cabin. Please bring water for your animal, as the ferry café cannot provide bowls.",
        "Luggage. Each passenger may bring two large bags and one small bag free of charge. Large items such as surfboards and pushchairs can usually be carried, but staff may refuse them if the ferry is full. Bags must not be left on the stairs or in the doorways.",
        "Lost property. If you leave something on a ferry, contact the ticket office at Pier 3 within 30 days. Items that are not collected after this time are given to charity. We are sorry, but we cannot post lost items to passengers.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Practice 1: IELTS General Training multiple choice",
        instructions: "Read the information from Harbour Ferries. Choose the correct answer. For question 3, choose TWO answers.",
        questions: [
          {
            prompt: "1. When can a standard bicycle NOT be taken on the ferry?",
            options: [
              "At weekends",
              "On two weekday services",
              "On any service after 5.15 p.m.",
              "When it is folded in a bag",
            ],
            answer: 1,
            explanation: "Paragraph A: all ferries except the 7.30 a.m. and 5.15 p.m. services from Monday to Friday. A is the opposite (the limit is on weekdays). C is a word trap: only the 5.15 service itself is a problem. D: folded bikes can travel on any ferry.",
          },
          {
            prompt: "2. Why do electric bikes cost extra?",
            options: [
              "They are heavier than standard bikes.",
              "They can only travel at busy times.",
              "They are counted as luggage.",
              "They have to be kept in a special place.",
            ],
            answer: 3,
            explanation: "Paragraph A: “electric bikes cost £2 each way because they must be stored in a special area”. A is not in the text. C is a word trap: it is folding bikes that count as luggage.",
          },
          {
            prompt: "3. Which TWO statements about pets are correct?",
            options: [
              "Dogs must stay on a lead.",
              "All dogs can travel inside the cabin.",
              "Cats must travel in a closed box.",
              "The café sells water for animals.",
              "Rabbits are not allowed on the ferry.",
            ],
            answer: [0, 2],
            explanation: "Paragraph B: dogs “must be kept on a lead at all times” and small pets such as cats “must travel in a closed box”. B is too strong (only assistance dogs). D is a word trap (you must bring your own water). E is wrong: rabbits can travel in a box.",
          },
          {
            prompt: "4. What does the text say about surfboards?",
            options: [
              "They are never allowed on the ferry.",
              "Passengers must pay extra for them.",
              "They may not be accepted when the ferry is full.",
              "They must be left near the doors.",
            ],
            answer: 2,
            explanation: "Paragraph C: large items “can usually be carried, but staff may refuse them if the ferry is full”. A is too strong. D is the opposite: bags must not be left in doorways.",
          },
          {
            prompt: "5. What happens to lost property that nobody collects within 30 days?",
            options: [
              "It is posted to the owner.",
              "It is given to charity.",
              "It stays at the Pier 3 office.",
              "It is sold by the ticket office.",
            ],
            answer: 1,
            explanation: "Paragraph D: “Items that are not collected after this time are given to charity.” A is the opposite: they cannot post lost items.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Read in Daily Life: two short texts",
      paragraphs: [
        "Text 1: Email",
        "From: Dr. Ana Ruiz | To: Biology 101 students | Subject: Thursday's lab",
        "Hi everyone, Thursday's lab session will be held in Room 214 instead of the usual lab, because the heating system in the science building is being repaired. Please bring your lab coat and safety glasses as normal. We won't use any chemicals this week, so the session will finish 30 minutes early, at 3.30. If you missed last week's session, please email me before Wednesday so I can send you the notes you need. Thanks, Dr. Ruiz",
        "Text 2: Notice on a student website",
        "FOR SALE: Desk and chair. I'm moving out at the end of May, so I'm selling my desk and office chair. The desk is wooden, 120 cm wide, with two drawers. There's a small scratch on the top, but otherwise it's in excellent condition. The chair is only a year old. $60 for both, or $45 for the desk alone. The chair isn't sold separately. You'll need to collect them yourself from Elm Hall: I don't have a car. Message Jordan at 555-0148.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Practice 2: TOEFL Read in Daily Life",
        instructions: "Answer the questions about the two short texts. Read each question first, then find the answer in the text.",
        questions: [
          {
            prompt: "Text 1: Why is the lab session in a different room?",
            options: [
              "The usual lab is needed for an exam.",
              "Chemicals are being stored in the lab.",
              "More students have joined the class.",
              "Repairs are taking place in the science building.",
            ],
            answer: 3,
            explanation: "“because the heating system in the science building is being repaired”. B is a word trap: chemicals are mentioned for a different reason.",
          },
          {
            prompt: "Text 1: What is true about Thursday's session?",
            options: [
              "It will end earlier than usual.",
              "Students do not need safety glasses.",
              "It will start at 3.30.",
              "It has been cancelled.",
            ],
            answer: 0,
            explanation: "“the session will finish 30 minutes early, at 3.30”. C is a wrong detail: 3.30 is the finishing time. B is the opposite.",
          },
          {
            prompt: "Text 1: What should students who missed last week's session do?",
            options: [
              "Come to Room 214 early",
              "Send an email to Dr. Ruiz",
              "Bring last week's notes",
              "Ask a classmate for help",
            ],
            answer: 1,
            explanation: "“If you missed last week's session, please email me before Wednesday”. C is a word trap: Dr. Ruiz will send the notes.",
          },
          {
            prompt: "Text 2: What problem does the desk have?",
            options: [
              "One of the drawers is broken.",
              "It is too small for most rooms.",
              "There is a mark on its surface.",
              "It is several years old.",
            ],
            answer: 2,
            explanation: "“There's a small scratch on the top” = a mark on its surface. A is a word trap: drawers are mentioned, but nothing is broken. D: the text gives the chair's age, not the desk's.",
          },
          {
            prompt: "Text 2: What can a buyer NOT do?",
            options: [
              "Buy only the desk",
              "Buy the desk and the chair together",
              "Buy only the chair",
              "Collect the items from Elm Hall",
            ],
            answer: 2,
            explanation: "Find the other three in the text: “$45 for the desk alone”, “$60 for both”, “collect them yourself from Elm Hall”. But “The chair isn't sold separately”, so the buyer can't buy only the chair.",
          },
          {
            prompt: "Text 2: Why must buyers collect the items themselves?",
            options: [
              "Jordan is busy at the end of May.",
              "Jordan does not have a vehicle.",
              "The desk is too heavy to carry.",
              "Elm Hall is close to the campus.",
            ],
            answer: 1,
            explanation: "“I don't have a car” = no vehicle. A is a word trap: the end of May is when Jordan moves out.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Web page: Fresh Fork Catering",
      paragraphs: [
        "Fresh Fork Catering: lunch for your office",
        "Fresh Fork has been delivering healthy lunches to offices in the city centre since 2018. Choose from our daily menu of salads, soups, wraps and hot dishes, all made in our own kitchen on Mill Street.",
        "How to order: Orders must be placed on our website by 10 a.m. for delivery the same day. For groups of more than 20 people, please order at least two days in advance. Lunches are delivered between 11.30 a.m. and 1 p.m.",
        "Prices and payment: Individual lunches start at $9. Delivery is free for orders over $80; smaller orders have a $7 delivery charge. Companies that order every week can open an account and pay once a month.",
        "Special diets: Every dish on our menu is labelled, so you can easily find vegetarian and gluten-free options. If someone in your group has a food allergy, please call us before ordering.",
        "New this month: try our breakfast boxes, available for delivery from 8 a.m.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Practice 3: TOEIC Part 7",
        instructions: "Read the web page. Choose the best answer.",
        questions: [
          {
            prompt: "1. What is the main purpose of the web page?",
            options: [
              "To advertise a food delivery service",
              "To announce the opening of a new restaurant",
              "To explain an increase in delivery prices",
              "To find new kitchen staff",
            ],
            answer: 0,
            explanation: "The whole page describes the lunch service, how to order and the prices. B is wrong: Fresh Fork has been working since 2018. C and D are not in the text.",
          },
          {
            prompt: "2. What is NOT mentioned about ordering?",
            options: [
              "The latest time to order for delivery the same day",
              "Ordering early for large groups",
              "A discount for first-time customers",
              "Paying once a month with an account",
            ],
            answer: 2,
            explanation: "A: “by 10 a.m.”. B: “at least two days in advance”. D: “pay once a month”. A discount for new customers is not mentioned.",
          },
          {
            prompt: "3. A company orders lunch for 12 people, and the food costs $75. How much will it pay for delivery?",
            options: ["Nothing", "$7", "$9", "$80"],
            answer: 1,
            explanation: "Delivery is free only for orders **over** $80. $75 is less than $80, so there is a $7 delivery charge.",
          },
          {
            prompt: "4. What should customers do if someone in their group has a food allergy?",
            options: [
              "Choose only gluten-free dishes",
              "Order at least two days in advance",
              "Write a note on the website",
              "Telephone Fresh Fork before they order",
            ],
            answer: 3,
            explanation: "“please call us before ordering”. A is a word trap from the sentence before. B is about groups of more than 20.",
          },
          {
            prompt: "5. What is suggested about Fresh Fork?",
            options: [
              "It has recently started delivering breakfast.",
              "It has kitchens in several parts of the city.",
              "It stops working at 1 p.m.",
              "It is planning to open a café.",
            ],
            answer: 0,
            explanation: "“New this month: try our breakfast boxes” suggests breakfast is a recent addition. B is wrong: it has its own kitchen on Mill Street. C is a wrong detail: 1 p.m. is the end of lunch deliveries, not of the working day.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "match",
        title: "Why is each option wrong?",
        instructions:
          "Each option below is wrong. Use the ferry text and the Fresh Fork web page. Match each wrong option to the best reason. Use each reason once.",
        left: [
          "What does the ferry text say about surfboards? → “They are never allowed.”",
          "What should passengers bring for their dog? → “A bowl from the ferry café.”",
          "Why do electric bikes cost extra? → “They are heavier than standard bikes.”",
          "Why do electric bikes cost extra? → “Bikes can't go on the 7.30 a.m. weekday ferry.”",
          "When are Fresh Fork lunches delivered? → “From 8 a.m.”",
        ],
        right: [
          "Not in the text",
          "Wrong detail",
          "Word trap",
          "True but not the answer",
          "Too strong",
        ],
        answer: [4, 2, 0, 3, 1],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In General Training Reading, Section 1 uses short everyday texts such as notices, adverts and timetables. Multiple-choice answers usually come in the same order as the text, so if question 2 is in paragraph B, question 3 is probably in paragraph B or later. When a question says *choose TWO*, check each option separately against the text.",
    },
    {
      exam: "toefl",
      body: "Read in Daily Life uses short texts such as emails, notices and messages, each with 2 or 3 multiple-choice questions. The texts are short, so read the question first, find the sentence you need, and then remove the options that are wrong.",
    },
    {
      exam: "toeic",
      body: "Part 7 often asks *What is NOT mentioned?* or *What is indicated about…?* For NOT questions, find three options in the text and choose the one left. There is no penalty for a wrong answer, so if you run out of time, cross out what you can and then guess.",
    },
  ],
  vocabulary: [
    { word: "option", meaning: "one of the answers you can choose from", example: "Read all four options before you choose.", topic: "education" },
    { word: "plot", meaning: "a small piece of land for growing plants or building on", example: "She grows tomatoes on her plot in the community garden.", topic: "everyday" },
    { word: "shed", meaning: "a small wooden building used for storing tools", example: "The lawnmower is in the shed at the bottom of the garden.", topic: "everyday" },
    { word: "waiting list", meaning: "a list of people who are waiting for something", example: "There is a two-month waiting list for the course.", topic: "everyday" },
    { word: "lead", meaning: "a long strap or rope used to hold a dog (US: leash)", example: "Dogs must be kept on a lead in the park.", topic: "everyday" },
    { word: "deck", meaning: "the floor of a ship, especially the outside part", example: "We sat on the deck and watched the island get closer.", topic: "travel" },
    { word: "charity", meaning: "an organisation that helps people in need", example: "We gave our old clothes to a children's charity.", topic: "society" },
    { word: "in advance", meaning: "before a particular time or event", example: "Please book your tickets in advance.", topic: "business" },
    { word: "allergy", meaning: "a medical condition that makes you ill when you eat or touch something", example: "He has an allergy to nuts.", topic: "health" },
    { word: "scratch", meaning: "a thin mark on a surface made by something sharp", example: "There's a scratch on the screen of my phone.", topic: "everyday" },
    { word: "collect", meaning: "to go somewhere and take something or someone away", example: "You can collect your parcel from the post office.", topic: "everyday" },
  ],
  keyPoints: [
    "Find the answer in the text first, and say it in your own words, before you look closely at the options.",
    "Cross out each wrong option for a reason: not in the text, wrong detail, word trap, true but not the answer, or too strong.",
    "An option that repeats words from the text is often a trap; the correct answer usually uses different words with the same meaning.",
    "For NOT questions, find three options in the text; for choose TWO, check each option like a True/False statement.",
  ],
};

export default lesson;
