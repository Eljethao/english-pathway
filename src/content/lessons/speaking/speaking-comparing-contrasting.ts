import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-comparing-contrasting",
  title: "Comparing and contrasting",
  summary:
    "Answer IELTS Speaking Part 3 comparison questions (past and present, young and old, city and countryside) with a clear structure, accurate comparatives and a balanced conclusion.",
  skill: "speaking",
  level: "B2",
  order: 6,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Speaking Part 3" },
    { exam: "toefl", task: "Speaking – Take an Interview" },
  ],
  objectives: [
    "Recognise the main types of comparison question in IELTS Part 3",
    "Organise a comparison answer: main difference, explanation, similarity or exception, conclusion",
    "Use modified comparatives (far more, slightly less, not nearly as… as) accurately",
    "Link contrasting ideas with whereas, while, unlike and on the other hand",
  ],
  warmUp: [
    "Think about your grandparents' lives when they were your age. What is the biggest difference between their lives and yours?",
    "Is your town better for young people or for older people? Give one reason.",
  ],
  learn: [
    {
      type: "text",
      title: "Comparison questions in Part 3",
      body: "In IELTS Part 3 the examiner asks more abstract questions linked to your Part 2 topic, and many of them ask you to **compare**. Four types are especially common:\n\n- **Past and present**: *How is shopping different now from thirty years ago?*\n- **Two groups of people**: *Do older and younger people have different attitudes to work?*\n- **Two places or options**: *What are the differences between living in a city and in the countryside?*\n- **Your country and others**: *Is family life in your country similar to family life in other countries?*\n\nThe trap is to talk about **only one side**: three sentences about city life and nothing about the countryside. A comparison answer needs both sides, and the language that connects them.",
    },
    {
      type: "text",
      title: "A shape for comparison answers",
      body: "1. **Headline the main difference**: *I'd say the biggest difference is…*\n2. **Explain it and give an example**: why the difference exists, and one real case.\n3. **Balance it**: add a similarity, an exception or the other side: *Having said that, in some ways they're quite similar…*\n4. **Conclude briefly**: *So overall, …* or *So I suppose it depends on…*\n\nThis takes about 45–60 seconds, which is the right length for a Part 3 answer.",
    },
    {
      type: "table",
      title: "Language for comparing",
      headers: ["Purpose", "Language", "Example"],
      rows: [
        ["Big difference", "much / far / a lot + comparative", "Rents are far higher in the capital."],
        ["Small difference", "slightly / a bit / a little + comparative", "The train is slightly cheaper than the bus."],
        ["Not equal", "not as… as / not nearly as… as (a big gap)", "Village life isn't nearly as busy as city life."],
        ["Equal", "just as… as / much the same as / similar to", "Older people are just as interested in travel as students."],
        ["Contrast in one sentence", "whereas / while", "My parents saved money, whereas my generation tends to spend it."],
        ["Contrast in two sentences", "On the other hand,… / Unlike…,… / Compared with…,…", "Unlike my parents, I've never had a landline."],
        ["Similarity", "Both… / Neither… / One thing they have in common is…", "Both groups love music festivals."],
        ["Change over time", "used to… / these days / nowadays / than it used to be", "People used to write letters. These days, we send messages."],
        ["Two things changing together", "the + comparative…, the + comparative…", "The bigger the city, the harder it is to know your neighbours."],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Watch the most common comparison errors: *more easier* (say *easier*), *more better* (*better*), *as cheap than* (*as cheap as*), *different of* (*different from*), and *less shops* (with plural nouns, the standard form is *fewer shops*; use *less* with uncountable nouns: *less traffic*).",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: accurate comparisons",
        questions: [
          {
            prompt: "Housing is ___ expensive in the capital than in my hometown.",
            options: ["much more", "more much", "very more", "too more"],
            answer: 0,
            explanation: "Use much, far or a lot before a comparative to show a big difference: much more expensive.",
          },
          {
            prompt: "Teenagers today have ___ freedom than their parents did at the same age.",
            options: ["many more", "much more", "more many", "the more"],
            answer: 1,
            explanation: "Freedom is uncountable, so we say much more freedom. Many more is for plural nouns: many more choices.",
          },
          {
            prompt: "There are ___ shops on my street than there used to be.",
            options: ["fewer", "less", "fewer of", "littler"],
            answer: 0,
            explanation: "Shops is a plural countable noun, so the standard form is fewer. Less goes with uncountable nouns, such as less traffic.",
          },
          {
            prompt: "Life in the countryside isn't ___ it used to be.",
            options: ["as quiet than", "so quiet like", "as quiet as", "quieter as"],
            answer: 2,
            explanation: "The pattern is (not) as + adjective + as.",
          },
          {
            prompt: "My city is very different ___ the capital.",
            options: ["of", "from", "with", "at"],
            answer: 1,
            explanation: "Different from is correct in all varieties of English. (You may also hear different to in British English and different than in American English.)",
          },
          {
            prompt: "___ people use public transport, the less traffic there is.",
            options: ["More", "The most", "Most", "The more"],
            answer: 3,
            explanation: "This is the double comparative: the more…, the less… Both halves need the.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model: IELTS Part 3 on the topic of free time",
      voice: "uk",
      cast: { Examiner: "female", Candidate: "male" },
      transcript:
        "Examiner: How is the way people spend their free time different now compared with thirty or forty years ago?\nCandidate: I'd say the biggest difference is that free time has become far more individual. In my parents' day, people used to do things together in the evening, like watching the same TV programme as a family, or going to a local club. These days, everyone has their own screen, so you can be in the same room as your family and still be doing completely different things. On the other hand, people today have a lot more choice. My dad says that when he was young, there were only two or three things to do in his town, whereas now you can learn almost any hobby online. So overall, I think free time is richer than it used to be, but it isn't nearly as social.\nExaminer: Do older and younger people enjoy the same kinds of leisure activities?\nCandidate: In some ways, yes, more than people think. Both groups love travelling, for example, and you see just as many retired people at concerts as students. But there are some clear differences. Younger people tend to choose activities they can share online, whereas older people are usually more interested in the activity itself, like gardening or walking with friends. Another difference is energy and money. Young people generally have more energy but less money, so they go for cheaper things. Having said that, the gap is getting smaller. My grandmother has just joined a dance class with people half her age, and she loves it.",
    },
    {
      type: "text",
      title: "How a strong candidate does it",
      body: "- **A headline first**: *I'd say the biggest difference is that…* tells the examiner exactly what the answer is about.\n- **Modified comparatives**: *far more individual*, *a lot more choice*, *not nearly as social*. They show how big the difference is.\n- **Past and present markers**: *In my parents' day… used to…* contrasted with *These days…* and *now*.\n- **Both sides, linked**: *whereas* joins two contrasting facts in one sentence; *On the other hand* and *Having said that* turn the answer in a new direction.\n- **Similarity before difference** in the second answer: *Both groups love travelling… just as many retired people… as students.* Starting with what is the same, then moving to differences, sounds balanced and thoughtful.\n- **A short conclusion**: *So overall, I think free time is richer… but it isn't nearly as social.* A two-sided conclusion is perfect for a comparison.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Complete the comparison",
        instructions: "Question: “How has shopping changed in your country?” Complete the answer with the words in the box. Use each one once.",
        text: "I think shopping has changed {{0}} more in the last ten years than in the thirty years before. My parents {{1}} go to the market every Saturday, {{2}} my generation orders almost everything online. There are {{3}} small shops in the town centre now, and the ones that are left aren't nearly {{4}} busy as they were. {{5}} online shops, a local shop can't deliver at midnight, but it can give you real advice. So {{6}} kinds of shopping still have their place, really.",
        answers: [["far", "much", "a lot", "a great deal"], ["used to", "would"], ["whereas", "while", "but"], ["fewer", "far fewer", "much fewer"], ["as"], ["Unlike"], ["both"]],
        wordBank: ["far", "used to", "whereas", "fewer", "as", "Unlike", "both"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "order",
        mode: "lines",
        title: "Build a balanced answer",
        instructions: "Question: “Do people communicate differently now from in the past?” Put the parts of the answer in the best order.",
        items: [
          "Yes, definitely. The biggest difference, I'd say, is that communication is much faster now, but often less personal.",
          "In the past, people used to write letters or wait until they saw each other, whereas now we expect a reply within minutes.",
          "For example, my grandparents wrote to each other for two years before they got married, and they've kept every letter.",
          "Having said that, some things haven't changed: people still prefer to share really important news face to face.",
          "So overall, we communicate far more than before, but I'm not sure we communicate better.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "IELTS Part 3: compare two places",
        instructions: "Answer with no preparation time, as in the real test. Headline the main difference, cover both sides, add a balancing point and finish with a short conclusion.",
        prompt: "What are the main differences between living in a city and living in the countryside?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "Well, the most obvious difference is the pace of life. Cities are much faster and noisier, whereas in the countryside things move at a slower rhythm. On top of that, there's a big difference in opportunities. In a city you've got far more jobs, better hospitals and more things to do in the evening, while in a village you might have to drive half an hour just to see a doctor. Having said that, country life has some real advantages. Housing is usually a lot cheaper, the air is cleaner, and people tend to know their neighbours, which is quite rare in a big city. So I suppose it depends on your stage of life. For young people, the city probably makes more sense, but for families, the countryside can be just as attractive.",
        targetPhrases: ["the most obvious difference", "whereas", "far more", "having said that", "a lot cheaper", "just as attractive"],
        checklist: [
          "I started with the main difference, not with background.",
          "I talked about both the city and the countryside.",
          "I used at least two modified comparatives (far more, a lot cheaper, slightly…).",
          "I linked contrasting ideas with whereas, while or on the other hand.",
          "I added a balancing point and finished with a short conclusion.",
          "I spoke for most of the 60 seconds without long pauses.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "TOEFL: Take an Interview (a preference question)",
        instructions: "No preparation time. Choose one side in your first sentence, then use a comparison to justify it. Speak for about 45 seconds.",
        prompt:
          "Interviewer: We're researching how students spend their money. When you need to buy something, do you prefer to buy it in a store or online? Why?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "For most things, I prefer shopping online, mainly because it's so much quicker and I can compare prices in seconds. In a store, you only see what that shop has, whereas online you can check ten shops without leaving your desk. Having said that, clothes are different. I've bought jeans online that looked perfect in the photo but didn't fit at all, and sending them back was a real hassle. So for clothes and shoes, I'd much rather go to a store and try things on. Overall, though, online wins for me, especially for books and electronics.",
        targetPhrases: ["I prefer", "so much quicker", "whereas", "having said that", "I'd much rather"],
        checklist: [
          "I chose one side clearly in my first sentence.",
          "I justified my choice with a direct comparison (whereas…, much quicker than…).",
          "I mentioned an exception or the other side briefly.",
          "I ended by returning to my preference.",
          "I finished within about 45 seconds.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "When a Part 3 question asks you to compare, cover **both sides**. An answer that only describes one side is less complete and gives you fewer chances to show comparative language. Start with the biggest difference, then add a similarity or an exception.",
    },
    {
      exam: "ielts",
      body: "Grammatical Range and Accuracy is assessed on how well you use complex structures as well as simple ones. Comparison questions give you natural chances to use them: *whereas* clauses, *not nearly as… as*, *the more…, the more…* and *used to* for past habits.",
    },
    {
      exam: "toefl",
      body: "Take an Interview may include preference questions (*Do you prefer…?*). Choose one side in your first sentence and justify it with a comparison. Spending 45 seconds explaining that both options are good leaves your answer without a clear position.",
    },
  ],
  vocabulary: [
    { word: "pace of life", meaning: "how fast or slowly things happen in people's daily lives", example: "The pace of life in the capital is exhausting.", topic: "society" },
    { word: "whereas", meaning: "used to compare two facts and show how they are different", example: "My brother loves the city, whereas I prefer the countryside.", topic: "academic" },
    { word: "have a lot in common", meaning: "to share many interests, qualities or experiences", example: "My best friend and I have a lot in common.", topic: "society" },
    { word: "the gap (between)", meaning: "a difference between two groups, things or situations", example: "The gap between rich and poor areas is growing.", topic: "society" },
    { word: "make more sense", meaning: "to be the more reasonable or practical choice", example: "For short trips, taking the train makes more sense.", topic: "everyday" },
    { word: "a hassle", meaning: "something annoying that takes time and effort", example: "Returning things to online shops can be a real hassle.", topic: "everyday" },
    { word: "retired", meaning: "no longer working, usually because of age", example: "My retired neighbour volunteers at the library.", topic: "society" },
    { word: "leisure", meaning: "the time when you are not working or studying", example: "Leisure activities have changed a lot in recent years.", topic: "society" },
    { word: "attitude (to / towards)", meaning: "the way you think and feel about something", example: "Attitudes to work have changed a lot.", topic: "society" },
    { word: "rather than", meaning: "instead of", example: "More young people rent rather than buy.", topic: "everyday" },
    { word: "nowadays", meaning: "at the present time, compared with the past", example: "Nowadays most people pay by card.", topic: "everyday" },
  ],
  keyPoints: [
    "Part 3 comparison questions ask about past and present, two groups, two places or options, or your country and others.",
    "Headline the main difference, explain it with an example, then add a similarity or exception and conclude.",
    "Show how big a difference is: far / much / a lot more, slightly less, not nearly as… as, just as… as.",
    "Link contrasting ideas with whereas, while, unlike and on the other hand.",
    "Avoid common errors: more easier, as… than, different of, and less with plural nouns.",
  ],
};

export default lesson;
