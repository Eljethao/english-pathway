import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-grammar-word-completion",
  title: "Grammar in context and word completion",
  summary:
    "Use grammar clues around a gap to choose the right word form, tense or linking word for TOEIC Parts 5 and 6, and rebuild half-missing words for TOEFL Complete the Words.",
  skill: "reading",
  level: "B2",
  order: 4,
  minutes: 20,
  exams: [
    { exam: "toeic", task: "Reading Part 5 – Incomplete Sentences" },
    { exam: "toeic", task: "Reading Part 6 – Text Completion" },
    { exam: "toefl", task: "Reading – Complete the Words" },
  ],
  objectives: [
    "Use the words around a gap to decide which part of speech is needed",
    "Choose verb forms, prepositions and linking words that fit the context",
    "Choose a missing sentence that fits the logic of a short text",
    "Complete partly missing words in an academic paragraph",
  ],
  warmUp: [
    "Look at the word 'success'. How many other forms of it do you know (verb, adjective, adverb)?",
    "When you read an email at work, which small words (like but, so, however) help you follow the message?",
  ],
  learn: [
    {
      type: "text",
      title: "Three tasks, one skill",
      body: "All three tasks test the same skill: using **context** to decide what is missing.\n\n- **TOEIC Part 5 (Incomplete Sentences)**: 30 single sentences with one gap and four options. Many questions test word form (*succeed / success / successful / successfully*), verb tense, prepositions and linking words.\n- **TOEIC Part 6 (Text Completion)**: 4 short texts, such as emails or notices, each with 4 gaps. One gap in each text asks you to choose a **whole sentence**, so you need to understand the text, not just the sentence.\n- **TOEFL Complete the Words**: a short academic paragraph of about 70–100 words. The first sentence is complete. After that, the second half of every second word is missing (*Scientists ha__ long wond____ how th__…*), and you type the missing letters. Each paragraph has 10 incomplete words. When a word has an odd number of letters, the larger half is missing (*a__* = *and*, *th___* = *their*).",
    },
    {
      type: "table",
      title: "Clues for choosing the word form",
      headers: ["Position of the gap", "Word you need", "Example"],
      rows: [
        ["after *a / the / their* or an adjective", "noun", "the **introduction** of the new system"],
        ["before a noun", "adjective", "a **reliable** supplier"],
        ["after *be / seem / become*", "adjective (usually)", "The process is more **efficient**."],
        ["describing a verb or adjective", "adverb", "works **effectively**, **highly** experienced"],
        ["after *will / can / must / to*", "base verb", "must **submit** the form"],
        ["after *has / have / had*", "past participle", "has **managed** the team"],
      ],
    },
    {
      type: "text",
      title: "A method for every gap",
      body: "1. **Look at the options first.** Are they four forms of one word (grammar) or four different words (meaning)?\n2. **Read the words on both sides of the gap.** Most grammar answers depend on the two or three words around the gap.\n3. **Look for time clues** such as *since*, *last month*, *by next week*. They decide the tense.\n4. **For linking words, check the logic.** Is the second idea a contrast (*but, although, despite*), a reason (*because, due to*) or a result (*so, therefore*)?\n5. **For Complete the Words,** read the whole sentence first, decide what kind of word fits, then use the first letters to find the exact word. Check the spelling of endings like *-s*, *-ed* and *-tion*.",
    },
    {
      type: "tip",
      exam: "toeic",
      body: "*Despite* and *because of* are followed by a **noun** (*despite the rain*). *Although* and *because* are followed by a **clause** with a subject and verb (*although it was raining*). This is one of the most common Part 5 traps.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "Notice: library opening hours",
      paragraphs: [
        "From 1 March, the City Library will open one hour later on weekdays ___(1)___ a reduction in staff. The new hours, 10 a.m. to 7 p.m., ___(2)___ for at least six months.",
        "___(3)___. Members who need to return books before 10 a.m. can use the drop box next to the main entrance. We are ___(4)___ grateful for your understanding.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader answers",
      body: "**Gap 1:** *because / because of / although / despite*. The gap is followed by a noun phrase (*a reduction in staff*), not a clause. The idea is a reason. → **because of**\n\n**Gap 2:** *apply / will apply / applied / applying*. The sentence describes the future (*from 1 March*, *for at least six months*). → **will apply**\n\n**Gap 3 (sentence choice):** *(A) The library was built in 1965. (B) Weekend opening hours will not change. (C) Please return the books you borrowed. (D) The new café is very popular.* The text is about changes to opening hours, and the next sentence gives practical help for weekday users. Only (B) continues the topic of hours. → **(B)**\n\n**Gap 4:** *extreme / extremely / extremes / extremity*. The gap describes the adjective *grateful*, so it must be an adverb. → **extremely**\n\n**Complete the Words example:** “Most adults need se___ to nine hours of sleep.” A number before *to nine*, and three letters are missing → **seven** (type *ven*).",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "TOEIC Part 5: Incomplete sentences",
        instructions: "Choose the word or phrase that best completes each sentence.",
        questions: [
          {
            prompt: "All employees must submit their expense reports ______ Friday at 5 p.m.",
            options: ["by", "until", "since", "during"],
            answer: 0,
            explanation: "*By* gives a deadline (no later than). *Until* is used for an action that continues up to a time, so it does not fit *submit*.",
          },
          {
            prompt: "The new software has made the ordering process much more ______.",
            options: ["efficiency", "efficient", "efficiently", "efficiencies"],
            answer: 1,
            explanation: "After *made something more…* we need an adjective.",
          },
          {
            prompt: "Ms. Park ______ the marketing department since she joined the company in 2019.",
            options: ["manages", "managed", "has managed", "will manage"],
            answer: 2,
            explanation: "*Since* + a starting point in the past needs the present perfect.",
          },
          {
            prompt: "______ the heavy rain, the outdoor concert went ahead as planned.",
            options: ["Although", "Despite", "Because", "However"],
            answer: 1,
            explanation: "The gap is followed by a noun (*the heavy rain*) and the idea is a contrast, so *Despite*. *Although* needs a clause.",
          },
          {
            prompt: "Customers who wish to return an item should keep ______ receipt.",
            options: ["they", "them", "their", "theirs"],
            answer: 2,
            explanation: "A possessive adjective is needed before the noun *receipt*.",
          },
          {
            prompt: "The quarterly report will be ______ to all shareholders next week.",
            options: ["distributed", "distributing", "distribution", "distribute"],
            answer: 0,
            explanation: "*will be* + past participle forms the passive: the report is distributed by someone.",
          },
          {
            prompt: "Please contact the front desk if you require ______ assistance.",
            options: ["farther", "further", "furthest", "furthermore"],
            answer: 1,
            explanation: "*Further* can mean *more* or *additional*. *Farther* is normally used only for physical distance, *furthest* is a superlative, and *furthermore* is a linking adverb that cannot come before a noun.",
          },
          {
            prompt: "The training session was postponed ______ the trainer was ill.",
            options: ["because of", "due", "because", "owing"],
            answer: 2,
            explanation: "The gap is followed by a clause (*the trainer was ill*), so *because*. *Because of* needs a noun, and *due* and *owing* need *to*.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Email: car park resurfacing",
      paragraphs: [
        "To: All staff\nFrom: Facilities Team\nSubject: Car park closure, 14–16 April",
        "Please be aware that the staff car park will be closed from Monday 14 April to Wednesday 16 April while the surface ___(1)___. During this period, employees who normally drive to work are encouraged to use public transport or the company shuttle bus, which ___(2)___ from Central Station every 20 minutes between 7:00 and 9:30 a.m. ___(3)___.",
        "Limited parking will also be available at the Riverside Hotel opposite the office, ___(4)___ spaces must be reserved in advance through the facilities page on the intranet. We apologise for any inconvenience and thank you for your patience.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "TOEIC Part 6: Text completion",
        instructions: "Read the email. Choose the best option for each gap.",
        questions: [
          {
            prompt: "Gap (1): while the surface ______.",
            options: ["replaces", "is replacing", "is being replaced", "has replaced"],
            answer: 2,
            explanation: "The surface does not replace anything; workers replace it. The action is in progress, so the present continuous passive *is being replaced* is correct.",
          },
          {
            prompt: "Gap (2): the company shuttle bus, which ______ from Central Station every 20 minutes.",
            options: ["depart", "departs", "departing", "to depart"],
            answer: 1,
            explanation: "*Which* refers to *the shuttle bus* (singular), and the timetable is a regular fact, so present simple *departs*.",
          },
          {
            prompt: "Gap (3): Choose the sentence that best fits.",
            options: [
              "The car park was built more than twenty years ago.",
              "Please show your staff ID card when you board.",
              "Thank you for attending last week's meeting.",
              "The new surface will be painted blue.",
            ],
            answer: 1,
            explanation: "The previous sentence describes the shuttle bus, and this sentence gives a practical instruction for using it. The other options do not connect to the bus or to the purpose of the email.",
          },
          {
            prompt: "Gap (4): available at the Riverside Hotel, ______ spaces must be reserved in advance.",
            options: ["but", "or", "because", "unless"],
            answer: 0,
            explanation: "The second clause adds a limitation to the good news (parking is available, *but* you must book), so a contrast word is needed. *Because* would make booking the reason for the parking, *or* offers a choice that makes no sense, and *unless* gives the opposite condition.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "TOEFL: Complete the Words",
        instructions:
          "Complete the missing letters in the paragraph. Type only the missing letters (typing the whole word is also accepted). In the real test, each missing letter has its own space, so you can see how many letters to type.",
        text: "Many birds travel thousands of kilometres every year. Scientists ha{{0}} long wond{{1}} how th{{2}} find th{{3}} way acr{{4}} oceans a{{5}} deserts wit{{6}} getting lo{{7}}. Research sugg{{8}} that th{{9}} rely on several sources of information. Birds that fly by day can use the position of the sun, while many species that fly at night use the stars. Many also seem to sense the Earth's magnetic field, which works like a built-in compass even when clouds hide the sky. Familiar landmarks, such as coastlines and mountain ranges, may also help.",
        answers: [
          ["ve", "have"],
          ["ered", "wondered"],
          ["ey", "they"],
          ["eir", "their"],
          ["oss", "across"],
          ["nd", "and"],
          ["hout", "without"],
          ["st", "lost"],
          ["ests", "suggests"],
          ["ey", "they"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "Word forms in context",
        instructions: "Write the correct form of the word in brackets.",
        text: "1. The product launch was a great (succeed) {{0}}.\n2. Our sales team works very (effective) {{1}} under pressure.\n3. Customers value the (rely) {{2}} of our products.\n4. Ms. Lee was (appoint) {{3}} head of finance last month.\n5. The (introduce) {{4}} of the new system took six months.\n6. All (apply) {{5}} must send a CV by 30 June.\n7. The weather in the mountains changes so quickly that it is almost (predict) {{6}}.\n8. The board (strong) {{7}} recommended the proposal.",
        answers: [
          ["success"],
          ["effectively"],
          ["reliability"],
          ["appointed"],
          ["introduction"],
          ["applicants"],
          ["unpredictable"],
          ["strongly"],
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "Part 5 is the fastest part of the Reading test. If the four options are forms of the same word, you can often answer by reading only the words next to the gap. Aim for about 20–30 seconds per question and save time for Part 7.",
    },
    {
      exam: "toeic",
      body: "In Part 6, read the whole text, not just the sentence with the gap. Verb tense and the missing sentence often depend on information in an earlier or later paragraph.",
    },
    {
      exam: "toefl",
      body: "In Complete the Words, read the complete first sentence carefully: it tells you the topic. Small grammar words (*the, and, of, they*) are often the easiest gaps, so complete them quickly and spend more time on longer content words.",
    },
  ],
  vocabulary: [
    { word: "submit", meaning: "to formally give a document to someone for them to consider", example: "Please submit your report by Friday.", topic: "work" },
    { word: "efficient", meaning: "working well without wasting time or money", example: "The new ordering system is more efficient.", topic: "business" },
    { word: "postpone", meaning: "to move an event to a later time", example: "The meeting was postponed until next week.", topic: "work" },
    { word: "distribute", meaning: "to give something to many people", example: "The report will be distributed to all shareholders.", topic: "business" },
    { word: "shareholder", meaning: "a person who owns part of a company", example: "Shareholders receive a report every quarter.", topic: "business" },
    { word: "in advance", meaning: "before a particular time or event", example: "Parking spaces must be reserved in advance.", topic: "everyday" },
    { word: "inconvenience", meaning: "a problem that causes difficulty or annoyance", example: "We apologise for any inconvenience.", topic: "work" },
    { word: "reliability", meaning: "the quality of being trustworthy or working well every time", example: "Customers value the reliability of our products.", topic: "business" },
    { word: "applicant", meaning: "a person who formally asks for a job or a place", example: "All applicants will be contacted within two weeks.", topic: "work" },
    { word: "rely on", meaning: "to depend on something or someone", example: "Birds rely on the sun and stars to find their way.", topic: "science" },
  ],
  keyPoints: [
    "Check the options first: forms of one word mean a grammar question; different words mean a meaning question.",
    "The words on both sides of the gap usually decide the part of speech.",
    "Despite and because of + noun; although and because + clause.",
    "In text completion, use the whole text to choose tenses and missing sentences.",
    "In Complete the Words, read the full sentence first, then use the first letters to find the exact word and spelling.",
  ],
};

export default lesson;
