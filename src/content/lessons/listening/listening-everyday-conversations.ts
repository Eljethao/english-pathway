import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-everyday-conversations",
  title: "Understanding everyday conversations",
  summary:
    "Learn to follow everyday conversations in shops, offices and on the phone: first understand who, where and why, then catch the details and notice when speakers change their minds.",
  skill: "listening",
  level: "B1",
  order: 1,
  minutes: 15,
  exams: [
    { exam: "ielts", task: "Listening Part 1" },
    { exam: "toeic", task: "Listening Part 3 – Conversations" },
    { exam: "toefl", task: "Listening – Conversation" },
  ],
  objectives: [
    "Understand who is speaking, where they are and why they are talking",
    "Catch key details such as times, numbers, places and names",
    "Notice when a speaker changes their mind or corrects information",
  ],
  warmUp: [
    "Think of the last phone call you made to a shop, a doctor or a hotel. What information did you have to give?",
    "What do people usually say when they want to change a booking?",
  ],
  learn: [
    {
      type: "text",
      title: "Listen in two steps",
      body: "When you listen to a conversation, don't try to understand every word. Listen in two steps.\n\n1. **Gist first.** In the first few lines, find out three things: *Who* is speaking? *Where* are they? *Why* are they talking (to book something, to complain, to ask for help)?\n2. **Then the details.** Once you know the situation, listen for the information the questions ask about: times, prices, places, names.\n\nThe situation helps you guess what comes next. If a woman calls a restaurant, you can expect to hear a day, a time and a number of people.",
    },
    {
      type: "example",
      title: "Clues to the place and the speakers",
      items: [
        "“**Good afternoon, Hillside Dental Practice.**” → a receptionist at a dentist's",
        "“**Can I see your boarding pass, please?**” → an airport",
        "“**Is that to eat in or take away?**” → a café or fast-food restaurant",
        "“**I'd like to return these. They're due back today.**” → a library",
        "“**Which platform does the next one leave from?**” → a train station",
      ],
    },
    {
      type: "text",
      title: "Listen for changes",
      body: "In real conversations, people often say one thing and then change it. In exams, this happens a lot, because the first piece of information is a trap. The **final** information is usually the answer.\n\nThese words often signal a change:\n\n- *Actually, …*\n- *Sorry, I mean …*\n- *Oh, wait …*\n- *Let's make it … instead.*\n- *I'm afraid that's fully booked, but …*",
    },
    {
      type: "example",
      title: "Changes in action",
      items: [
        "“We could meet on Friday. **Actually**, Saturday is better for me.” → **Saturday**",
        "“The room is £80 a night. **Oh, sorry**, that's the weekend price. During the week it's £65.” → **£65** on weekdays",
        "“I'd like the blue one. **No, wait**, the grey one's cheaper. I'll take that.” → **the grey one**",
      ],
    },
    {
      type: "table",
      title: "Useful phrases you will hear",
      headers: ["What the speaker is doing", "What you might hear"],
      rows: [
        ["Asking for something", "Could I …? / I was wondering if …"],
        ["Offering", "Shall I …? / Would you like me to …?"],
        ["Suggesting", "Why don't we …? / How about …?"],
        ["Agreeing", "That sounds good. / Sure, no problem."],
        ["Saying no politely", "I'm afraid … / I'm not sure that will work."],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "In IELTS Listening Part 1 you hear two people talking about an everyday situation, such as booking a course or reporting a lost item. There is no practice example at the start, and you hear the recording only once, so be ready from the first line. Use the opening lines to get used to the voices and to find out who, where and why.",
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model conversation: booking a table",
      voice: "uk",
      transcript:
        "Waiter: Good evening, Bella Cucina. How can I help?\nWoman: Hi. I'd like to book a table for Saturday evening, please.\nWaiter: Of course. For how many people?\nWoman: There'll be six of us. Oh, actually, my brother can't come now, so five.\nWaiter: Five people. And what time would you like?\nWoman: Is eight o'clock possible?\nWaiter: I'm afraid eight is fully booked. I can offer you seven thirty or nine.\nWoman: Seven thirty is fine.\nWaiter: Lovely. Would you like to sit inside or on the terrace?\nWoman: Inside, please. It's my mother's birthday and she gets cold easily.\nWaiter: Then I'll put a small cake on the table for her. Can I take a name?\nWoman: Yes, it's Sara Lopez.",
      cast: { Waiter: "male" },
    },
    {
      type: "text",
      title: "How a strong listener does it",
      body: "**Gist first.** “Bella Cucina” and “book a table” tell us this is a phone call to a restaurant. The woman wants to make a booking. Why? “It's my mother's birthday.”\n\n**Details.**\n\n- *How many people?* She says six, then “**actually** … so five”. The answer is **5**.\n- *What time?* She asks for eight, but it is “fully booked”. The waiter offers 7.30 or 9 and she chooses **7.30**.\n- *Where will they sit?* Both “inside” and “the terrace” are mentioned. She chooses **inside**.\n\nNotice that six, eight, nine and the terrace are all in the audio, but none of them is the answer. A strong listener waits for the final decision.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice audio 1",
      voice: "us",
      transcript:
        "Man: Hi, I joined last week, but my membership card isn't working. The gate won't open.\nReceptionist: Oh, I'm sorry about that. Can I see the card?\nMan: Sure, here you are.\nReceptionist: Ah, I see the problem. It was set up for the morning plan, so it doesn't work after twelve o'clock.\nMan: But I paid for the full-day plan. I usually come after work.\nReceptionist: You're right, I can see your payment here. Someone made a mistake when they entered your details.\nMan: Can you fix it today? My yoga class starts in ten minutes.\nReceptionist: Of course. I'll print you a new card right now. It'll only take a minute.",
      cast: { Receptionist: "female" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Gist and detail",
        instructions: "Listen to the conversation. Choose the correct answer.",
        questions: [
          {
            prompt: "Where does the conversation probably take place?",
            options: ["At a bank", "At a gym", "At a train station", "At a school office"],
            answer: 1,
            explanation: "The man talks about a “membership card”, a “gate” and a “yoga class”. These are clues to a gym.",
          },
          {
            prompt: "What is the man's problem?",
            options: [
              "He has lost his membership card.",
              "He was charged twice.",
              "His card only works in the morning.",
              "He has missed his class.",
            ],
            answer: 2,
            explanation: "The receptionist says the card “was set up for the morning plan, so it doesn't work after twelve o'clock”.",
          },
          {
            prompt: "When does the man usually go there?",
            options: ["Before work", "At lunchtime", "At the weekend", "After work"],
            answer: 3,
            explanation: "He says, “I usually come after work.”",
          },
          {
            prompt: "What will the receptionist do next?",
            options: [
              "Print a new card",
              "Give the man a refund",
              "Call her manager",
              "Book the man into a later class",
            ],
            answer: 0,
            explanation: "She says, “I'll print you a new card right now.” The class is mentioned, but she doesn't book a different one.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 2",
      voice: "uk",
      transcript:
        "Officer: Good morning, City Buses lost property. How can I help?\nWoman: Hello. I left my bag on one of your buses yesterday.\nOfficer: I'm sorry to hear that. Which bus were you on?\nWoman: The number forty-two, going to the airport.\nOfficer: And what time did you get off?\nWoman: About quarter past five. No, wait, it was later than that. About half past five.\nOfficer: Can you describe the bag?\nWoman: It's a small backpack. It's dark green, with a brown leather pocket on the front.\nOfficer: And what was inside it?\nWoman: My laptop and a library book. Oh, and my umbrella.\nOfficer: Right. A green backpack was handed in last night. You can collect it from our office on Station Road.\nWoman: Great. When are you open?\nOfficer: From nine until four, Monday to Friday. Please bring some photo ID with you, like a passport.",
      cast: { Officer: "male" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Note completion",
        instructions: "Listen and complete the notes. Write ONE OR TWO WORDS AND/OR A NUMBER for each answer.",
        text: "Lost property report\n\nBus number: {{0}}\nTime the woman got off: {{1}}\nColour of bag: {{2}}\nOn the front: a brown leather {{3}}\nItems inside: laptop, library book and {{4}}\nCollect from: the office on {{5}} Road\nBring: photo ID, for example a {{6}}",
        answers: [
          ["42", "forty-two", "forty two"],
          ["5.30", "5:30", "half past five", "half five", "five thirty", "5.30 pm", "5:30 pm", "5.30pm", "5:30pm", "5.30 p.m.", "5:30 p.m.", "17:30", "17.30"],
          ["dark green", "green"],
          ["pocket"],
          ["umbrella", "an umbrella", "my umbrella"],
          ["Station"],
          ["passport"],
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 3",
      voice: "us",
      transcript:
        "Narrator: Conversation one.\nWoman: Can I try these jeans on in a smaller size?\nMan: Sure, the changing rooms are just behind you.\nNarrator: Conversation two.\nMan: I'd like to send this parcel to Canada, please.\nWoman: Put it on the scales for me. Do you need it to arrive by Friday?\nNarrator: Conversation three.\nWoman: Your room is on the fourth floor, and breakfast is served from seven.\nMan: Thanks. And what time do I need to check out?\nNarrator: Conversation four.\nMan: Take one tablet twice a day after meals, and finish the whole box.\nWoman: Will it make me sleepy?\nNarrator: Conversation five.\nWoman: Excuse me, does this one stop at Central Park?\nMan: No, you need the number fifteen. It stops on the other side of the road.",
      cast: { Narrator: "female" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Where are they?",
        instructions: "Listen to five short conversations. Match each conversation with the place where it happens. There are two extra places you do not need.",
        left: ["Conversation 1", "Conversation 2", "Conversation 3", "Conversation 4", "Conversation 5"],
        right: ["A hotel", "A pharmacy", "A restaurant", "A clothes shop", "A bus stop", "A bank", "A post office"],
        answer: [3, 6, 0, 1, 4],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "dictation",
        title: "Everyday phrases",
        instructions: "Listen to each sentence and type exactly what you hear.",
        voice: "uk",
        sentences: [
          "I'd like to book a table for Friday evening, please.",
          "I'm afraid we're fully booked at that time.",
          "Could you tell me how much it costs?",
          "Actually, can we make it a bit later?",
          "Is there anything else I can help you with?",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Read the questions before the audio starts and decide what kind of information you need for each one: a name, a number, a day or a place. The answers come in the same order as the questions.",
    },
    {
      exam: "toeic",
      body: "In Part 3 you read three questions about each conversation. Try to read them before the conversation starts. The first question is often about the gist: where the speakers are, who they are, or what the problem is. The last question is often about what will happen next.",
    },
    {
      exam: "toefl",
      body: "In Conversation tasks, you often need to understand the speaker's problem and what they decide to do. Listen carefully until the end, because the final plan usually comes in the last few lines.",
    },
  ],
  vocabulary: [
    { word: "book", meaning: "to arrange to have a table, room, seat or ticket at a particular time", example: "I've booked a table for seven thirty.", topic: "everyday" },
    { word: "fully booked", meaning: "with no free places, rooms or tables left", example: "Sorry, the hotel is fully booked this weekend.", topic: "travel" },
    { word: "membership", meaning: "being a member of a club or group; often something you pay for", example: "My gym membership costs £30 a month.", topic: "everyday" },
    { word: "lost property", meaning: "things that people have lost, or the office where they are kept", example: "Ask at lost property if you left something on the train.", topic: "travel" },
    { word: "hand in", meaning: "to give something to a person in charge, e.g. at reception", example: "Someone handed in a wallet at the front desk.", topic: "everyday" },
    { word: "collect", meaning: "to go and get something from a place", example: "You can collect your tickets at the box office.", topic: "everyday" },
    { word: "photo ID", meaning: "an official card or document with your photo on it, such as a passport", example: "Please bring photo ID when you pick up the parcel.", topic: "everyday" },
    { word: "check out", meaning: "to leave a hotel after paying for your room", example: "We have to check out by eleven o'clock.", topic: "travel" },
    { word: "refund", meaning: "money that is given back to you, e.g. when you return something", example: "The shop gave me a full refund.", topic: "business" },
    { word: "describe", meaning: "to say what someone or something is like", example: "Can you describe the bag you lost?", topic: "everyday" },
  ],
  keyPoints: [
    "Listen for the gist first: who is speaking, where they are and why.",
    "Then listen for the details the questions ask about, such as numbers, times and names.",
    "Words like *actually*, *sorry, I mean* and *I'm afraid* often signal a change. The final information is usually the answer.",
    "Many wrong options are mentioned in the audio, so don't choose an answer just because you heard the word.",
  ],
};

export default lesson;
