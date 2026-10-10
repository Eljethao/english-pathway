import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-announcements-instructions",
  title: "Announcements and instructions",
  summary:
    "Understand public announcements and spoken instructions: find the main message, catch changes to times and places, and follow steps in the right order.",
  skill: "listening",
  level: "B1",
  order: 3,
  minutes: 15,
  exams: [
    { exam: "toefl", task: "Listening – Announcement" },
    { exam: "toeic", task: "Listening Part 4 – Talks" },
    { exam: "ielts", task: "Listening Part 2" },
  ],
  objectives: [
    "Understand the purpose of an announcement and who it is for",
    "Catch key changes to times and places, and what listeners must do",
    "Follow spoken instructions in the correct order",
  ],
  warmUp: [
    "Where do you usually hear announcements? Think of stations, airports, shops and schools.",
    "Have you ever missed important information in an announcement? What happened?",
  ],
  learn: [
    {
      type: "text",
      title: "What announcements usually contain",
      body: "Most announcements follow the same pattern:\n\n1. **Who it is for**: “Attention, passengers travelling to …”, “Good morning, everyone.”\n2. **The main news**: a change, a problem or an event.\n3. **Details**: times, places, numbers.\n4. **What listeners should do**: “Please …”, “Make sure you …”.\n\nThe first sentence or two usually tells you the purpose. The last part often tells you what to do, so keep listening until the end.",
    },
    {
      type: "example",
      title: "Signal words",
      items: [
        "“**Please note that** the library will close early today.” → an important change is coming",
        "“The 9.15 train has been cancelled. **Instead**, passengers should take the replacement bus.” → a new plan",
        "“**Unfortunately**, the swimming pool is closed for repairs.” → a problem",
        "“**Due to** heavy rain, tonight's match has been cancelled.” → the reason",
        "“**Don't forget to** bring your student card.” → something listeners must do",
      ],
    },
    {
      type: "text",
      title: "Following instructions",
      body: "Instructions use sequence words: *first*, *then*, *next*, *after that*, *finally*.\n\nBe careful with **before**, **after**, **once** and **when**. With these words, the order of the words is not always the order of the actions.",
    },
    {
      type: "example",
      title: "Which action comes first?",
      items: [
        "“**First**, scan your card. **Then** choose the number of copies.” → scan, then choose",
        "“**Before** you leave the room, switch off the lights.” → switch off the lights, then leave",
        "“**Once** the light turns green, open the door.” → wait for the green light, then open",
        "“Press start **after** you've closed the lid.” → close the lid, then press start",
      ],
    },
    {
      type: "tip",
      exam: "toefl",
      body: "In the TOEFL task Listen to an Announcement, you hear a short announcement (about 40–85 words) in a classroom or campus setting, for example about a schedule, a rule or an event. Ask yourself what the main message is and what students need to do.",
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model announcement: at the station",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Good morning. This is an announcement for passengers travelling to Bristol. The ten twenty train to Bristol is running about twenty-five minutes late because of a signal problem. This train will now leave from platform six, not platform two. Passengers with seat reservations should note that coach C is closed today, so please sit in any other coach. Hot drinks and snacks are available in the waiting room on platform one. We apologise for the delay to your journey.",
    },
    {
      type: "text",
      title: "How a strong listener does it",
      body: "Use the four-part pattern:\n\n1. **Who is it for?** “Passengers travelling to Bristol.”\n2. **Main news:** the 10.20 train is about **25 minutes late** because of a signal problem.\n3. **Details:** it leaves from **platform 6**. Platform 2 is also mentioned, but “not platform two” tells you it is the old information. Platform 1 is only where the waiting room is.\n4. **What to do:** people with reservations in coach C must **sit in another coach**.\n\nThree platform numbers are mentioned. A strong listener notices which one is new, which one is old and which one is about something else.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice audio 1: a campus announcement",
      voice: "us",
      cast: { narrator: "male" },
      transcript:
        "Good afternoon, everyone. This is a message from the student services office. As many of you know, the main library is getting new computers this month. Because of this work, the library will be closed from Monday the tenth until Wednesday the twelfth.\n\nDuring those three days, you can study in the Science Building, where rooms two oh four and two oh five will be open from eight in the morning until ten at night. Library books that are due during the closure will automatically be renewed for one extra week, so you don't need to do anything. However, if you need to print, please use the printers in the Student Centre, because there aren't any in the Science Building. Thank you.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Campus announcement",
        instructions: "Listen to the announcement. Choose the correct answer.",
        questions: [
          {
            prompt: "What is the main purpose of the announcement?",
            options: [
              "To remind students to return library books",
              "To explain that the library will be closed",
              "To invite students to a science lecture",
              "To advertise new computers for students",
            ],
            answer: 1,
            explanation: "The main news is that “the library will be closed from Monday the tenth until Wednesday the twelfth”. New computers are the reason, not the purpose.",
          },
          {
            prompt: "For how long will the library be closed?",
            options: ["One day", "Two days", "Three days", "One week"],
            answer: 2,
            explanation: "Monday to Wednesday: “During those three days …”. One week is how long books are renewed for.",
          },
          {
            prompt: "What will happen to library books that are due during the closure?",
            options: [
              "They must be returned early.",
              "They will be renewed for a week automatically.",
              "Students must renew them online.",
              "They can be returned to the Student Centre.",
            ],
            answer: 1,
            explanation: "“Library books that are due during the closure will automatically be renewed for one extra week.”",
          },
          {
            prompt: "Where should students go if they need to print something?",
            options: ["The main library", "The Science Building", "Room 204", "The Student Centre"],
            answer: 3,
            explanation: "“If you need to print, please use the printers in the Student Centre.” The Science Building has no printers.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 2: a day trip",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Welcome aboard, everyone, and thank you for joining today's trip to Lake Harmon. My name's Daniel and I'll be your guide. Our journey will take about one and a half hours, and we'll make one stop on the way, at a café called The Mill, for twenty minutes.\n\nWhen we arrive at the lake, you'll have free time until one o'clock. Lunch is at the Boathouse restaurant, which is next to the main car park. In the afternoon, there's a boat trip, if you'd like to join it. It costs eight pounds and you can pay me on the coach.\n\nPlease be back at the coach by half past four, because we need to leave on time. And finally, please keep your ticket with you, as you'll need it to get into the gardens.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Note completion",
        instructions: "Listen to the tour guide and complete the notes. Write ONE OR TWO WORDS AND/OR A NUMBER for each answer.",
        text: "Day trip to Lake Harmon\n\nGuide's name: {{0}}\nJourney time: about {{1}} hours\nStop on the way: a café called The {{2}}\nFree time at the lake until: {{3}}\nLunch: Boathouse restaurant, next to the main {{4}}\nBoat trip price: £{{5}}\nBe back at the coach by: {{6}}\nKeep your ticket to get into the {{7}}",
        answers: [
          ["Daniel"],
          ["1.5", "1 1/2", "1½", "1 ½", "one and a half"],
          ["Mill"],
          ["1", "1.00", "1:00", "one", "one o'clock", "1 o'clock", "1 pm", "1pm", "13:00", "13.00"],
          ["car park"],
          ["8", "8.00", "eight"],
          ["4.30", "4:30", "half past four", "4.30 pm", "4:30 pm", "4.30pm", "4:30pm", "16:30", "16.30"],
          ["gardens", "garden"],
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 3: using the laundry",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Here's how to use the washing machines in the student laundry. First, put your clothes in the machine and close the door firmly. Then add the washing powder. It goes in the small drawer at the top, not inside the machine with your clothes. Next, choose your programme. For most clothes, forty degrees is fine.\n\nBefore you press the start button, you need to pay, so tap your student card on the reader on the wall. When the card is accepted, a green light comes on. Then press start. The wash takes about fifty minutes. Finally, when it's finished, please take your clothes out straight away, so the next person can use the machine.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "order",
        title: "Put the steps in order",
        instructions: "Listen to the instructions. Put the steps in the order you should do them.",
        mode: "lines",
        items: [
          "Put your clothes in and close the door.",
          "Add powder to the drawer at the top.",
          "Choose the programme.",
          "Tap your student card on the reader.",
          "Press the start button.",
          "Take your clothes out when the wash finishes.",
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 4: a talk at work",
      voice: "us",
      cast: { narrator: "female" },
      transcript:
        "Good morning, everyone. I'd like to remind you about tomorrow's fire drill. The alarm will ring at eleven a.m. When you hear it, please stop what you're doing and leave the building by the nearest stairs. Do not use the elevators.\n\nOur meeting point is in the parking lot behind the building, not at the front entrance as it was last year. Team leaders, please bring your team lists so you can check that everyone is there. The drill should take about fifteen minutes. If you have visitors at that time, please take them with you. Thanks for your help, and if you have any questions, please contact Maria in the facilities office.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Talk at work",
        instructions: "Listen to the talk. Choose the best answer to each question.",
        questions: [
          {
            prompt: "What is the talk mainly about?",
            options: ["A move to a new office", "A safety practice", "A team meeting", "A change to parking rules"],
            answer: 1,
            explanation: "The speaker is reminding staff about “tomorrow's fire drill”, which is a safety practice. The parking lot is only the meeting point.",
          },
          {
            prompt: "Where should employees go when the alarm rings?",
            options: [
              "To the front entrance",
              "To the facilities office",
              "To the parking lot behind the building",
              "To the elevators",
            ],
            answer: 2,
            explanation: "“Our meeting point is in the parking lot behind the building, not at the front entrance as it was last year.”",
          },
          {
            prompt: "What are team leaders asked to do?",
            options: [
              "Bring a list of their team members",
              "Meet visitors at reception",
              "Turn off the alarm",
              "Contact Maria",
            ],
            answer: 0,
            explanation: "“Team leaders, please bring your team lists.”",
          },
          {
            prompt: "How long will the drill take?",
            options: ["About 5 minutes", "About 15 minutes", "About 50 minutes", "About an hour"],
            answer: 1,
            explanation: "“The drill should take about fifteen minutes.”",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "In Part 4, read the three questions before the talk begins. Common questions are: Who is the speaker? What is the purpose of the talk? What are the listeners asked to do? The answer to the last question usually comes near the end.",
    },
    {
      exam: "toefl",
      body: "Announcements often contain one main change and one action for students. As you listen, ask yourself: What is changing? What do I need to do? Keeping these two questions in mind helps you notice the details that matter most.",
    },
    {
      exam: "ielts",
      body: "IELTS Part 2 is one speaker talking about a social situation, such as a tour or a guide to a local facility. Listen for signposts like “first”, “after that” and “finally” to keep your place in the questions.",
    },
  ],
  vocabulary: [
    { word: "announcement", meaning: "an official spoken or written message that gives people information", example: "There was an announcement about a platform change.", topic: "travel" },
    { word: "delay", meaning: "a situation in which something happens later than planned", example: "We apologise for the delay to your journey.", topic: "travel" },
    { word: "reservation", meaning: "an arrangement to keep a seat, table or room for you", example: "I have a seat reservation in coach B.", topic: "travel" },
    { word: "closure", meaning: "a time when a place is closed", example: "The road closure caused long traffic jams.", topic: "everyday" },
    { word: "renew", meaning: "to make something, such as a library loan, continue for longer", example: "You can renew your books online.", topic: "education" },
    { word: "due", meaning: "expected or needed by a particular time", example: "My library books are due back on Friday.", topic: "education" },
    { word: "fire drill", meaning: "a practice of what to do if there is a fire", example: "We have a fire drill every six months.", topic: "work" },
    { word: "meeting point", meaning: "a place where people agree to meet", example: "The meeting point is next to the main gate.", topic: "everyday" },
    { word: "apologise", meaning: "to say that you are sorry", example: "The airline apologised for the cancellation.", topic: "everyday" },
    { word: "straight away", meaning: "immediately, without waiting", example: "Please take your clothes out straight away.", topic: "everyday" },
  ],
  keyPoints: [
    "Announcements usually follow the same pattern: who it's for, the main news, the details, what to do.",
    "Listen for change words: *instead*, *now*, *not … but*, *unfortunately*, *due to*.",
    "In instructions, *before*, *after* and *once* can change the order of the actions.",
    "The action listeners must take often comes at the end, so keep listening.",
  ],
};

export default lesson;
