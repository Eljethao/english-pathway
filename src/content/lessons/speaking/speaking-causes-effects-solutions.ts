import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-causes-effects-solutions",
  title: "Causes, effects and solutions",
  summary:
    "Explain why problems happen, trace their knock-on effects and propose realistic solutions, using precise cause–effect language for IELTS Part 3 and the TOEIC Express an opinion task.",
  skill: "speaking",
  level: "C1",
  order: 6,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Speaking Part 3" },
    { exam: "toeic", task: "Speaking – Express an opinion" },
  ],
  objectives: [
    "Distinguish a root cause from a trigger, and short-term from long-term effects",
    "Build cause–effect chains with accurate verbs and prepositions (stem from, result in, give rise to, a knock-on effect)",
    "Propose a solution and test how realistic it is, rather than listing ideas",
    "Recommend one option in a 60-second TOEIC opinion answer with clear reasons",
  ],
  warmUp: [
    "Why do so many young adults still live with their parents? Think of one economic cause and one social cause.",
    "What is the difference between a solution that treats a symptom and one that tackles the root cause?",
  ],
  learn: [
    {
      type: "text",
      title: "Beyond “one reason is…”",
      body: "In *Abstract discussion* you met cause and solution questions and some useful openers (*One major factor is…*, *The onus should be on…*). This lesson goes deeper. A C1 answer explains **how causes connect**, **what the effects lead to**, and **whether a solution would actually work**.\n\n- **Chains, not lists.** Rents rise → people spend more of their income on housing → they save less → they buy a home later, if at all. Link the steps with *which in turn*, *and that means*, *as a knock-on effect*.\n- **Root cause or trigger?** A trigger is the event that sets something off; the root cause is the deeper reason it happened. *The heatwave triggered the water shortage, but the root cause is decades of under-investment in pipes.*\n- **Short term or long term?** *In the short term… but over time…*\n- **Solutions with a reality check.** Propose one, say who would do it, and test it: *That would go a long way towards…, although it wouldn't solve…*\n\nTry not to rely on *cause* and *make* for every link. Precise verbs show the direction and the strength of the connection.",
    },
    {
      type: "table",
      title: "Cause and effect: verbs and prepositions",
      headers: ["Pattern", "Direction", "Example"],
      rows: [
        ["X results in / leads to / gives rise to Y", "cause → effect", "Longer commutes result in less time for exercise."],
        ["Y results from / stems from / arises from X", "effect ← cause", "Much of the stress stems from job insecurity."],
        ["Y is the result of X", "effect ← cause", "The shortage is the result of years of under-investment."],
        ["Y is fuelled by / driven by X", "effect ← cause (often growth)", "The boom has been fuelled by cheap loans."],
        ["X contributes to Y", "one of several causes → effect", "Screen use late at night contributes to poor sleep."],
        ["X has a knock-on effect on Y", "an indirect effect", "The road closure had a knock-on effect on local shops."],
        ["attribute Y to X", "effect ← cause", "Some experts attribute the change partly to remote working."],
      ],
    },
    {
      type: "table",
      title: "Proposing and testing solutions",
      headers: ["Move", "Useful language"],
      rows: [
        ["Propose", "One obvious step would be to… / What's really needed is… / The most effective approach would probably be to…"],
        ["Say who", "It would be up to… / This is something employers could do tomorrow. / It would need government backing."],
        ["Test it", "That would go a long way towards… / That would only scratch the surface. / The catch is that… / It treats the symptoms rather than the cause."],
        ["Time frame", "In the short term… / In the long run… / It wouldn't happen overnight, but…"],
      ],
    },
    {
      type: "example",
      title: "Chains and reality checks in speech",
      items: [
        "“**Part of the problem stems from** the fact that wages haven't kept pace with rents, **which in turn means** young people can't save for a deposit.”",
        "“Remote working **has had a knock-on effect on** city-centre cafés, **many of which** relied on office workers at lunchtime.”",
        "“Banning phones in class **would only scratch the surface**, **because** the real issue is how much time children spend online at home.”",
        "“Building more homes **would go a long way towards** bringing rents down, **although** it **wouldn't happen overnight**.”",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "gap",
        title: "Get the direction right",
        instructions: "Write ONE word in each gap.",
        text:
          "1. A lot of workplace stress stems {{0}} unclear expectations.\n2. Cutting the bus service resulted {{1}} more people driving into town.\n3. The flooding was the result {{2}} heavy rain and poor drainage.\n4. Many experts attribute the fall in accidents partly {{3}} lower speed limits.\n5. Cheaper flights have given {{4}} to a boom in weekend city breaks.\n6. The factory closure had a knock-on {{5}} on local shops.\n7. Poor sleep contributes {{6}} lower concentration at school.",
        answers: [["from"], ["in"], ["of"], ["to"], ["rise"], ["effect"], ["to"]],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model answers: Part 3 on the topic of “Housing”",
      voice: "uk",
      cast: { Examiner: "male", Candidate: "female" },
      transcript:
        "Examiner: Why do you think so many young people find it hard to buy their own home these days?\nCandidate: I think the root cause is fairly simple: in a lot of countries, not enough homes have been built for decades, while the number of households has kept growing. So prices have been driven up, and wages just haven't kept pace. But there are other factors on top of that. Property has become an investment, so people who already own a home often buy a second one to rent out, which in turn pushes prices even higher. And because rents have risen too, young people end up spending a huge share of their income on rent, which leaves them very little to save for a deposit. So it's a bit of a vicious circle. The knock-on effects are quite serious, actually. People are starting families later, and some are staying in their childhood bedrooms well into their thirties.\nExaminer: What could be done to solve this problem?\nCandidate: Well, the obvious answer is to build more homes, and that would go a long way towards easing the pressure. The catch is that it takes years, and new housing is often built where land is cheap rather than where the jobs are. So in the short term, I think governments could do more to protect renters, for example by limiting how often rents can be raised, so that people can actually put some money aside. Some people argue for giving first-time buyers cash grants, but I suspect that would only scratch the surface, or even make things worse, because if buyers have more money, sellers can simply raise their prices. Ultimately, it needs a long-term plan rather than quick fixes, and that means a commitment that lasts longer than one government, which is easier said than done.",
    },
    {
      type: "text",
      title: "How a strong speaker does it",
      body: "**Answer 1 (causes and effects)**\n\n- **Names the root cause first:** “the root cause is fairly simple: … not enough homes have been built for decades.” The listener immediately knows which cause the speaker thinks matters most.\n- **Builds a chain:** investment buyers → higher prices; higher rents → no savings → no deposit. *Which in turn* and *which leaves them* carry the logic from one step to the next.\n- **Labels the pattern:** “So it's a bit of a vicious circle.” A short summary helps the examiner follow a complex answer.\n- **Moves to effects:** “The knock-on effects are quite serious” followed by two concrete consequences.\n\n**Answer 2 (solutions)**\n\n- **Proposes, then tests:** “build more homes… The catch is that it takes years.”\n- **Separates time frames:** a long-term solution, then “in the short term…” a quicker one.\n- **Rejects a weaker solution with a reason:** “cash grants… would only scratch the surface… because if buyers have more money, sellers can simply raise their prices.” Explaining *why* a solution fails is as impressive as proposing one.\n- **Realistic ending:** “easier said than done” shows awareness that real problems are hard to solve.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Root cause, trigger, effect or solution?",
        instructions:
          "Problem: many teachers in one region are leaving the profession. Match each sentence to its role in the explanation. There is one extra role.",
        left: [
          "For years, teachers' pay has fallen behind other graduate jobs, while their workload has grown.",
          "This year, a new inspection system doubled the paperwork almost overnight.",
          "Within weeks, several schools had to cancel some classes.",
          "Over time, fewer young people may see teaching as a realistic career.",
          "Hire temporary staff to cover the empty posts.",
          "Raise pay and cut unnecessary paperwork so that teaching is a job people want to stay in.",
        ],
        right: [
          "a short-term knock-on effect",
          "a solution aimed at the underlying problem",
          "the root cause",
          "a counter-argument",
          "a possible long-term effect",
          "the trigger",
          "a solution that only treats the symptoms",
        ],
        answer: [2, 5, 0, 4, 6, 1],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Precise links and realistic solutions",
        questions: [
          {
            prompt: "Which sentence uses *result* correctly to show that high rents are the **cause**?",
            options: [
              "High rents have resulted from young people living with their parents for longer.",
              "High rents have resulted in young people living with their parents for longer.",
              "High rents are resulting young people to live with their parents for longer.",
              "Young people living with their parents is resulted by high rents.",
            ],
            answer: 1,
            explanation: "*Result in* goes from cause to effect. Option A is grammatical but reverses the logic (it says young people living at home caused high rents). C and D are not correct English.",
          },
          {
            prompt: "Which sentence correctly separates a trigger from a root cause?",
            options: [
              "The power cut triggered the chaos at the station, but the root cause was an outdated signalling system with no backup.",
              "The root cause of the chaos was the power cut, which triggered decades of under-investment.",
              "The chaos triggered a power cut, which was the root cause of the old signalling system.",
              "The trigger and the root cause were both the chaos at the station.",
            ],
            answer: 0,
            explanation: "The power cut is the event that set things off (the trigger); the outdated system is the deeper reason the chaos happened (the root cause). B and C reverse cause and effect, and D treats the chaos as both the trigger and the root cause.",
          },
          {
            prompt: "“Giving first-time buyers cash grants would only scratch the surface.” What does the speaker mean?",
            options: [
              "The grants would solve the problem completely.",
              "The grants would have only a small, superficial effect.",
              "The grants would badly damage the housing market.",
              "The grants would be too complicated to introduce.",
            ],
            answer: 1,
            explanation: "To *scratch the surface* is to deal with only a small part of a problem.",
          },
          {
            prompt: "Examiner: “What can be done to reduce food waste in supermarkets?” Which answer proposes a solution **and** tests it?",
            options: [
              "Supermarkets waste a lot of food. It's a big problem nowadays and everyone knows it.",
              "They could give unsold food to charities, and some already do. The catch is that it needs collection and storage, so it would probably only work on a large scale if the government made it easier, for example through tax breaks.",
              "There are many solutions: donating, composting, discounts, education, apps and new laws.",
              "I always buy only what I need, so I don't waste food.",
            ],
            answer: 1,
            explanation: "Option B proposes one solution, then tests it (*The catch is that…*) and adds a condition. A describes the problem, C lists ideas without developing any, and D is personal.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "IELTS Part 3: causes and effects",
        instructions:
          "No preparation, as in Part 3. Name the main cause, build a short chain, and describe at least one knock-on effect on society, not just on individuals. Aim for 45–60 seconds.",
        prompt: "Topic: Health. Why do so many people say they don't get enough sleep nowadays? What effects can this have on society?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "There are a few causes, but the root of it is probably that work and screens have crept into the hours that used to be for resting. A lot of people answer emails late at night, and even when they do stop, they scroll through their phones in bed, which tends to keep the mind alert just when it should be winding down. Long commutes play a part too, because they push the alarm earlier. As for the effects, the obvious one is on health, since chronic tiredness has been linked to all sorts of problems. But there are knock-on effects for society as well. Tired people make more mistakes at work and on the roads, and they're more irritable, which takes a toll on family life. So it isn't just a private problem. It has real costs for everyone.",
        targetPhrases: ["the root of it", "play a part", "as for the effects", "knock-on effects", "takes a toll on"],
        checklist: [
          "I named the main cause clearly, not just a list of possible causes.",
          "I linked at least two steps in a chain (which…, so…, because…).",
          "I described an effect on society, not only on individuals.",
          "I used at least two precise cause–effect expressions instead of “cause” and “make”.",
          "I finished with a short summary of my point.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "TOEIC Express an opinion: choose a solution",
        instructions:
          "You have 45 seconds to prepare and 60 seconds to speak. Choose ONE option, explain why it deals with the cause of the problem, give an example, and say briefly why another option is weaker.",
        prompt:
          "Some companies are worried that their employees feel stressed at work. Which of the following do you think would be the most effective way for a company to reduce stress among its employees?\n\n- offering more flexible working hours\n- hiring additional staff\n- providing training in time management\n\nGive specific reasons and examples to support your opinion.",
        prepSeconds: 45,
        speakSeconds: 60,
        modelAnswer:
          "In my opinion, hiring additional staff would be the most effective option, because it tackles the root cause rather than the symptoms. In most workplaces, people are stressed mainly because they have too much to do, not because they organise their time badly. Time management training can help a little, but if one person is doing the work of two, no amount of planning will fix that. For example, a friend of mine works in a hospital pharmacy, and when her team took on two extra people last year, overtime almost disappeared and sick days went down. Flexible hours are a good idea too, but they don't reduce the actual workload. So although extra staff cost more in the short term, I think they pay for themselves in the long run through fewer mistakes and lower staff turnover.",
        targetPhrases: ["the root cause", "rather than", "for example", "in the short term", "in the long run"],
        checklist: [
          "I chose one option clearly in my first sentence.",
          "I explained why it deals with the cause of the problem, not just the symptoms.",
          "I gave a specific example.",
          "I said briefly why another option is weaker.",
          "I finished with a conclusion before the 60 seconds ran out.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Cause and solution questions often come in pairs: *Why…?* followed by *What can be done…?* In the first answer, develop one cause in depth with its knock-on effects; in the second, propose one solution and test it (*The catch is…*). This kind of answer naturally brings in relative clauses (*which in turn…*), conditionals (*If… were…, it would…*) and passives (*has been fuelled by…*), which is good evidence for Grammatical Range and Accuracy.",
    },
    {
      exam: "toeic",
      body: "In **Express an opinion** you have 45 seconds to prepare and 60 seconds to speak. When the question gives you options, choose one in your first sentence, give two reasons with an example, and use one sentence to say why another option is weaker. Don't try to cover all the options equally.",
    },
  ],
  vocabulary: [
    { word: "root cause", meaning: "the deepest, most basic reason for a problem", example: "Poor pay is the root cause of the staff shortage.", topic: "society" },
    { word: "trigger", meaning: "an event that causes something to start happening", example: "The price rise was the trigger for the protests.", topic: "society" },
    { word: "stem from", meaning: "to be caused by or develop from something", example: "Many of her worries stem from a lack of sleep.", topic: "academic" },
    { word: "give rise to", meaning: "to cause something to happen or exist", example: "The new law gave rise to a lot of confusion.", topic: "academic" },
    { word: "a knock-on effect", meaning: "an indirect result of something that has happened", example: "The strike had a knock-on effect on deliveries across the country.", topic: "business" },
    { word: "a vicious circle", meaning: "a situation in which one problem causes another, which makes the first problem worse", example: "Stress causes poor sleep, which causes more stress: it's a vicious circle.", topic: "health" },
    { word: "fuelled by", meaning: "made stronger or bigger by something", example: "The boom was fuelled by cheap credit.", topic: "business" },
    { word: "keep pace with", meaning: "to increase or develop at the same speed as something else", example: "Salaries haven't kept pace with the cost of living.", topic: "work" },
    { word: "scratch the surface", meaning: "to deal with only a small part of a problem or subject", example: "The new funding barely scratches the surface of the problem.", topic: "society" },
    { word: "go a long way towards", meaning: "to help a lot to achieve something", example: "Better lighting would go a long way towards making the park safer.", topic: "society" },
    { word: "the catch is", meaning: "used to introduce a hidden problem or disadvantage", example: "The flat is cheap. The catch is that it's two hours from the city.", topic: "everyday" },
    { word: "take a toll on", meaning: "to have a bad effect on something over time", example: "Years of night shifts took a toll on his health.", topic: "health" },
  ],
  keyPoints: [
    "Build chains, not lists: cause → effect → knock-on effect (which in turn…).",
    "Separate the root cause from the trigger, and short-term from long-term effects.",
    "Watch the direction: X results in Y (cause first); Y results from or stems from X (effect first).",
    "Propose a solution, say who would do it, and test it: That would go a long way towards… The catch is…",
    "In TOEIC Express an opinion, choose one option and justify it; don't try to cover them all.",
  ],
};

export default lesson;
