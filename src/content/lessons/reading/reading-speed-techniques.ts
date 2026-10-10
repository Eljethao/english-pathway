import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-speed-techniques",
  title: "Reading faster without losing meaning",
  summary:
    "Increase your effective reading speed by previewing, reading in thought groups, predicting from signposts and changing speed according to what each sentence does. Practise on two timed academic passages and check that comprehension stays high.",
  skill: "reading",
  level: "C1",
  order: 11,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Reading – Matching headings" },
    { exam: "ielts", task: "Reading – Sentence completion" },
    { exam: "ielts", task: "Reading – True/False/Not Given" },
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
  ],
  objectives: [
    "Identify the habits that waste reading time, such as unnecessary rereading and reading every sentence at one speed",
    "Preview a long passage in about a minute to build a map of its structure",
    "Use signpost words to predict what comes next and decide where to slow down",
    "Measure your reading rate and check it against your comprehension score",
  ],
  warmUp: [
    "When you read in English, how often do you go back and reread a sentence you have just finished? Why do you do it?",
    "Do you read a novel, a news article and an exam passage at the same speed? What changes?",
  ],
  learn: [
    {
      type: "text",
      title: "What “reading faster” really means",
      body: "Most of the time lost in exam reading is not caused by slow eyes. It is caused by habits:\n\n- **Rereading out of habit**, going back to a sentence you had in fact understood\n- **Word-by-word reading**, giving the same attention to *the*, *of* and *which* as to the key nouns and verbs\n- **One speed for everything**, reading an example as slowly as a central claim\n- **Losing the thread**, reaching the end of a paragraph without knowing what it was for\n\nBe sceptical of methods that promise to multiply your speed. Research on reading suggests that skilled adults typically read non-fiction silently at roughly 200 to 300 words per minute, and that pushing far beyond this usually means understanding less. The aim of this lesson is different: to stop wasting time, so that your speed rises **while your comprehension stays the same**.",
    },
    {
      type: "table",
      title: "Four techniques",
      headers: ["Technique", "How to do it", "Why it works"],
      rows: [
        ["Preview (about 1 minute)", "Read the title, the first paragraph, the first sentence of each body paragraph and the last paragraph.", "You build a mental map, so the full reading confirms rather than discovers the structure."],
        ["Read in thought groups", "Let your eyes take in phrases (*in the late 1960s* / *after lengthy negotiations*) rather than single words.", "Meaning lives in phrases and collocations, not individual words."],
        ["Predict from signposts", "When you see *however*, *for instance* or *as a result*, decide what kind of sentence is coming before you read it.", "Prediction reduces the need to reread, because the sentence fits a slot you expected."],
        ["Change speed", "Speed up for examples, restatements and background; slow down for claims, contrasts, numbers and qualifiers.", "Exam questions target the second group far more often than the first."],
      ],
    },
    {
      type: "text",
      title: "Where to speed up and where to slow down",
      body: "**Safe to read faster:**\n\n- examples after *such as*, *for instance*, *including*\n- restatements after *in other words*, *that is*\n- narrative background and descriptive detail\n- lists, once you know what the list is of\n\n**Slow down for:**\n\n- topic sentences and concluding sentences\n- contrast and concession (*however*, *yet*, *although*, *admittedly*)\n- numbers, dates and names\n- hedges and limits (*may*, *some*, *not always*, *provided that*)\n- the writer's evaluation (*rightly*, *crucially*, *what is less disputed*)\n\nA useful rule: if a sentence could be removed without changing the argument, it is probably safe to read quickly.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Quick check: predict from the signpost",
        instructions: "What should you expect after each signpost? Match each one to its prediction.",
        left: ["In contrast,", "For instance,", "Admittedly,", "Consequently,", "In other words,", "Crucially,"],
        right: [
          "a result of what came before",
          "a key point: slow down",
          "a restatement of the last idea: read faster",
          "a different or opposite point",
          "a weakness the writer accepts",
          "an example of the last point: read faster",
        ],
        answer: [3, 5, 4, 0, 2, 1],
      },
    },
    {
      type: "tip",
      exam: "ielts",
      body: "IELTS Academic Reading has three long texts totalling 2,150–2,750 words and 40 questions in 60 minutes. That leaves no time to read every passage slowly twice. One efficient preview followed by targeted careful reading is usually faster than a slow full read followed by searching.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "Model paragraph: why cities plant street trees",
      paragraphs: [
        "City authorities plant street trees for many reasons, but their effect on temperature has become the most important. Trees cool streets in two ways. They provide shade, for instance over pavements, car parks and the walls of buildings, and they release water vapour through their leaves, which cools the surrounding air. In other words, a tree works as both a sunshade and a small natural air conditioner. However, the benefit is not equal everywhere. In narrow streets with tall buildings, dense tree canopies can trap warm air at street level at night, so planners must choose species and spacing with care. Crucially, the cooling effect depends on the trees being healthy: a tree that is short of water releases far less vapour.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader varies speed through the paragraph",
      body: "- **Slow:** *City authorities plant street trees for many reasons, but their effect on temperature has become the most important.* This is the topic sentence: the paragraph is about **cooling**.\n- **Slow:** *Trees cool streets in two ways.* A number tells you to expect two points.\n- **Fast:** *They provide shade, for instance over pavements, car parks…* The examples after *for instance* only illustrate point 1.\n- **Medium:** *…and they release water vapour through their leaves* is point 2.\n- **Fast:** *In other words, a tree works as both a sunshade and…* is a restatement. You already know this.\n- **Slow:** *However, the benefit is not equal everywhere.* A contrast and a limit: questions love these.\n- **Medium:** the narrow-street detail explains the limit.\n- **Slow:** *Crucially…* signals the key condition: trees must be **healthy** (well watered).\n\nA strong reader spends most of the time on four sentences out of seven, and can still answer any question about the paragraph without rereading it.",
    },
    {
      type: "table",
      title: "Measure your reading rate",
      headers: ["Step", "What to do"],
      rows: [
        ["1", "Start the passage timer and read the passage once, as fast as you can while still following the argument."],
        ["2", "Note how many minutes and seconds you needed. Then answer the questions without rereading the whole text."],
        ["3", "Rate = number of words ÷ minutes. Passage 1 has about 580 words: 3 minutes = just under 200 words per minute."],
        ["4", "Compare your rate with your score. A higher rate with a lower score means you went too fast; a high score with a very low rate means you can afford to speed up."],
      ],
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Passage 1: The box that changed the world",
      labelled: true,
      timerMinutes: 4,
      paragraphs: [
        "In April 1956, a converted oil tanker called the Ideal X left the port of Newark, New Jersey, bound for Houston. On its deck were fifty-eight large metal boxes. The voyage attracted little attention at the time, yet it is now often described as the beginning of a revolution in world trade. The man behind it, a trucking entrepreneur named Malcolm McLean, had grasped a simple idea: goods could be moved far more efficiently if they were packed once, at the factory, and not unpacked again until they reached their destination.",
        "Before containers, most cargo was handled as “break-bulk”: sacks, barrels, crates and bundles of every size, loaded and unloaded piece by piece. A single ship could carry many thousands of separate items, each of which had to be counted, lifted and stowed. A cargo ship might spend almost as long in port as it did at sea, while teams of dockworkers carried goods between the quay and the hold. The process was slow, labour-intensive and costly, and theft and damage were common. For many goods, loading and unloading made up a large share of the total cost of shipping, so that distance mattered less than the number of times cargo had to be handled.",
        "The container did not succeed immediately. Ports, railways and trucking firms had invested heavily in the old methods, and dockworkers' unions, fearing for their members' jobs, resisted the change. Equally serious was the absence of common standards. Early shipping companies used boxes of different sizes and with different fittings, which meant that a container belonging to one company could not easily be carried by another's ships or lifted by its cranes. It was only in the late 1960s, after lengthy negotiations, that international standards for container dimensions and corner fittings began to be widely adopted.",
        "Once standardisation was achieved, the effects were dramatic. Specialised ships carrying thousands of containers could be loaded and unloaded in a fraction of the time previously required, and the same box could move from ship to train to truck without its contents being touched. The cost of moving goods across oceans fell sharply. Ports that had once needed hundreds of workers to unload a single vessel could now do the job with a small crew operating giant cranes. Manufacturers no longer needed to be located near their customers, and supply chains began to stretch across continents, with components made in one country, assembled in a second and sold in a third.",
        "The benefits were not evenly shared. Container ships required deep water, large areas of flat land for storing boxes, and good road and rail connections, which many historic city-centre docks could not provide. In cities such as London and New York, traditional docks declined as new container terminals were built elsewhere, and employment in port work fell steeply. Neighbourhoods that had depended on the waterfront for generations experienced long periods of economic decline. Some of these areas have since been redeveloped as housing, offices and leisure districts, but the change took decades.",
        "Economists still debate how much of the growth in world trade since the 1960s should be attributed to the container, as opposed to falling tariffs and other developments. What is less disputed is that the humble metal box changed not only how goods travel but where they are made. In that sense, its influence extends well beyond the docks: much of the modern global economy has been shaped by a technology that most consumers never think about.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Questions 1–6: Matching headings",
        instructions:
          "Preview the passage first (about one minute), then read it once at your fastest comfortable speed. Choose the correct heading for each paragraph from the list (i–viii). There are two headings you do not need.",
        labels: "roman",
        left: ["1. Paragraph A", "2. Paragraph B", "3. Paragraph C", "4. Paragraph D", "5. Paragraph E", "6. Paragraph F"],
        right: [
          "Obstacles that slowed the new system",
          "A voyage that marked a turning point",
          "An old and inefficient way of handling cargo",
          "Winners and losers in port cities",
          "Lower costs and production spread across the globe",
          "An influence larger than it appears",
          "How modern container ships are designed",
          "Daily life for dockworkers before 1956",
        ],
        answer: [1, 2, 0, 4, 3, 5],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Questions 7–10: Did you keep the meaning?",
        instructions:
          "Answer from what you remember first. Look back only at the paragraph named in the question, and only if you need to.",
        questions: [
          {
            prompt: "7. According to paragraph B, why did distance matter relatively little before containers?",
            options: [
              "Most ships travelled only short distances.",
              "Handling cargo accounted for much of the cost of shipping.",
              "Fuel was cheap compared with dockworkers' wages.",
              "Goods were rarely damaged on long voyages.",
            ],
            answer: 1,
            explanation: "“loading and unloading made up a large share of the total cost of shipping, so that distance mattered less than the number of times cargo had to be handled.” D contradicts the statement that theft and damage were common.",
          },
          {
            prompt: "8. In paragraph C, what problem was “equally serious” as resistance from industry and unions?",
            options: [
              "The high cost of building new ships",
              "The lack of agreed container sizes and fittings",
              "A shortage of trained crane operators",
              "Government rules against foreign containers",
            ],
            answer: 1,
            explanation: "“Equally serious was the absence of common standards”: boxes had different sizes and fittings. This sentence is a contrast-and-addition point, exactly the kind to read slowly.",
          },
          {
            prompt: "9. According to paragraph E, why did many historic docks decline?",
            options: [
              "Their workers refused to handle containers.",
              "They lacked the space, deep water and transport links that container ships needed.",
              "They were redeveloped as housing before containers arrived.",
              "Trade moved from ships to aircraft.",
            ],
            answer: 1,
            explanation: "Container ships needed “deep water, large areas of flat land… and good road and rail connections, which many historic city-centre docks could not provide.”",
          },
          {
            prompt: "10. In paragraph F, what does the writer say is still debated?",
            options: [
              "Whether containers reduced shipping costs",
              "How far the container, rather than other factors, explains the growth in trade",
              "Who invented the shipping container",
              "Whether consumers are aware of global supply chains",
            ],
            answer: 1,
            explanation: "“Economists still debate how much of the growth… should be attributed to the container, as opposed to falling tariffs and other developments.” A is presented as fact in paragraph D.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Passage 2: The forests that defend the coast",
      labelled: true,
      timerMinutes: 4,
      paragraphs: [
        "Along tropical and subtropical coastlines, in the narrow zone between high and low tide, grow forests in conditions that few other trees could survive. Mangroves tolerate salt water, waterlogged mud that contains little oxygen, and flooding by the tide once or twice a day. They manage this through a range of adaptations. Some species filter out most of the salt at their roots; others excrete it through their leaves. Many produce aerial roots that rise above the mud and allow the tree to take in oxygen directly from the air. Others produce seeds that begin to grow while still attached to the parent tree, so that they can take root quickly when they drop into the mud.",
        "For much of the twentieth century, mangroves were widely seen as unproductive swamps, and large areas were cleared for agriculture, aquaculture and coastal development. Shrimp farming alone was responsible for extensive losses in parts of South-East Asia and Latin America. Only relatively recently has the value of these forests been widely recognised, and it is a value that extends far beyond the trees themselves.",
        "The dense network of roots acts as a natural barrier against the sea. As waves pass through a mangrove forest, they lose energy, so the water reaching the shore is calmer than it would otherwise be. The roots also trap fine sediment carried by rivers and tides, which helps to stabilise the shoreline and reduce erosion. Studies after storms in several countries have reported that villages behind healthy mangroves suffered less damage than nearby areas where the forests had been removed, although the degree of protection depends on the width of the forest and the strength of the storm. Unlike a concrete sea wall, a mangrove forest can repair itself and, as sediment collects among its roots, may even gain height as sea levels rise, provided the rise is gradual.",
        "Mangroves are also remarkably efficient at storing carbon. Because their waterlogged soils contain little oxygen, dead leaves and roots decompose very slowly, and organic material accumulates over centuries. Per hectare, mangrove forests can hold several times as much carbon as many tropical forests on dry land, most of it in the soil rather than in the trees. When mangroves are cleared, much of this stored carbon may be released into the atmosphere. For this reason, mangroves have become a focus for programmes that aim to reduce emissions by protecting natural ecosystems.",
        "The forests support coastal livelihoods as well. Their sheltered waters serve as nurseries for many species of fish and shellfish, which spend their early lives among the roots before moving to the open sea, and local communities harvest timber, honey and other products. Restoration projects have multiplied in response, but with mixed results. Planting seedlings is straightforward; ensuring that they survive is not. Projects that planted trees where mangroves had never grown, such as on mudflats that are too low in the tidal zone, have often failed, whereas those that restored the natural flow of water to former mangrove sites have generally been more successful.",
        "Mangroves are not a complete substitute for engineered defences, and they cannot protect every coast. But they offer a combination of benefits that no sea wall can match, and their protection is increasingly seen as a sound investment rather than an obstacle to development. Increasingly, engineers are combining the two, placing belts of mangroves in front of lower sea walls.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "Questions 11–17: Sentence completion",
        instructions:
          "Read Passage 2 once, using your preview and speed techniques. Then complete the sentences. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        text: "11. Some species of mangrove get rid of salt through their {{0}}.\n12. Aerial roots allow the trees to take in {{1}} directly from the air.\n13. In parts of South-East Asia and Latin America, {{2}} caused extensive mangrove losses.\n14. How well mangroves protect the coast during a storm depends partly on the {{3}} of the forest.\n15. Most of the carbon held in mangrove forests is stored in the {{4}}.\n16. Young fish and shellfish use the sheltered waters among the roots as {{5}}.\n17. Restoration has generally been more successful when the natural {{6}} of water to a former site has been restored.",
        answers: [
          ["leaves"],
          ["oxygen"],
          ["shrimp farming"],
          ["width"],
          ["soil"],
          ["nurseries"],
          ["flow"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "tfng",
        title: "Questions 18–23: True / False / Not Given",
        instructions: "Do the following statements agree with the information in Passage 2? Choose True, False or Not Given.",
        statements: [
          {
            text: "18. Mangroves are able to grow in soil that is low in oxygen.",
            answer: "T",
            explanation: "Paragraph A: they tolerate “waterlogged mud that contains little oxygen”.",
          },
          {
            text: "19. Mangroves were highly valued for most of the twentieth century.",
            answer: "F",
            explanation: "Paragraph B: they “were widely seen as unproductive swamps” and their value was recognised only “relatively recently”.",
          },
          {
            text: "20. Restoring a mangrove forest costs less than building a concrete sea wall.",
            answer: "NG",
            explanation: "The passage compares mangroves and sea walls in terms of benefits and self-repair, but it gives no costs.",
          },
          {
            text: "21. A healthy mangrove forest may be able to keep up with a slow rise in sea level.",
            answer: "T",
            explanation: "Paragraph C: it “may even gain height as sea levels rise, provided the rise is gradual”.",
          },
          {
            text: "22. Honey is the most valuable product that communities harvest from mangroves.",
            answer: "NG",
            explanation: "Paragraph E lists timber, honey and other products but does not compare their value.",
          },
          {
            text: "23. Planting the seedlings is the most difficult part of restoring a mangrove forest.",
            answer: "F",
            explanation: "Paragraph E: “Planting seedlings is straightforward; ensuring that they survive is not.” The difficult part is keeping the young trees alive.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Preview before you answer matching headings: the first and last sentences of each paragraph usually reveal its main idea, and your map of the passage will speed up every later question. But don't answer detail questions from the preview alone; read the relevant sentence carefully, especially if it contains *however*, *only* or a number.",
    },
    {
      exam: "ielts",
      body: "Answers to sentence completion and True/False/Not Given usually come in passage order. Once you have read the passage at speed, use that order and your mental map to go straight to the right paragraph instead of rereading from the beginning.",
    },
    {
      exam: "toefl",
      body: "Read an Academic Passage texts are short (about 200 words), so read the whole passage once before the questions, using thought groups and signposts. One efficient reading is faster than answering each question by searching an unread text.",
    },
  ],
  vocabulary: [
    { word: "entrepreneur", meaning: "a person who starts a business and takes financial risks to do so", example: "The entrepreneur sold her first company at the age of 30.", topic: "business" },
    { word: "labour-intensive", meaning: "needing a lot of human work", example: "Picking fruit by hand is extremely labour-intensive.", topic: "work" },
    { word: "standardisation", meaning: "the process of making things the same size, type or quality", example: "Standardisation of plugs would make travel much easier.", topic: "technology" },
    { word: "supply chain", meaning: "the series of companies and steps involved in making and delivering a product", example: "The shortage of chips disrupted supply chains worldwide.", topic: "business" },
    { word: "attribute (to)", meaning: "to say that something is caused by a particular thing", example: "The fall in crime was attributed to better street lighting.", topic: "academic" },
    { word: "tariff", meaning: "a tax on goods coming into or going out of a country", example: "The government lowered tariffs on imported machinery.", topic: "business" },
    { word: "waterlogged", meaning: "so full of water that no more can be absorbed", example: "The match was cancelled because the pitch was waterlogged.", topic: "environment" },
    { word: "excrete", meaning: "to get rid of a waste substance from the body or a plant", example: "Some seabirds excrete excess salt through glands near their eyes.", topic: "science" },
    { word: "decompose", meaning: "to be broken down slowly by natural processes", example: "Food waste decomposes quickly in warm weather.", topic: "science" },
    { word: "livelihood", meaning: "the way a person earns the money they need to live", example: "Fishing is the main livelihood in the village.", topic: "society" },
    { word: "thought group", meaning: "a short phrase that is read or spoken as one unit of meaning", example: "Reading in thought groups reduces the number of eye stops per line.", topic: "education" },
  ],
  keyPoints: [
    "Speed comes mainly from removing wasteful habits, not from moving your eyes faster.",
    "Preview in about a minute: title, first paragraph, first sentence of each paragraph, last paragraph.",
    "Read in thought groups and use signposts to predict what comes next.",
    "Speed up for examples, restatements and background; slow down for claims, contrasts, numbers and hedges.",
    "Measure your rate and your score together: the right speed is the fastest one at which your score does not fall.",
  ],
};

export default lesson;
