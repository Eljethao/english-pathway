import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-matching-information",
  title: "Matching information to paragraphs",
  summary:
    "Find which paragraph contains a specific piece of information, such as a reason, an example or a comparison, and handle IELTS Matching information questions that are out of order and may reuse letters.",
  skill: "reading",
  level: "B2",
  order: 5,
  minutes: 25,
  exams: [{ exam: "ielts", task: "Reading – Matching information" }],
  objectives: [
    "Identify the type of information a statement asks for: a reason, an example, a comparison, a prediction…",
    "Scan lettered paragraphs for the paraphrased content of each statement",
    "Check that a paragraph gives the right kind of information, not just the same topic",
    "Deal with statements that are out of order, paragraphs that are not used and letters that are used twice",
  ],
  warmUp: [
    "When you need one fact from a long article, for example a price or a date, how do you find it quickly?",
    "What is the difference between a paragraph that *mentions* a topic and a paragraph that *explains* it?",
  ],
  learn: [
    {
      type: "text",
      title: "How this task is different from Matching headings",
      body: "In **Matching headings** (lesson 2) you summarised the main idea of each whole paragraph. **Matching information** works the other way round. You get a list of specific pieces of information, and you decide **which paragraph contains each one**. The instructions usually say: *Which paragraph contains the following information? Write the correct letter, A–F.*\n\nFour things make this task harder than it looks:\n\n- The information is usually a **detail**, often just one sentence, not the main idea of the paragraph.\n- The statements are **not necessarily in passage order**, so you cannot simply work from top to bottom.\n- You will **not necessarily use every paragraph**.\n- One paragraph may contain **two answers**. When this is possible, the instructions tell you, usually with a note such as *NB You may use any letter more than once*.",
    },
    {
      type: "table",
      title: "Read the first words: what kind of information?",
      headers: ["The statement begins…", "You need…", "Signals to look for in the text"],
      rows: [
        ["a reason why… / an explanation of…", "a cause", "because, since, due to, this is why, as a result"],
        ["an example of…", "a specific case of a general idea", "for example, for instance, such as, a named place or person"],
        ["a comparison between…", "two things set side by side", "than, whereas, while, unlike, similar to, more / less"],
        ["a prediction about… / a reference to the future", "something expected to happen", "will, is likely to, in the coming years, experts expect"],
        ["a description of how…", "a method or a process", "first, then, by + -ing, the technique, the procedure"],
        ["a criticism of… / a warning about…", "a negative judgement or a risk", "however, critics, the problem is, the danger, warn"],
      ],
    },
    {
      type: "text",
      title: "A five-step method",
      body: "1. Read all the statements first. In each one, underline the **type** of information (*a reason*, *an example*) and the **content** (*why customers leave a queue*).\n2. Think of synonyms for the content. The passage will almost always use different words.\n3. If the passage has other question sets, it often helps to do them first. By then you know roughly where each topic is.\n4. Skim each paragraph and make a tiny note of what it contains, for example *B = example: lifts; C = estimates of waiting time*.\n5. When you find a possible match, read the sentence carefully and check **both** parts: the right content **and** the right type of information. A paragraph that only mentions the topic is not enough.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "What type of information is this?",
        instructions: "Match each sentence with the type of information it gives. There is one type you do not need.",
        left: [
          "Shoppers in the study waited longer when music was playing than when the shop was silent.",
          "Some hospitals, for instance, send patients a text message when the doctor is ready.",
          "Unoccupied minutes seem to pass more slowly, which is why most people overestimate their waiting time.",
          "Within ten years, many ticket queues are likely to disappear altogether.",
          "Some researchers warn that removing queues completely could make services feel less fair.",
        ],
        right: ["a prediction", "a definition", "an example", "a warning", "a comparison", "an explanation of a cause"],
        answer: [4, 2, 5, 0, 3],
      },
    },
    {
      type: "tip",
      exam: "ielts",
      body: "If the instructions say you may use any letter more than once, do **not** cross out a paragraph letter after you use it, because a paragraph may contain two answers.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "Why waiting feels so long",
      labelled: true,
      paragraphs: [
        "Most of us spend a surprising amount of our lives waiting: at supermarket checkouts, at bus stops, on the phone to customer service. Yet the length of a wait is often less important than how it feels. Researchers who study the psychology of queues have found that two waits of exactly the same length can be experienced very differently, and that people's satisfaction with a service often depends more on the experience of waiting than on the service itself.",
        "One reason is that empty time seems to pass more slowly than occupied time. An often-repeated story describes an office building whose tenants complained that the lifts were too slow. Instead of installing faster lifts, the owners put mirrors next to the lift doors. People began checking their appearance while they waited, and the complaints largely stopped. Whether or not the story is completely true, the principle behind it is now widely used: many waiting areas offer screens, magazines or something to look at, simply to fill the minutes.",
        "Uncertainty also makes waiting harder. A wait of unknown length feels longer than one whose end is in sight, which is why many theme parks and call centres now tell customers how long they are likely to wait. Interestingly, some organisations deliberately give estimates that are slightly too long. When the wait turns out to be shorter than expected, customers leave pleased rather than frustrated.",
        "Perhaps even more important than speed is fairness. People become far more annoyed when someone who arrived later is served first than when the queue simply moves slowly. This helps to explain why many banks and post offices have replaced several separate lines with a single “snake” queue that feeds all the counters. The average wait may be no shorter than before, but nobody can feel unlucky for having chosen the slow line.",
        "Technology may soon remove the physical queue altogether. Restaurants already send a text message when a table is ready, and some clinics let patients wait in a nearby café rather than in a crowded waiting room. In the coming years, experts expect more services to use “virtual queues” of this kind. Yet some warn that waiting will not disappear; it will simply move onto our phones, where an unexplained delay may feel just as frustrating as it does in a line.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader matches the information",
      body: "**Statement 1:** an example of a problem that was solved without making a service faster\n\nType: *an example*. Content: *solved, but not by making it faster*. Paragraph B tells the story of the slow lifts: “Instead of installing faster lifts, the owners put mirrors next to the lift doors… and the complaints largely stopped.” It is an example, and the lifts did not become faster. → **B**\n\n**Statement 2:** a reason why some organisations exaggerate waiting times\n\nThe word *wait* appears in every paragraph, so it is useless for scanning. Scan for the idea of *exaggerate* instead. Paragraph C: some organisations “deliberately give estimates that are slightly too long”, and the next sentence gives the reason: when the wait is shorter than expected, customers leave pleased. → **C**\n\n**Statement 3:** an explanation of why one line can be better than several\n\nParagraph D describes the single “snake” queue and explains its benefit: “nobody can feel unlucky for having chosen the slow line.” Paragraph E also describes a change to queues, but it is about technology, not one line versus several. → **D**\n\n**Statement 4:** a prediction about how people will wait in future\n\nLook for future language such as *will*, *expect* and *in the coming years*. Paragraph E: “In the coming years, experts expect more services to use ‘virtual queues’.” → **E**\n\nNotice that paragraph A was not used for these four statements. In the exam, some paragraphs may contain no answers at all.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Your turn",
        instructions:
          "Use the passage “Why waiting feels so long”. Which paragraph contains the following information? Choose the correct letter, A–E. You may use any letter more than once.",
        left: [
          "a claim that the experience of waiting can matter more than the service itself",
          "a description of something theme parks do to make waiting easier",
          "a reason why removing physical queues may not end frustration",
          "a story that may not be completely accurate",
          "a reference to people being served before others who arrived earlier",
        ],
        right: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E"],
        answer: [0, 2, 4, 1, 3],
      },
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Growing food indoors",
      labelled: true,
      timerMinutes: 10,
      paragraphs: [
        "In a former warehouse on the edge of a large city, lettuces are growing in trays stacked twelve levels high. There is no soil and no sunlight. Instead, the plants' roots sit in water containing carefully measured nutrients, and rows of LED lamps glow pink and purple above them. This is vertical farming: growing crops indoors in tall, climate-controlled buildings. Over the past fifteen years, the idea has attracted large amounts of investment and a great deal of attention.",
        "Supporters list several advantages. Because conditions inside are controlled, crops can be grown all year round, whatever the weather, and a harvest is never lost to drought, floods or a late frost. Pests are rare, so few or no chemical sprays are needed. Water that the plants do not take up is collected and reused, which means that a vertical farm may use only a small fraction of the water needed in a field. And because the farms can be built inside cities, vegetables can reach shops within hours of being picked rather than after a long journey by lorry.",
        "The greatest problem is energy. In a field, sunlight is free; indoors, every hour of light must be paid for, and the lamps produce heat that then has to be removed by air-conditioning. When energy prices rose sharply in many countries in 2022, a number of vertical farming companies struggled to cover their costs, and some closed altogether. Critics also point out that if the electricity comes from coal or gas, the environmental benefit of growing food close to consumers may disappear.",
        "There are also limits on what can be grown profitably. Leafy greens such as lettuce, and herbs such as basil, are ideal: they grow quickly, are small enough to fit on shelves, and almost the whole plant can be sold. Staple crops such as wheat and rice are a different matter. They need a lot of space and light, take months to mature and sell for a low price per kilogram. At current electricity prices, a loaf of bread made from wheat grown indoors would cost far more than an ordinary loaf.",
        "Some researchers believe the answer lies in combining indoor and outdoor growing rather than choosing one or the other. Young plants could be raised indoors for their first few weeks, when they are most at risk from cold and pests, and then moved to fields or greenhouses. Others are experimenting with building farms next to power stations or factories so that waste heat can be put to use, or with running the lights mainly at night, when electricity tends to be cheaper.",
        "Whether vertical farming will ever produce more than a small share of the world's food remains uncertain. Most analysts expect it to remain a specialist method, supplying fresh salads and herbs to wealthy cities rather than replacing traditional agriculture. Even so, the technology may prove especially valuable where farmland is scarce or the climate is extreme, such as in desert regions or remote northern communities that currently depend on expensive imported vegetables.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Practice 1: which paragraph?",
        instructions:
          "Which paragraph of “Growing food indoors” contains the following information? Choose the correct letter, A–F. NB You may use any letter more than once.",
        left: [
          "a reference to how quickly produce can reach shoppers",
          "a comparison between the cost of food grown indoors and ordinary food",
          "examples of places that might benefit most from vertical farming",
          "a description of what the plants have instead of soil and sunlight",
          "an explanation of why some companies stopped trading",
          "a way of reducing energy costs by changing when equipment is used",
          "a reason why certain crops are well suited to indoor growing",
          "a reference to an environmental disadvantage of vertical farming",
        ],
        right: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E", "Paragraph F"],
        answer: [1, 3, 5, 0, 2, 4, 3, 2],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Check the type of information",
        instructions: "These questions are about “Growing food indoors” and Practice 1.",
        questions: [
          {
            prompt:
              "A student matched “a reason why certain crops are well suited to indoor growing” with paragraph B, because B lists advantages of vertical farming. Why is D the correct answer?",
            options: [
              "B gives advantages of the method in general; only D explains why particular crops, leafy greens, suit it.",
              "B does not mention any advantages of vertical farming.",
              "D is the only paragraph that mentions lettuce.",
              "Answers in this task always come from the middle of the passage.",
            ],
            answer: 0,
            explanation:
              "Check the content, not just the topic. Paragraph D says leafy greens “grow quickly, are small enough to fit on shelves, and almost the whole plant can be sold”: reasons why these crops suit indoor growing. Paragraph A also mentions lettuce, so option C is wrong.",
          },
          {
            prompt: "Paragraph E mentions power stations and factories. What kind of information does this part of the paragraph give?",
            options: [
              "a way of using heat that would otherwise be wasted",
              "a reason why vertical farms close",
              "a comparison between coal and gas",
              "a prediction about electricity prices",
            ],
            answer: 0,
            explanation: "Farms built next to power stations or factories can use “waste heat”. Coal and gas are mentioned in paragraph C, not E.",
          },
          {
            prompt: "The word *electricity* appears in paragraphs C, D and E. What does this show?",
            options: [
              "A key word can appear in several paragraphs, so you must also check the type of information.",
              "All three paragraphs must be the answer to the same statement.",
              "Paragraph C should be ignored because it is too negative.",
              "A statement about electricity has no answer in the passage.",
            ],
            answer: 0,
            explanation:
              "C explains why energy is a problem (and warns about electricity from coal or gas), D compares the cost of indoor and ordinary bread, and E describes ways to reduce energy costs. The same topic word appears in all three, but each paragraph gives a different type of information.",
          },
          {
            prompt: "Which statement could NOT be matched with any paragraph of “Growing food indoors”?",
            options: [
              "a reference to the number of people who work on vertical farms",
              "a reference to the risk from pests",
              "a reference to the time some crops take to grow",
              "a reference to the weather",
            ],
            answer: 0,
            explanation:
              "The passage never mentions how many people work on vertical farms. Pests are in B and E, the time crops take to mature is in D, and the weather is in B.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Why we enjoy the burn of chilli",
      labelled: true,
      timerMinutes: 6,
      paragraphs: [
        "Chilli peppers contain a chemical called capsaicin, which does something unusual. It activates the same nerve receptors in the mouth that respond to high temperatures, so the brain receives the message that the mouth is, in a sense, on fire. No real damage is done, but the body reacts as if it were: the face turns red, the eyes water and many people start to sweat. The strength of the effect varies enormously from one variety to another: a mild pepper may barely be noticed, while the hottest can be painful even in tiny amounts.",
        "Given these unpleasant effects, it is surprising that so many people actively seek out spicy food. Most other mammals avoid chillies altogether. Young children usually reject them at first, and adults who enjoy them have often learned to do so gradually, starting with mild dishes and moving on to hotter ones over months or years. In this respect, a taste for chilli resembles a taste for black coffee or bitter vegetables, which also tends to develop with repeated experience.",
        "Psychologists have offered several explanations. One is that eating chilli is a safe thrill, similar to riding a roller coaster or watching a frightening film: the body signals danger, but the mind knows there is none, and the gap between the two is enjoyable. Another focuses on the brain's response to pain, which may include the release of natural chemicals that produce a mild feeling of pleasure. A third suggests that personality plays a part, since people who enjoy new and intense experiences in general also tend to say they like spicier food.",
        "Culture matters too. In parts of Mexico, Thailand and India, for example, chilli is added to many ordinary dishes. In regions like these, where spicy food is part of everyday cooking, children are exposed to chilli early and often, and by adulthood they may barely notice levels of heat that visitors find painful. Some researchers have also suggested that spices became popular in hot climates partly because certain spices slow the growth of bacteria in food, although this idea remains controversial. What seems clear is that, for most people, a love of chilli is not present at birth but develops over time.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "match",
        title: "Practice 2: which paragraph?",
        instructions:
          "Which paragraph of “Why we enjoy the burn of chilli” contains the following information? Choose the correct letter, A–D. NB You may use any letter more than once.",
        left: [
          "a comparison between eating chilli and other kinds of entertainment",
          "a description of how the body reacts to chilli",
          "a reference to how animals other than humans respond to chilli",
          "a theory that not all experts accept",
          "a possible link between personality and food preferences",
          "an explanation of why some people hardly notice the heat of chilli",
        ],
        right: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D"],
        answer: [2, 0, 1, 3, 2, 3],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Matching information questions are not necessarily in passage order, and they focus on details. If the passage has other question sets, try answering those first and come back to this task: by then you will know where most topics are.",
    },
    {
      exam: "ielts",
      body: "Write only the letter (A, B, C…) on the answer sheet. Check the instructions: if they say you may use any letter more than once, be ready for a paragraph to contain two answers.",
    },
    {
      exam: "toeic",
      body: "TOEIC Part 7 does not use paragraph letters, but many questions ask about one detail in a longer text, for example *What is stated about the new office?* The same habit of deciding what kind of information you need, then scanning for its paraphrase, saves time there too.",
    },
  ],
  vocabulary: [
    { word: "queue", meaning: "a line of people waiting for something (British English)", example: "There was a long queue at the post office.", topic: "everyday" },
    { word: "frustrating", meaning: "making you feel annoyed because you cannot change or control something", example: "An unexplained delay is especially frustrating.", topic: "everyday" },
    { word: "estimate", meaning: "a guess about a size, amount or time, based on the information you have", example: "The website gave an estimate of twenty minutes.", topic: "business" },
    { word: "fairness", meaning: "the quality of treating everyone equally and reasonably", example: "Customers care about fairness as much as speed.", topic: "society" },
    { word: "nutrient", meaning: "a substance that plants or animals need to live and grow", example: "The roots take nutrients from the water.", topic: "science" },
    { word: "harvest", meaning: "the crops that are collected from the fields, or the time when they are collected", example: "A late frost can destroy a whole harvest.", topic: "environment" },
    { word: "staple", meaning: "a basic food that people eat regularly, such as rice or wheat", example: "Rice is a staple in many countries.", topic: "environment" },
    { word: "scarce", meaning: "available only in small amounts", example: "Farmland is scarce on small islands.", topic: "environment" },
    { word: "controversial", meaning: "causing a lot of disagreement", example: "The theory remains controversial among scientists.", topic: "academic" },
    { word: "be exposed to", meaning: "to experience something, especially regularly", example: "Children who are exposed to spicy food early often enjoy it later.", topic: "health" },
  ],
  keyPoints: [
    "Matching information asks which paragraph contains a specific detail, not what each paragraph is mainly about.",
    "The first words of each statement tell you the type of information you need: a reason, an example, a comparison, a prediction.",
    "Statements are not necessarily in passage order, some paragraphs may not be used, and a letter may be used twice if the instructions allow it.",
    "A paragraph that only mentions the topic is not enough: check both the content and the type of information.",
    "Answer the other questions on a passage first if you can; then you will know where most topics are.",
  ],
};

export default lesson;
