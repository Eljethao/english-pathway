import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-linking-words-cohesion",
  title: "Linking words and cohesion basics",
  summary:
    "Connect your ideas clearly with linking words for adding, contrast, reasons, results and examples, punctuate them correctly, and use words like it, this and they to avoid repetition.",
  skill: "writing",
  level: "B1",
  order: 4,
  minutes: 30,
  exams: [
    { exam: "ielts", task: "Writing Task 2" },
    { exam: "toefl", task: "Writing – Academic Discussion" },
    { exam: "toeic", task: "Writing – Write an opinion essay" },
  ],
  objectives: [
    "Choose the right linking word for adding, contrast, reason, result, example and sequence",
    "Punctuate however, therefore, although and because correctly",
    "Use reference words (it, they, this, these) to avoid repeating the same words",
  ],
  warmUp: [
    "Which linking words do you already use when you write? Try to name five.",
    "What is the difference between ‘but’ and ‘however’?",
  ],
  learn: [
    {
      type: "text",
      title: "What is cohesion?",
      body: "**Cohesion** means that your sentences are clearly connected, so the reader can follow your ideas easily. Two simple tools help you do this:\n\n- **Linking words** show how two ideas are connected (*because*, *however*, *for example*).\n- **Reference words** point back to something you have already mentioned (*it*, *they*, *this*, *these*), so you do not need to repeat it.",
    },
    {
      type: "table",
      title: "Linking words by meaning",
      headers: ["Meaning", "Inside one sentence", "At the start of a new sentence"],
      rows: [
        ["Adding", "and, as well as", "Also, In addition, Moreover,"],
        ["Contrast", "but, although, while, despite + noun", "However, On the other hand,"],
        ["Reason", "because + clause, because of + noun", "This is because…"],
        ["Result", "so", "As a result, Therefore,"],
        ["Example", "such as + noun", "For example, For instance,"],
        ["Sequence", "before, after, when", "First, Then, After that, Finally,"],
      ],
    },
    {
      type: "text",
      title: "Punctuation with linking words",
      body: "- **However**, **Therefore**, **In addition** and **For example** usually start a new sentence and are followed by a comma: *The course is expensive. **However**, it is very good.*\n- Do not use *however* like *but*. Wrong: *The course is expensive, however it is good.*\n- **Although** and **because** join two clauses in one sentence: *Although the course is expensive, it is very good.*\n- Do not use *although* and *but* together. Wrong: *Although it was cold, but we went out.*\n- **because** + subject + verb, but **because of** + noun: *because it rained* / *because of the rain*. In the same way, **despite** + noun: *despite the rain*.",
    },
    {
      type: "example",
      title: "Avoiding repetition with reference words",
      items: [
        "Repetitive: Many students use **smartphones** in class. **Smartphones** can be useful, but **smartphones** can also distract students.",
        "Better: Many students use **smartphones** in class. **These devices** can be useful, but **they** can also be a distraction.",
        "Some cities have banned cars from the centre. **This** has made the streets quieter and safer. (*This* = the ban on cars)",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Examiners reward a **range** of linking words used **accurately**, but they also notice overuse. Starting every sentence with *Moreover* or *Furthermore* sounds mechanical. Some sentences should connect through reference words instead.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Quick check: what does it do?",
        instructions: "Match each linking word with its meaning.",
        left: ["however", "therefore", "for instance", "in addition", "because of", "finally"],
        right: [
          "introduces the last point in a list",
          "gives an example",
          "shows a contrast",
          "adds another point",
          "gives a reason (followed by a noun)",
          "shows a result",
        ],
        answer: [2, 5, 1, 3, 4, 0],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "Question",
      body: "*Is shopping in real shops better than shopping online?*",
    },
    {
      type: "text",
      title: "Model paragraph (linking and reference words in bold)",
      body: "Many people now buy almost everything online. **However**, I believe that shopping in real shops still has important advantages. **First**, you can see and touch products **before** you pay for **them**. **For example**, when I buy shoes, I always try them on **because** sizes are not the same in every brand. **In addition**, shopping in a town centre is a social activity. Friends can meet, have a coffee and look around the shops together. **This** is something a website cannot offer. **Of course**, online shopping is fast and often cheaper, **so** it is useful for busy people. **Although** I sometimes order books online, I prefer local shops for most things. **As a result**, I also help small businesses in my area. **Overall**, I think both types of shopping have a place, **but** real shops give us an experience that we should not lose.",
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **However** in sentence 2 shows that the writer's opinion is different from the first idea.\n- **First** and **In addition** organise the two main reasons, so the reader can follow the argument.\n- **For example** introduces a personal example, and **because** explains it.\n- **them** refers back to *products*. **This** refers to the whole idea of meeting friends and shopping together.\n- **Although** (sentence 9) and **but** (the last sentence) each show contrast inside one sentence. They are in different sentences: the writer never uses *although* and *but* together.\n- **As a result** shows a consequence, and **Overall** introduces the conclusion.\n\nNotice that **not every sentence** starts with a linking word. Several sentences connect through reference words or simply follow logically from the one before.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Complete the paragraph",
        instructions: "Complete the paragraph with linking words from the box. There are two extra words.",
        text: "Working from home has become much more common in recent years. One advantage is that people save time {{0}} they do not need to travel to the office. {{1}}, someone who spends an hour on the train each way can gain ten hours a week. {{2}}, many workers say they can concentrate better at home. {{3}}, working from home also has some disadvantages. Some people feel lonely, {{4}} others find it hard to concentrate {{5}} noise at home. {{6}} these problems, most workers want to continue working from home for part of the week.",
        answers: [
          ["because", "as", "since"],
          ["For example", "For instance"],
          ["In addition", "Also", "Moreover", "Furthermore", "What is more", "What's more", "Besides"],
          ["However", "On the other hand", "Nevertheless"],
          ["while", "and", "but", "whereas"],
          ["because of", "due to", "owing to"],
          ["Despite", "In spite of"],
        ],
        wordBank: ["because", "For example", "In addition", "However", "while", "because of", "Despite", "so", "Although"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Choose the correct sentence",
        questions: [
          {
            prompt: "Which sentence is correct?",
            options: [
              "The hotel was cheap, however it was very clean.",
              "The hotel was cheap. However, it was very clean.",
              "The hotel was cheap however, it was very clean.",
              "The hotel was cheap. However it, was very clean.",
            ],
            answer: 1,
            explanation: "*However* starts a new sentence and is followed by a comma.",
          },
          {
            prompt: "Which sentence is correct?",
            options: [
              "Although it was raining, but we played football.",
              "Although it was raining, we played football.",
              "Although it was raining. We played football.",
              "Despite it was raining, we played football.",
            ],
            answer: 1,
            explanation: "Do not use *although* and *but* together. *Despite* needs a noun (*despite the rain*), not a clause.",
          },
          {
            prompt: "The flight was cancelled ___ the storm.",
            options: ["because", "because of", "so", "although"],
            answer: 1,
            explanation: "*the storm* is a noun, so we need *because of*.",
          },
          {
            prompt: "I missed the last bus. ___, I had to walk home.",
            options: ["Because", "Although", "As a result", "For example"],
            answer: 2,
            explanation: "Walking home is the result of missing the bus.",
          },
          {
            prompt: "Which sentence avoids repetition best?",
            options: [
              "Paris is famous for its museums. Paris's museums attract millions of visitors every year.",
              "Paris is famous for its museums. They attract millions of visitors every year.",
              "Paris is famous for its museums. It attract millions of visitors every year.",
            ],
            answer: 1,
            explanation: "*They* refers back to *museums* (plural), so the noun is not repeated. Option A repeats *Paris* and *museums*. Option C uses the wrong reference word (*it* instead of *they*) and the verb is wrong (*attract* after *it*).",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "write",
        title: "Your turn: link your ideas",
        prompt:
          "Some people prefer to live in a big city, while others prefer to live in the countryside. Which do you prefer, and why?\n\nWrite a paragraph of at least 120 words. Use at least five different linking words from this lesson and at least two reference words (it, they, this, these).",
        minWords: 120,
        minutes: 15,
        rubric: [
          "Task response: I gave a clear preference and supported it with reasons.",
          "Coherence: my ideas are in a logical order, and I used sequencing words (First, In addition, Finally) to organise them.",
          "Cohesion: I used at least five different linking words, and each one has the right meaning.",
          "Cohesion: I used reference words (it, they, this, these) so that I did not repeat the same nouns.",
          "Cohesion: I did not start every sentence with a linking word.",
          "Accuracy: I punctuated however, therefore and although correctly, and used because of / despite with a noun.",
          "Lexical resource: I used some topic vocabulary (traffic, nature, peaceful, facilities).",
        ],
        modelAnswer:
          "Although big cities are exciting, I would prefer to live in the countryside. First, life in the countryside is calmer and healthier. The air is cleaner, and there is less traffic, so people can walk or cycle safely. In addition, houses are usually much cheaper than in the city. For example, in my country a small flat in the capital costs the same as a large house with a garden in a village. This means that families can have more space for less money. Of course, the countryside also has some disadvantages. There are fewer jobs, and buses and trains are not very frequent. However, many people can now work online, so these problems are less serious than before. Finally, I love nature, and I would enjoy growing my own vegetables. For these reasons, I believe a quiet village is the best place for me.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In Task 2, **Coherence and Cohesion** is a quarter of your score. Use linking words to show the structure of your argument (*Firstly*, *On the other hand*, *As a result*), but use them naturally. Accuracy is more important than using rare words like *notwithstanding*.",
    },
    {
      exam: "toefl",
      body: "In **Academic Discussion**, link your idea to the other students' posts: *I agree with Kelly because…*, *Unlike Andrew, I think…*, *Andrew makes a good point. However, …*. This shows that you are taking part in the discussion.",
    },
    {
      exam: "toeic",
      body: "In the **opinion essay**, make your structure obvious with clear signals: *First of all*, *Another reason is that*, *Finally*, *In conclusion*. A reader should find each reason quickly.",
    },
  ],
  vocabulary: [
    { word: "cohesion", meaning: "the way sentences and ideas are clearly connected in a text", example: "Linking words and pronouns improve the cohesion of your writing.", topic: "academic" },
    { word: "linking word", meaning: "a word or phrase that connects two ideas, such as however or because", example: "Try to use a range of linking words in your essay.", topic: "academic" },
    { word: "contrast", meaning: "a clear difference between two things", example: "‘However’ shows a contrast with the previous sentence.", topic: "academic" },
    { word: "consequence", meaning: "a result of something that has happened", example: "One consequence of the new road was more traffic.", topic: "academic" },
    { word: "in addition", meaning: "also; used to add another point", example: "The flat is cheap. In addition, it is close to the station.", topic: "academic" },
    { word: "therefore", meaning: "for this reason; as a result", example: "The tickets sold out quickly. Therefore, we watched the match at home.", topic: "academic" },
    { word: "despite", meaning: "without being stopped by something; followed by a noun", example: "Despite the rain, the concert went ahead.", topic: "academic" },
    { word: "refer to", meaning: "to point back to something already mentioned", example: "In this sentence, ‘they’ refers to the students.", topic: "academic" },
    { word: "repetition", meaning: "saying or writing the same thing many times", example: "Use pronouns to avoid repetition.", topic: "academic" },
    { word: "frequent", meaning: "happening often", example: "Buses are not very frequent in my village.", topic: "travel" },
    { word: "peaceful", meaning: "quiet and calm", example: "The countryside is more peaceful than the city.", topic: "environment" },
  ],
  keyPoints: [
    "Choose linking words by meaning: adding, contrast, reason, result, example or sequence.",
    "However, Therefore and For example start a new sentence and are followed by a comma.",
    "Use because / although + clause, but because of / despite + noun. Never use although and but together.",
    "Use reference words (it, they, this, these) to avoid repeating nouns.",
    "Use a range of linking words, but do not start every sentence with one.",
  ],
};

export default lesson;
