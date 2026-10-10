import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-b2-mock-test",
  title: "B2 writing mock test",
  summary:
    "A full 60-minute IELTS Academic-style writing mock: a Task 1 line graph report and a Task 2 discussion essay, with quick planning checks, model answers at about band 7 and self-assessment rubrics based on the public IELTS criteria.",
  skill: "writing",
  level: "B2",
  order: 12,
  minutes: 60,
  exams: [
    { exam: "ielts", task: "Mock test" },
    { exam: "ielts", task: "Writing Task 1 (Academic)" },
    { exam: "ielts", task: "Writing Task 2" },
  ],
  objectives: [
    "Complete IELTS Academic Writing Task 1 and Task 2 in 60 minutes, spending about 20 and 40 minutes on them",
    "Write a Task 1 report with a clear overview and accurate figures from a line graph",
    "Write a Task 2 essay that discusses both views and gives a clear opinion",
    "Assess your answers against the four public IELTS criteria and choose what to review",
  ],
  warmUp: [
    "Do you read printed books, e-books or audiobooks? Which do you use most, and why?",
    "Should children's free time be planned by adults, or should children decide for themselves?",
  ],
  learn: [
    {
      type: "text",
      title: "How this mock test works",
      body: "This mock follows the IELTS Academic Writing test: **two tasks in 60 minutes**.\n\n- **Task 1** (about 20 minutes, at least 150 words): describe a line graph.\n- **Task 2** (about 40 minutes, at least 250 words): a discussion essay. Task 2 counts twice as much as Task 1.\n\nBefore each task there is a short multiple-choice **planning check**. Treat it as part of your planning time for that task, not as extra time. Start a 60-minute timer now, work without a dictionary, and look at the model answers only when both tasks are finished.",
    },
    {
      type: "table",
      title: "Your time plan",
      headers: ["Stage", "Time", "What to do"],
      rows: [
        ["Task 1: plan", "3–4 minutes", "Planning check, then choose your overview and the key figures"],
        ["Task 1: write and check", "16–17 minutes", "Introduction, overview, two detail paragraphs; check figures against the graph"],
        ["Task 2: plan", "5 minutes", "Planning check, then your thesis and two body paragraph ideas"],
        ["Task 2: write", "30 minutes", "Introduction, two body paragraphs, conclusion"],
        ["Task 2: check", "5 minutes", "Position clear throughout? Agreement, articles, spelling"],
      ],
    },
    {
      type: "table",
      title: "After the test: using the rubrics",
      headers: ["What you find", "What it suggests", "Next step"],
      rows: [
        ["Almost every rubric point ticked in both tasks, with few errors", "Your writing is secure at B2 and shows several features of the higher bands", "Start the C1 writing course"],
        ["Task 1 overview missing or figures inaccurate", "Task Achievement is holding you back", "Review B2 lessons 1, 5 and 6 on charts, tables and comparisons"],
        ["Task 2 position unclear, or one view much shorter than the other", "Task Response needs work", "Review B2 lessons 3, 7, 8 and 10 on essay types, introductions and conclusions"],
        ["Either answer under the word limit, or many small grammar errors", "Time management or accuracy", "Repeat the mock with a strict timer and a 3-minute final check for your most common errors"],
      ],
    },
  ],
  model: [
    {
      type: "text",
      title: "Five reminders before you start",
      body: "1. **Task 1 overview**: one or two sentences on the main trends, with no detailed figures. Without an overview, Task 1 is unlikely to score above band 5 for Task Achievement.\n2. **Task 1 accuracy**: every figure must match the graph. Report only what is shown: no reasons, no opinions.\n3. **Task 2 question type**: *Discuss both views and give your opinion* needs both views explained fairly **and** your own position.\n4. **Thesis and conclusion** must say the same thing.\n5. **Time**: when 20 minutes have passed, move on to Task 2 even if Task 1 is not perfect.",
    },
  ],
  practice: [
    {
      type: "text",
      title: "Task 1 (about 20 minutes)",
      body: "*The graph below shows the number of printed books, e-books and audiobooks sold in Norvania between 2010 and 2025.*\n\n*Summarise the information by selecting and reporting the main features, and make comparisons where relevant.*\n\n*Write at least 150 words.*",
    },
    {
      type: "chart",
      chart: {
        kind: "line",
        title: "Book sales in Norvania by format, 2010–2025",
        unit: "million copies",
        categories: ["2010", "2013", "2016", "2019", "2022", "2025"],
        series: [
          { name: "Printed books", values: [62, 58, 51, 47, 45, 44] },
          { name: "E-books", values: [6, 15, 22, 24, 23, 21] },
          { name: "Audiobooks", values: [1, 2, 4, 8, 14, 20] },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Task 1 planning check",
        instructions: "Use the graph above. These questions are part of your 20 minutes for Task 1.",
        questions: [
          {
            prompt: "Which is the best overview?",
            options: [
              "In 2010, 62 million printed books were sold, compared with 6 million e-books and 1 million audiobooks.",
              "Printed books remained the best-selling format despite a steady fall, while both digital formats grew; e-book sales peaked in 2019, but audiobooks rose throughout and almost matched e-books by 2025.",
              "People in Norvania prefer printed books because they are cheaper and easier to read.",
              "The graph shows book sales in Norvania from 2010 to 2025.",
            ],
            answer: 1,
            explanation: "An overview summarises the main trends without detailed figures. A is a detail, C gives reasons that are not shown, and D only introduces the graph.",
          },
          {
            prompt: "Which statement is accurate?",
            options: [
              "E-book sales rose in every period shown.",
              "Audiobook sales in 2025 were twenty times as high as in 2010.",
              "Sales of printed books halved between 2010 and 2025.",
              "In 2019, more e-books than printed books were sold.",
            ],
            answer: 1,
            explanation: "Audiobooks rose from 1 million to 20 million. E-books fell after 2019, printed books fell from 62 to 44 million (not half), and printed books outsold e-books in every year.",
          },
          {
            prompt: "Which sentence contains an inaccurate figure?",
            options: [
              "E-book sales quadrupled from 6 million in 2010 to 24 million in 2019.",
              "E-book sales reached a peak of 24 million in 2016.",
              "Audiobook sales stood at only 4 million in 2016.",
              "Printed book sales fell to 47 million in 2019.",
            ],
            answer: 1,
            explanation: "In 2016 e-book sales were 22 million. The peak of 24 million was in 2019.",
          },
          {
            prompt: "Which paragraph plan is most effective for this graph?",
            options: [
              "One paragraph for each year shown (six detail paragraphs).",
              "Introduction; overview; printed books; the two digital formats compared.",
              "Introduction; reasons for the changes; your opinion of e-books.",
              "Introduction; audiobooks only, as they changed the most.",
            ],
            answer: 1,
            explanation: "Grouping the falling format and the two rising formats lets you compare logically. Year-by-year paragraphs become a list, reasons and opinions are not shown in the graph, and covering one format only misses key features.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "write",
        title: "Writing Task 1: the Norvania line graph",
        instructions: "Write your report now. Stop at the 20-minute mark and move on to Task 2.",
        prompt:
          "The graph above shows the number of printed books, e-books and audiobooks sold in Norvania between 2010 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
        minWords: 150,
        minutes: 20,
        rubric: [
          "Task Achievement: I paraphrased the task in my introduction and wrote a clear overview of the main trends (printed books highest but falling; digital formats rising; e-books peaking; audiobooks almost catching up).",
          "Task Achievement: I selected the key features (start and end points, the 2019 e-book peak, the audiobook rise) and supported them with figures that match the graph exactly.",
          "Task Achievement: I did not give reasons or opinions that are not shown in the graph.",
          "Coherence and Cohesion: my report is logically organised in paragraphs, and I used referencing and linking (while, in contrast, meanwhile, by then) naturally.",
          "Lexical Resource: I used the language of change accurately (fell gradually, levelled off, quadrupled, peaked, caught up with) and varied it.",
          "Grammatical Range and Accuracy: I used the past simple accurately and a mix of simple and complex sentences (… before declining …, compared with …), with few errors.",
          "Length: I wrote at least 150 words in about 20 minutes.",
        ],
        modelAnswer:
          "The line graph compares the number of printed books, e-books and audiobooks sold in Norvania at three-year intervals between 2010 and 2025, measured in millions of copies.\n\nOverall, printed books remained by far the best-selling format throughout the period, despite a steady decline. Both digital formats grew, but while e-book sales peaked in 2019 and then dipped, audiobook sales rose continuously and had almost caught up with e-books by the end of the period.\n\nIn 2010, 62 million printed books were sold, compared with just 6 million e-books and 1 million audiobooks. Over the following years, sales of printed books fell gradually, to 47 million in 2019, before levelling off at around 45 million and ending the period at 44 million.\n\nE-book sales, meanwhile, quadrupled from 6 million to a peak of 24 million in 2019, before declining slightly to 21 million in 2025. Audiobooks grew slowly at first, reaching only 4 million in 2016, but their sales then rose rapidly, doubling in the next three years and reaching 20 million in 2025, just 1 million below e-books.",
      },
    },
    {
      type: "text",
      title: "Task 2 (about 40 minutes)",
      body: "*Some people believe that children should be given plenty of free time to play, while others think they should spend most of their free time on organised activities such as sports clubs and music lessons.*\n\n*Discuss both these views and give your own opinion.*\n\n*Give reasons for your answer and include any relevant examples from your own knowledge or experience.*\n\n*Write at least 250 words.*",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Task 2 planning check",
        instructions: "These questions are part of your 40 minutes for Task 2.",
        questions: [
          {
            prompt: "What must the essay do?",
            options: [
              "Explain only the view you agree with.",
              "Explain both views and give your own opinion.",
              "List the advantages and disadvantages of sports clubs.",
              "Describe your own childhood in detail.",
            ],
            answer: 1,
            explanation: "*Discuss both these views and give your own opinion* has three parts: view 1, view 2 and your position.",
          },
          {
            prompt: "Which thesis statement is best?",
            options: [
              "There are many different opinions about children's free time.",
              "In this essay I will discuss both views.",
              "Both have value, but I believe free play deserves a larger share of a child's week than it often receives.",
              "Children should never do organised activities.",
            ],
            answer: 2,
            explanation: "It recognises both views and gives a clear, balanced position. A and B give no opinion, and D is an extreme position that ignores the first view.",
          },
          {
            prompt: "Which plan is most effective?",
            options: [
              "Introduction; body 1: arguments for organised activities; body 2: arguments for free play and my view; conclusion.",
              "Introduction; one long body paragraph about free play; conclusion about sports clubs.",
              "Introduction; three paragraphs of examples from my childhood; no conclusion.",
              "Introduction; body 1: advantages of music lessons; body 2: disadvantages of music lessons; conclusion.",
            ],
            answer: 0,
            explanation: "It gives each view its own paragraph and ends with a clear position. The other plans miss a view, the conclusion, or the question.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "write",
        title: "Writing Task 2: children's free time",
        instructions: "Write your essay now. Leave the last 5 minutes to check your work.",
        prompt:
          "Some people believe that children should be given plenty of free time to play, while others think they should spend most of their free time on organised activities such as sports clubs and music lessons.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
        minWords: 250,
        minutes: 40,
        rubric: [
          "Task Response: I discussed both views fairly, gave my own opinion, and my position is clear throughout (introduction, body and conclusion agree).",
          "Task Response: my main ideas are extended and supported with explanations and relevant examples, not just listed.",
          "Coherence and Cohesion: each paragraph has one clear central idea, and I signalled the move between views (Those who favour…, On the other hand, …).",
          "Coherence and Cohesion: I used a range of linking words and referencing (this, these skills, such activities) accurately, without overusing them.",
          "Lexical Resource: I used topic vocabulary and collocations precisely (unstructured time, develop skills, self-discipline, settle disagreements), with few errors in word choice or spelling.",
          "Grammatical Range and Accuracy: I used a mix of complex structures (relative clauses, conditionals, not only… but also) and most of my sentences are error-free.",
          "Length: I wrote at least 250 words in about 40 minutes.",
        ],
        modelAnswer:
          "Parents today have more choice than ever about how their children spend their time outside school. While some believe that children need plenty of unstructured time to play, others feel that this time is better spent on organised activities such as sports training and music lessons. In my view, both have value, but free play deserves a larger share of a child's week than it often receives.\n\nThose who favour organised activities argue that they help children develop specific skills and good habits. A child who attends football training twice a week, for example, not only becomes fitter but also learns to cooperate with teammates and to follow a coach's instructions. Similarly, regular music lessons teach patience and self-discipline, because progress only comes through steady practice. Supporters also point out that such activities keep children safely supervised while their parents are at work.\n\nOn the other hand, there are strong arguments for giving children time to play freely. When children invent their own games, they have to make decisions, solve problems and settle disagreements without an adult to guide them. These are exactly the qualities of independence and creativity that a timetable full of lessons can fail to develop. Moreover, children whose every afternoon is planned may become tired and stressed, and some lose interest in activities they once enjoyed because they feel under pressure to perform.\n\nIn conclusion, organised activities can teach valuable skills and discipline, but children also need unstructured time in order to become creative and independent. I therefore believe that parents should limit organised activities to two or three a week and leave the remaining afternoons free for play.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Task 2 counts twice as much as Task 1, so never let Task 1 take more than about 20 minutes. An unfinished Task 2 costs far more than a slightly shorter Task 1.",
    },
    {
      exam: "ielts",
      body: "In Task 1, include an overview of the main trends and do not give opinions or reasons that are not shown. Check each figure against the graph before you finish: an inaccurate figure weakens Task Achievement.",
    },
    {
      exam: "ielts",
      body: "Under-length answers lose marks. Practise until you know roughly how many lines of your handwriting (or how much screen space) 150 and 250 words take, so you do not need to count every word in the exam.",
    },
  ],
  vocabulary: [
    { word: "format", meaning: "the form in which something is produced, such as print or digital", example: "Audiobooks are the fastest-growing format.", topic: "technology" },
    { word: "peak", meaning: "to reach the highest point before falling", example: "E-book sales peaked in 2019.", topic: "academic" },
    { word: "level off", meaning: "to stop rising or falling and stay at about the same level", example: "Sales levelled off at around 45 million.", topic: "academic" },
    { word: "quadruple", meaning: "to become four times as large", example: "Sales quadrupled in nine years.", topic: "academic" },
    { word: "catch up with", meaning: "to reach the same level as someone or something", example: "Audiobooks had almost caught up with e-books by 2025.", topic: "academic" },
    { word: "unstructured", meaning: "not organised or planned by someone else", example: "Children need some unstructured time every day.", topic: "education" },
    { word: "supervised", meaning: "watched by an adult or person in charge", example: "The children are supervised at the sports club.", topic: "society" },
    { word: "self-discipline", meaning: "the ability to make yourself do things you should do", example: "Learning an instrument requires self-discipline.", topic: "education" },
    { word: "settle a disagreement", meaning: "to end an argument by reaching an agreement", example: "Children learn to settle disagreements through play.", topic: "society" },
    { word: "under pressure", meaning: "feeling that you must do something or do it well", example: "Some children feel under pressure to win every match.", topic: "society" },
  ],
  keyPoints: [
    "Spend about 20 minutes on Task 1 and 40 on Task 2, which counts twice as much.",
    "Task 1: introduction, overview of main trends, then grouped details with accurate figures; no reasons or opinions.",
    "Task 2 discussion essays need both views explained fairly and your own clear position.",
    "Keep your thesis, body paragraphs and conclusion consistent.",
    "Use the rubric criteria (Task Achievement/Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy) to decide what to review.",
  ],
};

export default lesson;
