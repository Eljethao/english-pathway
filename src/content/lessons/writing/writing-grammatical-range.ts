import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-grammatical-range",
  title: "Grammatical range in essays",
  summary:
    "Extend your range with mixed and inverted conditionals, reporting passives, advanced relative and participle clauses and inversion, and learn the accuracy trap in each so that range raises your score instead of lowering it.",
  skill: "writing",
  level: "C1",
  order: 9,
  minutes: 30,
  exams: [
    { exam: "ielts", task: "Writing Task 2" },
    { exam: "ielts", task: "Writing Task 1 (Academic)" },
    { exam: "toeic", task: "Writing – Write an opinion essay" },
  ],
  objectives: [
    "Use mixed and inverted conditionals to link past causes, present results and possible futures",
    "Report general views objectively with passive and reporting-passive structures",
    "Add detail concisely with prepositional and quantifier relative clauses and perfect or passive participle clauses",
    "Use inversion after negative and limiting adverbials for emphasis, accurately and sparingly",
  ],
  warmUp: [
    "Which grammatical structure do you avoid in essays because you are not sure you can use it correctly?",
    "Finish this sentence in two different ways: “If I had started learning English earlier, …”",
  ],
  learn: [
    {
      type: "text",
      title: "Range the examiner can see",
      body: "Grammatical Range and Accuracy is one quarter of your IELTS Writing score. In the public band descriptors, band 7 requires *a variety of complex structures* used *with some flexibility and accuracy*, with *frequent* error-free sentences. At band 8, *a wide range of structures is flexibly and accurately used* and *the majority of sentences are error-free*.\n\nEarlier in this course you practised concessive, relative and participle clauses, nominalisation and cleft sentences. This lesson adds five groups of structures that show genuine range in an argument essay. For each one, learn the **form**, the **job** it does in an argument and the **trap** that causes errors. Then use it only where its meaning is exactly what you need: a structure used for its own sake usually sounds forced.",
    },
    {
      type: "table",
      title: "Five structures for argument essays",
      headers: ["Structure", "Job in an essay", "Example", "Common trap"],
      rows: [
        [
          "Mixed and inverted conditionals",
          "Links a past decision to a present result, or states a condition formally",
          "If the city **had invested** in rail twenty years ago, traffic **would be** lighter today. **Should** the policy fail, taxpayers would bear the cost.",
          "Wrong: *…traffic would have been lighter today* (a past form for a present result). Wrong: *If should the policy fail…*",
        ],
        [
          "Passive and reporting passive",
          "Focuses on the action, or reports a general view without naming its source",
          "New rules **have been introduced**. Remote work **is thought to improve** well-being. The scheme **is reported to have reduced** traffic.",
          "Wrong: *Remote work is thought that it improves…* Use *It is thought that remote work improves…* or *Remote work is thought to improve…*",
        ],
        [
          "Perfect, passive and *with* participle clauses",
          "Shows sequence, cause or an accompanying detail concisely",
          "**Having failed** to meet its targets, the government changed its approach. **Designed** for cars, many cities struggle to accommodate cyclists. Prices rose, **with rents increasing** fastest.",
          "Dangling participle. Wrong: *Having failed to meet its targets, a new approach was adopted* (the approach did not fail).",
        ],
        [
          "Prepositional and quantifier relative clauses",
          "Packs a detail or a qualification into the same sentence",
          "a system **in which** students choose their own modules; volunteers, **most of whom** are retired; several proposals, **none of which** was adopted",
          "Wrong: *…volunteers, most of them are retired, …* (a comma splice). Wrong: *most of who*. Wrong: *a system in where*.",
        ],
        [
          "Inversion after negative or limiting adverbials",
          "Gives emphasis to a key point, usually once or twice per essay",
          "**Not only does** the scheme reduce traffic, but it also raises revenue. **Only when** prices rise **do** most people change their habits.",
          "Missing auxiliary. Wrong: *Not only the scheme reduces…* After *Only when*, invert the main clause, not the time clause. Wrong: *Only when do prices rise…*",
        ],
      ],
    },
    {
      type: "text",
      title: "Using range accurately",
      body: "- **One structure, one job.** Use a mixed conditional when you really mean *past cause → present result*, and inversion when a point deserves emphasis. Five inversions in one essay sound unnatural.\n- **Check the verb pattern** after each structure: an auxiliary after negative adverbials, a *to*-infinitive after reporting passives (*to have* + past participle for the past), *whom* after a preposition or quantifier referring to people.\n- **Watch the punctuation.** Non-defining relative clauses and participle clauses at the start of a sentence need commas; a defining clause such as *a system in which…* does not.\n- **Keep the logical subject.** The subject of a participle clause must be the subject of the main clause.\n- **Mix sentence lengths.** Range includes short, simple sentences used for emphasis.",
    },
    {
      type: "example",
      title: "One idea, several structures",
      items: [
        "Basic: The government did not build enough homes. Now many young people cannot afford one.",
        "Inverted mixed conditional: **Had** the government **built** enough homes, many young people **would** now **be able** to afford one.",
        "Reporting passive: The housing shortage **is widely considered to be** the result of decades of underinvestment.",
        "Quantifier relative clause: The shortage affects young workers, **many of whom** now spend a large share of their income on rent.",
        "Participle clause: **Priced out of** the city centre, many young workers now face long commutes.",
        "Inversion: **Only when** supply increases **will** prices become affordable again.",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Range does not mean using every structure in this lesson. A band 7+ essay typically shows a handful of complex structures used naturally and accurately, mixed with clear simple sentences. One accurate inversion is worth more than three awkward ones.",
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*Many people now work in jobs that did not exist twenty years ago. What are the causes of this, and how should education systems respond?*\n\nThe paragraph below answers the second question.",
    },
    {
      type: "passage",
      title: "Model body paragraph (band 8 level)",
      paragraphs: [
        "Education systems should respond by teaching adaptable skills rather than training students for specific jobs, many of which may have disappeared by the time they graduate. Had schools twenty years ago placed less emphasis on memorising facts, many of today's workers would find it easier to retrain as their industries change. Not only would a stronger focus on problem-solving, communication and digital literacy help young people enter new fields, but it would also leave them less exposed when automation takes over routine tasks. Such skills are widely thought to develop best through project-based learning, in which students work in teams on open-ended problems. Universities, too, could offer shorter and more flexible courses, allowing adults to update their qualifications without giving up work for several years. Should governments fund these courses generously, much of the cost would probably be recovered through higher employment and tax revenue. In a labour market that changes this quickly, learning can no longer end when people leave school or university.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **Quantifier relative clause**: *specific jobs, many of which may have disappeared*.\n- **Inverted mixed conditional**: *Had schools… placed* (past condition) → *would find* (present result).\n- **Inversion for emphasis**: *Not only would… but it would also…*, used once, for the paragraph's central claim.\n- **Reporting passive**: *are widely thought to develop*, a general view stated objectively.\n- **Prepositional relative clause**: *project-based learning, in which students work in teams*.\n- **Participle clause**: *allowing adults to update their qualifications*, which shares the subject of the main clause (*Universities*) and shows the result of offering such courses.\n- **Inverted conditional with *Should***: *Should governments fund…, much of the cost would probably be recovered*, hedged with *probably*.\n- **Balance**: the paragraph ends with a short, plain sentence. Seven structures appear, but each one carries a real idea, and none is repeated.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Accurate or not?",
        instructions: "Choose the correct sentence in each group.",
        questions: [
          {
            prompt: "Which mixed conditional is correct?",
            options: [
              "If I had studied medicine, I would be a doctor now.",
              "If I studied medicine, I would have been a doctor now.",
              "If I had studied medicine, I would have been a doctor now.",
              "If I would have studied medicine, I would be a doctor now.",
            ],
            answer: 0,
            explanation: "Past condition (*had studied*) + present result (*would be… now*). *Would have been* refers to the past, so it cannot go with *now*, and *would* does not belong in the if-clause.",
          },
          {
            prompt: "Which sentence uses inversion correctly?",
            options: [
              "Not only the policy reduces emissions, but it also saves money.",
              "Not only does the policy reduce emissions, but it also saves money.",
              "Not only does the policy reduces emissions, but it also saves money.",
              "Not only the policy does reduce emissions, but it also saves money.",
            ],
            answer: 1,
            explanation: "After *Not only* at the start of a clause, use auxiliary + subject + base verb: *does the policy reduce*.",
          },
          {
            prompt: "Which reporting passive is correct?",
            options: [
              "The bridge is believed that it was built in the twelfth century.",
              "It is believed the bridge to have been built in the twelfth century.",
              "The bridge is believed to have been built in the twelfth century.",
              "The bridge is believed to be built in the twelfth century.",
            ],
            answer: 2,
            explanation: "Subject + *is believed* + perfect infinitive (*to have been built*) for a past event. The alternative is *It is believed that the bridge was built…*",
          },
          {
            prompt: "Which relative clause is correct?",
            options: [
              "The survey questioned 500 nurses, most of them said they were exhausted.",
              "The survey questioned 500 nurses, most of whom said they were exhausted.",
              "The survey questioned 500 nurses, most of who said they were exhausted.",
              "The survey questioned 500 nurses, which most said they were exhausted.",
            ],
            answer: 1,
            explanation: "After a quantifier (*most of, many of, none of*) referring to people, use *whom*. *Most of them said* after a comma creates a comma splice.",
          },
          {
            prompt: "Which participle clause is correct?",
            options: [
              "Built in 1890, many residents consider the station a landmark.",
              "Built in 1890, the station is considered a landmark by many residents.",
              "Building in 1890, the station is considered a landmark.",
              "Having built in 1890, the station is a landmark.",
            ],
            answer: 1,
            explanation: "The station was built, so the participle must be passive (*Built*) and the station must be the subject of the main clause. In the first option, the residents seem to have been built in 1890.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Transform the sentence",
        instructions: "Complete the second sentence so that it has the same meaning as the first. Write ONE or TWO words in each gap.",
        text: "1. If the council had not cut the bus service, fewer people would drive today. → {{0}} the council not cut the bus service, fewer people would drive today.\n2. If the scheme fails, the government will have to rethink its strategy. → {{1}} the scheme fail, the government will have to rethink its strategy.\n3. People say that the new law has reduced crime. → The new law is said {{2}} reduced crime.\n4. The company employs 300 people. Most of them work part-time. → The company employs 300 people, most of {{3}} work part-time.\n5. Under this system, workers are paid according to their results. → This is a system {{4}} workers are paid according to their results.\n6. People rarely change their habits overnight. → Rarely {{5}} people change their habits overnight.\n7. The city became safer only when it improved its street lighting. → Only when the city improved its street lighting {{6}} it become safer.\n8. The minister had resigned, so she could speak freely. → {{7}} resigned, the minister could speak freely.",
        answers: [
          ["Had"],
          ["Should"],
          ["to have"],
          ["whom"],
          ["whereby", "in which", "under which", "where"],
          ["do"],
          ["did"],
          ["Having"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Complete the sentences",
        instructions: "Match each beginning to the ending that completes it correctly. Two endings are not used.",
        left: [
          "Had the warning signs been noticed earlier,",
          "Not until the new bridge opened",
          "The report makes several recommendations,",
          "Were taxes on fuel to rise sharply,",
          "So severe was the flooding",
          "Little did the planners realise",
        ],
        right: [
          "how popular the new park would become.",
          "the island's economy began to grow.",
          "the crisis might have been avoided.",
          "that the town centre was closed for a month.",
          "the most important of which concerns funding.",
          "did the island's economy begin to grow.",
          "many rural families would struggle to get to work.",
          "the crisis would have avoided.",
        ],
        answer: [2, 5, 4, 6, 3, 0],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "order",
        mode: "words",
        title: "Build an emphatic sentence",
        instructions: "Put the chunks in order to make one accurate sentence with inversion.",
        items: [
          "Only when",
          "housing becomes",
          "affordable again",
          "will",
          "young people",
          "be able",
          "to start families",
          "as early as",
          "their parents did.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: range with control",
        instructions: "Plan your main idea first, then decide which structures fit it. After writing, underline each target structure and check its form against the table in this lesson.",
        prompt:
          "Essay question: *In many countries, young adults are leaving their home towns to live in large cities. What problems does this cause, and what can be done to solve them?*\n\nWrite ONE body paragraph (at least 140 words) about the problems OR the solutions. Use at least FIVE different structures from this lesson accurately, for example a mixed or inverted conditional, a reporting passive, a quantifier or prepositional relative clause, a participle clause and one inversion. Each structure should express something you genuinely mean.",
        minWords: 140,
        minutes: 15,
        rubric: [
          "Task response: My paragraph answers one part of the question (problems or solutions) with a clear main idea and support.",
          "Grammatical range and accuracy: I used at least five different structures from the lesson, each in the correct form.",
          "Grammatical range and accuracy: My conditionals use verb forms that match their time reference (past condition → present result; Should/Had/Were + subject).",
          "Grammatical range and accuracy: After Not only, Only when, Rarely and similar adverbials, the auxiliary comes before the subject in the right clause.",
          "Grammatical range and accuracy: My participle clauses share the subject of the main clause, and my relative clauses use whom/which and commas correctly.",
          "Coherence and cohesion: The structures serve my argument; the paragraph still reads naturally and is not overloaded.",
          "Lexical resource: I used precise topic vocabulary (rural, depopulation, infrastructure, remote work) with accurate collocations.",
          "I wrote at least 140 words in about 15 minutes.",
        ],
        modelAnswer:
          "The most serious problem is the slow decline of the communities that young people leave behind. Rural towns are often said to have lost an entire generation of workers, many of whom would have stayed had there been suitable jobs nearby. Deprived of younger residents, these towns struggle to keep schools, shops and bus services open, which in turn makes them even less attractive to the young families they need. Not only does this cycle weaken local economies, but it also leaves older residents increasingly isolated, with relatives living hours away. The cities, meanwhile, face the opposite pressure: housing and transport systems that were designed for far smaller populations. Rarely is this imbalance discussed as a single problem, yet it clearly is one. Were governments to treat rural decline and urban overcrowding together, investment in regional jobs and transport would be seen as a way of easing pressure on the cities, not merely as support for the countryside.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In your last 3–4 minutes, check every complex structure you used: the auxiliary after inversion, the verb forms in conditionals, and the commas around non-defining clauses. An inaccurate advanced structure counts as an error, not as range.",
    },
    {
      exam: "ielts",
      body: "Range matters in Task 1 too. Passives (*was followed by a sharp fall*), participle clauses (*rising to 40% by 2020*) and relative clauses (*, which was the highest figure*) let you vary a report that would otherwise repeat *increased* and *decreased*.",
    },
    {
      exam: "toeic",
      body: "In the TOEIC opinion essay, a few well-chosen complex sentences (a conditional to show consequences, a relative clause to add a detail) show grammatical variety without slowing you down. Do not spend time building rare structures; clarity and accuracy come first.",
    },
  ],
  vocabulary: [
    { word: "inversion", meaning: "putting an auxiliary verb before the subject, for example after Rarely or Not only", example: "Use inversion once or twice in an essay for emphasis.", topic: "academic" },
    { word: "mixed conditional", meaning: "a conditional in which the condition and the result refer to different times", example: "“If I had saved more, I would be richer now” is a mixed conditional.", topic: "academic" },
    { word: "reporting passive", meaning: "a structure such as “It is said that…” or “X is believed to…”, used to report general opinion", example: "A reporting passive avoids naming a vague source.", topic: "academic" },
    { word: "adaptable", meaning: "able to change to suit new conditions", example: "Employers increasingly value adaptable graduates.", topic: "work" },
    { word: "retrain", meaning: "to learn the skills needed for a different job", example: "Many factory workers retrained as technicians.", topic: "work" },
    { word: "automation", meaning: "the use of machines and computers to do work previously done by people", example: "Automation has replaced many routine office tasks.", topic: "technology" },
    { word: "labour market", meaning: "the supply of workers and the jobs available in an economy", example: "The labour market is changing faster than ever.", topic: "work" },
    { word: "underinvestment", meaning: "spending too little money on something over a long period", example: "Decades of underinvestment have left the railway in poor condition.", topic: "business" },
    { word: "deprived of", meaning: "without something that is needed", example: "Deprived of young workers, the town's economy declined.", topic: "society" },
    { word: "depopulation", meaning: "a fall in the number of people living in an area", example: "Rural depopulation has closed many village schools.", topic: "society" },
    { word: "landmark", meaning: "a building or place that is easy to recognise and important to an area", example: "The old station is now a local landmark.", topic: "travel" },
  ],
  keyPoints: [
    "Band 7+ grammar means a variety of complex structures used accurately, not the most complex sentence possible.",
    "Mixed conditionals link past causes and present results; Had, Should and Were inversion is a formal alternative to if.",
    "Reporting passives (is thought to, is said to have) present general views objectively.",
    "Prepositional and quantifier relative clauses and participle clauses add detail concisely: check whom, commas and the logical subject.",
    "Use inversion after negative adverbials for emphasis, once or twice per essay, with the auxiliary in the right place.",
  ],
};

export default lesson;
