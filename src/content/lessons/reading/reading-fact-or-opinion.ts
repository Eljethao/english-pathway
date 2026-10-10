import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-fact-or-opinion",
  title: "Fact or opinion?",
  summary:
    "Tell the difference between facts, opinions and claims in articles, reviews and adverts, and decide whose view a sentence gives: the writer's or someone else's.",
  skill: "reading",
  level: "B1",
  order: 8,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Reading – Yes/No/Not Given" },
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
    { exam: "toeic", task: "Reading Part 7 – Reading Comprehension" },
  ],
  objectives: [
    "Tell the difference between a fact, an opinion and a claim",
    "Recognise words that show an opinion and words that show the writer is not certain",
    "Decide whether a view belongs to the writer or to another person in the text",
    "Answer simple Yes/No/Not Given questions about a writer's views",
  ],
  warmUp: [
    "“Paris is the capital of France.” “Paris is the most beautiful city in the world.” What is the difference between these two sentences?",
    "When you read online reviews of a hotel or a restaurant, which ones do you trust? Why?",
  ],
  learn: [
    {
      type: "text",
      title: "Three kinds of statement",
      body: "When you read, it helps to ask: *Is this a fact, an opinion or a claim?*\n\n- A **fact** is information that can be checked, for example in a calendar, on a map, in a price list or in official records. *The museum opened in 1998.* *A ticket costs £8.*\n- An **opinion** is what someone thinks or feels. Other people can disagree, and it cannot be proved. *The museum is the best place in town on a rainy day.*\n- A **claim** is presented as true, but the text gives no proof, so you would need evidence before you believe it. Claims are common in adverts and arguments. *Our app will help you sleep better.* *Everyone agrees that the new bridge is a success.*",
    },
    {
      type: "table",
      title: "What to look for",
      headers: ["Type", "Look for…", "Example"],
      rows: [
        ["Fact", "dates, numbers, places, names and events that can be checked, often with a source (*according to…*)", "According to the council, 4,000 people crossed the new bridge on its first day."],
        ["Opinion", "words that judge (*great, terrible, boring, beautiful*), *best / worst*, *should*, *I think*, *in my view*, *unfortunately*", "The new bridge is ugly, and the council should never have built it."],
        ["Softer opinion (not certain)", "*may, might, could, probably, seems, it is likely that*", "The bridge may reduce traffic in the town centre."],
        ["Claim", "promises and big general statements with no evidence: *will, guaranteed, proven, everyone knows, experts say* (with no names)", "This cream is proven to make you look ten years younger."],
      ],
    },
    {
      type: "text",
      title: "Whose view is it?",
      body: "In articles, writers often report other people's opinions. Before you answer a question about **the writer's** view, check who is speaking.\n\n- “The new park is a waste of money,” said one resident. → the resident's opinion, not necessarily the writer's.\n- “Some people say the park was too expensive. **In fact**, it cost less than the old car park.” → The writer reports an opinion, then gives a fact that disagrees with it. The writer's view: the park was **not** too expensive.\n\nWords like *however*, *in fact*, *but* and *actually* often show where the writer's own view begins.",
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Yes/No/Not Given questions ask about the **writer's views or claims**. **Yes** = the statement agrees with the writer's view. **No** = it is the opposite of the writer's view. **Not Given** = it is impossible to say what the writer thinks about this. An opinion that only another person in the text gives is not the writer's view.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "The night market: a bright idea",
      labelled: true,
      paragraphs: [
        "Since April, the car park behind Bridge Street has turned into a night market every Friday from 6 pm to 11 pm. There are about forty stalls selling street food, handmade jewellery and second-hand books, and a different local band plays each week.",
        "In my view, it is the best thing to happen to our town centre for years. On Friday evenings, the streets used to be empty after the shops closed. Now they are full of families and young people, and the atmosphere is wonderful.",
        "Not everyone agrees. Some residents of Bridge Street have complained about noise, and one shop owner told me, “The market takes customers away from local businesses.” I understand these worries, but I do not think they are right. According to the town council, the number of visitors to the town centre on Friday evenings has almost doubled since the market opened, and several cafés now stay open later.",
        "The organisers say that the market will create more than a hundred new jobs by the end of the year. That may be true, but they have not explained how they calculated this number, so I would wait for real figures before celebrating.",
        "The market is not perfect. Parking is difficult, and some of the food is too expensive for a quick snack. But these are small problems that can be solved. The council should make the market permanent and add a second evening on Saturdays.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader sorts the sentences",
      body: "**Paragraph A** is mostly **facts**: a day, times, a number of stalls. You could check them by visiting the market.\n\n**Paragraph B** gives the **writer's opinion**: *In my view*, *the best thing*, *wonderful*.\n\n**Paragraph C** has three voices. The shop owner gives an **opinion** (*The market takes customers away…*). The writer disagrees (*I do not think they are right*) and supports this with a **fact from a source** (*According to the town council… almost doubled*).\n\n**Paragraph D** reports a **claim** by the organisers: a hundred new jobs. The writer points out that there is **no evidence** yet (*they have not explained how they calculated this number*). *That may be true* is a softer, uncertain opinion.\n\n**Paragraph E** gives more of the writer's opinions: *too expensive*, *small problems*, and *should*, which shows a recommendation.\n\nSo what is the writer's view? Generally very positive, with a few small criticisms, and careful about the organisers' claim.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Fact, opinion or claim?",
        instructions: "Decide what each sentence is. Use the signals in the table above.",
        questions: [
          {
            prompt: "“The library is open from 9 am to 8 pm on weekdays.”",
            options: ["Fact", "Opinion", "Claim"],
            answer: 0,
            explanation: "You can check opening times on the door or the website. Nobody can disagree with them.",
          },
          {
            prompt: "“The new library building is ugly and far too big.”",
            options: ["Fact", "Opinion", "Claim"],
            answer: 1,
            explanation: "*Ugly* and *far too big* are judgements. Other people may think the building is beautiful.",
          },
          {
            prompt: "“Drink SuperGreen every morning and you will never catch a cold again!”",
            options: ["Fact", "Opinion", "Claim"],
            answer: 2,
            explanation: "This is an advert's promise (*will never*) with no evidence. You would need proof before believing it.",
          },
          {
            prompt: "“The bridge was closed for repairs for three months last year.”",
            options: ["Fact", "Opinion", "Claim"],
            answer: 0,
            explanation: "It describes an event with a time. It can be checked in local records or news reports.",
          },
          {
            prompt: "“I think teenagers should spend less time on their phones.”",
            options: ["Fact", "Opinion", "Claim"],
            answer: 1,
            explanation: "*I think* and *should* show a personal view.",
          },
          {
            prompt: "“Our online course is guaranteed to make you fluent in just 30 days.”",
            options: ["Fact", "Opinion", "Claim"],
            answer: 2,
            explanation: "*Guaranteed* is a typical advertising promise. The text gives no evidence that it is true.",
          },
          {
            prompt: "“According to the bus company, 12,000 passengers used the new route in its first month.”",
            options: ["Fact", "Opinion", "Claim"],
            answer: 0,
            explanation: "A number with a named source (*according to the bus company*) is reported as a fact that can be checked.",
          },
          {
            prompt: "“Experts say this is the healthiest diet in the world.”",
            options: ["Fact", "Opinion", "Claim"],
            answer: 2,
            explanation: "*Experts say* with no names and no evidence is a typical claim. Which experts? What proof?",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "tfng",
        variant: "ynng",
        title: "The writer's views",
        instructions:
          "Read “The night market: a bright idea” again. Do the statements agree with the views of the writer? Choose Yes, No or Not Given.",
        statements: [
          {
            text: "The night market has made the town centre busier on Friday evenings.",
            answer: "T",
            explanation: "Yes. Paragraph B: the streets are now “full of families and young people”, and paragraph C gives the council's figures: visitors have almost doubled.",
          },
          {
            text: "The market is bad for local businesses.",
            answer: "F",
            explanation: "No. This is the shop owner's view. The writer says “I do not think they are right” and mentions that several cafés now stay open later.",
          },
          {
            text: "The organisers have proved that the market will create more than a hundred jobs.",
            answer: "F",
            explanation: "No. The writer says the organisers “have not explained how they calculated this number” and wants to wait for real figures.",
          },
          {
            text: "The food at the market is better than the food in the town's restaurants.",
            answer: "NG",
            explanation: "Not Given. The writer says some food is too expensive for a quick snack, but never compares it with restaurant food.",
          },
          {
            text: "The problems with the market are serious.",
            answer: "F",
            explanation: "No. Paragraph E: “these are small problems that can be solved”.",
          },
          {
            text: "The market should open on more than one evening a week.",
            answer: "T",
            explanation: "Yes. Paragraph E: the council should “add a second evening on Saturdays”.",
          },
          {
            text: "The local bands are the best part of the market.",
            answer: "NG",
            explanation: "Not Given. Paragraph A mentions the bands as a fact, but the writer gives no opinion about them.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Whose view is it?",
        instructions:
          "Use “The night market: a bright idea”. Who says or believes each thing? There is one extra option that you do not need.",
        left: [
          "The market is the best thing to happen to the town centre for years.",
          "The market takes customers away from local businesses.",
          "The market is too noisy.",
          "The number of Friday evening visitors has almost doubled.",
          "The market will create more than a hundred jobs.",
        ],
        right: ["the town council", "a local band", "the writer", "the organisers", "some residents", "a shop owner"],
        answer: [2, 5, 4, 0, 3],
      },
    },
    {
      type: "passage",
      title: "Advert and reviews: the Dawnly Light",
      paragraphs: [
        "TEXT 1: ADVERTISEMENT",
        "Wake up naturally with the Dawnly Light!",
        "Hate your alarm clock? The Dawnly Light wakes you up gently. Thirty minutes before your alarm time, the lamp slowly gets brighter, like a real sunrise. Thousands of happy customers say they now wake up feeling fresh and full of energy. Doctors agree: it is the healthiest way to start your day!",
        "The Dawnly Light has 20 brightness levels, a built-in radio and five nature sounds. It is 18 cm tall and comes in white or grey. Price: £49.99, with free delivery and a two-year guarantee.",
        "TEXT 2: CUSTOMER REVIEWS",
        "★★★★★ Priya, Leeds: “I've used the Dawnly Light every morning for three months. In winter it is still dark when I get up at 6 am, and the light makes getting up much easier. I think it is worth every penny. The nature sounds are a bit silly, but you can switch them off.”",
        "★★☆☆☆ Mark, Bristol: “The light is nice, but mine stopped working after five weeks. The company sent me a new one, which took eleven days to arrive. In my opinion, £49.99 is too much for a lamp with a clock. A cheap alarm clock and open curtains do the same job.”",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "An advert and two reviews",
        instructions: "Read both texts, as in a TOEIC Part 7 double passage. Choose the correct answer.",
        questions: [
          {
            prompt: "Which sentence from the advertisement is a fact?",
            options: [
              "Thousands of happy customers say they now wake up feeling fresh.",
              "Doctors agree: it is the healthiest way to start your day!",
              "The Dawnly Light has 20 brightness levels.",
              "The Dawnly Light wakes you up gently.",
            ],
            answer: 2,
            explanation: "The number of brightness levels can be checked on the product. The other sentences are claims or opinions that the advert does not prove.",
          },
          {
            prompt: "Why is “Doctors agree: it is the healthiest way to start your day!” a claim and not a fact?",
            options: [
              "It contains a number.",
              "It does not name any doctors or give any evidence.",
              "It describes the colour of the lamp.",
              "It was written by a customer.",
            ],
            answer: 1,
            explanation: "Which doctors? What study? With no names and no evidence, it is a claim.",
          },
          {
            prompt: "Which of these is Priya's opinion?",
            options: [
              "She has used the lamp for three months.",
              "She gets up at 6 am.",
              "The lamp is worth every penny.",
              "You can switch the nature sounds off.",
            ],
            answer: 2,
            explanation: "*I think it is worth every penny* is her personal view. The other options are facts she reports.",
          },
          {
            prompt: "Which of these is a fact from Mark's review?",
            options: [
              "The light is nice.",
              "His new lamp took eleven days to arrive.",
              "£49.99 is too much for a lamp with a clock.",
              "A cheap alarm clock does the same job.",
            ],
            answer: 1,
            explanation: "The delivery time is a fact about what happened. *Nice*, *too much* and *do the same job* are his opinions.",
          },
          {
            prompt: "What do Priya and Mark both say?",
            options: [
              "The lamp is good value for money.",
              "The light itself is good.",
              "The nature sounds are silly.",
              "The lamp breaks easily.",
            ],
            answer: 1,
            explanation: "Priya says the light makes getting up much easier, and Mark says “The light is nice”. They disagree about the price, and only one of them mentions the sounds or a broken lamp.",
          },
          {
            prompt: "Which detail in Mark's review shows that the company keeps its two-year guarantee?",
            options: [
              "The company sent him a new lamp.",
              "He thinks the lamp is too expensive.",
              "He says curtains work just as well.",
              "He gave the lamp two stars.",
            ],
            answer: 0,
            explanation: "The advert offers a two-year guarantee. Mark's lamp broke after five weeks and the company replaced it, so it kept its promise.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "IELTS uses Yes/No/Not Given with texts that give opinions or arguments, and True/False/Not Given with factual information. In Yes/No/Not Given, look for the writer's opinion words, such as *should*, *I believe*, *unfortunately* and *in fact*, and don't confuse the writer's view with the view of someone the writer quotes.",
    },
    {
      exam: "toefl",
      body: "Read an Academic Passage includes questions on inference and the writer's purpose. When a writer gives a fact after *In fact* or *However*, ask why: it is often there to answer an opinion mentioned earlier.",
    },
    {
      exam: "toeic",
      body: "Part 7 includes adverts and articles, and questions often ask what is *indicated* or *stated* about a product or a person. Choose answers that the text states clearly. An advertiser's claim, such as *the best on the market*, tells you what the company says, not what is proven.",
    },
  ],
  vocabulary: [
    { word: "fact", meaning: "something that is known to be true and can be checked", example: "It's a fact that the museum opened in 1998.", topic: "academic" },
    { word: "opinion", meaning: "what a person thinks or feels about something", example: "In my opinion, the film was too long.", topic: "academic" },
    { word: "claim", meaning: "a statement that something is true, given without proof", example: "The company's claims about the product were not true.", topic: "academic" },
    { word: "evidence", meaning: "facts or information that show something is true", example: "There is no evidence that the drink prevents colds.", topic: "academic" },
    { word: "according to", meaning: "as reported by a particular person or source", example: "According to the weather forecast, it will rain tomorrow.", topic: "academic" },
    { word: "stall", meaning: "a table or small shop where things are sold in a market", example: "She has a stall selling handmade jewellery.", topic: "business" },
    { word: "atmosphere", meaning: "the feeling or mood of a place", example: "The café has a friendly atmosphere.", topic: "everyday" },
    { word: "organiser", meaning: "a person who plans and arranges an event", example: "The organisers expect 5,000 visitors.", topic: "work" },
    { word: "permanent", meaning: "lasting for a very long time or for ever; not temporary", example: "She has a permanent job at the hospital.", topic: "work" },
    { word: "guarantee", meaning: "a promise that a company will repair or replace a product if it breaks", example: "The fridge has a five-year guarantee.", topic: "business" },
    { word: "worth every penny", meaning: "very good value for the money you paid", example: "The course was expensive, but it was worth every penny.", topic: "everyday" },
    { word: "figures", meaning: "official numbers, for example about money or people", example: "The latest figures show that visitor numbers have doubled.", topic: "business" },
  ],
  keyPoints: [
    "A fact can be checked; an opinion is what someone thinks or feels; a claim is presented as true but given without proof.",
    "Opinion words include best, terrible, should, I think and in my view; may, might and probably show that the writer is not certain.",
    "Check whose view it is: an opinion in a quote is not always the writer's opinion.",
    "For Yes/No/Not Given, compare the statement with the writer's view; if the writer does not say what they think, the answer is Not Given.",
  ],
};

export default lesson;
