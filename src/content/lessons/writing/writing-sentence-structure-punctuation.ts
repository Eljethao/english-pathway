import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-sentence-structure-punctuation",
  title: "Sentence structure and punctuation",
  summary:
    "Build complete, correct sentences, join ideas with words like and, but, so and because, and avoid the two most common punctuation mistakes: fragments and comma splices.",
  skill: "writing",
  level: "B1",
  order: 1,
  minutes: 25,
  exams: [
    { exam: "toefl", task: "Writing – Build a Sentence" },
    { exam: "toeic", task: "Writing – Write a sentence based on a picture" },
    { exam: "ielts", task: "Writing Task 2" },
  ],
  objectives: [
    "Write complete sentences with a subject and a verb",
    "Join two ideas with and, but, so, or, because, when and although",
    "Use capital letters, full stops, commas and question marks correctly",
    "Put words in the right order in statements and indirect questions",
  ],
  warmUp: [
    "Look at this message: “went to the shop it was closed”. What is wrong with it? How would you fix it?",
    "Which small words do you use to join two ideas in one sentence? Name as many as you can.",
  ],
  learn: [
    {
      type: "text",
      title: "Every sentence needs a subject and a verb",
      body: "A complete sentence has a **subject** (who or what) and a **verb** (what the subject does or is). It starts with a capital letter and ends with a full stop, a question mark or an exclamation mark.\n\n- *My brother works in a hospital.* (subject: my brother; verb: works)\n- *The library opens at nine.* (subject: the library; verb: opens)\n\nThe usual English word order is **subject + verb + object + place + time**: *I met my friends at the café on Saturday.*",
    },
    {
      type: "table",
      title: "Three types of sentence",
      headers: ["Type", "Pattern", "Example"],
      rows: [
        ["Simple", "one subject + one verb", "The train was late."],
        ["Compound", "two full sentences joined by , and / , but / , so / , or", "The train was late, so I took a taxi."],
        ["Complex", "a main clause + a clause with because / when / although / if", "I took a taxi because the train was late."],
      ],
    },
    {
      type: "text",
      title: "Commas with joining words",
      body: "- With **and, but, so, or** between two full sentences, put a comma **before** the joining word: *It was cold, but we went swimming.*\n- With **because, when, although, if**, use **no comma** when this part comes second: *We stayed inside because it was raining.*\n- Use **a comma** when this part comes first: *Because it was raining, we stayed inside.*",
    },
    {
      type: "example",
      title: "Three common mistakes",
      items: [
        "**Fragment** (not a full sentence). Wrong: Because the bus was late. → Right: I missed the class **because the bus was late**.",
        "**Comma splice** (two sentences joined only by a comma). Wrong: The shop was closed, we went home. → Right: The shop was closed, **so** we went home. / The shop was closed**.** We went home.",
        "**Run-on** (two sentences with no punctuation). Wrong: I love cooking I make dinner every day. → Right: I love cooking**,** **and** I make dinner every day.",
      ],
    },
    {
      type: "text",
      title: "Word order in questions and indirect questions",
      body: "In a **direct question**, the verb comes before the subject: *Where **is the library**?*\n\nIn an **indirect question**, the word order is the same as in a statement, so the subject comes before the verb: *Could you tell me where **the library is**?*\n\nIndirect questions start with polite phrases such as *Do you know…*, *Could you tell me…*, *I wonder…* and *I'd like to know…*. When there is no question word, use **if** or **whether**: *Do you know **if** the shop is open?*",
    },
    {
      type: "tip",
      exam: "toefl",
      body: "In **Build a Sentence** you read a short message from one person and put groups of words in order to make a correct reply. First find the **subject** and the **main verb**, then build the rest around them. Watch for indirect questions: after *Do you know* or *Could you tell me*, the subject comes before the verb.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Quick check: what type of sentence is it?",
        instructions: "Match each sentence with the correct description.",
        left: [
          "We missed the bus, so we walked to school.",
          "Although the test was hard, I passed it.",
          "My sister lives in Canada.",
          "I was tired, I went to bed early.",
          "Because I forgot my keys.",
        ],
        right: [
          "comma splice (mistake)",
          "simple sentence (correct)",
          "fragment (mistake)",
          "complex sentence (correct)",
          "compound sentence (correct)",
        ],
        answer: [4, 3, 1, 0, 2],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "Model paragraph: My favourite place to study",
      body: "My favourite place to study is the small library near my flat. It is quiet, and the chairs are very comfortable. I usually go there on Tuesday and Thursday evenings because I finish work early on those days. When I arrive, I always choose the same table by the window. The library does not have a café, so I take a bottle of water with me. Although it is sometimes cold in winter, I still prefer it to my home. At home, my phone and the television distract me. In the library, I can focus for two or three hours without a break.",
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- Sentence 1 is **simple**: one subject (*My favourite place to study*) and one verb (*is*).\n- Sentence 2 is **compound**: two full sentences joined by *, and*.\n- Sentence 3 is **complex**. The *because* clause comes second, so there is **no comma**.\n- Sentences 4 and 6 are also complex, but the *When* and *Although* clauses come **first**, so there is a comma after them.\n- Sentence 5 uses *, so* to show a result.\n\nThe writer mixes short and longer sentences. This makes the paragraph easy to read, and it shows **grammatical range**, which examiners reward. Every sentence has a subject and a verb, and there are no comma splices.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Join the ideas",
        instructions:
          "Complete each sentence with a joining word from the box. The word in brackets tells you the meaning you need.",
        text: "1. I wanted to buy the jacket, {{0}} it was too expensive. (contrast)\n2. She missed breakfast, {{1}} she was very hungry by ten o'clock. (result)\n3. We couldn't play tennis {{2}} it was raining. (reason)\n4. {{3}} he is only sixteen, he speaks four languages. (contrast)\n5. Please call me {{4}} you get to the station. (time)\n6. Would you like tea, {{5}} would you prefer coffee? (choice)\n7. My brother plays the guitar, {{6}} he also sings in a band. (adding)",
        answers: [
          ["but", "although", "though", "even though", "yet"],
          ["so", "and so"],
          ["because", "as", "since"],
          ["Although", "Though", "Even though", "While", "Whilst"],
          ["when", "once", "as soon as", "after"],
          ["or"],
          ["and"],
        ],
        wordBank: ["and", "but", "so", "or", "because", "although", "when"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "order",
        mode: "words",
        title: "Build a Sentence 1",
        instructions:
          "Read the message. Then put the word groups in order to make a correct reply.\n\nAlex: “The professor said the essay deadline has changed.”",
        items: ["Do you know", "when", "we", "have to", "submit", "it?"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "order",
        mode: "words",
        title: "Build a Sentence 2",
        instructions:
          "Read the message. Then put the word groups in order to make a correct reply.\n\nMia: “Why didn't you come to the party on Saturday?”",
        items: ["I had to", "finish", "an assignment", "that was", "due", "on Monday."],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: describe a place you like",
        prompt:
          "Describe a place in your town or city that you like to visit. Say where it is, when you go there and why you like it.\n\nUse at least one compound sentence (with , and / , but / , so) and at least two complex sentences (with because / when / although). Write at least 80 words.",
        minWords: 80,
        minutes: 12,
        rubric: [
          "Task: I answered all three parts of the question (where, when and why).",
          "Coherence: my sentences follow a logical order, and every sentence is about the place.",
          "Grammatical accuracy: every sentence has a subject and a verb, with no fragments or comma splices.",
          "Grammatical range: I used simple, compound and complex sentences.",
          "Punctuation: I used capital letters and full stops correctly, a comma before and / but / so, and a comma after a because / when / although clause only when it comes first.",
          "Vocabulary: I used some descriptive words instead of repeating ‘nice’ or ‘good’.",
        ],
        modelAnswer:
          "One place I really enjoy visiting is the riverside market in the old part of my town. It is open every weekend, but I usually go on Saturday mornings. When I arrive, I walk slowly past the stalls and look at the fresh fruit, cheese and homemade bread. I love the market because it is always lively and colourful. The sellers are friendly, so I often stop and chat with them. Although it can get very crowded after eleven o'clock, I never feel stressed there. For me, it is the perfect way to start the weekend.",
      },
    },
  ],
  examTips: [
    {
      exam: "toefl",
      body: "In **Build a Sentence**, read your finished sentence once before you move on. Check three things: Is there a subject and a verb? Is the word order correct for a statement or an indirect question? Does the reply make sense after the first person's message?",
    },
    {
      exam: "toeic",
      body: "In **Write a sentence based on a picture**, you must use the two given words or phrases in **one** sentence about the photo. You can change the form of the words and use them in any order. The sentence does not need to be long, but it must be grammatically correct and match the picture. For example, with *woman / while*: *The woman is reading a newspaper while she waits for the train.*",
    },
    {
      exam: "ielts",
      body: "Grammatical range and accuracy is a quarter of your Writing score. Use a mix of simple, compound and complex sentences, but remember that **accuracy matters too**: frequent errors such as comma splices and fragments will lower your band.",
    },
  ],
  vocabulary: [
    { word: "subject", meaning: "the person or thing that does the action in a sentence", example: "In “The dog barked”, the subject is “the dog”.", topic: "academic" },
    { word: "verb", meaning: "a word that shows an action or a state", example: "Every sentence needs at least one verb.", topic: "academic" },
    { word: "clause", meaning: "a group of words with a subject and a verb", example: "“Because it was late” is a clause, not a full sentence.", topic: "academic" },
    { word: "conjunction", meaning: "a word that joins two ideas, such as and, but or because", example: "Use a conjunction to join these two short sentences.", topic: "academic" },
    { word: "fragment", meaning: "a group of words that looks like a sentence but is not complete", example: "Your teacher may mark a fragment as an error.", topic: "academic" },
    { word: "comma splice", meaning: "a mistake where two full sentences are joined with only a comma", example: "“It was late, we went home” is a comma splice.", topic: "academic" },
    { word: "punctuation", meaning: "marks such as full stops, commas and question marks", example: "Good punctuation makes your writing easier to read.", topic: "academic" },
    { word: "capital letter", meaning: "a big letter, such as A, B or C, used at the start of sentences and names", example: "Start every sentence with a capital letter.", topic: "academic" },
    { word: "indirect question", meaning: "a polite question inside another phrase, such as “Do you know where…?”", example: "“Could you tell me where the bank is?” is an indirect question.", topic: "everyday" },
    { word: "word order", meaning: "the order in which words appear in a sentence", example: "English word order is usually subject, verb, object.", topic: "academic" },
  ],
  keyPoints: [
    "A complete sentence has a subject and a verb, a capital letter at the start and a full stop or question mark at the end.",
    "Put a comma before and, but, so and or when they join two full sentences.",
    "Use a comma after a because / when / although clause only when it comes first.",
    "Never join two full sentences with only a comma (comma splice).",
    "In indirect questions (Do you know… / Could you tell me…), the subject comes before the verb.",
  ],
};

export default lesson;
