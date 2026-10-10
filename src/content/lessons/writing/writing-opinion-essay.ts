import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-opinion-essay",
  title: "Opinion essay structure",
  summary:
    "Use a clear four-paragraph plan to write opinion essays: a strong thesis statement, well-supported body paragraphs and a short conclusion, for IELTS Writing Task 2 and the TOEIC opinion essay.",
  skill: "writing",
  level: "B2",
  order: 3,
  minutes: 55,
  exams: [
    { exam: "ielts", task: "Writing Task 2" },
    { exam: "toeic", task: "Writing – Write an opinion essay" },
  ],
  objectives: [
    "Recognise an opinion question and decide your position before you write",
    "Write an introduction with a paraphrase of the question and a clear thesis statement",
    "Build body paragraphs with a topic sentence, an explanation and an example",
    "Write a short conclusion that restates your opinion without adding new ideas",
  ],
  warmUp: [
    "Should secondary school students have to do unpaid work in their local community? Give one reason for your answer.",
    "When you give your opinion in your own language, what makes it sound convincing?",
  ],
  learn: [
    {
      type: "text",
      title: "What an opinion question asks you to do",
      body: "An opinion question gives you a statement and asks what you think about it. You will often see instructions like these:\n\n- *To what extent do you agree or disagree?* (IELTS Writing Task 2)\n- *Do you agree or disagree with the following statement? Give reasons or examples to support your opinion.* (typical of the TOEIC opinion essay)\n- *Is this a positive or negative development?*\n\nYour job has three parts. First, give a **clear position**. Second, **support** it with reasons and examples. Third, **keep the same position** from the first paragraph to the last. An essay that agrees in the introduction and disagrees in the conclusion confuses the reader and loses marks.",
    },
    {
      type: "table",
      title: "A four-paragraph plan",
      headers: ["Paragraph", "What it does", "Approximate length (IELTS, 250+ words)"],
      rows: [
        ["Introduction", "Paraphrase the topic, then give your thesis statement: your opinion and your two main reasons", "about 40–50 words"],
        ["Body paragraph 1", "Reason 1: topic sentence, explanation, example, link back to your opinion", "about 90–100 words"],
        ["Body paragraph 2", "Reason 2, organised in the same way", "about 90–100 words"],
        ["Conclusion", "Restate your opinion and summarise your reasons in new words. No new ideas", "about 30–40 words"],
      ],
    },
    {
      type: "text",
      title: "The thesis statement",
      body: "The thesis statement is usually the last sentence of your introduction. It tells the reader **what you think** and **why**. A good thesis makes the rest of the essay easy to follow, because each body paragraph develops one of the reasons it mentions.\n\nIf you only partly agree, that is fine, but say exactly which part you agree with.",
    },
    {
      type: "example",
      title: "Weak and strong thesis statements",
      items: [
        "Weak: “There are many advantages and disadvantages to this issue.” → no opinion",
        "Weak: “In this essay I will talk about this topic.” → says nothing about your view",
        "Strong: “I **completely agree** with this idea, **mainly because** it saves time **and** reduces stress.”",
        "Strong (partly agree): “**Although** online lessons are convenient, I **believe** they cannot fully replace classrooms, **since** students need face-to-face contact.”",
      ],
    },
    {
      type: "text",
      title: "Inside a body paragraph",
      body: "Each body paragraph develops **one** main idea. A simple pattern is:\n\n1. **Topic sentence**: the main idea of the paragraph, linked to your thesis.\n2. **Explanation**: why or how this is true.\n3. **Example**: a specific case, a personal experience or a realistic situation.\n4. **Link**: a sentence that shows how this supports your opinion.\n\nAvoid lists of many short reasons. Two ideas that are fully developed are better than five ideas with no explanation.",
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Spend about 5 minutes planning before you write. Decide your position, choose two reasons and think of one example for each. A clear plan saves time later and makes your essay easier to follow.",
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*Some people believe that all secondary school students should do unpaid work in their local community, for example helping older people or cleaning parks. To what extent do you agree or disagree?*\n\nWrite at least 250 words.",
    },
    {
      type: "passage",
      title: "Model essay (Writing Task 2)",
      paragraphs: [
        "In many countries, teenagers are encouraged to volunteer, and some people argue that community service should be a compulsory part of secondary education. I largely agree with this view, because unpaid work teaches young people practical skills and helps them understand people who are different from them.",
        "The main benefit of community work is that it develops skills which classrooms rarely teach. When students help at a food bank or organise a clean-up day, they have to communicate with strangers, solve unexpected problems and work as a team. For example, a teenager who helps to run a local festival quickly learns how to plan a schedule and deal with complaints. These are exactly the abilities that employers and universities look for, so the experience prepares students well for adult life.",
        "Community service also builds empathy. Many teenagers spend most of their time with people of the same age and background, and they may know little about the difficulties that others face. Spending an afternoon each week with elderly residents, for instance, can show a young person how lonely old age can be and how much a short conversation is valued. Admittedly, schools would need to plan this work carefully so that it does not take time away from exam preparation. However, one afternoon a week is a small price to pay if it produces students who are more caring and more likely to become active citizens.",
        "In conclusion, I believe that requiring secondary students to do unpaid community work is a positive idea, provided that it is well organised. It gives them practical skills that school subjects cannot provide and helps them become more understanding members of society.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "**Introduction.** The first sentence paraphrases the question: *unpaid work in their local community* becomes *community service*, and *all students should* becomes *compulsory*. The second sentence is the thesis. It gives a clear position (*largely agree*) and two reasons, which become the two body paragraphs.\n\n**Body paragraph 1.** The topic sentence (*develops skills which classrooms rarely teach*) matches reason 1. The writer explains which skills, gives a specific example (running a festival) and links back to the opinion (*prepares students well for adult life*).\n\n**Body paragraph 2.** The topic sentence matches reason 2 (*empathy*). Notice the short concession (*Admittedly…*) followed by *However*. This shows the writer has considered the other side without changing position.\n\n**Conclusion.** It restates the opinion and the two reasons in new words and adds nothing new. Total length: about 280 words.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "The job of each sentence",
        instructions:
          "These sentences come from an essay on the statement “Public libraries are no longer necessary because people can find everything online.” Match each sentence to its job in the essay. One job is not used.",
        left: [
          "Some people claim that public libraries have become unnecessary now that so much information is available online.",
          "However, I strongly disagree, because libraries offer free access to resources and provide valuable community spaces.",
          "The most important reason to keep libraries is that they give everyone equal access to knowledge.",
          "For instance, in my town, many students without a home computer do their homework at the library every afternoon.",
          "In conclusion, libraries remain essential, as they support people who cannot pay for technology and bring communities together.",
        ],
        right: [
          "Supporting example",
          "Thesis statement",
          "Restated opinion in the conclusion",
          "Paraphrase of the question",
          "A completely new argument",
          "Topic sentence of a body paragraph",
        ],
        answer: [3, 1, 5, 0, 2],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "order",
        mode: "lines",
        title: "Build a body paragraph",
        instructions:
          "The essay question is “Children should learn to cook at school. Do you agree or disagree?” Put the sentences of this body paragraph in the correct order: topic sentence, problem, explanation, example, link.",
        items: [
          "Another strong reason to teach cooking at school is that it improves children's health.",
          "Many young people rely on fast food and ready meals because they simply do not know how to prepare anything else.",
          "If they learn to make a few simple, balanced dishes, they are far more likely to eat fresh food when they leave home.",
          "For example, a school in my city introduced weekly cooking classes, and a survey later showed that pupils were eating more vegetables at home.",
          "This suggests that practical lessons in the kitchen can have a lasting effect on children's diets.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Thesis statements, topic sentences and conclusions",
        questions: [
          {
            prompt:
              "Question: “Some people think that cities should ban cars from their centres. To what extent do you agree or disagree?” Which is the best thesis statement?",
            options: [
              "There are many advantages and disadvantages to banning cars from city centres.",
              "In this essay I will talk about cars in cities.",
              "I strongly agree that cars should be banned from city centres, as this would cut air pollution and make streets safer for pedestrians.",
              "Cars are very popular, and many people drive them every day.",
            ],
            answer: 2,
            explanation: "It gives a clear position (strongly agree) and two reasons that the body paragraphs can develop.",
          },
          {
            prompt: "Which sentence would work best as the topic sentence of a body paragraph?",
            options: [
              "For example, my cousin did an online course last year.",
              "The main reason I support online learning is that it allows students to study at their own pace.",
              "In conclusion, online learning is useful.",
              "Online learning has existed for many years.",
            ],
            answer: 1,
            explanation: "A topic sentence states one main idea that supports your opinion. The first option is an example, and the last is a fact with no link to an opinion.",
          },
          {
            prompt: "What should a conclusion NOT do?",
            options: [
              "Restate your opinion",
              "Summarise your main reasons",
              "Introduce a new argument",
              "Use different words from the introduction",
            ],
            answer: 2,
            explanation: "A new argument in the conclusion has no explanation or example, so it weakens the essay.",
          },
          {
            prompt: "You think the statement is only partly right. What is the best approach?",
            options: [
              "Avoid giving an opinion, so the examiner cannot disagree with you",
              "Say clearly which part you agree with and which part you do not, and keep that position throughout",
              "Agree in the introduction and disagree in the conclusion to show both sides",
              "Write only about the side you disagree with and never state your view",
            ],
            answer: 1,
            explanation: "A partly-agree position is acceptable if it is clear and consistent from start to finish.",
          },
          {
            prompt: "How many words should you aim for in the TOEIC opinion essay?",
            options: ["At least 150", "At least 250", "At least 300", "Exactly 400"],
            answer: 2,
            explanation: "ETS says an effective TOEIC opinion essay typically contains at least 300 words, written in 30 minutes. IELTS Task 2 asks for at least 250 words in about 40 minutes.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "write",
        title: "Your turn: IELTS Writing Task 2",
        instructions: "Plan for 5 minutes, write for 30 minutes and check for 5 minutes. Use the four-paragraph plan from this lesson.",
        prompt:
          "In many countries, young people now spend several hours a day on social media. Some people think that schools should teach students how to use social media responsibly as part of the curriculum. To what extent do you agree or disagree? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
        minWords: 250,
        minutes: 40,
        rubric: [
          "Task response: My opinion is clear in the introduction, and I keep the same position throughout the essay.",
          "Task response: Each main idea is developed with an explanation and a relevant, specific example.",
          "Coherence and cohesion: I have four paragraphs, and each body paragraph has one main idea and a clear topic sentence.",
          "Coherence and cohesion: I used linking words (firstly, for example, as a result, in conclusion) accurately, but not at the start of every sentence.",
          "Lexical resource: I paraphrased the question in my introduction instead of copying it.",
          "Lexical resource: I used some topic vocabulary (privacy, misleading, evaluate) and avoided repeating the same words.",
          "Grammatical range and accuracy: I used a mix of simple and complex sentences (because, if, which, although).",
          "Grammatical range and accuracy: Most of my sentences are free from errors in tense, articles and subject–verb agreement.",
          "I wrote at least 250 words in about 40 minutes.",
        ],
        modelAnswer:
          "Social media has become a central part of teenagers' lives, and it is often argued that schools should include lessons on using these platforms responsibly. I fully agree with this idea, because young people need guidance to protect their privacy and to judge the information they see online.\n\nFirstly, many teenagers do not understand the risks of sharing personal details. They often post photos that show their school, their street or their daily routine without realising that strangers can see this information. A series of lessons could teach students how privacy settings work and why some content should never be shared. For example, a short class activity in which students search for their own names online can be surprisingly effective, as they quickly see how much is publicly available. Parents can of course help, but many of them are less familiar with these apps than their children are.\n\nSecondly, schools are well placed to teach students how to evaluate information. Social media is full of misleading headlines, edited images and advertising that looks like ordinary posts. If teachers show students how to check the source of a story and compare it with reliable news websites, young people will be less likely to believe and spread false information. In one lesson, for instance, a class could trace a viral health claim back to its origin and discover that it came from a company selling supplements. This skill is useful not only at school but also in later life, when they need to make decisions about their health, their money or how to vote.\n\nIn conclusion, I strongly believe that the responsible use of social media should be taught in schools. Such lessons would help students keep their personal information safe and become more critical readers of what they find online.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Task 2 contributes twice as much as Task 1 to your Writing score, so give it the full 40 minutes and do not let Task 1 run over its 20 minutes.",
    },
    {
      exam: "ielts",
      body: "Answer every part of the question. If the question says *To what extent do you agree or disagree?*, the examiner expects a clear position. If the prompt contains two questions, you must answer both.",
    },
    {
      exam: "toeic",
      body: "The TOEIC opinion essay gives you 30 minutes, and ETS says an effective essay typically has at least 300 words. Use the same plan, but make your body paragraphs a little longer or add a third reason. Leave 3–4 minutes to check spelling and grammar.",
    },
  ],
  vocabulary: [
    { word: "thesis statement", meaning: "the sentence in an introduction that gives the writer's main opinion", example: "Her thesis statement made her position clear from the start.", topic: "academic" },
    { word: "take a position", meaning: "to decide and state what you think about an issue", example: "You must take a position on the statement in Task 2.", topic: "academic" },
    { word: "compulsory", meaning: "required by a rule or law", example: "Physical education is compulsory until the age of sixteen.", topic: "education" },
    { word: "paraphrase", meaning: "to express the same meaning using different words", example: "Paraphrase the question in your first sentence.", topic: "academic" },
    { word: "empathy", meaning: "the ability to understand how other people feel", example: "Volunteering helped him develop empathy for older people.", topic: "society" },
    { word: "volunteer", meaning: "to do work without being paid, usually to help others", example: "She volunteers at an animal shelter every Saturday.", topic: "society" },
    { word: "evaluate", meaning: "to judge how good, true or useful something is", example: "Students should learn to evaluate online sources.", topic: "education" },
    { word: "misleading", meaning: "giving a false idea or impression", example: "The headline was misleading and exaggerated the risk.", topic: "technology" },
    { word: "privacy", meaning: "the right to keep personal information to yourself", example: "Check your privacy settings before you post photos.", topic: "technology" },
    { word: "admittedly", meaning: "used to accept that something is true before making a different point", example: "Admittedly, the plan is expensive. However, the benefits are clear.", topic: "academic" },
  ],
  keyPoints: [
    "Decide your opinion before you write, and keep it the same from the introduction to the conclusion.",
    "Introduction = a paraphrase of the question + a thesis statement with your position and main reasons.",
    "Each body paragraph develops one main idea: topic sentence, explanation, example, link.",
    "The conclusion restates your opinion and reasons in new words. Do not add new ideas.",
    "IELTS Writing Task 2: 250+ words in 40 minutes. TOEIC opinion essay: 300+ words in 30 minutes.",
  ],
};

export default lesson;
