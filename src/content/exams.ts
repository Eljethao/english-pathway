import type { ExamInfo } from "@/lib/types";

/**
 * Exam formats and score mappings, checked against official sources in October 2026:
 * - IELTS: ielts.org (test format pages for Academic and General Training; "IELTS and the CEFR")
 * - TOEFL iBT: ets.org/toefl (test content pages, "TOEFL iBT Test: 2026 Update Test Blueprint and
 *   Specifications", "Updated TOEFL iBT Test Overview", "Compare scores" CEFR/IELTS table)
 * - TOEIC: ets.org/toeic ("Mapping the TOEIC tests on the CEFR", 2025) and the official TOEIC
 *   programme format pages (iibc-global.org)
 * Score mappings are approximate guides, not official cut scores for any institution.
 */
export const EXAMS: ExamInfo[] = [
  {
    id: "ielts",
    name: "IELTS",
    fullName: "International English Language Testing System",
    provider: "British Council, IDP: IELTS Australia and Cambridge University Press & Assessment",
    summary:
      "IELTS tests all four skills on a 9-band scale. Listening, Reading and Writing are taken on the same day with no breaks, and the Speaking test is a face-to-face interview with an examiner, held on the same day or up to about a week before or after. You can take it on paper or on computer. The Listening and Speaking tests are the same for everyone; Reading and Writing are different for the Academic and General Training versions.",
    bestFor: [
      "University study in the UK, Australia, New Zealand, Canada and many other countries (Academic)",
      "Professional registration, for example for doctors and nurses (usually Academic)",
      "Migration, work and secondary education in an English-speaking country (General Training)",
      "Learners who prefer a speaking test with a real examiner rather than a computer",
    ],
    versions: [
      {
        name: "IELTS Academic",
        description:
          "For university entry and professional registration. Reading uses three long texts from books, journals, magazines and newspapers. Writing Task 1 asks you to describe a graph, table, chart, process or diagram.",
      },
      {
        name: "IELTS General Training",
        description:
          "For work, migration and training. Reading moves from everyday texts (notices, adverts, timetables) to workplace texts and then one longer general-interest text. Writing Task 1 is a letter (personal, semi-formal or formal).",
      },
    ],
    totalTime: "About 2 hours 45 minutes in total: Listening about 30 minutes, Reading 60 minutes, Writing 60 minutes and Speaking 11–14 minutes",
    scoring: {
      scale: "Band 1–9, in whole and half bands",
      description:
        "Each skill gets a band score from 1 to 9, and the overall band is the average of the four, rounded to the nearest half band. In Listening and Reading each of the 40 questions is worth one mark, and the raw score is converted to a band. Writing and Speaking are marked by trained examiners using four criteria each. In Writing, Task 2 counts twice as much as Task 1. IELTS says there is no exact one-to-one match with the CEFR: the C1 threshold falls between 6.5 and 7, and band 5 is on the border between B1 and B2.",
      levels: [
        { level: "B1", score: "about 4.0–5.0" },
        { level: "B2", score: "about 5.5–6.5" },
        { level: "C1", score: "about 7.0–8.0" },
      ],
    },
    parts: [
      {
        skill: "listening",
        name: "Listening",
        duration: "about 30 minutes",
        questions: "40 questions in 4 parts",
        tasks: [
          { name: "Part 1", description: "A conversation between two people in an everyday situation, for example booking a course or asking about travel arrangements. Often form or note completion." },
          { name: "Part 2", description: "One speaker talking about an everyday topic, such as local facilities or an event. Often multiple choice, matching or map/plan labelling." },
          { name: "Part 3", description: "A conversation in an education or training context, for example two students discussing a project with a tutor." },
          { name: "Part 4", description: "An academic lecture by one speaker. Usually note, table, flow-chart or sentence completion." },
          { name: "Question types", description: "Multiple choice, matching, plan/map/diagram labelling, form/note/table/flow-chart completion, sentence completion and short answers. You hear each recording once, and answers come in the same order as the recording." },
        ],
      },
      {
        skill: "reading",
        name: "Reading",
        duration: "60 minutes",
        questions: "40 questions on 3 sections",
        tasks: [
          { name: "Academic", description: "Three long texts (2,150–2,750 words in total) for a non-specialist reader. At least one text contains a detailed argument." },
          { name: "General Training", description: "Section 1: two or three short everyday texts. Section 2: two work-related texts. Section 3: one longer, more complex text on a topic of general interest." },
          { name: "Question types", description: "Multiple choice, True/False/Not Given, Yes/No/Not Given, matching information, matching headings, matching features, matching sentence endings, sentence completion, summary/note/table/flow-chart completion, diagram labelling and short answers." },
        ],
      },
      {
        skill: "writing",
        name: "Writing",
        duration: "60 minutes",
        questions: "2 tasks",
        tasks: [
          { name: "Task 1 (Academic)", description: "Describe a graph, table, chart, process, map or diagram in at least 150 words. Spend about 20 minutes." },
          { name: "Task 1 (General Training)", description: "Write a letter of at least 150 words, for example to complain, request information or explain a situation. The tone can be personal, semi-formal or formal. Spend about 20 minutes." },
          { name: "Task 2", description: "Write an essay of at least 250 words in response to a point of view, argument or problem. Spend about 40 minutes. Task 2 is worth twice as much as Task 1." },
        ],
      },
      {
        skill: "speaking",
        name: "Speaking",
        duration: "11–14 minutes",
        questions: "3 parts",
        tasks: [
          { name: "Part 1: Introduction and interview", description: "4–5 minutes of questions about familiar topics such as your home, studies, work and interests." },
          { name: "Part 2: Long turn", description: "You get a task card, have 1 minute to prepare and make notes, then speak for up to 2 minutes. The examiner may ask one or two follow-up questions." },
          { name: "Part 3: Discussion", description: "4–5 minutes of more abstract questions linked to the Part 2 topic. You explain, compare, speculate and justify opinions." },
        ],
      },
    ],
    strategies: [
      "Read the questions before each Listening recording and predict the type of answer (a number, a name, a noun).",
      "Check word limits: \"NO MORE THAN TWO WORDS\" means a three-word answer is wrong even if the meaning is right.",
      "In Reading, spend about 20 minutes per section and do not let one hard question take five minutes.",
      "Learn the difference between False (the text says the opposite) and Not Given (the text does not say).",
      "In Writing Task 1, include an overview of the main trends. Do not give your opinion or reasons that are not shown.",
      "Spend the full 40 minutes on Task 2, because it counts twice as much as Task 1.",
      "In Speaking, extend your answers with reasons and examples, and use the full 2 minutes in Part 2.",
    ],
    recommendedLessons: [
      "listening-numbers-dates-spelling",
      "reading-skimming-main-idea",
      "speaking-talking-about-yourself",
      "listening-predicting-answers",
      "reading-true-false-not-given",
      "reading-matching-headings",
      "writing-describing-charts",
      "speaking-long-turn-cue-cards",
      "listening-map-plan-labelling",
      "reading-sentence-summary-completion",
      "writing-processes-maps",
      "writing-opinion-essay",
      "listening-note-taking-lectures",
      "speaking-abstract-discussion",
      "writing-discussion-problem-solution-essays",
      "reading-time-management",
    ],
    officialUrl: "https://ielts.org",
    lastChecked: "2026-10",
  },
  {
    id: "toefl",
    name: "TOEFL iBT",
    fullName: "Test of English as a Foreign Language (internet-based test)",
    provider: "ETS",
    summary:
      "The TOEFL iBT is a computer-based test of academic and campus English. Since 21 January 2026 it has a shorter format with many short tasks, in this order: Reading, Listening, Writing, Speaking. Reading and Listening are adaptive: your answers in the first part of the section decide whether the second part is easier or harder, so the number of questions and the time can vary. Writing and Speaking are the same for everyone. You can take it at a test centre or at home (Home Edition) with a live online proctor.",
    bestFor: [
      "University study, especially in the United States and Canada",
      "Scholarships and exchange programmes that ask for TOEFL",
      "Learners who are comfortable typing and speaking into a microphone",
      "Learners who prefer many short tasks to a few long ones",
    ],
    versions: [
      {
        name: "TOEFL iBT (test centre)",
        description: "The standard version, taken on a computer at an authorised test centre.",
      },
      {
        name: "TOEFL iBT Home Edition",
        description: "The same test taken on your own computer at home, with a live human proctor watching online.",
      },
    ],
    totalTime: "About 1 hour 30 minutes of test time; allow about 2 hours including instructions and check-in. No scheduled breaks.",
    scoring: {
      scale: "1–6 in half bands (each section and overall)",
      description:
        "Each section is scored from 1 to 6 in half-band steps, and the overall score is the average of the four sections, rounded to the nearest half band. ETS links each band directly to the CEFR: 6 = C2, 5–5.5 = C1, 4–4.5 = B2, 3–3.5 = B1, 2–2.5 = A2, 1–1.5 = A1. For two years after the January 2026 change, score reports also show a comparable score on the old 0–120 scale (for example, band 4 is about 72–85 and band 5 is about 95–105).",
      levels: [
        { level: "B1", score: "3–3.5" },
        { level: "B2", score: "4–4.5" },
        { level: "C1", score: "5–5.5" },
      ],
    },
    parts: [
      {
        skill: "reading",
        name: "Reading",
        duration: "about 27–30 minutes",
        questions: "about 35–50 questions (adaptive)",
        tasks: [
          { name: "Complete the Words", description: "A short academic paragraph (about 70–100 words). After the first sentence, the second half of every second word is missing, and you type the missing letters. Each paragraph has 10 incomplete words." },
          { name: "Read in Daily Life", description: "Short everyday texts (about 15–150 words) such as notices, emails, menus, schedules, text messages and adverts, each followed by 2 or 3 multiple-choice questions." },
          { name: "Read an Academic Passage", description: "A short academic text of about 200 words followed by 5 questions on facts, vocabulary, inference, the connection between ideas and the writer's purpose." },
        ],
      },
      {
        skill: "listening",
        name: "Listening",
        duration: "about 27–29 minutes",
        questions: "about 35–47 questions (adaptive)",
        tasks: [
          { name: "Listen and Choose a Response", description: "You hear one question or statement (not shown on screen) and choose the best reply from four options." },
          { name: "Listen to a Conversation", description: "A short conversation between two people, mostly about campus or daily life, followed by 2 questions." },
          { name: "Listen to an Announcement", description: "A short announcement (about 40–85 words) in a classroom or campus setting, about schedules, directions, rules or events, followed by questions." },
          { name: "Listen to an Academic Talk", description: "A short talk by a professor or expert (about 100–250 words) followed by 4 questions on main ideas, details, organisation and inference." },
        ],
      },
      {
        skill: "writing",
        name: "Writing",
        duration: "about 23 minutes",
        questions: "12 tasks",
        tasks: [
          { name: "Build a Sentence", description: "10 items. You read one sentence in a short exchange and put words and phrases in the right order to make a grammatical reply." },
          { name: "Write an Email", description: "1 task, 7 minutes. Write an email for an academic or social situation, for example to make a request, give information or propose a solution." },
          { name: "Write for an Academic Discussion", description: "1 task, 10 minutes. Read a professor's question and two classmates' posts, then write your own post that states and supports your opinion (at least 100 words is recommended)." },
        ],
      },
      {
        skill: "speaking",
        name: "Speaking",
        duration: "about 8 minutes",
        questions: "11 tasks",
        tasks: [
          { name: "Listen and Repeat", description: "7 sentences in a campus or academic scenario. You hear each sentence once and repeat it exactly (about 8–12 seconds to respond). The sentences get longer and more complex." },
          { name: "Take an Interview", description: "4 questions from a recorded interviewer on one topic, with no preparation time and 45 seconds for each answer. Early questions are about your experience; later questions ask for opinions on wider issues." },
        ],
      },
    ],
    strategies: [
      "Practise Complete the Words daily: use grammar (word class, verb form, plural) as well as meaning to finish each word.",
      "In Read in Daily Life, read the question first and scan the text for the detail you need.",
      "In Listen and Choose a Response, listen for the type of question (Wh-, yes/no, suggestion) and the speaker's intention, not just repeated words.",
      "Take notes during conversations and talks: the main idea, examples and any change of plan.",
      "In Write an Email, cover every point in the prompt, use a polite opening and closing, and write at least 80–100 words.",
      "In the Academic Discussion, give a clear opinion in the first sentence, add a new reason and refer to one of the classmates' posts.",
      "In Take an Interview, start answering straight away and use the full 45 seconds: answer, reason, example.",
    ],
    recommendedLessons: [
      "reading-vocabulary-from-context",
      "listening-question-response",
      "speaking-listen-and-repeat",
      "writing-sentence-structure-punctuation",
      "reading-notices-emails-ads",
      "writing-formal-informal-emails",
      "reading-grammar-word-completion",
      "listening-multiple-choice-distractors",
      "listening-note-taking-lectures",
      "speaking-giving-opinions",
      "speaking-intonation-connected-speech",
      "writing-academic-discussion",
      "listening-attitude-opinion-inference",
      "reading-inference-writers-purpose",
    ],
    officialUrl: "https://www.ets.org/toefl.html",
    lastChecked: "2026-10",
  },
  {
    id: "toeic",
    name: "TOEIC",
    fullName: "Test of English for International Communication",
    provider: "ETS",
    summary:
      "TOEIC tests English for work and everyday life, with situations such as meetings, emails, travel, shopping and office announcements. Most people take the TOEIC Listening & Reading test, a 200-question multiple-choice test. The separate TOEIC Speaking & Writing tests measure productive skills and are often required by employers in addition to, or instead of, Listening & Reading.",
    bestFor: [
      "Job applications and promotions at international companies",
      "University graduation requirements in some countries (for example in Asia and Europe)",
      "Professionals who need to show workplace English rather than academic English",
      "Learners who want a clear score to track progress over time",
    ],
    versions: [
      {
        name: "TOEIC Listening & Reading",
        description:
          "200 multiple-choice questions in two timed sections: Listening (Parts 1–4, about 45 minutes) and Reading (Parts 5–7, 75 minutes). Score 10–990.",
      },
      {
        name: "TOEIC Speaking & Writing",
        description:
          "Computer-based tests of productive skills. Speaking has 11 questions (about 20 minutes) and Writing has 8 questions (about 60 minutes). Each is scored 0–200.",
      },
    ],
    totalTime: "Listening & Reading: about 2 hours of test time (about 2.5 hours with registration questions). Speaking & Writing: about 80 minutes.",
    scoring: {
      scale: "Listening & Reading 10–990 (each section 5–495); Speaking 0–200; Writing 0–200",
      description:
        "Listening and Reading scores go up in 5-point steps and are added for a total out of 990. Speaking and Writing are scored separately in 10-point steps, with no total. ETS's CEFR mapping gives minimum scores for each section: Listening 275 (B1), 400 (B2), 490 (C1); Reading 275 (B1), 385 (B2), 455 (C1); Speaking 120 (B1), 160 (B2), 180 (C1); Writing 120 (B1), 150 (B2), 180 (C1). The total L&R ranges below are estimated by adding the Listening and Reading minimums. ETS says these are guidelines, not rigid cut scores.",
      levels: [
        { level: "B1", score: "L&R about 550–780 · Speaking 120+ · Writing 120+" },
        { level: "B2", score: "L&R about 785–940 · Speaking 160+ · Writing 150+" },
        { level: "C1", score: "L&R about 945+ · Speaking 180+ · Writing 180+" },
      ],
    },
    parts: [
      {
        skill: "listening",
        name: "Listening (L&R test)",
        duration: "about 45 minutes",
        questions: "100 questions in 4 parts",
        tasks: [
          { name: "Part 1 – Photographs", description: "6 questions. You hear four statements about a photo and choose the one that best describes it. Nothing is printed." },
          { name: "Part 2 – Question-Response", description: "25 questions. You hear a question or statement and three possible replies, and choose the best reply." },
          { name: "Part 3 – Conversations", description: "39 questions. Conversations between two or three people at work or in daily life, each with 3 questions. Some questions use a chart or graphic." },
          { name: "Part 4 – Talks", description: "30 questions. Short talks such as announcements, voicemails and presentations, each with 3 questions." },
        ],
      },
      {
        skill: "reading",
        name: "Reading (L&R test)",
        duration: "75 minutes",
        questions: "100 questions in 3 parts",
        tasks: [
          { name: "Part 5 – Incomplete Sentences", description: "30 questions. Choose the word or phrase that completes a sentence (grammar and vocabulary)." },
          { name: "Part 6 – Text Completion", description: "16 questions. Four short texts, each with four gaps; one gap in each text needs a whole sentence." },
          { name: "Part 7 – Reading Comprehension", description: "54 questions on single passages (29) and double or triple passages (25): emails, notices, articles, forms, chats and adverts." },
        ],
      },
      {
        skill: "speaking",
        name: "Speaking test",
        duration: "about 20 minutes",
        questions: "11 questions",
        tasks: [
          { name: "Read a text aloud", description: "2 questions. 45 seconds to prepare and 45 seconds to read a short announcement or advert aloud." },
          { name: "Describe a picture", description: "2 questions. 45 seconds to prepare and 30 seconds to describe a photo." },
          { name: "Respond to questions", description: "3 questions on an everyday topic, with no real preparation time and 15 or 30 seconds to answer." },
          { name: "Respond to questions using information provided", description: "3 questions about a schedule or document on screen (45 seconds to read it), with 15 or 30 seconds to answer." },
          { name: "Express an opinion", description: "1 question. 45 seconds to prepare and 60 seconds to give and support your opinion." },
        ],
      },
      {
        skill: "writing",
        name: "Writing test",
        duration: "about 60 minutes",
        questions: "8 questions",
        tasks: [
          { name: "Write a sentence based on a picture", description: "5 questions in 8 minutes. Write one sentence about a photo using two given words or phrases." },
          { name: "Respond to a written request", description: "2 questions, 10 minutes each. Read a short email and write a reply that does what it asks." },
          { name: "Write an opinion essay", description: "1 question, 30 minutes. Give and support your opinion on an issue; at least 300 words is recommended." },
        ],
      },
    ],
    strategies: [
      "In Part 1, look at the photo before the audio starts and think of the people, actions and objects you can see.",
      "In Part 2, be careful with answers that repeat a word from the question or use a similar-sounding word: they are often wrong.",
      "In Parts 3 and 4, read the three questions before each conversation or talk so you know what to listen for.",
      "In Part 5, check the words around the gap first: often you only need the word form (noun, verb, adjective, adverb).",
      "Keep about 55 minutes for Part 7 and answer every question, because there is no penalty for guessing.",
      "In the Speaking test, use the preparation time to plan two or three main points, and keep speaking until the time ends.",
      "In written replies, answer every request in the email and use a clear, polite business tone.",
    ],
    recommendedLessons: [
      "listening-everyday-conversations",
      "listening-question-response",
      "listening-announcements-instructions",
      "reading-scanning-details",
      "reading-notices-emails-ads",
      "speaking-pronunciation-basics",
      "speaking-describing-a-picture",
      "writing-formal-informal-emails",
      "reading-grammar-word-completion",
      "listening-multiple-choice-distractors",
      "speaking-giving-opinions",
      "writing-opinion-essay",
      "reading-time-management",
    ],
    officialUrl: "https://www.ets.org/toeic.html",
    lastChecked: "2026-10",
  },
];
