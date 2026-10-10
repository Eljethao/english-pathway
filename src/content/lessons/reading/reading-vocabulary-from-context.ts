import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-vocabulary-from-context",
  title: "Guessing vocabulary from context",
  summary:
    "Work out the meaning of new words from clues in the text, such as definitions, examples, contrasts and word parts, so unknown words don't stop you.",
  skill: "reading",
  level: "B1",
  order: 3,
  minutes: 15,
  exams: [
    { exam: "ielts", task: "Reading – Multiple choice" },
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
    { exam: "toeic", task: "Reading Part 7 – Reading Comprehension" },
  ],
  objectives: [
    "Decide whether you need to understand a new word or can ignore it",
    "Use four kinds of context clue: definition, example, contrast and explanation",
    "Use prefixes and suffixes to guess the meaning and type of a word",
  ],
  warmUp: [
    "When you meet a new word in English, what do you usually do?",
    "Read this: “After the long walk, my legs were so sore that I could hardly go down the stairs.” What do you think *sore* means?",
  ],
  learn: [
    {
      type: "text",
      title: "Don't stop at every new word",
      body: "In an exam you cannot use a dictionary, and every text has some words you don't know. Good readers don't panic. They ask two questions:\n\n1. **Do I need this word** to answer the question? If not, ignore it and keep reading.\n2. If I do need it, **what clues** can I find in the sentence and in the sentences around it?\n\nYou don't need the exact dictionary meaning. A general idea is often enough: Is it good or bad? Is it a person, a thing or an action?",
    },
    {
      type: "table",
      title: "Four kinds of context clue",
      headers: ["Clue", "Signal words", "Example", "Meaning of the new word"],
      rows: [
        ["Definition", "is, means, that is, in other words", "A nomad is a person who moves from place to place and has no fixed home.", "nomad = a person with no fixed home"],
        ["Example", "such as, for example, like, including", "She grows pulses, such as beans, peas and lentils.", "pulses = a group of seeds like beans and peas"],
        ["Contrast", "but, however, unlike, instead of", "Tom is very talkative, but his brother is quite reserved.", "reserved = quiet, does not talk much"],
        ["Explanation nearby", "the next sentence describes it", "The hotel room was filthy. The carpet was dirty and the sheets smelled bad.", "filthy = very dirty"],
      ],
    },
    {
      type: "text",
      title: "Use word parts",
      body: "Many English words are built from parts. If you know the parts, you can often guess the meaning.\n\n- **un-, in-, im-, ir-, dis-** = not: *unusual, impossible, irregular, dishonest*\n- **re-** = again: *rebuild, reuse*\n- **over-** = too much: *overcrowded, overcooked*\n- **-less** = without: *homeless, careless*\n- **-able** = can be done: *washable, readable*\n\nThe ending also tells you the **type** of word. *-tion, -ment, -ness* are usually nouns. *-ful, -ous, -ive* are usually adjectives. *-ly* is usually an adverb.",
    },
    {
      type: "example",
      title: "Guessing step by step",
      items: [
        "“The old bridge was **unstable**, so the town closed it to cars.”",
        "Word parts: **un-** (not) + *stable*. Grammar: it comes after *was* and describes the bridge, so it is an adjective.",
        "Clue: the town closed the bridge, so it is probably dangerous.",
        "Guess: **not safe; likely to move or fall**. That is enough to understand the sentence.",
      ],
    },
    {
      type: "tip",
      exam: "toefl",
      body: "When a question asks which word is *closest in meaning*, put each option into the sentence in place of the word. The correct option keeps the meaning of the whole sentence.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "The town that said no to cars",
      labelled: true,
      paragraphs: [
        "Twenty-five years ago, the old centre of Valmora, a small city in southern Europe, was full of traffic. Its narrow streets were blocked by cars for most of the day, and the noise and fumes, the dirty gases from car engines, made the town centre an unpleasant place to be.",
        "Then the new mayor made a brave decision. She banned private cars from the historic centre and turned the main streets into pedestrian zones, areas where only people on foot and bicycles are allowed. Many shop owners were reluctant at first. They did not want the change because they believed their customers would stop coming.",
        "In fact, the opposite happened. Instead of becoming deserted, the centre filled with people. Families went for walks, children played in the squares and new cafés opened. Small businesses began to thrive, and some shops reported that their sales had almost doubled within five years.",
        "Not everyone was happy, of course. Some older residents complained that it was now inconvenient to get to the doctor or to carry heavy shopping home. To solve this, the city introduced a cheap taxi service for older people and free delivery from local shops.",
        "Today, other cities send planners to Valmora to learn from its experience. Their conclusion is usually the same: when you give the streets back to people, people come back to the streets.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader guesses",
      body: "**reluctant** (paragraph B): The next sentence explains it: “They did not want the change.” So *reluctant* means **not wanting to do something**. (Clue: explanation nearby)\n\n**deserted** (paragraph C): “*Instead of* becoming deserted, the centre filled with people.” *Instead of* shows a contrast, so *deserted* is the opposite of *full of people*: **empty**. (Clue: contrast)\n\n**thrive** (paragraph C): The sentences around it give examples: new cafés opened, and some shops' sales almost doubled. So *thrive* means **to grow and be successful**. (Clue: examples nearby)\n\n**inconvenient** (paragraph D): *in-* = not, and *convenient* = easy and useful. The examples (hard to get to the doctor, carrying heavy shopping) confirm it: **causing problems; not easy**. (Clue: word parts + examples)\n\nNotice that the writer even gives a definition of *fumes* and *pedestrian zones* in paragraphs A and B, after a comma. Writers often do this for words that readers may not know.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Invented words",
        instructions: "These sentences contain invented words. Nobody knows them, so you must use the context. Choose the best meaning.",
        questions: [
          {
            prompt: "“After the long walk, the children were so *glimby* that they fell asleep in the car.” *Glimby* probably means…",
            options: ["hungry", "tired", "excited", "angry"],
            answer: 1,
            explanation: "They fell asleep after a long walk, so they were tired.",
          },
          {
            prompt: "“Please don't *frask* the glasses on the floor, or they will break.” *Frask* probably means…",
            options: ["drop", "wash", "fill", "sell"],
            answer: 0,
            explanation: "Glasses break when they fall on the floor, so *frask* means drop.",
          },
          {
            prompt: "“Unlike his *brendish* sister, who never stops talking, Sam hardly says a word.” What is Sam like?",
            options: ["talkative", "quiet", "rude", "funny"],
            answer: 1,
            explanation: "*Unlike* shows a contrast. His sister never stops talking (*brendish* = talkative), and Sam is the opposite: he hardly speaks.",
          },
          {
            prompt: "“The market sells all kinds of *plonts*, such as apples, mangoes, pears and plums.” *Plonts* are…",
            options: ["vegetables", "fruits", "flowers", "drinks"],
            answer: 1,
            explanation: "*Such as* introduces examples, and all the examples are fruits.",
          },
          {
            prompt: "“My neighbour is a *trellan*, that is, someone who repairs water pipes in people's homes.” A *trellan* is…",
            options: ["a builder", "a plumber", "an electrician", "a gardener"],
            answer: 1,
            explanation: "*That is* introduces a definition. A person who repairs water pipes is a plumber.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "What kind of clue?",
        instructions: "Match each sentence to the clue that helps you understand the word in *italics*.",
        left: [
          "Some birds *migrate*, which means they fly to warmer countries in winter.",
          "He felt *anxious* before the exam, but his friend was completely calm.",
          "Bring some *stationery*, for example pens, pencils and a notebook.",
          "The film was *tedious*. Half the audience fell asleep and the rest looked at their phones.",
          "Sadly, the damage to the old painting is *irreparable*.",
        ],
        right: ["Contrast", "Word parts", "Definition", "Explanation nearby", "Example"],
        answer: [2, 0, 4, 3, 1],
      },
    },
    {
      type: "passage",
      title: "Why we need to be bored",
      labelled: true,
      paragraphs: [
        "Most of us hate being bored. When we have nothing to do for even a minute, at a bus stop or in a queue, we reach for our phones. Some surveys suggest that many people now check their phones constantly, often more than a hundred times a day.",
        "But some psychologists believe that boredom is not always a bad thing. When our minds have nothing to focus on, they begin to wander. We start to daydream, letting our thoughts move freely from one idea to another without trying to control them.",
        "This kind of free thinking can be surprisingly useful. In one study, people who first did a dull task, copying numbers from a phone book, had more creative ideas afterwards than people who had not been bored. Their minds had been searching for something more stimulating, in other words, something more interesting and exciting.",
        "Rest is another benefit. Our brains need short breaks to sort information and store memories. Without these breaks, people often feel exhausted, even if they have not done any physical work all day.",
        "So the next time you are waiting for a bus, try leaving your phone in your pocket. A few minutes of boredom may leave you feeling refreshed, not frustrated, and it might even give you your next good idea.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Closest in meaning",
        instructions: "Read “Why we need to be bored”. Choose the word or phrase that is closest in meaning.",
        questions: [
          {
            prompt: "In paragraph A, *constantly* is closest in meaning to…",
            options: ["rarely", "all the time", "carefully", "quickly"],
            answer: 1,
            explanation: "The next words give an example: “more than a hundred times a day”. That is very often, or all the time.",
          },
          {
            prompt: "In paragraph B, *wander* is closest in meaning to…",
            options: ["stop working", "move around without a plan", "become tired", "remember the past"],
            answer: 1,
            explanation: "The next sentence explains it: our thoughts “move freely from one idea to another”.",
          },
          {
            prompt: "In paragraph C, *dull* is closest in meaning to…",
            options: ["boring", "difficult", "dangerous", "important"],
            answer: 0,
            explanation: "Copying numbers from a phone book is the example, and the people who did it were “bored”.",
          },
          {
            prompt: "In paragraph C, *stimulating* means…",
            options: ["relaxing", "interesting and exciting", "creative", "useful"],
            answer: 1,
            explanation: "*In other words* introduces a definition: “something more interesting and exciting”.",
          },
          {
            prompt: "In paragraph D, *exhausted* is closest in meaning to…",
            options: ["very tired", "very bored", "very hungry", "very happy"],
            answer: 0,
            explanation: "The paragraph is about rest, and “even if they have not done any physical work” suggests a feeling you normally get after hard work.",
          },
          {
            prompt: "In paragraph E, the writer contrasts *refreshed* with *frustrated*. *Refreshed* probably means…",
            options: ["annoyed", "rested and full of energy again", "sleepy", "worried"],
            answer: 1,
            explanation: "*Not frustrated* shows the opposite of a negative feeling. The word parts help too: *re-* (again) + *fresh*.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "Find the word",
        instructions: "Find ONE word in “Why we need to be bored” that matches each meaning. Copy it exactly.",
        text: "a line of people who are waiting (paragraph A): {{0}}\nscientists who study the human mind (paragraph B): {{1}}\nthe feeling you have when you have nothing interesting to do (paragraph B): {{2}}\nto think about pleasant things while you are awake (paragraph B): {{3}}\nto keep something so you can use it later (paragraph D): {{4}}",
        answers: [["queue"], ["psychologists"], ["boredom"], ["daydream"], ["store"]],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "IELTS doesn't ask you to define words, but the questions often use different words from the passage. Guessing meaning from context helps you see that “reluctant” in the text means “did not want to” in the question.",
    },
    {
      exam: "toefl",
      body: "In Read an Academic Passage, you may be asked which word or phrase is closest in meaning to a word in the passage. Try each option in the sentence and choose the one that fits the whole paragraph, not just the one you know best.",
    },
    {
      exam: "toeic",
      body: "Part 7 sometimes asks: “The word … in paragraph 2, line 3, is closest in meaning to…”. Several options can be real meanings of the word, so read the sentence and choose the meaning that fits *this* context.",
    },
  ],
  vocabulary: [
    { word: "context", meaning: "the words and sentences around a word that help explain its meaning", example: "You can often guess a word's meaning from the context.", topic: "academic" },
    { word: "reluctant", meaning: "not wanting to do something", example: "He was reluctant to lend me his car.", topic: "everyday" },
    { word: "deserted", meaning: "empty, with no people", example: "At 3 am the streets were completely deserted.", topic: "travel" },
    { word: "thrive", meaning: "to grow, develop and be successful", example: "Small cafés thrive in busy streets.", level: "B2", topic: "business" },
    { word: "inconvenient", meaning: "causing small problems; not easy or suitable", example: "Sorry, is this an inconvenient time to call?", topic: "everyday" },
    { word: "resident", meaning: "a person who lives in a particular place", example: "Local residents complained about the noise.", topic: "society" },
    { word: "constantly", meaning: "all the time, or very often", example: "My little brother is constantly asking questions.", topic: "everyday" },
    { word: "wander", meaning: "to move around without a clear plan or direction", example: "We spent the afternoon wandering around the old town.", topic: "travel" },
    { word: "dull", meaning: "boring; not interesting", example: "The first chapter was dull, but the rest of the book was great.", topic: "everyday" },
    { word: "stimulating", meaning: "interesting and exciting; making you think", example: "It was a stimulating discussion.", level: "B2", topic: "education" },
    { word: "exhausted", meaning: "extremely tired", example: "I was exhausted after the twelve-hour flight.", topic: "health" },
    { word: "refreshed", meaning: "feeling rested and full of energy again", example: "After a short nap, she felt refreshed.", topic: "health" },
  ],
  keyPoints: [
    "You don't need to know every word. First ask: do I need this word to answer the question?",
    "Look for clues: definitions (that is, means), examples (such as), contrasts (but, instead of) and explanations in the next sentence.",
    "Word parts help: un-/in-/dis- = not, re- = again, -less = without.",
    "Check your guess by putting it into the sentence. Does the sentence still make sense?",
  ],
};

export default lesson;
