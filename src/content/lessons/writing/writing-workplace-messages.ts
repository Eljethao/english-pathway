import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-workplace-messages",
  title: "Short messages at work",
  summary:
    "Write short, clear work messages: notes to colleagues, replies to requests and progress updates. Put the main point first, answer every request, and practise the TOEIC reply task and a TOEFL-style email.",
  skill: "writing",
  level: "B1",
  order: 11,
  minutes: 30,
  exams: [
    { exam: "toeic", task: "Writing – Respond to a written request" },
    { exam: "toefl", task: "Writing – Write an Email" },
  ],
  objectives: [
    "Write a clear subject line and put the main point of a message first",
    "Use polite, direct phrases to give an update, ask for action and offer help",
    "Answer every request in an email with one short paragraph for each point",
    "Write a TOEIC-style reply in 10 minutes and a TOEFL-style email in 7 minutes",
  ],
  warmUp: [
    "What kinds of messages do people send at work or at school? Think of three.",
    "What makes a work email annoying to read?",
  ],
  learn: [
    {
      type: "text",
      title: "Three kinds of short message",
      body: "At work, most writing is short. Three kinds of message are very common:\n\n- **Notes** to a colleague: a reminder, a phone message, a quick request.\n- **Replies**: answering a question or a request from a colleague, manager or customer.\n- **Updates**: telling someone what you have done, what you are still doing and what the next step is.\n\nBusy readers want to understand the message quickly. So:\n\n1. **Put the main point first.** Say why you are writing in the first one or two sentences.\n2. **Keep one topic per message**, with a clear subject line.\n3. **Say exactly what you need** and when: *Could you send me the report **by Thursday**?*\n4. **Be polite but direct.** Short sentences are fine in a work message.",
    },
    {
      type: "table",
      title: "Useful phrases",
      headers: ["Purpose", "Phrases"],
      rows: [
        ["Starting a reply", "Thanks for your email about… / Thank you for getting in touch."],
        ["Giving an update", "Just a quick update on… / I'm writing to let you know that… / I've finished… / I'm still waiting for…"],
        ["Explaining a problem", "Unfortunately, … / I'm afraid that…"],
        ["Asking for action", "Could you please… by Friday? / Would it be possible to…? / Please let me know if…"],
        ["Apologising", "Sorry for the delay in replying. / I apologise for any inconvenience."],
        ["Offering help", "If you need anything else, just let me know. / I'd be happy to…"],
        ["Closing", "Thanks in advance. / Best regards, / Kind regards,"],
      ],
    },
    {
      type: "example",
      title: "Weak and strong subject lines",
      items: [
        "Weak: *Hello* → Strong: **Meeting room change: Thursday at 2 p.m.**",
        "Weak: *Question* → Strong: **Sales report: can we move the deadline to Friday?**",
        "Weak: *Important!!!* → Strong: **Office closed on Monday for repairs**",
      ],
    },
    {
      type: "text",
      title: "Answer every request",
      body: "Many emails ask for more than one thing. Before you reply, **number the requests**. For example, an email might ask you to *confirm a date*, *suggest a time* and *say who will attend*. That is three points, so your reply needs three answers.\n\nA simple plan for a reply:\n\n1. Thank the writer, or say what you are replying to.\n2. One short paragraph for each request.\n3. A closing line: an offer of help or a polite request for a reply.",
    },
    {
      type: "tip",
      exam: "toeic",
      body: "In **Respond to a written request** you read an email and the directions tell you who you are and what your reply must do, for example *give TWO pieces of information and ask ONE question*. Count the points in the directions and check them off before you finish.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: clear work messages",
        questions: [
          {
            prompt: "Which is the best subject line for an email that tells your team the Friday meeting has moved to Monday?",
            options: ["Meeting", "Hi everyone!", "Friday team meeting moved to Monday", "Please read this email"],
            answer: 2,
            explanation: "It tells readers the main point before they open the email.",
          },
          {
            prompt: "Where should you put the main point of a short work message?",
            options: [
              "In the first one or two sentences",
              "In the last sentence",
              "In the middle, after some general news",
              "In a separate email",
            ],
            answer: 0,
            explanation: "Busy readers want to know why you are writing straight away.",
          },
          {
            prompt: "Which sentence is too informal for an email to a manager you do not know well?",
            options: [
              "Could you please send me the file when you have a moment?",
              "Hey! Send me the file ASAP, OK?",
              "Would it be possible to receive the file by Friday?",
              "I'd be grateful if you could send me the file.",
            ],
            answer: 1,
            explanation: "*Hey!*, *ASAP* and *OK?* sound too casual and a little rude to a manager. The other sentences are polite requests.",
          },
          {
            prompt: "Which closing sentence asks for action most clearly?",
            options: [
              "Let me know what you think about things.",
              "Could you please confirm by Thursday whether you can come to the training?",
              "Thanks for everything.",
              "Maybe we can talk about it sometime.",
            ],
            answer: 1,
            explanation: "It says what the reader must do (*confirm whether you can come*) and when (*by Thursday*).",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "passage",
      title: "The email you received",
      paragraphs: [
        "From: Karen Wu, Office Manager",
        "To: Design team",
        "Subject: Moving to the third floor",
        "Hi all,",
        "As you know, our team is moving to the third floor on 14 June. To help us plan, please reply by Friday and tell me what you need for your new desk. If you have any questions about the move, please ask them in your reply.",
        "Thanks,",
        "Karen",
      ],
    },
    {
      type: "text",
      title: "The task",
      body: "*Respond to the email as if you are a member of the design team. In your email, give TWO pieces of information about what you need and ask ONE question.*",
    },
    {
      type: "passage",
      title: "Model reply",
      paragraphs: [
        "Subject: Re: Moving to the third floor",
        "Hi Karen,",
        "Thanks for organising the move. I have two requests for my new desk. First, I use two computer screens for my design work, so I will need a desk that is big enough for both of them. Second, I sometimes have back pain, so I would be grateful if I could keep the adjustable chair that I use now.",
        "I also have a question. Will we have our own lockers on the third floor, or should I take my personal things home before the move?",
        "Please let me know if you need any more information.",
        "Best regards,",
        "Daniel",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **The task has three points**: two pieces of information and one question. Daniel answers all three, and each one is easy to find.\n- **Signals**: *I have two requests*, *First*, *Second*, *I also have a question* show the reader the structure.\n- **Each request has a reason**: *for my design work*, *I sometimes have back pain*. This makes the request reasonable and polite.\n- **Tone**: friendly but professional (*Hi Karen*, *Best regards*). Karen wrote *Hi all*, so *Hi Karen* is the right level.\n- **A clear subject line** (*Re:* shows it is a reply) and a short closing line.\n\nLength: about 100 words, which is realistic in 10 minutes.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Complete the update",
        instructions: "Complete the email with words from the box. There are two extra words.",
        text: "Subject: Update: client visit on Thursday\n\nHi Tom,\n\nJust a quick {{0}} on the client visit. I have {{1}} the meeting room for 10 a.m., and lunch has been ordered for six people. I'm {{2}} waiting for the client to confirm how many people are coming.\n\n{{3}} you please print the sales reports by Wednesday afternoon? Please {{4}} me know if you have any questions.\n\n{{5}} regards,\nMia",
        answers: [
          ["update"],
          ["booked", "reserved"],
          ["still"],
          ["Could", "Would", "Can"],
          ["let"],
          ["Best", "Kind", "Warm", "Many"],
        ],
        wordBank: ["update", "booked", "still", "Could", "let", "Best", "yet", "make"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "order",
        mode: "lines",
        title: "Put the reply in order",
        instructions: "Carlos asked Anna to help with the presentation for the team training day. Put the sentences of Anna's reply in the correct order.",
        items: [
          "Thanks for your email about the team training day.",
          "I'm happy to help with the presentation on customer service.",
          "However, I'm on holiday until 3 May, so I can only start preparing after that.",
          "Could you send me last year's slides so that I can look at them when I'm back?",
          "Let me know if that works for you.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "write",
        title: "Write an email (TOEFL style): a progress update",
        instructions: "You have 7 minutes. Plan for 1 minute: write one note for each of the three points.",
        prompt:
          "You work part-time at your university library. Your supervisor, Ms Patel, asked you to finish adding the new books to the library's online list by Friday. On Wednesday, the computer system stopped working for three hours, so you are behind.\n\nWrite an email to Ms Patel. In your email, do the following:\n- Give her an update on the task.\n- Explain the problem.\n- Suggest a solution.\n\nWrite as much as you can in 7 minutes.",
        minWords: 80,
        minutes: 7,
        rubric: [
          "Task: I gave an update, explained the problem and suggested a solution.",
          "Main point first: my first sentence says why I am writing.",
          "Detail: my update is specific (how much is done, what is left).",
          "Tone: polite and semi-formal, suitable for a supervisor (Dear Ms Patel, Best regards).",
          "Language: I used update and request phrases correctly (So far, I have… / Unfortunately, … / Would it be possible to…?).",
          "Accuracy: I checked capitals, spelling and verb tenses (present perfect for the update, past simple for Wednesday).",
          "Length: I wrote at least 80 words.",
        ],
        modelAnswer:
          "Subject: Update on the new books list\n\nDear Ms Patel,\n\nI'm writing to give you a quick update on the list of new books. So far, I have added about 120 of the 200 books, and I have checked all the authors' names.\n\nUnfortunately, the library computer system was not working on Wednesday afternoon, so I lost three hours of work. I'm afraid I won't be able to finish the whole list by Friday.\n\nWould it be possible for me to work two extra hours on Saturday morning? That way, the list would be ready for students on Monday. If the library is closed on Saturday, I could finish it on Monday afternoon instead.\n\nBest regards,\nLeo Martins",
      },
    },
    {
      type: "passage",
      title: "Email for the TOEIC task",
      paragraphs: [
        "From: Greg Holt, Training Coordinator",
        "To: All staff",
        "Subject: First aid course",
        "Dear colleagues,",
        "We are planning a free one-day first aid course for staff next month. The course will run on a weekday, and places are limited to 15 people. If you would like to take part, please reply to this email.",
        "Best regards,",
        "Greg Holt",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Respond to a written request (TOEIC style)",
        instructions: "You have 10 minutes. Read Greg's email above, then write your reply.",
        prompt:
          "Respond to the email as if you are an employee who wants to take the course. In your email, give TWO pieces of information about yourself or your availability and ask TWO questions about the course.",
        minWords: 80,
        minutes: 10,
        rubric: [
          "Task: I gave two pieces of information and asked two questions, and each one is easy to find.",
          "Organisation: I started with the reason for writing and used signals such as First, Also and I have two questions.",
          "Tone: polite and professional, suitable for a colleague I may not know well.",
          "Language: my questions are correctly formed (Will the course…? / Do we need to…? / Could you tell me whether…?).",
          "Accuracy: I checked capitals (days, months, names), spelling and sound-alike words.",
          "Length: I wrote at least 80 words in 10 minutes.",
        ],
        modelAnswer:
          "Subject: Re: First aid course\n\nDear Greg,\n\nThank you for organising this course. I would like to take part, if there is still a place.\n\nI work in the warehouse, where people sometimes have small accidents, so I think the training would be very useful for my team. I am available on any weekday except Tuesdays, because I visit our suppliers on that day.\n\nI have two questions. First, will we receive a certificate at the end of the course? Second, do we need to bring anything with us, such as a notebook or comfortable clothes?\n\nThank you in advance for your help.\n\nKind regards,\nSara Lindqvist",
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "**Respond to a written request** has two emails, with 10 minutes for each. Spend 1 minute reading and listing what your reply must do, about 7 minutes writing, and 2 minutes checking that every point is answered and that names and dates are copied correctly.",
    },
    {
      exam: "toefl",
      body: "In **Write an Email** you have 7 minutes. The situation can be academic or social, and the task may ask you to make a request, give information or propose a solution. Write one short paragraph for each point in the list, and aim for at least 80–100 words.",
    },
    {
      exam: "toeic",
      body: "Business readers like short paragraphs. In your TOEIC reply, start a new paragraph for each point. This makes it easy for the rater to see that you have done everything the directions ask.",
    },
  ],
  vocabulary: [
    { word: "update", meaning: "new information about how something is progressing", example: "Can you give me an update on the project?", topic: "work" },
    { word: "colleague", meaning: "a person you work with", example: "I asked a colleague to check my report.", topic: "work" },
    { word: "supervisor", meaning: "a person who manages and checks the work of others", example: "My supervisor asked me to finish the list by Friday.", topic: "work" },
    { word: "deadline", meaning: "the time or day by which you must finish something", example: "The deadline for the report is Thursday.", topic: "work" },
    { word: "confirm", meaning: "to say that something is definitely true or will definitely happen", example: "Could you confirm the time of the meeting?", topic: "work" },
    { word: "available", meaning: "free to do something or meet someone", example: "I'm available on any weekday except Tuesday.", topic: "work" },
    { word: "client", meaning: "a person or company that pays for a service", example: "The client is visiting our office on Thursday.", topic: "business" },
    { word: "behind (with work)", meaning: "late in doing the work you should have finished", example: "The system crashed, so I'm behind with the list.", topic: "work" },
    { word: "in advance", meaning: "before something happens", example: "Thank you in advance for your help.", topic: "work" },
    { word: "certificate", meaning: "an official document that shows you completed a course", example: "Everyone gets a certificate at the end of the course.", topic: "education" },
  ],
  keyPoints: [
    "Put the main point of a work message first, and use a clear subject line.",
    "Number the requests in an email and answer each one in its own short paragraph.",
    "Say exactly what you need and when: Could you… by Friday?",
    "Give a short reason for each request; it makes you sound reasonable and polite.",
    "TOEIC Respond to a written request: 10 minutes per email. TOEFL Write an Email: 7 minutes.",
  ],
};

export default lesson;
