import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-abstract-discussion",
  title: "Abstract discussion",
  summary:
    "Move from personal experience to ideas about society: develop IELTS Part 3 answers that generalise, weigh up different perspectives and explore causes and consequences.",
  skill: "speaking",
  level: "C1",
  order: 1,
  minutes: 20,
  exams: [{ exam: "ielts", task: "Speaking Part 3" }],
  objectives: [
    "Recognise the main types of IELTS Part 3 question and what each one asks you to do",
    "Shift an answer from personal anecdote to general, societal level",
    "Develop a 45–60 second answer with a point, an explanation, an implication and a qualification",
    "Use abstract nouns and generalising language accurately",
  ],
  warmUp: [
    "Why do you think people today change jobs more often than their grandparents did? Try to give two different causes.",
    "Is it possible to answer “Is technology making us less sociable?” with a simple yes or no? Why not?",
  ],
  learn: [
    {
      type: "text",
      title: "What changes in Part 3",
      body: "In Part 1 and Part 2 you talk about **yourself**. In Part 3 the examiner takes the Part 2 topic and asks about **people, society and ideas**. If your Part 2 topic was a teacher who influenced you, Part 3 might ask why some countries respect teachers more than others, or whether online learning will replace schools.\n\nThe examiner is now testing whether you can handle **abstract ideas**: explain causes, compare, evaluate and predict. Answers that never move beyond “In my case…” give the examiner little evidence of the language needed for band 7 and above (explaining, comparing, speculating), even when the English is accurate.\n\nThree habits make the biggest difference:\n\n1. **Zoom out.** Start with the general picture (*people*, *society*, *younger generations*, *governments*), and use your own life only as a brief illustration.\n2. **See more than one side.** Most Part 3 questions have no single right answer. Show that the answer *depends on* something: age, income, country, type of job.\n3. **Develop, don't list.** One idea explained in depth, with its consequences, is better than four ideas mentioned in passing.",
    },
    {
      type: "table",
      title: "Common Part 3 question types",
      headers: ["Type", "Example question", "Useful moves"],
      rows: [
        ["Cause / reason", "Why do so many young people want to work in the tech industry?", "One major factor is… / This is largely down to… / Another driving force is…"],
        ["Compare (past–present, groups)", "How has the way families spend time together changed?", "Whereas a generation ago…, nowadays… / There's been a marked shift towards…"],
        ["Evaluate (advantages / disadvantages)", "Is it a good thing that people can work from anywhere?", "On the plus side… / The downside, though, is… / On balance, I'd say…"],
        ["Predict", "Do you think cash will disappear completely?", "In the long run… / I can see a time when… / It's hard to imagine… ever…"],
        ["Solution / responsibility", "Who should be responsible for reducing food waste?", "The onus should really be on… / It can't just be left to… / A combination of… would…"],
      ],
    },
    {
      type: "text",
      title: "Developing an answer: P-E-I-Q",
      body: "A useful shape for a 45–60 second answer:\n\n- **Point**: a direct answer to the question.\n- **Explain**: why, or how it works.\n- **Implication / illustration**: what follows from it, or a concrete case (from society, the news, or briefly your own experience).\n- **Qualify**: a limit or an exception (*That said, this probably applies more to cities than rural areas.*).\n\nThe qualification is what makes an answer sound genuinely thoughtful. It shows you understand that real issues are complex.",
    },
    {
      type: "example",
      title: "From personal to abstract",
      items: [
        "Personal: “I don't read newspapers. I read news on my phone.”",
        "Abstract: “**There's been a marked shift away from** printed newspapers, **particularly among younger people**, who tend to get their news from social media feeds instead.”",
        "Personal: “My parents didn't let me play video games.”",
        "Abstract: “**Attitudes towards** gaming **vary enormously from one household to another**. Some parents see it as a waste of time, whereas others recognise that it can develop problem-solving skills.”",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "What is the question asking you to do?",
        instructions: "Match each Part 3 question to its type. One type is not used.",
        left: [
          "Why do you think fewer people cook meals from scratch these days?",
          "In what ways is shopping different now compared with twenty years ago?",
          "Do you think libraries will still exist in fifty years' time?",
          "Should governments or individuals be responsible for keeping cities clean?",
          "What are the drawbacks of children having a very busy timetable of after-school activities?",
        ],
        right: ["predict", "describe a personal experience", "evaluate", "compare past and present", "cause / reason", "solution / responsibility"],
        answer: [4, 3, 0, 5, 2],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model answers: Part 3 on the topic of “Work”",
      voice: "uk",
      cast: { Examiner: "female", Candidate: "male" },
      transcript:
        "Examiner: Why do you think people today change jobs more often than in the past?\nCandidate: I think there are a few forces at work here. The most obvious one is that the idea of a job for life has more or less disappeared. Companies restructure far more often than they used to, so people have learnt that loyalty isn't necessarily rewarded, and they feel they have to look after their own careers. On top of that, there's been a real shift in what people expect from work. Previous generations were often content with security, whereas younger people tend to want meaning, flexibility, a sense of progress. If a job doesn't offer that, they'll move on. That said, I suspect this varies a lot by sector. In fields like teaching or medicine, people still often stay in one profession for decades.\nExaminer: Is that a positive development?\nCandidate: On balance, I'd say it's more positive than negative, but it's a double-edged sword. On the plus side, moving between roles exposes people to different ways of working, which probably makes them more adaptable and, frankly, more employable. The downside is that it can be quite unsettling. If you're constantly changing, it's harder to build deep expertise, and for employers, high staff turnover is expensive. So I think the ideal is somewhere in the middle: enough movement to keep learning, but enough stability to actually get good at something.",
    },
    {
      type: "text",
      title: "How a strong speaker does it",
      body: "**Answer 1 (cause question)**\n\n- **Point:** “There are a few forces at work here.” A brief signpost, then straight into the first cause.\n- **Explain:** restructuring → loyalty not rewarded → people manage their own careers. One cause, developed in a chain.\n- **Second cause, compared:** “Previous generations… *whereas* younger people tend to…” This turns a cause into a comparison of generations.\n- **Qualify:** “That said, I suspect this varies a lot by sector.” The answer acknowledges that the generalisation doesn't fit everyone.\n\n**Answer 2 (evaluate question)**\n\n- **Clear overall position** first: “On balance… more positive than negative.”\n- **Both sides**, signposted: “On the plus side… The downside is…”, and from two perspectives (workers *and* employers).\n- **Synthesis:** “the ideal is somewhere in the middle” is a conclusion that goes beyond simply listing pros and cons.\n\nNotice that there is no personal story at all. The answers stay at the level of people and society, using abstract nouns: *loyalty*, *security*, *expertise*, *turnover*, *stability*.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Which answer is stronger?",
        questions: [
          {
            prompt: "Question: “Why are cities becoming more crowded?” Which opening sounds most like a band 7+ Part 3 answer?",
            options: [
              "My city is very crowded. Yesterday the bus was so full I couldn't get on.",
              "Largely because that's where the jobs are. Economic opportunities are increasingly concentrated in urban areas, so people from rural regions feel they have little choice but to move.",
              "There are many reasons. Jobs, schools, hospitals, shopping, entertainment and transport.",
            ],
            answer: 1,
            explanation: "It answers directly, then explains at a societal level. Option A is a personal anecdote; option C is a list with no development.",
          },
          {
            prompt: "Which sentence is the best example of qualifying a generalisation?",
            options: [
              "Everyone prefers shopping online nowadays.",
              "Online shopping is popular, and it is convenient, and it is cheap.",
              "Online shopping has certainly taken off, although older people in particular still seem to value being able to see and touch products.",
            ],
            answer: 2,
            explanation: "The *although…* clause limits the generalisation to show an exception. Option A overgeneralises (*everyone*).",
          },
          {
            prompt: "The examiner asks: “Will people still travel abroad for holidays in the future?” What is the best way to start?",
            options: [
              "Give a clear prediction, then explain the factors that might change it.",
              "Describe your last holiday in detail.",
              "Say “I don't know, it's hard to say” and wait for the next question.",
            ],
            answer: 0,
            explanation: "Prediction questions need a position (even a cautious one) plus reasoning. “I don't know” on its own gives the examiner nothing to assess.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Generalising language",
        instructions: "Complete the Part 3 answer with words from the box. Each word is used once.",
        text:
          "Question: Has the internet changed the way people make friends?\n\nOh, enormously. There's been a marked {{0}} towards meeting people online, through gaming, interest groups and so on. That's true across all age groups, but {{1}} among teenagers. A generation ago, friendships were {{2}} down to where you happened to live or go to school. Now, people can find others who share even very niche interests, which I think is broadly positive. That {{3}}, there's a risk that these friendships stay fairly shallow. It's one thing to chat to someone online; it's {{4}} another to support them through a difficult time. So I'd say the internet has widened people's social circles, but that doesn't {{5}} mean it has deepened them.",
        answers: [["shift"], ["particularly"], ["largely"], ["said"], ["quite"], ["necessarily"]],
        wordBank: ["shift", "particularly", "largely", "said", "quite", "necessarily"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "IELTS Part 3: cause and comparison",
        instructions: "There is no preparation time in Part 3. Answer as if the examiner has just asked you. Aim for 45–60 seconds and use P-E-I-Q.",
        prompt: "Topic: Learning. Why do you think some adults go back to education later in life? Is this more common now than it used to be?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "I'd say the main driving force is that the job market changes so quickly now. A qualification from your twenties can go out of date surprisingly fast, so people have to retrain to stay employable. There's also a more personal side to it. Some people go back because they missed out the first time, perhaps because they had to start earning young. And yes, it's far more common than it was. A generation ago, education was something you finished before you started work, whereas now, with online courses and part-time degrees, it's much easier to fit studying around a job or a family. That said, I suspect it's still easier for people with money and time to spare. For someone working two jobs, it's much more of a luxury.",
        targetPhrases: ["the main driving force", "far more common", "whereas", "that said", "I suspect"],
        checklist: [
          "I answered both parts of the question (why, and is it more common).",
          "I talked about people in general, not only about myself.",
          "I explained at least one cause in depth rather than listing several.",
          "I compared the past and the present using a linking word such as “whereas”.",
          "I qualified my answer with a limit or exception (“That said…”).",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "IELTS Part 3: evaluate and predict",
        instructions: "No preparation. Give an overall view, discuss both sides and end with a prediction. Aim for 45–60 seconds.",
        prompt: "Topic: Learning. Some people say that artificial intelligence will make teachers unnecessary. How far do you agree? How might schools change in the next twenty years?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "I don't really buy the idea that teachers will become unnecessary. AI is already very good at explaining facts and giving instant feedback, and in that sense it could take over a lot of the routine work, like marking or setting practice exercises. But teaching isn't just about passing on information. A good teacher notices when a student is struggling, motivates them, and teaches them to work with others, and I can't see a machine replacing that kind of human judgement any time soon. As for how schools will change, my guess is that the teacher's role will shift towards mentoring and coaching. Students might spend part of the day working at their own pace with AI tools, then come together for discussion and projects. So, less lecturing, and more guiding.",
        targetPhrases: ["I don't really buy", "in that sense", "any time soon", "my guess is", "shift towards"],
        checklist: [
          "I gave a clear overall position on the first question.",
          "I showed both sides: what AI can do and what it cannot.",
          "I made a specific prediction about schools, not just “things will change”.",
          "I used abstract nouns such as judgement, feedback or role.",
          "I ended with a short summary of my view.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Part 3 lasts about four to five minutes, and the examiner may interrupt you to move on. That's normal and not a bad sign. Answer the question directly in your first sentence, so even a shortened answer has a clear point.",
    },
    {
      exam: "ielts",
      body: "If you have no idea about a topic, say so honestly and then reason it out: “I've never really thought about that, but I imagine it's partly because…”. The examiner is assessing your language, not your knowledge, so speculating aloud is perfectly acceptable.",
    },
  ],
  vocabulary: [
    { word: "driving force", meaning: "the main thing that causes something to happen or develop", example: "Cost is the driving force behind the move to online shopping.", topic: "society" },
    { word: "a marked shift", meaning: "a clear, noticeable change in direction", example: "There's been a marked shift towards remote working.", topic: "society" },
    { word: "a job for life", meaning: "a job you expect to keep until you retire", example: "The idea of a job for life is disappearing.", topic: "work" },
    { word: "restructure", meaning: "to organise a company or system in a new way", example: "The firm restructured and cut two hundred jobs.", topic: "business" },
    { word: "staff turnover", meaning: "the rate at which employees leave and are replaced", example: "High staff turnover is costly for small businesses.", topic: "work" },
    { word: "employable", meaning: "having the skills and qualities that employers want", example: "Work experience makes graduates more employable.", topic: "work" },
    { word: "retrain", meaning: "to learn new skills so you can do a different job", example: "Many factory workers had to retrain as technicians.", topic: "education" },
    { word: "on balance", meaning: "after considering all the facts and arguments", example: "On balance, I think the change has been positive.", topic: "academic" },
    { word: "a double-edged sword", meaning: "something with both advantages and disadvantages", example: "Social media is a double-edged sword for young people.", topic: "society" },
    { word: "the onus is on", meaning: "it is the responsibility of", example: "The onus is on manufacturers to reduce packaging.", topic: "society" },
    { word: "niche", meaning: "interesting to or aimed at only a small group of people", example: "Online forums connect people with niche hobbies.", topic: "society" },
  ],
  keyPoints: [
    "Part 3 is about society and ideas, not your personal life: zoom out.",
    "Identify the question type (cause, compare, evaluate, predict, solution) and answer that exact question.",
    "Develop answers with P-E-I-Q: Point, Explain, Implication, Qualify.",
    "Showing that “it depends” on age, place or sector makes an answer sound thoughtful.",
    "Use abstract nouns and generalising language, but avoid sweeping claims like “everyone” or “always”.",
  ],
};

export default lesson;
