import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-inference-writers-purpose",
  title: "Inference and the writer's purpose",
  summary:
    "Read between the lines: work out what a writer implies, why they include an example and how they feel about a topic, without adding ideas the text does not support.",
  skill: "reading",
  level: "C1",
  order: 1,
  minutes: 20,
  exams: [
    { exam: "ielts", task: "Reading – Multiple choice" },
    { exam: "ielts", task: "Reading – Yes/No/Not Given" },
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
  ],
  objectives: [
    "Distinguish a valid inference from an unsupported assumption",
    "Identify the function of a paragraph, example or quotation",
    "Recognise the writer's attitude through hedging, concession and evaluative language",
  ],
  warmUp: [
    "If a friend says a film was 'interesting, in its own way', what do they probably mean?",
    "Think of a famous scientist or inventor. Did they really work alone?",
  ],
  learn: [
    {
      type: "text",
      title: "What an inference is, and what it is not",
      body: "An inference is a conclusion that the text **strongly supports** but does not state directly. It is not a guess, and it is not your own opinion about the topic.\n\nA useful test: *could the writer reasonably object, \"I never said that\"?* If yes, the option goes too far. Wrong answers in inference questions are usually one of these:\n\n- **Too strong**: the text says *some* or *may*; the option says *all* or *will*.\n- **True but irrelevant**: the idea is in the passage, but it does not answer this question.\n- **Real-world true**: the statement is correct in life, but the passage does not support it.\n- **Opposite**: the option reverses a contrast or a cause and effect.",
    },
    {
      type: "example",
      title: "Typical question stems",
      items: [
        "What does the writer **imply** about…?",
        "What can be **inferred** from paragraph C?",
        "**Why does the writer mention** the refrigerator in paragraph D?",
        "What is the **main purpose** of the final paragraph?",
        "Which of the following best describes the writer's **attitude** towards…?",
        "Do the following statements agree with the **claims of the writer**? (Yes / No / Not Given)",
      ],
    },
    {
      type: "table",
      title: "Purpose words and the signals that reveal them",
      headers: ["Purpose", "Typical signals", "What the writer is doing"],
      rows: [
        ["illustrate", "for instance, take the case of, consider", "giving an example to support a general claim"],
        ["concede", "admittedly, this is not to deny, of course, it is true that", "accepting a point before arguing against it"],
        ["challenge", "yet, however, misleading, it is far from clear", "questioning a common belief"],
        ["qualify", "in broad terms, to some extent, not always, in other words", "limiting a claim so it is more accurate"],
        ["evaluate", "striking, naive, compelling, awkward", "showing an opinion through word choice"],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "When a question asks *why* the writer mentions something, the answer is almost never a fact about the thing itself. Look at the sentence **before** the example: it usually contains the general claim that the example supports.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "The myth of the lone genius",
      labelled: true,
      paragraphs: [
        "Popular histories of science are crowded with solitary heroes. Newton beneath his apple tree, Darwin on the deck of the Beagle, Marie Curie stirring tonnes of ore in a leaking shed: these images are so familiar that they have come to define what a scientific breakthrough looks like. A single exceptional mind, working largely alone, sees what everyone else has missed. The story appears in children's books, museum displays and film biographies, and it still shapes how many people imagine scientific work. It is a compelling story. It is also, for the most part, misleading.",
        "This is not to deny that individuals matter. Some people are unusually gifted, and some discoveries would plainly have been delayed without them. But the heroic narrative tends to edit out everything that made those individuals productive: the correspondents who supplied data, the instrument makers whose devices made new measurements possible, the assistants whose names appear nowhere in the textbooks. Darwin, for instance, relied on a vast network of breeders, collectors and naturalists, exchanging thousands of letters over several decades. Marie Curie, similarly, worked in close partnership with her husband, Pierre, and depended on waste ore donated from a mine in Bohemia, then part of Austria-Hungary, for her raw material. To describe either scientist's work as the product of one person's solitary reflection is not so much wrong as radically incomplete.",
        "There is also the awkward matter of simultaneous discovery. Calculus was developed independently by Newton and Leibniz; the theory of evolution by natural selection occurred to Alfred Russel Wallace while Darwin was still preparing his own account for publication; oxygen was isolated by at least two chemists working separately within a few years of each other. Historians have catalogued dozens of such cases, and each drew on instruments, data and theories that had been accumulating for decades. If great ideas depended entirely on rare individual genius, we would expect them to appear at random. The fact that they so often emerge in several places at once suggests that, by a certain point, the necessary pieces were already lying on the table, waiting to be assembled.",
        "Why, then, does the myth persist? Part of the answer is simply that stories need protagonists; a narrative about gradual, distributed progress makes for a poor film. Journalism plays its part too: a single named discoverer is far easier to photograph, interview and quote than a team of three hundred. But institutions have their own reasons for preserving it. Prizes are awarded to named individuals, rarely to more than a few people at once, and funding bodies are understandably drawn to 'star' researchers who seem to guarantee results. The outcome is a system that rewards the appearance of solitary brilliance even as the actual work of science becomes ever more collaborative: papers in some fields now list hundreds, occasionally thousands, of authors.",
        "None of this means we should stop celebrating remarkable scientists. It does mean, however, that the stories we tell about them shape who believes they can take part. Studies in which children are asked to draw a scientist have repeatedly found that many produce the same stereotyped figure: a man in a white coat, working in a laboratory. A teenager who thinks discovery requires a once-in-a-generation intellect may never consider a research career; one who understands it as a collective, cumulative enterprise might reasonably conclude that there is room for her too.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader answers",
      body: "**Q: Why does the writer mention Darwin's letters in paragraph B?**\n\nThe signal *for instance* tells us this is an illustration. The claim before it is that the heroic story “edits out everything that made those individuals productive”. So the letters show that **even a famous 'lone genius' depended on many other people**. An option such as “to show that Darwin was a skilled writer” is true-but-irrelevant: it describes the letters, not their purpose.\n\n**Q: What does the writer imply about simultaneous discoveries (paragraph C)?**\n\nThe writer never says “genius is unimportant”. The text says that ideas “so often emerge in several places at once”, which suggests the “necessary pieces were already lying on the table”. The valid inference is that **discoveries depend partly on the knowledge available at the time**. “Newton copied Leibniz” is unsupported: the text says *independently*.\n\n**Q: What is the writer's attitude to the lone-genius story?**\n\nLook at the evaluative words: *compelling* (positive) followed immediately by *misleading* (negative), then the concession *This is not to deny that individuals matter*. The attitude is **critical but balanced**: the writer accepts that individuals matter while rejecting the story as a full explanation.\n\n**Q: What is the purpose of paragraph E?**\n\n*None of this means…* signals a concession, then *It does mean, however…* introduces the real point: the myth may **discourage people from entering science**. This is the writer's practical reason for caring about the topic.",
    },
  ],
  practice: [
    {
      type: "passage",
      title: "The return of repair",
      labelled: true,
      paragraphs: [
        "For most of human history, repairing things was simply what people did. Clothes were darned, shoes resoled and furniture reglued; a broken radio went to the shop on the corner rather than to the rubbish tip. Somewhere in the second half of the twentieth century, that habit began to fade. Goods became cheaper, labour became more expensive, and the calculation shifted: it was often less trouble, and sometimes less money, to replace an item than to fix it.",
        "Manufacturers did little to resist this shift, and in some cases they actively encouraged it. Products began to arrive sealed with glue rather than held together with screws, spare parts became difficult to obtain, and repair manuals, once routinely supplied with appliances, quietly disappeared. Some companies went further, designing devices that would refuse to work if a part had been replaced by anyone other than an authorised technician. Critics labelled this 'planned obsolescence', although the term is perhaps too generous to the idea of planning; much of the time, repairability was not so much deliberately sabotaged as simply never considered.",
        "Since the late 2000s, however, the tide has begun to turn. Volunteer-run 'repair cafés', where people bring broken toasters, lamps and bicycles to be fixed for free, have spread from a single event in the Netherlands to thousands of locations worldwide. Online communities publish detailed, step-by-step guides for repairing everything from phones to washing machines. And in several countries, legislators have introduced so-called 'right to repair' laws, which require manufacturers to make spare parts and repair information available for a set number of years. Even some large manufacturers, after years of resistance, have begun to sell spare parts and tools directly to the public.",
        "The environmental case for repair is usually presented as self-evident, and in broad terms it is. Manufacturing a new smartphone, for example, accounts for most of the carbon emissions it will generate over its lifetime, so extending its use by even a year or two makes a meaningful difference. Yet the picture is not uniformly positive. A twenty-year-old refrigerator may consume so much more electricity than a modern one that keeping it running is the worse option. Repair, in other words, is a means rather than an end, and its value depends on what is being repaired. For most clothing, furniture and small electronic devices, the case is clear; for some older, energy-hungry appliances, it is not.",
        "What is perhaps most striking about the repair movement is how little of its appeal is purely practical. Volunteers at repair cafés frequently describe the satisfaction of understanding how an object works, and visitors often stay to watch, or to attempt the repair themselves under supervision. For some, the main attraction is simply not having to throw away an object they are fond of. Several organisers have remarked that the cafés function as much as social spaces as workshops, drawing in retired engineers, curious teenagers and people who simply want company on a Saturday afternoon.",
        "It would be naive to imagine that a few thousand volunteers with screwdrivers will reverse decades of economic change. The cost of labour has not fallen, and many products remain fiendishly difficult to open. But the movement has already achieved something that seemed unlikely twenty years ago: it has made the question 'Can this be fixed?' a reasonable one to ask again. Whether manufacturers choose to answer it is another matter.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Inference and purpose questions",
        instructions: "Read “The return of repair”. Choose the best answer.",
        questions: [
          {
            prompt: "What can be inferred from paragraph A about the decline of repair?",
            options: [
              "It was mainly caused by a fall in the quality of repair work.",
              "It resulted largely from changes in the relative cost of goods and labour.",
              "It began when manufacturers stopped selling spare parts.",
              "It was strongly opposed by most consumers at the time.",
            ],
            answer: 1,
            explanation:
              "Paragraph A: “Goods became cheaper, labour became more expensive, and the calculation shifted.” Spare parts are mentioned only in paragraph B, as something that happened after the shift had begun (“did little to resist this shift”).",
          },
          {
            prompt: "In paragraph B, what does the writer suggest about the term 'planned obsolescence'?",
            options: [
              "It accurately describes the behaviour of most manufacturers.",
              "It overstates how deliberate manufacturers' behaviour usually was.",
              "It was invented by manufacturers to defend themselves.",
              "It is no longer used by critics of the industry.",
            ],
            answer: 1,
            explanation:
              "The term is “too generous to the idea of planning”: repairability was usually “not so much deliberately sabotaged as simply never considered”. In other words, it was often neglect, not a plan.",
          },
          {
            prompt: "Why does the writer mention a twenty-year-old refrigerator in paragraph D?",
            options: [
              "to show that older appliances are more reliable than modern ones",
              "to illustrate a case where repair may not be the best environmental choice",
              "to criticise the manufacturers of modern refrigerators",
              "to support the claim that repair is always worthwhile",
            ],
            answer: 1,
            explanation:
              "It follows “Yet the picture is not uniformly positive”, so it illustrates an exception: an old fridge uses so much electricity that keeping it is “the worse option”.",
          },
          {
            prompt: "What is the main purpose of paragraph E?",
            options: [
              "to explain how repair cafés are funded",
              "to argue that repair cafés should employ professional engineers",
              "to point out that the movement's appeal goes beyond fixing objects",
              "to describe the items most commonly brought to repair cafés",
            ],
            answer: 2,
            explanation:
              "The topic sentence says “how little of its appeal is purely practical”, and the paragraph describes satisfaction, learning and company.",
          },
          {
            prompt: "The final sentence of the passage suggests that the writer…",
            options: [
              "is confident that manufacturers will now support repair.",
              "is uncertain whether manufacturers will respond positively.",
              "believes that the repair movement has failed.",
              "thinks that consumers no longer care about repair.",
            ],
            answer: 1,
            explanation:
              "“Whether manufacturers choose to answer it is another matter” means the outcome is open; the writer does not predict it either way.",
          },
          {
            prompt: "Which best describes the writer's overall attitude to the repair movement?",
            options: [
              "enthusiastic and uncritical",
              "supportive but realistic about its limits",
              "dismissive of its importance",
              "neutral and purely descriptive",
            ],
            answer: 1,
            explanation:
              "The writer praises what the movement “has already achieved” but calls it “naive” to expect it to reverse economic change, and notes limits in paragraph D.",
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
        title: "The writer's claims",
        instructions:
          "Do the following statements agree with the claims of the writer? Choose Yes, No or Not Given.",
        statements: [
          {
            text: "Manufacturers were the original cause of the decline in repair.",
            answer: "F",
            explanation:
              "No. Paragraph A explains the decline through costs, and paragraph B says manufacturers “did little to resist this shift”, which means the shift was already happening.",
          },
          {
            text: "Right to repair laws have significantly lowered the price of repairs.",
            answer: "NG",
            explanation: "Paragraph C describes what the laws require, but says nothing about their effect on prices.",
          },
          {
            text: "Repairing a product is not always better for the environment than replacing it.",
            answer: "T",
            explanation: "Yes. Paragraph D: the old refrigerator example and “its value depends on what is being repaired”.",
          },
          {
            text: "Repair cafés should receive financial support from the government.",
            answer: "NG",
            explanation: "The writer never discusses funding for repair cafés.",
          },
          {
            text: "Volunteer repair alone is unlikely to undo the effects of long-term economic change.",
            answer: "T",
            explanation: "Yes. Paragraph F: “It would be naive to imagine that a few thousand volunteers with screwdrivers will reverse decades of economic change.”",
          },
          {
            text: "The movement has changed attitudes towards broken objects.",
            answer: "T",
            explanation: "Yes. Paragraph F: it has made “Can this be fixed?” “a reasonable one to ask again”.",
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
        title: "Paragraph purpose",
        instructions:
          "Match each paragraph of “The return of repair” with its main purpose. There are two extra purposes you do not need.",
        left: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E", "Paragraph F"],
        right: [
          "compares repair laws in different countries",
          "qualifies a widely accepted argument",
          "describes the historical background",
          "gives a balanced assessment of what has been achieved",
          "explains how producers made repair harder",
          "proposes a way to reduce the cost of labour",
          "highlights personal and social benefits rather than practical ones",
          "gives evidence that interest in repair is growing",
        ],
        answer: [2, 4, 7, 1, 6, 3],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Reading between the lines",
        instructions: "Read each short extract and choose the best answer.",
        questions: [
          {
            prompt:
              "“The new library has been open for six months. Its café, at least, is always busy.” What does the writer imply?",
            options: [
              "The café is too small for the number of visitors.",
              "The library itself may not be attracting many users.",
              "The library will probably close soon.",
              "The café serves better food than other cafés nearby.",
            ],
            answer: 1,
            explanation: "*At least* suggests that the café is the one part that is successful, implying the rest is less so.",
          },
          {
            prompt:
              "“The minister described the results as 'encouraging', a word politicians tend to reserve for figures they would rather not discuss in detail.” What does the writer suggest?",
            options: [
              "The results were better than expected.",
              "The minister did not understand the results.",
              "The results were probably disappointing.",
              "Politicians rarely comment on results.",
            ],
            answer: 2,
            explanation: "The writer hints that 'encouraging' is used to hide figures that are not good enough to discuss openly.",
          },
          {
            prompt:
              "“Admittedly, the sample in the study was small. Nevertheless, its findings match those of three larger surveys.” What is the function of the first sentence?",
            options: [
              "to reject the study completely",
              "to concede a weakness before defending the study",
              "to introduce a new example",
              "to compare two different studies",
            ],
            answer: 1,
            explanation: "*Admittedly* signals a concession; *Nevertheless* then defends the findings.",
          },
          {
            prompt:
              "“Few visitors leave the gallery without stopping in the final room, where a single unfinished canvas hangs alone.” What can be inferred?",
            options: [
              "Most visitors stop in the final room.",
              "Visitors are not allowed to enter the final room.",
              "The gallery mainly shows unfinished paintings.",
              "The canvas is the most valuable painting in the gallery.",
            ],
            answer: 0,
            explanation: "*Few leave without stopping* means almost everyone stops there. Value and the rest of the collection are not mentioned.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In Yes / No / Not Given, you are judging the **writer's claims**, not facts. A statement that sounds reasonable is still Not Given if the writer never expresses that view.",
    },
    {
      exam: "ielts",
      body: "Eliminate before you choose. Cross out options that are too strong (*always, all, will*), that describe a different paragraph, or that you only know from real life. The remaining option is usually the most carefully worded one.",
    },
    {
      exam: "toefl",
      body: "In Read an Academic Passage, questions may ask what the author implies or why a detail is mentioned. Find the general claim the detail supports, and choose the option that restates that claim, not the detail itself.",
    },
  ],
  vocabulary: [
    { word: "imply", meaning: "to suggest something without saying it directly", example: "The writer implies that the policy has failed.", topic: "academic" },
    { word: "infer", meaning: "to reach a conclusion from the evidence available", example: "From the data, we can infer that sales will fall.", topic: "academic" },
    { word: "concede", meaning: "to admit that a point is true, often reluctantly", example: "She conceded that the sample was small.", topic: "academic" },
    { word: "compelling", meaning: "very convincing or interesting", example: "It is a compelling story, but it is not accurate.", topic: "academic" },
    { word: "narrative", meaning: "a story or a particular way of explaining events", example: "The heroic narrative ignores the role of assistants.", topic: "society" },
    { word: "cumulative", meaning: "increasing by adding small amounts over time", example: "Scientific progress is largely cumulative.", topic: "science" },
    { word: "self-evident", meaning: "so obvious that it needs no proof", example: "The benefits are not as self-evident as they seem.", topic: "academic" },
    { word: "sabotage", meaning: "to deliberately damage or prevent something", example: "The design was not deliberately sabotaged.", topic: "business" },
    { word: "naive", meaning: "too ready to believe that things are simple or will turn out well", example: "It would be naive to expect quick change.", topic: "society" },
    { word: "obsolescence", meaning: "the state of becoming out of date or no longer useful", example: "Planned obsolescence shortens the life of products.", topic: "technology" },
    { word: "the tide has turned", meaning: "a situation has started to change in the opposite direction", example: "After years of decline, the tide has turned for local shops.", topic: "society" },
  ],
  keyPoints: [
    "An inference must be strongly supported by the text; if the writer could say 'I never said that', reject it.",
    "Wrong options are often too strong, true but irrelevant, true only in real life, or the opposite.",
    "To find the purpose of an example, look at the general claim just before it.",
    "Evaluative words, concessions (admittedly, this is not to deny) and hedges reveal the writer's attitude.",
  ],
};

export default lesson;
