import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-sentence-from-picture",
  title: "Writing a sentence about a picture",
  summary:
    "Practise the TOEIC task Write a sentence based on a picture: use two given words in one correct sentence that matches what you can see.",
  skill: "writing",
  level: "B1",
  order: 8,
  minutes: 25,
  exams: [
    { exam: "toeic", task: "Writing – Write a sentence based on a picture" },
    { exam: "toefl", task: "Writing – Build a Sentence" },
  ],
  objectives: [
    "Write one grammatically correct sentence that uses two given words and matches a picture",
    "Change the form of the given words when you need to (verb forms, plurals)",
    "Use the present continuous and prepositions of place to describe actions and positions",
    "Check a sentence for the most common mistakes: missing articles, wrong verb forms and missing words",
  ],
  warmUp: [
    "Look around the room you are in. Write one sentence about what someone or something is doing.",
    "Which small words help you say where things are? (for example: next to, under…)",
  ],
  learn: [
    {
      type: "text",
      title: "The task",
      body: "The first part of the TOEIC Writing test is **Write a sentence based on a picture**. There are **5 pictures**, and you have **8 minutes** for all of them. With each picture you get **two words or phrases**, for example *woman / umbrella* or *because / rain*.\n\nYou must write **one sentence** that:\n\n1. uses **both** words or phrases,\n2. is **grammatically correct**, and\n3. **matches the picture**.\n\nYou **can change the form** of the words (*carry* → *is carrying*, *box* → *boxes*) and use them **in any order**. Your sentence is scored on its grammar and on how well it matches the picture, so a short, correct sentence is better than a long sentence with mistakes.",
    },
    {
      type: "text",
      title: "A simple pattern",
      body: "Most good answers follow this pattern:\n\n**who / what** + **verb** + **object or detail** + **place**\n\n- *The man **is carrying** a box **into** the building.*\n- *Two women **are sitting** on a bench **under** a tree.*\n\nUse the **present continuous** (*is / are + -ing*) for actions that are happening in the picture. Use **there is / there are** for things: *There are some boxes next to the door.*",
    },
    {
      type: "table",
      title: "Types of word pairs",
      headers: ["The words include…", "Example pair", "Example sentence"],
      rows: [
        ["a noun + a verb", "woman / read", "A woman is reading a book on the train."],
        ["a preposition of place", "bicycle / next to", "A bicycle is parked next to the tree."],
        ["a joining word (and, but, so, because, while)", "umbrella / because", "The man is holding an umbrella because it is raining."],
        ["a plural noun", "customers / in front of", "Two customers are standing in front of the counter."],
      ],
    },
    {
      type: "example",
      title: "Common mistakes",
      items: [
        "**Missing articles.** Wrong: Man is riding bicycle. → Right: **A** man is riding **a** bicycle.",
        "**Wrong verb form.** Wrong: The woman is sit on a chair. → Right: The woman is **sitting** on a chair.",
        "**Missing *is / are*.** Wrong: The children playing in the park. → Right: The children **are** playing in the park.",
        "**Two sentences instead of one.** Wrong: The man is tired. He is sitting down. → Right: The man is sitting down **because** he is tired.",
        "**Not in the picture.** Wrong: The woman is buying a car. (There is no car in the picture.)",
        "**Only one word used.** If the words are *dog / walk*, a sentence with only *dog* in it does not complete the task.",
      ],
    },
    {
      type: "tip",
      exam: "toeic",
      body: "Eight minutes for five sentences is about a minute and a half for each picture. Write a simple sentence first and check it. Add an extra detail only if you have time and you are sure it is correct.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: is the sentence correct?",
        questions: [
          {
            prompt: "Words: *woman / phone*. Which sentence is correct?",
            options: ["Woman is talking on phone.", "A woman is talking on the phone.", "A woman talking on the phone.", "A woman is talk on the phone."],
            answer: 1,
            explanation: "The others have missing articles (A), a missing *is* (C) or the wrong verb form (D).",
          },
          {
            prompt: "Words: *because / cold*. Which sentence is correct?",
            options: [
              "The man is wearing a scarf because it is cold.",
              "The man is wearing a scarf. Because it is cold.",
              "Because cold, the man is wearing a scarf.",
              "The man is wearing a scarf because cold weather.",
            ],
            answer: 0,
            explanation: "*because* needs a subject and a verb after it (*because it is cold*). Option B is two sentences, and the second is a fragment.",
          },
          {
            prompt: "Words: *box / carry*. Which sentence is correct?",
            options: ["Two workers are carry a box.", "Two workers are carrying a heavy box.", "Two workers carrying heavy box.", "Two worker is carrying a heavy box."],
            answer: 1,
            explanation: "*carry* changes to *are carrying*, and *Two workers* (plural) goes with *are*.",
          },
          {
            prompt: "Words: *table / under*. Which sentence uses both words correctly?",
            options: ["A cat is sleeping under the table.", "A cat is sleeping on the sofa.", "The table is under.", "Under the table cat sleeping."],
            answer: 0,
            explanation: "Option B does not use either word, option C is not complete, and option D has no article and no verb.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "image",
      src: "/images/writing-sentence-from-picture-bus-stop.svg",
      alt: "A rainy street. On the left, a red bus with the number 24 is coming towards a bus stop. At the bus stop, a man in a green coat is holding a black umbrella over his head. Next to him, a woman in a yellow raincoat is standing under the roof of a bus shelter and looking at her phone. There are grey clouds in the sky.",
      caption: "Picture 1: a bus stop on a rainy day",
    },
    {
      type: "example",
      title: "Model sentences for Picture 1",
      items: [
        "*umbrella / because* → A man is holding an **umbrella because** it is raining.",
        "*woman / phone* → A **woman** in a yellow raincoat is looking at her **phone**.",
        "*bus / towards* → A red **bus** is coming **towards** the bus stop.",
        "*wait / under* → A woman is **waiting under** the roof of the bus shelter.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- Each sentence uses **both** words. The writer changed the form when it was needed: *wait* → *is waiting*.\n- Each sentence **matches the picture**. The writer does not guess things we cannot see, such as *The man is angry* or *The bus is late*.\n- The verbs are in the **present continuous** because the actions are happening in the picture.\n- Every singular noun has an article or another small word in front of it: *a man*, *the bus stop*, *her phone*.\n- The sentences are short and clear. A sentence does not need to be long to get a top score; it needs to be correct and relevant.",
    },
  ],
  practice: [
    {
      type: "image",
      src: "/images/writing-sentence-from-picture-office.svg",
      alt: "Three people are in a meeting room. On the left, a man in a blue shirt is standing next to a large screen on the wall and pointing at a bar chart on it. At a white table, a woman in a red jacket is typing on a laptop, and a man in a grey jumper is holding a cup. There is a plant in the corner and a clock on the wall.",
      caption: "Picture 2: a meeting in an office",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "order",
        mode: "words",
        title: "Build the sentence (Picture 2)",
        instructions: "Words: while / laptop. Put the word groups in order to make one correct sentence about Picture 2.",
        items: ["A woman", "is typing", "on a laptop", "while", "a man", "is pointing at", "the chart."],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Choose the best sentence (Picture 2)",
        instructions: "For each pair of words, choose the sentence that is grammatically correct, uses both words and matches Picture 2.",
        questions: [
          {
            prompt: "Words: *point / screen*",
            options: [
              "The woman is pointing at the screen.",
              "A man is pointing at a chart on the screen.",
              "A man is point at the screen.",
              "A man pointing at the screen.",
            ],
            answer: 1,
            explanation: "Option A does not match the picture (the woman is typing). Options C and D have grammar mistakes.",
          },
          {
            prompt: "Words: *cup / hold*",
            options: [
              "A man in a grey jumper is holding a cup.",
              "A man in a grey jumper holds cup.",
              "The woman is holding a cup.",
              "A cup is holding the man.",
            ],
            answer: 0,
            explanation: "Option B has no article before *cup*, option C does not match the picture, and option D makes no sense.",
          },
          {
            prompt: "Words: *plant / corner*",
            options: [
              "There is a plant in the corner of the room.",
              "There are a plant in the corner of the room.",
              "There is plant in corner.",
              "A plant is in the corner on the room.",
            ],
            answer: 0,
            explanation: "*a plant* is singular, so we need *There is*. Option C has no articles, and option D uses the wrong preposition (*of the room*, not *on the room*).",
          },
          {
            prompt: "Words: *meeting / three*",
            options: [
              "Three people are having a meeting.",
              "Three people is having a meeting.",
              "Five people are having a meeting.",
              "Three people are having a party.",
            ],
            answer: 0,
            explanation: "Option B has the wrong verb (*people* is plural, so *are*). Option C does not match the picture (there are three people), and option D does not use the word *meeting*.",
          },
        ],
      },
    },
    {
      type: "image",
      src: "/images/writing-sentence-from-picture-park.svg",
      alt: "A sunny park. On the left, two older people with grey hair are sitting on a wooden bench under a large tree. In the middle, a woman in a purple coat is walking a small brown dog on a lead along the path. Behind her there is a small pond with two ducks on it. On the right, a boy in a red T-shirt is riding a bicycle along the path.",
      caption: "Picture 3: a sunny day in the park",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "order",
        mode: "words",
        title: "Build the sentence (Picture 3)",
        instructions: "Words: dog / along. Put the word groups in order to make one correct sentence about Picture 3.",
        items: ["A woman", "is walking", "her", "small brown dog", "along", "the path."],
      },
    },
    {
      type: "image",
      src: "/images/writing-sentence-from-picture-market.svg",
      alt: "An outdoor fruit market. A stall with a green and white striped roof has three boxes of fruit on it: red apples, oranges and bananas. A small sign on the apples says £2. Behind the stall, a seller in a white apron is handing a paper bag of apples to a customer. The customer is a man with a blue backpack. On the right, a woman with a shopping basket is waiting for her turn.",
      caption: "Picture 4: a fruit stall at a market",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: four sentences about Picture 4",
        prompt:
          "Write **one sentence** for each pair of words. Each sentence must use both words (you can change their form and order) and must describe Picture 4.\n\n1. seller / hand\n2. customer / backpack\n3. fruit / on\n4. woman / while\n\nTry to finish in about 6 minutes, as in the real test.",
        minWords: 30,
        minutes: 6,
        rubric: [
          "Grammar: each answer is one complete sentence with a subject and a verb.",
          "Task: I used both words in every sentence (I may have changed their form, for example hand → is handing).",
          "Relevance: every sentence describes something I can really see in the picture.",
          "Verb forms: I used the present continuous (is / are + -ing) for actions in the picture.",
          "Articles and plurals: I put a, an or the before singular nouns, and plural nouns end in -s.",
          "Accuracy: I checked spelling, capital letters and the full stop at the end of each sentence.",
        ],
        modelAnswer:
          "1. The seller is handing a paper bag of apples to a customer.\n2. The customer is wearing a blue backpack.\n3. There are three boxes of fruit on the stall.\n4. A woman with a shopping basket is waiting while the seller is serving the man with the backpack.",
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "In **Write a sentence based on a picture** (5 pictures in 8 minutes), you can change the form of the words and use them in any order, but you must use both of them in **one** sentence. Before you move on, check three things: both words, correct grammar, and a sentence that matches the picture.",
    },
    {
      exam: "toefl",
      body: "**Build a Sentence** practises the same skill in a different way: you put words and phrases in order to make a correct reply. Find the subject and the main verb first. Remember that a preposition (*on*, *under*, *along*) is usually followed by a noun phrase (*the path*, *a big tree*).",
    },
  ],
  vocabulary: [
    { word: "present continuous", meaning: "the verb form am / is / are + -ing, for actions happening now", example: "Use the present continuous to describe actions in a photo.", topic: "academic" },
    { word: "preposition", meaning: "a word such as on, under or next to that shows place or time", example: "Under is a preposition of place.", topic: "academic" },
    { word: "article", meaning: "the words a, an and the", example: "Don't forget the article before a singular noun.", topic: "academic" },
    { word: "stall", meaning: "a table or small shop where things are sold, often in a market", example: "She sells fresh bread at a stall in the market.", topic: "business" },
    { word: "seller", meaning: "a person who sells something", example: "The seller put the apples in a paper bag.", topic: "business" },
    { word: "customer", meaning: "a person who buys things from a shop or business", example: "The shop was full of customers.", topic: "business" },
    { word: "shelter", meaning: "a small building or roof that protects you from rain or sun", example: "We waited in the bus shelter until the rain stopped.", topic: "everyday" },
    { word: "point at", meaning: "to show something by holding out your finger towards it", example: "The teacher pointed at the map on the wall.", topic: "everyday" },
    { word: "hand (verb)", meaning: "to give something to someone with your hand", example: "Could you hand me that pen, please?", topic: "everyday" },
    { word: "pond", meaning: "a small area of still water", example: "Two ducks are swimming in the pond.", topic: "environment" },
  ],
  keyPoints: [
    "Write ONE sentence that uses BOTH words and matches the picture.",
    "You can change the form of the words (carry → is carrying) and use them in any order.",
    "Use the pattern: who / what + verb (often present continuous) + object or detail + place.",
    "Check articles (a, an, the), verb forms (is / are + -ing) and plurals.",
    "A short, correct sentence is better than a long sentence with mistakes.",
  ],
};

export default lesson;
