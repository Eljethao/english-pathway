import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-time-management",
  title: "Time management strategies",
  summary:
    "Plan your minutes like a high scorer: set a time budget for each passage or part, stop losing time on difficult questions, and make sure you never leave an answer blank.",
  skill: "reading",
  level: "C1",
  order: 3,
  minutes: 20,
  exams: [
    { exam: "ielts", task: "Reading – True/False/Not Given" },
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
    { exam: "toeic", task: "Reading Part 7 – Reading Comprehension" },
  ],
  objectives: [
    "Set a realistic time budget for each passage or part of the IELTS, TOEFL and TOEIC reading tests",
    "Use a 'flag and move on' rule instead of getting stuck on one question",
    "Follow an efficient sequence for working through a timed passage",
  ],
  warmUp: [
    "In your last timed test, did you finish? If not, where did the time go?",
    "Do you usually finish tasks earlier or later than you planned? Why?",
  ],
  learn: [
    {
      type: "text",
      title: "Where the time really goes",
      body: "Most candidates who run out of time do not read too slowly. They lose minutes in a few predictable ways:\n\n- reading the whole passage carefully **before** looking at the questions\n- spending four or five minutes on **one** difficult question\n- **rereading** whole paragraphs because they did not note where things were\n- checking easy answers twice while hard questions remain unanswered\n\nGood time management is less about speed and more about **decisions**: what to read closely, what to skip and when to stop.",
    },
    {
      type: "table",
      title: "Time budgets",
      headers: ["Exam", "Format", "Suggested plan"],
      rows: [
        ["IELTS Reading", "60 minutes, 3 passages, 40 questions; no extra time to transfer answers", "About 17 min for Passage 1, 20 min for Passage 2, 23 min for Passage 3 (usually the hardest)"],
        ["TOEIC Reading", "75 minutes, 100 questions (Parts 5, 6 and 7)", "Parts 5 and 6 in about 20 minutes, leaving about 55 minutes for Part 7"],
        ["TOEFL Reading", "About 27–30 minutes of short tasks (Complete the Words, Read in Daily Life, Read an Academic Passage); adaptive, so the number of questions can vary", "Watch the on-screen timer, keep a steady pace and answer every question before time runs out"],
      ],
    },
    {
      type: "text",
      title: "The 90-second rule",
      body: "If you have not found an answer after about **90 seconds**, stop. Choose your best guess, **flag** the question (circle it on paper or use the review button on screen) and move on. Come back only if you have time at the end.\n\nThis works because every question is worth the same mark. Four easy questions answered in the time you would spend fighting one hard question is always a better deal. None of the three exams takes marks away for wrong answers, so **a guess is always better than a blank**.",
    },
    {
      type: "tip",
      exam: "ielts",
      body: "In the paper-based IELTS Reading test you must write your answers on the answer sheet within the 60 minutes. Many candidates write answers directly on the sheet as they go, so that they are not left with ten minutes of copying at the end.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "The planning fallacy",
      labelled: true,
      timerMinutes: 15,
      paragraphs: [
        "Almost everyone has had the experience of starting a task with a confident estimate of how long it will take, only to find themselves working late into the night as the deadline approaches. Psychologists have a name for this: the planning fallacy. The term was introduced in 1979 by Daniel Kahneman and Amos Tversky to describe our tendency to underestimate how long future tasks will take, even when we know that similar tasks have taken longer in the past. Later research showed that people often underestimate costs and risks in the same way.",
        "The effect is remarkably consistent. In one well-known study, university students were asked to predict when they would complete their final-year thesis. On average, they finished almost three weeks later than their own estimate, and fewer than a third finished by the date they had predicted. Strikingly, many students also failed to meet the 'worst-case' estimate they had been asked to give. The pattern is not limited to students. Software projects, home renovations and even simple household jobs show the same tendency, and large public projects are notorious for overrunning; the Sydney Opera House, to take a famous example, opened about a decade later than planned and cost many times its original budget.",
        "Why do intelligent people keep making the same mistake? One explanation is that when we plan, we focus on the specific task in front of us and imagine the steps going smoothly. We construct a mental scenario in which nothing goes wrong, and we rarely think about interruptions, illness or the simple fact that some parts of a task are harder than they look. Optimism also plays a part: believing that a task will be quick makes it easier to start, while admitting that it will take months can be discouraging. Past experience should correct this, but we tend to treat earlier delays as unusual events caused by bad luck rather than as a reliable guide to the future.",
        "Interestingly, people are much better at predicting how long other people will take. Observers who are given the same information as the planner usually produce longer, and often more realistic, estimates, perhaps because they are not emotionally invested in finishing quickly and pay more attention to how long such tasks usually take. Asked when a colleague will finish a report, most of us automatically allow for the delays that we ignore in our own plans. This difference between the 'inside view' of the planner and the 'outside view' of the observer has inspired one of the most effective remedies.",
        "Instead of building an estimate from the details of the current task, planners can start with a 'reference class': a group of similar tasks whose outcomes are already known. If comparable projects have typically taken twice as long as expected, that figure becomes the starting point, adjusted only slightly for the specifics of the case. Some governments now use this approach when planning major roads and railways, where an optimistic estimate can cost billions. A second technique is to break a task into its smallest parts before estimating. Listing every step makes forgotten tasks visible and tends to produce longer, more realistic forecasts. Neither method eliminates optimism entirely, but both shift the estimate in the right direction. The aim is not to become pessimistic, but to plan for the delays that past projects show are almost certain to occur.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader spends 15 minutes",
      body: "Imagine this passage comes with 8 questions: 4 True/False/Not Given and 4 sentence completion. Here is how a strong reader uses the time.\n\n1. **0:00–2:00 Map.** Read the title and paragraph A. Skim the first sentence of B–E and note: *B: evidence (students, Opera House); C: why it happens; D: others predict better; E: remedies.*\n2. **2:00–3:00 Questions.** Read all 8 questions and underline key words. Notice the easy scanning targets: *1979*, *thesis*, *Sydney*, *reference class*.\n3. **3:00–10:00 Answer.** Use the map to go straight to the right paragraph. Questions with names and numbers take about 30 seconds each; harder ones up to 90 seconds.\n4. **The stuck moment.** One statement says: *The planning fallacy affects experienced managers less than beginners.* After 90 seconds of searching, the reader finds nothing about experience. They choose **Not Given**, flag it and move on, instead of rereading the whole passage.\n5. **10:00–13:00 Return.** With the other answers done, the reader checks the flagged question with a calm mind and confirms that no paragraph mentions experience.\n6. **13:00–15:00 Check.** Spelling of completion answers (*reference class*, not *referance*), word limits, and no blanks.\n\nThe key point: the reader never reads the passage from start to finish slowly. The map does that job in two minutes.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "What would you do?",
        instructions: "Choose the best decision in each exam situation.",
        questions: [
          {
            prompt: "IELTS: You have spent 25 minutes on Passage 1, and three questions are still unanswered. What should you do?",
            options: [
              "Keep working on Passage 1 until every answer is certain",
              "Guess the three answers, flag them and start Passage 2",
              "Skip Passage 2 and go straight to Passage 3",
              "Reread Passage 1 from the beginning",
            ],
            answer: 1,
            explanation: "You are already over budget. Guessing and moving on protects the time you need for the two harder passages.",
          },
          {
            prompt: "TOEIC: Which plan for the 75-minute Reading test is the most realistic?",
            options: [
              "Spend 25 minutes on each of Parts 5, 6 and 7",
              "Finish Parts 5 and 6 in about 20 minutes, leaving about 55 minutes for Part 7",
              "Start with Part 7 and leave Part 5 for the last 10 minutes",
              "Spend one minute on every question",
            ],
            answer: 1,
            explanation: "Part 7 has 54 questions and the most reading. Parts 5 and 6 are short and can be done quickly, so they should not take more than about 20 minutes.",
          },
          {
            prompt: "You cannot find the answer to a True/False/Not Given statement after about 90 seconds. What is the best action?",
            options: [
              "Keep searching until you find it",
              "Leave it blank and never return",
              "Choose your best answer, flag it and move on",
              "Change your answers to the previous questions",
            ],
            answer: 2,
            explanation: "A flagged guess still has a chance of scoring, and you can return to it if you have time.",
          },
          {
            prompt: "Which habit wastes the most time in a reading test?",
            options: [
              "Reading the questions before reading in detail",
              "Reading the whole passage slowly before looking at any questions",
              "Underlining key words in the questions",
              "Writing a short note about each paragraph",
            ],
            answer: 1,
            explanation: "A slow first reading takes many minutes and you will have to reread the relevant parts anyway.",
          },
          {
            prompt: "There are three minutes left and five questions are unanswered. What should you do?",
            options: [
              "Quickly put an answer for all five questions",
              "Leave them blank to avoid losing marks",
              "Answer one of them carefully",
              "Check the spelling of your earlier answers",
            ],
            answer: 0,
            explanation: "There are no marks taken away for wrong answers in IELTS, TOEFL or TOEIC, so a blank is always worth zero and a guess might be right.",
          },
          {
            prompt: "According to the plan in this lesson, how should you divide your time between the three IELTS Reading passages?",
            options: [
              "Equally, exactly 20 minutes each",
              "More time for Passage 1, because it comes first",
              "A little more time for Passage 3, because it is usually the hardest",
              "Most of the time for Passage 2, because it is in the middle",
            ],
            answer: 2,
            explanation: "The passages usually get more difficult, so aim for about 17, 20 and 23 minutes.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "order",
        title: "An efficient sequence",
        instructions: "Put the steps for working through one timed passage in the order taught in this lesson.",
        mode: "lines",
        items: [
          "Read the title and the first paragraph",
          "Skim the first sentence of each other paragraph and note its topic",
          "Read all the questions and underline key words",
          "Answer the questions, using your notes to go to the right paragraph",
          "Flag any question that takes longer than about 90 seconds",
          "Return to flagged questions if time remains",
          "Check spelling and word limits and make sure nothing is blank",
        ],
      },
    },
    {
      type: "passage",
      title: "Working less, achieving more? The four-day week",
      labelled: true,
      timerMinutes: 12,
      paragraphs: [
        "The idea that people might one day work far fewer hours is not new. In 1930, the economist John Maynard Keynes predicted that, within a century, rising productivity would allow people to work around fifteen hours a week. Average working hours did fall considerably in many industrialised countries during the twentieth century, but the decline slowed long before it came close to Keynes's figure. With his century almost over, the prediction is very unlikely to come true, but the question behind it, what we should do with the gains of rising productivity, has returned to public debate in the form of the four-day working week.",
        "The model most often discussed is sometimes summarised as '100-80-100': employees receive 100 per cent of their pay for working 80 per cent of their previous hours, in return for a commitment to maintain 100 per cent of their output. It is different from schemes that simply compress five days' work into four longer days, which leave total hours unchanged and are generally less popular with staff.",
        "Several large trials have tested the idea. Between 2015 and 2019, public-sector organisations in Iceland reduced the working week of around 2,500 employees, roughly one per cent of the country's working population, without cutting their pay. In 2022, about sixty companies in the United Kingdom took part in a six-month pilot covering nearly three thousand workers. In both cases, organisers reported that productivity was maintained or improved in most workplaces, while employees described lower levels of stress and burnout. Of the British companies, the great majority chose to continue with a shorter week after the pilot ended.",
        "How can people do the same work in less time? Participants frequently mention shorter and fewer meetings, fewer interruptions and a sharper focus on tasks that genuinely matter. Several firms introduced rules limiting meetings to thirty minutes or kept mornings free of meetings for concentrated work. Some managers found that the reduction forced them to identify work that had been done out of habit rather than necessity. Others noted a fall in sick days, which partly made up for the lost hours. A shorter week also appears to help with recruitment: companies offering one report receiving more applicants for their vacancies.",
        "Sceptics, however, point to several weaknesses in the evidence. Companies that volunteer for a trial are likely to be those already well suited to it, so their results may not apply to the economy as a whole. Much of the data relies on employees' own reports of their wellbeing, which may be influenced by enthusiasm for the scheme. There is also the question of whether early gains last: the energy of a well-publicised trial may fade once a shorter week becomes routine. Moreover, many jobs cannot easily be shortened without additional staff. A hospital ward or a primary school must be covered every day, and in such settings fewer hours per person may simply mean hiring more people, at significant cost.",
        "Even supporters tend to acknowledge that the four-day week is not a universal solution. What the trials do suggest is that the number of hours people spend at work is a less reliable measure of their output than many employers assume. They also encourage organisations to ask harder questions about which meetings, reports and routines actually add value. Whether or not the four-day week becomes standard, that lesson may prove to be its most lasting contribution.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "tfng",
        title: "Timed practice: True / False / Not Given",
        instructions:
          "Start the 12-minute timer above and answer this exercise and the next one together. Do the statements agree with the information in the passage? Use the 90-second rule.",
        statements: [
          {
            text: "Keynes expected working hours to fall as a result of increased productivity.",
            answer: "T",
            explanation: "Paragraph A: “rising productivity would allow people to work around fifteen hours a week”.",
          },
          {
            text: "In the '100-80-100' model, employees accept a small cut in pay.",
            answer: "F",
            explanation: "Paragraph B: employees receive “100 per cent of their pay”.",
          },
          {
            text: "Staff generally prefer compressed four-day weeks to the '100-80-100' model.",
            answer: "F",
            explanation: "Paragraph B says compressed schemes “are generally less popular with staff”.",
          },
          {
            text: "The British pilot lasted longer than the Icelandic trials.",
            answer: "F",
            explanation: "Paragraph C: the British pilot lasted six months; the Icelandic trials ran from 2015 to 2019.",
          },
          {
            text: "Every British company in the pilot kept the shorter week after it ended.",
            answer: "F",
            explanation: "Paragraph C: “the great majority” continued, which means not every company did.",
          },
          {
            text: "Some managers realised that certain tasks were not actually necessary.",
            answer: "T",
            explanation: "Paragraph D: managers identified “work that had been done out of habit rather than necessity”.",
          },
          {
            text: "Employees in the trials took more holidays than before.",
            answer: "NG",
            explanation: "Paragraph D mentions fewer sick days, but holidays are not discussed.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "Timed practice: Sentence completion",
        instructions: "Complete the sentences. Write NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.",
        text: "1. Keynes thought future generations would work about {{0}} hours a week.\n2. Trial participants reported less stress and {{1}}.\n3. Companies that offer a shorter week receive more {{2}} for their vacancies.\n4. Critics note that much of the data comes from employees' own reports of their {{3}}.\n5. In hospitals and schools, shorter hours may not be possible without additional {{4}}.",
        answers: [
          ["fifteen", "15"],
          ["burnout", "burn-out"],
          ["applicants"],
          ["wellbeing", "well-being"],
          ["staff"],
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Watch the clock at fixed points, not constantly. A simple rule: Passage 1 finished by minute 17–18, Passage 2 by minute 38–40. If you are behind at a checkpoint, guess and move on.",
    },
    {
      exam: "toeic",
      body: "In Part 7, some question sets ask about two or three linked texts (an email and a schedule, for example). These take longer, so do not leave them all until the last few minutes.",
    },
    {
      exam: "toefl",
      body: "TOEFL Reading is made of many short tasks, so there is little time to reread. In Read in Daily Life and Read an Academic Passage, read each question first, then read the text with that question in mind. In Complete the Words, fill in the easy grammar words quickly. Answer every item before the timer ends.",
    },
  ],
  vocabulary: [
    { word: "fallacy", meaning: "a common belief or way of thinking that is wrong", example: "It is a fallacy that working longer always means producing more.", topic: "academic" },
    { word: "underestimate", meaning: "to think something is smaller, easier or quicker than it really is", example: "We underestimated how long the project would take.", topic: "work" },
    { word: "overrun", meaning: "to take more time or money than planned", example: "The building project overran by two years.", topic: "business" },
    { word: "remedy", meaning: "a way of solving or improving a problem", example: "Breaking tasks into steps is a simple remedy for poor planning.", topic: "academic" },
    { word: "flag", meaning: "to mark something so that you can find it again later", example: "Flag the question and come back to it at the end.", topic: "education" },
    { word: "time budget", meaning: "a planned amount of time for each part of a task", example: "My time budget for Passage 1 is seventeen minutes.", topic: "education" },
    { word: "pilot", meaning: "a small test of a new idea before it is used widely", example: "The company ran a six-month pilot of the new schedule.", topic: "business" },
    { word: "burnout", meaning: "extreme tiredness caused by working too hard for too long", example: "Shorter weeks may reduce burnout among staff.", topic: "work" },
    { word: "sceptic", meaning: "a person who doubts that something is true or useful", example: "Sceptics say the trial companies were not typical.", topic: "society" },
    { word: "compress", meaning: "to fit something into a smaller space or shorter time", example: "Some firms compress five days' work into four.", topic: "work" },
  ],
  keyPoints: [
    "Set a time budget for each passage or part before the test, and check it at fixed points.",
    "Map the passage quickly instead of reading it slowly from start to finish.",
    "Use the 90-second rule: guess, flag, move on, and come back later.",
    "There is no penalty for wrong answers in IELTS, TOEFL or TOEIC, so never leave a blank.",
  ],
};

export default lesson;
