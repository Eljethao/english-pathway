import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-service-conversations",
  title: "Shops, services and problems",
  summary:
    "Follow conversations in shops, hotels and service desks: catch the problem, tell the difference between the solutions offered and the one chosen, and understand what happens next.",
  skill: "listening",
  level: "B1",
  order: 8,
  minutes: 25,
  exams: [
    { exam: "toeic", task: "Listening Part 3 – Conversations" },
    { exam: "toefl", task: "Listening – Conversation" },
  ],
  objectives: [
    "Identify the problem and its cause in a service conversation",
    "Tell the difference between the solutions offered and the solution chosen",
    "Understand what each speaker will do next",
    "Choose natural replies in shops and at service desks",
  ],
  warmUp: [
    "Have you ever taken something back to a shop? What was wrong with it, and what did the shop do?",
    "What is the difference between a refund and an exchange?",
  ],
  learn: [
    {
      type: "text",
      title: "The shape of a service conversation",
      body: "Conversations about problems in shops, hotels and offices usually follow five steps:\n\n1. **The problem**: the customer explains what is wrong.\n2. **Questions**: the staff member asks for details (When did you buy it? Do you have the receipt?).\n3. **Solutions**: the staff member offers one or more solutions.\n4. **The decision**: the customer chooses, or they agree on a plan.\n5. **Next steps**: what each person will do now.\n\nExam questions usually follow the same order: What is the problem? Why can't something happen? What does the staff member offer? What will happen next?",
    },
    {
      type: "table",
      title: "Problems and solutions",
      headers: ["The customer says …", "The staff member might offer …"],
      rows: [
        ["It's stopped working. / It doesn't work.", "a **repair**: “We can send it away to be fixed.”"],
        ["It's the wrong size / colour.", "an **exchange**: “You can change it for another size.”"],
        ["I was charged twice.", "a **refund**: “I'll give you your money back.”"],
        ["It arrived damaged.", "a **replacement**: “We'll send you a new one.”"],
        ["There's a small mark on it.", "a **discount**: “I can take ten per cent off.”"],
      ],
    },
    {
      type: "text",
      title: "Offered or chosen?",
      body: "In exam conversations, the staff member often offers **two** solutions, or the customer asks for one thing and gets another. The answer is the solution that is **accepted**, not the first one you hear.\n\nListen for:\n\n- **Refusals**: *I'm afraid we can't …*, *Unfortunately, that's not possible, but …*\n- **Choices**: *I'd rather …*, *I'd prefer …*, *I'll go with …*\n- **Agreement**: *That would be great.*, *OK, that works.*, *That sounds fair.*",
    },
    {
      type: "example",
      title: "Find the final solution",
      items: [
        "“Can I return these shoes?” “**I'm afraid** we can't take back shoes that have been worn, **but** we can send them to be repaired.” “OK.” → **a repair**, not a return",
        "“We can repair it, or I can swap it for a new one.” “**I'd rather** have a new one.” → **a new one**",
        "“Is white OK?” “**Actually, I'd prefer** black. I'll come back on Friday.” → **black, on Friday**",
      ],
    },
    {
      type: "tip",
      exam: "toefl",
      body: "In TOEFL Listen to a Conversation, you hear a short conversation between two people, mostly about campus or daily life, followed by two questions. Many of these conversations are about a problem, so ask yourself: What is the problem, and what will the student do about it?",
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model conversation: faulty headphones",
      voice: "uk",
      cast: { Assistant: "female", Customer: "male" },
      transcript:
        "Assistant: Hi, can I help you?\nCustomer: Yes, I bought these headphones here last week, but the left side has stopped working.\nAssistant: Oh, I'm sorry about that. Do you have the receipt?\nCustomer: Yes, here it is.\nAssistant: Thanks. So, we can send them away for repair, which takes about two weeks, or I can swap them for a new pair today.\nCustomer: I'd rather have a new pair. I use them every day on the train.\nAssistant: No problem. Oh, we don't have any black ones at the moment. Is white OK?\nCustomer: Actually, I'd prefer black. Could I come back for them?\nAssistant: Of course. We'll have more on Friday. I'll keep a pair for you.",
    },
    {
      type: "text",
      title: "How a strong listener does it",
      body: "A strong listener follows the five steps:\n\n1. **Problem:** the left side of the headphones has stopped working.\n2. **Questions:** the assistant asks for the receipt.\n3. **Solutions:** a repair (two weeks) or a new pair today.\n4. **Decision:** “I'd rather have a new pair.” But there is a second problem: no black ones. White is offered, but the customer says “Actually, I'd prefer black.”\n5. **Next steps:** the customer will **come back on Friday**, and the assistant will **keep a pair** for them.\n\nA question like “What will the customer do on Friday?” has a clear answer: collect a new black pair. “Get a refund” is never offered, and “take a white pair” is refused.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice audio 1: a problem in a hotel room",
      voice: "us",
      transcript:
        "Andre: Front desk, this is Andre.\nRuth: Hi Andre, this is Ruth Mendes in room four twelve. The air conditioning in my room is making a really loud noise, and I can't sleep.\nAndre: I'm sorry to hear that. Our maintenance team has gone home for the night, so I can't get it fixed until tomorrow morning.\nRuth: Hmm. I have an early meeting tomorrow, so I really need some sleep.\nAndre: I understand. I can move you to another room on the sixth floor. It's a little larger, and there's no extra charge.\nRuth: That would be great. Do I need to come down to the front desk?\nAndre: No, I'll send someone up with a new key card in about ten minutes. They can help you with your bags too.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "TOEIC-style questions",
        instructions: "Listen to the conversation. Choose the best answer to each question.",
        questions: [
          {
            prompt: "Where does Andre most likely work?",
            options: ["At a repair company", "At a hotel", "At a furniture shop", "At a conference centre"],
            answer: 1,
            explanation: "Andre answers the phone at the “front desk”, Ruth is calling from “room four twelve”, and Andre offers Ruth another room.",
          },
          {
            prompt: "What is the problem?",
            options: [
              "A room is too small.",
              "A key card doesn't work.",
              "A machine is very noisy.",
              "A meeting has been cancelled.",
            ],
            answer: 2,
            explanation: "“The air conditioning in my room is making a really loud noise.” The options describe it in general words: a machine is very noisy.",
          },
          {
            prompt: "Why can't the problem be fixed tonight?",
            options: [
              "A part needs to be ordered.",
              "The maintenance staff have left.",
              "All the other rooms are full.",
              "The repair would be too expensive.",
            ],
            answer: 1,
            explanation: "“Our maintenance team has gone home for the night.” Other rooms are available, because Andre offers one.",
          },
          {
            prompt: "What will Andre do next?",
            options: [
              "Send a new key card to Ruth's room",
              "Call the maintenance team",
              "Give Ruth a discount",
              "Wake Ruth up early tomorrow",
            ],
            answer: 0,
            explanation: "“I'll send someone up with a new key card in about ten minutes.” The new room has no extra charge, but that is not a discount.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 2: five short conversations",
      voice: "uk",
      cast: { Narrator: "male", Customer: "female", Assistant: "male" },
      transcript:
        "Narrator: Conversation one.\nCustomer: This shirt is too small. Can I get my money back?\nAssistant: I'm afraid it was in the sale, so we can't give refunds. But you can change it for a bigger size.\nCustomer: OK, I'll do that.\nNarrator: Conversation two.\nCustomer: My phone screen has a crack in it, and I only bought the phone a month ago.\nAssistant: Let me see. We can fix the screen here. It'll be ready in an hour.\nCustomer: Great, thanks.\nNarrator: Conversation three.\nCustomer: My parcel arrived this morning, but the vase inside was broken.\nAssistant: Oh no, I'm sorry. We'll post you a new one, free of charge.\nCustomer: Thank you.\nNarrator: Conversation four.\nCustomer: Excuse me, I think I was charged twice for the same meal.\nAssistant: You're right, I'm so sorry. I'll pay the extra amount back onto your card now.\nNarrator: Conversation five.\nCustomer: This table has a small scratch on the top.\nAssistant: I can't exchange it, I'm afraid. It's the last one. But I can take twenty per cent off the price.\nCustomer: OK, that sounds fair.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "What solution do they agree on?",
        instructions: "Listen to five short conversations. Match each conversation with the solution the customer gets. There are two extra solutions you do not need.",
        left: ["Conversation 1", "Conversation 2", "Conversation 3", "Conversation 4", "Conversation 5"],
        right: [
          "a lower price",
          "a gift voucher",
          "a repair in the shop",
          "an exchange for a different size",
          "free delivery",
          "a new item sent by post",
          "money back for an extra payment",
        ],
        answer: [3, 2, 5, 6, 0],
      },
    },
    {
      type: "audio",
      title: "Practice audio 3: a computer repair shop",
      voice: "uk",
      cast: { Assistant: "male", Customer: "female" },
      transcript:
        "Assistant: Hello, FixIt Computer Repairs. How can I help?\nCustomer: Hi. My laptop won't charge. When I plug it in, nothing happens.\nAssistant: How old is it?\nCustomer: About three years old.\nAssistant: OK. It's probably the cable, but it could be the battery. We'll need to test it first. The test costs fifteen pounds.\nCustomer: And if it's the battery?\nAssistant: A new battery is about sixty pounds, but we'll phone you before we do any work.\nCustomer: Fine. Can I leave it with you today?\nAssistant: Yes. What's your name?\nCustomer: Hannah Lowe. That's L, O, W, E.\nAssistant: And the best number to call you on?\nCustomer: Oh seven seven double oh, nine double oh, five three six.\nAssistant: Great. It should be ready by Wednesday afternoon.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Form completion: repair request",
        instructions: "Listen and complete the repair form. Write ONE WORD AND/OR A NUMBER for each answer.",
        text: "FixIt Computer Repairs: repair request\n\nProblem: laptop won't {{0}}\nAge of laptop: about {{1}} years\nPossible cause: the cable or the {{2}}\nCost of test: £{{3}}\nCustomer name: Hannah {{4}}\nPhone: {{5}}\nReady by: {{6}} afternoon",
        answers: [
          ["charge"],
          ["3", "three"],
          ["battery"],
          ["15", "15.00", "fifteen"],
          ["Lowe"],
          ["07700 900536", "07700900536", "07700-900536", "07700 900 536"],
          ["Wednesday"],
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 4: at the campus bookstore",
      voice: "us",
      cast: { Student: "female", Employee: "male" },
      transcript:
        "Student: Hi. I ordered the textbook for my biology class online, but I think you sent me the wrong one. This is the third edition, and the professor said we need the fourth.\nEmployee: Let me check your order. Oh, you're right. You ordered the fourth edition. I'm sorry about that.\nStudent: Do you have the right one here?\nEmployee: Unfortunately, the fourth edition is sold out. More copies are arriving on Thursday.\nStudent: But I have a reading assignment due on Wednesday.\nEmployee: Well, the library keeps a copy of every course textbook at the main desk. You can borrow it for two hours at a time. And I'll keep a copy of the new edition for you on Thursday.\nStudent: OK, that works. Should I bring this one back then?\nEmployee: Yes, bring it on Thursday and we'll swap them.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "TOEFL-style questions",
        instructions: "Listen to the conversation. Choose the best answer to each question.",
        questions: [
          {
            prompt: "Why does the student go to the bookstore?",
            options: [
              "To order a book for a new class",
              "To return a book that was damaged",
              "To report that the wrong book was sent",
              "To ask about a reading assignment",
            ],
            answer: 2,
            explanation: "“I think you sent me the wrong one. This is the third edition … we need the fourth.”",
          },
          {
            prompt: "What does the employee suggest the student do before Thursday?",
            options: [
              "Use a copy of the book at the library",
              "Ask the professor for more time",
              "Read the third edition instead",
              "Buy the book from another shop",
            ],
            answer: 0,
            explanation: "“The library keeps a copy of every course textbook at the main desk. You can borrow it for two hours at a time.”",
          },
          {
            prompt: "What will the student most likely do on Thursday?",
            options: [
              "Hand in the reading assignment",
              "Exchange the book for the correct edition",
              "Get a refund for the book",
              "Return the library's copy of the book",
            ],
            answer: 1,
            explanation: "“Bring it on Thursday and we'll swap them.” The assignment is due on Wednesday, and no refund is mentioned.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "respond",
        title: "Choose the best reply",
        instructions: "Listen to each question or comment in a shop or service desk. Choose the most natural reply.",
        items: [
          {
            audio: "I'd like to return this jacket. It's the wrong size.",
            options: ["Do you have your receipt with you?", "It's a really nice colour.", "We return at six o'clock."],
            answer: 0,
            explanation: "Staff usually ask for the receipt when a customer returns something. C repeats *return* with a different meaning.",
          },
          {
            audio: "Can I pay by card?",
            options: ["It's on the card.", "Yes, of course. Just tap it here.", "About twenty dollars."],
            answer: 1,
            explanation: "This is a yes/no question about payment. A repeats *card*, and C answers “How much?”.",
          },
          {
            audio: "I'm afraid this coffee machine is out of order.",
            options: ["I'd like to order a coffee.", "Yes, they're in alphabetical order.", "Oh. Is there another one in the building?"],
            answer: 2,
            explanation: "“Out of order” means broken. C asks for a solution. A and B repeat *order* with different meanings.",
          },
          {
            audio: "Would you like it delivered, or will you take it with you?",
            options: ["Yes, please.", "I'll take it now, thanks. My car's outside.", "It was delivered yesterday."],
            answer: 1,
            explanation: "This is a choice question, so “Yes, please” doesn't work. B chooses one option and gives a reason.",
          },
          {
            audio: "How long will the repair take?",
            options: ["About three days, if we have the parts.", "It's too long for me.", "In the repair shop downstairs."],
            answer: 0,
            explanation: "“How long” needs an amount of time. B repeats *long*, and C answers *where*.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "In Part 3, each conversation has three questions. Service conversations often ask: What is the problem? What does one speaker offer to do? What will happen next? The correct option usually uses general words, such as “a machine is noisy” for “the air conditioning is making a loud noise”.",
    },
    {
      exam: "toeic",
      body: "Be careful with solutions that are mentioned but refused. If the customer asks for a refund and the staff member says “I'm afraid we can't”, then “get a refund” is a trap.",
    },
    {
      exam: "toefl",
      body: "Conversation tasks are short and have two questions, so every line matters. Many questions ask why the student is talking to someone, or what the student will do next. The plan is usually agreed in the last two or three lines.",
    },
  ],
  vocabulary: [
    { word: "refund", meaning: "money that a shop gives back to you", example: "They couldn't give me a refund because it was in the sale.", topic: "business" },
    { word: "exchange", meaning: "to give something back to a shop and get a different one", example: "Can I exchange this shirt for a bigger size?", topic: "business" },
    { word: "replacement", meaning: "a new thing that you get instead of a broken or lost one", example: "They sent me a replacement for the broken vase.", topic: "business" },
    { word: "discount", meaning: "an amount taken off the normal price", example: "I got a twenty per cent discount because of the scratch.", topic: "business" },
    { word: "charge", meaning: "to ask someone to pay an amount of money", example: "I was charged twice for the same meal.", topic: "business" },
    { word: "out of order", meaning: "not working (used for machines in public places)", example: "The lift is out of order today.", topic: "everyday" },
    { word: "sold out", meaning: "with none left to buy because all have been sold", example: "The new edition is sold out until Thursday.", topic: "business" },
    { word: "maintenance", meaning: "the work of checking and repairing buildings and machines", example: "Call maintenance if the heating stops working.", topic: "work" },
    { word: "free of charge", meaning: "without any cost", example: "We'll send you a new one free of charge.", topic: "business" },
    { word: "swap", meaning: "to give one thing and get another thing instead", example: "Bring the book back and we'll swap it for the right one.", topic: "everyday" },
  ],
  keyPoints: [
    "Service conversations follow five steps: problem, questions, solutions, decision, next steps.",
    "The answer is the solution that is accepted, not the first one you hear.",
    "Refusals (*I'm afraid we can't …*) and choices (*I'd rather …*, *I'd prefer …*) show you which solution is final.",
    "Questions about what happens next are usually answered in the last few lines, often with *I'll …*.",
  ],
};

export default lesson;
