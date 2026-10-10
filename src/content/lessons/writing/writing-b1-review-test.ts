import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-b1-review-test",
  title: "B1 writing review test",
  summary:
    "A 45-minute timed review of the B1 writing course: 18 auto-checked questions and a paragraph-ordering task on sentences, linking, tenses, tone and spelling, then a 150-word letter and a 100-word opinion paragraph with model answers and self-check rubrics.",
  skill: "writing",
  level: "B1",
  order: 12,
  minutes: 45,
  exams: [
    { exam: "ielts", task: "Writing Task 1 (General Training)" },
    { exam: "ielts", task: "Writing Task 2" },
    { exam: "toeic", task: "Writing – Write an opinion essay" },
  ],
  objectives: [
    "Show control of the B1 course language: sentence structure, linking words, verb tenses, tone, spelling and capitals",
    "Write a semi-formal letter of at least 150 words in 20 minutes that covers every point in the task",
    "Write an opinion paragraph of at least 100 words with supported reasons in about 12 minutes",
    "Use the rubrics and your score to choose which B1 lessons to review",
  ],
  warmUp: [
    "Which B1 writing lesson helped you most, and which kind of mistake do you still make most often?",
  ],
  learn: [
    {
      type: "text",
      title: "How this test works",
      body: "This test reviews the whole B1 writing course. It has **three parts** and takes about **45 minutes**.\n\n- **Part A** (about 8 minutes): 18 auto-checked questions on sentences, linking words, tenses, tone and spelling, and one paragraph to put in order.\n- **Part B** (20 minutes): a letter of at least 150 words, like IELTS General Training Task 1.\n- **Part C** (about 12 minutes): one opinion paragraph of at least 100 words.\n\nWork without notes or a dictionary, and use a timer for each part. Look at the model answers only when you have finished your own. Then use the rubric to check your work honestly, one point at a time.",
    },
    {
      type: "table",
      title: "Your time plan",
      headers: ["Part", "Task", "Time", "Lessons it reviews"],
      rows: [
        ["A1", "10 multiple-choice questions", "4 minutes", "Sentences and punctuation, linking words, tenses, emails, spelling, reasons and examples"],
        ["A2", "Complete an email (8 gaps)", "3 minutes", "Verb tenses, linking words, spelling"],
        ["A3", "Put a paragraph in order", "1 minute", "Writing a clear paragraph"],
        ["B", "Letter: at least 150 words", "20 minutes", "Formal and informal emails, complaint and request letters"],
        ["C", "Opinion paragraph: at least 100 words", "12 minutes", "Clear paragraphs, reasons and examples"],
      ],
    },
    {
      type: "table",
      title: "After the test: what your results suggest",
      headers: ["Result", "What it suggests", "Next step"],
      rows: [
        ["Parts A1 and A2: 16–18 correct, paragraph in the right order, and most rubric points ticked in B and C", "Secure B1 writing", "Start the B2 writing course"],
        ["Parts A1 and A2: 12–15 correct, or two or three rubric points missing", "Solid B1 with some weak areas", "Review the lessons for the questions you got wrong, then rewrite your letter"],
        ["Parts A1 and A2: under 12 correct, or your letter or paragraph was too short", "Developing B1", "Repeat lessons 1–4, then lessons 7 and 10 on tenses and spelling"],
      ],
    },
  ],
  model: [
    {
      type: "text",
      title: "Five reminders before you start",
      body: "1. **Read the task twice.** Underline who you are writing to and every point you must cover.\n2. **Plan for 2–3 minutes.** For a letter, write one note for each bullet point. For a paragraph, write your opinion, two reasons and one example.\n3. **Main point first.** Say why you are writing (letter) or what you think (paragraph) at the start.\n4. **Support your ideas.** Give a reason, explain it, and add a specific example.\n5. **Check in three passes.** First capitals, then spelling and sound-alike words, then your own common mistakes (tenses, *people are*, *information*, *I agree*).",
    },
    {
      type: "example",
      title: "From weak to strong: one sentence from a letter",
      items: [
        "Weak: *the course was good but there was problem, the cameras was not enough.*",
        "Strong: **The course was very good. However, there was one problem: there were not enough cameras for everyone.**",
        "What changed: a capital letter at the start, a new sentence that starts with *However* + comma, a colon instead of the comma splice, *one problem* (a singular noun needs a word such as *a* or *one* before it), and *there were not enough cameras* (plural verb and natural word order).",
      ],
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Part A1: language check (4 minutes)",
        instructions: "Choose the best answer for each question.",
        questions: [
          {
            prompt: "Which sentence is correct?",
            options: [
              "I was tired, I went to bed early.",
              "I was tired, so I went to bed early.",
              "Because I was tired.",
              "I was tired so, I went to bed early.",
            ],
            answer: 1,
            explanation: "Two full sentences can be joined with a comma + *so*. Option A is a comma splice, C is a fragment, and in D the comma is in the wrong place.",
          },
          {
            prompt: "“The hotel was expensive. ___, the rooms were small and noisy.”",
            options: ["Because", "However", "Although", "So that"],
            answer: 1,
            explanation: "You expect an expensive hotel to have good rooms, so the second sentence is a contrast. *However* starts a new sentence and is followed by a comma. *Because* and *Although* join two clauses inside one sentence, and *So that* shows purpose.",
          },
          {
            prompt: "“___ it was raining, we went for a long walk.”",
            options: ["Although", "However", "Because", "Despite"],
            answer: 0,
            explanation: "*Although* + subject + verb shows contrast in one sentence. *Despite* is followed by a noun or -ing form (*despite the rain*).",
          },
          {
            prompt: "“I ___ in this city since 2020.”",
            options: ["live", "am living", "have lived", "lived"],
            answer: 2,
            explanation: "Use the present perfect with *since* for something that started in the past and continues now.",
          },
          {
            prompt: "“When I arrived at the party, my friends ___ in the garden.”",
            options: ["danced", "were dancing", "have danced", "dance"],
            answer: 1,
            explanation: "The past continuous shows an action in progress when something else happened (*I arrived*).",
          },
          {
            prompt: "You are writing to a company, but you do not know the name of the person who will read your letter. How should you begin?",
            options: ["Hi there,", "Dear Sir or Madam,", "Hello company,", "Dear friend,"],
            answer: 1,
            explanation: "*Dear Sir or Madam* is the standard formal greeting when you do not know the reader's name.",
          },
          {
            prompt: "Which request is the most polite for a letter to a manager?",
            options: [
              "Give me my money back.",
              "I want a refund now.",
              "I would be grateful if you could give me a refund.",
              "Refund, please.",
            ],
            answer: 2,
            explanation: "*I would be grateful if you could…* is polite but still clear about what the writer wants.",
          },
          {
            prompt: "Which sentence has no spelling mistakes?",
            options: [
              "Their going to finish there report tomorow.",
              "They're going to finish their report tomorrow.",
              "There going to finish they're report tomorrow.",
              "They're going to finish their report tommorow.",
            ],
            answer: 1,
            explanation: "*They're* = they are; *their* = belonging to them; *tomorrow* has one m and two r's.",
          },
          {
            prompt: "Which sentence uses capital letters correctly?",
            options: [
              "Last Summer I studied english in canada.",
              "Last summer I studied English in Canada.",
              "Last summer I Studied English in Canada.",
              "last summer I studied English in canada.",
            ],
            answer: 1,
            explanation: "Languages and countries need capitals; seasons do not; the first word of a sentence does.",
          },
          {
            prompt: "Reason: “Public transport can save you money.” Which sentence supports it best?",
            options: [
              "Buses are big and usually red.",
              "Everyone hates driving in the city.",
              "For example, my monthly bus pass costs much less than the fuel and parking I paid for when I drove to work.",
              "Public transport is a good thing for many reasons.",
            ],
            answer: 2,
            explanation: "It is a specific, believable example that shows the reason is true. Option B is an over-generalisation, and D just repeats the idea.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Part A2: complete the email (3 minutes)",
        instructions: "Write the correct form of the word in brackets. For (contrast word) and (reason word), write one linking word or phrase.",
        text: "Hi Sam,\n\nI'm sorry I {{0}} (not reply) sooner. I {{1}} (be) really busy since I started my new course. The course is hard work. {{2}} (contrast word), I'm enjoying it a lot.\n\nLast weekend I {{3}} (visit) my grandparents. While we {{4}} (walk) in the park, it started to rain, so we went to a café. Next Saturday I {{5}} (meet) some friends from my class. We've already booked a table at a pizza restaurant. Would you like to come? My classmates are {{6}} (real) friendly, and I'm sure you'd like them.\n\nI'm a bit tired today {{7}} (reason word) I stayed up late to finish an essay. Write back soon!\n\nBest wishes,\nNina",
        answers: [
          ["haven't replied", "have not replied", "didn't reply", "did not reply"],
          ["have been", "'ve been"],
          ["However", "But", "Still", "Even so", "Nevertheless", "Nonetheless", "Despite this", "In spite of this"],
          ["visited"],
          ["were walking"],
          ["am meeting", "am going to meet", "'m meeting", "'m going to meet", "will meet", "'ll meet"],
          ["really"],
          ["because", "as", "since"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "order",
        mode: "lines",
        title: "Part A3: put the paragraph in order (1 minute)",
        instructions: "Put the sentences in the correct order to make a clear paragraph.",
        items: [
          "For long journeys, I prefer travelling by train to flying.",
          "The main reason is that trains are much more comfortable.",
          "For example, on the train from my city to the capital, I can walk around, work on my laptop and buy a hot meal.",
          "Another reason is that train stations are usually in the city centre.",
          "This means that I do not have to spend time and money getting to an airport outside the city.",
          "For these reasons, I usually choose the train when the journey takes less than five hours.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "write",
        title: "Part B: letter (20 minutes)",
        instructions: "Set a timer for 20 minutes: 3 minutes to plan, 14 to write and 3 to check.",
        prompt:
          "You recently took an evening course at a local college. The course organiser, Ms Grant, has asked students for feedback.\n\nWrite a letter to Ms Grant. In your letter:\n- say which course you took and what you enjoyed about it\n- explain one problem you had during the course\n- suggest how the course could be improved\n\nWrite at least 150 words. You do NOT need to write any addresses.\n\nBegin your letter as follows: Dear Ms Grant,",
        minWords: 150,
        minutes: 20,
        rubric: [
          "Task achievement: I covered all three bullet points, and each one has some detail (not just one short sentence).",
          "Task achievement: my tone is polite and semi-formal throughout, and I finished with a suitable closing (Yours sincerely, because I used her name).",
          "Coherence and cohesion: I said why I am writing at the start, used a new paragraph for each bullet point and joined my ideas with linking words (However, As a result, also).",
          "Lexical resource: I used polite phrases for problems and suggestions (Unfortunately, … / It would be helpful if… / The college could…).",
          "Grammatical range and accuracy: I used the past simple for the course and modal verbs (could, would) for suggestions, with no sentence fragments or comma splices.",
          "Accuracy: I checked capitals, spelling and sound-alike words.",
          "Length: I wrote at least 150 words.",
        ],
        modelAnswer:
          "Dear Ms Grant,\n\nI recently completed the ten-week evening course in digital photography, and I am writing to give you some feedback, as you asked.\n\nFirst of all, I really enjoyed the course. The teacher, Mr Evans, explained everything clearly and was always patient with beginners like me. I particularly liked the practical sessions, when we took photos around the town and then discussed them in class.\n\nHowever, there was one problem. The course information said that students could use college cameras, but there were only six cameras for fifteen students. As a result, several of us had to wait for a long time, and some students could not take part in every activity.\n\nI would like to suggest two improvements for future courses. The college could buy a few more cameras, or students could use their own phone cameras if they prefer. It would also be helpful to have a short online summary of each lesson, so that we could review it at home.\n\nThank you for organising the course. I hope these suggestions are useful.\n\nYours sincerely,\nAhmed Karimi",
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Part C: opinion paragraph (12 minutes)",
        instructions: "Set a timer for 12 minutes: 2 minutes to plan, 8 to write and 2 to check.",
        prompt:
          "Is it better to work for a large company or a small company?\n\nWrite one paragraph of at least 100 words. Give your opinion, two reasons and at least one specific example.",
        minWords: 100,
        minutes: 12,
        rubric: [
          "Task response: my opinion is clear in the first sentence, and I kept the same opinion to the end.",
          "Task response: I gave two different reasons, explained each one and supported at least one with a specific example.",
          "Coherence and cohesion: my paragraph has a topic sentence, clear signals (The main reason…, Another reason…, For example…) and a final sentence that returns to my opinion.",
          "Lexical resource: I used work vocabulary accurately (colleagues, salary, career, experience) and avoided repeating the same words.",
          "Grammatical range and accuracy: I used some complex sentences (because, when, although) correctly, and my verbs agree with their subjects.",
          "Length: I wrote at least 100 words.",
        ],
        modelAnswer:
          "In my opinion, it is better to work for a small company, especially at the start of your career. The main reason is that employees in a small company usually do many different jobs. For example, my friend works for a small travel agency, and in her first year she helped with marketing, customer service and the company website. As a result, she learned far more than she could have learned in one narrow role. Another reason is that it is easier to get to know your colleagues and managers. In a small team, your manager can see your work, so good ideas are noticed quickly. Of course, large companies often pay higher salaries and offer more formal training. However, I believe the experience and friendly atmosphere of a small company are more valuable for young workers.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In **General Training Task 1**, the bullet points are your plan: write one paragraph for each, with at least two or three sentences of detail. A letter that answers only two of the three points cannot get a high score for Task Achievement.",
    },
    {
      exam: "ielts",
      body: "Task 2 counts twice as much as Task 1 in the IELTS Writing test. The opinion paragraph in Part C is the basic building block of a Task 2 body paragraph: topic sentence, reason, explanation, example.",
    },
    {
      exam: "toeic",
      body: "The TOEIC **opinion essay** (30 minutes, at least 300 words recommended) is built from paragraphs like the one in Part C. If you can write a clear 100-word paragraph in 12 minutes, you are ready to practise full essays at B2.",
    },
  ],
  vocabulary: [
    { word: "feedback", meaning: "comments about how good or useful something was", example: "The college asked students for feedback on the course.", topic: "education" },
    { word: "complete", meaning: "to finish something", example: "She completed a ten-week photography course.", topic: "education" },
    { word: "practical", meaning: "involving doing things rather than only studying them", example: "The practical sessions were the best part of the course.", topic: "education" },
    { word: "improvement", meaning: "a change that makes something better", example: "I'd like to suggest two improvements.", topic: "everyday" },
    { word: "organiser", meaning: "a person who plans an event or activity", example: "Please send your comments to the course organiser.", topic: "everyday" },
    { word: "atmosphere", meaning: "the feeling that a place or situation gives you", example: "The office has a friendly atmosphere.", topic: "work" },
    { word: "salary", meaning: "the money you are paid for your job, usually every month", example: "Large companies often pay higher salaries.", topic: "work" },
    { word: "role", meaning: "the job or position someone has in an organisation", example: "In her new role, she manages a team of five.", topic: "work" },
    { word: "journey", meaning: "the act of travelling from one place to another", example: "The journey to the capital takes four hours.", topic: "travel" },
    { word: "monthly pass", meaning: "a ticket you can use as often as you like for a month", example: "A monthly bus pass is cheaper than daily tickets.", topic: "travel" },
  ],
  keyPoints: [
    "Read the task twice and plan: one note per bullet point for a letter; opinion, two reasons and an example for a paragraph.",
    "Cover every point in a letter, with a new paragraph for each, and keep the tone the same from greeting to closing.",
    "Support each reason with an explanation and a specific example.",
    "Check in three passes: capitals, spelling and sound-alike words, then your own common grammar mistakes.",
    "Use your Part A score and the rubric to choose which B1 lessons to review before you start B2.",
  ],
};

export default lesson;
