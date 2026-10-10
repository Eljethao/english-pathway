import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-word-forms-tenses",
  title: "Word forms and verb tenses in context",
  summary:
    "Choose the right word form (noun, verb, adjective or adverb) and the right verb tense by looking at the words around a gap. Practise TOEIC Part 5 and Part 6 questions and TOEFL Complete the Words.",
  skill: "reading",
  level: "B1",
  order: 10,
  minutes: 25,
  exams: [
    { exam: "toeic", task: "Reading Part 5 – Incomplete Sentences" },
    { exam: "toeic", task: "Reading Part 6 – Text Completion" },
    { exam: "toefl", task: "Reading – Complete the Words" },
  ],
  objectives: [
    "Decide which word class (noun, verb, adjective or adverb) a gap needs from the words around it",
    "Recognise common word endings such as -tion, -ment, -able and -ly",
    "Choose the right verb tense from time words and the rest of the text",
    "Complete half-words in a short paragraph using grammar and meaning",
  ],
  warmUp: [
    "Look at these words: *decide, decision, decisive, decisively*. Which one is a noun? Which one is an adverb? How do you know?",
    "Which time words tell you to use the past simple? Which ones tell you to use the present perfect?",
  ],
  learn: [
    {
      type: "text",
      title: "Why word forms and tenses matter in reading",
      body: "In many reading tasks, you do not need to know every word in the options. You need to know **what kind of word** fits the gap and **what time** the sentence talks about.\n\n- In **TOEIC Part 5**, you choose a word or phrase to complete one sentence. Many questions give you four forms of the same word, for example *success, succeed, successful, successfully*.\n- In **TOEIC Part 6**, you complete gaps in a short text such as an email. Often you must read the sentences before and after the gap to choose the tense.\n- In **TOEFL Complete the Words**, you see the first half of some words in a paragraph and type the missing letters. Grammar helps you here too: is it a plural noun? A past tense verb?",
    },
    {
      type: "table",
      title: "Common word endings",
      headers: ["Word class", "Common endings", "Examples"],
      rows: [
        ["Noun (a thing, person or idea)", "-tion, -sion, -ment, -ness, -ity, -ance, -er, -or, -ist", "information, decision, payment, kindness, ability, assistance, manager, visitor, scientist"],
        ["Verb (an action)", "-ise / -ize, -en, -ify", "organise, widen, simplify"],
        ["Adjective (describes a noun)", "-ful, -less, -able, -ible, -ive, -al, -ous, -ed, -ing", "useful, careless, comfortable, possible, active, national, dangerous, bored, boring"],
        ["Adverb (describes a verb or adjective)", "usually -ly", "quickly, carefully, extremely"],
      ],
    },
    {
      type: "text",
      title: "Look left and right of the gap",
      body: "The words next to the gap tell you which word class you need:\n\n- after **a, an, the, my, your, their, this, any** → a **noun** (or an adjective + noun): *the* **decision**, *your* **help**\n- after **be, seem, become, look** or **very** → an **adjective**: *The test was very* **difficult**.\n- before a **noun** → an **adjective**: *a* **useful** *tool*\n- after **to**, **will**, **can**, **must**, **should** → the **base form of a verb**: *We will* **contact** *you.*\n- next to a verb, or before an adjective → an **adverb**: *She spoke* **clearly**. *It was* **extremely** *cold.*\n\nAlso check **singular or plural**. After *many, several, all* or *a number of*, you need a plural noun: *all* **visitors**, *several* **suggestions**.",
    },
    {
      type: "table",
      title: "Time words and tenses",
      headers: ["Time words in the text", "Usual tense", "Example"],
      rows: [
        ["yesterday, last week, in 2019, ago", "past simple", "The parcel **arrived** yesterday."],
        ["since, for, already, yet, just, ever", "present perfect", "She **has worked** here since 2020."],
        ["every day, usually, often, on Mondays", "present simple", "The shop usually **closes** at six."],
        ["now, at the moment, currently", "present continuous", "He **is having** a meeting at the moment."],
        ["tomorrow, next week, soon, from 1 June", "will / going to / present continuous", "The new rules **will start** next week."],
        ["when + a past action (an interruption)", "past continuous", "I **was cooking** when the phone rang."],
      ],
    },
    {
      type: "tip",
      exam: "toeic",
      body: "In Part 5, look at the four options before you read the whole sentence. If they are four forms of one word (*act, active, actively, action*), you can often answer by looking only at the words around the gap. If they are four tenses of one verb, look for a time word.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "Notice: Greenway Sports Centre",
      paragraphs: [
        "From 1 June, Greenway Sports Centre ___(1)___ (open) at 6 a.m. on weekdays. Many members have asked for an ___(2)___ (early) start, so they can exercise before work.",
        "The swimming pool ___(3)___ (clean) last month, and the water is now ___(4)___ (complete) clear. Please remember that the centre is closed on public holidays.",
        "If you have any ___(5)___ (suggest) about the new timetable, please speak to a member of staff at reception.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader chooses the form",
      body: "A strong reader asks two questions for each gap: **What kind of word?** and **What time?**\n\n1. *From 1 June* is in the future, and the notice is about a new plan. → **will open** (*opens* is also correct, because it is a fixed timetable).\n2. After *an* and before the noun *start*, we need an adjective. The members want a start that is earlier than now. → **earlier** (*an earlier start*: *an* because *earlier* begins with a vowel sound).\n3. *Last month* = past simple. The pool did not clean itself; someone cleaned it. → passive: **was cleaned**.\n4. The gap is before the adjective *clear*. A word that describes an adjective is an adverb. → **completely**.\n5. After *any* we need a noun. Members may have more than one idea, and *any* + a countable noun is usually plural in questions and conditions. → **suggestions**.\n\nNotice that the reader did not need to understand every word in the notice. The words around each gap did most of the work.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "TOEIC Part 5: word forms",
        instructions: "Choose the word that best completes each sentence.",
        questions: [
          {
            prompt: "1. Please read the safety ______ before you use the machine.",
            options: ["instruct", "instructive", "instructions", "instructed"],
            answer: 2,
            explanation: "After *the safety* we need a noun. *Instructions* is the noun (plural).",
          },
          {
            prompt: "2. The new café on Park Street is very ______ with students.",
            options: ["popular", "popularity", "popularly", "popularise"],
            answer: 0,
            explanation: "After *is very* we need an adjective: *popular*.",
          },
          {
            prompt: "3. Ms. Park answered all the customers' questions ______.",
            options: ["polite", "politely", "politeness", "politer"],
            answer: 1,
            explanation: "The gap describes how she *answered*, so we need an adverb: *politely*.",
          },
          {
            prompt: "4. The city plans to ______ the main road next year.",
            options: ["wide", "width", "widen", "widely"],
            answer: 2,
            explanation: "After *to* we need the base form of a verb. *Widen* (= make wider) is the verb.",
          },
          {
            prompt: "5. Mr. Okafor has a lot of ______ in hotel management.",
            options: ["experience", "experienced", "experiencing", "experiential"],
            answer: 0,
            explanation: "After *a lot of* we need a noun: *experience*.",
          },
          {
            prompt: "6. All ______ must wear a badge while they are in the building.",
            options: ["visit", "visited", "visitors", "visiting"],
            answer: 2,
            explanation: "After *All* we need a plural noun for people: *visitors*. *They* later in the sentence also refers to people.",
          },
          {
            prompt: "7. The train was ______ late because of the snow.",
            options: ["extreme", "extremely", "extremity", "extremes"],
            answer: 1,
            explanation: "The gap comes before the adjective *late*, so we need an adverb: *extremely*.",
          },
          {
            prompt: "8. Thank you for your ______ with the office move last week.",
            options: ["assist", "assistant", "assistance", "assisted"],
            answer: 2,
            explanation: "After *your* we need a noun. *Assistant* is a noun too, but it means a person; you thank someone for their *assistance* (= help).",
          },
          {
            prompt: "9. The results of the customer survey were very ______.",
            options: ["surprise", "surprising", "surprisingly", "surprised"],
            answer: 1,
            explanation: "We need an adjective after *were very*. Results cause surprise, so we use the *-ing* adjective: *surprising*. People feel *surprised*.",
          },
          {
            prompt: "10. Our manager will ______ the new staff at Monday's meeting.",
            options: ["introduce", "introduction", "introductory", "introducing"],
            answer: 0,
            explanation: "After *will* we need the base form of a verb: *introduce*.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "TOEIC Part 5: verb tenses",
        instructions: "Choose the verb form that best completes each sentence. Look for time words.",
        questions: [
          {
            prompt: "1. Ms. Diaz ______ for this company since 2019.",
            options: ["works", "is working", "has worked", "worked"],
            answer: 2,
            explanation: "*Since 2019* = from a time in the past until now → present perfect: *has worked*.",
          },
          {
            prompt: "2. The delivery ______ yesterday afternoon.",
            options: ["arrives", "arrived", "has arrived", "will arrive"],
            answer: 1,
            explanation: "*Yesterday afternoon* is a finished time in the past → past simple: *arrived*.",
          },
          {
            prompt: "3. We ______ the winner of the competition next Monday.",
            options: ["announced", "have announced", "will announce", "were announcing"],
            answer: 2,
            explanation: "*Next Monday* is in the future → *will announce*.",
          },
          {
            prompt: "4. Mr. Ito ______ on the phone when the fire alarm started.",
            options: ["talks", "has talked", "will talk", "was talking"],
            answer: 3,
            explanation: "A longer action in progress (*was talking*) was interrupted by a short action (*started*) → past continuous.",
          },
          {
            prompt: "5. These days, the office usually ______ at 6 p.m. on Fridays.",
            options: ["close", "closes", "closed", "is closing"],
            answer: 1,
            explanation: "*These days* and *usually* show a regular habit now → present simple. The subject *the office* is singular, so we add *-s*: *closes*.",
          },
          {
            prompt: "6. Please be quiet. The manager ______ an important interview at the moment.",
            options: ["has", "is having", "had", "will have"],
            answer: 1,
            explanation: "*At the moment* → present continuous: *is having*.",
          },
          {
            prompt: "7. I ______ the report yet, so I can't send it to you.",
            options: ["wasn't finishing", "haven't finished", "don't finish", "won't finish"],
            answer: 1,
            explanation: "*Yet* in a negative sentence goes with the present perfect: *haven't finished*.",
          },
          {
            prompt: "8. When we got to the station, the train ______, so we waited for the next one.",
            options: ["had already left", "already leaves", "is already leaving", "will already leave"],
            answer: 0,
            explanation: "The train left **before** we got there. For the earlier of two past actions we use the past perfect: *had already left*.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Email: changes to the staff kitchen",
      paragraphs: [
        "To: All staff",
        "From: Karen Bell, Office Manager",
        "Subject: Staff kitchen",
        "Dear colleagues,",
        "As many of you know, the staff kitchen on the second floor ___(1)___ next week. The work will start on Monday 3 March and should take about five days. During this time, the kitchen will be closed and the fridge will be switched off. Please take all your food home by Friday evening. ___(2)___",
        "While the work is taking place, you are welcome to use the kitchen on the ground floor. It is much ___(3)___ than the second-floor kitchen, so please wash your cups straight away and do not leave anything in the sink.",
        "When the work is finished, the kitchen will have a new dishwasher and a second coffee machine. We hope these changes will make your breaks more ___(4)___.",
        "Thank you for your patience.",
        "Karen",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "TOEIC Part 6: text completion",
        instructions: "Read the email. Choose the best answer for each gap. One gap needs a whole sentence.",
        questions: [
          {
            prompt: "Gap (1)",
            options: ["renovated", "was renovated", "will be renovated", "has renovated"],
            answer: 2,
            explanation: "*Next week* is in the future, and the kitchen does not renovate itself, so we need the future passive: *will be renovated*.",
          },
          {
            prompt: "Gap (2)",
            options: [
              "Anything left in the fridge after that will be thrown away.",
              "The new coffee machine is very popular with visitors.",
              "The second floor also has four meeting rooms.",
              "Thank you for coming to the meeting yesterday.",
            ],
            answer: 0,
            explanation: "The sentence before asks staff to take their food home by Friday. The best next sentence explains what happens if they don't. *After that* refers to Friday evening.",
          },
          {
            prompt: "Gap (3)",
            options: ["smaller", "small", "smallest", "more small"],
            answer: 0,
            explanation: "*Than* tells you this is a comparison: *much smaller than*. *More small* is not correct English.",
          },
          {
            prompt: "Gap (4)",
            options: ["enjoy", "enjoyable", "enjoyment", "enjoyably"],
            answer: 1,
            explanation: "*Make something + adjective*: *make your breaks more enjoyable*.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "TOEFL: Complete the Words",
        instructions:
          "Complete the missing letters in the paragraph. Type only the missing letters (typing the whole word is also accepted). Use grammar to help you: is the word a noun, a verb or a small grammar word?",
        text: "Honeybees live together in large groups called colonies. Each col{{0}} has o{{1}} queen, a{{2}} her ma{{3}} job i{{4}} to l{{5}} eggs. Mo{{6}} of t{{7}} other be{{8}} are wor{{9}}. They collect food, clean the hive and look after the young bees. When a worker finds a good group of flowers, it returns to the hive and performs a special dance. The dance tells the other bees where the flowers are.",
        answers: [
          ["ony", "colony"],
          ["ne", "one"],
          ["nd", "and"],
          ["in", "main"],
          ["s", "is"],
          ["ay", "lay"],
          ["st", "most"],
          ["he", "the"],
          ["es", "bees"],
          ["kers", "workers"],
        ],
      },
    },
    {
      type: "passage",
      title: "Local news: volunteers save the Rex Cinema",
      paragraphs: [
        "The Rex Cinema in Hadley ___(1)___ (close) in 2015 because it was losing money. For years the building stood empty, its windows were broken, and many people believed it would become a car park. Then, in 2021, a group of local people made an important ___(2)___ (decide): they would try to save it.",
        "First, the group asked for ___(3)___ (donate) online. The ___(4)___ (respond) was amazing: in just six months, people gave more than £80,000. After that, volunteers painted the walls, repaired the seats and ___(5)___ (careful) cleaned the old screen.",
        "The cinema ___(6)___ (open) again last spring. Since then, it ___(7)___ (show) more than 200 films, and it ___(8)___ (become) a favourite meeting place for families and students. Tickets are ___(9)___ (afford), and the small café sells home-made cakes. On Saturday mornings, children under ten can watch a film for free with an adult.",
        "Right now, the volunteers ___(10)___ (plan) a summer film festival. “We are all very ___(11)___ (excite) about it,” said Maria Lopez, one of the ___(12)___ (organise). “Next summer, the festival ___(13)___ (move) to the park, so people can watch films outside.”",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "gap",
        title: "Word forms and tenses in a news story",
        instructions:
          "Read the news story. Each sentence below comes from it. Write the correct form of the word in brackets. For verbs, choose the right tense; you may need more than one word (for example *has done*).",
        text: "1. The Rex Cinema (close) {{0}} in 2015.\n2. A group of local people made an important (decide) {{1}}.\n3. The group asked for (donate) {{2}} online.\n4. The (respond) {{3}} was amazing.\n5. Volunteers (careful) {{4}} cleaned the old screen.\n6. The cinema (open) {{5}} again last spring.\n7. Since then, it (show) {{6}} more than 200 films …\n8. … and it (become) {{7}} a favourite meeting place.\n9. Tickets are (afford) {{8}}.\n10. Right now, the volunteers (plan) {{9}} a summer film festival.\n11. “We are all very (excite) {{10}} about it.”\n12. Maria Lopez is one of the (organise) {{11}}.\n13. Next summer, the festival (move) {{12}} to the park.",
        answers: [
          ["closed", "was closed"],
          ["decision"],
          ["donations"],
          ["response"],
          ["carefully"],
          ["opened", "was opened"],
          ["has shown", "has showed", "'s shown"],
          ["has become", "'s become"],
          ["affordable"],
          ["are planning", "'re planning"],
          ["excited"],
          ["organisers", "organizers"],
          ["will move", "is moving", "is going to move", "moves", "'ll move", "'s moving", "'s going to move"],
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "In Part 5, first check what changes in the four options. If only the ending changes (*-tion, -ive, -ly*), decide the word class from the words next to the gap. If the tense changes, look for a time word such as *since, yesterday* or *next week*.",
    },
    {
      exam: "toeic",
      body: "In Part 6, one sentence alone is not always enough. The tense of a gap often depends on another sentence in the text, for example a date in the first paragraph. One gap in each text needs a whole sentence: choose the sentence that connects to the ideas before and after it.",
    },
    {
      exam: "toefl",
      body: "In Complete the Words, the first sentence is complete, so read it carefully: it tells you the topic. Then, for each half-word, ask what the grammar needs. Is it a plural noun (*-s*)? A past verb (*-ed*)? A small grammar word such as *the, and* or *of*? Check your spelling carefully: a spelling mistake can make your answer wrong.",
    },
  ],
  vocabulary: [
    { word: "renovate", meaning: "to repair and improve an old building or room", example: "The hotel was renovated last year and looks like new.", topic: "work" },
    { word: "patience", meaning: "the ability to wait calmly without getting angry", example: "Thank you for your patience while we fix the problem.", topic: "everyday" },
    { word: "colleague", meaning: "a person you work with", example: "I had lunch with two colleagues from the sales team.", topic: "work" },
    { word: "colony", meaning: "a large group of animals or insects that live together", example: "A colony of ants lives under that tree.", topic: "science" },
    { word: "donation", meaning: "money or goods that you give to help a person or organisation", example: "The hospital received a large donation from a local company.", topic: "society" },
    { word: "response", meaning: "an answer or reaction to something", example: "The response to our advert was much bigger than we expected.", topic: "everyday" },
    { word: "affordable", meaning: "cheap enough for most people to buy", example: "It is hard to find affordable flats in the city centre.", topic: "everyday" },
    { word: "organiser", meaning: "a person who plans and arranges an event", example: "The organisers of the festival expect 5,000 visitors.", topic: "society" },
    { word: "instructions", meaning: "information that tells you how to do something", example: "Read the instructions before you start the machine.", topic: "everyday" },
    { word: "assistance", meaning: "help (a formal word)", example: "Please ask at reception if you need any assistance.", topic: "work" },
  ],
  keyPoints: [
    "Before you choose, ask two questions: what kind of word does the gap need, and what time does the sentence talk about?",
    "Look left and right of the gap: after *the* or *your* → noun; after *be* or *very* → adjective; after *to* or *will* → base verb; next to a verb or before an adjective → adverb.",
    "Word endings help: -tion, -ment, -ness and -ity are nouns; -ful, -able, -ive and -ous are adjectives; -ly is usually an adverb.",
    "Time words such as *yesterday, since, at the moment* and *next week* show the tense; in a text, the tense may depend on another sentence.",
    "In Complete the Words, use the first sentence for the topic and grammar for each half-word, then check spelling.",
  ],
};

export default lesson;
