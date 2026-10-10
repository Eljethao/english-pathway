import type { GrammarTopic } from "@/lib/types";

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  /* ---------- B1 ---------- */
  {
    slug: "present-perfect-vs-past-simple",
    title: "Present perfect vs past simple",
    level: "B1",
    summary:
      "Choose between the present perfect (I have seen) and the past simple (I saw) by asking one question: is the time finished, or does it connect to now?",
    explanation:
      "Both tenses talk about the past, but they look at it in different ways.\n\nUse the **past simple** when the action happened at a finished time. We often say or know *when*: *yesterday*, *last year*, *in 2019*, *two days ago*.\n\nUse the **present perfect** (have/has + past participle) when the past connects to now:\n\n- life experience, with no time given: *I've visited Japan twice.*\n- a situation that started in the past and continues now: *She has worked here since 2020.*\n- a recent action with a result now: *I've lost my keys, so I can't get in.*\n\n**Signal words.** *Ago*, *yesterday*, *last…* and questions with *when* go with the past simple. *Ever*, *never*, *already*, *yet*, *just*, *since* and *for* (up to now) usually go with the present perfect. But *for* also works with the past simple when the period is finished: *I lived in Paris for two years* (I don't live there now).\n\nOnce you give a finished time, change to the past simple: *I've been to Rome. I went there in 2018.*",
    forms: {
      headers: ["", "Past simple", "Present perfect"],
      rows: [
        ["Form", "verb + -ed or irregular (worked, went)", "have/has + past participle (have worked, has gone)"],
        ["Time", "finished: yesterday, in 2019, ago", "unfinished or not stated: ever, yet, since, for"],
        ["Question", "When did you arrive?", "Have you ever been to Canada?"],
      ],
    },
    examples: [
      "I **have lived** in Hanoi for six years.",
      "We **moved** here in 2019.",
      "**Have** you **finished** the report yet?",
      "She **started** the course three weeks ago.",
      "Prices **have risen** sharply since last year.",
      "I **saw** that film when I was a student.",
    ],
    mistakes: [
      {
        wrong: "I have seen him yesterday.",
        right: "I saw him yesterday.",
        note: "*Yesterday* is a finished time, so use the past simple.",
      },
      {
        wrong: "I live here since 2020.",
        right: "I have lived here since 2020.",
        note: "For a situation that started in the past and continues now, use the present perfect with *since* or *for*.",
      },
      {
        wrong: "When have you arrived?",
        right: "When did you arrive?",
        note: "Questions with *when* ask about a specific time, so they take the past simple.",
      },
    ],
    examUse:
      "In IELTS Speaking Part 1 and the TOEFL Take an Interview task you often talk about experiences (*I've always enjoyed…*, *I started learning…*), and accurate tense choice is part of your grammar score. In IELTS Writing Task 1, describe trends up to now with the present perfect (*has increased since 2010*) and data from finished years with the past simple (*fell in 2015*). TOEIC Reading Part 5 regularly tests time signals such as *since*, *ago* and *yet*.",
  },
  {
    slug: "future-forms",
    title: "Future forms: will, going to and present tenses",
    level: "B1",
    summary:
      "Learn when to use will, be going to, the present continuous and the present simple to talk about the future.",
    explanation:
      "English has several ways to talk about the future. The choice depends on when you made the decision and how certain you are.\n\n- **will**: decisions made at the moment of speaking, promises, offers and predictions based on opinion: *I'll help you carry that.* *I think prices will go up.*\n- **be going to**: plans you made before now, and predictions based on what you can see: *I'm going to study medicine.* *Look at those clouds. It's going to rain.*\n- **present continuous**: fixed personal arrangements (often with other people or already booked), usually with a time or place: *I'm meeting the manager at 3 p.m.*\n- **present simple**: timetables and schedules: *The train leaves at 6.40.*\n\nAfter time words such as *when*, *as soon as*, *before*, *after* and *until*, use a present tense, not *will*: *I'll call you when I arrive.*",
    forms: {
      headers: ["Form", "Main use", "Example"],
      rows: [
        ["will + verb", "instant decision, promise, opinion", "I'll send it now."],
        ["be going to + verb", "plan; prediction from evidence", "We're going to open a new office."],
        ["present continuous", "arrangement", "She's flying to Seoul on Friday."],
        ["present simple", "timetable", "The conference starts at nine."],
      ],
    },
    examples: [
      "Don't worry, **I'll lock** the door.",
      "We **are going to launch** the new app in May.",
      "**I'm having** lunch with a client tomorrow.",
      "The last bus **leaves** at 11.30.",
      "Experts think demand **will grow** next year.",
      "I'll text you as soon as I **get** home.",
    ],
    mistakes: [
      {
        wrong: "I will call you when I will arrive.",
        right: "I will call you when I arrive.",
        note: "After *when*, *as soon as*, *until* and similar words, use the present simple for future meaning.",
      },
      {
        wrong: "What do you do this weekend?",
        right: "What are you doing this weekend?",
        note: "To ask about plans and arrangements, use the present continuous (or *going to*). *What do you do…?* asks about habits or someone's job.",
      },
      {
        wrong: "The phone's ringing. I'm going to answer it.",
        right: "The phone's ringing. I'll answer it.",
        note: "For a decision you make at the moment of speaking, use *will*. *Going to* suggests you had already planned it.",
      },
    ],
    examUse:
      "IELTS Speaking Part 1 may ask about your plans (*What are you going to do after your studies?*), and using a range of future forms shows grammatical flexibility. TOEFL Write an Email tasks often need arrangements and promises (*I'll send the form by Friday*). TOEIC Listening Parts 3 and 4 frequently ask what a speaker *will do next*, so listen for *I'll*, *I'm going to* and *let me*.",
  },
  {
    slug: "narrative-tenses",
    title: "Narrative tenses",
    level: "B1",
    summary:
      "Tell stories clearly with the past simple, past continuous, past perfect and past perfect continuous.",
    explanation:
      "When you tell a story about the past, you usually need more than one past tense.\n\n- **Past simple** for the main events, in order: *I opened the door and walked in.*\n- **Past continuous** (was/were + -ing) for background, or an action in progress when something else happened: *It was raining when I left.*\n- **Past perfect** (had + past participle) for an action that happened *before* another past event: *When I got to the station, the train had already left.*\n- **Past perfect continuous** (had been + -ing) for a longer activity up to a moment in the past: *She was tired because she had been working all night.*\n\nIf you tell the events in the order they happened, the past simple is enough: *I got up, had a shower and left.* Use the past perfect when you go back to an earlier time, or when the past simple would change the meaning: *When I arrived, the train left* (I saw it leave) vs *When I arrived, the train had left* (it was already gone).",
    forms: {
      headers: ["Tense", "Form", "Example"],
      rows: [
        ["Past simple", "verb + -ed or irregular", "I missed the bus."],
        ["Past continuous", "was/were + -ing", "I was waiting at the stop."],
        ["Past perfect", "had + past participle", "The bus had already gone."],
        ["Past perfect continuous", "had been + -ing", "I had been waiting for an hour."],
      ],
    },
    examples: [
      "While I **was cycling** to work, I **saw** an accident.",
      "By the time the police **arrived**, the thief **had escaped**.",
      "The sun **was shining** and children **were playing** in the park.",
      "Her eyes were red because she **had been crying**.",
      "I **had never flown** before, so I **was** very nervous.",
    ],
    mistakes: [
      {
        wrong: "When I arrived, the meeting already started.",
        right: "When I arrived, the meeting had already started.",
        note: "The meeting started before you arrived, so use the past perfect.",
      },
      {
        wrong: "I was knowing the answer.",
        right: "I knew the answer.",
        note: "State verbs such as *know*, *believe* and *want* are not normally used in continuous forms.",
      },
      {
        wrong: "While I walked home, it was starting to rain.",
        right: "While I was walking home, it started to rain.",
        note: "The longer background action takes the past continuous; the short action that interrupts it takes the past simple.",
      },
    ],
    examUse:
      "IELTS Speaking Part 2 cue cards often ask you to *describe a time when…*, and a mix of narrative tenses makes your story clear and raises your grammar score. In the TOEFL Take an Interview task you may describe a past experience in about 45 seconds. In TOEIC Reading Part 5, sentences with *by the time*, *when* and *already* can test the past perfect.",
  },
  {
    slug: "conditionals",
    title: "Conditionals: zero, first, second and third",
    level: "B1",
    summary:
      "Use the four main conditional patterns to talk about facts, real possibilities, imagined situations and past regrets.",
    explanation:
      "A conditional sentence has two parts: the *if*-clause (the condition) and the main clause (the result). The tenses you choose show how real or possible the situation is.\n\n- **Zero conditional**: general truths and facts. *If you heat ice, it melts.*\n- **First conditional**: real possibilities in the future. *If it rains, we'll stay inside.*\n- **Second conditional**: unreal or unlikely situations now or in the future. *If I had more time, I would learn the piano.*\n- **Third conditional**: imagined past situations that did not happen. *If we had left earlier, we would have caught the train.*\n\nThe *if*-clause can come first or second. When it comes first, we usually put a comma after it.\n\nYou can also use *unless* (= if not), *as long as* and *provided that*: *You can't enter unless you have a ticket.*",
    forms: {
      headers: ["Type", "If-clause", "Main clause"],
      rows: [
        ["Zero", "present simple", "present simple"],
        ["First", "present simple", "will / can / may + verb"],
        ["Second", "past simple", "would / could / might + verb"],
        ["Third", "past perfect", "would / could / might have + past participle"],
      ],
    },
    examples: [
      "If you **mix** blue and yellow, you **get** green.",
      "If the price **falls**, more people **will buy** electric cars.",
      "If I **were** the manager, I **would change** the schedule.",
      "If she **had studied** harder, she **would have passed** the exam.",
      "We **won't finish** on time **unless** everyone **helps**.",
    ],
    mistakes: [
      {
        wrong: "If I will see her, I'll tell her.",
        right: "If I see her, I'll tell her.",
        note: "Do not use *will* in the *if*-clause of a first conditional.",
      },
      {
        wrong: "If I would have more money, I would travel.",
        right: "If I had more money, I would travel.",
        note: "The second conditional uses the past simple in the *if*-clause, not *would*.",
      },
      {
        wrong: "If I had seen the sign, I wouldn't make that mistake.",
        right: "If I had seen the sign, I wouldn't have made that mistake.",
        note: "The mistake happened in the past, so the result needs *would have* + past participle.",
      },
    ],
    examUse:
      "Conditionals are very useful in IELTS Writing Task 2 for discussing consequences (*If governments invested more in public transport, traffic would fall*) and in IELTS Speaking Part 3 for hypothetical questions. In the TOEFL Academic Discussion, a well-placed conditional helps you support an opinion. TOEIC Reading Part 5 often tests the verb form after *if*, *unless* and *provided that*.",
  },
  {
    slug: "countable-uncountable-quantifiers",
    title: "Countable and uncountable nouns with quantifiers",
    level: "B1",
    summary:
      "Know which nouns can be counted and choose the right quantifier: many or much, few or little, fewer or less.",
    explanation:
      "**Countable nouns** have a singular and a plural form: *one book, two books*. **Uncountable nouns** have no plural and take a singular verb: *information, advice, furniture, money, research, equipment, traffic*.\n\nQuantifiers change depending on the noun:\n\n- countable: *many, a few, few, a number of, fewer*\n- uncountable: *much, a little, little, an amount of, less*\n- both: *some, any, a lot of, plenty of, most, all, no*\n\n*A few* and *a little* are positive (some, a small number or amount): *A few students passed* sounds fairly good. *Few* and *little* without *a* are negative (not many, not much, less than we hoped): *Few students passed* means the result was disappointing.\n\nTo count an uncountable noun, use a unit: *a piece of advice*, *an item of furniture*, *two pieces of equipment*.\n\nSome nouns can be both, with a change in meaning: *a coffee* (a cup) vs *coffee* (the drink in general); *a paper* (a newspaper or an essay) vs *paper* (the material).",
    forms: {
      headers: ["", "Countable (plural)", "Uncountable"],
      rows: [
        ["large amount", "many, a large number of", "much, a large amount of"],
        ["small amount (positive)", "a few", "a little"],
        ["small amount (negative)", "few", "little"],
        ["comparison", "more, fewer", "more, less"],
      ],
    },
    examples: [
      "Could you give me **some advice** about the course?",
      "There **weren't many people** at the meeting.",
      "We have **a little time** before the train leaves.",
      "**Few tourists** visit the island in winter.",
      "The company bought **three new pieces of equipment**.",
      "There is **less traffic** in the city on Sundays.",
    ],
    mistakes: [
      {
        wrong: "Can you give me some informations?",
        right: "Can you give me some information?",
        note: "*Information* is uncountable, so it has no plural.",
      },
      {
        wrong: "There were less people than we expected.",
        right: "There were fewer people than we expected.",
        note: "In exams, use *fewer* with plural countable nouns and *less* with uncountable nouns.",
      },
      {
        wrong: "How much students are in your class?",
        right: "How many students are in your class?",
        note: "*Many* goes with plural countable nouns; *much* goes with uncountable nouns.",
      },
    ],
    examUse:
      "IELTS Writing Task 1 needs accurate quantity language: *the number of cars* (countable) but *the amount of energy* (uncountable). Examiners also notice errors such as *researches* or *advices*. TOEIC Reading Part 5 frequently tests *few/little*, *fewer/less* and *much/many*, and nouns like *equipment* and *luggage* that are uncountable in English.",
  },

  /* ---------- B2 ---------- */
  {
    slug: "articles",
    title: "Articles: a/an, the and no article",
    level: "B2",
    summary:
      "Decide between a/an, the and no article by thinking about whether the noun is general, new or already known to the reader.",
    explanation:
      "Articles are small words, but mistakes with them are very noticeable.\n\n**a/an** is used with singular countable nouns when the listener doesn't know which one we mean, or when we mention something for the first time: *I bought a laptop.* It also describes jobs and types: *She's an engineer.*\n\n**the** is used when the listener knows which one we mean:\n\n- it was mentioned before: *The laptop was cheap.*\n- there is only one: *the sun*, *the internet*, *the government*\n- the context makes it clear: *Can you close the window?*\n- superlatives and ordinals: *the best*, *the first*\n- some geographical names: *the Pacific*, *the Alps*, *the United States*\n\n**No article** is used with plural and uncountable nouns when we talk in general: *Cars cause pollution.* *Information is power.* Compare: *The information in this report is out of date* (specific information).\n\nA useful test: if you can ask \"Which one?\" and the answer is clear to the reader, you probably need *the*.",
    forms: {
      headers: ["Situation", "Article", "Example"],
      rows: [
        ["first mention, singular", "a/an", "There's a problem with the printer."],
        ["known or specific", "the", "The problem is the paper tray."],
        ["general, plural", "no article", "Printers are expensive to repair."],
        ["general, uncountable", "no article", "Paper is made from wood."],
        ["only one exists", "the", "the environment, the economy"],
      ],
    },
    examples: [
      "**Unemployment** is a serious issue in many regions.",
      "**The unemployment rate** rose to 6% last year.",
      "She works as **a** nurse at **the** local hospital.",
      "**The** graph shows changes in energy use between 2000 and 2020.",
      "**Children** need **exercise** every day.",
      "It was **the** most interesting lecture I have ever attended.",
    ],
    mistakes: [
      {
        wrong: "The technology is changing our lives.",
        right: "Technology is changing our lives.",
        note: "When you mean technology in general, use no article.",
      },
      {
        wrong: "He is engineer.",
        right: "He is an engineer.",
        note: "Jobs, like other singular countable nouns, need *a/an*.",
      },
      {
        wrong: "Graph shows the number of tourists.",
        right: "The graph shows the number of tourists.",
        note: "You and the reader both know which graph, so use *the*.",
      },
    ],
    examUse:
      "Article errors are some of the most frequent errors in learners' writing, and frequent small errors make it hard to show the control of grammar that IELTS examiners look for in higher bands. In Task 1 you write about *the* graph, *the* proportion of and *the* number of; in Task 2, general nouns usually take no article (*Education is…*). TOEFL Complete the Words and TOEIC Reading Part 6 also reward accurate small words in context.",
  },
  {
    slug: "the-passive",
    title: "The passive",
    level: "B2",
    summary:
      "Form the passive in any tense and use it to focus on actions, results and processes, including reporting structures like it is believed that.",
    explanation:
      "In a passive sentence, the object of the action becomes the subject. The form is **be + past participle**, in any tense.\n\nUse the passive when:\n\n- the person who does the action is unknown, obvious or unimportant: *My bike was stolen.*\n- you want to focus on the action or the result: *The bridge was completed in 1932.*\n- you are writing formally or describing a process: *The leaves are dried and then crushed.*\n\nAdd *by* + the agent only when it gives useful information: *The novel was written by a teenager.*\n\nReporting verbs have two passive patterns that are common in academic writing:\n\n- *It is said / believed / thought that…*: *It is believed that the tower was built as a lighthouse.*\n- *Subject + is said / believed + to-infinitive*: *The tower is believed to have been a lighthouse.*\n\nOnly transitive verbs (verbs with an object) can be passive. Verbs such as *happen*, *arrive* and *die* cannot.",
    forms: {
      headers: ["Tense", "Passive form", "Example"],
      rows: [
        ["Present simple", "am/is/are + past participle", "Rice is grown in the south."],
        ["Past simple", "was/were + past participle", "The results were published in May."],
        ["Present perfect", "has/have been + past participle", "Ten new schools have been built."],
        ["Present continuous", "am/is/are being + past participle", "The road is being repaired."],
        ["Future", "will be + past participle", "The winners will be announced on Friday."],
        ["Modal", "modal + be + past participle", "Forms must be signed."],
      ],
    },
    examples: [
      "The museum **is visited** by over a million people every year.",
      "First, the bottles **are collected** and **sorted** by colour.",
      "The report **has been delayed** until next month.",
      "**It is estimated that** about a third of the food produced worldwide is lost or wasted.",
      "The suspect **is thought to have left** the country.",
      "All applications **must be submitted** online.",
    ],
    mistakes: [
      {
        wrong: "The accident was happened at night.",
        right: "The accident happened at night.",
        note: "*Happen* has no object, so it cannot be passive.",
      },
      {
        wrong: "The car is repairing at the moment.",
        right: "The car is being repaired at the moment.",
        note: "The car doesn't do the repairing. The present continuous passive needs *being* + past participle.",
      },
      {
        wrong: "English is speaking in many countries.",
        right: "English is spoken in many countries.",
        note: "The passive uses the past participle, not the -ing form.",
      },
    ],
    examUse:
      "The passive is essential for IELTS Academic Writing Task 1 process diagrams (*the clay is shaped, then it is fired*) and makes Task 2 essays sound more objective. In the TOEFL Read an Academic Passage task, passive and reporting structures (*it is widely believed that…*) are common, so recognising them helps comprehension. TOEIC Reading Part 5 often asks you to choose between an active and a passive verb form.",
  },
  {
    slug: "relative-clauses",
    title: "Relative clauses",
    level: "B2",
    summary:
      "Use who, which, that, whose, where and when to add information, and know the difference between defining and non-defining clauses.",
    explanation:
      "Relative clauses give more information about a noun. They start with a relative word: *who* (people), *which* (things), *that* (people or things), *whose* (possession), *where* (places) or *when* (times).\n\n**Defining** relative clauses tell us *which* person or thing we mean. They have no commas, and you can use *that*: *The woman who interviewed me was very friendly.*\n\n**Non-defining** relative clauses add extra information about something we have already identified. They need commas, and you cannot use *that*: *My manager, who has worked here for 20 years, is retiring.*\n\nIn defining clauses, you can leave out the pronoun when it is the object of the clause: *The book (that) I'm reading is excellent.*\n\nA non-defining clause with *which* can refer to a whole idea: *The train was late, which meant I missed the meeting.*\n\nIn formal writing, a preposition often goes before *which* or *whom*: *the company for which she works*.",
    forms: {
      headers: ["Word", "Refers to", "Example"],
      rows: [
        ["who", "people", "the student who won the prize"],
        ["which", "things, whole ideas", "the course, which lasts two years,"],
        ["that", "people or things (defining only)", "the app that I use every day"],
        ["whose", "possession", "the man whose car was stolen"],
        ["where", "places", "the town where I grew up"],
        ["when", "times", "the year when we met"],
      ],
    },
    examples: [
      "Students **who submit late** will lose marks.",
      "The library, **which opened in 1890**, is the oldest in the region.",
      "That's the colleague **whose idea** won the award.",
      "This is the café **where we had our first meeting**.",
      "Sales fell sharply in March, **which surprised** most analysts.",
      "The person **to whom this letter is addressed** has left the company.",
    ],
    mistakes: [
      {
        wrong: "My sister, that lives in Paris, is a doctor.",
        right: "My sister, who lives in Paris, is a doctor.",
        note: "Non-defining clauses (with commas) cannot use *that*.",
      },
      {
        wrong: "This is the hotel where we stayed there.",
        right: "This is the hotel where we stayed.",
        note: "Don't repeat the place or the object. The relative word already replaces it.",
      },
      {
        wrong: "The man which called you is waiting outside.",
        right: "The man who called you is waiting outside.",
        note: "Use *who* or *that* for people, not *which*.",
      },
    ],
    examUse:
      "IELTS examiners look for a range of complex sentences in both Writing and Speaking, and relative clauses are one of the most reliable ways to build them. In IELTS Writing Task 1 they help you combine data (*Japan, which had the highest figure, …*). TOEIC Reading Part 5 often tests the choice between *who*, *which*, *whose* and *where*, and TOEFL Build a Sentence tasks may ask you to put the words of a relative clause in order.",
  },
  {
    slug: "modals-of-speculation-and-deduction",
    title: "Modal verbs of speculation and deduction",
    level: "B2",
    summary:
      "Use must, might, may, could and can't (plus have + past participle) to show how sure you are about the present and the past.",
    explanation:
      "We use modal verbs to show how certain we are about something, based on the evidence we have.\n\n**About the present:**\n\n- *must* = I'm almost sure it's true: *She must be tired; she's been working since six.*\n- *might / may / could* = it's possible: *He might be in a meeting.*\n- *can't* = I'm almost sure it's not true: *That can't be Tom; he's on holiday.*\n\n**About the past**, use modal + *have* + past participle:\n\n- *must have*: *The road is wet. It must have rained.*\n- *might / may / could have*: *They might have missed the bus.*\n- *can't / couldn't have*: *She can't have seen the email; she hasn't replied.*\n\nThe opposite of *must* for deduction is *can't*, not *mustn't*. In British English, *mustn't* normally means something is not allowed. In American English, *must not* can also express a negative deduction (*He must not be home*), but *can't* is correct everywhere and is the safe choice in exams.\n\nFor an action in progress, use *be + -ing*: *He must be working from home today.*",
    forms: {
      headers: ["Certainty", "Present", "Past"],
      rows: [
        ["almost certain (yes)", "must + verb", "must have + past participle"],
        ["possible", "might / may / could + verb", "might / may / could have + past participle"],
        ["almost certain (no)", "can't / couldn't + verb", "can't / couldn't have + past participle"],
      ],
    },
    examples: [
      "The lights are off. They **must be** out.",
      "I can't find my wallet. I **might have left** it at the café.",
      "This **can't be** the right address; it's a car park.",
      "The ground is dry, so it **can't have rained** last night.",
      "She's late. She **could be** stuck in traffic.",
      "He knows a lot about wine. He **must have worked** in a restaurant.",
    ],
    mistakes: [
      {
        wrong: "He mustn't be at home; his car isn't there.",
        right: "He can't be at home; his car isn't there.",
        note: "For a negative deduction, use *can't*. In British English, *mustn't* expresses prohibition (*You mustn't park here*).",
      },
      {
        wrong: "She must went home early.",
        right: "She must have gone home early.",
        note: "For a deduction about the past, use modal + *have* + past participle.",
      },
      {
        wrong: "It can be true, but I'm not sure.",
        right: "It could be true, but I'm not sure.",
        note: "For possibility about one particular situation, use *could*, *might* or *may*. *Can* is for general possibility (*Winters can be very cold here*).",
      },
    ],
    examUse:
      "In IELTS Speaking Part 3 and the TOEFL Academic Discussion you often speculate about causes and future developments, and modals let you sound careful rather than overconfident. In the TOEIC Speaking *Describe a picture* task, careful guesses such as *they might be colleagues* or *it must be early morning* help you say more about the photo. In listening tests, *must have* and *can't have* can signal a speaker's conclusion, which is exactly what inference questions target.",
  },
  {
    slug: "reported-speech",
    title: "Reported speech",
    level: "B2",
    summary:
      "Report statements, questions and requests accurately, with the right tense changes and reporting verbs such as advise, deny and suggest.",
    explanation:
      "Reported speech tells someone what another person said without quoting their exact words.\n\nWhen the reporting verb is in the past (*said*, *told*), the tense usually moves one step back:\n\n- present simple → past simple: *\"I work here.\"* → *She said she worked there.*\n- present perfect → past perfect: *\"I've finished.\"* → *He said he had finished.*\n- past simple → past perfect, or no change when the order of events is clear: *\"I saw her.\"* → *He said he had seen her* / *he saw her.*\n- *will* → *would*, *can* → *could*, *may* → *might*\n\nIf the information is still true, you can keep the original tense: *She said she works in Tokyo* (she still does).\n\nPronouns, time words and places change when the context changes: *today* → *that day*, *tomorrow* → *the next day*, *here* → *there*.\n\n**Questions** use statement word order and no *do/does/did*: *\"Where do you live?\"* → *He asked me where I lived.* Yes/no questions use *if* or *whether*.\n\n**Say or tell?** *Tell* needs a person: *She told me (that)…*. *Say* does not: *She said (that)…*.\n\nMany reporting verbs summarise the speaker's purpose: *advise, suggest, warn, admit, deny, promise, refuse, recommend*.",
    forms: {
      headers: ["Direct speech", "Reported speech"],
      rows: [
        ["\"I am tired.\"", "He said (that) he was tired."],
        ["\"We have finished.\"", "They said they had finished."],
        ["\"I will call you.\"", "She said she would call me."],
        ["\"Can you help?\"", "He asked if I could help."],
        ["\"Don't touch it.\"", "She told me not to touch it."],
      ],
    },
    examples: [
      "She **told me** that the meeting **had been cancelled**.",
      "He **asked whether** the price **included** breakfast.",
      "The doctor **advised me to get** more sleep.",
      "The minister **denied taking** the money.",
      "My manager **suggested meeting** on Monday instead.",
      "They **said they would send** the contract the next day.",
    ],
    mistakes: [
      {
        wrong: "He said me that he was busy.",
        right: "He told me that he was busy.",
        note: "*Say* is not followed directly by a person; use *tell* + person.",
      },
      {
        wrong: "She asked me where did I live.",
        right: "She asked me where I lived.",
        note: "Reported questions use statement word order without *did*.",
      },
      {
        wrong: "He suggested me to apply for the job.",
        right: "He suggested that I apply for the job.",
        note: "*Suggest* is not followed by object + to-infinitive. Use *suggest that…* or *suggest* + -ing.",
      },
    ],
    examUse:
      "In IELTS Writing Task 2 and the TOEFL Academic Discussion, reporting verbs (*critics argue that…*, *some people claim…*) let you present other views before giving your own. In IELTS Speaking Part 2 you may need to describe a conversation or a piece of advice someone gave you. TOEIC Listening Parts 3 and 4 often ask what someone said or requested, and Reading Part 5 tests patterns like *advise someone to* and *recommend* + -ing.",
  },
  {
    slug: "gerunds-and-infinitives",
    title: "Gerunds and infinitives",
    level: "B2",
    summary:
      "Learn which verbs are followed by -ing and which by to + verb, and how remember, stop and try change meaning.",
    explanation:
      "When one verb follows another, the second verb is either a **gerund** (-ing) or an **infinitive** (*to* + verb). The first verb decides which.\n\n- **verb + -ing**: *enjoy, avoid, consider, finish, mind, suggest, recommend, risk, deny, keep*: *I avoid driving in the rush hour.*\n- **verb + to-infinitive**: *want, decide, hope, plan, agree, refuse, manage, afford, offer, promise*: *We decided to postpone the trip.*\n- **verb + object + to-infinitive**: *ask, tell, advise, encourage, allow, expect*: *She encouraged me to apply.*\n\nAlways use **-ing** after a preposition: *She's interested in studying law.* *Thank you for waiting.* Note that *look forward to*, *be used to* and *object to* end in the preposition *to*: *I look forward to meeting you.*\n\nSome verbs take both forms with a **change in meaning**:\n\n- *remember / forget*: *I remember locking the door* (a memory) vs *Remember to lock the door* (a task).\n- *stop*: *He stopped smoking* (he quit) vs *He stopped to smoke* (he paused in order to smoke).\n- *try*: *Try restarting it* (an experiment) vs *I tried to lift it* (an effort).",
    forms: {
      headers: ["Pattern", "Common verbs", "Example"],
      rows: [
        ["verb + -ing", "enjoy, avoid, consider, finish, suggest", "They considered moving abroad."],
        ["verb + to-infinitive", "decide, hope, refuse, manage, afford", "He refused to answer."],
        ["verb + object + to-infinitive", "ask, advise, allow, encourage", "My tutor advised me to rewrite it."],
        ["preposition + -ing", "interested in, good at, before, after", "She left without saying goodbye."],
      ],
    },
    examples: [
      "Would you **mind closing** the window?",
      "The company **has agreed to extend** the deadline.",
      "Our manager **encouraged us to share** our ideas.",
      "**After finishing** the course, she found a job in marketing.",
      "Please **remember to sign** the form before you leave.",
      "I **look forward to receiving** your reply.",
    ],
    mistakes: [
      {
        wrong: "I look forward to hear from you.",
        right: "I look forward to hearing from you.",
        note: "In *look forward to*, *to* is a preposition, so it is followed by -ing.",
      },
      {
        wrong: "She suggested to take a taxi.",
        right: "She suggested taking a taxi.",
        note: "*Suggest* is followed by -ing (or *that* + clause), not a to-infinitive.",
      },
      {
        wrong: "I can't afford buying a new car.",
        right: "I can't afford to buy a new car.",
        note: "*Afford* is followed by a to-infinitive.",
      },
    ],
    examUse:
      "Verb patterns are a favourite TOEIC Reading Part 5 target: you choose between *to apply*, *applying* and *apply* after verbs such as *recommend*, *agree* or *look forward to*. In formal emails (TOEFL Write an Email, IELTS General Training Task 1), set phrases like *I look forward to hearing from you* and *I would appreciate receiving…* must be accurate. Correct patterns also raise your IELTS grammatical accuracy score in both Writing and Speaking.",
  },

  /* ---------- C1 ---------- */
  {
    slug: "mixed-conditionals",
    title: "Mixed conditionals",
    level: "C1",
    summary:
      "Combine past and present time frames in one conditional sentence to talk about how past events affect the present, and vice versa.",
    explanation:
      "Mixed conditionals combine two time frames in one sentence, because the condition and the result belong to different times.\n\n**Past condition → present result.** An imagined change in the past would affect the present. Use a third-conditional *if*-clause with a second-conditional main clause:\n\n*If I had taken that job in London, I would be living there now.*\n\n**Present (or permanent) condition → past result.** A present fact or a permanent quality would have changed a past event. Use a second-conditional *if*-clause with a third-conditional main clause:\n\n*If she weren't so organised, the project would have failed.*\n\nTo choose the form, ask two questions: *When is the condition true?* and *When is the result?*\n\nIn formal English, you can drop *if* and invert the subject and auxiliary: *Had I known, I would be with them now.* *Were it not for her support, I would have given up.*",
    forms: {
      headers: ["Type", "If-clause", "Main clause", "Example"],
      rows: [
        ["Past → present", "past perfect", "would / could / might + verb", "If I had saved more, I would be better off now."],
        ["Present → past", "past simple", "would / could / might have + past participle", "If I spoke Spanish, I would have understood the guide."],
      ],
    },
    examples: [
      "If he **hadn't broken** his leg, he **would be playing** in the final tomorrow.",
      "If we **had invested** in renewable energy earlier, we **wouldn't be** so dependent on imports today.",
      "If I **weren't** afraid of heights, I **would have climbed** to the top.",
      "If she **had accepted** the offer, she **might be** a partner at the firm by now.",
      "**Had** the city **built** a metro in the 1990s, traffic **would be** far lighter today.",
      "If he **were** more careful, he **wouldn't have made** such a basic mistake.",
    ],
    mistakes: [
      {
        wrong: "If I had studied medicine, I would have been a doctor now.",
        right: "If I had studied medicine, I would be a doctor now.",
        note: "With *now*, the result is in the present, so use *would* + verb, not *would have* + past participle.",
      },
      {
        wrong: "If I would have known, I would be there now.",
        right: "If I had known, I would be there now.",
        note: "Don't use *would* in the *if*-clause; a past condition takes the past perfect.",
      },
      {
        wrong: "If he isn't so shy, he would have spoken to her.",
        right: "If he weren't so shy, he would have spoken to her.",
        note: "An unreal present condition takes the past simple (*were/weren't*), even when the result is in the past.",
      },
    ],
    examUse:
      "Accurate mixed conditionals are a clear sign of the grammatical range and flexibility that the higher IELTS bands describe in both Writing and Speaking. They are especially useful in IELTS Speaking Part 3 and Writing Task 2 when you evaluate past decisions and their effects today (*If cities had been planned around public transport, they would be more liveable now*). In the TOEFL Academic Discussion, one accurate mixed conditional can strengthen an argument about causes and consequences.",
  },
  {
    slug: "inversion-for-emphasis",
    title: "Inversion for emphasis",
    level: "C1",
    summary:
      "Put negative and limiting expressions such as never, not only and only when at the start of a sentence for formal emphasis.",
    explanation:
      "In formal English, we can put a negative or limiting expression at the start of a sentence for emphasis. The subject and the auxiliary then change places, as in a question.\n\n*I have never seen such a crowd.* → *Never have I seen such a crowd.*\n\nCommon expressions that trigger inversion:\n\n- *Never, Rarely, Seldom, Hardly ever*\n- *Not only… but (also)*\n- *No sooner… than* and *Hardly / Scarcely… when*\n- *Under no circumstances, On no account, In no way*\n- *Only then, Only when…, Only after…, Only by…*\n- *Not until…*\n- *Little* (meaning \"not at all\"): *Little did they know…*\n\nIf there is no auxiliary, add *do/does/did*: *Rarely does the city experience snow.*\n\nWith *only when*, *only after* and *not until*, the inversion is in the **main** clause, not in the time clause: *Only when the results came in did we realise our mistake.*\n\nInversion sounds formal and dramatic, so use it sparingly: one or two examples in an essay is plenty.",
    forms: {
      headers: ["Normal order", "With inversion"],
      rows: [
        ["We rarely see such talent.", "Rarely do we see such talent."],
        ["The plan was expensive and it was also unpopular.", "Not only was the plan expensive, but it was also unpopular."],
        ["As soon as I arrived, it started to rain.", "No sooner had I arrived than it started to rain."],
        ["You should not leave the door open under any circumstances.", "Under no circumstances should you leave the door open."],
        ["We understood only later.", "Only later did we understand."],
      ],
    },
    examples: [
      "**Seldom has** a government faced such strong opposition.",
      "**Not only does** the scheme save money, but it also reduces waste.",
      "**Hardly had** the meeting begun **when** the power went out.",
      "**Only by working together can** we solve this problem.",
      "**Not until** the last guest had left **did** she finally relax.",
      "**Little did** she realise how much her life was about to change.",
    ],
    mistakes: [
      {
        wrong: "Never I have seen such a mess.",
        right: "Never have I seen such a mess.",
        note: "After a negative adverb at the start, the auxiliary comes before the subject.",
      },
      {
        wrong: "Only when I got home I realised my phone was missing.",
        right: "Only when I got home did I realise my phone was missing.",
        note: "With *only when*, invert the main clause, not the time clause.",
      },
      {
        wrong: "No sooner had we sat down when the fire alarm went off.",
        right: "No sooner had we sat down than the fire alarm went off.",
        note: "*No sooner* pairs with *than*; *hardly* and *scarcely* pair with *when*.",
      },
    ],
    examUse:
      "Used accurately and sparingly, inversion helps show the wide range of structures that the higher IELTS bands describe, especially in Writing Task 2 (*Not only does this policy reduce emissions, but it also…*). It is too formal for most conversation, so use it rarely, if at all, in IELTS Speaking. In TOEFL and TOEIC reading, recognising inverted sentences stops you misreading who did what, and TOEIC Reading Part 5 occasionally tests *Not only… but also* and *Rarely does…*.",
  },
  {
    slug: "cleft-sentences",
    title: "Cleft sentences",
    level: "C1",
    summary:
      "Use it-clefts and what-clefts to focus attention on the key part of a sentence, for contrast, correction and clear argument.",
    explanation:
      "A cleft sentence splits one idea into two clauses so that one part gets extra focus. Clefts are common in both speech and writing.\n\n**It-clefts:** *It + be + focused part + that/who + rest of the sentence*\n\n*Maria solved the problem.* → *It was Maria who solved the problem* (not someone else).\n*It was in 2008 that the company first made a profit.*\n\n**Wh-clefts (pseudo-clefts):** *What + clause + be + focused part*\n\n*I need a long holiday.* → *What I need is a long holiday.*\n*What surprised me was how quiet the city was.*\n\nYou can focus on a whole action with *do*: *What she did was (to) call the police.* Or on an event with *happen*: *What happened was (that) the server crashed.*\n\nOther useful patterns: *The reason (why)… is that…*, *The thing that… is…*, *All I want is…*, *The place where… is…*.\n\nCleft sentences are useful for correcting someone, contrasting ideas and introducing your main point.",
    forms: {
      headers: ["Type", "Pattern", "Example"],
      rows: [
        ["It-cleft", "It is/was + X + that/who…", "It was the cost that worried us."],
        ["Wh-cleft", "What + clause + is/was + X", "What worried us was the cost."],
        ["Action focus", "What + subject + do/did + is/was + (to) verb", "What we did was cut our prices."],
        ["Reason", "The reason (why)… is that…", "The reason I'm late is that the bus broke down."],
        ["All", "All + clause + is/was…", "All I asked for was a little patience."],
      ],
    },
    examples: [
      "**It was** the price, not the quality, **that** put customers off.",
      "**What I really enjoy about** the job **is** meeting new people.",
      "**It wasn't until** I moved abroad **that** I appreciated my family.",
      "**What the government should do is** invest in training.",
      "**The reason** many people avoid public transport **is that** it is unreliable.",
      "**All we need now is** a decision from the board.",
    ],
    mistakes: [
      {
        wrong: "What I need it is more time.",
        right: "What I need is more time.",
        note: "Don't add an extra subject *it* after the wh-clause.",
      },
      {
        wrong: "It was in Rome where we first met.",
        right: "It was in Rome that we first met.",
        note: "When the focused part is a phrase such as *in Rome* or *in 2008*, use *that*, not *where* or *when*.",
      },
      {
        wrong: "The reason why I left is because the salary was low.",
        right: "The reason why I left is that the salary was low.",
        note: "In careful writing, *the reason… is* is followed by *that*; *because* repeats the idea of reason.",
      },
    ],
    examUse:
      "Cleft sentences help you signal your main point clearly, which supports coherence in IELTS Writing Task 2 (*What is often overlooked is…*) and fluency in IELTS Speaking Part 3 (*What I really like about it is…*). In the TOEFL Academic Discussion, a cleft is a natural way to respond to another student (*What Anna doesn't mention is…*). In listening tests, clefts often signal the key information that an answer depends on.",
  },
];
