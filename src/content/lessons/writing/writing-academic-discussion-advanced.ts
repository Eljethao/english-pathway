import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-academic-discussion-advanced",
  title: "Academic discussion: top-score responses",
  summary:
    "Move from a solid TOEFL Academic Discussion post to a top-level one: take a precise, qualified position, engage critically with a classmate's reasoning, elaborate one idea in depth, and express it concisely with precise, idiomatic language in 10 minutes.",
  skill: "writing",
  level: "C1",
  order: 10,
  minutes: 25,
  exams: [{ exam: "toefl", task: "Writing – Academic Discussion" }],
  objectives: [
    "Take a clear but qualified position in the first sentence",
    "Engage critically with a classmate by identifying an assumption or limit in their reasoning, not just agreeing or disagreeing",
    "Develop one central idea through a chain of claim, mechanism, illustration and implication",
    "Use precise, idiomatic vocabulary and varied syntax concisely within 10 minutes",
  ],
  warmUp: [
    "Think of a discussion where someone changed your mind. Was it a fact, an example or a new way of seeing the issue?",
    "What is the difference between disagreeing with a person's conclusion and questioning their reasoning?",
  ],
  learn: [
    {
      type: "text",
      title: "What separates a good post from a top post",
      body: "In TOEFL **Writing – Academic Discussion** you have 10 minutes to read a professor's question and two classmates' posts and write your own contribution (at least 100 words is recommended). The B2 lesson taught a reliable plan: opinion, link to a classmate, a new reason with an example, and a wrap-up.\n\nETS's scoring guide for this task rewards a contribution that is **relevant and very clearly expressed**, with **well-elaborated** explanations or examples, a **variety of sentence structures**, **precise, idiomatic word choice** and very few errors. In practice, posts at the top level tend to differ from good ones in four ways:\n\n1. **A precise position**, often with a condition or limit, rather than a simple *yes* or *no*.\n2. **Critical engagement**: they examine *why* a classmate thinks something, not only *what* they think.\n3. **Depth over breadth**: one idea developed fully rather than three ideas mentioned.\n4. **Concise, precise language**: every sentence moves the argument forward.",
    },
    {
      type: "table",
      title: "From good to top level",
      headers: ["Feature", "Good post", "Top-level post"],
      rows: [
        ["Position", "I agree that lectures should be recorded.", "I'd support recording lectures, but only if universities rethink what happens in the lecture hall."],
        ["Engaging with a classmate", "I disagree with Daniel because recordings are useful.", "Daniel's concern assumes that attendance is valuable in itself, yet…"],
        ["Support", "Recordings help students. For example, they can watch them again.", "A claim, how it works, a concrete case and what follows from it (see the chain below)."],
        ["Language", "This is a very good and important thing for students.", "Recordings remove a barrier for working students without devaluing face-to-face teaching."],
      ],
    },
    {
      type: "text",
      title: "Engaging critically: four moves",
      body: "- **Identify an assumption**: *Kofi's argument assumes that trust alone will change behaviour.*\n- **Set a limit**: *Elena's point holds for large firms, but far less so for small teams.*\n- **Reframe the issue**: *The real question, then, is not whether…, but whether…*\n- **Combine two views**: *Priya's point about working students actually answers Daniel's concern, provided that…*\n\nAlways stay respectful and specific. You are evaluating an idea, not the person.",
    },
    {
      type: "table",
      title: "The elaboration chain",
      headers: ["Step", "Question it answers", "Example language"],
      rows: [
        ["Claim", "What do you think?", "The value of such a course lies less in… than in…"],
        ["Mechanism", "How or why does it work?", "…because… / This works by… / which in turn…"],
        ["Illustration", "Where can we see it?", "In my own department, … / A friend's company did exactly this…"],
        ["Implication", "So what follows?", "In other words, … / This suggests that… / The lesson is that…"],
      ],
    },
    {
      type: "tip",
      exam: "toefl",
      body: "Avoid generic openers such as *This is a very interesting question* and long summaries of both posts. Raters have already read them. Your first sentence should state your position, and a short reference to a classmate can come in the same sentence or the next.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: which is stronger?",
        questions: [
          {
            prompt: "A classmate argues that homework should be banned because students are too tired. Which response engages most critically with this argument?",
            options: [
              "I completely agree with Lina. Homework is bad.",
              "Lina is wrong. Homework is important.",
              "Lina's argument assumes that tiredness is caused by homework itself, when the real issue may be how much is set and whether it has a clear purpose.",
              "Lina makes a very interesting point that many people would agree with.",
            ],
            answer: 2,
            explanation: "It identifies an assumption in Lina's reasoning and reframes the issue, which moves the discussion forward. The other options only agree, disagree or praise.",
          },
          {
            prompt: "Which first sentence is the best example of a precise, qualified position?",
            options: [
              "There are many advantages and disadvantages to this issue.",
              "Yes, I think so.",
              "I'd support a four-day week for office staff, but only if output, not hours, becomes the measure of performance.",
              "In this post, I will give my opinion about the four-day week.",
            ],
            answer: 2,
            explanation: "It takes a clear side and states the condition under which it holds. A and D give no position; B gives no content.",
          },
          {
            prompt: "Which sentence explains the mechanism behind a claim, rather than just repeating it?",
            options: [
              "Group projects are useful because they are helpful.",
              "Group projects are very important for students.",
              "Group projects force students to negotiate deadlines and divide tasks, which builds the kind of coordination that individual assignments never require.",
              "Group projects are something every student has done.",
            ],
            answer: 2,
            explanation: "It shows *how* the benefit happens (negotiating, dividing tasks) and what skill results. The first is circular; the others are general statements.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "passage",
      title: "Discussion board: Higher education",
      paragraphs: [
        "Dr Benson: Some universities now record every lecture and post it online. Supporters say this helps students review difficult material at their own pace. Critics argue that it reduces attendance and the kind of discussion that only happens in a live class. Should universities record all lectures? Why or why not?",
        "Priya: I think they should. Many students have part-time jobs or caring responsibilities, so they can't always attend. Recordings also help when a topic is difficult, because you can pause and rewatch the parts you didn't understand.",
        "Daniel: I disagree. If every lecture is online, a lot of students will simply stop coming. Then there's no one to ask questions or take part in discussion, and the lecture becomes less useful even for the people who do attend.",
      ],
    },
    {
      type: "passage",
      title: "Model response (top level)",
      paragraphs: [
        "I'd support recording lectures, but only if universities rethink what happens in the lecture hall. Daniel's concern assumes that attendance is valuable in itself, yet a student who sits passively through a fifty-minute monologue gains little that a recording could not provide. The real issue, then, is not whether lectures are recorded but whether live sessions offer something a video cannot. In my own department, one professor posts her lectures online in advance and uses class time for problem-solving in small groups. Attendance has stayed high, because students know that the live session is where they test their understanding and get immediate feedback. Priya's point about working students reinforces this: recordings remove a barrier for them without devaluing face-to-face teaching, provided that the in-person time is genuinely interactive. Admittedly, simply uploading videos while leaving teaching unchanged would confirm Daniel's fears. Recording, in other words, should be a trigger for better teaching, not a substitute for it.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **Qualified position in sentence one**: *I'd support…, but only if…* The reader knows the stance and its condition immediately.\n- **Critical engagement**: the writer does not simply reject Daniel's view but identifies his **assumption** (*attendance is valuable in itself*) and **reframes** the issue (*The real issue, then, is not whether… but whether…*).\n- **One idea, fully elaborated**: claim (live time must add value) → mechanism (students attend where they get feedback) → illustration (the professor who flips her classes) → implication (*a trigger for better teaching, not a substitute*).\n- **Both classmates integrated**: Priya's point is used to *support* the argument, with a condition (*provided that…*).\n- **A brief concession**: *Admittedly…* shows the writer has considered when the policy would fail.\n- **Precise, idiomatic language and varied syntax**: *a fifty-minute monologue*, *remove a barrier*, *devaluing*, a reduced relative clause, *provided that*, and a closing contrast (*a trigger…, not a substitute…*).\n\nLength: about 155 words. That is achievable in 10 minutes only if you plan one central idea and do not try to cover everything.",
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Discussion board: Management",
      paragraphs: [
        "Professor Grant: Some companies have introduced unlimited paid holiday: employees can take as much time off as they like, as long as their work gets done. Is this a policy that more companies should adopt? Why or why not?",
        "Kofi: Yes. It shows that the company trusts its staff, and people who feel trusted work harder. It also means employees can take time off when they really need it, not just when the rules allow.",
        "Elena: I'm sceptical. Without a fixed number of days, many employees feel guilty about taking a holiday at all. I've read that at some companies with this policy, people actually take less time off than before.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Name the move",
        instructions: "These sentences respond to the Management board above. Match each sentence with the move it makes. There is one extra move.",
        left: [
          "Unlimited leave can work, but only in companies where managers visibly take their own holidays.",
          "Kofi assumes that trust alone will encourage people to rest.",
          "Employees copy what senior staff do, so when managers never switch off, others read that silence as an expectation.",
          "A friend's software company found that holiday use rose only after the directors started announcing their own breaks.",
          "In other words, the policy succeeds or fails on culture, not on the wording of the contract.",
        ],
        right: [
          "Summarising both classmates' posts",
          "Implication",
          "Concrete illustration",
          "Qualified position",
          "Identifying an assumption",
          "Mechanism",
        ],
        answer: [3, 4, 5, 2, 1],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Precise and idiomatic language",
        instructions: "Complete the sentences with words or phrases from the box. There are two extra items.",
        text: "1. The success of unlimited leave {{0}} whether managers set an example by taking time off themselves.\n2. Elena's point is valid, but it {{1}} the fact that fixed allowances can also be left unused.\n3. There is a clear {{2}} between flexibility and certainty: the more freedom employees have, the less guidance they get.\n4. A policy designed to reduce stress could become {{3}} if staff feel they must justify every day off.\n5. Flexibility should not come {{4}} employees' right to a proper rest.\n6. The evidence is {{5}} conclusive, since most companies have not published data on holiday use.",
        answers: [
          ["hinges on", "depends on"],
          ["overlooks", "ignores"],
          ["trade-off", "tradeoff", "trade off", "tension"],
          ["counterproductive", "counter-productive"],
          ["at the expense of"],
          ["far from"],
        ],
        wordBank: ["hinges on", "overlooks", "trade-off", "counterproductive", "at the expense of", "far from", "in the long run", "outweighs"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "order",
        mode: "lines",
        title: "Build a top-level post",
        instructions: "Put the sentences of this response to Professor Grant's question in the most logical order.",
        items: [
          "Elena has identified the real weakness of unlimited leave, but I think the problem lies in how the policy is implemented rather than in the idea itself.",
          "Kofi assumes that trust alone will encourage people to rest, yet in a workplace where managers never take holidays, employees will read that silence as an expectation.",
          "What is missing is a clear minimum: a company could offer unlimited leave while requiring everyone to take, say, four weeks a year.",
          "A friend's software company did exactly this after noticing that staff were exhausted, and within a year both holiday use and staff retention had risen.",
          "In other words, flexibility only benefits employees when it is backed by a floor they cannot fall below.",
        ],
      },
    },
    {
      type: "passage",
      title: "Discussion board: Communication studies",
      paragraphs: [
        "Dr Osei: Some universities now require every student to take a course in public speaking, whatever their major. Is this a good requirement? Why or why not?",
        "Hana: I think it's a great idea. Almost every career involves presenting ideas to other people, whether it's a job interview, a meeting with clients or a team update.",
        "Marcus: I don't agree. Many students suffer from serious anxiety about speaking in public, and a compulsory course could make that worse. It also takes up credits that students could use for courses in their own major.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: Academic Discussion (10 minutes)",
        instructions: "Set a timer for 10 minutes: 2 minutes to choose your position and one central idea, 7 to write and 1 to check.",
        prompt:
          "Read Dr Osei's question and the posts by Hana and Marcus in “Discussion board: Communication studies” above. Write a post that responds to the professor's question. Express and support your opinion and make a contribution to the discussion. An effective response will contain at least 100 words.",
        minWords: 100,
        minutes: 10,
        rubric: [
          "Position: my first sentence states a clear, precise position, with a condition or limit if appropriate.",
          "Critical engagement: I examined a classmate's reasoning (an assumption, a limit or a reframing), not just their conclusion, and stayed respectful.",
          "Elaboration: I developed one central idea in depth, through a mechanism, a concrete illustration and an implication.",
          "Contribution: my post adds something that neither Hana nor Marcus said.",
          "Language: my word choice is precise and idiomatic, and I used a variety of structures (concessive clauses, relative clauses, provided that, cleft or contrastive sentences) naturally.",
          "Accuracy and concision: there are almost no errors, and every sentence moves the argument forward; I did not summarise the posts at length.",
          "Length and time: at least 100 words, written in about 10 minutes.",
        ],
        modelAnswer:
          "I'd argue that the requirement makes sense, although Marcus is right that the course must be designed with anxious students in mind. The value of such a course lies less in delivering polished speeches than in learning to organise an argument for a listener, a skill that transfers to job interviews, seminar discussions and even written reports. Hana touches on this when she mentions careers, but the benefit begins much earlier: students who have practised structuring a five-minute talk usually contribute more confidently in seminars, which in turn deepens their learning in their own major. As for anxiety, avoiding public speaking rarely reduces fear; carefully graded practice usually does. A course that begins with short talks to small groups, and rewards improvement rather than flawless delivery, would address Marcus's concern without abandoning the goal. Universities would simply need to treat the course as training rather than as a test of natural talent.",
      },
    },
  ],
  examTips: [
    {
      exam: "toefl",
      body: "In the Academic Discussion, give a clear opinion in the first sentence, add a new reason and refer to one of the classmates' posts. At the top level, “refer to” means engaging with their reasoning: name an assumption, set a limit, or show how their point supports yours.",
    },
    {
      exam: "toefl",
      body: "ETS recommends at least 100 words. Beyond that, depth matters more than length: a focused post that develops one idea through mechanism, example and implication is stronger than a long list of reasons.",
    },
    {
      exam: "toefl",
      body: "The scoring guide allows for the kind of minor slip a competent writer might make under time pressure, but not frequent errors. Use the last minute to check agreement, articles and any complex sentence you are unsure of, and simplify rather than risk an error that obscures your meaning.",
    },
  ],
  vocabulary: [
    { word: "qualified (position)", meaning: "limited by a condition; not complete or absolute", example: "She gave qualified support to the plan, provided that costs were controlled.", level: "C1", topic: "academic" },
    { word: "assumption", meaning: "something that is accepted as true without proof", example: "His argument rests on the assumption that attendance equals learning.", topic: "academic" },
    { word: "reframe", meaning: "to present an issue in a different way so that it is seen differently", example: "She reframed the debate as a question of teaching quality.", topic: "academic" },
    { word: "hinge on", meaning: "to depend completely on", example: "The policy's success hinges on management culture.", topic: "academic" },
    { word: "trade-off", meaning: "a balance between two things you cannot have fully at the same time", example: "There is a trade-off between flexibility and certainty.", topic: "business" },
    { word: "counterproductive", meaning: "having the opposite effect to the one intended", example: "Forcing nervous students to speak at once could be counterproductive.", topic: "academic" },
    { word: "at the expense of", meaning: "causing harm or loss to something else", example: "Flexibility should not come at the expense of rest.", topic: "work" },
    { word: "reinforce", meaning: "to make an idea or argument stronger", example: "Her example reinforces the point about working students.", topic: "academic" },
    { word: "retention", meaning: "the ability of an organisation to keep its employees", example: "Staff retention improved after the policy change.", topic: "business" },
    { word: "devalue", meaning: "to make something seem less important or worth less", example: "Online recordings need not devalue live teaching.", topic: "education" },
    { word: "transferable", meaning: "useful in many different situations or jobs", example: "Public speaking is a highly transferable skill.", topic: "work" },
  ],
  keyPoints: [
    "Open with a precise position, qualified by a condition if that reflects your real view.",
    "Engage with a classmate's reasoning: identify an assumption, set a limit, reframe the issue or combine two views.",
    "Develop one central idea through a chain: claim, mechanism, illustration, implication.",
    "Every sentence should move the argument forward: no generic openers or long summaries of the posts.",
    "Precise, idiomatic vocabulary and varied structures matter, but accuracy and clarity come first.",
  ],
};

export default lesson;
