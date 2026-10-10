import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-clear-paragraph",
  title: "Writing a clear paragraph",
  summary:
    "Learn how a strong paragraph works: one clear topic sentence, reasons and examples that support it, and a concluding sentence that brings it together.",
  skill: "writing",
  level: "B1",
  order: 2,
  minutes: 30,
  exams: [
    { exam: "ielts", task: "Writing Task 2" },
    { exam: "toefl", task: "Writing – Academic Discussion" },
    { exam: "toeic", task: "Writing – Write an opinion essay" },
  ],
  objectives: [
    "Write a topic sentence that states one clear main idea",
    "Support the main idea with reasons, explanations and examples",
    "Find and remove sentences that do not belong",
    "Finish a paragraph with a concluding sentence",
  ],
  warmUp: [
    "Think of an article or a long message you read recently. Can you say its main idea in one sentence?",
    "Why is a long text with no paragraphs hard to read?",
  ],
  learn: [
    {
      type: "text",
      title: "What is a paragraph?",
      body: "A paragraph is a group of sentences about **one main idea**. In an exam essay, a body paragraph usually has 4–7 sentences. Every sentence in the paragraph helps to explain or prove that one idea.\n\nWhen you start a new main idea, start a new paragraph. Leave a blank line between paragraphs so the examiner can see them clearly.",
    },
    {
      type: "table",
      title: "The parts of a clear paragraph",
      headers: ["Part", "What it does", "Useful language"],
      rows: [
        ["Topic sentence", "Tells the reader the main idea of the paragraph", "One advantage of… is that… / There are two main reasons why…"],
        ["Supporting sentences", "Give reasons and explain them", "The main reason is that… / This is because… / This means that…"],
        ["Example", "Makes the idea real and easy to understand", "For example,… / For instance,… / In my experience,…"],
        ["Concluding sentence", "Repeats the main idea in new words or gives a final point", "For these reasons,… / Overall,… / This shows that…"],
      ],
    },
    {
      type: "text",
      title: "Writing a good topic sentence",
      body: "A good topic sentence is **not too general** and **not too specific**. It gives a clear idea that you can explain in the rest of the paragraph. It often includes your opinion or a key word from the question.",
    },
    {
      type: "example",
      title: "Weak and strong topic sentences",
      items: [
        "Too general: Technology is important. (What about technology? Important for whom?)",
        "Too specific: My phone has a 6.5-inch screen. (This is a detail, not a main idea.)",
        "Clear: **Smartphones have made it much easier for students to study outside the classroom.**",
      ],
    },
    {
      type: "text",
      title: "Unity: one idea only",
      body: "Every sentence in a paragraph must connect to the topic sentence. If a sentence is interesting but talks about something else, **remove it** or move it to another paragraph.\n\nA quick test: read each sentence and ask, *Does this help to explain my topic sentence?* If the answer is no, it does not belong.",
    },
    {
      type: "tip",
      exam: "ielts",
      body: "One of the four marking criteria in IELTS Writing is **Coherence and Cohesion**. To reach the higher bands, each paragraph needs a clear central idea, and your ideas must be in a logical order.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: topic and concluding sentences",
        questions: [
          {
            prompt: "Choose the best topic sentence for a paragraph about the benefits of cycling to work.",
            options: [
              "Bicycles have two wheels.",
              "Cycling to work has clear benefits for both your health and your wallet.",
              "Some people cycle and some people drive.",
              "My bicycle cost 300 euros.",
            ],
            answer: 1,
            explanation: "It states one clear main idea (benefits) and tells the reader what the paragraph will explain (health and money).",
          },
          {
            prompt: "Which topic sentence is too general?",
            options: [
              "Food is interesting.",
              "Cooking at home is usually cheaper than eating in restaurants.",
              "School canteens should offer more vegetarian meals.",
              "Learning to cook is a useful skill for teenagers.",
            ],
            answer: 0,
            explanation: "“Food is interesting” does not tell the reader what the paragraph will be about.",
          },
          {
            prompt: "Which is the best concluding sentence for a paragraph about why learning to cook is useful?",
            options: [
              "Pasta was invented in Italy.",
              "Next, I will talk about sport.",
              "For these reasons, every young person should learn to cook a few simple meals.",
              "Some restaurants are expensive.",
            ],
            answer: 2,
            explanation: "It repeats the main idea (cooking is useful) in new words. The other sentences are off-topic.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "Question",
      body: "*Some people think that students should have a part-time job while they are studying. Do you agree?*",
    },
    {
      type: "passage",
      title: "Model paragraph",
      paragraphs: [
        "I believe that having a part-time job can be very good for students. The main reason is that a job teaches young people useful skills that they do not learn in the classroom. For example, a student who works in a café learns how to speak to customers politely, work in a team and stay calm when it is busy. These skills will help them later when they look for a full-time job. A part-time job also helps students to understand the value of money, because they see how many hours they must work to pay for things. Of course, students should not work too many hours, or their studies may suffer. However, a job of ten or fifteen hours a week can give them experience and confidence. For these reasons, I think a small part-time job is a positive choice for most students.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "1. **Topic sentence**: *I believe that having a part-time job can be very good for students.* It answers the question and gives a clear opinion.\n2. **Reason 1**: *The main reason is that a job teaches… useful skills.*\n3. **Example**: *a student who works in a café…* This makes reason 1 real.\n4. **Result**: *These skills will help them later…*\n5. **Reason 2**: *A part-time job also helps students to understand the value of money…* The word *also* shows a new reason.\n6. **Limit**: *Of course, students should not work too many hours…* This shows balanced thinking.\n7. **Concluding sentence**: *For these reasons, I think…* It repeats the opinion in new words.\n\nNotice that **every sentence** connects to the topic sentence. There is nothing about the writer's hobbies or a different topic.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "order",
        mode: "lines",
        title: "Put the paragraph in order",
        instructions: "Put the sentences in the correct order to make a clear paragraph.",
        items: [
          "Public parks are one of the most valuable spaces in a modern city.",
          "First of all, they give people a free place to exercise, relax and breathe cleaner air.",
          "For example, in my city hundreds of people run, play football or do yoga in the central park every weekend.",
          "Parks are also important for children, who often live in small flats without a garden.",
          "In a park, they can play outside safely and make new friends.",
          "For these reasons, local governments should protect parks and create new ones.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Which sentence does not belong?",
        questions: [
          {
            prompt:
              "(1) Learning a foreign language has many benefits for young people. (2) It can help them to get better jobs, because many companies work with international partners. (3) It also allows them to travel more confidently and make friends from other countries. (4) My cousin is studying chemistry at university. (5) In addition, research shows that learning a language can improve memory.\n\nWhich sentence does not belong?",
            options: ["Sentence 2", "Sentence 3", "Sentence 4", "Sentence 5"],
            answer: 2,
            explanation: "Sentence 4 is about the writer's cousin and chemistry. It does not support the benefits of learning a language.",
          },
          {
            prompt:
              "(1) Working from home has some disadvantages. (2) Many people feel lonely because they do not see their colleagues. (3) Many offices now have modern coffee machines. (4) It can also be difficult to stop working in the evening when your desk is in your living room. (5) For these reasons, some workers prefer to go to the office at least two days a week.\n\nWhich sentence does not belong?",
            options: ["Sentence 1", "Sentence 2", "Sentence 3", "Sentence 4"],
            answer: 2,
            explanation: "Sentence 3 is about offices, not about the disadvantages of working from home.",
          },
          {
            prompt:
              "Topic sentence: “Living near your workplace saves a lot of time.” Which sentence is the best example to support it?",
            options: [
              "For instance, many people enjoy living in the countryside.",
              "For instance, rents are very high in the city centre.",
              "For instance, some offices have a gym.",
              "For instance, my sister walks to work in ten minutes, while her colleagues spend over an hour on the train.",
            ],
            answer: 3,
            explanation: "Only this example shows time being saved.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "match",
        title: "What is the job of each sentence?",
        instructions: "These sentences come from one paragraph. Match each sentence with its job.",
        left: [
          "Reading for pleasure is one of the best ways to improve your English.",
          "This is because books show you new words in a natural context.",
          "For example, after reading a few detective novels, I understood words like ‘suspect’ and ‘evidence’ without a dictionary.",
          "Overall, a few pages a day can make a real difference to your language level.",
        ],
        right: ["example", "concluding sentence", "off-topic sentence", "topic sentence", "supporting explanation"],
        answer: [3, 4, 0, 1],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: write one clear paragraph",
        prompt:
          "Is it better to study alone or with other people?\n\nWrite one paragraph of at least 100 words. Start with a clear topic sentence, give two reasons with at least one example, and finish with a concluding sentence.",
        minWords: 100,
        minutes: 15,
        rubric: [
          "Task response: my paragraph answers the question and gives a clear opinion.",
          "Coherence: my first sentence is a topic sentence that states the main idea.",
          "Coherence: every sentence supports the topic sentence, and there are no off-topic sentences.",
          "Development: I gave two reasons and explained at least one of them with an example.",
          "Cohesion: I used simple linking phrases such as ‘The main reason is’, ‘For example’, ‘also’ and ‘For these reasons’.",
          "Lexical resource: I used topic words (concentrate, explain, motivated) and did not repeat the same word again and again.",
          "Grammatical accuracy: my sentences are complete and correctly punctuated.",
        ],
        modelAnswer:
          "In my opinion, studying with other people is usually more effective than studying alone. The main reason is that people in a group can help each other when they do not understand something. For example, when I was preparing for my maths exam last year, a friend explained a difficult topic to me in five minutes, after I had spent an hour trying to understand it on my own. Studying in a group is also more motivating. If you plan to meet your classmates at the library at a fixed time, you are less likely to stay at home and watch videos instead. Of course, groups can become noisy, so it is important to choose serious partners. Overall, I believe that a small, focused study group helps most students to learn faster and stay motivated.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In Writing Task 2, give each body paragraph **one** main idea and put it in the first sentence. An examiner should be able to read only your topic sentences and understand your whole argument.",
    },
    {
      exam: "toefl",
      body: "Your **Academic Discussion** post is like one well-developed paragraph of at least 100 words: state your opinion, give a reason, support it with an example or explanation, and finish with a short final point.",
    },
    {
      exam: "toeic",
      body: "In the **opinion essay** (at least 300 words is recommended), use an introduction, two or three body paragraphs and a conclusion. Start every body paragraph with a topic sentence such as *Another reason I agree is that…*",
    },
  ],
  vocabulary: [
    { word: "topic sentence", meaning: "the sentence that states the main idea of a paragraph", example: "Your topic sentence should be clear and not too general.", topic: "academic" },
    { word: "main idea", meaning: "the most important point of a paragraph or text", example: "The main idea of this paragraph is that parks are valuable.", topic: "academic" },
    { word: "supporting sentence", meaning: "a sentence that gives a reason, explanation or example for the main idea", example: "Add two supporting sentences to explain your opinion.", topic: "academic" },
    { word: "concluding sentence", meaning: "the last sentence of a paragraph that brings the ideas together", example: "A good concluding sentence repeats the main idea in new words.", topic: "academic" },
    { word: "relevant", meaning: "connected to what you are talking or writing about", example: "Make sure every example is relevant to the question.", topic: "academic" },
    { word: "off-topic", meaning: "not connected to the subject being discussed", example: "The sentence about his cousin was off-topic.", topic: "academic" },
    { word: "develop (an idea)", meaning: "to explain an idea in more detail", example: "You need to develop this idea with an example.", topic: "academic" },
    { word: "motivated", meaning: "wanting to do something and working hard to do it", example: "I feel more motivated when I study with friends.", topic: "education" },
    { word: "concentrate", meaning: "to give all your attention to something", example: "I can't concentrate when the TV is on.", topic: "education" },
    { word: "effective", meaning: "working well and producing the result you want", example: "Short daily study sessions are very effective.", topic: "education" },
  ],
  keyPoints: [
    "A paragraph is about one main idea.",
    "Start with a clear topic sentence: not too general and not too specific.",
    "Support the main idea with reasons, explanations and at least one example.",
    "Remove any sentence that does not help to explain the topic sentence.",
    "Finish with a concluding sentence that repeats the main idea in new words.",
  ],
};

export default lesson;
