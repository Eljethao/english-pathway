import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-developing-arguments",
  title: "Developing arguments in depth",
  summary:
    "Turn a list of points into convincing paragraphs: explain how each claim works, support it with specific evidence, and handle the opposing view with a fair counter-argument and a strong rebuttal.",
  skill: "writing",
  level: "C1",
  order: 6,
  minutes: 30,
  exams: [
    { exam: "ielts", task: "Writing Task 2" },
    { exam: "toeic", task: "Writing – Write an opinion essay" },
  ],
  objectives: [
    "Extend a claim with an explanation that shows how and why it is true",
    "Choose specific, realistic evidence instead of over-generalised statements or invented statistics",
    "Present a counter-argument fairly and answer it with one of four rebuttal strategies",
    "Write a fully developed body paragraph of about 150–190 words",
  ],
  warmUp: [
    "A classmate writes: “Social media is bad for teenagers.” What question would you ask to test this claim?",
    "Think of a time you changed your mind about something. What convinced you: an explanation, an example or a personal experience?",
  ],
  learn: [
    {
      type: "text",
      title: "Why depth matters",
      body: "In IELTS Writing Task 2, the step from band 6 to band 7 in Task Response is often about **depth**, not about having more ideas. In the public band descriptors, at band 6 some main ideas *may be insufficiently developed*; at band 7 main ideas are *extended and supported*, though there may be *a tendency to over-generalise*; and at band 8 ideas are *relevant, well extended and supported*.\n\nMost C1 writers already have enough ideas. What holds them back is a paragraph that states three reasons in three sentences and moves on. A developed paragraph does the opposite: it takes **one** main idea and keeps asking *How?*, *Why?* and *So what?* until the reader is convinced.",
    },
    {
      type: "table",
      title: "The anatomy of a developed paragraph",
      headers: ["Move", "Question it answers", "Example (topic: compulsory personal finance lessons at school)"],
      rows: [
        ["Claim (topic sentence)", "What is my point?", "Compulsory finance lessons would protect young people from serious debt."],
        ["Explanation", "How or why is it true?", "Many teenagers sign their first phone contract or take out their first loan before they understand how interest builds up."],
        ["Evidence", "What shows that it is true?", "A school leaver who repays only the minimum on a credit card each month, for example, may take years to clear even a modest balance."],
        ["Consequence", "So what? Why does it matter?", "That money could otherwise have gone towards rent or savings."],
        ["Counter-argument", "What would a reasonable opponent say?", "Admittedly, some argue that managing money is a skill best learned at home."],
        ["Rebuttal", "Why is my position still stronger?", "Yet this assumes that every parent has the knowledge and confidence to teach it."],
        ["Link", "How does this support my overall position?", "A compulsory course would therefore give every student the same basic protection."],
      ],
    },
    {
      type: "text",
      title: "Evidence you can use in an exam",
      body: "You cannot look anything up in the exam, and examiners do not expect references. What makes support convincing is that it is **relevant, specific and believable**.\n\n- **A specific example**: a particular kind of person, place or situation (*a nurse working night shifts*, *a small coastal town*), not *some people* or *many things*.\n- **A realistic scenario**: *If a family of four switched from driving to cycling for short trips, they would…*\n- **A chain of consequences**: A leads to B, which leads to C, so the reader sees the full effect.\n- **A comparison**: between two groups, two places or two periods.\n- **Personal experience**: acceptable in IELTS, especially when the question invites it, but use it to illustrate a general point, not as the whole argument.\n\nAvoid invented statistics such as *87% of students agree*. They prove nothing, and a number that is obviously made up can make an argument less convincing. Avoid **over-generalisation** too: *everyone*, *always*, *never* and *all young people* are easy to disprove. Qualify your claims with *many*, *often*, *in most cases* or *tend to*.",
    },
    {
      type: "table",
      title: "Four ways to answer a counter-argument",
      headers: ["Strategy", "What it does", "Example"],
      rows: [
        ["Refute", "Shows that the opposing claim is wrong or rests on a false assumption", "This argument assumes that all parents are confident with money, which is far from true."],
        ["Minimise", "Accepts the point but shows that it matters less", "The course would take up some timetable space, but one lesson a week is a small cost compared with years of debt."],
        ["Qualify", "Accepts the point only for some cases", "This may be true of families with a financial background, but not of the students who need help most."],
        ["Turn", "Shows that the opposing point actually supports your view", "If parents are the main source of money habits, teaching today's pupils is the best way to improve the habits of tomorrow's parents."],
      ],
    },
    {
      type: "example",
      title: "Language for concession and rebuttal",
      items: [
        "**Admittedly**, a compulsory course would take time away from other subjects. **However**, …",
        "**It could be argued that** parents should teach this. **Yet this overlooks** the fact that …",
        "**While there is some truth in** the claim that exams cause stress, **it does not follow that** they should be abolished.",
        "**Critics are right to point out that** the scheme is expensive. **Even so**, …",
        "**This objection carries less weight when** we consider how much time commuters would save.",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Place the counter-argument where it strengthens your essay: inside a body paragraph (concede and rebut in two or three sentences) or in its own paragraph before your conclusion. Never end a paragraph on the opposing view: the last word should be yours.",
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*Some people believe that schools should make lessons in personal finance, such as budgeting and managing debt, a compulsory subject. To what extent do you agree or disagree?*",
    },
    {
      type: "text",
      title: "An undeveloped paragraph (about band 6)",
      body: "Schools should teach personal finance because it is very useful. Many young people have problems with money. They do not know how to make a budget. Also, they can get into debt easily. Some people say parents should teach this, but I disagree. Therefore, it should be a compulsory subject.",
    },
    {
      type: "passage",
      title: "A developed paragraph (band 8 level)",
      paragraphs: [
        "The strongest argument for compulsory finance lessons is that they would protect young people from debt at the very moment they become most exposed to it. Many students sign their first phone contract or take out their first loan in their late teens, often before they understand how interest accumulates over time. A school leaver who repays only the minimum on a credit card each month, for example, may take years to clear even a modest balance and pay a substantial sum in interest along the way, money that could otherwise have gone towards rent or savings. Admittedly, some argue that managing money is a skill best learned at home. Yet this assumes that every parent has the knowledge and confidence to teach it, which is far from certain; arguably, children from households that already struggle financially are the least likely to receive such guidance. A compulsory course would therefore give every student the same basic protection, regardless of their background.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **Claim**: one clear point linked to the question (*compulsory finance lessons*), with a precise angle (*at the very moment they become most exposed to it*).\n- **Explanation**: *how* the risk arises: first contracts and loans signed before students understand interest.\n- **Evidence**: a specific, realistic scenario (minimum payments on a credit card) instead of an invented statistic.\n- **Consequence**: *money that could otherwise have gone towards rent or savings* answers *So what?*\n- **Counter-argument**: stated fairly, in one sentence, with *Admittedly*.\n- **Rebuttal**: a *refute* strategy that exposes the opponent's assumption, strengthened by a hedged point (*arguably*) about the families who most need help.\n- **Link**: *therefore* returns to the position, so the paragraph ends on the writer's view, not the opponent's.\n\nCompare the band 6 version: four reasons in four short sentences, a counter-argument dismissed with *I disagree*, and no explanation of how or why.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Name the move",
        instructions: "These sentences come from one paragraph answering the question “Some companies have introduced a four-day working week. Is this a positive development?” They are in jumbled order. Match each sentence to its move. One move is not used.",
        left: [
          "A small design agency that moves to a four-day week, for instance, might cut weekly meetings from five hours to two and still deliver its projects on time.",
          "This concern, however, can be met by staggering days off so that the office is always staffed.",
          "A four-day week can make employees more productive, not less.",
          "The shorter week, then, need not come at the expense of either output or customer service.",
          "When staff know they have an extra day to rest, they tend to arrive at work more focused and to waste less time in unnecessary meetings.",
          "Critics argue that customers expect businesses to be available five days a week.",
        ],
        right: [
          "Rebuttal",
          "Evidence (example or scenario)",
          "Link back to the position",
          "Claim",
          "Unsupported opinion",
          "Counter-argument",
          "Explanation",
        ],
        answer: [1, 0, 3, 2, 6, 5],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "order",
        mode: "lines",
        title: "Build a developed paragraph",
        instructions: "The essay question is: “Some people believe that students should be required to work for a year before starting university. To what extent do you agree?” Put the sentences in order: claim, explanation, example, consequence, counter-argument, rebuttal.",
        items: [
          "Requiring students to work for a year before university would, I believe, make many of them more effective learners.",
          "Students who have held a job tend to manage their time better, because they are used to deadlines and to being accountable to others.",
          "A school leaver who has spent a year working in a busy restaurant, for instance, is likely to take a weekly essay deadline far more seriously than one who has never had to be anywhere on time.",
          "Such habits could also reduce the number of students who drop out in their first year, which is costly both for them and for universities.",
          "It is true that a compulsory year of work would delay graduation and might discourage some applicants.",
          "Even so, the delay is a small price to pay if the experience helps students choose the right course and complete it at the first attempt.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Strengthen the argument",
        questions: [
          {
            prompt: "Which sentence is the most effective support for the claim “Working from home can reduce stress for parents”?",
            options: [
              "Everyone knows that working from home is less stressful.",
              "A parent who no longer commutes for an hour each way can collect their children from school and still complete a full working day.",
              "Working from home is good for parents in many different ways.",
              "Research shows that 92% of parents prefer working from home.",
            ],
            answer: 1,
            explanation: "It is a specific, realistic scenario that shows how the stress is reduced. The others are over-generalised, vague, or an invented statistic.",
          },
          {
            prompt: "Which version of the claim avoids over-generalisation?",
            options: [
              "Young people never read books any more.",
              "All teenagers are addicted to their phones.",
              "Many teenagers now spend more of their free time on screens than on reading for pleasure.",
              "Reading is completely dead among the young.",
            ],
            answer: 2,
            explanation: "*Many* and a precise comparison make the claim defensible. *Never*, *all* and *completely dead* are easy to disprove.",
          },
          {
            prompt: "Which is the best rebuttal to the counter-argument “Free university education is too expensive for governments”?",
            options: [
              "That is simply not true.",
              "Governments always have enough money for education.",
              "While the initial cost is high, graduates tend to earn more and therefore pay more tax over their working lives, so much of the investment may eventually be recovered.",
              "Many students would like to study for free.",
            ],
            answer: 2,
            explanation: "It accepts the cost and then minimises it with a reasoned, hedged explanation. The others give no reason, over-generalise or are irrelevant to cost.",
          },
          {
            prompt: "“Opponents argue that a tax on sugary drinks hurts low-income families most. Yet because these families also tend to suffer most from diet-related illness, they stand to gain the most from the health benefits.” Which rebuttal strategy does this use?",
            options: ["Refute", "Minimise", "Qualify", "Turn"],
            answer: 3,
            explanation: "The writer uses the opponents' own point (low-income families are most affected) to support the tax. That is a *turn*.",
          },
          {
            prompt: "A paragraph contains a counter-argument. Where should it usually end?",
            options: [
              "On the opposing view, so that the paragraph looks balanced",
              "On the writer's own position, after the rebuttal",
              "On a new argument that the conclusion will develop",
              "On a question for the reader to think about",
            ],
            answer: 1,
            explanation: "Ending on the rebuttal and a link to your position keeps your argument clear. Ending on the opposing view can make your position look uncertain.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "Concession and rebuttal language",
        instructions: "Complete the sentences with words from the box. Three words are not used.",
        text: "1. {{0}}, a longer school day would leave children with less free time. However, it would also allow schools to offer more sport and music.\n2. It {{1}} be argued that tourism damages local culture. Yet this {{2}} the many festivals that survive only because visitors pay to attend them.\n3. While there is some truth {{3}} the claim that exams cause stress, it does not {{4}} that they should be abolished.\n4. Critics are right to point {{5}} that electric cars are expensive. {{6}} so, prices are likely to fall as production increases.\n5. This objection carries less {{7}} when we consider how much time commuters would save.",
        answers: [
          ["Admittedly", "Granted", "Of course", "Certainly", "Undeniably"],
          ["could", "might", "may", "can"],
          ["overlooks", "ignores", "neglects", "disregards"],
          ["in"],
          ["follow", "mean"],
          ["out"],
          ["Even"],
          ["weight", "force"],
        ],
        wordBank: ["Admittedly", "could", "overlooks", "in", "follow", "out", "Even", "weight", "Despite", "proves", "on"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: one fully developed paragraph",
        instructions: "Plan for 3 minutes: write one word or phrase for each move (claim, explanation, evidence, consequence, counter-argument, rebuttal, link). Then write for about 12 minutes.",
        prompt:
          "Essay question: *Some people believe that entry to museums and art galleries should be free for everyone. To what extent do you agree or disagree?*\n\nWrite ONE body paragraph (at least 140 words) that supports your position. Include a clear claim, an explanation, a specific example or scenario, a counter-argument and a rebuttal, and finish with a sentence that links back to your position.",
        minWords: 140,
        minutes: 15,
        rubric: [
          "Task response: My paragraph develops ONE main idea that clearly supports my position on the question.",
          "Task response: I explained how or why my claim is true, instead of just stating it.",
          "Task response: My support is specific and realistic (a particular situation or scenario), with no invented statistics or sweeping generalisations.",
          "Task response: I presented a reasonable counter-argument fairly and answered it with a rebuttal (refute, minimise, qualify or turn).",
          "Coherence and cohesion: The moves follow a logical order, and my last sentence returns to my own position.",
          "Lexical resource: I used precise language for concession and rebuttal (Admittedly, It could be argued that, this overlooks, Even so).",
          "Grammatical range and accuracy: My complex sentences are accurate and clearly punctuated.",
          "I wrote at least 140 words in about 15 minutes.",
        ],
        modelAnswer:
          "The most compelling reason to abolish entrance fees is that culture should not be reserved for those who can afford it. Even a modest charge can deter exactly the visitors who stand to gain the most: a family with three children, for instance, may face a substantial bill for a single afternoon, a sum that many households would rather spend on food or heating. When entry is free, by contrast, a museum becomes somewhere people can visit casually and repeatedly, dropping in for an hour after school or during a lunch break, and this familiarity is often what turns a single visit into a lifelong interest. It could be argued that free entry deprives museums of income they need for maintenance and new exhibitions. However, this overlooks the other sources of revenue that higher visitor numbers tend to bring, such as cafés, shops, donations and paid special exhibitions, as well as the stronger case for public funding that a well-used institution can make. Free entry, therefore, need not be seen as a loss of income but as an investment in a broader and more loyal audience.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Two well-developed body paragraphs are usually enough for an essay of 260–300 words. If you have a third idea, ask whether you can develop it as fully as the first two; if not, leave it out or use it as support inside another paragraph.",
    },
    {
      exam: "ielts",
      body: "A counter-argument is not compulsory in an opinion essay, but handling one well helps you present *a clear and developed position*. Keep the concession short, and always follow it immediately with your rebuttal.",
    },
    {
      exam: "toeic",
      body: "The TOEIC opinion essay is scored on whether your opinion is supported with reasons and/or examples, as well as on grammar, vocabulary and organisation. One specific workplace or everyday example, explained fully, is the quickest way to show strong support.",
    },
  ],
  vocabulary: [
    { word: "rebuttal", meaning: "an argument that shows an opposing claim is wrong or less important", example: "Her rebuttal exposed a weak assumption in the critics' argument.", topic: "academic" },
    { word: "counter-argument", meaning: "an argument against your own position", example: "A good essay deals with the strongest counter-argument.", topic: "academic" },
    { word: "concede", meaning: "to admit that something is true, often before arguing against it", example: "The writer concedes that the scheme is expensive.", topic: "academic" },
    { word: "over-generalise", meaning: "to make a claim about all cases when it is true of only some", example: "Avoid over-generalising with words like always and everyone.", topic: "academic" },
    { word: "compelling", meaning: "very convincing", example: "The most compelling reason is the effect on young families.", topic: "academic" },
    { word: "assumption", meaning: "something that is accepted as true without proof", example: "The argument rests on the assumption that all parents can help.", topic: "academic" },
    { word: "carry weight", meaning: "to be important or convincing", example: "This objection carries little weight once the costs are compared.", topic: "academic" },
    { word: "deter", meaning: "to make someone less likely to do something", example: "High entrance fees deter many families from visiting.", topic: "society" },
    { word: "accumulate", meaning: "to increase gradually in amount over time", example: "Interest accumulates quickly if you repay only the minimum.", topic: "business" },
    { word: "exposed (to)", meaning: "not protected from something harmful", example: "Young adults are most exposed to debt when they first leave home.", topic: "society" },
    { word: "regardless of", meaning: "without being affected by or depending on something", example: "Every student should have access to the course, regardless of their background.", topic: "society" },
  ],
  keyPoints: [
    "Band 7+ Task Response rewards ideas that are extended and supported, not long lists of reasons.",
    "Develop each main idea through claim, explanation, evidence and consequence, asking How?, Why? and So what?",
    "Use specific, realistic examples and scenarios; avoid invented statistics and words like always, never and everyone.",
    "Handle the opposing view in two steps: concede fairly, then refute, minimise, qualify or turn it.",
    "End every paragraph on your own position, not on the counter-argument.",
  ],
};

export default lesson;
