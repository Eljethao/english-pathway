import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-advantages-disadvantages",
  title: "Advantages and disadvantages essays",
  summary:
    "Recognise the two main types of advantages and disadvantages question in IELTS Writing Task 2, plan a balanced or a weighted essay, and develop each point with an explanation, a consequence and an example.",
  skill: "writing",
  level: "B2",
  order: 7,
  minutes: 55,
  exams: [{ exam: "ielts", task: "Writing Task 2" }],
  objectives: [
    "Tell the difference between “What are the advantages and disadvantages?” and “Do the advantages outweigh the disadvantages?”",
    "Plan a balanced essay or a weighted essay with a clear judgement",
    "Develop each advantage or disadvantage with an explanation, a consequence and an example",
    "Use a range of language for benefits, drawbacks and weighing them up",
  ],
  warmUp: [
    "Think of something that has changed in your daily life recently, such as paying by phone or ordering food through an app. What is one advantage and one disadvantage of it?",
  ],
  learn: [
    {
      type: "text",
      title: "Two types of question",
      body: "Advantages and disadvantages questions look similar, but they ask for different things.\n\n**Type 1: describe both sides.**\n\n- *What are the advantages and disadvantages of …?*\n- *Discuss the advantages and disadvantages of …*\n\nHere you must cover **both** sides in a balanced way. You do not have to decide which side is stronger, although you can add a brief personal view in the conclusion.\n\n**Type 2: weigh them up.**\n\n- *Do the advantages of … outweigh the disadvantages?*\n- *Do the benefits of this development outweigh the drawbacks?*\n\nThis question asks for a **judgement**: which side is more important? Give a clear answer in the introduction, explain both sides, and show *why* one side is stronger. An essay that lists advantages and disadvantages but never answers *Do they outweigh…?* has not answered the question.",
    },
    {
      type: "table",
      title: "Two plans",
      headers: ["Paragraph", "Type 1: What are the advantages and disadvantages?", "Type 2: Do the advantages outweigh the disadvantages?"],
      rows: [
        ["Introduction", "Paraphrase the topic and say that there are benefits and drawbacks", "Paraphrase the topic and give your judgement (for example, the advantages are greater) with the main reason"],
        ["Body 1", "Advantages: one or two, fully developed", "The weaker side: accept its points fairly"],
        ["Body 2", "Disadvantages: one or two, fully developed", "The stronger side: your main reasons, developed in more depth"],
        ["Conclusion", "Summarise both sides; a brief personal view is optional", "Restate your judgement and why the stronger side wins"],
      ],
    },
    {
      type: "text",
      title: "Developing a point: the “So what?” test",
      body: "The most common weakness in these essays is a list: *One advantage is that it is cheap. Another advantage is that it is fast. A disadvantage is that it is unhealthy.* Each point needs development. After each idea, ask yourself *So what?* and answer it:\n\n1. **Point**: Working from home removes the daily commute.\n2. **Explanation**: Employees no longer spend an hour or more travelling every day.\n3. **Consequence**: They have more time and energy for their work and their families.\n4. **Example**: A parent who used to leave home at seven can now take the children to school before starting work.\n\nTwo well-developed points in a paragraph are better than four undeveloped ones.",
    },
    {
      type: "example",
      title: "Language for benefits, drawbacks and weighing up",
      items: [
        "**One major benefit of** online banking **is that** customers can manage their money at any time.",
        "Self-service machines **have the advantage of** reducing queues.",
        "**The main drawback of** this trend **is that** older customers may struggle with the technology.",
        "**A further downside is that** shops may need fewer staff.",
        "**Although** this is a genuine concern, **it is outweighed by** the time that customers save.",
        "These problems are **relatively minor compared with** the advantages.",
        "**On balance, the benefits clearly outweigh the drawbacks.**",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "*Advantage*, *benefit* and *merit* have similar meanings, and so do *disadvantage*, *drawback* and *downside*. Varying them shows lexical range, but only use words you are sure about: a wrong word choice costs more than a repeated one.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: what does the question ask?",
        questions: [
          {
            prompt: "“Many people now work from home for part of the week. What are the advantages and disadvantages of this?” What must you do?",
            options: [
              "Write only about the advantages.",
              "Discuss both sides in a balanced way; a personal judgement is optional.",
              "Explain the causes of the trend and suggest solutions.",
              "Say whether you agree or disagree, and ignore the disadvantages.",
            ],
            answer: 1,
            explanation: "A Type 1 question asks you to describe both sides. You may add a short view at the end, but it is not required.",
          },
          {
            prompt: "“Some schools now use video games to teach subjects such as history. Do the advantages of this outweigh the disadvantages?” What must you do?",
            options: [
              "List as many advantages and disadvantages as possible.",
              "Write only about the disadvantages.",
              "Explain both sides and make a clear judgement about which is stronger.",
              "Describe how educational video games are made.",
            ],
            answer: 2,
            explanation: "*Outweigh* questions ask for a judgement. Your introduction should already tell the reader which side you think is stronger.",
          },
          {
            prompt: "Which thesis statement fits the question about video games in history lessons?",
            options: [
              "There are many advantages and disadvantages to using video games in lessons.",
              "Although video games can distract some students, I believe their benefits are greater, because they make difficult topics more memorable.",
              "This essay will discuss video games.",
              "Video games are very popular among teenagers today.",
            ],
            answer: 1,
            explanation: "It accepts a drawback, makes a clear judgement (the benefits are greater) and gives the main reason.",
          },
          {
            prompt: "In a Type 2 essay where you think the advantages are greater, which is the best plan for the body paragraphs?",
            options: [
              "Mix advantages and disadvantages in every paragraph without a clear plan.",
              "Write only about the advantages, because you think the disadvantages are less important.",
              "Disadvantages first, then advantages, so that the essay ends on the side you think is stronger.",
              "Advantages first, then disadvantages, and then change your judgement in the conclusion.",
            ],
            answer: 2,
            explanation: "Dealing with the weaker side first lets you build towards your judgement. Ignoring one side or changing your position weakens the essay.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*In many countries, a growing number of employees now work from home for some or all of the week. Do the advantages of this trend outweigh the disadvantages?*\n\n*Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.*",
    },
    {
      type: "passage",
      title: "Model essay (Writing Task 2, Type 2)",
      paragraphs: [
        "Over the past few years, working from home has changed from a rare privilege into a normal arrangement for many office workers. Although this trend has some drawbacks for both employees and companies, I believe that its advantages are considerably greater, mainly because it saves time and gives people more control over their working lives.",
        "Admittedly, working from home can create problems. The most serious is isolation. Employees who rarely see their colleagues may feel lonely and find it harder to ask for help or share ideas, and this can be particularly difficult for young staff, who often learn their jobs by watching more experienced colleagues. In addition, some people find it hard to separate work from family life when their office is also their kitchen, so they end up working longer hours rather than shorter ones.",
        "However, these problems can usually be reduced, whereas the benefits are significant. The most obvious advantage is the time saved on commuting. An employee who used to spend ninety minutes a day on crowded trains gains more than seven hours a week, which can be used for rest, exercise or family. As a result, many people feel less stressed and start work more focused. Working from home also gives employees greater flexibility. A parent, for example, can take a child to school and still start work on time, while a person with a disability does not have to struggle with public transport every day. Meanwhile, the problem of isolation can be addressed through regular team days in the office, an approach that many firms already use.",
        "In conclusion, although working from home can leave some employees isolated and make it difficult to switch off, I am convinced that the benefits outweigh these drawbacks. Saving hours of travel and having more control over the working day improve people's lives in ways that a well-organised company can easily support.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **A clear judgement in the introduction**: *its advantages are considerably greater*, with the main reasons. The reader knows the answer to the question from the start.\n- **The weaker side first**: paragraph 2 treats the disadvantages fairly (*Admittedly…*) and develops them: what the problem is, who it affects and why.\n- **A turning point**: *However, these problems can usually be reduced, whereas the benefits are significant* links the two body paragraphs and shows the weighing up.\n- **Developed advantages**: each one has an explanation, a consequence (*As a result…*) and an example (a parent, a person with a disability).\n- **Answering the drawback**: the writer shows how isolation can be reduced. This explains *why* the advantages outweigh it.\n- **The conclusion** restates the judgement in new words and adds no new ideas.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Develop the point",
        instructions:
          "These points come from an essay about the advantages and disadvantages of studying at a university in another country. Match each point with the sentence that develops it best. There is one extra sentence.",
        left: [
          "Students who study abroad often improve their language skills quickly.",
          "Living in another country can be very expensive.",
          "International students learn to be independent.",
          "Many students feel homesick, especially in their first year.",
          "A degree from a foreign university can impress employers.",
        ],
        right: [
          "With no parents nearby, they must manage their own money, cook for themselves and solve problems such as a lost bank card.",
          "Many universities now offer online courses, so students can study from home.",
          "Recruiters may see it as evidence that the graduate can adapt to new situations and work with people from different cultures.",
          "Because they use the language every day, in shops, lectures and conversations, they often make faster progress than they would in a classroom at home.",
          "Missing family and friends can affect their sleep and concentration, and a few even give up their course and return home.",
          "Fees for international students are often higher, and rent, food and flights soon add up, so some families have to borrow money.",
        ],
        answer: [3, 5, 0, 4, 2],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Weighing up: key language",
        instructions: "Complete the paragraph about hire scooters in cities with words from the box. There are two extra words.",
        text: "Electric scooters for hire {{0}} the advantage of offering a cheap, quick way to make short journeys. One major {{1}} of them is that they can replace car trips of a few kilometres. The main {{2}}, however, is safety: some riders use the pavement, which puts pedestrians at risk. Although this is a serious concern, I believe it is {{3}} by the benefits, because cities can create special lanes and set speed limits. {{4}} balance, then, the advantages clearly {{5}} the disadvantages.",
        answers: [
          ["have", "offer", "bring", "provide"],
          ["benefit", "advantage", "merit", "plus", "upside"],
          ["drawback", "disadvantage", "downside", "problem", "concern"],
          ["outweighed", "offset"],
          ["On"],
          ["outweigh"],
        ],
        wordBank: ["have", "benefit", "drawback", "outweighed", "On", "outweigh", "In", "despite"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "order",
        mode: "lines",
        title: "Build a developed paragraph",
        instructions:
          "This body paragraph comes from an essay on the advantages and disadvantages of online shopping. Put the sentences in order: point, explanation, consequence, example, link.",
        items: [
          "The main drawback of the growth in online shopping is its effect on town centres.",
          "When more people buy clothes, books and electronics online, local shops lose customers, and many are forced to close.",
          "As a result, high streets that were once busy can fill with empty buildings, which makes them less attractive places to visit.",
          "In my own town, for example, three clothes shops and a bookshop closed within two years, and the main street now feels deserted in the evenings.",
          "This shows that the convenience of shopping online can come at a real cost to local communities.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: IELTS Writing Task 2 (Type 1)",
        instructions: "Plan for 5 minutes (two developed points for each side), write for 30 minutes and check for 5 minutes.",
        prompt:
          "Many supermarkets have replaced some of their checkout staff with self-service machines, where customers scan and pay for their shopping themselves.\n\nWhat are the advantages and disadvantages of this development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
        minWords: 250,
        minutes: 40,
        rubric: [
          "Task response: I covered both advantages and disadvantages and gave them similar space, as a Type 1 question requires.",
          "Task response: each main point is developed with an explanation, a consequence and a specific example, not just listed.",
          "Task response: if I gave a personal view, it is brief, comes at the end and fits the rest of the essay.",
          "Coherence and cohesion: I used four paragraphs, with one side in each body paragraph and a clear topic sentence for each.",
          "Coherence and cohesion: I used linkers such as on the other hand, in addition, as a result and for instance accurately, and not in every sentence.",
          "Lexical resource: I varied advantage, benefit, drawback and downside, and used topic words (supervise, wage costs, frustrating) accurately.",
          "Grammatical range and accuracy: I used complex sentences (because, which, so that, although) as well as simple ones, with few errors.",
          "Length: I wrote at least 250 words in about 40 minutes.",
        ],
        modelAnswer:
          "Self-service checkouts, where shoppers scan and pay for their own items, have become a familiar sight in supermarkets. This development brings clear benefits for both customers and shop owners, but it also has some important drawbacks, particularly for staff and older shoppers.\n\nThe main advantage for customers is speed. Because one assistant can supervise six or eight machines, a supermarket can open more checkouts without employing more people, so queues move faster, especially at busy times. Someone who only needs a sandwich and a drink at lunchtime, for instance, can be in and out of the shop in a couple of minutes. For businesses, the benefit is financial: employing fewer cashiers means lower wage costs, and some of this saving may be passed on to customers in the form of lower prices.\n\nOn the other hand, the machines have several disadvantages. The most serious is the loss of jobs. Checkout work is often an important source of income for students, parents and older people who need flexible hours, and these jobs are not easily replaced. In addition, many shoppers find the machines frustrating. Older customers in particular may struggle with touch screens, and a machine that keeps stopping to ask for help can turn a quick visit into a stressful one. Some people also miss the short conversation with a cashier, which for those who live alone may be one of the few social contacts in their day.\n\nIn conclusion, self-service checkouts save time for many shoppers and money for supermarkets, but they reduce the number of jobs available and can be difficult or unwelcoming for some customers. In my view, the best approach is for supermarkets to offer both options, so that people can choose the kind of service that suits them.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Read the final question carefully. *What are the advantages and disadvantages?* asks you to describe both sides. *Do the advantages outweigh the disadvantages?* asks for a judgement, and your essay must give one clearly and keep it to the end.",
    },
    {
      exam: "ielts",
      body: "Some questions limit the topic, for example *the advantages and disadvantages for individuals* or *for society*. Keep every point focused on that group, or part of your essay will not answer the question.",
    },
    {
      exam: "ielts",
      body: "Do not try to include every advantage you can think of. Choose the one or two strongest points on each side and develop them fully. In 40 minutes, depth is more valuable than a long list.",
    },
  ],
  vocabulary: [
    { word: "outweigh", meaning: "to be greater or more important than something else", example: "For most workers, the benefits of flexible hours outweigh the drawbacks.", topic: "academic" },
    { word: "drawback", meaning: "a disadvantage or problem", example: "The main drawback of the plan is its cost.", topic: "business" },
    { word: "downside", meaning: "the negative part of a situation", example: "The downside of living in the centre is the noise.", topic: "everyday" },
    { word: "merit", meaning: "a good quality or advantage", example: "Both proposals have their merits.", topic: "academic" },
    { word: "isolation", meaning: "the state of being alone or separated from other people", example: "Some remote workers suffer from isolation.", topic: "work" },
    { word: "commute", meaning: "the regular journey to and from work", example: "My commute takes forty minutes each way.", topic: "travel" },
    { word: "flexibility", meaning: "the ability to change easily to suit new conditions", example: "Working from home gives parents more flexibility.", topic: "work" },
    { word: "supervise", meaning: "to watch a person or activity to make sure it is done correctly", example: "One assistant supervises all the self-service machines.", topic: "work" },
    { word: "on balance", meaning: "after considering all the facts", example: "On balance, the scheme has been a success.", topic: "academic" },
    { word: "genuine", meaning: "real and serious, not imagined", example: "Safety on the roads is a genuine concern.", topic: "academic" },
    { word: "wage costs", meaning: "the money a company spends on paying its workers", example: "Automation helps companies reduce their wage costs.", topic: "business" },
    { word: "privilege", meaning: "a special advantage that only some people have", example: "Flexible working used to be a privilege for senior staff.", topic: "society" },
  ],
  keyPoints: [
    "“What are the advantages and disadvantages?” = describe both sides. “Do the advantages outweigh…?” = make and explain a judgement.",
    "Type 1 plan: an advantages paragraph and a disadvantages paragraph. Type 2 plan: the weaker side first, the stronger side second.",
    "Develop every point with an explanation, a consequence and an example: apply the “So what?” test.",
    "Vary benefit, merit and advantage, and drawback, downside and disadvantage, and use weighing language such as outweigh and on balance.",
  ],
};

export default lesson;
