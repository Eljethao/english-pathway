import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-sentence-completion-word-limits",
  title: "Sentence completion and word limits",
  summary:
    "Complete IELTS listening sentences with words that fit the grammar of the sentence and stay inside the word limit, so that answers you understood are not marked wrong.",
  skill: "listening",
  level: "B2",
  order: 7,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Listening Part 4" },
    { exam: "ielts", task: "Listening Part 3" },
    { exam: "ielts", task: "Listening Part 2" },
  ],
  objectives: [
    "Read a word-limit instruction correctly and know exactly what it allows",
    "Match a paraphrased sentence to the part of the recording it describes",
    "Choose an answer that makes the completed sentence grammatical (singular or plural, noun or adjective, verb form)",
    "Check answers for repeated words, spelling and the word limit before moving on",
  ],
  warmUp: [
    "Have you ever lost marks in a test even though you understood the answer? What went wrong?",
    "Which is correct, and why: “Each guide leads three group” or “Each guide leads three groups”?",
  ],
  learn: [
    {
      type: "text",
      title: "How sentence completion works",
      body: "In a sentence completion task you read a set of sentences with a gap in each one, and you complete each gap with words from the recording. It is common in IELTS Part 4 lectures, and it can also appear with talks and discussions in Parts 2 and 3.\n\nThree things make this task harder than it looks:\n\n1. **The sentence is a paraphrase.** The words around the gap are usually different from the words you hear, so you listen for the *meaning* of the sentence.\n2. **The answer must fit the sentence.** When you put your word into the gap, the whole sentence must be grammatical. If the speaker says *ditches* and the sentence needs a plural, *ditch* is wrong.\n3. **The word limit is strict.** If the instruction says NO MORE THAN TWO WORDS, a three-word answer is wrong, even when the meaning is right.\n\nIn an earlier lesson you learned to predict the type of word for each gap. In this lesson you go one step further: you check that what you write fits the gap **exactly**.",
    },
    {
      type: "table",
      title: "Reading the word limit",
      headers: ["Instruction", "What it allows", "Acceptable", "Wrong"],
      rows: [
        ["ONE WORD ONLY", "exactly one word", "ditches", "the ditches / old ditches"],
        ["NO MORE THAN TWO WORDS", "one or two words", "ditches / drainage ditches", "old drainage ditches"],
        ["ONE WORD AND/OR A NUMBER", "a word, a number, or one of each", "Saturday / 45 / 3 weeks", "every Saturday morning"],
        ["NO MORE THAN TWO WORDS AND/OR A NUMBER", "up to two words, with or without a number", "2 large rooms / 10 May", "2 very large rooms"],
      ],
    },
    {
      type: "text",
      title: "Five checks before you move on",
      body: "1. **Count the words.** Articles count: *the forests* is two words. IELTS says that a hyphenated word such as *check-in* counts as one word.\n2. **Read the whole sentence with your answer in it.** Does it make sense? Is it grammatical?\n3. **Check singular and plural.** After *one*, *a* or *each*, a countable noun is singular; after *two*, *many* or *several*, it is plural.\n4. **Don't repeat printed words.** If the sentence already says *minutes* or *£* after or before the gap, write only the number.\n5. **Spell it correctly.** A misspelt answer is marked wrong. Writing numbers as digits (*45*, not *forty-five*) is quicker and avoids spelling mistakes.",
    },
    {
      type: "example",
      title: "Grammar tells you the form of the answer",
      items: [
        "Each guide leads **three** groups. → a number above one, so the noun after it is plural",
        "Members should be able to **cancel** a booking. → after *be able to*, use the base form of the verb",
        "The skill employers value most is **reliability**. → *skill is…* needs a noun, not the adjective *reliable*",
        "The berries were wrongly believed to be **poisonous**. → *to be* + an adjective",
        "The station is built on an **old** quarry. → *an* means the answer starts with a vowel sound",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: does it fit the gap?",
        instructions: "Read the instruction, the sentence and what the speaker says. Choose the answer that would be marked correct.",
        questions: [
          {
            prompt: "NO MORE THAN TWO WORDS. Sentence: “Visitors should wear ______.” Speaker: “You'll need a pair of strong walking boots.”",
            options: ["a pair of strong walking boots", "strong walking boots", "walking boots", "pair"],
            answer: 2,
            explanation: "“Walking boots” is two words and makes a grammatical sentence. “Strong walking boots” is three words, so it breaks the limit. “Pair” alone does not make sense.",
          },
          {
            prompt: "ONE WORD ONLY. Sentence: “The new library will open in ______.” Speaker: “We're hoping to open the doors in early spring.”",
            options: ["early spring", "spring", "the spring", "early"],
            answer: 1,
            explanation: "Only “spring” is one word and completes the meaning. “Early” is one word, but “open in early” makes no sense.",
          },
          {
            prompt: "ONE WORD AND/OR A NUMBER. Sentence: “The tour costs £______ per person.” Speaker: “It's twenty-five pounds each.”",
            options: ["25", "£25 pounds", "25 pounds each", "twenty-five pounds"],
            answer: 0,
            explanation: "The £ sign is already printed, so write the number only. The other answers repeat the currency or add extra words.",
          },
          {
            prompt: "NO MORE THAN TWO WORDS. Sentence: “Researchers recorded the ______ of each plant.” Speaker: “We measured how tall each plant had grown, so we had the height of every single one.”",
            options: ["tall", "height", "grown", "how tall"],
            answer: 1,
            explanation: "After “the” and before “of”, the gap needs a noun: “the height of each plant”. “Tall” and “how tall” are heard, but they do not fit the grammar.",
          },
          {
            prompt: "NO MORE THAN TWO WORDS. Sentence: “Most of the café staff work ______.” Speaker: “Nearly all of our café staff are part-time.”",
            options: ["are part-time", "part-time", "nearly all", "staff"],
            answer: 1,
            explanation: "“Work part-time” is grammatical. “Work are part-time” is not, because the verb is already printed.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "You are going to hear part of a lecture about peat bogs: wet areas of land where dead plants build up very slowly. Complete the sentences. Write NO MORE THAN TWO WORDS for each answer.\n\n1. Peatlands store more carbon than all the world's ______.\n2. Many bogs were drained mainly so that the land could be used as ______.\n3. When a bog dries out, the peat begins to release ______.\n4. The simplest way to restore a bog is to block the ______.",
    },
    {
      type: "audio",
      title: "Model lecture: why peat bogs matter",
      voice: "uk",
      transcript:
        "This morning I want to talk about peat bogs, which most people walk past without a second thought. A bog forms where the ground is so wet that dead plants, mostly mosses, cannot rot away completely. Instead, they build up very slowly, perhaps a millimetre a year, and form a thick, dark layer called peat.\n\nWhy should we care? Because that peat is made of carbon. Peatlands cover only a small part of the world's land, but they hold more carbon than all the world's forests put together.\n\nUnfortunately, many bogs have been damaged. For centuries, people dug ditches to drain the water away. They also cut peat to burn as fuel, but the main reason for draining a bog was to turn it into farmland.\n\nAnd this is where the problem starts. When a bog dries out, the peat is exposed to the air, and it begins to release carbon dioxide. So a damaged bog stops storing carbon and starts adding to it.\n\nThe good news is that repair is often fairly simple. The cheapest method is to block the old drainage ditches with small dams made of peat or wood. The water level rises again, and within a few years the mosses usually start to return.",
      cast: { narrator: "male" },
    },
    {
      type: "text",
      title: "How a strong listener completes the sentences",
      body: "1. **forests**. The sentence says *store more carbon than*; the speaker says *hold more carbon than*. That paraphrase tells you the answer is coming. The sentence says *all the world's ______*, so write *forests*, not *the forests*.\n2. **farmland**. *Fuel* is a distractor: peat was burned as fuel, but *the land could be used as fuel* makes no sense, and the speaker says *the main reason… was to turn it into farmland*.\n3. **carbon dioxide** (or **CO2**). This answer needs both words. *Carbon* alone changes the meaning, because the peat itself is carbon.\n4. **ditches** or **drainage ditches**. Both fit the limit and the grammar. *Old drainage ditches* is three words, so it would be marked wrong, even though every word is in the recording.\n\nNotice that the strong listener also checked the form. The speaker said *dug ditches*, plural, and *block the ditches* is natural, so the plural is correct.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice 1: how bats find food in the dark",
      voice: "uk",
      transcript:
        "Today's topic is echolocation, the way many bats find their way and catch food in complete darkness. There's a common belief that bats are blind. In fact, all bats can see, and some see quite well, but at night their eyes are of limited use, so most species rely on sound instead.\n\nHere's how it works. The bat produces a series of very short, high-pitched calls. Most species call through the mouth, but some send the sound out through the nose. These calls are mostly too high for human ears to hear. When the sound hits an object, such as a branch or an insect, an echo bounces back, and the bat's large ears pick it up. From the time the echo takes to return, the bat can work out how far away the object is.\n\nAs a bat gets closer to its prey, it calls faster and faster, so it gets more frequent updates on where the insect is. Researchers call this final rapid burst of calls the feeding buzz.\n\nInterestingly, the insects are not completely defenceless. Many moths can hear bat calls, and when they do, they fold their wings and drop towards the ground. A few species go further and produce clicking sounds of their own, which seem to confuse the bat.\n\nEcholocation has also inspired human technology. Ships use a similar system, called sonar, to find the depth of the sea, and some walking canes for blind people now send out sound waves to warn the user about obstacles.",
      cast: { narrator: "female" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Sentence completion (IELTS Part 4)",
        instructions: "Read the sentences and decide what type of word each gap needs. Then listen and complete the sentences. Write NO MORE THAN TWO WORDS for each answer.",
        text: "1. Many people wrongly believe that bats are {{0}}.\n2. Some species of bat send out their calls through the {{1}}.\n3. A bat works out the distance to an object from the {{2}} that the echo takes to return.\n4. The rapid calls a bat makes just before it catches an insect are known as the {{3}}.\n5. When they hear a bat, many moths fold their {{4}} and drop.\n6. A few moths confuse bats by producing {{5}}.\n7. Ships use sonar to find the {{6}} of the sea.\n8. Some walking canes warn blind people about {{7}}.",
        answers: [
          ["blind"],
          ["nose"],
          ["time"],
          ["feeding buzz"],
          ["wings"],
          ["clicking sounds"],
          ["depth"],
          ["obstacles"],
        ],
      },
    },
    {
      type: "audio",
      title: "Practice 2: discussing a bike-share survey",
      voice: "uk",
      transcript:
        "Callum: So, Priya, shall we go through the results of our bike-share survey before we see Dr Moreno?\nPriya: Yes, let's. The first thing that surprised me was who actually uses the scheme. I assumed it would be mostly students.\nCallum: Me too. But the biggest group by far was commuters, people riding to and from work.\nPriya: Right. And most of them only use the bikes for one part of the journey, usually between the train station and the office.\nCallum: What about complaints? I thought the price would come top.\nPriya: Price was mentioned, but not often. The main complaint was about availability. In the morning rush hour, the docking stations near the train station are often completely empty.\nCallum: And in the evening it's the opposite problem. You can't return a bike, because every space is full.\nPriya: Exactly. The company does move bikes around in vans, but it obviously can't keep up.\nCallum: Did many people mention safety?\nPriya: Quite a few. Mostly they said they felt nervous on the main roads, and they'd like more separate cycle lanes.\nCallum: OK. Now, our recommendations. I think the most useful one is to let users reserve a bike through the app before they leave home.\nPriya: I agree. And I'd add a discount for people who return bikes to the emptier stations. Some cities already reward users with free minutes for doing that.\nCallum: Good idea. Let's put both in the report.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Sentence completion (IELTS Part 3)",
        instructions: "Complete the sentences. Write ONE WORD ONLY for each answer. Check that each completed sentence is grammatical.",
        text: "1. The largest group of people using the scheme were {{0}}.\n2. Most users ride between the train station and their {{1}}.\n3. Price was a less common complaint than {{2}}.\n4. In the morning, docking stations near the train station are often {{3}}.\n5. The company uses {{4}} to move bikes between stations.\n6. Many users would like more separate cycle {{5}}.\n7. The students will recommend that users should be able to {{6}} a bike using the app.\n8. Users could get a {{7}} for returning bikes to emptier stations.",
        answers: [
          ["commuters"],
          ["office", "offices"],
          ["availability"],
          ["empty"],
          ["vans"],
          ["lanes"],
          ["reserve"],
          ["discount"],
        ],
      },
    },
    {
      type: "audio",
      title: "Practice 3: volunteering for a reading programme",
      voice: "uk",
      transcript:
        "Good evening, everyone, and thanks for coming to find out about Read Together, the library's reading programme for primary school children. I'm Harriet, and I coordinate the volunteers.\n\nThe programme started six years ago with just twelve volunteers. This year we have over ninety, and we're still looking for more, especially people who are free on weekday afternoons.\n\nSo what does a volunteer actually do? Each of you will be matched with two children, and you'll meet them once a week in the library's children's room. Sessions last forty-five minutes. Some people worry that they need teaching experience, but that isn't the case at all. What matters most is patience.\n\nBefore you start, there's one compulsory training session, which takes place on a Saturday morning. It covers things like choosing suitable books and keeping children interested. You'll also need a background check, which is free for volunteers. It usually takes about three weeks to come through.\n\nWe ask every volunteer to commit to at least one full school term. Children make the most progress when they see the same adult every week, so changing volunteers halfway through really sets them back.\n\nFinally, a practical point. Parking at the library is limited, so if you can, please come by bike or on foot. There's a secure bike shelter at the back of the building.",
      cast: { narrator: "female" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "Sentence completion (IELTS Part 2)",
        instructions: "Complete the sentences. Write ONE WORD AND/OR A NUMBER for each answer.",
        text: "1. When the programme began, it had {{0}} volunteers.\n2. More volunteers are needed on weekday {{1}}.\n3. Each volunteer works with {{2}} children.\n4. Each session lasts {{3}} minutes.\n5. The most important quality for a volunteer is {{4}}.\n6. The training session is held on a {{5}} morning.\n7. A background check usually takes about {{6}} weeks.\n8. Volunteers must stay for at least one school {{7}}.",
        answers: [
          ["12", "twelve"],
          ["afternoons"],
          ["2", "two"],
          ["45", "forty-five", "forty five"],
          ["patience"],
          ["Saturday"],
          ["3", "three"],
          ["term"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "mcq",
        title: "Would it be marked correct?",
        instructions: "These are answers that learners wrote for the reading programme sentences (ONE WORD AND/OR A NUMBER). Choose the best comment on each one.",
        questions: [
          {
            prompt: "“Each session lasts ______ minutes.” A learner wrote: 45 minutes",
            options: [
              "Fine: it is a number and one word, so it is inside the limit.",
              "Risky: “minutes” is already printed, so the sentence now says “45 minutes minutes”. Write 45 only.",
              "Wrong: numbers must always be written as words.",
            ],
            answer: 1,
            explanation: "The answer is inside the word limit, but the completed sentence repeats a printed word, so it no longer reads correctly. Write only what is missing: 45.",
          },
          {
            prompt: "“The most important quality for a volunteer is ______.” A learner wrote: patient",
            options: [
              "Correct: “patient” has the same meaning as the word in the recording.",
              "Wrong: the speaker said “patience”, and the sentence needs a noun.",
              "Wrong: the answer should be “being patient”.",
            ],
            answer: 1,
            explanation: "“A quality is patience” needs a noun. “Patient” is an adjective. “Being patient” changes the speaker's word and is not needed.",
          },
          {
            prompt: "“Each volunteer works with ______ children.” A learner wrote: two",
            options: [
              "Correct: a number can be written as a word or as digits.",
              "Wrong: numbers must be written as digits.",
              "Wrong: “two” counts as a word, so there is no number in the answer.",
            ],
            answer: 0,
            explanation: "Both “two” and “2” are accepted. Digits are quicker to write, and they avoid spelling mistakes with longer numbers.",
          },
          {
            prompt: "“Volunteers must stay for at least one school ______.” A learner wrote: terms",
            options: [
              "Correct: singular and plural are both accepted.",
              "Wrong: after “one”, the noun must be singular: term.",
              "Wrong: the answer should be “full term”.",
            ],
            answer: 1,
            explanation: "“One school terms” is not grammatical. The speaker says “one full school term”, and the sentence already has “school”, so the missing word is “term”.",
          },
          {
            prompt: "“The training session is held on a ______ morning.” A learner wrote: Saterday",
            options: [
              "Correct: the meaning is clear.",
              "Wrong: the spelling is incorrect, and misspelt answers are marked wrong.",
              "Wrong: days of the week must be written as numbers.",
            ],
            answer: 1,
            explanation: "The correct spelling is “Saturday”. In IELTS, a misspelt answer is marked wrong, so learn the spelling of days, months and common topic words.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Read the word limit for **every** set of questions, because it can change from one set to the next in the same part. Circle it on the question paper. If the limit is NO MORE THAN TWO WORDS and you have written three, decide which word is not needed (often an article or an adjective) and remove it.",
    },
    {
      exam: "ielts",
      body: "The words in the sentence are usually a paraphrase, but the word you write is normally a word the speaker actually says. Don't change it into a synonym. Only change its form if the sentence clearly needs it, and check the completed sentence for grammar.",
    },
    {
      exam: "ielts",
      body: "Spelling counts in IELTS Listening. Learn to spell common topic words (days, months, *accommodation*, *environment*, *government*). British and American spellings are generally both accepted, but use one style consistently.",
    },
  ],
  vocabulary: [
    { word: "peatland", meaning: "an area of wet land where a thick layer of dead plants (peat) has built up", example: "Peatlands store huge amounts of carbon.", topic: "environment" },
    { word: "drain", meaning: "to make water flow away from an area", example: "Farmers drained the bog to create farmland.", topic: "environment" },
    { word: "restore", meaning: "to bring something back to a good condition", example: "Blocking the ditches helps to restore the bog.", topic: "environment" },
    { word: "echo", meaning: "a sound that comes back after hitting a surface", example: "The bat listens for the echo of its calls.", topic: "science" },
    { word: "prey", meaning: "an animal that is hunted and eaten by another animal", example: "Moths are common prey for bats.", topic: "science" },
    { word: "high-pitched", meaning: "(of a sound) very high", example: "Bats make short, high-pitched calls.", topic: "science" },
    { word: "obstacle", meaning: "something in your way that stops you moving forward", example: "The cane warns the user about obstacles.", topic: "technology" },
    { word: "commuter", meaning: "a person who travels regularly between home and work", example: "Most bike-share users are commuters.", topic: "travel" },
    { word: "availability", meaning: "how easy it is to get or use something when you need it", example: "The main complaint was the availability of bikes.", topic: "business" },
    { word: "compulsory", meaning: "something you must do because of a rule", example: "There is one compulsory training session.", topic: "education" },
    { word: "commit to", meaning: "to promise to give your time or effort to something", example: "Volunteers commit to at least one school term.", topic: "society" },
    { word: "word limit", meaning: "the maximum number of words you can write", example: "Check the word limit before you write your answer.", topic: "education" },
  ],
  keyPoints: [
    "The sentence is a paraphrase: listen for its meaning, then write the speaker's own word.",
    "Read the completed sentence: it must be grammatical (singular or plural, noun or adjective, verb form).",
    "Obey the word limit exactly. Articles count as words, and extra words make a correct idea wrong.",
    "Don't repeat words or symbols that are already printed, such as “minutes” or “£”.",
    "Spelling counts, so check each answer before the next question arrives.",
  ],
};

export default lesson;
