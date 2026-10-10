import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-spelling-common-mistakes",
  title: "Spelling, capitals and common mistakes",
  summary:
    "Learn four useful spelling rules, choose correctly between words that sound the same, use capital letters correctly, and find the common B1 mistakes that readers notice most.",
  skill: "writing",
  level: "B1",
  order: 10,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Writing Task 1 (General Training)" },
    { exam: "toefl", task: "Writing – Write an Email" },
    { exam: "toeic", task: "Writing – Respond to a written request" },
  ],
  objectives: [
    "Use four spelling rules: doubling consonants, changing y to i, dropping a silent e, and -ful / -fully",
    "Choose correctly between words that sound the same, such as their / there / they're and quiet / quite",
    "Use capital letters for names, days, months, nationalities and languages, but not for seasons or most school subjects",
    "Find and correct common B1 grammar mistakes such as I am agree and some informations",
  ],
  warmUp: [
    "Which English words do you often spell wrongly? Write two of them.",
    "When you finish writing an email, do you check it? What do you look for?",
  ],
  learn: [
    {
      type: "text",
      title: "Why small mistakes matter",
      body: "Small mistakes can make a good message look careless. A reader who sees *alot*, *thier* or *monday* starts to notice the mistakes instead of your ideas.\n\nIn exams, accuracy is part of your score. In IELTS, spelling is part of **Lexical Resource** and grammar mistakes are part of **Grammatical Range and Accuracy**. In TOEFL and TOEIC writing tasks, raters also look at grammar and vocabulary. In every exam, you must check your own spelling, so a few simple rules help a lot.",
    },
    {
      type: "table",
      title: "Four spelling rules",
      headers: ["Rule", "Examples", "Be careful"],
      rows: [
        ["Short word ending in one vowel + one consonant: **double** the consonant before -ed, -ing, -er, -est", "stop → stopped, plan → planning, big → bigger, swim → swimming", "Not with w, x or y: snow → snowing, fix → fixed, play → played"],
        ["Longer word with the stress at the end: also **double**", "begin → beginning, prefer → preferred", "Stress at the start: visit → visited, open → opened. UK travel → travelled, US traveled"],
        ["Consonant + y: change **y to i**", "study → studies, studied; happy → happier, happiness", "Keep y before -ing (studying) and after a vowel (play → played, enjoy → enjoys)"],
        ["Silent e at the end: **drop the e** before -ing, -ed, -er", "make → making, hope → hoping, write → writer", "Keep it before a consonant: hope → hopeful, use → useful"],
      ],
    },
    {
      type: "example",
      title: "-ful and -fully",
      items: [
        "The adjective ending **-ful** has only one l: beauti**ful**, use**ful**, care**ful**, success**ful**.",
        "The adverb adds -ly, so it has two: care**fully**, success**fully**, beauti**fully**.",
        "Other adverbs work the same way: fina**l** → fina**lly**, rea**l** → rea**lly**, usua**l** → usua**lly**.",
        "Words learners often misspell: a**cc**o**mm**odation, ne**c**e**ss**ary, di**ff**erent, gover**n**ment, enviro**n**ment, rec**ei**ve, bel**ie**ve, unti**l**, defin**i**tely, a lot (two words).",
      ],
    },
    {
      type: "table",
      title: "Words that sound the same (or almost the same)",
      headers: ["Words", "Meaning", "Example"],
      rows: [
        ["their / there / they're", "belonging to them / a place, or *there is* / they are", "**They're** leaving **their** bags over **there**."],
        ["your / you're", "belonging to you / you are", "**You're** going to love **your** new job."],
        ["its / it's", "belonging to it / it is or it has", "**It's** a good company, and **its** offices are modern."],
        ["to / too / two", "direction or verb / also, more than needed / 2", "I went **to** the shop **two** times, and it was **too** busy."],
        ["then / than", "after that / in comparisons", "We ate, and **then** we walked. Walking is cheaper **than** driving."],
        ["where / were / wear", "place / past of *are* / put on clothes", "**Where were** you? I didn't know what to **wear**."],
        ["quiet / quite", "not noisy / fairly", "The library is **quiet**, and it is **quite** big."],
        ["lose / loose", "not have something any more / not tight", "Don't **lose** your keys. These jeans are **loose**."],
        ["advice / advise", "noun / verb", "Thanks for your **advice**. I **advise** you to book early."],
      ],
    },
    {
      type: "text",
      title: "Capital letters",
      body: "Use a **capital letter** for:\n\n- the first word of a sentence, and the word **I**\n- names of people, cities, countries and companies: *Maria*, *Tokyo*, *Canada*, *Greenline Travel*\n- nationalities and languages: *French*, *a Brazilian student*, *I speak Japanese*\n- days, months and holidays: *Monday*, *July*, *New Year*\n- titles before a name: *Dr Lee*, *Mr Hughes*, *Professor Kim*\n\nDo **not** use a capital letter for:\n\n- seasons: *in the summer*, *last winter*\n- school subjects (except languages): *maths*, *history*, but *English*\n- general words: *my manager*, *the university*, unless they are part of a name (*Oxford University*)",
    },
    {
      type: "table",
      title: "Common B1 mistakes",
      headers: ["Wrong", "Right", "Why"],
      rows: [
        ["I am agree with you.", "I **agree** with you.", "*Agree* is a verb, not an adjective."],
        ["The people is friendly.", "The people **are** friendly.", "*People* is plural."],
        ["some informations / advices", "some **information** / **advice**", "These nouns are uncountable: no -s."],
        ["She explained me the plan.", "She explained the plan **to me**.", "*explain something to someone*"],
        ["We discussed about the price.", "We **discussed** the price.", "*Discuss* has no preposition."],
        ["The most of people…", "**Most** people…", "No *the* or *of* before a plural noun on its own."],
        ["more better", "better / **much better**", "*Better* is already a comparative."],
        ["I look forward to hear from you.", "I look forward to **hearing** from you.", "*to* here is a preposition, so use -ing."],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: which spelling is correct?",
        questions: [
          {
            prompt: "Choose the correct spelling.",
            options: ["recieve", "receive", "receeve", "resieve"],
            answer: 1,
            explanation: "After c, the spelling is usually *ei*: rec**ei**ve.",
          },
          {
            prompt: "Choose the correct spelling.",
            options: ["accomodation", "acommodation", "accommodation", "accommadation"],
            answer: 2,
            explanation: "*Accommodation* has a double c and a double m.",
          },
          {
            prompt: "Choose the correct form: “Last week we ___ a picnic in the park.”",
            options: ["planed", "planned", "planded", "planneded"],
            answer: 1,
            explanation: "*Plan* ends in one vowel + one consonant, so the n doubles: *planned*.",
          },
          {
            prompt: "Choose the correct form: “She drives very ___.”",
            options: ["carefuly", "carefull", "carefully", "carfully"],
            answer: 2,
            explanation: "*Careful* (one l) + *-ly* = *carefully* (two l's).",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "Ana has just started a new job. She writes a short email to her English friend Tom. Read her first draft, then the version she wrote after checking her work.",
    },
    {
      type: "passage",
      title: "First draft (17 mistakes)",
      paragraphs: [
        "hi Tom,",
        "Thank you for your message. I'm sorry I didn't write sooner, but I have been very busy since I started my new job in march. I am agree with you that it's a good company, and the people is very friendly. My manager gave me alot of usefull advices in my first week, and she explained me how everything works.",
        "The office is quiet near the river, so I usualy walk their on monday's and wednesday's. Next month I am planing to visit you in london. I look forward to hear from you.",
        "Best wishes,",
        "ana",
      ],
    },
    {
      type: "passage",
      title: "After checking",
      paragraphs: [
        "Hi Tom,",
        "Thank you for your message. I'm sorry I didn't write sooner, but I have been very busy since I started my new job in March. I agree with you that it's a good company, and the people are very friendly. My manager gave me a lot of useful advice in my first week, and she explained to me how everything works.",
        "The office is quite near the river, so I usually walk there on Mondays and Wednesdays. Next month I am planning to visit you in London. I look forward to hearing from you.",
        "Best wishes,",
        "Ana",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "Ana checked her email three times, looking for one kind of mistake each time.\n\n1. **Capitals**: *Hi*, *March*, *Mondays*, *Wednesdays*, *London*, *Ana*.\n2. **Spelling and sound-alike words**: *a lot*, *useful*, *usually*, *planning*, *quite* (not *quiet*), *there* (not *their*). Days in the plural need no apostrophe: *on Mondays*.\n3. **Her own common mistakes**: *I agree*, *the people are*, *advice* (no -s), *explained to me*, *look forward to hearing*.\n\nChecking for one thing at a time is faster and more reliable than reading once and hoping to see everything.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Spelling rules",
        instructions: "Write the correct form of the word in brackets.",
        text: "1. Yesterday the bus (stop) {{0}} outside my house.\n2. My sister is (study) {{1}} for her exams this week.\n3. My brother (study) {{2}} engineering at university.\n4. I feel (happy) {{3}} in my new flat than in the old one.\n5. Can you help me? I'm (make) {{4}} dinner for six people.\n6. The film was exciting at the (begin) {{5}}, but the ending was boring.\n7. They (try) {{6}} to call you three times last night.\n8. We are (swim) {{7}} in the lake this afternoon.\n9. Last summer we (travel) {{8}} around Italy by train.\n10. The view from the hotel was really (beauty) {{9}}.",
        answers: [
          ["stopped"],
          ["studying"],
          ["studies", "studied", "is studying", "'s studying"],
          ["happier"],
          ["making"],
          ["beginning"],
          ["tried"],
          ["swimming"],
          ["travelled", "traveled"],
          ["beautiful"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Sound-alike words and capitals",
        instructions: "Choose the correct answer.",
        questions: [
          {
            prompt: "“___ going to the cinema tonight. Do you want to come with them?”",
            options: ["Their", "There", "They're", "Thier"],
            answer: 2,
            explanation: "*They're* = *they are*. *Their* means *belonging to them*, and *there* is a place.",
          },
          {
            prompt: "Which sentence has the correct capital letters?",
            options: [
              "I'm meeting my french teacher on monday.",
              "I'm meeting my French teacher on Monday.",
              "I'm Meeting my French Teacher on Monday.",
              "i'm meeting my French teacher on monday.",
            ],
            answer: 1,
            explanation: "Nationalities and days need capitals, and so does *I*. General words such as *teacher* do not.",
          },
          {
            prompt: "“My new phone is much better ___ my old one.”",
            options: ["then", "than", "that", "them"],
            answer: 1,
            explanation: "Use *than* in comparisons. *Then* means *after that*.",
          },
          {
            prompt: "“The library is very ___, so it's a good place to study.”",
            options: ["quite", "quiet", "quit", "quiete"],
            answer: 1,
            explanation: "*Quiet* means *not noisy*. *Quite* means *fairly*.",
          },
          {
            prompt: "Which sentence is correct?",
            options: [
              "We usually go to Spain in the Summer.",
              "We usually go to spain in the summer.",
              "We usually go to Spain in the summer.",
              "We Usually go to Spain in the summer.",
            ],
            answer: 2,
            explanation: "Countries need a capital letter, but seasons do not.",
          },
          {
            prompt: "“The company has changed ___ logo.”",
            options: ["it's", "its", "its'", "it is"],
            answer: 1,
            explanation: "*Its* (no apostrophe) means *belonging to it*. *It's* means *it is* or *it has*.",
          },
          {
            prompt: "“Be careful, or you'll ___ your wallet.”",
            options: ["loose", "lose", "loss", "lost"],
            answer: 1,
            explanation: "*Lose* is the verb. *Loose* is an adjective that means *not tight*.",
          },
          {
            prompt: "Which sentence is correct?",
            options: [
              "I study maths, History and english.",
              "I study Maths, History and English.",
              "I study maths, history and English.",
              "I study maths, history and english.",
            ],
            answer: 2,
            explanation: "School subjects do not need a capital letter, except languages such as *English*.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "Correct the mistake",
        instructions: "Each wrong sentence has one mistake. Complete the correct sentence.",
        text: "1. Wrong: I am agree with your idea. → Right: I {{0}} with your idea.\n2. Wrong: The people in my town is very kind. → Right: The people in my town {{1}} very kind.\n3. Wrong: Can you send me some informations? → Right: Can you send me some {{2}}?\n4. Wrong: She explained me the rules. → Right: She explained the rules {{3}} me.\n5. Wrong: We discussed about the problem. → Right: We {{4}} the problem.\n6. Wrong: The most of people have a phone. → Right: {{5}} people have a phone.\n7. Wrong: This hotel is more better than the last one. → Right: This hotel is {{6}} than the last one.\n8. Wrong: I look forward to hear from you. → Right: I look forward to {{7}} from you.\n9. Wrong: I made a lot of homework yesterday. → Right: I {{8}} a lot of homework yesterday.\n10. Wrong: It depends of the weather. → Right: It depends {{9}} the weather.",
        answers: [
          ["agree"],
          ["are"],
          ["information"],
          ["to"],
          ["discussed", "talked about"],
          ["Most", "Most of the"],
          ["better", "much better", "far better", "a lot better", "even better"],
          ["hearing"],
          ["did", "had"],
          ["on", "upon"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: write and check an email",
        instructions: "Write for about 10 minutes. Then spend 3 minutes checking: first capitals, then spelling and sound-alike words, then the common mistakes in this lesson.",
        prompt:
          "You have just started an English course in another country. Write an email to an English-speaking friend.\n\nIn your email:\n- say where you are studying and when the course started\n- describe your teacher and your classmates\n- say what you are planning to do next weekend\n\nWrite at least 100 words.",
        minWords: 100,
        minutes: 13,
        rubric: [
          "Task: I covered all three points in the task.",
          "Capitals: I used capital letters for names, cities, countries, nationalities, languages, days and months, and not for seasons or school subjects.",
          "Spelling: I checked words with -ing, -ed, -er and -ful (planning, studied, happier, useful).",
          "Sound-alike words: I checked their / there / they're, your / you're, its / it's, then / than and quiet / quite.",
          "Grammar: I checked for my common mistakes (I agree, people are, information and advice with no -s, explain something to someone).",
          "Tone: my greeting and closing are friendly and suitable for a friend.",
          "Length: I wrote at least 100 words.",
        ],
        modelAnswer:
          "Hi Jess,\n\nI'm writing to you from Dublin! I started an English course at a language school here last Monday, and I'm really enjoying it so far.\n\nMy teacher, Mr O'Brien, is quite strict, but he is very patient and explains everything clearly. There are twelve students in my class. Most of them are from Brazil and Japan, and there's also a Spanish woman who needs English for her job. They're all very friendly, and we usually have lunch together.\n\nNext weekend, two of my classmates and I are planning to visit Galway by train. I hope the weather will be better than it was last Saturday!\n\nI'll send you some photos soon.\n\nLove,\nMarta",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "IELTS accepts both British and American spelling (*colour* or *color*, *organise* or *organize*, *travelled* or *traveled*). Choose one and use it all the way through your answer.",
    },
    {
      exam: "toefl",
      body: "In **Build a Sentence** the words are given to you, but in **Write an Email** and the **Academic Discussion** you spell everything yourself. Keep the last 30–60 seconds to check capitals and sound-alike words such as *their / there* and *than / then*.",
    },
    {
      exam: "toeic",
      body: "In **Respond to a written request**, check the names, days, dates and company names in your reply against the email you received. A wrongly spelled name or a missing capital looks unprofessional to a business reader.",
    },
  ],
  vocabulary: [
    { word: "proofread", meaning: "to read a text carefully to find and correct mistakes", example: "Always proofread your email before you send it.", topic: "work" },
    { word: "misspell", meaning: "to spell a word wrongly", example: "Many learners misspell the word accommodation.", topic: "education" },
    { word: "capital letter", meaning: "a large letter, such as A, B or C", example: "Days of the week start with a capital letter.", topic: "education" },
    { word: "apostrophe", meaning: "the mark ' used in short forms (it's) and to show possession (Tom's)", example: "There is no apostrophe in the word its when it means belonging to it.", topic: "education" },
    { word: "consistent", meaning: "always the same", example: "Be consistent: use British or American spelling, not both.", topic: "academic" },
    { word: "accommodation", meaning: "a place to live or stay", example: "The school can help you find accommodation.", topic: "travel" },
    { word: "necessary", meaning: "needed in order to do something", example: "Is it necessary to book a table?", topic: "everyday" },
    { word: "definitely", meaning: "certainly, without any doubt", example: "I'll definitely visit you next summer.", topic: "everyday" },
    { word: "receive", meaning: "to get something that someone gives or sends you", example: "Did you receive my email?", topic: "work" },
    { word: "patient", meaning: "able to wait or deal with problems calmly", example: "Our teacher is very patient with beginners.", topic: "education" },
  ],
  keyPoints: [
    "Double the final consonant after one short vowel (stopped, swimming), change consonant + y to i (studies), and drop a silent e before -ing (making).",
    "-ful has one l (useful); the adverb has two (usefully).",
    "Check sound-alike words: their / there / they're, its / it's, then / than, quiet / quite, lose / loose.",
    "Use capitals for names, places, nationalities, languages, days and months, but not for seasons or most school subjects.",
    "Check your work in three passes: capitals, spelling, then your own common mistakes.",
  ],
};

export default lesson;
