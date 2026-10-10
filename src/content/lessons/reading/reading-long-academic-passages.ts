import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-long-academic-passages",
  title: "Long academic passages",
  summary:
    "Handle long, dense academic texts with confidence: map the structure quickly, follow reference words and signposts, and deal with technical vocabulary without losing time.",
  skill: "reading",
  level: "C1",
  order: 2,
  minutes: 20,
  exams: [
    { exam: "ielts", task: "Reading – Matching headings" },
    { exam: "ielts", task: "Reading – Matching information" },
    { exam: "ielts", task: "Reading – Summary completion" },
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
  ],
  objectives: [
    "Build a quick paragraph map of a long passage before answering questions",
    "Follow reference words (this, such, the latter) and signposts across paragraphs",
    "Work out technical or unfamiliar words from definitions and context",
    "Locate specific information in a long text efficiently",
  ],
  warmUp: [
    "When you read a long article in your own language, do you read every word? What do you do instead?",
    "Which environmental problems do you know about that are invisible or hard to notice?",
  ],
  learn: [
    {
      type: "text",
      title: "Why long passages feel difficult",
      body: "The three IELTS Academic passages total 2,150–2,750 words, so a single passage is often 700–900 words long, frequently on a topic you know nothing about, with dense sentences and technical terms. The problem is rarely a single hard word. It is **losing track of the argument**: where an idea starts, where it changes direction and which paragraph contains what.\n\nThe solution is to read in two speeds. First build a **map** of the passage quickly, then read carefully **only** the parts the questions send you to.",
    },
    {
      type: "text",
      title: "Mapping a passage in three minutes",
      body: "1. Read the **title**, any subtitle and the **first paragraph** fully. They tell you the topic and often the writer's angle.\n2. For each later paragraph, read the **first sentence** (and the last one if the first is unclear). Ask: *What is this paragraph doing?* Introducing a problem, giving causes, giving evidence, describing solutions, raising doubts?\n3. Write **three to five words** per paragraph in the margin, for example *B: shipping = main cause*.\n4. Notice **turning points**: *however, yet, by contrast, not only… but*. These are where headings and inference questions usually come from.\n5. Now go to the questions. Use your map to decide which paragraph to read in detail.",
    },
    {
      type: "table",
      title: "Words that hold a long text together",
      headers: ["Type", "Examples", "What to do"],
      rows: [
        ["Reference words", "this, these, such, the former / the latter, it, which", "Look back and find exactly what they replace"],
        ["Summary nouns", "this process, the problem, such measures, this trend", "They sum up the previous idea; the noun tells you its category"],
        ["Contrast signals", "however, yet, by contrast, although, whereas", "The important point is usually after the signal"],
        ["Addition and sequence", "moreover, not only… but also, meanwhile, first, finally", "A new point in the same direction"],
        ["Definitions", "known as, called, that is, a dash or colon after a term", "The writer explains the technical word for you"],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Technical words are usually explained in the passage, or they are not needed to answer the questions. If a word is not defined, decide only whether it is positive or negative and keep reading. You can also check the glossary that IELTS sometimes gives at the end of a passage.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "Listening beneath the waves",
      labelled: true,
      paragraphs: [
        "To human ears, the deep ocean seems a place of near-total silence. In reality, it is anything but. Sound travels roughly four times faster in water than in air and can carry for hundreds of kilometres with little loss of energy, so the sea is full of noise: the crackle of snapping shrimp, the rumble of underwater earthquakes and the long, low calls of whales, some of whose songs last for hours and are repeated, with slight changes, throughout a breeding season. For many marine animals, which live where light fades within a few hundred metres of the surface, sound is not merely useful but essential. It is how they find food, avoid predators, navigate and locate mates.",
        "Over the past century, however, this acoustic environment has been transformed by human activity. The most widespread source of noise is commercial shipping. Most of the sound produced by a large vessel comes from cavitation: the formation and collapse of tiny bubbles around its propeller as it turns. The resulting noise is concentrated at low frequencies, precisely the range used by many large whales to communicate. Measurements taken in some busy shipping regions suggest that background noise at these frequencies rose markedly during the second half of the twentieth century, roughly in line with the growth of global trade.",
        "Shipping is not the only culprit. Seismic surveys, used to search for oil and gas beneath the seabed, involve firing powerful blasts of compressed air at regular intervals, sometimes for weeks at a time. The construction of offshore wind farms, ironically a cornerstone of efforts to reduce carbon emissions, requires steel foundations to be hammered into the seabed, a process known as pile driving, which produces intense bursts of sound. Even recreational boats, though individually far quieter than cargo ships, can dominate the soundscape of busy coastal waters in summer. Military sonar, though less widespread, has been linked to several mass strandings of whales.",
        "Establishing exactly how this noise affects marine life has proved difficult. Scientists cannot easily observe animals in the open ocean, and it is rarely possible to compare a noisy area with an otherwise identical quiet one. Occasionally, however, events have provided an unplanned experiment. In the days after the September 2001 attacks in the United States, shipping traffic off the east coast of Canada fell sharply. Researchers who happened to be studying a population of endangered whales there found that levels of stress-related hormones in the animals were noticeably lower than at the same time in other years. A similar opportunity arose in 2020, when the pandemic briefly reduced shipping in many regions, allowing scientists to record what some called a 'quieter ocean'.",
        "The evidence that has accumulated points to a range of effects. Some whales have been recorded calling louder, more slowly or at different pitches when ships pass, much as people raise their voices in a crowded restaurant. Others appear to stop calling altogether. Young fish, which rely on the sounds of coral reefs to find a place to settle, can be confused by boat noise, and experiments have shown that some fish exposed to noise are slower to respond to predators. Not every species seems to be affected, however, and the long-term consequences for whole populations remain uncertain.",
        "Unlike many forms of pollution, noise has one significant advantage: it disappears almost as soon as its source is removed. This makes it, in principle, one of the more tractable environmental problems. Ships can be fitted with quieter propellers, or simply made to travel more slowly, and some ports now offer reduced fees to vessels that slow down or meet noise targets. At wind-farm sites, curtains of air bubbles released around the foundations during construction can absorb a considerable proportion of the sound. International guidelines on reducing underwater noise from ships have also been published, although they are voluntary.",
        "Whether such measures will be adopted widely enough to make a difference is less certain. Quieter technology often costs more, and there is no binding international limit on how much noise a ship may produce. Yet the direction of the research is clear. For decades, the ocean was treated as somewhere sound simply vanished. Scientists are only beginning to understand how many creatures were listening.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader maps it",
      body: "A strong reader spends about three minutes on the first paragraph and the first sentence of each other paragraph, and writes a short map:\n\n- **A**: ocean is noisy; sound essential for marine animals\n- **B**: *however* → humans changed it; shipping = main source (cavitation)\n- **C**: *not the only culprit* → other sources: seismic, wind farms, sonar\n- **D**: effects hard to prove → 'unplanned experiments' (2001, 2020)\n- **E**: evidence of effects (whales, fish); long-term unclear\n- **F**: noise can be reversed → solutions\n- **G**: doubts about adoption; conclusion\n\n**Following the links.** *This acoustic environment* (B) sums up paragraph A. *Shipping is not the only culprit* (C) tells you that C adds more sources. *Such measures* (G) refers to all the solutions in F.\n\n**Unknown words.** *Cavitation* is defined straight after the colon. *Tractable* is not defined, but the sentence before calls noise's quick disappearance a *significant advantage*, and F then lists solutions, so *tractable* must mean something like *possible to deal with*. That is enough to answer any question about it.",
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Cities that cook: understanding the urban heat island",
      labelled: true,
      paragraphs: [
        "On a still summer evening, the centre of a large city can be several degrees warmer than the surrounding countryside. This phenomenon, known as the urban heat island, was first described in the early nineteenth century by Luke Howard, an amateur meteorologist who compared temperature readings taken in London with those from nearby rural areas. What Howard observed with a handful of thermometers has since been confirmed by satellites, weather stations and, increasingly, sensors carried by volunteers on bicycles and buses. The resulting maps reveal differences not only between city and countryside but between one street and the next.",
        "The causes are now well understood. Dark surfaces such as asphalt roads and roofs absorb a large share of the sunlight that falls on them and release the stored heat slowly after sunset, which is why the difference between city and countryside is usually greatest at night rather than during the day. Tall buildings trap heat between them and reduce the wind that might otherwise carry it away. Vehicles, air-conditioning units and industrial processes add heat of their own. Meanwhile, the vegetation that cools rural areas by releasing water vapour, a process called evapotranspiration, is largely absent from dense urban centres.",
        "For much of the twentieth century, the heat island was treated as a curiosity of interest mainly to climatologists. That view has changed dramatically. As average temperatures rise and heatwaves become more frequent, the extra warmth of cities has become a serious public health concern. Extreme heat places strain on the heart and kidneys, and the groups most at risk, older people, young children and those with existing health conditions, often live in crowded urban neighbourhoods. During severe heatwaves, deaths in cities have risen well above normal levels, frequently among people living alone in poorly ventilated flats.",
        "The burden is not shared equally even within a single city. Studies in several countries have found that low-income districts are frequently hotter than wealthier ones, sometimes by a substantial margin. The reasons are partly historical: poorer areas tend to have fewer parks and street trees, more industrial land and more densely packed housing. Residents of these areas are also less likely to own air conditioning or to be able to afford the electricity to run it, which means that they are exposed to the heat for longer.",
        "Fortunately, the heat island is one of the few climate-related problems that cities can tackle largely on their own. The most widely recommended measure is planting trees, which provide shade and cool the air around them. Green roofs, covered with soil and plants, insulate buildings and lower the temperature of the roof surface. A cheaper alternative is to paint roofs and pavements in light colours, so that they reflect rather than absorb sunlight. Even small 'pocket parks' on empty plots of land can lower temperatures in the streets immediately around them. Some cities have also opened up rivers that had been covered over in previous centuries, recreating cool corridors through the urban landscape.",
        "Each approach has its limitations, however. Trees take years to mature and need water, which may be scarce precisely when they are most needed. Reflective surfaces can create glare and, if placed carelessly, may bounce heat onto nearby walls and pedestrians. Green roofs are expensive to install and maintain, and many older buildings cannot support their weight without structural reinforcement. For these reasons, researchers generally argue that no single measure is sufficient, and that the most effective strategies combine several approaches, chosen to suit local conditions.",
        "Perhaps the greatest obstacle, though, is not technical but organisational. Responsibility for streets, buildings, parks and public health is often divided among different departments, each with its own budget and priorities. A city that wants to reduce its heat island must persuade planners, engineers, health officials and private landlords to work towards a common goal, and must do so over decades rather than electoral cycles. Some of the cities that have made the most progress have appointed a single official or team with clear responsibility for heat.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        labels: "roman",
        title: "Matching headings",
        instructions:
          "Read “Cities that cook”. Choose the correct heading for each paragraph. There are more headings than paragraphs.",
        left: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E", "Paragraph F", "Paragraph G"],
        right: [
          "Unequal exposure across neighbourhoods",
          "The rising cost of air conditioning",
          "Why cities trap and produce heat",
          "The challenge of coordination",
          "A long-standing observation confirmed by modern tools",
          "Why rural areas are becoming warmer",
          "Drawbacks of individual solutions",
          "From scientific curiosity to health risk",
          "A comparison of heat islands in different countries",
          "Practical ways to cool a city",
        ],
        answer: [4, 2, 7, 0, 9, 6, 3],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Matching information",
        instructions:
          "Which paragraph contains the following information? You may use any letter more than once.",
        left: [
          "a reason why the temperature difference is greatest after dark",
          "the name of the person who first recorded the effect",
          "an example of a measure that restores a natural feature",
          "a reference to how long one solution takes to become effective",
          "a suggestion that political timescales may be too short",
          "a list of groups whose health is most at risk from extreme heat",
        ],
        right: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E", "Paragraph F", "Paragraph G"],
        answer: [1, 0, 4, 5, 6, 2],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Summary completion",
        instructions:
          "Complete the summary of paragraphs B and E. Write NO MORE THAN TWO WORDS from the passage for each answer.",
        text: "Cities are warmer than the countryside partly because dark materials such as {{0}} absorb sunlight during the day and release it after sunset. Tall buildings also reduce the {{1}}, which would otherwise remove heat. In rural areas, plants cool the air through a process known as {{2}}. To bring urban temperatures down, the measure that experts most often recommend is {{3}}. A less expensive option is to use light colours on roofs and pavements so that they {{4}} sunlight instead of absorbing it.",
        answers: [
          ["asphalt", "asphalt roads"],
          ["wind"],
          ["evapotranspiration"],
          ["planting trees"],
          ["reflect"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Reference words and meaning in context",
        instructions: "Choose the best answer. Each question refers to “Cities that cook”.",
        questions: [
          {
            prompt: "Paragraph A: “What Howard observed…” refers to…",
            options: [
              "the higher temperatures in London than in nearby rural areas",
              "the satellites used by modern meteorologists",
              "the volunteers who carry sensors on buses",
              "the weather in the early nineteenth century in general",
            ],
            answer: 0,
            explanation: "The previous sentence says Howard compared London readings with rural ones, which showed the city was warmer.",
          },
          {
            prompt: "Paragraph B: “…which is why the difference between city and countryside is usually greatest at night.” What does *which* refer to?",
            options: [
              "the fact that roads are dark",
              "the slow release of stored heat after sunset",
              "the amount of sunlight in rural areas",
              "the height of city buildings",
            ],
            answer: 1,
            explanation: "*Which* refers to the whole previous clause: dark surfaces “release the stored heat slowly after sunset”.",
          },
          {
            prompt: "Paragraph C: “That view has changed dramatically.” Which view?",
            options: [
              "that heatwaves are becoming more frequent",
              "that cities are warmer than the countryside",
              "that the heat island was mainly of interest to scientists",
              "that older people are most at risk",
            ],
            answer: 2,
            explanation: "*That view* sums up the previous sentence: the heat island was “a curiosity of interest mainly to climatologists”.",
          },
          {
            prompt: "Paragraph F: “…water, which may be scarce precisely when they are most needed.” What does *they* refer to?",
            options: ["trees", "reflective surfaces", "heatwaves", "researchers"],
            answer: 0,
            explanation: "*They* is plural, so it cannot be *water*. The sentence is about trees, which need water most during hot, dry periods.",
          },
          {
            prompt: "Paragraph G: the word *obstacle* is closest in meaning to…",
            options: ["cost", "barrier", "decision", "department"],
            answer: 1,
            explanation: "An obstacle is something that stands in the way of progress, a barrier.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Do matching headings **first** when a passage has them: the headings themselves give you a map of the text, which makes the other questions on that passage faster.",
    },
    {
      exam: "ielts",
      body: "Matching information questions do **not** follow the order of the passage, and the information is often a small detail rather than the main idea. Your paragraph map tells you where to look, but you still need to scan for the exact detail.",
    },
    {
      exam: "toefl",
      body: "In Read an Academic Passage (a text of about 200 words), some questions test how ideas are connected, for example what a word or phrase refers to. Always test your answer by putting it in place of the reference word and reading the sentence again.",
    },
  ],
  vocabulary: [
    { word: "acoustic", meaning: "connected with sound or hearing", example: "The acoustic environment of the ocean has changed.", topic: "science" },
    { word: "culprit", meaning: "the person or thing responsible for a problem", example: "Shipping is the main culprit, but not the only one.", topic: "environment" },
    { word: "cornerstone", meaning: "the most important part on which something is based", example: "Wind power is a cornerstone of the energy strategy.", topic: "environment" },
    { word: "accumulate", meaning: "to gradually increase in amount", example: "Evidence has accumulated over several decades.", topic: "academic" },
    { word: "tractable", meaning: "possible to deal with or control", example: "Noise is a more tractable problem than plastic pollution.", topic: "academic" },
    { word: "binding", meaning: "that must legally be obeyed", example: "The guidelines are voluntary, not binding.", topic: "society" },
    { word: "phenomenon", meaning: "something that happens or exists, especially one that is studied", example: "The urban heat island is a well-known phenomenon.", topic: "science" },
    { word: "disproportionately", meaning: "to a greater degree than is fair or expected", example: "Heatwaves disproportionately affect older people.", topic: "society" },
    { word: "burden", meaning: "a difficult responsibility or problem that someone has to deal with", example: "The burden of extreme heat falls mainly on poorer districts.", topic: "society" },
    { word: "structural reinforcement", meaning: "extra support added to make a building stronger", example: "Many old roofs need structural reinforcement before plants can be added.", topic: "science" },
  ],
  keyPoints: [
    "Read in two speeds: map the whole passage quickly, then read in detail only where the questions send you.",
    "A three-to-five-word note per paragraph is enough to find information later.",
    "Reference words and summary nouns link paragraphs; always check what they replace.",
    "Technical terms are usually defined in the text; otherwise, decide their general meaning and move on.",
  ],
};

export default lesson;
