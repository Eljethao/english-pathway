import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-discussion-problem-solution-essays",
  title: "Discussion and problem–solution essays",
  summary:
    "Identify IELTS Task 2 question types and plan two of the most common: “discuss both views and give your opinion” and problem–solution essays with specific, well-matched solutions.",
  skill: "writing",
  level: "C1",
  order: 3,
  minutes: 55,
  exams: [{ exam: "ielts", task: "Writing Task 2" }],
  objectives: [
    "Identify opinion, discussion, problem–solution and cause–solution questions in IELTS Writing Task 2",
    "Plan a balanced discussion essay that presents both views fairly and gives a clear opinion",
    "Plan a problem–solution essay in which each solution clearly matches a problem",
    "Write a 250+ word essay with logical paragraphing in 40 minutes",
  ],
  warmUp: [
    "Think of a problem in your city, such as traffic, housing or noise. What causes it, and what could realistically fix it?",
    "When two friends disagree, how do you explain both sides fairly before giving your own view?",
  ],
  learn: [
    {
      type: "text",
      title: "Know your question type",
      body: "Task 2 questions fall into a few families, and each needs a different structure. Misreading the type is costly: under *Task Response*, an essay that addresses only part of the task cannot score highly, however good its language is. Underline the instruction words before you plan.",
    },
    {
      type: "table",
      title: "Common Task 2 question types",
      headers: ["Type", "Typical instruction", "What you must do"],
      rows: [
        ["Opinion", "To what extent do you agree or disagree?", "Take one clear position and keep it throughout"],
        ["Discussion", "Discuss both these views and give your own opinion.", "Explain both views fairly AND state your own view"],
        ["Problem–solution", "What problems does this cause? What solutions can you suggest?", "Explain the problems and propose specific solutions"],
        ["Cause–solution", "What are the causes of this? What measures could be taken?", "Explain the causes and propose measures that address them"],
        ["Two-part question", "Why is this happening? Is it a positive or negative development?", "Answer both questions fully"],
      ],
    },
    {
      type: "text",
      title: "Structure 1: discuss both views and give your opinion",
      body: "1. **Introduction**: paraphrase the two views, then state your own opinion.\n2. **Body 1**: the view you agree with *less*. Present it fairly, with reasons and an example. Use neutral language: *Those who favour… point out that…*\n3. **Body 2**: the other view, developed with reasons and an example. This is usually the view you support, so it can end with your evaluation.\n4. **Conclusion**: summarise both sides briefly and restate your opinion clearly.\n\nIf you partly agree with both sides, you can use a third body paragraph for your own position.\n\nUseful language: *Proponents of… argue that…*, *From this perspective…*, *Critics, on the other hand, contend that…*, *On balance, I side with…*, *There is some truth in both views, but…*",
    },
    {
      type: "text",
      title: "Structure 2: problems and solutions",
      body: "1. **Introduction**: paraphrase the situation and say that it causes several problems which can be addressed.\n2. **Body 1, problems**: two problems, each explained with its consequence. Consider different levels: individuals, society, the economy, the environment.\n3. **Body 2, solutions**: one solution for each problem. Say **who** should act, **what** they should do and **why** it would work.\n4. **Conclusion**: summarise the main problems and solutions.\n\nAt C1 level, solutions must be **specific and realistic**, and each should clearly connect to a problem you described. *The government should do something* is not a solution.",
    },
    {
      type: "example",
      title: "Vague vs specific solutions",
      items: [
        "Vague: The government should solve the traffic problem.",
        "Specific: **Introducing a congestion charge** for cars entering the city centre at peak times **would discourage** unnecessary journeys **and raise funds** for better bus services.",
        "Vague: People should be more careful about plastic.",
        "Specific: **Requiring shops to charge for** plastic bags **has sharply reduced** their use in many countries, at almost no cost to governments.",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "In a discussion essay, you can give your opinion in the introduction, the conclusion or both, but it must be clear. Many band 6 essays describe both views well and then forget to say what the writer thinks.",
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*Some people believe that companies should be required to let employees work from home whenever the job allows it. Others argue that working in an office is essential for productivity and team spirit. Discuss both views and give your own opinion.*",
    },
    {
      type: "passage",
      title: "Model discussion essay",
      paragraphs: [
        "Over the past few years, the question of where people should work has become a major topic of debate. While some argue that employers should be obliged to offer remote work wherever possible, others maintain that the office remains vital for productivity and collaboration. In my view, neither extreme is desirable, and a flexible hybrid arrangement serves both employees and companies best.",
        "Those who favour a legal right to work from home point to the clear benefits for employees' quality of life. Without a daily commute, which can take two hours in large cities, workers gain time for family, exercise and rest, and they also save considerably on transport costs. Supporters add that many routine tasks, such as writing reports or answering emails, can be done more efficiently at home, away from the interruptions of an open-plan office. From this perspective, forcing staff into the workplace every day is simply outdated.",
        "Critics, on the other hand, contend that something important is lost when teams rarely meet. Informal conversations in corridors often spark new ideas, and junior employees in particular learn a great deal by observing experienced colleagues. A trainee who only ever sees her manager on a video call, for example, is likely to develop more slowly than one who can ask quick questions across a desk. A legal obligation to allow remote work could also be difficult for small businesses to manage.",
        "On balance, I believe that both sides make valid points, and that the answer lies in combining the two approaches. Rather than a rigid legal requirement, companies should be encouraged to offer a hybrid model, in which staff complete focused individual work at home, as supporters of remote work suggest, and come together in the office for training, planning and teamwork, where face-to-face contact matters most.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **Introduction.** Both views are paraphrased (*required to let employees work from home* → *obliged to offer remote work*), and the writer's opinion is given immediately: a hybrid model.\n- **Body 1** presents the remote-work view fairly, with neutral reporting verbs (*point to*, *add*) and a concrete detail (*two hours*).\n- **Body 2** presents the office view with its own example (the trainee) and an extra point (small businesses).\n- **Conclusion.** *On balance* signals the writer's evaluation. The hybrid model takes the strongest point from each view (focused work at home, learning and teamwork in the office), so the opinion grows out of the two body paragraphs. It matches the introduction, and no new arguments appear.\n- **Balance.** Body paragraphs are similar in length, which shows that both views were taken seriously.\n\nLength: about 300 words.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Identify the question type",
        instructions: "Read each prompt and choose the question type.",
        questions: [
          {
            prompt: "“In many countries, fewer young people are choosing to train as teachers. Why is this happening, and what can be done to attract more people to the profession?”",
            options: ["Opinion (agree or disagree)", "Discussion (both views and your opinion)", "Problem–solution", "Cause–solution"],
            answer: 3,
            explanation: "*Why is this happening?* asks for causes, and *what can be done?* asks for solutions.",
          },
          {
            prompt: "“Some people think children should start formal schooling at the age of four. Others believe they should begin at seven. Discuss both views and give your own opinion.”",
            options: ["Opinion (agree or disagree)", "Discussion (both views and your opinion)", "Problem–solution", "Cause–solution"],
            answer: 1,
            explanation: "Two opposing views are given, followed by *Discuss both views and give your own opinion*.",
          },
          {
            prompt: "“Many cities suffer from a shortage of affordable housing. What problems does this cause, and what solutions can you suggest?”",
            options: ["Opinion (agree or disagree)", "Discussion (both views and your opinion)", "Problem–solution", "Cause–solution"],
            answer: 2,
            explanation: "*What problems does this cause?* asks for effects, not causes, and *what solutions can you suggest?* asks for solutions.",
          },
          {
            prompt: "“Online shopping is gradually replacing traditional high-street shops. To what extent do you agree that this is a positive development?”",
            options: ["Opinion (agree or disagree)", "Discussion (both views and your opinion)", "Problem–solution", "Cause–solution"],
            answer: 0,
            explanation: "*To what extent do you agree…?* asks for one clear position.",
          },
          {
            prompt: "In a “discuss both views and give your own opinion” essay, what most often lowers the Task Response score?",
            options: [
              "Using too many examples",
              "Explaining both views but not giving a clear personal opinion",
              "Writing four paragraphs",
              "Using the passive voice",
            ],
            answer: 1,
            explanation: "The task has three parts: view A, view B and your opinion. Missing the opinion means the task is only partly answered.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Match problems and solutions",
        instructions: "Match each problem to the most suitable, specific solution. One solution is not used.",
        left: [
          "Young people cannot afford to rent in the city centre.",
          "Commuters lose hours in traffic jams every day.",
          "Many older residents feel isolated and lonely.",
          "Local rivers are polluted by factory waste.",
          "School leavers lack the practical skills employers want.",
        ],
        right: [
          "Expand apprenticeships that combine paid work with part-time study",
          "Charge drivers a fee to enter the centre at peak times and invest the money in buses",
          "Build more car parks in the city centre",
          "Require new housing developments to include a fixed share of low-cost homes",
          "Fine companies heavily for illegal discharges and inspect sites regularly",
          "Fund community centres that run daily social activities for older people",
        ],
        answer: [3, 1, 5, 4, 0],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "order",
        mode: "lines",
        title: "Order a solution paragraph",
        instructions: "Put the sentences in order to make a well-developed solution paragraph: solution, current problem, how it works, real example, link.",
        items: [
          "One effective way to reduce food waste would be to change how supermarkets deal with unsold products.",
          "At present, many large stores throw away edible food every day simply because it is close to its sell-by date.",
          "If retailers were legally required to donate such food to charities, much of it could reach families who struggle to afford meals.",
          "France passed a law along these lines in 2016, and food charities there reported receiving more donations from supermarkets in the years that followed.",
          "A similar measure elsewhere could therefore tackle both waste and food poverty at the same time.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "write",
        title: "Your turn: a problem–solution essay",
        instructions: "Plan for 5 minutes: list two problems, then one matching solution for each. Write for 30 minutes and check for 5.",
        prompt:
          "In many parts of the world, a growing number of people live alone. What problems can this cause for individuals and for society, and what can be done to solve them? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
        minWords: 250,
        minutes: 40,
        rubric: [
          "Task response: I answered both questions: I explained at least two problems and proposed solutions for them.",
          "Task response: My solutions are specific (who should act, what they should do, why it would work) and each one matches a problem.",
          "Coherence and cohesion: My essay has a clear introduction, a problems paragraph, a solutions paragraph and a conclusion.",
          "Coherence and cohesion: I used summary nouns and reference (this trend, such schemes) to link ideas across sentences.",
          "Lexical resource: I used precise topic vocabulary (isolation, household, affordable, community) with accurate collocations.",
          "Grammatical range and accuracy: I used conditionals, relative clauses and passive forms accurately where they were useful.",
          "Grammatical range and accuracy: Most of my sentences are free from errors.",
          "I wrote at least 250 words in about 40 minutes.",
        ],
        modelAnswer:
          "Across much of the world, single-person households have become increasingly common, driven by longer life expectancy, later marriage and greater geographical mobility. While living alone can bring independence, this trend creates significant problems for both individuals and society. A combination of community schemes and changes to housing policy, however, could ease these difficulties considerably.\n\nThe most serious problem for individuals is loneliness. People who live alone, particularly the elderly, may go days without a meaningful conversation, and social isolation has repeatedly been linked to depression and poorer physical health. At a wider level, the rise in one-person households increases the demand for housing, since more homes are needed for the same population. This pushes up rents and property prices, making it harder for young people to find somewhere affordable to live. It also leads to less efficient use of energy, as each small household heats its own space and runs its own appliances.\n\nFortunately, there are practical ways to tackle these issues. To reduce isolation, local councils could fund schemes that connect older residents with volunteers for regular visits or phone calls, and could support community spaces where people of all ages can meet. As for housing pressure, governments could encourage the construction of co-living developments, in which residents have private bedrooms but share kitchens and lounges. Such buildings make better use of land and energy, and they also give residents daily contact with neighbours, addressing both problems at once.\n\nIn conclusion, the growth in solo living brings real risks, from loneliness to housing shortages. Nevertheless, targeted community programmes and new forms of shared housing could allow people to enjoy their independence without paying a high social price.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Underline every part of the question before you plan. A problem–solution prompt usually contains two questions, and a discussion prompt contains three tasks: view A, view B and your opinion. Missing one part limits your Task Response score.",
    },
    {
      exam: "ielts",
      body: "Depth beats breadth. Two problems and two matching solutions, each fully explained, are better than five problems listed in one sentence each.",
    },
    {
      exam: "ielts",
      body: "Aim for about 260–300 words. You must write at least 250: if your essay is too short, there may not be enough evidence of your language to award higher bands. Longer essays are not penalised, but a very long one may leave you no time to check it.",
    },
  ],
  vocabulary: [
    { word: "proponent", meaning: "a person who supports an idea or plan", example: "Proponents of remote work stress its benefits for families.", topic: "academic" },
    { word: "contend", meaning: "to state firmly that something is true, especially in an argument", example: "Critics contend that the policy is too expensive.", topic: "academic" },
    { word: "on balance", meaning: "after considering all the facts and arguments", example: "On balance, I believe the advantages are greater.", topic: "academic" },
    { word: "obligation", meaning: "something you must do because of a law, rule or duty", example: "Employers have a legal obligation to provide a safe workplace.", topic: "work" },
    { word: "collaboration", meaning: "working together with others to achieve something", example: "Good office design encourages collaboration.", topic: "work" },
    { word: "isolation", meaning: "the state of being alone and without contact with others", example: "Social isolation can harm both mental and physical health.", topic: "health" },
    { word: "household", meaning: "all the people who live together in one home", example: "The number of single-person households has doubled.", topic: "society" },
    { word: "affordable", meaning: "cheap enough for ordinary people to pay for", example: "The city needs more affordable housing for young workers.", topic: "society" },
    { word: "mobility", meaning: "the ability to move easily between places, jobs or social groups", example: "Greater mobility means families often live far apart.", topic: "society" },
    { word: "targeted", meaning: "aimed at a particular group or problem", example: "Targeted support helped the most vulnerable residents.", topic: "society" },
  ],
  keyPoints: [
    "Identify the question type first: opinion, discussion, problem–solution, cause–solution or two-part question.",
    "Discussion essays need both views explained fairly AND a clear personal opinion.",
    "In problem–solution essays, each solution should be specific (who, what, why) and match a problem you described.",
    "Keep body paragraphs balanced and developed; depth beats a long list of ideas.",
    "Aim for about 260–300 words in 40 minutes, leaving time to check.",
  ],
};

export default lesson;
