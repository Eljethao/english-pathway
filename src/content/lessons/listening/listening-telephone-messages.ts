import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-telephone-messages",
  title: "Telephone messages and voicemail",
  summary:
    "Understand voicemails and recorded phone messages: who is calling, why, what they want you to do and how to contact them, plus how to choose the right option in a phone menu.",
  skill: "listening",
  level: "B1",
  order: 7,
  minutes: 25,
  exams: [
    { exam: "toeic", task: "Listening Part 4 – Talks" },
    { exam: "ielts", task: "Listening Part 1" },
  ],
  objectives: [
    "Identify the caller, the purpose and the request in a voicemail",
    "Write down contact details and other key information from a message",
    "Choose the right option in a recorded phone menu, even when it uses different words",
  ],
  warmUp: [
    "Do you listen to voicemails, or do you prefer text messages? Why?",
    "What information should a good phone message always include?",
  ],
  learn: [
    {
      type: "text",
      title: "What's in a phone message?",
      body: "Most voicemails follow the same order:\n\n1. **Who is calling**: name, and often a company or job.\n2. **Why**: the purpose of the call.\n3. **Details**: what has happened or changed.\n4. **The request**: what the caller wants you to do.\n5. **How to reply**: a phone number, a time or a deadline.\n\nThe first two parts come in the first few seconds, so listen carefully from the start. The request and the contact details usually come at the end.",
    },
    {
      type: "table",
      title: "Signal phrases",
      headers: ["Part of the message", "What you might hear"],
      rows: [
        ["Who is calling", "Hi, it's Priya. / This is Grace from Hamilton Office Supplies."],
        ["Why", "I'm calling about your order. / I'm calling to let you know that …"],
        ["A problem", "I'm afraid … / Unfortunately …"],
        ["The request", "Could you …? / Please … / I'd be grateful if you could …"],
        ["How to reply", "You can reach me on … / Call me back before five. / My direct line is …"],
      ],
    },
    {
      type: "text",
      title: "Who is the speaker?",
      body: "Exam questions often ask *who* the speaker is or *where* they work. The caller doesn't always say their job. Use the clues:\n\n- “This is Chris from Northway Energy. We need to check your gas meter.” → someone from an energy company\n- “The books you asked for are ready at the front desk.” → someone at a library\n- “I'm calling about your table for four tonight.” → someone at a restaurant",
    },
    {
      type: "text",
      title: "Recorded messages and phone menus",
      body: "When you call a business, you often hear a recorded message: opening hours, then a list of options (“For bookings, press one”).\n\nThe options rarely use your exact words. Think about the *type* of problem you have. If you want to move your dentist appointment to another day, the right option is probably “for appointments”, not “for new patients”. If nothing matches, the last option (“for all other questions”) is usually the one.",
    },
    {
      type: "tip",
      exam: "toeic",
      body: "TOEIC Listening Part 4 includes short talks such as announcements and voicemails, each with three questions. Typical voicemail questions are: Who is the speaker? Why is the speaker calling? What does the speaker ask the listener to do?",
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model voicemail: a problem with an order",
      voice: "us",
      cast: { narrator: "female" },
      transcript:
        "Hello, this is Grace Liu from Hamilton Office Supplies. I'm calling about your order for printer paper and ink. I'm afraid the ink is out of stock until next Wednesday. We can send the paper tomorrow as planned and the ink next week, or we can send everything together on Wednesday. Could you call me back and tell me which you'd prefer? My direct line is five five five, oh one nine three. I'm in the office until five thirty today. Thanks, bye.",
    },
    {
      type: "text",
      title: "How a strong listener does it",
      body: "A strong listener hears the message in its five parts:\n\n1. **Who:** Grace Liu, from an office supplies company.\n2. **Why:** “I'm calling about your order.”\n3. **Details:** the ink is out of stock until Wednesday. There are two choices: paper tomorrow and ink later, or everything on Wednesday.\n4. **Request:** “Could you call me back and tell me which you'd prefer?” Grace wants the listener to **choose a delivery option**.\n5. **How to reply:** 555-0193, before 5.30 today.\n\nA typical TOEIC question is “What does the speaker ask the listener to do?” The answer is not “order more ink” or “pay for the order”. It is “**call back with a decision**”.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice audio 1: a voicemail from a garage",
      voice: "us",
      cast: { narrator: "male" },
      transcript:
        "Hi, this is Marcus from Lakeside Auto Repair, calling for Jordan Ortega. We've finished the work on your car. We replaced the front brakes, and we also checked the lights, which are fine. The total is two hundred and forty dollars. That's a little less than we said on the phone, because the parts were cheaper than we expected. You can pick up the car any time before six this evening. If you can't come today, that's no problem, but we're closed tomorrow, so it would need to be Monday. Oh, and when you come, please park at the side of the building, not in front of the doors.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "TOEIC-style voicemail questions",
        instructions: "Listen to the voicemail. Choose the best answer to each question.",
        questions: [
          {
            prompt: "Who most likely is the speaker?",
            options: ["A car salesperson", "A worker at a repair shop", "A parking attendant", "A driving instructor"],
            answer: 1,
            explanation: "Marcus is “from Lakeside Auto Repair” and says “We've finished the work on your car.”",
          },
          {
            prompt: "What does the speaker say about the price?",
            options: [
              "It is lower than the speaker said before.",
              "It includes new lights.",
              "It must be paid by Monday.",
              "It is higher than expected.",
            ],
            answer: 0,
            explanation: "“That's a little less than we said on the phone.” The lights were only checked, not replaced.",
          },
          {
            prompt: "Why does the speaker mention Monday?",
            options: [
              "The car will be ready then.",
              "A new part will arrive then.",
              "The listener can collect the car then if not today.",
              "The garage has a special offer then.",
            ],
            answer: 2,
            explanation: "“If you can't come today … we're closed tomorrow, so it would need to be Monday.” The car is ready now.",
          },
          {
            prompt: "What does the speaker ask the listener to do?",
            options: [
              "Call back before six",
              "Bring the car keys",
              "Pay online",
              "Park at the side of the building",
            ],
            answer: 3,
            explanation: "“When you come, please park at the side of the building.” The request comes at the end of the message.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 2: a message about a flat",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Hello, this message is for Ben Adeyemi. It's Olivia Grant from Parkview Lettings. That's Grant, G, R, A, N, T. I'm calling about the flat on Elm Street. The owner is happy to show it to you on Thursday at ten past five. Sorry, I mean quarter past five. The rent is eight hundred and fifty pounds a month. That includes water, but not electricity. The flat is on the second floor, and there's no lift, just so you know. When you come, please bring some photo ID and a reference from your employer. If Thursday isn't convenient, call me on oh seven seven double oh, nine double oh, four one eight. Thanks, Ben. Bye.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Message completion",
        instructions: "Listen to the voicemail and complete the message. Write ONE WORD AND/OR A NUMBER for each answer.",
        text: "Telephone message\n\nFor: Ben Adeyemi\nFrom: Olivia {{0}}, Parkview Lettings\nAbout: the flat on {{1}} Street\nViewing: Thursday at {{2}}\nRent: £{{3}} a month\nRent includes: {{4}}\nThe flat is on the {{5}} floor (no lift)\nBring: photo ID and a {{6}} from your employer\nCall back on: {{7}}",
        answers: [
          ["Grant"],
          ["Elm"],
          ["5.15", "5:15", "5.15 pm", "5:15 pm", "5.15pm", "5:15pm", "5.15 p.m.", "5:15 p.m.", "17:15", "17.15"],
          ["850", "850.00"],
          ["water"],
          ["second", "2nd"],
          ["reference"],
          ["07700 900418", "07700900418", "07700-900418", "07700 900 418"],
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 3: five short messages",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Message one. Hi Alex, it's Priya. I'm really sorry, but I can't make dinner tonight. My train's been cancelled. Can we do next week instead?\n\nMessage two. Good morning. This is Hollins Pharmacy. Your prescription is ready to collect. We're open until seven this evening.\n\nMessage three. Hello, this is Hana from the sports centre. Just to let you know that your membership ends on the thirtieth of this month. You can renew it online or at reception.\n\nMessage four. Hi, it's Ruth from accounts. I've got your travel expenses form, but the hotel receipt isn't with it. Could you send it to me by Friday?\n\nMessage five. Hello, this is Westfield Dental Practice. Someone has cancelled their appointment tomorrow at nine, so we can see you before your appointment next week. Please call us if you'd like it.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Why are they calling?",
        instructions: "Listen to five messages. Match each message with its main purpose. There are two extra purposes you do not need.",
        left: ["Message 1", "Message 2", "Message 3", "Message 4", "Message 5"],
        right: [
          "to offer an earlier appointment",
          "to complain about a service",
          "to cancel a plan",
          "to ask for a missing document",
          "to confirm a booking",
          "to say that something is ready",
          "to remind the listener about a date",
        ],
        answer: [2, 5, 6, 3, 0],
      },
    },
    {
      type: "audio",
      title: "Practice audio 4: a recorded message",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Thank you for calling Riverside Leisure Centre. We're open from six a.m. until ten p.m. on weekdays, and from eight a.m. until eight p.m. at the weekend. Please listen carefully to the following options. To book a class or a court, press one. For information about swimming lessons for children, press two. To join the centre, or if you have a question about your membership, press three. To report lost property, press four. For all other questions, please stay on the line, and a member of staff will help you.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Which option?",
        instructions: "Listen to the recorded message. Choose the correct answer.",
        questions: [
          {
            prompt: "What time does the centre close on Saturday?",
            options: ["6 p.m.", "8 p.m.", "10 p.m.", "8 a.m."],
            answer: 1,
            explanation: "At the weekend it is open “from eight a.m. until eight p.m.” Ten p.m. is the weekday closing time.",
          },
          {
            prompt: "You want to play badminton with a friend next Tuesday. Which number should you press?",
            options: ["1", "2", "3", "4"],
            answer: 0,
            explanation: "You need to book a court: “To book a class or a court, press one.”",
          },
          {
            prompt: "Your membership card has stopped working. Which number should you press?",
            options: ["1", "2", "3", "4"],
            answer: 2,
            explanation: "This is a question about your membership, so press three.",
          },
          {
            prompt: "You think you left your towel in the changing room yesterday. Which number should you press?",
            options: ["1", "2", "3", "4"],
            answer: 3,
            explanation: "A towel you left behind is lost property: “To report lost property, press four.”",
          },
          {
            prompt: "You want to know if the café sells vegetarian food. What should you do?",
            options: ["Press 1", "Press 2", "Press 4", "Stay on the line"],
            answer: 3,
            explanation: "None of the options is about the café, so this is one of “all other questions”.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "dictation",
        title: "Dictation: phone phrases",
        instructions: "Listen to each sentence and type exactly what you hear.",
        voice: "uk",
        sentences: [
          "I'm calling to let you know that your order is ready.",
          "Could you call me back when you get this message?",
          "I'm afraid I won't be able to come to the meeting.",
          "Please stay on the line to speak to a member of staff.",
          "I'll be in the office until half past five.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "In Part 4, read the three questions before the talk starts. For voicemails, the answer about *who* and *why* usually comes in the first two sentences, and the answer about *what the listener should do* usually comes near the end. Listen for “Could you …?” and “Please …”.",
    },
    {
      exam: "toeic",
      body: "The correct option often describes the speaker in general words. “This is Lee from the Parkside Hotel” becomes “a hotel employee”. Don't look for the exact company name in the options.",
    },
    {
      exam: "ielts",
      body: "Part 1 is an everyday conversation, often with form or note completion, and messages and bookings use the same skills. Names are often spelled, and speakers sometimes correct themselves (“ten past five. Sorry, I mean quarter past”). Always write the final information.",
    },
  ],
  vocabulary: [
    { word: "voicemail", meaning: "a spoken message that someone leaves on your phone", example: "I left you a voicemail this morning.", topic: "everyday" },
    { word: "call back", meaning: "to phone someone who phoned you earlier", example: "Could you call me back after lunch?", topic: "everyday" },
    { word: "direct line", meaning: "a phone number that goes straight to one person, not to reception", example: "My direct line is 555-0193.", topic: "work" },
    { word: "out of stock", meaning: "not available in a shop because it has all been sold", example: "I'm afraid that ink is out of stock until Wednesday.", topic: "business" },
    { word: "viewing", meaning: "a visit to see a flat or house that you might rent or buy", example: "The viewing is on Thursday at quarter past five.", topic: "everyday" },
    { word: "rent", meaning: "money you pay every month to live in a flat or house", example: "The rent includes water but not electricity.", topic: "everyday" },
    { word: "reference", meaning: "a letter from someone, e.g. your employer, that says you are reliable", example: "Please bring a reference from your employer.", topic: "work" },
    { word: "prescription", meaning: "a doctor's note that lets you get medicine from a pharmacy", example: "Your prescription is ready to collect.", topic: "health" },
    { word: "expenses", meaning: "money you spend for your job, which your company pays back", example: "I sent my travel expenses form to accounts.", topic: "work" },
    { word: "receipt", meaning: "a piece of paper that shows you have paid for something", example: "Please attach the hotel receipt to the form.", topic: "business" },
    { word: "stay on the line", meaning: "keep holding the phone and wait to speak to someone", example: "Please stay on the line and a member of staff will help you.", topic: "everyday" },
  ],
  keyPoints: [
    "Voicemails usually follow the same order: who, why, details, request, how to reply.",
    "Who and why come in the first few seconds. The request and contact details usually come at the end.",
    "Exam options describe the speaker and the purpose in general words, so think about meaning, not exact words.",
    "In phone menus, match the type of problem to the option. If nothing matches, the last option is usually right.",
  ],
};

export default lesson;
