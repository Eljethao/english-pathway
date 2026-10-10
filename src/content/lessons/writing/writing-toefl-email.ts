import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-toefl-email",
  title: "Write an email: TOEFL task practice",
  summary:
    "Practise the TOEFL Write an Email task under real timing: plan in one minute, choose the right register for the reader, develop every point in the prompt, and propose a solution politely, all in 7 minutes.",
  skill: "writing",
  level: "B2",
  order: 9,
  minutes: 25,
  exams: [{ exam: "toefl", task: "Writing – Write an Email" }],
  objectives: [
    "Follow a 7-minute plan: 1 minute to plan, 5 to write, 1 to check",
    "Choose a register that suits the reader: professor, university office, classmate or friend",
    "Develop each point in the prompt with a specific detail, reason or consequence",
    "Make requests and propose solutions with polite, flexible language",
  ],
  warmUp: [
    "Think of the last email you wrote to a teacher or an organisation. How did you start it, and how did you finish it?",
    "Why might a short email be more effective than a long one?",
  ],
  learn: [
    {
      type: "text",
      title: "The task",
      body: "In TOEFL **Write an Email** you read a short description of a situation and write one email in **7 minutes**. The situation can be academic (a professor, a university office, a study group) or social (a friend, a neighbour, a club). The prompt tells you who to write to and gives a list of things your email must do, for example *explain a problem*, *describe what you have done* and *propose a solution*.\n\nA strong email:\n\n- does **everything** the list asks, in the same order\n- **develops** each point with a specific detail, not just one short sentence\n- uses a **tone** that suits the reader, from the greeting to the closing\n- is clear and accurate, with some variety in sentences and vocabulary\n\nAim for at least 80–100 words. About 100–130 well-organised words is a realistic target in 7 minutes and leaves time to check.",
    },
    {
      type: "table",
      title: "A 7-minute plan",
      headers: ["Time", "What to do"],
      rows: [
        ["0:00–1:00", "Read the prompt. Note the reader's name and role, your purpose, and two or three words for each point in the list."],
        ["1:00–6:00", "Write: greeting → one sentence saying why you are writing → one short paragraph per point → a short closing line and sign-off."],
        ["6:00–7:00", "Check: every point covered? Names spelled as in the prompt? Verb tenses and articles correct?"],
      ],
    },
    {
      type: "example",
      title: "Develop each point",
      items: [
        "Point: *Describe what your group has done.* Weak: *We did a lot of work.* → Strong: **We've finished our research and written two of the three sections, and most of the slides are ready.**",
        "Point: *Explain why the change matters to you.* Weak: *It is important for me.* → Strong: **I work until six, so evening sessions are the only ones I can attend.**",
        "Point: *Suggest a solution.* Weak: *Please help.* → Strong: **Would it be possible to move the session to 7 p.m.? That way, people who work full-time could still take part.**",
      ],
    },
    {
      type: "table",
      title: "Register: who is the reader?",
      headers: ["Reader", "Greeting and closing", "Typical language"],
      rows: [
        ["Professor, university office, organisation", "Dear Professor Lin, / Dear Ms Novak, … Best regards, / Kind regards,", "I'm writing about… / I was wondering whether… / Would it be possible to…? / Thank you for your understanding."],
        ["Club organiser, neighbour, someone you know a little", "Dear Sam, / Hi Sam, … Best wishes, / Thanks again,", "I just wanted to let you know… / Would you mind if…? / I'd be happy to…"],
        ["Friend, classmate", "Hi Jess, … See you soon, / Take care,", "Thanks so much for… / I'm really sorry, but… / How about…? / Let me know what you think!"],
      ],
    },
    {
      type: "example",
      title: "Proposing a solution politely",
      items: [
        "**Would it be possible to** submit the essay on Monday instead?",
        "**One option might be to** divide his section among the three of us.",
        "**Perhaps we could** meet online if the room is not available.",
        "**If that isn't possible, I could** come to your office hours on Thursday.",
        "**I'd be happy to** help set up the room before the event.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: register and planning",
        questions: [
          {
            prompt: "You are writing to a professor you have never met. Which opening is best?",
            options: [
              "Hey Professor! Quick question.",
              "Dear Professor Okoro, I'm writing about the reading list for your history seminar.",
              "To whom it may concern, I hereby request information.",
              "Hi there, hope you're well, the weather is nice today!",
            ],
            answer: 1,
            explanation: "It uses the reader's title and name and states the purpose at once. The first and last are too casual; the third is stiff and old-fashioned for a named reader.",
          },
          {
            prompt: "The prompt lists three things your email must do. You have one minute left and have covered only two. What should you do?",
            options: [
              "Add one or two sentences for the third point.",
              "Check the spelling of the first two points.",
              "Write a longer closing paragraph.",
              "Leave it: two well-written points are enough.",
            ],
            answer: 0,
            explanation: "Missing a required point is the most costly mistake. A short answer to the third point is better than none.",
          },
          {
            prompt: "Which sentence is the most suitable request to a university housing office?",
            options: [
              "Fix my heater now.",
              "I was wondering whether someone could look at the heater in my room this week.",
              "Can u send someone?",
              "Heater broken. Help!",
            ],
            answer: 1,
            explanation: "*I was wondering whether…* is polite and indirect, but the request is still clear and includes a time (*this week*).",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*You are taking an introductory biology course. Your group of four students has to give a presentation to the class next Thursday. One group member, Tom, has not answered any messages for over a week, and his part of the presentation is not finished.*\n\n*Write an email to your professor, Dr Alvarez. In your email, do the following:*\n\n- *Explain the situation.*\n- *Describe what your group has done so far.*\n- *Propose a solution.*\n\n*Write as much as you can in 7 minutes.*",
    },
    {
      type: "passage",
      title: "Model email",
      paragraphs: [
        "Dear Dr Alvarez,",
        "I'm writing about our group presentation on coral reefs, which is scheduled for next Thursday. Unfortunately, one of our members, Tom, hasn't replied to our messages or come to our meetings for over a week, so his section on the effects of rising sea temperatures is still unfinished.",
        "The rest of us have made good progress. We've completed our research, written the introduction and the section on reef ecosystems, and prepared most of the slides.",
        "Would it be possible for the three of us to divide Tom's section between us? If so, could we have a little more time and present on the following Monday instead? Alternatively, we could present on time with a shorter version of that section.",
        "Thank you for your understanding.",
        "Best regards,",
        "Mina Cho",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **Purpose first**: the first sentence names the presentation and the date, so the professor knows at once what the email is about.\n- **One paragraph per point**, in the order of the prompt: the situation, the progress, the solution.\n- **Specific details**: *coral reefs*, *for over a week*, *the introduction and the section on reef ecosystems*. These details make each point developed rather than just mentioned.\n- **A flexible proposal**: two options (*present on Monday* / *present on time with a shorter section*) let the professor choose, which sounds respectful.\n- **Register**: semi-formal. Contractions (*I'm*, *hasn't*) are acceptable in a modern email to a professor, but there is no slang, and Mina does not complain about Tom personally.\n\nLength: about 125 words, written in 7 minutes.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "The first sentence",
        instructions: "Match each situation with the best first sentence. There is one extra sentence.",
        left: [
          "Write to your professor to ask for more time to finish an essay.",
          "Write to a classmate who missed yesterday's study group.",
          "Write to the campus housing office about a broken heater.",
          "Write to a friend to thank them for lending you their camping equipment.",
          "Write to the organiser of a student conference that you can no longer attend.",
        ],
        right: [
          "Hey! Guess what happened to me yesterday?",
          "I'm writing to ask whether I could have a few more days to finish my essay for your sociology course.",
          "We missed you at the study group yesterday, so I thought I'd tell you what we covered.",
          "I'm afraid I can no longer attend the student conference on 12 April, which I registered for last month.",
          "Thanks so much for lending me your tent and sleeping bag last weekend.",
          "I am writing to report that the heater in my room, B214, has not been working since Monday.",
        ],
        answer: [1, 2, 5, 4, 3],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Requests and proposals",
        instructions: "Complete the sentences with words from the box. There are two extra words.",
        text: "1. I was {{0}} whether you could send me the reading list for next week.\n2. Would it be {{1}} to move our meeting to Friday afternoon?\n3. One {{2}} might be to hold the meeting online.\n4. I would really {{3}} it if you could reply by Wednesday.\n5. I apologise for any {{4}} this may cause.\n6. Please let me know if you need any further {{5}}.\n7. Thank you in {{6}} for your help.\n8. {{7}} that isn't possible, I could come to your office hours instead.",
        answers: [
          ["wondering"],
          ["possible", "OK", "okay", "convenient"],
          ["option", "possibility", "alternative", "idea", "solution", "suggestion"],
          ["appreciate"],
          ["inconvenience", "trouble", "difficulty", "disruption", "delay", "problems"],
          ["information", "details", "help", "assistance"],
          ["advance"],
          ["If"],
        ],
        wordBank: ["wondering", "possible", "option", "appreciate", "inconvenience", "information", "advance", "If", "wonder", "advise"],
      },
    },
    {
      type: "passage",
      title: "A student's email: what is wrong?",
      paragraphs: [
        "Task: Your friend Leo has invited you to his birthday dinner on Saturday evening, but you have an important exam on Monday morning. Write an email to Leo. In your email, do the following: thank him for the invitation; explain why you cannot stay for the whole evening; suggest another way to celebrate together.",
        "Dear Mr Leo,",
        "I am writing to inform you that I have received your invitation to your birthday dinner. I would like to express my gratitude for it.",
        "Unfortunately, I have an exam. Therefore, I am unable to attend the whole event.",
        "Yours faithfully,",
        "Anna",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Evaluate the email",
        instructions: "Answer the questions about Anna's email above.",
        questions: [
          {
            prompt: "What is the main problem with the tone of Anna's email?",
            options: [
              "It is too informal for a professor.",
              "It is far too formal for a friend.",
              "It is rude to Leo.",
              "It uses too many contractions.",
            ],
            answer: 1,
            explanation: "*Dear Mr Leo*, *I am writing to inform you* and *Yours faithfully* belong in a formal business letter, not an email to a friend.",
          },
          {
            prompt: "Which point from the task does Anna not cover at all?",
            options: [
              "Thanking Leo for the invitation",
              "Explaining why she cannot stay for the whole evening",
              "Suggesting another way to celebrate together",
            ],
            answer: 2,
            explanation: "There is no suggestion of another plan. Missing one of the required points is a serious problem in this task. Anna does thank Leo and does explain why she cannot stay, although both points are very short and undeveloped.",
          },
          {
            prompt: "Which sentence would best develop the second point?",
            options: [
              "Exams are very difficult.",
              "My exam is at nine on Monday morning, so I need a good night's sleep and some time to revise on Sunday, but I'd love to come for the meal itself.",
              "I am sorry.",
              "Therefore, I am unable to attend.",
            ],
            answer: 1,
            explanation: "It gives a specific reason (the time of the exam) and a positive detail (she can come for the meal), which develops the point and sounds friendly.",
          },
          {
            prompt: "Which closing would suit this email best?",
            options: ["Yours faithfully,", "Respectfully yours,", "See you on Saturday,", "To whom it may concern,"],
            answer: 2,
            explanation: "A friendly closing that refers to their plan fits an email to a friend.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: Write an Email (7 minutes)",
        instructions: "Set a timer for 7 minutes: 1 minute to plan, 5 to write and 1 to check.",
        prompt:
          "You are a member of a community garden in your neighbourhood. The organiser, Ms Novak, has announced that from next month the garden will close on weekday evenings because there are not enough volunteers to lock up.\n\nWrite an email to Ms Novak. In your email, do the following:\n- Explain why evening opening is important to you.\n- Offer to help.\n- Suggest a way to find more volunteers.\n\nWrite as much as you can in 7 minutes.",
        minWords: 80,
        minutes: 7,
        rubric: [
          "Task: I did all three things in the list, in the same order.",
          "Development: each point has a specific detail, reason or example, not just one general sentence.",
          "Register: my greeting, language and closing are polite and suitable for an organiser I know a little.",
          "Language: I used polite proposal language (I'd be happy to… / Perhaps we could… / Would it be possible…?).",
          "Organisation: I stated my purpose near the start and used a short paragraph for each point.",
          "Accuracy: I checked names, verb forms and articles in the last minute.",
          "Length: I wrote at least 80 words, ideally 100 or more, in 7 minutes.",
        ],
        modelAnswer:
          "Dear Ms Novak,\n\nI was sorry to read that the garden will close on weekday evenings from next month. I work full-time, so evenings are the only time I can visit during the week, and watering my vegetable bed after work is the most relaxing part of my day.\n\nI'd be happy to help keep the evening opening. For example, I could lock up the garden every Tuesday and Thursday.\n\nTo find more volunteers, perhaps we could put a sign-up sheet on the garden gate and post a short message in the neighbourhood's online group. I think many members would help if they only had to give one evening a month.\n\nBest regards,\nDaniel Reyes",
      },
    },
  ],
  examTips: [
    {
      exam: "toefl",
      body: "In **Write an Email**, cover every point in the prompt, use a polite opening and closing, and write at least 80–100 words. The list of points is your plan: write one short paragraph for each, in the same order.",
    },
    {
      exam: "toefl",
      body: "Use the names and roles exactly as the prompt gives them (*Dr Alvarez*, *Ms Novak*). Do not invent a different reader, and do not spend time on long small talk at the start: one friendly sentence is enough.",
    },
    {
      exam: "toefl",
      body: "When the prompt asks you to propose a solution, offer something specific and realistic, and if you have time, a second option (*Alternatively, …*). A flexible proposal sounds polite and shows a range of language.",
    },
  ],
  vocabulary: [
    { word: "propose", meaning: "to suggest a plan or idea for others to consider", example: "I'd like to propose a different date for the meeting.", topic: "work" },
    { word: "extension", meaning: "extra time to finish something", example: "She asked her professor for a two-day extension on her essay.", topic: "education" },
    { word: "scheduled", meaning: "planned for a particular time", example: "The presentation is scheduled for Thursday.", topic: "education" },
    { word: "alternatively", meaning: "used to suggest another possibility", example: "Alternatively, we could meet online.", topic: "academic" },
    { word: "inconvenience", meaning: "a problem or extra difficulty that something causes", example: "I apologise for any inconvenience.", topic: "work" },
    { word: "appreciate", meaning: "to be grateful for something", example: "I would appreciate a quick reply.", topic: "work" },
    { word: "register for", meaning: "to put your name on an official list for an event or course", example: "I registered for the conference last month.", topic: "education" },
    { word: "office hours", meaning: "the times when a professor is available to see students", example: "I could come to your office hours on Thursday.", topic: "education" },
    { word: "make progress", meaning: "to move forward with a piece of work", example: "Our group has made good progress this week.", topic: "academic" },
    { word: "sign-up sheet", meaning: "a list where people write their names to join an activity", example: "We put a sign-up sheet on the noticeboard.", topic: "everyday" },
  ],
  keyPoints: [
    "Write an Email: one email in 7 minutes; aim for at least 80–100 words.",
    "Plan for one minute: reader, purpose and a few words for each point in the list.",
    "Do every point in the prompt, in order, and develop each one with a specific detail.",
    "Match your register to the reader from greeting to closing.",
    "Propose solutions with flexible, polite language: Would it be possible…? / One option might be… / Alternatively, …",
  ],
};

export default lesson;
