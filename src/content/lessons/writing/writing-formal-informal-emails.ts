import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-formal-informal-emails",
  title: "Formal vs informal emails",
  summary:
    "Choose the right tone for your reader, use the correct greetings, requests and sign-offs, and write a short email that covers every point in the task.",
  skill: "writing",
  level: "B1",
  order: 3,
  minutes: 20,
  exams: [
    { exam: "toefl", task: "Writing – Write an Email" },
    { exam: "ielts", task: "Writing Task 1 (General Training)" },
    { exam: "toeic", task: "Writing – Respond to a written request" },
  ],
  objectives: [
    "Decide whether an email should be formal, semi-formal or informal",
    "Use suitable greetings, opening lines, requests, closings and sign-offs",
    "Change informal phrases into formal ones",
    "Write a short email that covers every point in an exam task",
  ],
  warmUp: [
    "Who did you last write an email or message to? Was it formal or informal?",
    "How would you start an email to your manager? And to your best friend?",
  ],
  learn: [
    {
      type: "text",
      title: "Who is the reader?",
      body: "Before you write, ask: *Who will read this email, and how well do I know them?*\n\n- **Informal**: friends, family, classmates you know well.\n- **Semi-formal**: a teacher, a colleague or a neighbour you know, but not very well. Be polite and friendly.\n- **Formal**: a company, a manager, an official or someone you have never met.\n\nMost exam emails to teachers, professors, managers and organisers should be **semi-formal or formal**. Emails to a friend should be informal.",
    },
    {
      type: "table",
      title: "Formal and informal language",
      headers: ["Part of the email", "Informal (to a friend)", "Formal (to a company or manager)"],
      rows: [
        ["Greeting", "Hi Sam, / Hey Sam!", "Dear Ms Patel, / Dear Sir or Madam,"],
        ["Opening line", "Thanks for your message! / How are things?", "I am writing to ask about… / Thank you for your email."],
        ["Asking for something", "Can you send me…?", "I would be grateful if you could… / Could you please…?"],
        ["Apologising", "Sorry I didn't reply sooner.", "I apologise for the delay in replying."],
        ["Closing line", "Can't wait to see you! / Write soon.", "I look forward to hearing from you."],
        ["Sign-off", "Love, / Cheers, / Best,", "Yours sincerely, / Yours faithfully, / Kind regards,"],
      ],
    },
    {
      type: "text",
      title: "Five features of formal style",
      body: "- **No contractions**: *I am*, *do not*, *I would* (not *I'm*, *don't*, *I'd*).\n- **More formal verbs**: *receive* instead of *get*, *contact* instead of *get in touch with*, *postpone* instead of *put off*. Formal emails use fewer phrasal verbs.\n- **Polite, indirect requests**: *Would it be possible to…?* instead of *Can you…?*\n- **No slang, abbreviations or emojis**: no *thx*, *asap* or *gonna*.\n- **A clear reason for writing** in the first or second sentence.",
    },
    {
      type: "example",
      title: "The same message in two styles",
      items: [
        "Informal: **Hi Tom, sorry** I can't make it on Friday. **Can we** meet next week instead?",
        "Formal: **Dear Mr Lee, I am afraid** I am unable to attend the meeting on Friday. **Would it be possible to** arrange another time next week?",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "In British English, use **Yours faithfully** after *Dear Sir or Madam* (you do not know the name) and **Yours sincerely** after *Dear Mr / Ms + surname* (you know the name). *Kind regards* and *Best regards* are fine for semi-formal emails.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: choose the right tone",
        questions: [
          {
            prompt: "Which greeting is best for an email to a hotel manager you have never met?",
            options: ["Hey there!", "Dear Sir or Madam,", "Hi mate,", "Hello you!"],
            answer: 1,
          },
          {
            prompt: "Which sentence is the most formal?",
            options: [
              "Can you send me the form?",
              "Send me the form, OK?",
              "I would be grateful if you could send me the form.",
              "Gimme the form asap.",
            ],
            answer: 2,
            explanation: "“I would be grateful if you could…” is an indirect, polite request with no contractions.",
          },
          {
            prompt: "You started your email with “Dear Sir or Madam”. Which sign-off should you use in British English?",
            options: ["Yours faithfully,", "Love,", "Cheers,", "See you soon,"],
            answer: 0,
          },
          {
            prompt: "Which closing line is best for an informal email to a friend?",
            options: [
              "I look forward to hearing from you.",
              "Please do not hesitate to contact me.",
              "Can't wait to see you next week!",
              "Thank you for your consideration.",
            ],
            answer: 2,
            explanation: "The other three are formal phrases. A friend would find them cold and strange.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "passage",
      title: "Email 1: informal (to a friend)",
      paragraphs: [
        "Hi Jess,",
        "Thanks so much for inviting me to your birthday dinner! I'm really sorry, but I can't come on Saturday. My manager has asked me to work an extra shift, and I couldn't say no.",
        "Can we celebrate next week instead? I'd love to take you out for lunch, maybe at that new Thai place near the station. Let me know which day suits you.",
        "Have a brilliant time on Saturday!",
        "Love,",
        "Maria",
      ],
    },
    {
      type: "passage",
      title: "Email 2: formal (to a language school)",
      paragraphs: [
        "Dear Mr Novak,",
        "I am writing about the Business English course that begins on Monday 14 April. Unfortunately, I will be unable to attend the first class, as my company is sending me to a conference in Vienna that week.",
        "I would be grateful if you could send me the materials for the first lesson so that I can prepare before the second class. I would also like to ask whether it would be possible to meet my teacher briefly to discuss what I have missed.",
        "Thank you for your understanding. I look forward to hearing from you.",
        "Yours sincerely,",
        "Maria Lopez",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "Both emails have the same purpose: Maria cannot come to something. But the language is very different.\n\n- **Greeting**: *Hi Jess* (first name) vs *Dear Mr Novak* (title + surname).\n- **Reason for writing**: Email 1 starts with thanks; Email 2 says *I am writing about…* in the first line.\n- **Contractions**: *I'm, can't, I'd* in Email 1; *I am, I will be unable, I would* in Email 2.\n- **Requests**: *Can we…? Let me know…* vs *I would be grateful if you could… / whether it would be possible to…*\n- **Ending**: *Have a brilliant time! Love,* vs *I look forward to hearing from you. Yours sincerely,*\n\nBoth emails are short, clear and organised into paragraphs: one for the reason, one for the request, and a closing line.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Make it formal",
        instructions: "Match each informal phrase with its formal version. There is one extra option.",
        left: [
          "Thanks for your email.",
          "Sorry for the late reply.",
          "Can you tell me…?",
          "I want to book a room.",
          "Get back to me soon.",
          "I need the form by Friday.",
        ],
        right: [
          "I look forward to hearing from you.",
          "I would like to book a room.",
          "Cheers for that!",
          "Thank you for your email.",
          "I would be grateful if I could receive the form by Friday.",
          "I apologise for the delay in replying.",
          "Could you please let me know…?",
        ],
        answer: [3, 5, 6, 1, 0, 4],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Complete the formal email",
        instructions: "Complete the email with words from the box. There are two extra words.",
        text: "Dear Ms Grant,\n\nI am {{0}} to ask about the flat that you advertised on your website. I am very {{1}} in renting it from September.\n\nCould you please {{2}} me know whether the rent includes electricity and the internet? I would also be {{3}} if you could tell me when it would be possible to view the flat.\n\nThank you for your {{4}}. I look forward to {{5}} from you.\n\nYours {{6}},\nDaniel Park",
        answers: [
          ["writing"],
          ["interested"],
          ["let"],
          ["grateful"],
          ["time", "help", "assistance", "consideration", "attention"],
          ["hearing"],
          ["sincerely"],
        ],
        wordBank: ["writing", "interested", "let", "grateful", "time", "hearing", "sincerely", "faithfully", "cheers"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "write",
        title: "Write an Email (TOEFL style)",
        prompt:
          "You recently joined a weekend photography club at your local community centre. Last Saturday, the club leader, Mr Hughes, told the group about a photo competition, but you missed some of the details.\n\nWrite an email to Mr Hughes. In your email, do the following:\n- Thank him for organising the club.\n- Explain what you missed and why.\n- Ask two questions about the competition.\n\nWrite as much as you can in 7 minutes.",
        minWords: 80,
        minutes: 7,
        rubric: [
          "Task: I completed all three points in the task.",
          "Tone: my greeting, language and sign-off are suitable for the reader (polite and semi-formal).",
          "Organisation: I gave my reason for writing near the start and used short paragraphs.",
          "Language: I used polite request forms such as ‘Could you…?’ or ‘I would be grateful if…’.",
          "Language: I avoided slang, abbreviations and emojis.",
          "Accuracy: my sentences are complete, and my spelling and punctuation are correct.",
        ],
        modelAnswer:
          "Dear Mr Hughes,\n\nThank you very much for organising the photography club. I have really enjoyed the first two sessions, and I have already learned a lot about using natural light.\n\nLast Saturday, I had to leave early because I had a family appointment, so I missed the end of your talk about the photo competition. I would be grateful if you could answer two questions. First, what is the deadline for sending our photos? Second, is there a theme, or can we submit any kind of picture?\n\nThank you for your help. I look forward to the next session.\n\nBest regards,\nAnna Silva",
      },
    },
  ],
  examTips: [
    {
      exam: "toefl",
      body: "In **Write an Email** you have **7 minutes**. You read a short situation and a list of things your email must do (usually three). Plan for 30 seconds, then write one short paragraph for each point. Always cover every point. Missing one is the quickest way to lose marks.",
    },
    {
      exam: "ielts",
      body: "In **General Training Task 1** you write a letter of at least 150 words in about 20 minutes. The task tells you who you are writing to, so use it to choose your tone, and cover every bullet point in the task (there are usually three). The task does not give you an address, so do not write one.",
    },
    {
      exam: "toeic",
      body: "In **Respond to a written request** you read an email and reply in 10 minutes. Read the task carefully: it might ask you to give two pieces of information and ask one question. Answer every request in the email, and keep your tone polite and professional.",
    },
  ],
  vocabulary: [
    { word: "formal", meaning: "serious and polite, used with people you do not know well", example: "Use formal language when you write to a company.", topic: "work" },
    { word: "informal", meaning: "relaxed and friendly, used with friends and family", example: "My emails to my brother are very informal.", topic: "everyday" },
    { word: "tone", meaning: "the general feeling or attitude of a piece of writing", example: "The tone of your email should be polite.", topic: "work" },
    { word: "request", meaning: "the act of politely asking for something", example: "I sent a request for more information.", topic: "work" },
    { word: "apologise", meaning: "to say that you are sorry", example: "I apologise for the late reply.", topic: "everyday" },
    { word: "grateful", meaning: "wanting to thank someone for something", example: "I would be grateful if you could call me back.", topic: "work" },
    { word: "attend", meaning: "to go to an event such as a meeting or class", example: "I am unable to attend the meeting on Friday.", topic: "work" },
    { word: "unfortunately", meaning: "used to say that something is bad or disappointing", example: "Unfortunately, the course is already full.", topic: "everyday" },
    { word: "enquire", meaning: "to ask for information (formal)", example: "I am writing to enquire about your evening classes.", topic: "work" },
    { word: "postpone", meaning: "to change an event to a later time", example: "We had to postpone the trip because of the weather.", topic: "work" },
    { word: "sign-off", meaning: "the word or phrase before your name at the end of a letter or email", example: "“Yours sincerely” is a formal sign-off.", topic: "work" },
  ],
  keyPoints: [
    "Choose your tone by thinking about the reader: friend = informal; teacher, colleague or neighbour = semi-formal; company or stranger = formal.",
    "Formal emails avoid contractions, slang and most phrasal verbs, and use polite indirect requests.",
    "State your reason for writing in the first or second sentence.",
    "Match the sign-off to the greeting: Dear Sir or Madam → Yours faithfully; Dear Ms Patel → Yours sincerely.",
    "In exam emails, cover every point in the task.",
  ],
};

export default lesson;
