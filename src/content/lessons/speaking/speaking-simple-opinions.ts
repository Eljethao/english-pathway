import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-simple-opinions",
  title: "Simple opinions with reasons",
  summary:
    "Give a clear opinion with a reason and an example in 15, 30 or 60 seconds, for TOEIC Respond to questions, TOEIC Express an opinion and the TOEFL interview.",
  skill: "speaking",
  level: "B1",
  order: 7,
  minutes: 25,
  exams: [
    { exam: "toeic", task: "Speaking – Respond to questions" },
    { exam: "toeic", task: "Speaking – Express an opinion" },
    { exam: "toefl", task: "Speaking – Take an Interview" },
  ],
  objectives: [
    "Give a clear opinion in your first sentence with I think, I don't think or For me",
    "Support your opinion with because, so and for example",
    "Make your answer fit the time: 15, 30 or 60 seconds",
    "Avoid common mistakes such as I'm agree and According to me",
  ],
  warmUp: [
    "Do you prefer shopping online or in shops? Say why in one sentence.",
    "What is one rule at your school or workplace that you think is a good idea?",
  ],
  learn: [
    {
      type: "text",
      title: "Opinions in three speaking tests",
      body: "Many speaking tasks ask what you think:\n\n- **TOEIC Respond to questions**: three questions on an everyday topic. You get only a few seconds after each question, and you have 15 or 30 seconds to answer. The longer answer usually comes last and often asks for your opinion or preference.\n- **TOEIC Express an opinion**: 45 seconds to prepare and 60 seconds to give and support your opinion.\n- **TOEFL Take an Interview**: no preparation time and 45 seconds for each answer. The later questions ask for your opinion on wider issues.\n\nIn all three, the listener wants a **clear opinion** and **support that fits the question**. You don't need clever ideas. Simple, clear reasons are enough.",
    },
    {
      type: "text",
      title: "Opinion, because, for example",
      body: "In lesson 2 you used A-R-E for personal questions. For opinions, the steps are the same, but the answer is your opinion:\n\n1. **Opinion**: *I think…* / *I don't think…* / *For me,…*\n2. **Because**: one clear reason. *…because it saves time.*\n3. **For example**: one real example from your life. *For example, last week I…*\n\nHow much you say depends on the time:\n\n- **15 seconds**: opinion + reason.\n- **30 seconds**: opinion + reason + a short example.\n- **60 seconds**: opinion + two reasons (one with an example) + a short final sentence: *That's why I think…*",
    },
    {
      type: "table",
      title: "Useful opinion language",
      headers: ["Step", "Simple and correct"],
      rows: [
        ["Give an opinion", "I think… / I don't think… / In my opinion,… / For me,…"],
        ["Agree or disagree", "I agree that… / I don't agree that… / I partly agree."],
        ["Choose one option", "I prefer… / I'd choose… / …is better for me."],
        ["Give reasons", "…because… / The main reason is that… / Another reason is that…"],
        ["Give examples", "For example,… / For instance,… / …like…"],
        ["Finish", "So… / That's why I think…"],
      ],
    },
    {
      type: "table",
      title: "Common mistakes",
      headers: ["Don't say", "Say", "Why"],
      rows: [
        ["I'm agree.", "I agree.", "*Agree* is a verb, so you don't need *am*."],
        ["I think no. / I don't think.", "I don't think so.", "Use *so* to stand for the idea."],
        ["In my opinion, I think…", "In my opinion,… or I think…", "Use one of them, not both."],
        ["According to me,…", "In my opinion,… / I think…", "*According to* is for other people's ideas: *according to the news*."],
        ["I think it will not help.", "I don't think it will help.", "With *think*, English usually makes *think* negative."],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check",
        questions: [
          {
            prompt: "Which sentence is correct?",
            options: ["I'm agree with this idea.", "I agree with this idea.", "I am agreeing with this idea."],
            answer: 1,
            explanation: "Agree is a normal verb: I agree. We don't usually use it in the continuous form.",
          },
          {
            prompt: "“Do you think it will rain tomorrow?” “No, …”",
            options: ["I don't think so.", "I think not so.", "I don't think."],
            answer: 0,
            explanation: "I don't think so is the natural short answer. So stands for “it will rain tomorrow”.",
          },
          {
            prompt: "Question: “Do you prefer shopping online or in shops?” Which first sentence is best?",
            options: [
              "Shopping is something that many people do every week.",
              "I prefer shopping online, mainly because it saves time.",
              "Well, there are good things and bad things about both.",
            ],
            answer: 1,
            explanation: "It chooses one option and gives a reason straight away. The other two don't answer the question.",
          },
          {
            prompt: "Which sentence gives an example?",
            options: [
              "For instance, last month I ordered a jacket and it arrived the next day.",
              "That's why I usually shop online.",
              "I think online shopping is convenient.",
            ],
            answer: 0,
            explanation: "For instance introduces a real situation. The second sentence is a conclusion and the third is an opinion.",
          },
          {
            prompt: "Public transport in my city is cheap and fast, … I hardly ever use my car.",
            options: ["because", "so", "but"],
            answer: 1,
            explanation: "So introduces a result: cheap public transport → I hardly ever drive.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The situation",
      body: "**TOEIC Respond to questions.** Imagine that a local newspaper is writing an article about food and cooking. You have agreed to answer some questions in a telephone interview. You have 15 seconds for questions 1 and 2, and 30 seconds for question 3.",
    },
    {
      type: "audio",
      title: "Model: three questions and answers",
      transcript:
        "Interviewer: How often do you cook at home, and what do you usually make?\nSpeaker: I cook at home about four times a week, mostly in the evenings. I usually make simple things, like pasta or rice with vegetables, because I don't have much time after work.\nInterviewer: When was the last time you ate at a restaurant?\nSpeaker: The last time was last Friday. I went to a small Indian restaurant near my office with two colleagues. It was a birthday lunch for one of them, and the food was excellent.\nInterviewer: Do you think schools should teach children how to cook? Why or why not?\nSpeaker: Yes, I think they should. The main reason is that cooking is a skill everyone needs, but many young people leave home without it. For example, when I started university, I could only make toast, so I ate a lot of fast food. If schools taught basic cooking, young people would eat better and save money. That's why I think it's a really good idea.",
      cast: { Interviewer: "male", Speaker: "female" },
    },
    {
      type: "text",
      title: "How a strong speaker does it",
      body: "- **15-second answers** (questions 1 and 2): every part of the question is answered in one or two sentences. Question 1 has two parts (*how often* and *what*), and the speaker answers both.\n- **The same tense as the question**: present simple for *How often do you…?*, past simple for *When was the last time…?*\n- **The 30-second answer**: the opinion comes first (*Yes, I think they should*), then a reason (*The main reason is that…*), a personal example (*when I started university…*) and a short final sentence (*That's why…*).\n- **No long introductions** like *That's a very interesting question*. With 15 seconds, every second counts.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Match each opinion to its reason",
        instructions: "A good reason supports the opinion directly. Match each opinion to the best reason. There is one extra reason that you do not need.",
        left: [
          "I think every child should learn to swim,",
          "I prefer working from home,",
          "I don't think people should use their phones during dinner with friends,",
          "In my opinion, small local shops are better than big supermarkets,",
          "For me, the best way to learn new words is to read a lot,",
        ],
        right: [
          "because you see the same words again and again in different sentences.",
          "because it could save their life one day.",
          "because the weather is usually warm in summer.",
          "because the staff know their customers and give better advice.",
          "because it shows you're not really listening to them.",
          "because I don't waste two hours a day travelling.",
        ],
        answer: [1, 5, 4, 3, 0],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "shadow",
        title: "Listen and repeat: opinion phrases",
        instructions: "Listen and repeat. Stress the important words (great, don't, best, main) and keep your voice falling at the end, so you sound sure.",
        sentences: [
          "I think it's a great idea, because it saves time.",
          "I don't think so. It's too expensive for most people.",
          "For me, the best way to relax is to go for a walk.",
          "I agree that children should learn to cook.",
          "The main reason is that it's good for your health.",
          "For example, last year I started cycling to work.",
          "That's why I prefer working in a small team.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "TOEIC Respond to questions: the 30-second answer",
        instructions: "Imagine a company is doing research about people's jobs, and you have agreed to answer some questions. This is the last question, so you have 30 seconds. As in the real test, you have only 3 seconds before you start. Choose one option, then give a reason and an example.",
        prompt: "When you choose a job, which is more important to you: a short journey to work or a high salary? Why?",
        prepSeconds: 3,
        speakSeconds: 30,
        modelAnswer:
          "For me, a short journey to work is more important. The main reason is that time is really valuable. For example, at my last job I spent almost two hours a day on buses, and I was always tired and stressed. Now I walk to work in fifteen minutes, so I have time to cook and do sport in the evening. That's why I'd choose a short journey.",
        targetPhrases: ["For me", "The main reason is that", "For example", "so", "That's why"],
        checklist: [
          "I chose one option clearly in my first sentence.",
          "I gave a reason (because… / The main reason is that…).",
          "I gave a short example from my own life.",
          "I finished with a short final sentence (That's why…).",
          "I started speaking quickly and used most of the 30 seconds.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "TOEIC Express an opinion",
        instructions: "You have 45 seconds to prepare and 60 seconds to speak. In your preparation time, choose your side and two reasons. Use the 60-second plan: opinion, two reasons (one with an example), final sentence.",
        prompt: "Do you agree or disagree with the following statement? “Companies should let employees choose their own working hours.” Give reasons or examples to support your opinion.",
        prepSeconds: 45,
        speakSeconds: 60,
        modelAnswer:
          "I agree that companies should let employees choose their own working hours, at least in most office jobs. I have two reasons.\n\nFirst, people work better at different times of day. For example, my brother is much more focused early in the morning, so he likes to start at seven and finish at three. I'm the opposite. I'm slow in the morning, but I can concentrate really well in the afternoon.\n\nAnother reason is that flexible hours make life easier for parents. They can take their children to school and still do a full day's work, so they feel less stressed.\n\nOf course, some jobs need fixed hours, like shop assistants or bus drivers. But for many office workers, choosing their own hours means happier staff and better work. That's why I agree with the statement.",
        targetPhrases: ["I agree that", "I have two reasons", "First", "For example", "Another reason is that", "That's why"],
        checklist: [
          "I said clearly whether I agree or disagree in my first sentence.",
          "I gave two reasons (First… Another reason is that…).",
          "I supported at least one reason with a specific example.",
          "I avoided common mistakes (I'm agree, According to me).",
          "I finished with a short final sentence before the 60 seconds ended.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "In Respond to questions, you get only a few seconds after each question, so don't plan a perfect answer. Start with words from the question: *How often do you cook?* → *I cook about four times a week.* And answer every part: if the question asks *how often* and *what*, answer both.",
    },
    {
      exam: "toeic",
      body: "In Express an opinion, use the 45 seconds of preparation to choose your side and two reasons. Choose the side that is easier to explain in simple English, even if it is not exactly your real opinion. Clear support matters more than a clever idea.",
    },
    {
      exam: "toefl",
      body: "In Take an Interview, the later questions ask for your opinion on wider issues. Give your opinion in the first sentence, then a reason and an example. A short final sentence (*So that's why I think…*) helps you finish cleanly when the 45 seconds end.",
    },
  ],
  vocabulary: [
    { word: "in my opinion", meaning: "used to say what you think", example: "In my opinion, the city needs more bike lanes.", topic: "everyday" },
    { word: "agree with", meaning: "to have the same opinion as someone or something", example: "I agree with you about the new timetable.", topic: "everyday" },
    { word: "disagree", meaning: "to have a different opinion", example: "Many people disagree with the new parking rules.", topic: "everyday" },
    { word: "the main reason", meaning: "the most important reason", example: "The main reason I moved was the job.", topic: "everyday" },
    { word: "flexible", meaning: "able to change easily to suit different situations", example: "My job has flexible hours, so I can start at ten.", topic: "work" },
    { word: "convenient", meaning: "easy and useful for you; not causing problems", example: "Online banking is very convenient.", topic: "technology" },
    { word: "valuable", meaning: "very useful or important", example: "Free time is valuable when you work long hours.", topic: "everyday" },
    { word: "focused", meaning: "giving all your attention to one thing", example: "I'm more focused in the morning.", topic: "work" },
    { word: "stressed", meaning: "worried and nervous because of problems or too much work", example: "I always feel stressed before exams.", topic: "health" },
    { word: "statement", meaning: "a sentence that says something is true", example: "Do you agree or disagree with this statement?", topic: "education" },
    { word: "support (an opinion)", meaning: "to give reasons or examples that show an opinion is right", example: "Support your opinion with a real example.", topic: "education" },
  ],
  keyPoints: [
    "Give your opinion in the first sentence: I think…, I don't think…, For me,…",
    "Support it: because + one clear reason, then for example + something from your life.",
    "15 seconds = opinion + reason; 30 seconds = add an example; 60 seconds = two reasons and a final sentence.",
    "Answer every part of the question, in the same tense as the question.",
    "Avoid I'm agree, According to me and In my opinion, I think.",
  ],
};

export default lesson;
