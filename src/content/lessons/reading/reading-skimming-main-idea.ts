import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-skimming-main-idea",
  title: "Skimming for the main idea",
  summary:
    "Learn to read a text quickly for its main idea, using the title, first sentences and topic sentences, before you read for details.",
  skill: "reading",
  level: "B1",
  order: 1,
  minutes: 15,
  exams: [
    { exam: "ielts", task: "Reading – Matching headings" },
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
    { exam: "toeic", task: "Reading Part 7 – Reading Comprehension" },
  ],
  objectives: [
    "Skim a text in one or two minutes and say what it is mainly about",
    "Find the topic sentence of a paragraph",
    "Tell the difference between a main idea and a supporting detail",
  ],
  warmUp: [
    "When you open a news website, how do you decide which articles to read?",
    "What do you read first in a long email: the beginning, the middle or the end? Why?",
  ],
  learn: [
    {
      type: "text",
      title: "What is skimming?",
      body: "**Skimming** means reading **quickly** to get the general idea of a text. You do not read every word. You want to answer one question: *What is this text mainly about?*\n\nGood readers skim first and read carefully later. Skimming takes one or two minutes. It shows you how the text is organised, so later you can find answers faster.",
    },
    {
      type: "text",
      title: "What to read when you skim",
      body: "1. The **title**, and any subtitle or picture caption.\n2. The **first paragraph**. It usually introduces the topic.\n3. The **first sentence of each paragraph**. This is often the *topic sentence*: it tells you what the paragraph is about.\n4. The **last paragraph**. It often gives the writer's conclusion.\n\nDo not stop at difficult words. You do not need them to understand the main idea.",
    },
    {
      type: "text",
      title: "Main idea or detail?",
      body: "The **main idea** is the most important point. It is general, and it covers the *whole* paragraph or text.\n\n**Details** support the main idea. They are examples, numbers, names, dates and reasons. When you skim, you notice the main idea and skip most of the details.",
    },
    {
      type: "example",
      title: "One paragraph: main idea and details",
      items: [
        "“**Many young people are living with their parents for longer.**” → main idea (the topic sentence)",
        "“In one survey, 40% of 25-year-olds said they still lived with their parents.” → detail (a number)",
        "“One reason is the high cost of renting a flat.” → detail (a reason)",
        "“My cousin Ana moved out when she was 29.” → detail (an example)",
      ],
    },
    {
      type: "tip",
      exam: "toeic",
      body: "TOEIC Part 7 often includes questions like *What is the purpose of the email?* or *What is the article mainly about?* Skim the title and the first two sentences to answer them.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "Learning to cook again",
      labelled: true,
      paragraphs: [
        "Ten years ago, many people in big cities hardly ever cooked. They bought ready meals from the supermarket or ordered food to their homes. Today, however, more and more people are learning to cook for themselves, and cooking classes are fuller than ever.",
        "Money is one important reason for this change. Restaurant prices have risen quickly, and a meal made at home usually costs much less than a takeaway. A family of four can save a large amount each month by cooking just three or four evenings a week.",
        "Health is another reason. When you cook at home, you know exactly what goes into your food. You can use less salt, sugar and oil, and add more vegetables. Doctors say that people who cook regularly often have a healthier diet.",
        "The internet has also made cooking easier to learn. Thousands of free videos show beginners how to chop an onion or bake bread, step by step. Some people say they have learned more from short online videos than from any cookbook.",
        "Of course, not everyone has time to cook every day. But for many people, cooking has changed from a boring job into a useful skill and even a hobby. It seems that the home kitchen is busy again.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader skims",
      body: "**Step 1: the title.** “Learning to cook again” tells us the topic (cooking) and suggests a change (*again*).\n\n**Step 2: the first sentence of each paragraph.**\n\n- A: More and more people are learning to cook.\n- B: Money is one reason.\n- C: Health is another reason.\n- D: The internet has made cooking easier to learn.\n- E: Not everyone has time, but for many people cooking is now a useful skill.\n\n**Step 3: the last sentence.** “The home kitchen is busy again.”\n\n**Main idea of the whole text:** More people are cooking at home again, for several reasons.\n\nNotice what we did *not* need: the family of four in B, the salt and sugar in C, the onion in D. These are details. A strong reader skips them the first time and comes back only if a question asks about them.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Check the model text",
        instructions: "Use the passage “Learning to cook again” above.",
        questions: [
          {
            prompt: "What is the main idea of “Learning to cook again”?",
            options: [
              "Restaurant food has become too expensive.",
              "More people are cooking at home again, for several different reasons.",
              "Online videos are better than cookbooks.",
              "Doctors want people to eat more vegetables.",
            ],
            answer: 1,
            explanation: "This idea covers the whole text. The other options are details from only one paragraph (B, D or C).",
          },
          {
            prompt: "Which sentence is the topic sentence of paragraph C?",
            options: [
              "Health is another reason.",
              "You can use less salt, sugar and oil, and add more vegetables.",
              "Doctors say that people who cook regularly often have a healthier diet.",
            ],
            answer: 0,
            explanation: "The first sentence tells you what the paragraph is about. The other sentences give details about health.",
          },
          {
            prompt: "“A family of four can save a large amount each month” (paragraph B) is…",
            options: [
              "the main idea of the whole text",
              "the main idea of paragraph B",
              "a detail that supports paragraph B",
            ],
            answer: 2,
            explanation: "It is an example that supports the main idea of B: money is one reason people cook at home.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "A library of things",
      labelled: true,
      timerMinutes: 2,
      paragraphs: [
        "When you think of a library, you probably think of books. But in a growing number of towns, people can now borrow drills, tents, sewing machines and even musical instruments. These places are called “libraries of things”, and they are becoming popular in Europe and North America.",
        "The idea is simple. Most of us own things that we use only once or twice a year. An electric drill, for example, may stay in a cupboard for months between uses. Instead of buying one, members of a library of things pay a small fee and borrow it for a few days, just like a book.",
        "Supporters say these libraries are good for the planet. If ten families share one lawnmower, nine lawnmowers do not need to be made, transported or thrown away. Less shopping means less waste, and fewer things end up in rubbish dumps.",
        "Libraries of things also bring people together. Many of them are run by volunteers, who often offer free workshops on repairing clothes or fixing bicycles. Members say they have met neighbours they had never spoken to before.",
        "However, running a library of things is not always easy. Some items come back broken or dirty, and volunteers have to check and clean everything. Small libraries also find it hard to pay for storage space and insurance. Many depend on money from local councils, and this money may not continue for ever.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Skim for the main idea",
        instructions: "Skim “A library of things” in two minutes. Read the title and the first sentence of each paragraph. Then answer.",
        questions: [
          {
            prompt: "What is the text mainly about?",
            options: [
              "How to repair a broken drill",
              "A new kind of library where people borrow useful objects",
              "Why people no longer read library books",
              "How volunteers can find jobs in libraries",
            ],
            answer: 1,
            explanation: "Paragraph A introduces “libraries of things”, and every other paragraph tells us more about them.",
          },
          {
            prompt: "What is the writer's general view of libraries of things?",
            options: [
              "They are a good idea, but they also have some problems.",
              "They are a waste of money.",
              "They will soon replace book libraries.",
            ],
            answer: 0,
            explanation: "Paragraphs C and D describe benefits. Paragraph E begins with “However” and describes problems.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        labels: "roman",
        title: "The main idea of each paragraph",
        instructions: "Match each paragraph of “A library of things” to its main idea. There are two extra ideas that you do not need.",
        left: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E"],
        right: [
          "The difficulties of running this kind of library",
          "How the system works",
          "The history of public libraries",
          "A new type of library is spreading",
          "A benefit for local communities",
          "Why electric drills are rarely used",
          "A benefit for the environment",
        ],
        answer: [3, 1, 6, 4, 0],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Main idea or detail?",
        instructions: "These sentences come from “A library of things”. Decide what each one is.",
        questions: [
          {
            prompt: "“An electric drill, for example, may stay in a cupboard for months between uses.” (paragraph B)",
            options: ["Main idea", "Detail"],
            answer: 1,
            explanation: "“For example” shows a detail. It supports the main idea that we own things we rarely use.",
          },
          {
            prompt: "“Libraries of things also bring people together.” (paragraph D)",
            options: ["Main idea", "Detail"],
            answer: 0,
            explanation: "This is the topic sentence of paragraph D. The volunteers and workshops are details that support it.",
          },
          {
            prompt: "“Some items come back broken or dirty.” (paragraph E)",
            options: ["Main idea", "Detail"],
            answer: 1,
            explanation: "This is one example of the main idea of E: running a library of things is not always easy.",
          },
          {
            prompt: "Choose the best new title for the whole text.",
            options: ["Borrow it, don't buy it", "A drill in the cupboard", "How to fix a bicycle", "Volunteers wanted"],
            answer: 0,
            explanation: "A good title covers the main idea of the whole text. The other titles are about small details.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Before you answer any questions, skim the whole passage in two or three minutes. Write the topic of each paragraph in two or three words in the margin. This “map” helps you find answers faster, especially in Matching headings.",
    },
    {
      exam: "toefl",
      body: "Read an Academic Passage has questions on the writer's purpose and on how the ideas are connected. Skim first: the first and last sentences of each paragraph usually show what that part of the text does.",
    },
    {
      exam: "toeic",
      body: "In Part 7, the answer to “What is the purpose of…?” or “What is mainly discussed?” is usually in the title, the subject line or the first two sentences. Don't read the whole text in detail for this question.",
    },
  ],
  vocabulary: [
    { word: "skim", meaning: "to read something quickly to get the general idea", example: "I skimmed the article on the bus and read it properly at home.", topic: "academic" },
    { word: "main idea", meaning: "the most important point of a text or paragraph", example: "Can you tell me the main idea of the article in one sentence?", topic: "academic" },
    { word: "topic sentence", meaning: "a sentence, often the first, that tells you what a paragraph is about", example: "The topic sentence of this paragraph is about health.", topic: "academic" },
    { word: "detail", meaning: "a small fact, example or number that supports the main idea", example: "Don't worry about every detail the first time you read.", topic: "academic" },
    { word: "borrow", meaning: "to take something from someone and give it back later", example: "Can I borrow your tent for the weekend?", topic: "everyday" },
    { word: "volunteer", meaning: "a person who works without being paid", example: "The library is run by a team of volunteers.", topic: "society" },
    { word: "fee", meaning: "money that you pay for a service", example: "Members pay a small monthly fee.", topic: "business" },
    { word: "waste", meaning: "things that are thrown away because people do not need them", example: "Sharing tools means less waste.", topic: "environment" },
    { word: "rise", meaning: "to go up or increase", example: "Restaurant prices have risen a lot this year.", topic: "business" },
    { word: "regularly", meaning: "often, and at similar times", example: "She goes to the gym regularly.", topic: "health" },
    { word: "workshop", meaning: "a meeting where people learn and practise a skill", example: "There is a free workshop on fixing bicycles on Saturday.", topic: "education" },
    { word: "takeaway", meaning: "a meal that you buy from a restaurant and eat at home (British English)", example: "We were too tired to cook, so we ordered a takeaway.", topic: "everyday" },
  ],
  keyPoints: [
    "Skimming means reading quickly for the main idea, not reading every word.",
    "Read the title, the first paragraph, the first sentence of each paragraph and the last paragraph.",
    "The main idea is general and covers the whole paragraph; details are examples, numbers, names and reasons.",
    "Skim first, then read carefully only the parts you need.",
  ],
};

export default lesson;
