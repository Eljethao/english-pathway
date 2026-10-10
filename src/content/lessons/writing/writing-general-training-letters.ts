import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-general-training-letters",
  title: "IELTS General Training letters",
  summary:
    "Write IELTS General Training Task 1 letters in all three registers: read the purpose and reader from the prompt, choose the right opening, closing and language, and develop every bullet point into a well-organised 150+ word letter in 20 minutes.",
  skill: "writing",
  level: "B2",
  order: 11,
  minutes: 35,
  exams: [{ exam: "ielts", task: "Writing Task 1 (General Training)" }],
  objectives: [
    "Identify the purpose of the letter and the right register (personal, semi-formal or formal) from the prompt",
    "Use matching openings and closings, and keep the tone consistent from start to finish",
    "Express common functions (apologising, explaining, suggesting, requesting, offering) in informal and formal language",
    "Develop each bullet point into a paragraph and write a complete letter of at least 150 words in 20 minutes",
  ],
  warmUp: [
    "Who was the last person you wrote a letter or a long email to? Was it formal or informal?",
    "How would you say “Sorry, I can't come” to a close friend, and to a company?",
  ],
  learn: [
    {
      type: "text",
      title: "The task",
      body: "In IELTS General Training Writing Task 1 you write a **letter of at least 150 words** in about **20 minutes**. The prompt describes a situation and gives you **three bullet points** to cover. The tone can be **personal, semi-formal or formal**, depending on who you are writing to.\n\nThe prompt also tells you how to begin (*Begin your letter as follows: Dear …*) and that you do not need to write any addresses. You do not need a date or a subject line either.\n\nThe B1 course practised complaint and request letters. This lesson covers the full range: letters to friends, to people you know a little, and to organisations, for many different purposes.",
    },
    {
      type: "table",
      title: "Three registers",
      headers: ["Register", "Typical reader", "Opening", "Closing", "Style"],
      rows: [
        ["Personal (informal)", "A friend or relative", "Dear Sam,", "Best wishes, / Love, / Take care,", "Contractions, phrasal verbs, direct questions, a friendly first line"],
        ["Semi-formal", "Someone you know but not closely: a neighbour, your manager, a teacher", "Dear Mr Collins, / Dear Sarah,", "Best regards, / Kind regards, / Yours sincerely,", "Polite and clear; some contractions are fine; no slang"],
        ["Formal", "An organisation or a person you do not know", "Dear Sir or Madam,", "Yours faithfully,", "No contractions, indirect requests, more formal vocabulary"],
      ],
    },
    {
      type: "text",
      title: "Read the prompt for purpose and tone",
      body: "Before you plan, answer two questions from the prompt:\n\n1. **Who is the reader?** A friend → personal. Someone you know by name in a more distant role → semi-formal. A company, council or organisation → formal.\n2. **What is the purpose?** To apologise, thank, invite, explain, complain, request, apply, give advice… Your first paragraph should make the purpose clear.\n\nIn British usage, *Dear Sir or Madam* goes with *Yours faithfully*, and *Dear Mr / Ms + name* goes with *Yours sincerely*. Whatever you choose, keep the **same tone** all the way through: a formal letter should not end with *Cheers!*",
    },
    {
      type: "table",
      title: "Functions in two registers",
      headers: ["Function", "Personal", "Formal"],
      rows: [
        ["Opening", "It was great to hear from you!", "I am writing with regard to…"],
        ["Apologising", "I'm really sorry I couldn't make it.", "I apologise for being unable to attend."],
        ["Explaining", "The thing is, …", "The reason for this is that…"],
        ["Suggesting", "Why don't we…? / How about…?", "I would suggest that… / It might be possible to…"],
        ["Requesting", "Could you let me know…?", "I would be grateful if you could…"],
        ["Offering", "I'd be happy to…", "I would be pleased to…"],
        ["Ending", "Can't wait to see you! / Write back soon.", "I look forward to hearing from you."],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: which register?",
        questions: [
          {
            prompt: "“You recently attended a training course organised by a company you have never dealt with before. Write a letter to the company…” Which opening and closing should you use?",
            options: [
              "Dear Sir or Madam, … Yours faithfully,",
              "Dear friend, … Love,",
              "Hi there, … Cheers,",
              "Dear Sir or Madam, … See you soon,",
            ],
            answer: 0,
            explanation: "You do not know the reader, so the letter is formal. *Yours faithfully* matches *Dear Sir or Madam*.",
          },
          {
            prompt: "“Your manager, Ms Dhillon, has asked you to organise a leaving party for a colleague. Write a letter to her…” What register is best?",
            options: ["Personal and very informal", "Semi-formal", "Very formal, with Dear Sir or Madam", "Any register is acceptable"],
            answer: 1,
            explanation: "You know Ms Dhillon by name, but she is your manager, so a polite semi-formal letter (*Dear Ms Dhillon, … Kind regards,*) fits best.",
          },
          {
            prompt: "Which sentence would be out of place in a formal letter to a city council?",
            options: [
              "I am writing to draw your attention to the condition of the playground in Elm Park.",
              "I would be grateful if you could arrange for the equipment to be inspected.",
              "Honestly, the swings are a total disaster, so sort it out!",
              "I look forward to hearing from you.",
            ],
            answer: 2,
            explanation: "*Honestly*, *a total disaster* and the direct command *sort it out!* are far too informal and rude for a council.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*You live in a block of flats. Your neighbour, Mr Collins, is going to be away for a month and has asked you to look after his plants. You have agreed, but you will also be away for one weekend during that month.*\n\n*Write a letter to your neighbour. In your letter:*\n\n- *confirm that you are happy to help*\n- *explain the problem*\n- *suggest a solution*\n\n*Write at least 150 words. You do NOT need to write any addresses. Begin your letter as follows: Dear Mr Collins,*",
    },
    {
      type: "passage",
      title: "Model letter (semi-formal)",
      paragraphs: [
        "Dear Mr Collins,",
        "Thank you for your note. I'd be very happy to look after your plants while you are away next month. Gardening is one of my hobbies, so it will be a pleasure rather than a chore, and I'll make sure they are watered every couple of days, as you asked.",
        "There is one small problem, however. I have just found out that I need to attend a family wedding in another city on the weekend of the 14th, so I will be away from Friday evening until Sunday night. I'm worried that the plants on your balcony might dry out during that time, especially if the weather is warm.",
        "I have spoken to my sister, Laura, who will be staying in my flat that weekend, and she has offered to water them on the Saturday. If you are comfortable with this, I could give her your spare key on Friday and collect it again when I return. Alternatively, I could move the balcony plants into the shade before I leave.",
        "Please let me know which option you prefer.",
        "Best regards,",
        "Elena Rossi",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **Purpose and register**: Elena knows her neighbour, but not closely, so the letter is semi-formal: *Dear Mr Collins*, a few contractions (*I'd*, *I'm*), polite phrases, and *Best regards*.\n- **One paragraph per bullet point**, in the same order as the prompt, plus a one-line closing request.\n- **Each bullet is developed**: not just *I am happy to help*, but why (*Gardening is one of my hobbies*) and how (*every couple of days*). The problem has a specific reason (*a family wedding*), times (*Friday evening until Sunday night*) and a consequence (*might dry out*).\n- **A practical solution with an alternative**: the sister with the spare key, or moving the plants into the shade. Offering a choice is polite to the reader.\n- **Cohesion**: *however*, *so*, *If you are comfortable with this*, *Alternatively* connect the ideas without sounding mechanical.\n\nLength: about 190 words.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "From informal to formal",
        instructions: "Match each informal sentence with its formal equivalent. There is one extra formal sentence.",
        left: [
          "Sorry I couldn't make it to the meeting.",
          "Can you get back to me as soon as you can?",
          "Thanks a lot for sorting this out so fast.",
          "I'm writing to ask about the job on your website.",
          "Drop me a line if you need anything else.",
          "I've got loads of experience with kids.",
        ],
        right: [
          "I look forward to seeing you at the party.",
          "I have considerable experience of working with children.",
          "I apologise for being unable to attend the meeting.",
          "Please do not hesitate to contact me if you require any further information.",
          "I would be grateful if you could reply at your earliest convenience.",
          "I am writing to enquire about the position advertised on your website.",
          "Thank you for resolving this matter so promptly.",
        ],
        answer: [2, 4, 6, 5, 3, 1],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "A personal letter",
        instructions: "Complete the letter to a friend with words and phrases from the box. There are two extra items.",
        text: "Dear Tom,\n\nIt was great to {{0}} from you, and congratulations on your new job! I'm really {{1}} that I couldn't come to your party last Saturday. The {{2}} is, my car broke down on the way, and by the time it was fixed, it was nearly midnight.\n\n{{3}}, I'd love to celebrate with you properly. {{4}} meeting for dinner one evening next week? There's a new Italian restaurant near my office that everyone says is fantastic.\n\nLet me {{5}} which day suits you best. Can't {{6}} to hear all about the new job!\n\nBest wishes,\nAnna",
        answers: [["hear"], ["sorry", "disappointed", "upset"], ["thing"], ["Anyway", "Anyhow", "Still"], ["How about", "What about"], ["know"], ["wait"]],
        wordBank: ["hear", "sorry", "thing", "Anyway", "How about", "know", "wait", "Furthermore", "regret"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Tone and development",
        instructions: "Choose the best answer.",
        questions: [
          {
            prompt: "Bullet point: “explain why you are interested in the volunteer role”. Which answer is best developed for a formal letter?",
            options: [
              "I like volunteering.",
              "I am interested because it is interesting.",
              "Having volunteered at a local food bank for two years, I have seen how much difference a well-organised team can make, and I would welcome the chance to use that experience at your event.",
              "Volunteering is good for everyone in the world.",
            ],
            answer: 2,
            explanation: "It gives a specific reason and evidence (two years at a food bank) and links it to the role. The others are too short, circular or general.",
          },
          {
            prompt: "Which closing matches the opening “Dear Sir or Madam,” in British English?",
            options: ["Yours sincerely,", "Yours faithfully,", "Love,", "Cheers,"],
            answer: 1,
            explanation: "*Yours faithfully* is used when you do not know the reader's name. *Yours sincerely* goes with a name (*Dear Ms Grant*).",
          },
          {
            prompt: "A formal letter of complaint ends: “Anyway, hope you sort it out soon. Cheers!” What is the problem?",
            options: [
              "It is too long.",
              "The tone suddenly changes from formal to informal.",
              "It should include a date.",
              "There is no problem.",
            ],
            answer: 1,
            explanation: "The tone must stay consistent. A formal letter should end with something like *I look forward to your reply. Yours faithfully,*",
          },
          {
            prompt: "Your letter is 120 words long and you have five minutes left. What is the best thing to do?",
            options: [
              "Add a detail, reason or example to the shortest bullet point paragraph.",
              "Copy a sentence from the prompt to increase the word count.",
              "Add a new paragraph about a topic not in the bullet points.",
              "Stop: 120 words is close enough.",
            ],
            answer: 0,
            explanation: "The task requires at least 150 words. Developing a thin paragraph improves both length and Task Achievement. Off-topic content and copied wording do not help.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: a formal letter",
        instructions: "Set a timer for 20 minutes: 3 minutes to plan, 14 to write and 3 to check.",
        prompt:
          "You recently saw an advertisement for volunteers to help at an international film festival in your city.\n\nWrite a letter to the festival organisers. In your letter:\n- explain why you would like to volunteer\n- describe any relevant skills or experience you have\n- say when you are available\n\nWrite at least 150 words. You do NOT need to write any addresses.\n\nBegin your letter as follows: Dear Sir or Madam,",
        minWords: 150,
        minutes: 20,
        rubric: [
          "Task achievement: I covered all three bullet points, and each one is developed with specific details.",
          "Task achievement: the purpose of my letter is clear in the first paragraph, and my tone is formal and consistent throughout (Yours faithfully, no contractions or slang).",
          "Coherence and cohesion: I used one paragraph for each bullet point and linked ideas clearly (In terms of…, I am also…, which I believe…).",
          "Lexical resource: I used formal vocabulary accurately (in response to, relevant, considerable, available, assist).",
          "Grammatical range and accuracy: I used a mix of tenses (present perfect for experience, past simple for finished jobs) and some complex sentences, with few errors.",
          "Length: I wrote at least 150 words in 20 minutes.",
        ],
        modelAnswer:
          "Dear Sir or Madam,\n\nI am writing in response to your advertisement for volunteers at this year's international film festival, which I saw on the festival website last week. I would very much like to be considered for a role.\n\nI have been a keen follower of world cinema for many years and have attended the festival as a visitor several times. Volunteering would give me the chance to contribute to an event that I value greatly and to meet people from many different countries who share my interest in film.\n\nIn terms of relevant experience, I worked as a receptionist at a city-centre hotel for two years, where I dealt with guests' questions and complaints on a daily basis. I am also fluent in Spanish and have a good working knowledge of French, which I believe would be useful when assisting international visitors.\n\nI am available for the whole of the festival week and could work either day or evening shifts. I would also be happy to attend any training sessions beforehand.\n\nI look forward to hearing from you.\n\nYours faithfully,\nMarco Díaz",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "The public band descriptors for General Training Task 1 look at whether the **purpose** of your letter is clear and whether the **tone** is appropriate and consistent. Decide the register before you write the first word, and check your greeting and closing match it.",
    },
    {
      exam: "ielts",
      body: "Treat the three bullet points as your paragraph plan and give each one two to four sentences of detail. A letter that mentions every point but develops none of them is unlikely to score well for Task Achievement.",
    },
    {
      exam: "ielts",
      body: "Spend about 20 minutes on Task 1 and keep about 40 minutes for Task 2, which counts twice as much. Aim for about 160–190 words: enough to develop every point without running out of time.",
    },
  ],
  vocabulary: [
    { word: "register", meaning: "the level of formality of language in a particular situation", example: "Choose a formal register for a letter to a company.", topic: "academic" },
    { word: "enquire", meaning: "to ask for information (formal)", example: "I am writing to enquire about your evening courses.", topic: "work" },
    { word: "with regard to", meaning: "about; concerning (formal)", example: "I am writing with regard to my recent order.", topic: "work" },
    { word: "at your earliest convenience", meaning: "as soon as you can (formal)", example: "Please reply at your earliest convenience.", topic: "work" },
    { word: "resolve", meaning: "to find a solution to a problem", example: "Thank you for resolving the matter so quickly.", topic: "business" },
    { word: "considerable", meaning: "large in amount or degree", example: "She has considerable experience in customer service.", topic: "work" },
    { word: "keen", meaning: "very interested in something or eager to do it", example: "He is a keen follower of world cinema.", topic: "everyday" },
    { word: "fluent", meaning: "able to speak a language easily and well", example: "I am fluent in Spanish.", topic: "education" },
    { word: "shift", meaning: "a period of work at a particular time of day", example: "Volunteers can choose day or evening shifts.", topic: "work" },
    { word: "chore", meaning: "a boring job that you have to do regularly", example: "Watering the plants is a pleasure, not a chore.", topic: "everyday" },
    { word: "spare key", meaning: "an extra key that you keep in case you need it", example: "I left a spare key with my neighbour.", topic: "everyday" },
  ],
  keyPoints: [
    "GT Task 1: a letter of at least 150 words in about 20 minutes, covering three bullet points.",
    "The reader decides the register: friend → personal; someone you know in a more distant role → semi-formal; organisation → formal.",
    "Match opening and closing (Dear Sir or Madam → Yours faithfully; Dear Mr Collins → Yours sincerely / Best regards) and keep the tone consistent.",
    "Make the purpose clear in the first paragraph, then give each bullet point its own developed paragraph.",
    "Use the right language for each function in each register: apologising, explaining, suggesting, requesting, offering.",
  ],
};

export default lesson;
