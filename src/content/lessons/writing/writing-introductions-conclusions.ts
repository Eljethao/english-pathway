import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-introductions-conclusions",
  title: "Introductions and conclusions",
  summary:
    "Write short, effective essay introductions and conclusions: paraphrase the question without copying it, give a thesis that matches the question type, and finish with a conclusion that restates your position without adding new ideas.",
  skill: "writing",
  level: "B2",
  order: 10,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Writing Task 2" },
    { exam: "toeic", task: "Writing – Write an opinion essay" },
  ],
  objectives: [
    "Paraphrase an essay question using synonyms, different word forms and a different sentence structure",
    "Write a thesis statement that answers the specific question type: opinion, discussion, advantages and disadvantages, problem and solution, or two-part",
    "Avoid memorised openings, copied wording and vague theses",
    "Write a conclusion that restates your position and main reasons in new words, with no new arguments",
  ],
  warmUp: [
    "When you read an article, how do you decide in the first few lines whether it is worth reading?",
    "Do you usually write your introduction first or last? Why?",
  ],
  learn: [
    {
      type: "text",
      title: "What an introduction must do",
      body: "An essay introduction has two jobs: tell the reader **what the essay is about** and **what your answer is**. In an exam, two or three sentences (about 40–60 words) are enough.\n\n1. **Paraphrase the topic**: one sentence that introduces the issue in your own words.\n2. **Thesis statement**: one sentence that answers the question directly. This is the most important sentence in the essay.\n3. **Outline (optional)**: a short sentence that previews your main points. Leave it out if your thesis already names them.\n\nA long introduction wastes time you need for your body paragraphs. If you find yourself writing a fourth or fifth sentence, stop and move on.",
    },
    {
      type: "table",
      title: "Three ways to paraphrase the question",
      headers: ["Technique", "Question wording", "Paraphrase"],
      rows: [
        ["Synonyms", "Many people **believe** that **children** should…", "It is often **argued** that **young people** should…"],
        ["Different word form", "Governments should **invest** in public transport.", "Public transport deserves greater **investment** from governments."],
        ["Different structure", "**More people are working from home** than ever before.", "**The number of people working from home** has never been higher."],
      ],
    },
    {
      type: "text",
      title: "Paraphrase carefully",
      body: "- Keep the **meaning** exactly the same. *Some people think* is not the same as *Everyone agrees*.\n- Do not try to change **every** word. Key terms such as *university*, *tourism* or *public transport* can stay, especially when there is no exact synonym.\n- Do not copy whole phrases from the question. Copied wording shows the examiner nothing about your own vocabulary.",
    },
    {
      type: "table",
      title: "Match the thesis to the question type",
      headers: ["Question type", "What the thesis must do", "Example thesis"],
      rows: [
        ["To what extent do you agree or disagree?", "State how far you agree, with a hint of why", "I strongly agree, because… / While I accept that…, I largely disagree."],
        ["Discuss both views and give your opinion", "Show that both views exist, then give your view", "Both views have merit, but I believe…"],
        ["Advantages and disadvantages / Do the advantages outweigh…?", "Name the main sides, and say which is greater if asked", "Although… brings…, I believe these benefits are outweighed by…"],
        ["Causes and solutions / problems and solutions", "Give the main causes or problems and the main solutions", "This is mainly caused by…, and it could be tackled by…"],
        ["Two questions", "Answer both questions briefly", "This is largely due to…, and I believe it is a positive development."],
      ],
    },
    {
      type: "text",
      title: "What a conclusion must do",
      body: "A conclusion closes the argument. In two or three sentences:\n\n1. **Signal** the end: *In conclusion*, *To sum up*, *Overall*.\n2. **Restate your position** in new words. It must match your thesis exactly.\n3. **Summarise your main reasons** briefly.\n4. **Optional final thought**: a recommendation or prediction that follows naturally from your argument.\n\nDo **not** add a new argument or a new example, change your opinion, or copy your introduction word for word.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: introductions and conclusions",
        questions: [
          {
            prompt: "Question: “Many people believe that children should start learning a foreign language at primary school.” Which is the best paraphrase?",
            options: [
              "Many people believe that children should start learning a foreign language at primary school.",
              "It is often argued that language learning should begin in the first years of schooling.",
              "Languages are very important in today's modern world.",
              "Some people think children should not learn languages at all.",
            ],
            answer: 1,
            explanation: "It keeps the meaning but changes the words (*often argued*, *language learning*, *first years of schooling*). A copies the question, C is too general, and D changes the meaning.",
          },
          {
            prompt: "Question: “Online shopping will soon replace shops on the high street. To what extent do you agree or disagree?” Which thesis is best?",
            options: [
              "Online shopping has advantages and disadvantages.",
              "In this essay, I will discuss online shopping.",
              "Although online sales will keep growing, I disagree that physical shops will disappear, because many people value seeing products and getting advice in person.",
              "Shopping is something that everyone does.",
            ],
            answer: 2,
            explanation: "It states how far the writer agrees and why. The others give no position.",
          },
          {
            prompt: "An essay argues that national museums should be free to enter, because free entry attracts more families and students. Which is the best final sentence for its conclusion?",
            options: [
              "Free museums would also bring more tourists, which would help local hotels and restaurants.",
              "If governments fund museums properly, far more people will be able to enjoy the collections that belong to all of them.",
              "However, there are also good reasons why museums should charge an entry fee.",
              "Nowadays, museums are very important in today's modern world.",
            ],
            answer: 1,
            explanation: "B is a final thought that follows naturally from the argument (free entry → more visitors). A adds a new argument (tourism) that the essay has not supported, C changes the writer's position, and D is a vague, memorised sentence.",
          },
          {
            prompt: "An essay's thesis says: “I largely disagree that university should be free for everyone.” Which conclusion matches it?",
            options: [
              "In conclusion, university should clearly be free for all students.",
              "In conclusion, free tuition for everyone would be too costly, although support for students on low incomes is essential.",
              "In conclusion, there are many opinions about this topic.",
              "In conclusion, I largely disagree that university should be free for everyone.",
            ],
            answer: 1,
            explanation: "It restates the same position in new words and summarises the reasoning. A contradicts the thesis, C has no position, and D only copies the thesis.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*Some people believe that university education should be free for all students. To what extent do you agree or disagree?*",
    },
    {
      type: "passage",
      title: "A weak introduction",
      paragraphs: [
        "Nowadays, education is a very important issue in today's modern world. Some people believe that university education should be free for all students. In this essay, I will discuss this controversial topic.",
      ],
    },
    {
      type: "passage",
      title: "A strong introduction and conclusion",
      paragraphs: [
        "Introduction: In many countries, students or their families pay high fees for a university degree, and it has been suggested that higher education should instead be funded entirely by the state. While I accept that free tuition would make university more accessible, I largely disagree with this view, because it would place a heavy burden on taxpayers and could reduce the quality of teaching.",
        "Conclusion: In conclusion, although free university education would remove an important barrier for students from poorer families, making it free for everyone would be too costly and could lower standards. A fairer approach would be to keep moderate fees while offering generous grants to the students who need them most.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **The weak introduction** starts with a memorised sentence that could begin any essay (*Nowadays… in today's modern world*), copies the question word for word, and gives no position.\n- **The strong introduction paraphrases**: *free for all students* → *funded entirely by the state*; *university education* → *higher education*, *a university degree*.\n- **The thesis is clear and specific**: *I largely disagree*, with two reasons (*burden on taxpayers*, *quality of teaching*) that become the two body paragraphs. The concession (*While I accept that…*) shows a balanced view.\n- **The conclusion matches the thesis**: the same position, restated in new words (*too costly*, *lower standards*).\n- **The final thought** (*moderate fees… generous grants*) follows naturally from the argument. It is a recommendation, not a new argument that needs support.\n\nLength: introduction about 60 words, conclusion about 50 words.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Match the question and the thesis",
        instructions: "Match each essay question with the most suitable thesis statement. There is one extra thesis.",
        left: [
          "Some people think that schools should teach practical skills such as cooking and managing money. To what extent do you agree or disagree?",
          "Some people think the best way to learn is in a classroom, while others believe online courses are more effective. Discuss both views and give your opinion.",
          "More and more people are working from home. What are the advantages and disadvantages of this?",
          "Many cities suffer from serious traffic congestion. What are the causes of this problem, and what solutions can you suggest?",
          "In many countries, people are getting married later in life than in the past. Why is this happening? Is it a positive or negative development?",
        ],
        right: [
          "This trend mainly reflects longer periods of education and higher housing costs, and I believe it is a largely positive development.",
          "In this essay, I will talk about this topic and give my ideas about it.",
          "I strongly agree that such skills deserve a place in the curriculum, because they prepare young people for independent adult life.",
          "Congestion is largely caused by rising car ownership and inadequate public transport, and it could be reduced by investing in reliable bus and rail networks and charging drivers to enter city centres.",
          "Both approaches have clear strengths, but in my view classroom learning remains more effective for most students because of the direct contact with teachers.",
          "Working from home saves commuting time and offers flexibility, but it can also lead to isolation and make it harder to separate work from private life.",
        ],
        answer: [2, 4, 5, 3, 0],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Paraphrase the question",
        instructions: "Complete each paraphrase with ONE word so that it has the same meaning as the original sentence.",
        text: "1. Governments should spend more money on public transport.\n→ Public transport should receive more {{0}} from governments.\n\n2. Many people believe that technology makes life easier.\n→ It is widely {{1}} that technology makes life easier.\n\n3. The number of people who live alone is increasing.\n→ There has been a significant {{2}} in the number of people living alone.\n\n4. It is important to protect wildlife.\n→ The {{3}} of wildlife is important.\n\n5. Fewer young people are reading newspapers.\n→ Newspaper {{4}} among young people is falling.\n\n6. Some people think that children should be allowed to choose their own school subjects.\n→ Some argue that children should have the {{5}} to choose their own school subjects.",
        answers: [
          ["funding", "investment", "money", "finance"],
          ["believed", "thought", "held", "accepted", "felt", "considered", "argued", "claimed", "said", "assumed"],
          ["increase", "rise", "growth"],
          ["protection", "conservation", "preservation"],
          ["readership", "reading", "consumption"],
          ["freedom", "right", "opportunity", "chance", "option", "power", "liberty"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "order",
        mode: "lines",
        title: "Put the introduction in order",
        instructions: "Essay question: “Some people believe that young people should spend a year working or travelling before they start university. To what extent do you agree or disagree?” Put the sentences of the introduction in order.",
        items: [
          "In many countries, most students go straight from secondary school to university at the age of eighteen.",
          "However, it has been suggested that they should first spend a year working or travelling.",
          "I largely agree with this proposal, as a year away from study can help young people mature and choose their degree course more carefully.",
          "This essay will explain these two benefits before considering the concern that some students may never return to education.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: introduction and conclusion",
        instructions: "Spend 2 minutes deciding your position and two main reasons. Then write the introduction and the conclusion only (about 10 minutes). Leave a line between them.",
        prompt:
          "In many countries, people now buy most of their food in large supermarkets rather than in small local shops and markets.\n\nDo the advantages of this development outweigh the disadvantages?\n\nWrite an introduction (2–3 sentences) and a conclusion (2–3 sentences) for this essay. Write at least 80 words in total.",
        minWords: 80,
        minutes: 12,
        rubric: [
          "Introduction: my first sentence introduces the topic in my own words, without copying phrases from the question.",
          "Introduction: my thesis answers the question that was asked (whether the advantages outweigh the disadvantages), and my position is clear.",
          "Introduction: I did not use a memorised opening such as Nowadays… in today's modern world, and the introduction is no longer than about 60 words.",
          "Conclusion: I signalled the end and restated the same position in new words, with a brief summary of my main reasons.",
          "Conclusion: I did not add a new argument or example; any final thought follows naturally from my position.",
          "Language: I used accurate paraphrasing (synonyms, word forms, a change of structure) and linking for contrast (Although…, While…, On balance, …).",
          "Length: I wrote at least 80 words in total.",
        ],
        modelAnswer:
          "Over the past few decades, large supermarkets have become the main place where families in many countries buy their food, while small local shops and markets have declined. Although this change has brought clear benefits in price and convenience, I believe these are outweighed by the damage it has done to local businesses and community life.\n\nIn conclusion, supermarkets have made food shopping cheaper and quicker, but this has come at the cost of independent shops and the social life of local neighbourhoods. On balance, I believe the disadvantages are greater, so local councils should do more to support markets and small food shops.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In Task 2, a clear position throughout the essay is part of the Task Response criterion. Your thesis states that position, every body paragraph supports it, and your conclusion repeats it. Check that all three say the same thing before you finish.",
    },
    {
      exam: "ielts",
      body: "Always write a conclusion, even if you only have two minutes left. Two sentences that restate your position and main reasons are enough, and an essay that simply stops can look unfinished.",
    },
    {
      exam: "toeic",
      body: "In the TOEIC **opinion essay** (at least 300 words recommended), use the same pattern: a short introduction that states your opinion, two or three body paragraphs, and a conclusion that restates it. Spend most of your 30 minutes on the body paragraphs, where your reasons and examples are.",
    },
  ],
  vocabulary: [
    { word: "paraphrase", meaning: "to express the same meaning using different words", example: "Paraphrase the question in your first sentence.", topic: "academic" },
    { word: "thesis statement", meaning: "the sentence that states the main point or position of an essay", example: "Your thesis statement should answer the question directly.", topic: "academic" },
    { word: "restate", meaning: "to say something again in a different way", example: "The conclusion restates the writer's position.", topic: "academic" },
    { word: "on balance", meaning: "after considering all the facts and arguments", example: "On balance, the disadvantages are greater.", topic: "academic" },
    { word: "outweigh", meaning: "to be greater or more important than something else", example: "The benefits clearly outweigh the costs.", topic: "academic" },
    { word: "tuition", meaning: "the money paid for teaching at a college or university", example: "Tuition fees have risen sharply in recent years.", topic: "education" },
    { word: "accessible", meaning: "easy for people to reach, use or get", example: "Free courses make education more accessible.", topic: "education" },
    { word: "burden", meaning: "a heavy duty, cost or responsibility", example: "Higher taxes would be a burden on working families.", topic: "society" },
    { word: "convenience", meaning: "the quality of being easy, quick or useful", example: "Many shoppers choose supermarkets for their convenience.", topic: "everyday" },
    { word: "decline", meaning: "to become smaller, fewer or weaker", example: "The number of local food shops has declined.", topic: "business" },
    { word: "gap year", meaning: "a year that a young person spends working or travelling before starting university", example: "She spent her gap year working in a hospital.", topic: "education" },
  ],
  keyPoints: [
    "An introduction needs two things: the topic in your own words and a thesis that answers the question. Two or three sentences are enough.",
    "Paraphrase with synonyms, word forms and changes of structure, but keep the meaning exactly the same.",
    "Match the thesis to the question type: agree/disagree, both views, advantages/disadvantages, causes/solutions or two questions.",
    "A conclusion restates the same position and main reasons in new words; it never adds a new argument.",
    "Avoid memorised openings and copied wording: they show the examiner nothing about your own English.",
  ],
};

export default lesson;
