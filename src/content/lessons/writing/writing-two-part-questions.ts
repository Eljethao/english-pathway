import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-two-part-questions",
  title: "Two-part question essays",
  summary:
    "Answer IELTS Writing Task 2 prompts that ask two questions at once: work out what each question asks for, write a thesis that answers both, and give each question its own developed body paragraph.",
  skill: "writing",
  level: "B2",
  order: 8,
  minutes: 55,
  exams: [{ exam: "ielts", task: "Writing Task 2" }],
  objectives: [
    "Recognise two-part questions and what each part asks for: causes, effects, solutions, an evaluation or a prediction",
    "Write an introduction whose thesis answers both questions briefly",
    "Organise the essay so that each question gets its own balanced, developed body paragraph",
    "Signpost clearly which question each paragraph answers",
  ],
  warmUp: [
    "Why do you think more people buy second-hand clothes today than in the past? Is this a good thing?",
  ],
  learn: [
    {
      type: "text",
      title: "What is a two-part question?",
      body: "Some Task 2 prompts describe a situation and then ask **two direct questions**, for example:\n\n- *Why is this happening? Is it a positive or negative development?*\n- *What are the causes of this? What effects does it have?*\n- *Why do people do this? How can they be encouraged to …?*\n\nThe rule is simple: **answer both questions, and give each one similar attention.** An essay that spends three paragraphs on the first question and one sentence on the second has not fully answered the task, and its Task Response score will suffer, however good the language is.",
    },
    {
      type: "table",
      title: "Question words and what they ask for",
      headers: ["Question", "What you write", "Useful language"],
      rows: [
        ["Why is this happening? / What are the reasons?", "Causes: two reasons, each explained", "One reason for this is… / This is largely due to… / … has led to…"],
        ["What effects / problems does this have?", "Consequences", "As a result, … / This means that… / One effect of this is…"],
        ["Is this a positive or negative development?", "Your evaluation, with reasons", "I believe this is a largely positive trend, because… / This is a worrying development, as…"],
        ["What can be done? / How can … be encouraged?", "Solutions or measures, and how they would work", "One way to tackle this would be to… / Governments could…"],
        ["Do you think this will continue?", "A prediction, with reasons", "This trend is likely to continue, because… / It seems unlikely that…"],
      ],
    },
    {
      type: "text",
      title: "A four-paragraph plan",
      body: "1. **Introduction**: paraphrase the situation, then give a short answer to **both** questions in your thesis.\n2. **Body 1**: answer question 1 (for example, two reasons, each explained).\n3. **Body 2**: answer question 2 (for example, your evaluation, with reasons and an example).\n4. **Conclusion**: summarise both answers in new words.\n\nKeep the questions in the same order as the prompt. This makes your essay easy to follow, and it helps you check that nothing is missing.",
    },
    {
      type: "example",
      title: "Thesis statements that answer both questions",
      items: [
        "*Why are more people buying second-hand clothes? Is this positive or negative?* → This change is **mainly due to** rising prices and greater environmental awareness, **and I believe it is a positive development** for both shoppers and the planet.",
        "*Why do some city dwellers choose not to own a car? What effects does this have?* → Many give up their cars **because of** high costs and good public transport, **and this has helped to** reduce congestion, **although it also puts pressure on** buses and trains.",
        "Weak: *There are many reasons for this trend, and it has both good and bad sides.* → too vague: it answers neither question.",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Underline the question words before you plan (*Why…? Is this…? What…? How…?*). A common mistake is to answer a question that was not asked, for example writing about advantages and disadvantages when the prompt asks *Why is this happening?*",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Quick check: what does each question ask for?",
        instructions: "Match each question with what you should write. There is one extra option.",
        left: [
          "Why are fewer people reading printed newspapers?",
          "What problems might this cause for local communities?",
          "Do you think this is a positive or negative development?",
          "What can governments do to encourage people to use public transport?",
          "Do you think this trend will continue in the future?",
        ],
        right: [
          "A prediction, with reasons",
          "Causes",
          "Solutions or measures",
          "Your evaluation, with reasons",
          "Advantages for one group and disadvantages for another",
          "Effects or consequences",
        ],
        answer: [1, 5, 3, 2, 0],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*These days, many people buy second-hand clothes rather than new ones. Why is this happening? Is it a positive or negative development?*\n\n*Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.*",
    },
    {
      type: "passage",
      title: "Model essay (Writing Task 2)",
      paragraphs: [
        "Not long ago, most people wore second-hand clothes only if they had to. Today, however, buying used clothing has become popular with shoppers of all ages and incomes. In my view, this change is mainly the result of financial pressure and growing concern for the environment, and it is a largely positive development.",
        "There are two main reasons for this trend. The first is cost. As the price of rent, food and energy has risen in many countries, families have looked for ways to save money, and a good-quality coat from a charity shop may cost a fraction of its original price. The second reason is a change in attitudes. Many young people are aware that the fashion industry produces large amounts of waste, so they see buying used items as a simple way to reduce their own impact. Websites and apps where people can sell clothes directly to each other have also made second-hand shopping far easier than it was in the past.",
        "I believe this is a positive trend for both individuals and society. For individuals, it means that people on tight budgets can still dress well, and it encourages them to value their clothes rather than throw them away after a few months. For society, every garment that is reused is one fewer that needs to be manufactured, which saves water, energy and raw materials. Admittedly, some clothing shops and manufacturers may lose sales. However, the second-hand market also creates businesses of its own, such as repair services and resale websites, so the overall effect on the economy is not necessarily negative.",
        "In conclusion, people are turning to second-hand clothing mainly to save money and to reduce waste. Since this shift helps households and protects the environment without causing serious harm to the economy, I see it as a welcome change.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **The thesis answers both questions**: *mainly the result of financial pressure and growing concern for the environment* (Why?) and *a largely positive development* (Positive or negative?).\n- **One body paragraph per question, in the same order as the prompt.** The first sentence of each paragraph signals which question it answers: *There are two main reasons for this trend* / *I believe this is a positive trend*.\n- **Balance**: the two body paragraphs are similar in length, so both questions are fully answered.\n- **Development**: each reason is explained (*As the price of rent… has risen…*), and the evaluation is supported for two groups (individuals and society).\n- **A short concession**: *Admittedly… However…* shows that the writer has considered the other side without changing position.\n- **No agree/disagree**: the prompt does not ask whether the writer agrees, so the essay does not say so. It answers the two questions asked.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Plan and check",
        instructions:
          "Questions 1–3 are about this prompt: “In many countries, people are spending more time at work than in the past. Why is this? What effects does it have on families?”",
        questions: [
          {
            prompt: "Which thesis answers both questions?",
            options: [
              "Working hours have increased in many countries in recent years.",
              "There are many advantages and disadvantages of working long hours.",
              "People are working longer mainly because of job insecurity and rising living costs, and this often leaves parents with too little time for their children.",
              "I strongly agree that people should work fewer hours.",
            ],
            answer: 2,
            explanation: "It gives the causes (job insecurity, living costs) and an effect on families. The other options answer neither question or a different question.",
          },
          {
            prompt: "Which plan is best?",
            options: [
              "Body 1: reasons for longer hours (job insecurity, living costs). Body 2: effects on families (less time together, stress), with an example.",
              "Body 1: three reasons for longer hours. Body 2: three more reasons. Conclusion: the effects on families.",
              "Body 1: the advantages of working long hours. Body 2: the disadvantages of working long hours.",
              "Body 1: the effects on families. Body 2: laws that governments could introduce.",
            ],
            answer: 0,
            explanation: "It answers both questions, in order, with one paragraph each. The second plan leaves the effects to the conclusion, the third answers a different question, and the fourth misses the causes and adds solutions that were not asked for.",
          },
          {
            prompt: "Which sentence would best begin the second body paragraph?",
            options: [
              "Another reason why people work longer is that they want to be promoted.",
              "In conclusion, working long hours is a problem.",
              "Governments should limit working hours by law.",
              "Turning to the effects on family life, the most serious consequence is that parents and children spend less time together.",
            ],
            answer: 3,
            explanation: "*Turning to the effects…* signals the move to question 2. The first option still answers question 1, and the third offers a solution, which the prompt does not ask for.",
          },
          {
            prompt: "Which of these is a common mistake in two-part essays?",
            options: [
              "Answering the questions in the same order as the prompt.",
              "Spending most of the essay on one question and only one or two sentences on the other.",
              "Giving each question its own body paragraph.",
              "Answering both questions briefly in the introduction.",
            ],
            answer: 1,
            explanation: "Both parts must be addressed. A one-sentence answer to one question leaves the task only partly answered.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Signpost your answers",
        instructions:
          "This outline answers the prompt “Why do many young people move from the countryside to cities? What problems does this cause for rural areas?” Complete it with words from the box. There are two extra words.",
        text: "{{0}} are several reasons why young people leave rural areas. The {{1}} important is work, as most well-paid jobs are found in cities. {{2}}, universities and colleges are mostly located in large towns.\n\n{{3}} to the problems this causes, the most serious is that villages are left with an ageing population. {{4}} a result, local schools and shops may close because there are not enough customers. {{5}} problem is that farms find it hard to recruit workers.\n\n{{6}} conclusion, young people move to cities mainly for jobs and education, and this leaves many rural communities struggling.",
        answers: [
          ["There"],
          ["most"],
          ["In addition", "Furthermore", "Moreover", "Also", "Additionally", "What is more", "Besides"],
          ["Turning", "Moving", "Coming"],
          ["As"],
          ["Another", "A further", "A second", "One other", "A related"],
          ["In"],
        ],
        wordBank: ["There", "most", "In addition", "Turning", "As", "Another", "In", "However", "Because"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "order",
        mode: "lines",
        title: "Build the skeleton of an essay",
        instructions:
          "These five sentences come from an essay on the prompt “In many countries, more people now live alone than in the past. Why is this? What effects does this have on society?” Put them in the order they would appear in the essay.",
        items: [
          "In many countries, the number of people who live on their own has risen considerably in recent decades.",
          "This trend is mainly the result of greater financial independence and later marriage, and it has changed both the housing market and the way people socialise.",
          "The main reason why more people live alone is simply that they can now afford to.",
          "Turning to its effects on society, the most obvious is a growing demand for small homes.",
          "In conclusion, people increasingly live alone because they are financially independent and marry later, and this has reshaped both housing and social life.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: a two-part question",
        instructions: "Plan for 5 minutes: write one line for your thesis and two ideas for each question. Then write for 30 minutes and check for 5.",
        prompt:
          "In some countries, fewer young people are learning to drive than in the past.\n\nWhat are the reasons for this? What effects might this have in the future?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
        minWords: 250,
        minutes: 40,
        rubric: [
          "Task response: my introduction gives a short answer to both questions.",
          "Task response: I answered both questions fully, with a body paragraph for each, and the two paragraphs are of similar length.",
          "Task response: my reasons and effects are explained and supported with examples, not just listed.",
          "Coherence and cohesion: the first sentence of each body paragraph shows which question it answers (The first reason… / If this trend continues…).",
          "Coherence and cohesion: I kept the questions in the same order as the prompt and used linking words accurately.",
          "Lexical resource: I used cause and effect language (due to, as a result, lead to, this means that) and topic vocabulary accurately.",
          "Grammatical range and accuracy: I used modal verbs (may, could, might) and conditionals (If this trend continues, …) to talk about possible future effects.",
          "Length: I wrote at least 250 words in about 40 minutes.",
        ],
        modelAnswer:
          "In several countries, a smaller proportion of young adults now learn to drive than in previous generations. I believe this is mainly because driving has become expensive and less necessary, and in the future the trend could lead to cleaner, less crowded cities, although it may cause difficulties for young people in rural areas and for some businesses.\n\nThe first reason is cost. Driving lessons, tests, insurance and fuel are all expensive, and insurance is usually highest for young, inexperienced drivers. For a student or a young worker on a low salary, these costs can be impossible to justify. The second reason is that a car is less necessary than it used to be. In many cities, public transport, cycle lanes and ride-hailing apps make it easy to get around without driving, and much shopping and socialising now happens online. A young person living in a city centre may therefore see a car as a burden rather than a symbol of freedom.\n\nIf this trend continues, it may have several effects. On the positive side, fewer cars could mean less traffic and cleaner air, and city governments might use land that is now taken up by car parks for housing, parks or cycle paths. On the other hand, the change could create difficulties. Young people who live in the countryside, where buses are rare, may find it harder to reach jobs and colleges without a licence. In addition, car manufacturers and driving schools may lose customers, so they will need to adapt, for example by offering car-sharing services instead of selling vehicles.\n\nIn conclusion, many young people are choosing not to drive because of high costs and better alternatives in cities. In the future, this could lead to cleaner and less congested cities, but it may also disadvantage rural communities and force some businesses to change.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Before you write, check that your thesis contains an answer to each question. If you cannot write that sentence yet, you are not ready to start the body paragraphs.",
    },
    {
      exam: "ielts",
      body: "Keep the two body paragraphs roughly equal in length. If one question is easier for you, resist the temptation to write everything about it.",
    },
    {
      exam: "ielts",
      body: "A two-part question is not an agree/disagree essay, so do not begin by saying whether you agree. Give an opinion only where a question asks for one, for example *Is this a positive or negative development?*",
    },
  ],
  vocabulary: [
    { word: "second-hand", meaning: "already used or owned by someone else", example: "She bought a second-hand bike for half the price.", topic: "everyday" },
    { word: "garment", meaning: "a piece of clothing (formal)", example: "Every garment is checked before it is sold.", topic: "business" },
    { word: "attitude", meaning: "the way you think and feel about something", example: "Attitudes to recycling have changed a lot.", topic: "society" },
    { word: "job insecurity", meaning: "the worry that you might lose your job", example: "Job insecurity makes many people afraid to refuse extra hours.", topic: "work" },
    { word: "burden", meaning: "something difficult or expensive that you have to deal with", example: "For many students, owning a car is a financial burden.", topic: "society" },
    { word: "rural", meaning: "connected with the countryside", example: "Buses are rare in many rural areas.", topic: "society" },
    { word: "tight budget", meaning: "a small amount of money to spend", example: "Families on a tight budget often shop in charity shops.", topic: "everyday" },
    { word: "manufacture", meaning: "to make goods in large numbers in a factory", example: "The company manufactures clothing for several brands.", topic: "business" },
    { word: "shift", meaning: "a change in opinion, behaviour or situation", example: "There has been a shift towards online shopping.", topic: "society" },
    { word: "adapt", meaning: "to change in order to suit new conditions", example: "Driving schools will need to adapt to the new situation.", topic: "business" },
    { word: "consequence", meaning: "a result of an action or situation, often a bad one", example: "One consequence of long working hours is stress.", topic: "academic" },
    { word: "signpost", meaning: "to show the reader clearly what is coming next", example: "Signpost the move to the second question with a clear topic sentence.", topic: "academic" },
  ],
  keyPoints: [
    "Two-part prompts ask two direct questions: answer both, with similar attention.",
    "Identify what each question asks for: causes, effects, solutions, an evaluation or a prediction.",
    "Your thesis should give a short answer to each question.",
    "Use one body paragraph per question, in the same order as the prompt, and signpost each one clearly.",
    "Give an agree/disagree opinion only if a question asks for it.",
  ],
};

export default lesson;
