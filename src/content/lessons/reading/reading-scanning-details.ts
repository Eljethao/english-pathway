import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-scanning-details",
  title: "Scanning for details",
  summary:
    "Find names, numbers, dates and prices quickly without reading every word, and learn to look for words that mean the same as the words in the question.",
  skill: "reading",
  level: "B1",
  order: 2,
  minutes: 15,
  exams: [
    { exam: "ielts", task: "Reading – Sentence completion" },
    { exam: "toefl", task: "Reading – Read in Daily Life" },
    { exam: "toeic", task: "Reading Part 7 – Reading Comprehension" },
  ],
  objectives: [
    "Scan a text quickly to find names, numbers, dates and prices",
    "Decide what the answer will look like before you start looking",
    "Recognise synonyms: different words in the text and in the question",
  ],
  warmUp: [
    "How do you find a phone number or a train time on a long web page?",
    "Can you think of another way to say “cost” and “begin”?",
  ],
  learn: [
    {
      type: "text",
      title: "Skimming and scanning",
      body: "In the last lesson you learned **skimming**: reading quickly for the main idea. **Scanning** is different. You look for **one piece of information**, such as a name, a date or a price, and you ignore everything else.\n\nYou already scan every day: when you look for your name on a list, a time on a bus timetable or a price on a menu.",
    },
    {
      type: "table",
      title: "Skimming or scanning?",
      headers: ["", "Skimming", "Scanning"],
      rows: [
        ["The question you ask", "What is this text about?", "Where is the information I need?"],
        ["How you read", "Title, first sentences, last paragraph", "Eyes move fast and stop only at the target"],
        ["Use it for", "Main idea, purpose, headings", "Names, numbers, dates, prices, key words"],
      ],
    },
    {
      type: "text",
      title: "How to scan in four steps",
      body: "1. Read the question and underline the **key word**.\n2. Decide **what the answer looks like**. A date has numbers and month names. A name starts with a capital letter. A price has £, $ or €.\n3. Move your eyes quickly through the text. Don't read every word. Look only for your target.\n4. When you find it, **stop and read the whole sentence** carefully to check the answer.",
    },
    {
      type: "example",
      title: "Scan for the idea, not only the word",
      items: [
        "Question: When does the course **begin**? → Text: “Classes **start** on 4 March.”",
        "Question: How much does a ticket **cost**? → Text: “Tickets are **£8** for adults.” (scan for £)",
        "Question: Who **started** the company? → Text: “Maria Costa **set up** the business in 2015.”",
        "Question: How many people **took part**? → Text: “More than **300 runners joined** the race.”",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "In IELTS sentence and note completion, the answers usually come in the same order as the text. If you found answer 2 in paragraph B, look for answer 3 after it.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "Riverside Community Centre: spring courses",
      paragraphs: [
        "Riverside Community Centre is pleased to announce its spring programme. All courses run for eight weeks, starting in the week of 3 March, and take place in the main building on Mill Lane.",
        "Beginner Photography is on Monday evenings from 7 to 9 pm. Our teacher, Daniel Okafor, worked as a news photographer for fifteen years. You will need your own camera, but a phone camera is fine for the first four weeks. The course costs £95.",
        "Conversational Spanish meets on Wednesday mornings from 10 to 11.30 am. It is aimed at people who already know some basic Spanish and want to speak more confidently. The teacher, Lucía Romero, comes from Seville. The price is £80, including a course book.",
        "Family Cooking is our most popular course, so places are limited to twelve families. It takes place on Saturday afternoons, and children aged eight and over are welcome with an adult. The cost is £120 per family, and all ingredients are provided.",
        "To book a place, visit the reception desk between 9 am and 5 pm, Monday to Friday, or call 01632 960 482. Members of the centre receive a 10% discount on all courses. Please note that we cannot give refunds after the second week.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader scans",
      body: "**Question:** On which day is the Spanish course?\n\nKey word: *Spanish*. It starts with a capital letter, so it is easy to see. Scan for **Spanish** → paragraph 3 → “Wednesday mornings”. **Answer: Wednesday.**\n\n**Question:** How much does the photography course cost?\n\nThe target is a price, so scan for **£**. But there are three prices in the text! Find the photography paragraph first, then the £ sign in it → “£95”. Always check that the number belongs to the right course. **Answer: £95.**\n\n**Question:** Who can pay a lower price?\n\n*Lower price* is not in the text. Think of synonyms: *discount, cheaper, save, reduction*. Scan → “Members of the centre receive a 10% **discount**”. **Answer: members of the centre.**",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "gap",
        title: "Complete the notes",
        instructions: "Scan “Riverside Community Centre: spring courses”. Write NO MORE THAN TWO WORDS AND/OR A NUMBER in each gap.",
        text: "Length of every course: {{0}} weeks\nStreet where the centre is: {{1}}\nDaniel Okafor's old job: news {{2}}\nThe Spanish course is for people who know some {{3}} Spanish.\nMaximum number of families on the cooking course: {{4}}\nYoungest age for children on the cooking course: {{5}}\nPhone number for bookings: {{6}}\nNo refunds after the {{7}} week",
        answers: [
          ["8", "eight"],
          ["Mill Lane"],
          ["photographer"],
          ["basic"],
          ["12", "twelve"],
          ["8", "eight", "8 years", "eight years", "8 years old"],
          ["01632 960 482", "01632960482", "01632 960482", "01632-960-482"],
          ["second", "2nd"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Find the detail",
        instructions: "Use the same text. Choose the correct answer.",
        questions: [
          {
            prompt: "Which course takes place at the weekend?",
            options: ["Beginner Photography", "Conversational Spanish", "Family Cooking"],
            answer: 2,
            explanation: "Paragraph 4: Family Cooking is on “Saturday afternoons”.",
          },
          {
            prompt: "What is included in the price of the Spanish course?",
            options: ["A camera", "A course book", "Ingredients", "A trip to Seville"],
            answer: 1,
            explanation: "Paragraph 3: “£80, including a course book.”",
          },
          {
            prompt: "When can you book a place at the reception desk?",
            options: [
              "Every day from 9 am to 5 pm",
              "From 9 am to 5 pm on weekdays",
              "Only on Monday evenings",
              "On Saturday afternoons",
            ],
            answer: 1,
            explanation: "Paragraph 5: “between 9 am and 5 pm, Monday to Friday”. Monday to Friday = weekdays.",
          },
          {
            prompt: "What can photography students use for the first four weeks?",
            options: ["A camera from the centre", "A phone camera", "Daniel's camera", "Nothing: there are no photos in the first weeks"],
            answer: 1,
            explanation: "Paragraph 2: “a phone camera is fine for the first four weeks”.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Meet our volunteers",
      labelled: true,
      paragraphs: [
        "Grace Mensah, 67, has volunteered at the Riverside Community Centre since 2018, the year she retired from her job as a primary school teacher. Every Tuesday she helps adults who are learning to read and write. “Some of my students are older than me,” she laughs. “It's never too late to learn.”",
        "Ahmed Saleh is a 24-year-old engineering student. He spends two Saturday mornings a month at the centre's Repair Café, where he fixes broken lamps, radios and toasters for free. Last year, he and the other volunteers repaired more than 400 items that would otherwise have been thrown away.",
        "Sofia Lindqvist moved to the town from Sweden three years ago and did not know anyone. She started helping in the centre's kitchen, cooking lunch for elderly people twice a week. “Volunteering helped me make friends and improve my English at the same time,” she says. She is now in charge of the kitchen team of fifteen volunteers.",
        "Ken Watanabe is the youngest of our regular volunteers. He is 17 and still at school, so he can only come on Friday evenings. He runs a free computer club, where he teaches older people how to make video calls and shop online safely. He hopes to study computer science at university next year.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Which person…?",
        instructions: "Scan “Meet our volunteers”. Which person (A–D) does each sentence describe? You can use a person more than once.",
        left: [
          "works in a kitchen",
          "used to be a teacher",
          "is still at school",
          "repairs things so they are not thrown away",
          "leads a group of other volunteers",
          "came from another country",
          "helps people use the internet",
        ],
        right: ["A – Grace Mensah", "B – Ahmed Saleh", "C – Sofia Lindqvist", "D – Ken Watanabe"],
        answer: [2, 0, 3, 1, 2, 2, 3],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Numbers and synonyms",
        instructions: "Scan “Meet our volunteers” again. Be careful: the question and the text may use different words.",
        questions: [
          {
            prompt: "How many items did the Repair Café volunteers fix last year?",
            options: ["Exactly 24", "About 200", "Exactly 400", "Over 400"],
            answer: 3,
            explanation: "Paragraph B: “more than 400 items”. *More than* = *over*.",
          },
          {
            prompt: "In which year did Grace stop working as a teacher?",
            options: ["2015", "2018", "2021", "The text does not say"],
            answer: 1,
            explanation: "Paragraph A: “since 2018, the year she retired”. *Retired* means stopped working.",
          },
          {
            prompt: "How often does Sofia cook lunch for elderly people?",
            options: ["Once a week", "Twice a week", "Two Saturdays a month", "Every Friday"],
            answer: 1,
            explanation: "Paragraph C: “twice a week”. “Two Saturday mornings a month” is about Ahmed, so check the number belongs to the right person.",
          },
          {
            prompt: "What does Ken want to do in the future?",
            options: ["Become a teacher", "Open a café", "Study computer science", "Move to Sweden"],
            answer: 2,
            explanation: "Paragraph D: “He hopes to study computer science at university next year.” *Hopes to* = wants to.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Check the word limit. If the instructions say NO MORE THAN TWO WORDS AND/OR A NUMBER, an answer of three words is marked wrong, even if the meaning is right. Copy the spelling exactly from the text.",
    },
    {
      exam: "toefl",
      body: "Read in Daily Life texts (notices, menus, schedules, emails) are short. Read the question first, then scan for the exact detail you need: a time, a place or a price.",
    },
    {
      exam: "toeic",
      body: "Part 7 texts often contain several times, dates and prices. After you scan, read the full sentence to check that the number belongs to the right person, product or event.",
    },
  ],
  vocabulary: [
    { word: "scan", meaning: "to look quickly through a text to find one particular piece of information", example: "I scanned the timetable for the next train to Leeds.", topic: "academic" },
    { word: "key word", meaning: "an important word in a question that helps you find the answer", example: "Underline the key word before you start reading.", topic: "academic" },
    { word: "synonym", meaning: "a word with the same or a similar meaning as another word", example: "“Begin” is a synonym of “start”.", topic: "academic" },
    { word: "discount", meaning: "an amount taken off the usual price", example: "Students get a 10% discount at the cinema.", topic: "business" },
    { word: "refund", meaning: "money that is given back to you, for example when you return something", example: "The shop gave me a refund because the shoes were broken.", topic: "business" },
    { word: "aimed at", meaning: "made for a particular group of people", example: "This course is aimed at complete beginners.", topic: "education" },
    { word: "ingredient", meaning: "one of the foods you use to make a dish", example: "You only need four ingredients for this cake.", topic: "everyday" },
    { word: "retire", meaning: "to stop working, usually because of your age", example: "My grandfather retired when he was 65.", topic: "work" },
    { word: "elderly", meaning: "old (a polite word for people)", example: "She visits elderly neighbours every week.", topic: "society" },
    { word: "in charge of", meaning: "responsible for a group of people or an activity", example: "Who is in charge of the kitchen today?", topic: "work" },
    { word: "otherwise", meaning: "in a different situation; if not", example: "Recycle your old phone; otherwise it will end up in a rubbish dump.", topic: "everyday" },
    { word: "limited", meaning: "only a small number or amount", example: "Places are limited, so book early.", topic: "everyday" },
  ],
  keyPoints: [
    "Scanning means looking quickly for one specific piece of information.",
    "Before you scan, decide what the answer looks like: a number, a date, a name or a price.",
    "Questions often use synonyms, so scan for the idea, not only the exact word.",
    "When you find the target, stop and read the whole sentence to check it.",
  ],
};

export default lesson;
