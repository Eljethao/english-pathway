import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-academic-style",
  title: "Academic style and register",
  summary:
    "Write in a precise, objective academic register: use nominalisation and impersonal structures where they help, hedge claims to the right degree, and replace informal language without making your writing stiff or unclear.",
  skill: "writing",
  level: "C1",
  order: 7,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Writing Task 2" },
    { exam: "ielts", task: "Writing Task 1 (Academic)" },
    { exam: "toefl", task: "Writing – Academic Discussion" },
  ],
  objectives: [
    "Recognise informal features that weaken an academic essay and replace them with precise alternatives",
    "Use nominalisation and impersonal structures to make writing more concise and objective",
    "Hedge claims accurately with modal verbs, adverbs and introductory verbs, without over-hedging",
    "Adjust register to the task: formal for IELTS, semi-formal for the TOEFL Academic Discussion",
  ],
  warmUp: [
    "Compare “Loads of kids are glued to their phones these days” with “Many children now spend a considerable amount of time on their phones.” What exactly makes the second sentence more academic?",
    "Is it acceptable to use “I” in an IELTS essay? What do you think, and why?",
  ],
  learn: [
    {
      type: "text",
      title: "What register means in an exam essay",
      body: "Register is the level of formality you choose for a particular reader and purpose. An IELTS Task 2 essay is written for an educated reader who does not know you, so the expected register is **formal and objective**, but not old-fashioned or over-complicated. Under Lexical Resource, the public band descriptors describe a band 7 script as showing *an awareness of style and collocation*, although *inappropriacies occur*. One chatty phrase will not ruin an essay, but a pattern of informal language makes the writing sound less precise and less authoritative.\n\nAcademic style is not about long words. It rests on four habits:\n\n1. **Precision**: exact verbs and nouns instead of vague ones (*get, thing, stuff, a lot*).\n2. **Objectivity**: claims are supported and focused on ideas, not on the writer's feelings.\n3. **Concision**: information is packed into noun phrases and complex sentences rather than spread across many short ones.\n4. **Caution**: claims are hedged to match the strength of the evidence.",
    },
    {
      type: "table",
      title: "Informal features and academic alternatives",
      headers: ["Informal feature", "Example", "Academic alternative"],
      rows: [
        ["Contractions", "It doesn't work, and most families can't afford it.", "It does not work, and most families cannot afford it."],
        ["Vague words", "Pollution is a big thing and causes lots of bad stuff.", "Pollution is a serious problem with wide-ranging consequences."],
        ["Phrasal verbs, where a precise single verb exists", "Scientists are looking into the problem.", "Scientists are investigating the problem."],
        ["Direct address (you)", "If you live in a city, you breathe dirty air.", "City residents are exposed to high levels of air pollution."],
        ["Direct and rhetorical questions", "So what can we do about it?", "Several measures could address this problem."],
        ["Exaggeration and emotional language", "This is a totally disastrous policy!", "This policy is likely to have serious negative consequences."],
        ["Conversational openers", "Well, obviously, everyone knows that…", "It is widely recognised that…"],
        ["Sweeping generalisations", "Young people never read.", "Many young people read less for pleasure than previous generations did."],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: choose the academic version",
        questions: [
          {
            prompt: "Which is the most appropriate academic version of “Loads of people reckon the government should sort out the housing problem”?",
            options: [
              "Loads of people think the government should solve the housing problem.",
              "It is widely argued that the government should address the shortage of affordable housing.",
              "Lots of people believe that the government should do something about houses.",
              "Why doesn't the government sort out the housing problem?",
            ],
            answer: 1,
            explanation: "An impersonal structure (*It is widely argued that*), a precise verb (*address*) and a precise noun phrase (*the shortage of affordable housing*) replace *loads of people reckon*, *sort out* and *the housing problem*.",
          },
          {
            prompt: "Which sentence is most appropriate for the overview of an IELTS Task 1 report?",
            options: [
              "Overall, it's pretty clear that coal went way down.",
              "Overall, coal fell, which is great news for the planet!",
              "Overall, the share of electricity generated from coal fell substantially, while renewables became the largest source.",
              "Overall, you can see that coal went down and renewables went up.",
            ],
            answer: 2,
            explanation: "It is precise and objective. The others are informal (*pretty clear*, *way down*, *you can see*) or add an opinion (*great news*), which Task 1 does not ask for.",
          },
          {
            prompt: "In an IELTS opinion essay, which way of giving your view is appropriate?",
            options: [
              "In my view, the benefits of the policy outweigh its costs.",
              "You will surely agree with me that the policy is good.",
              "I reckon the policy's pretty good overall.",
              "The policy is good, isn't it?",
            ],
            answer: 0,
            explanation: "*In my view* is perfectly acceptable when the question asks for your opinion. Addressing the reader, slang (*reckon*, *pretty good*) and question tags are not.",
          },
        ],
      },
    },
    {
      type: "text",
      title: "Nominalisation and impersonal structures",
      body: "Earlier in this course you used nominalisation to link sentences. It also shifts the focus from people to ideas, which is typical of academic writing:\n\n- *Because people are using their cars more, cities are becoming more congested.* → *Increased car use has led to greater congestion in cities.*\n- *When governments invested in vaccination, fewer children died.* → *Government investment in vaccination contributed to a fall in child mortality.*\n\n**Impersonal structures** present ideas without naming who holds them, which is useful when the source is general:\n\n- **Anticipatory it**: *It is often argued that… / It is essential that… / It seems likely that…*\n- **There is / There are**: *There is growing concern about…*\n- **Passive**: *Several measures have been introduced to…*\n- **Reporting passive**: *Remote work is thought to improve well-being.*\n\nUse these tools selectively. A paragraph made entirely of nominalised, passive sentences is hard to read (*The implementation of the reduction of emissions was undertaken…*), so clear subjects and verbs are still needed. Not every phrasal verb is informal either: *carry out*, *set out* and *point out* are normal in academic writing. And remember that **I is acceptable** in IELTS Task 2 when the question asks for your opinion: *I believe…* or *In my view…* is better than an awkward impersonal phrase. What you should avoid is *you* meaning people in general.",
    },
    {
      type: "table",
      title: "Hedging: matching your claim to your evidence",
      headers: ["Device", "Examples", "In a sentence"],
      rows: [
        ["Modal verbs", "may, might, could, can", "Remote work **may** reduce stress for some employees."],
        ["Adverbs", "arguably, possibly, probably, largely, generally", "This is **arguably** the most serious consequence."],
        ["Introductory verbs", "seem, appear, tend, suggest", "Older employees **tend to** change jobs less often."],
        ["Quantifiers and frequency", "many, some, often, in most cases", "**In many cases**, the cost falls on local councils."],
        ["Phrases", "to some extent, there is some evidence that", "**To some extent**, the problem is a result of poor planning."],
      ],
    },
    {
      type: "example",
      title: "Too strong, too weak, about right",
      items: [
        "Too strong: Social media **destroys** teenagers' mental health.",
        "Too weak: It **could perhaps possibly be** argued that social media **might sometimes** have **some** effect on some teenagers.",
        "About right: Heavy use of social media **appears to be linked to** poorer mental health among **some** teenagers.",
        "A booster used well: This is **clearly** not a problem that schools can solve alone. (Boosters such as *clearly* and *undoubtedly* are fine when a point is genuinely obvious; use them sparingly.)",
      ],
    },
    {
      type: "tip",
      exam: "toefl",
      body: "The TOEFL Academic Discussion is a class discussion board, so its register is **semi-formal**: *I*, contractions such as *I'd* and *don't*, and brief personal experience are all appropriate. Avoid slang and text-message style, but do not write it like a formal essay either.",
    },
  ],
  model: [
    {
      type: "text",
      title: "The original paragraph (informal)",
      body: "Nowadays, you see kids on their phones all the time, and it's a really bad thing. Lots of schools have got rid of phones in class, and teachers say kids pay attention way more now. Also, kids who use their phones loads at night don't sleep enough, so they're tired at school. But phones can be handy for learning too, like looking stuff up. So maybe schools should just let kids use them sometimes.",
    },
    {
      type: "passage",
      title: "The same ideas in academic style",
      paragraphs: [
        "Children's heavy use of mobile phones has become a cause of growing concern. Many schools have restricted phone use in lessons, and teachers frequently report improved concentration as a result. Excessive use at night also appears to reduce the amount of sleep that children get, which may in turn affect their performance at school. Nevertheless, phones can be valuable learning tools, giving pupils instant access to information and educational applications. It would therefore seem sensible for schools to permit their use for specific classroom tasks while limiting it at other times.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **Nominalisation**: *you see kids on their phones all the time* → *Children's heavy use of mobile phones*; *pay attention way more* → *improved concentration*.\n- **Precise vocabulary**: *got rid of* → *restricted*; *handy* → *valuable*; *looking stuff up* → *instant access to information*.\n- **Objectivity**: *it's a really bad thing* (the writer's feeling) → *a cause of growing concern*, which reports a widely shared view.\n- **Hedging**: *frequently report*, *appears to reduce*, *may in turn affect*, *would therefore seem sensible*. The writer does not claim more than the evidence supports.\n- **No you, no contractions, no direct speech style**: *Also* and *But* at the start of sentences become *also* inside the sentence and *Nevertheless*.\n- **A more precise conclusion**: *permit their use for specific classroom tasks while limiting it at other times* says exactly what *let kids use them sometimes* only suggests.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Precise verbs for phrasal verbs",
        instructions: "Match each phrasal verb (in the context given) with the single verb that has the same meaning. One verb is not used.",
        left: [
          "look into (the causes of a problem)",
          "cut down on (sugar)",
          "get rid of (a tax)",
          "come up with (a solution)",
          "carry on (working)",
          "put off (a decision)",
          "go up (prices)",
          "set up (a company)",
        ],
        right: ["establish", "postpone", "investigate", "tolerate", "rise", "abolish", "reduce", "continue", "devise"],
        answer: [2, 6, 5, 8, 7, 1, 4, 0],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Nominalisation",
        instructions: "Complete the second sentence so that it means the same as the first. Write ONE noun formed from the word in brackets.",
        text: "1. The council decided to close the library, which surprised residents. → The council's {{0}} to close the library surprised residents. (decide)\n2. Cities are expanding rapidly, and this puts pressure on water supplies. → The rapid {{1}} of cities puts pressure on water supplies. (expand)\n3. If schools are more flexible, students can learn at their own pace. → Greater {{2}} allows students to learn at their own pace. (flexible)\n4. Employees who are unhappy at work are often absent. → Unhappiness at work often leads to higher rates of {{3}}. (absent)\n5. It is difficult to predict how markets will behave. → Market {{4}} is difficult to predict. (behave)\n6. More and more people realise that plastic harms the oceans. → There is a growing {{5}} that plastic harms the oceans. (realise)\n7. Farmers depend heavily on the weather, so they are vulnerable to climate change. → Farmers' heavy {{6}} on the weather makes them vulnerable to climate change. (depend)\n8. The company failed to respond quickly, and customers were frustrated. → The company's {{7}} to respond quickly frustrated customers. (fail)",
        answers: [
          ["decision"],
          ["expansion"],
          ["flexibility"],
          ["absence", "absenteeism"],
          ["behaviour", "behavior"],
          ["realisation", "realization"],
          ["dependence", "dependency", "reliance"],
          ["failure"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Hedging to the right degree",
        questions: [
          {
            prompt: "Which sentence is hedged appropriately for a claim that is likely but not certain?",
            options: [
              "A four-day week will definitely make every employee more productive.",
              "A four-day week is likely to make many employees more productive.",
              "It could possibly perhaps be the case that a four-day week might make some employees slightly more productive.",
              "A four-day week makes employees more productive, full stop.",
            ],
            answer: 1,
            explanation: "*is likely to* and *many* express probability without certainty. The first and last are too strong; the third is so heavily hedged that it says almost nothing.",
          },
          {
            prompt: "Which word is a booster rather than a hedge?",
            options: ["arguably", "tend to", "undoubtedly", "in some cases"],
            answer: 2,
            explanation: "*Undoubtedly* makes a claim stronger. The other three make a claim more cautious.",
          },
          {
            prompt: "“Online learning is less effective than classroom teaching.” Which revision is most appropriate for an academic essay?",
            options: [
              "Online learning is always less effective than classroom teaching.",
              "Online learning appears to be less effective than classroom teaching for younger learners, who may need more direct supervision.",
              "Online learning is way worse than classroom teaching.",
              "Online learning might perhaps maybe be less effective in some ways for some people.",
            ],
            answer: 1,
            explanation: "It hedges (*appears to*), limits the claim to a specific group and gives a reason. The others are too absolute, informal or over-hedged.",
          },
          {
            prompt: "Which sentence uses an impersonal structure correctly?",
            options: [
              "It is widely believed that early education shapes later success.",
              "It is widely believed early education to shape later success.",
              "Is widely believed that early education shapes later success.",
              "It widely believes that early education shapes later success.",
            ],
            answer: 0,
            explanation: "The pattern is *It is + past participle + that + clause*. The alternative is *Early education is widely believed to shape later success.*",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Rewrite in academic style",
        instructions: "Keep every idea, but change the register. When you finish, check your version for contractions, you, slang and direct questions.",
        prompt:
          "The paragraph below is a body paragraph from an IELTS Task 2 essay on the question *Should governments tax unhealthy food?* The ideas are good, but the register is far too informal. Rewrite it in at least 120 words in an appropriate academic style. Use at least two nominalisations, two hedging devices and one impersonal structure.\n\nSo, should the government make junk food more expensive? I reckon it's a really good idea. Loads of people eat tons of sugar and fat, and you just know that's gonna make them ill. When stuff costs more, people buy less of it, right? Plus, the government gets heaps of cash from the tax, and they can spend it on hospitals, which are totally struggling at the moment. Some people moan that it's unfair on poor families, because they spend more of their money on food. But honestly, poor families get ill the most, so they'd actually get the most out of eating better. Basically, it's a win-win.",
        minWords: 120,
        minutes: 12,
        rubric: [
          "Task response: I kept all the original ideas: the health problem, the effect of price on demand, the use of tax revenue, the fairness objection and the reply to it.",
          "Lexical resource: I replaced slang and vague words (loads, tons, stuff, heaps of cash, moan, win-win) with precise vocabulary.",
          "Lexical resource: I hedged my claims to an appropriate degree (may, tend to, is likely to, appear to) without over-hedging.",
          "Lexical resource: I used at least two nominalisations (for example consumption, revenue, improvement).",
          "Grammatical range and accuracy: I used at least one impersonal structure (It is sometimes argued that…, There is…, a passive).",
          "Coherence and cohesion: I turned the direct questions into statements, and the paragraph still moves logically from claim to conclusion.",
          "Lexical resource (style): There are no contractions, no you, and no conversational words such as so, plus, honestly or basically at the start of sentences.",
          "I wrote at least 120 words in about 12 minutes.",
        ],
        modelAnswer:
          "Taxing unhealthy food is, in my view, a justified and potentially effective policy. A large proportion of the population consumes excessive quantities of sugar and fat, and such diets are closely associated with conditions such as obesity, heart disease and type 2 diabetes. Since demand for most products tends to fall as prices rise, a tax of this kind is likely to reduce consumption. In addition, the revenue it generates could be invested in health services, many of which are currently under considerable strain. It is sometimes argued that such a tax would place an unfair burden on low-income households, which spend a higher proportion of their income on food. However, these households also appear to suffer disproportionately from diet-related illness, and they may therefore benefit most from an improvement in eating habits. On balance, the policy seems likely to bring both health and financial gains.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Do not swap every word for a longer one. *Utilise*, *commence* and *endeavour* rarely improve an essay; *use*, *start* and *try* are perfectly academic. Examiners reward precision and natural collocation, not inflated vocabulary.",
    },
    {
      exam: "ielts",
      body: "In Task 1, stay objective: report what the data show and avoid evaluative comments such as *a worrying trend* or *great news*. They express an opinion that the task does not ask for.",
    },
    {
      exam: "toefl",
      body: "Even on a discussion board, avoid sweeping generalisations. A hedged claim with a specific example (*In my experience, many first-year students…*) sounds more thoughtful than *Everyone knows that…*",
    },
  ],
  vocabulary: [
    { word: "register", meaning: "the level of formality of language, chosen to suit the reader and situation", example: "The TOEFL discussion uses a semi-formal register.", topic: "academic" },
    { word: "hedge", meaning: "to make a claim less absolute, for example with may or tend to", example: "Hedge your claims when the evidence is limited.", topic: "academic" },
    { word: "booster", meaning: "a word that makes a claim stronger, such as clearly or undoubtedly", example: "Use boosters sparingly in academic writing.", topic: "academic" },
    { word: "objective", meaning: "based on facts and evidence rather than personal feelings", example: "A Task 1 report should be objective.", topic: "academic" },
    { word: "concise", meaning: "giving a lot of information in few words", example: "Nominalisation can make a sentence more concise.", topic: "academic" },
    { word: "impersonal", meaning: "not referring to a particular person", example: "“It is often argued that” is an impersonal structure.", topic: "academic" },
    { word: "excessive", meaning: "more than is reasonable or necessary", example: "Excessive sugar consumption is linked to tooth decay.", topic: "health" },
    { word: "disproportionately", meaning: "to a degree that is too large compared with something else", example: "Rising food prices disproportionately affect low-income families.", topic: "society" },
    { word: "revenue", meaning: "income, especially the money a government receives from taxes", example: "The tax raised significant revenue for health services.", topic: "business" },
    { word: "be associated with", meaning: "to be connected with something", example: "Poor sleep is associated with lower concentration.", topic: "health" },
    { word: "under strain", meaning: "under too much pressure or demand", example: "Many hospitals are under strain in winter.", topic: "society" },
  ],
  keyPoints: [
    "Academic register is precise, objective, concise and cautious; it does not depend on long or rare words.",
    "In IELTS essays, replace contractions, slang, vague words, you, direct questions and exaggeration.",
    "Use nominalisation and impersonal structures selectively; clear subjects and verbs are still needed.",
    "Hedge to match your evidence: avoid both sweeping claims and over-hedging.",
    "I is acceptable for your opinion in IELTS Task 2, and the TOEFL Academic Discussion is semi-formal.",
  ],
};

export default lesson;
