import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-complex-arguments",
  title: "Lectures with complex arguments",
  summary:
    "Follow the line of argument in a lecture: separate the views a lecturer reports from the view they hold, trace chains of cause and effect, and recognise concession, rebuttal and evaluation in IELTS Part 4 and TOEFL Academic Talks.",
  skill: "listening",
  level: "C1",
  order: 5,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Listening Part 4" },
    { exam: "toefl", task: "Listening – Academic Talk" },
  ],
  objectives: [
    "Distinguish the views a lecturer reports from the view the lecturer actually holds",
    "Trace a chain of causes and effects, including a vicious circle, and complete a flow chart from it",
    "Recognise concession, rebuttal and evaluation as an argument unfolds",
    "Answer questions about the purpose and organisation of an argument",
  ],
  warmUp: [
    "Think of a problem that people often explain with one simple cause, such as traffic jams or empty shops. Can you think of two other causes that might also play a part?",
    "When a lecturer begins “It's often claimed that…”, do you expect them to agree or disagree? Why?",
  ],
  learn: [
    {
      type: "text",
      title: "An argument has moves, not just points",
      body: "In the first lesson of this course you used signposts to follow the *structure* of a lecture. Now you need to follow the *argument*: what the lecturer is trying to persuade you of, and how each part supports or challenges it.\n\nMost academic arguments are built from a small set of **moves**:\n\n- **Received view**: what is commonly believed (*It's often assumed that…*, *The usual explanation is…*)\n- **Challenge**: the lecturer questions it (*But that doesn't explain why…*)\n- **Evidence**: data, a study or a case (*In one experiment…*)\n- **Concession**: admitting part of another view (*Admittedly…*, *Granted…*, *To be fair…*)\n- **Rebuttal**: showing why the concession does not change the conclusion (*Even so…*, *Be that as it may…*)\n- **Evaluation**: judging explanations or solutions (*The more promising approach…*, *at best a partial answer*)\n\nExam questions often target the gap between a **reported view** and the **lecturer's own view**. If you note down a claim that the lecturer goes on to reject, you will choose the wrong option.",
    },
    {
      type: "table",
      title: "Language that signals each move",
      headers: ["Move", "What you hear", "What to do"],
      rows: [
        ["Received view", "It's widely assumed that…; The usual explanation is…; Many people would say…", "Note it with a question mark: the lecturer may reject it"],
        ["Challenge", "The trouble with that is…; That doesn't explain why…; That's only part of the story", "Expect the lecturer's own view next"],
        ["Cause and effect", "This in turn leads to…; The knock-on effect is…; As a result…; which then…", "Draw an arrow and keep the order"],
        ["Vicious circle", "…which makes the original problem worse; a self-reinforcing cycle", "Draw an arrow back to the start"],
        ["Concession", "Admittedly…; Granted…; To be fair…; There's some truth in…", "Note it, but wait for the rebuttal"],
        ["Rebuttal", "Even so…; Be that as it may…; But it doesn't follow that…", "This is usually the lecturer's position"],
        ["Evaluation", "The more convincing explanation…; at best a partial solution; the evidence is mixed", "Mark it + or −: it is often tested"],
        ["Link, not cause", "is linked to; is associated with; tends to go with", "Do not turn a link into a cause"],
      ],
    },
    {
      type: "example",
      title: "Same facts, different argument",
      items: [
        "“It's often said that remote work reduces productivity. **The data, however, tell a more complicated story.**” → The lecturer is about to **challenge** the received view.",
        "“**Admittedly**, the sample was small. **Even so**, the pattern was the same at every site.” → Concession + rebuttal: the lecturer **trusts** the result.",
        "“High rents are **associated with** shop closures.” → A **link**, not a proven cause. An option saying “High rents cause closures” goes further than the speaker.",
        "“Fewer visitors means less income, **which in turn** means fewer shops, **which** gives people even less reason to visit.” → A **vicious circle**: the last effect feeds back into the first.",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Part 4 flow charts often follow a chain of causes. When you hear *in turn*, *the knock-on effect* or *which then*, move your eyes to the next box: the answer usually comes straight after the link.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Quick check: name the move",
        instructions: "Match each extract from a lecture to the move it makes in the argument. There is one move you do not need.",
        left: [
          "It's commonly assumed that the problem is simply a lack of funding.",
          "Granted, the early results were disappointing.",
          "Be that as it may, the long-term figures are hard to ignore.",
          "And that, in turn, pushes prices even higher, which brings us straight back to where we started.",
          "Of the three proposals, this is by far the most convincing.",
          "The trouble with that explanation is that it can't account for the rural data.",
          "Areas with more parks tend to have lower rates of depression, though we can't yet say why.",
        ],
        right: [
          "evaluating options",
          "making a concession",
          "describing a vicious circle",
          "reporting a link, not a cause",
          "giving an example",
          "reporting a received view",
          "rebutting after a concession",
          "challenging an explanation",
        ],
        answer: [5, 1, 6, 2, 0, 7, 3],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model lecture: traffic jams from nowhere",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Today I want to look at a puzzle that most drivers will recognise. You're on a motorway, the traffic slows to a crawl, and you assume there must be an accident or roadworks ahead. Then, a few minutes later, the traffic speeds up again, and there's nothing there at all. These are sometimes called phantom jams.\n\nThe usual explanation is simply that there are too many cars on the road. And, to be fair, volume does matter. On an empty road, you won't get a jam of any kind. But volume on its own can't explain why a jam forms at one particular point and then moves.\n\nThe more convincing explanation focuses on how drivers react to each other. Imagine one driver brakes slightly, perhaps after being distracted for a moment. The driver behind sees the brake lights and, because reactions are never instant, brakes a little harder. The next driver brakes harder still. So a tiny slowdown is amplified as it passes back along the line, until, some way behind, cars come to a complete stop. And here's the counterintuitive part. The jam itself travels backwards, against the flow of traffic, even though every car in it is moving forwards.\n\nThis isn't just theory. In a well-known experiment in Japan in two thousand and eight, researchers asked about twenty drivers to drive at a steady speed around a circular track. There was no junction and no obstacle. Even so, a stop-and-go wave soon formed.\n\nSo what follows for policy? The intuitive answer is to build more lanes. Admittedly, extra capacity can bring short-term relief. Even so, new road space tends to attract new traffic, so congestion often returns within a few years. A more promising approach, in my view, is to smooth the flow rather than enlarge the road, for example with variable speed limits, which slow everyone down slightly before the waves can form. Some researchers believe that automated vehicles, which keep a steady distance, could eventually have a similar effect, although that remains largely untested on real roads.\n\nSo a jam is not always caused by a single problem at a single point. It can emerge from thousands of small, perfectly reasonable reactions.",
    },
    {
      type: "table",
      title: "How a strong listener follows the argument",
      headers: ["What the lecturer says", "Move", "Note"],
      rows: [
        ["The usual explanation is simply that there are too many cars", "Received view", "too many cars?"],
        ["to be fair, volume does matter", "Concession", "volume matters, partly"],
        ["But volume on its own can't explain…", "Challenge", "not enough on its own"],
        ["The more convincing explanation focuses on…", "Lecturer's view", "drivers' reactions = main cause"],
        ["brakes a little harder… harder still… until… a complete stop", "Causal chain", "small brake → harder → harder → stop"],
        ["the jam itself travels backwards", "Key point, flagged as counterintuitive", "jam moves backwards!"],
        ["In a well-known experiment in Japan…", "Evidence", "circular track, no obstacle → jam anyway"],
        ["Admittedly, extra capacity can bring short-term relief. Even so…", "Concession + rebuttal", "more lanes: short-term only (new traffic)"],
        ["A more promising approach, in my view…", "Evaluation", "+ variable speed limits"],
        ["although that remains largely untested", "Qualification", "automated cars: ? untested"],
      ],
    },
    {
      type: "text",
      title: "What to notice",
      body: "**Two explanations, one position.** The lecturer accepts that traffic volume matters a little, then gives the explanation they find *more convincing*. A question such as “What does the lecturer see as the main cause of phantom jams?” is answered by **the way drivers react to each other**, not by the number of cars.\n\n**The chain has a direction.** *Brakes slightly → brakes harder → brakes harder still → complete stop.* In a flow chart, each link (*the driver behind*, *the next driver*, *until*) moves you one box on.\n\n**Concession + rebuttal = the lecturer's view.** “Admittedly, extra capacity can bring short-term relief. **Even so**… congestion often returns.” The lecturer does **not** recommend building more lanes.\n\n**Evaluation comes in degrees.** *A more promising approach* is positive; *largely untested* is uncertain. An option saying automated vehicles “have been shown to prevent jams” goes beyond what the lecturer said.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice 1: what is really emptying the high street?",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "In today's session on urban economics, I want to examine a claim you'll have heard many times: that town-centre shops are closing because everyone now buys online. It's an attractive explanation, partly because it's simple, and online sales really have grown enormously. But I'd argue that it's at best a partial explanation, and that if we accept it uncritically, we'll draw the wrong conclusions about what to do.\n\nLet's start with the timing. In many towns, the decline of the traditional shopping street began well before online shopping was common. The first blow came from rising car ownership. Once most households had a car, large retail parks on the edge of town became far more convenient than the centre, mainly because parking there was free. Shoppers followed the parking.\n\nWhat happened next is a classic vicious circle. Fewer shoppers in the centre meant lower takings for the shops that remained. Some of those shops closed, and every empty unit made the street a little less attractive, which in turn gave people even less reason to visit. Online retail didn't start this process, in other words. It accelerated a decline that was already under way.\n\nThe second factor is rent. You might expect landlords to cut rents when shops stand empty. Some do. But many buildings are owned by investment funds, and for them, lowering the rent can reduce the value of the property on paper. So a unit may be left empty for years rather than let cheaply. Granted, this is hard to prove for any individual street. Even so, it helps to explain why closures continue in places where demand is recovering.\n\nSo what should be done? The most common proposal is free parking in town centres. I'm sceptical. It treats the centre as a place that must compete with retail parks on their terms, and that's a contest it can't win. A more promising approach is to accept that the centre will no longer be mainly about shopping. Towns that have converted upper floors into flats, or brought in health centres, libraries and small workshops, tend to have busier streets. We can't be sure the conversions caused the recovery, but the pattern is encouraging.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Complete the flow chart and notes",
        instructions: "Complete the notes. Write NO MORE THAN TWO WORDS for each answer.",
        text: "Decline of town-centre shopping streets\n\nLecturer's view: online shopping is at best a {{0}} explanation\n\nThe vicious circle\nrising car {{1}}\n↓\nshoppers go to retail parks with free {{2}}\n↓\nlower {{3}} for the remaining shops\n↓\nmore closures and empty units\n↓\ncentre less attractive, so even fewer visitors\n\nOnline shopping did not start the decline; it {{4}} it.\n\nRent\n- many buildings owned by investment {{5}}\n- lowering the rent may reduce the property's {{6}} on paper\n\nSolutions\n- free town-centre parking: the lecturer is {{7}}\n- more promising: upper floors converted into {{8}}; also health centres, libraries and small {{9}}",
        answers: [
          ["partial"],
          ["ownership"],
          ["parking"],
          ["takings"],
          ["accelerated"],
          ["funds"],
          ["value"],
          ["sceptical", "skeptical"],
          ["flats"],
          ["workshops"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Following the lecturer's argument",
        instructions: "Choose the correct answer. Think about which views the lecturer reports and which the lecturer holds.",
        questions: [
          {
            prompt: "What is the lecturer's main purpose?",
            options: [
              "To show that online shopping has had no effect on town centres",
              "To argue that a popular explanation for the decline is incomplete",
              "To compare shopping habits in towns of different sizes",
            ],
            answer: 1,
            explanation: "“I'd argue that it's at best a partial explanation.” The lecturer accepts that online sales have grown, so the first option goes too far.",
          },
          {
            prompt: "What point does the lecturer make about timing?",
            options: [
              "Shopping streets began to decline before online shopping was common.",
              "Online shopping grew fastest in towns with retail parks.",
              "Shop closures have slowed down in recent years.",
            ],
            answer: 0,
            explanation: "“The decline of the traditional shopping street began well before online shopping was common.”",
          },
          {
            prompt: "Why, according to the lecturer, do some landlords leave units empty?",
            options: [
              "Shopkeepers are unwilling to sign long contracts.",
              "They are planning to turn the buildings into housing.",
              "A lower rent could make the building appear less valuable.",
            ],
            answer: 2,
            explanation: "“Lowering the rent can reduce the value of the property on paper. So a unit may be left empty for years rather than let cheaply.”",
          },
          {
            prompt: "How does the lecturer present the explanation about landlords?",
            options: [
              "As something difficult to prove that still helps to explain the pattern",
              "As something proven by detailed evidence from individual streets",
              "As an idea that most landlords would accept",
            ],
            answer: 0,
            explanation: "Concession + rebuttal: “Granted, this is hard to prove for any individual street. Even so, it helps to explain why closures continue…”",
          },
          {
            prompt: "What does the lecturer say about towns that have added housing and services?",
            options: [
              "They prove that conversions cause a recovery.",
              "They have stopped trying to attract shops.",
              "They show an encouraging link with busier streets.",
            ],
            answer: 2,
            explanation: "“We can't be sure the conversions caused the recovery, but the pattern is encouraging.” This is a link, not a proven cause, so the first option is too strong.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice 2: do open-plan offices bring people together?",
      voice: "us",
      cast: { narrator: "female" },
      transcript:
        "Let's turn to office design. Over the past few decades, many companies have removed walls and private offices and moved staff into open-plan spaces. The reasoning seemed straightforward. If people can see each other, they'll talk more, and if they talk more, they'll share ideas and collaborate.\n\nThe trouble is that when researchers actually measured what happened, they found something close to the opposite. In one study published in two thousand and eighteen, employees at two companies wore sensors that recorded their face-to-face conversations before and after a move to open-plan offices. After the move, face-to-face interaction fell sharply, while emails and instant messages went up.\n\nWhy would removing walls reduce conversation? The researchers' explanation is that people need some privacy. When everyone can see and hear you, you protect yourself by withdrawing, for example by putting on headphones, by sending a message rather than speaking out loud, or even by booking a meeting room just to make a phone call.\n\nNow, I don't want to overstate this. It was a small study, in two companies, and open-plan offices do save money on space, which matters to employers, especially in expensive city-centre buildings. But cost savings aren't the reason most companies give. If the stated goal is collaboration, the evidence suggests the design may be working against it. The more sensible approach, I think, is to give people a choice: quiet areas for focused work, and shared spaces they can use when they actually want to talk.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "TOEFL-style Academic Talk questions",
        instructions: "Listen once, taking notes. Then choose the best answer to each question.",
        questions: [
          {
            prompt: "What is the talk mainly about?",
            options: [
              "Why open-plan offices are cheaper to build than traditional offices",
              "Evidence that open-plan offices may not achieve their main aim",
              "How sensors can be used to measure productivity at work",
              "Why employees prefer email to face-to-face conversation",
            ],
            answer: 1,
            explanation: "The professor contrasts the reasoning (more talk, more collaboration) with the evidence (“something close to the opposite”).",
          },
          {
            prompt: "According to the professor, what happened after the companies moved to open-plan offices?",
            options: [
              "Employees collaborated more but produced less work.",
              "Employees asked to return to their private offices.",
              "Employees spoke to each other less and sent more messages.",
              "Employees stopped wearing headphones at their desks.",
            ],
            answer: 2,
            explanation: "“Face-to-face interaction fell sharply, while emails and instant messages went up.”",
          },
          {
            prompt: "Why does the professor mention headphones?",
            options: [
              "To give an example of how people withdraw when they lack privacy",
              "To suggest a cheap way of making open-plan offices quieter",
              "To explain why the sensors failed to record some conversations",
              "To show that employees were not concentrating on their work",
            ],
            answer: 0,
            explanation: "Headphones are an example within the explanation: “you protect yourself by withdrawing, for example by putting on headphones”.",
          },
          {
            prompt: "What is the professor's view of open-plan offices?",
            options: [
              "They should be abandoned completely because they waste money.",
              "Companies mainly say they use them to save money.",
              "The evidence against them clearly applies to all companies.",
              "They may not suit collaboration, so staff need a choice of spaces.",
            ],
            answer: 3,
            explanation: "After the concession (“a small study… do save money”) comes the rebuttal: “If the stated goal is collaboration, the evidence suggests the design may be working against it.” The professor recommends “a choice”. The second option contradicts “cost savings aren't the reason most companies give”.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "order",
        title: "Rebuild the line of argument",
        instructions: "Put the moves of the open-plan talk in the order the professor makes them.",
        mode: "lines",
        items: [
          "The reasoning behind the design: if people can see each other, they will talk and collaborate more.",
          "The challenge: when it was measured, the result was close to the opposite.",
          "Evidence: sensors showed face-to-face interaction fell while messages rose.",
          "An explanation: people withdraw when they have no privacy.",
          "A concession: the study was small, and open-plan offices do save money.",
          "A rebuttal and recommendation: if the goal is collaboration, offer a choice of spaces.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Before a Part 4 flow chart, read the boxes and ask what links them: a cause, a result or a response. Then expect each answer to come just after a link such as *which in turn*, *as a result* or *the knock-on effect is*.",
    },
    {
      exam: "ielts",
      body: "Part 4 multiple-choice questions often ask what the lecturer *thinks* or *suggests*. A view the lecturer reports and then rejects (*It's often claimed…*, *The usual explanation…*) makes a very convincing wrong option, so check whose view each option describes.",
    },
    {
      exam: "toefl",
      body: "Academic Talk questions cover main ideas, details, organisation and inference. For *Why does the professor mention…?* questions, ask which move the detail serves: evidence, example, concession or explanation.",
    },
    {
      exam: "toefl",
      body: "Listen closely to qualifications near the end of a talk (*I don't want to overstate this*, *it was a small study*). Inference questions usually reward the option that matches the professor's level of certainty, not a stronger version of it.",
    },
  ],
  vocabulary: [
    { word: "conventional wisdom", meaning: "the opinion that most people accept without questioning it", example: "The lecture challenged the conventional wisdom that more roads mean less traffic.", topic: "academic" },
    { word: "counterintuitive", meaning: "different from what you would naturally expect", example: "It's counterintuitive, but the jam moves backwards while the cars move forwards.", topic: "academic" },
    { word: "amplify", meaning: "to make something larger or stronger", example: "Each driver's reaction amplifies the original slowdown.", topic: "science" },
    { word: "vicious circle", meaning: "a situation in which one problem causes another, which then makes the first problem worse", example: "Empty shops reduce footfall, which closes more shops: a vicious circle.", topic: "business" },
    { word: "knock-on effect", meaning: "an indirect result of something that happened earlier", example: "The road closure had a knock-on effect on local businesses.", topic: "business" },
    { word: "accelerate", meaning: "to make a process happen faster", example: "Online retail accelerated a decline that had already started.", topic: "business" },
    { word: "granted", meaning: "used to admit that something is true before making a different point", example: "Granted, the evidence is limited. Even so, the trend is clear.", topic: "academic" },
    { word: "be that as it may", meaning: "although that may be true, it does not change my view", example: "The scheme is expensive. Be that as it may, it works.", topic: "academic" },
    { word: "at best", meaning: "even when judged in the most positive way", example: "Free parking is at best a short-term fix.", topic: "academic" },
    { word: "uncritically", meaning: "without thinking carefully about whether something is true", example: "Students sometimes accept headlines uncritically.", topic: "academic" },
    { word: "withdraw", meaning: "to become quieter and avoid contact with other people", example: "Without privacy, some employees withdraw and stop chatting.", topic: "work" },
  ],
  keyPoints: [
    "Separate the views a lecturer reports (*It's often assumed…*) from the view the lecturer holds (*The more convincing explanation…*).",
    "After a concession (*admittedly*, *granted*, *to be fair*), the rebuttal (*even so*, *be that as it may*) usually carries the lecturer's position.",
    "Follow causal chains link by link: *in turn*, *which then* and *knock-on effect* move you to the next step, and a return to the starting problem signals a vicious circle.",
    "Do not turn a link (*associated with*, *tend to have*) into a proven cause.",
    "Match the lecturer's level of certainty: *promising*, *largely untested* and *hard to prove* are not the same as *proven*.",
  ],
};

export default lesson;
