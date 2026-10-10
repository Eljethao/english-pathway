import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-note-table-flowchart",
  title: "Note, table and flow-chart completion",
  summary:
    "Complete IELTS notes, tables and flow-charts with words copied exactly from the passage, using headings to predict the answer and checking every word limit.",
  skill: "reading",
  level: "B2",
  order: 8,
  minutes: 25,
  exams: [{ exam: "ielts", task: "Reading – Note, table and flow-chart completion" }],
  objectives: [
    "Use the title, headings and layout of notes, tables and flow-charts to find the right part of the passage",
    "Predict the type of word each gap needs before reading the passage",
    "Copy answers exactly from the passage and keep to word limits such as NO MORE THAN TWO WORDS",
    "Follow the stages of a process to complete a flow-chart",
  ],
  warmUp: [
    "When you take notes, what kinds of words do you write down, and what do you leave out?",
    "Think of a process you know well, such as making bread or recycling a bottle. What are its main stages?",
  ],
  learn: [
    {
      type: "text",
      title: "Three layouts, one task",
      body: "In this IELTS task, part of the passage is turned into **notes**, a **table** or a **flow-chart**, and some words are missing. You fill each gap with words from the passage.\n\n- **Notes** follow the main ideas of one section, often with headings and bullet points.\n- A **table** compares several things (methods, places, periods) under column headings such as *advantage* or *disadvantage*.\n- A **flow-chart** shows the stages of a process, linked by arrows.\n\nIn **summary completion** (lesson 3) you completed a paragraph of full sentences. Here the text is short and note-like, so you often lose grammar clues such as articles and verbs. The layout gives you new clues instead: the headings tell you **what kind of information** goes in each gap, and the arrows tell you the **order** of a process.\n\nThe answers usually come from one section of the passage. A flow-chart normally follows the order of the process, but notes and tables do not always follow the order of the text exactly.",
    },
    {
      type: "table",
      title: "The rules for your answers",
      headers: ["Rule", "What it means", "Example"],
      rows: [
        ["Copy from the passage", "Use the exact words of the text. Do not change the word form or use a synonym.", "Text: *its reliability*. Gap: Main advantage: ____ → **reliability**, not *reliable*"],
        ["Keep to the word limit", "NO MORE THAN TWO WORDS means one or two words. Three words is wrong, even if the meaning is right.", "*the metal screens* = three words ✗; *metal screens* ✓"],
        ["Numbers", "AND/OR A NUMBER means you may add a number. Digits are fine.", "*eleven* or *11*"],
        ["Hyphenated words", "The official IELTS description says a hyphenated word such as *check-in* counts as one word.", "*hand-painted maps* = two words"],
        ["Spelling", "A misspelled answer is marked wrong, so copy carefully.", "*sedimentation*, not *sedimantation*"],
      ],
    },
    {
      type: "text",
      title: "A five-step method",
      body: "1. Read the **title** and **headings** first. They tell you which part of the passage to look in.\n2. For each gap, predict the **type of word**: a noun, a plural noun, a verb form, a number, a place?\n3. Look for **anchor words** near the gap (names, numbers, technical terms) and scan for them or their synonyms.\n4. Read that part carefully and choose words that fit both the **meaning** and the **grammar** of the gap.\n5. Check: Is it copied exactly? Is it within the word limit? Does it repeat a word that is already next to the gap?",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Check the word limit",
        instructions: "Read each instruction, sentence from a passage and gap. Choose the answer that follows the rules.",
        questions: [
          {
            prompt: "ONE WORD ONLY. Text: “The bricks were dried in the sun for several weeks.” Gap: Bricks dried in the ____ for weeks.",
            options: ["the sun", "sun", "sunshine", "sunlight"],
            answer: 1,
            explanation: "*The sun* is two words. *Sunshine* and *sunlight* do not appear in the text: answers must be copied from the passage.",
          },
          {
            prompt: "ONE WORD AND/OR A NUMBER. Text: “The bridge took eleven years to complete and opened in 1932.” Gap: Construction time: ____ years.",
            options: ["eleven years", "about eleven", "11", "1932"],
            answer: 2,
            explanation: "*11* (or *eleven*) fits. *Eleven years* repeats the word after the gap, *about eleven* is two words, and 1932 is the year it opened.",
          },
          {
            prompt: "ONE WORD ONLY. Text: “The main advantage of the new system is its reliability.” Table cell: Main advantage: ____",
            options: ["reliable", "reliably", "reliability", "trust"],
            answer: 2,
            explanation: "Copy the word from the text. Do not change *reliability* into *reliable*, even if it seems to fit, and do not use a synonym such as *trust*.",
          },
          {
            prompt: "NO MORE THAN TWO WORDS. Text: “The seeds are then soaked in warm water overnight.” Flow-chart: Seeds are ____ in warm water.",
            options: ["soak", "soaking", "are soaked", "soaked"],
            answer: 3,
            explanation: "After *are*, the passive needs the past participle *soaked*. *Are soaked* repeats *are*, which is already in the flow-chart.",
          },
          {
            prompt: "NO MORE THAN TWO WORDS. Text: “The collection includes more than 300 hand-painted maps.” Notes: Collection: over 300 ____. A learner writes *hand-painted maps*. Is the answer within the limit?",
            options: [
              "Yes: a hyphenated word counts as one word, so this is two words.",
              "No: it is three words.",
              "No: hyphenated words are not allowed in answers.",
              "Yes, but only if the word “maps” is removed.",
            ],
            answer: 0,
            explanation: "IELTS counts a hyphenated word as one word, so *hand-painted maps* is two words and is within the limit. The number 300 is already printed in the notes, so do not write it again.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "passage",
      title: "Making river water safe to drink",
      labelled: true,
      paragraphs: [
        "Most of the tap water in large cities begins its journey in a river, lake or reservoir. Although it may look clean, this water contains soil particles, tiny organisms and sometimes chemicals from farms and roads, so it must pass through several stages of treatment before it reaches people's homes.",
        "The first stage is screening. As water is drawn from the river, it passes through metal screens that remove large objects such as branches, leaves and plastic litter. Fish are kept out in the same way. The water is then pumped to the treatment plant.",
        "At the plant, chemicals called coagulants are added and mixed in quickly. Very fine particles of dirt carry a small electric charge, which keeps them apart; the coagulants cancel out this charge, so the particles begin to stick together. The water is then stirred gently for around half an hour, and the particles join to form larger, heavier clumps known as flocs.",
        "Next comes sedimentation. The water flows slowly through large tanks, where the flocs sink to the bottom and form a layer of sludge that is removed regularly. By the time the water leaves these tanks, most of the solid material has gone, but very small particles and many microorganisms remain.",
        "To remove these, the water is passed through filters made of layers of sand and gravel, and in some plants also charcoal, which helps to remove unpleasant tastes and smells. The filters gradually become blocked, so they are cleaned by pumping water backwards through them, a process called backwashing.",
        "The final stage is disinfection, which kills any bacteria and viruses that have survived. Most plants use chlorine, although some use ultraviolet light or ozone instead. A small amount of chlorine is often left in the water deliberately, so that it continues to protect the water as it travels through many kilometres of pipes. The treated water is then stored in covered reservoirs or water towers until it is needed.",
        "Throughout the process, samples are taken and tested in laboratories, and in many countries the results must be reported to a government regulator. If a problem is found, the plant can change the amount of chemicals it uses or stop taking water from a particular source until the cause has been identified.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader completes the notes",
      body: "**Notes:** Water treatment. Source of water: a river, lake or **(a)** ____. Storage after treatment: covered reservoirs or water **(b)** ____. Write NO MORE THAN TWO WORDS for each answer.\n\n**(a)** The gap follows *river, lake or*, so it must be another place where water is found: a singular noun. Paragraph A begins with the same list: “a river, lake or **reservoir**”. → **reservoir**\n\n**(b)** The heading *Storage* is the anchor. Scan for *stored*: the last sentence of paragraph F says “stored in covered reservoirs or water **towers**”. The gap needs a plural noun after *water*, so → **towers**. Writing *water towers* would repeat the word already in the notes.\n\nIn the next exercise, notice how the headings (*Screening*, *Sedimentation*, *Disinfection*…) match the stages in the passage. Use them as a map: each heading tells you which paragraph to read.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Your turn: note completion",
        instructions: "Use the passage “Making river water safe to drink”. Complete the notes. Write NO MORE THAN TWO WORDS from the passage for each answer.",
        text: "Treating drinking water\n\nScreening\n- metal screens remove branches, leaves and plastic {{0}}\n\nCoagulation\n- coagulants cancel the electric {{1}} on dirt particles\n- gentle stirring: particles join to form larger clumps called {{2}}\n\nSedimentation\n- flocs sink and form a layer of {{3}} at the bottom of the tanks\n\nFiltration\n- filters contain sand, gravel and, in some plants, {{4}}\n- filters are cleaned by {{5}}\n\nDisinfection\n- usually chlorine; alternatives are ultraviolet light or {{6}}\n- some chlorine is left in the water to protect it in the {{7}}",
        answers: [
          ["litter"],
          ["charge"],
          ["flocs"],
          ["sludge"],
          ["charcoal"],
          ["backwashing"],
          ["ozone"],
          ["pipes"],
        ],
      },
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Storing electricity from the wind and sun",
      labelled: true,
      timerMinutes: 8,
      paragraphs: [
        "Wind turbines and solar panels produce electricity only when the wind blows or the sun shines, and this does not always match the times when people need power. A cold, still evening, for example, may bring high demand but little wind and no sunshine. For this reason, electricity networks that rely heavily on renewable energy need ways of storing surplus power and releasing it later. Three very different technologies are used.",
        "The oldest is pumped hydroelectric storage, which has provided most of the world's large-scale storage for decades. It uses two reservoirs at different heights. When there is spare electricity, it is used to pump water from the lower reservoir to the upper one; when demand rises, the water is allowed to flow back down through turbines, which generate electricity again. A single plant can store enormous amounts of energy and can operate for fifty years or more. Its main limitation is geography: it needs hills or mountains and large areas of land, and building a new plant can take many years.",
        "Batteries work in a completely different way. Large banks of lithium-ion batteries, similar to those in electric cars but on a far bigger scale, store energy chemically. Their greatest strength is speed: they can respond to a sudden change in demand in a fraction of a second, which helps to keep the network stable. Their costs have fallen sharply in recent years. However, most battery systems are designed to supply power for only a few hours, and their performance gradually declines as they are charged and discharged thousands of times.",
        "A third option, compressed air storage, uses spare electricity to pump air into large underground spaces, such as old salt caverns. When power is needed, the air is released, heated and used to drive a turbine. Because suitable caverns can hold huge volumes of air, this method can store energy for long periods. Its weakness is efficiency: compressing air produces heat, and unless that heat is captured and stored, a large share of the original energy is lost. Only a small number of such plants exist.",
        "No single technology is likely to meet every need. Batteries are well suited to balancing the network from minute to minute, while pumped hydro and compressed air may be more useful for storing energy over days. Engineers expect future networks to combine several methods.",
      ],
    },
    {
      type: "table",
      title: "Table: three ways to store electricity",
      headers: ["Method", "How it works", "Main advantage", "Main disadvantage"],
      rows: [
        ["Pumped hydro", "water pumped to the upper reservoir, then flows back down through **(1)** ______", "can operate for **(2)** ______ years or more", "limited by **(3)** ______"],
        ["Lithium-ion batteries", "store energy **(4)** ______", "very fast response helps to keep the network **(5)** ______", "most supply power for only a few **(6)** ______"],
        ["Compressed air", "air stored in underground spaces, e.g. old salt **(7)** ______", "can store energy for long periods", "heat from compression can reduce its **(8)** ______"],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Practice 1: table completion",
        instructions: "Complete the table above. Write ONE WORD AND/OR A NUMBER from the passage for each answer.",
        text: "(1) Pumped hydro: water flows back down through {{0}}\n(2) Pumped hydro: can operate for {{1}} years or more\n(3) Pumped hydro: limited by {{2}}\n(4) Batteries: store energy {{3}}\n(5) Batteries: fast response helps to keep the network {{4}}\n(6) Batteries: most supply power for only a few {{5}}\n(7) Compressed air: stored in old salt {{6}}\n(8) Compressed air: heat from compression can reduce its {{7}}",
        answers: [
          ["turbines"],
          ["fifty", "50"],
          ["geography"],
          ["chemically"],
          ["stable"],
          ["hours"],
          ["caverns"],
          ["efficiency"],
        ],
      },
    },
    {
      type: "passage",
      title: "How paper is recycled",
      labelled: true,
      timerMinutes: 8,
      paragraphs: [
        "Paper is one of the most widely recycled materials, but turning a pile of used office paper and old newspapers into clean new sheets is a surprisingly complex industrial process.",
        "It begins with collection. Paper from homes, offices and businesses is taken to a recycling facility, where it is sorted into different grades. Cardboard, newspaper and high-quality office paper contain fibres of different lengths and are used for different products, so mixing them lowers the quality of the final paper. The sorted paper is pressed into large bales and transported to a paper mill.",
        "At the mill, the bales are broken up and dropped into a huge tank called a pulper, where the paper is mixed with water and stirred until it breaks down into individual fibres. The result is a thick, wet mixture known as pulp. This pulp still contains many unwanted materials, such as staples, plastic tape and glue, so it is forced through screens with small holes and then spun in cleaners that throw out heavier items such as small pieces of metal.",
        "The next challenge is removing ink. In the most common method, called flotation, chemicals similar to soap are added to the pulp, and air is blown into it. The ink particles stick to the rising air bubbles and form a grey foam on the surface, which is removed. If very white paper is needed, the pulp may also be bleached at this stage.",
        "The clean pulp is now mostly water. It is sprayed onto a fast-moving wire mesh, through which much of the water drains away, leaving a thin layer of fibres that begins to form a sheet. This wet sheet then passes between heavy rollers that squeeze out more water, and over a series of heated metal cylinders that dry it. Finally, the finished paper is wound onto enormous rolls, which may later be cut into smaller sheets.",
        "Recycling cannot continue for ever. Each time paper is processed, its fibres become shorter and weaker, so after several cycles they are too short to hold together and are washed out of the system. For this reason, most mills add some new wood fibre to recycled pulp to keep the paper strong.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "Practice 2: flow-chart completion",
        instructions: "Read “How paper is recycled”. Complete the flow-chart. Write NO MORE THAN TWO WORDS from the passage for each answer.",
        text: "Recycling paper\n\nPaper is collected and taken to a recycling facility\n↓\nPaper is sorted into different {{0}}\n↓\nSorted paper is pressed into {{1}} and sent to a paper mill\n↓\nPaper is mixed with water in a tank called a {{2}} to make pulp\n↓\nScreens and cleaners remove staples, tape, glue and small pieces of {{3}}\n↓\nFlotation: ink sticks to air {{4}} and is removed as foam\n↓\nPulp is sprayed onto a moving {{5}} and water drains away\n↓\nMore water is squeezed out by {{6}}\n↓\nThe sheet is dried over heated {{7}}\n↓\nFinished paper is wound onto large rolls",
        answers: [
          ["grades"],
          ["bales", "large bales"],
          ["pulper"],
          ["metal"],
          ["bubbles"],
          ["wire mesh", "mesh"],
          ["heavy rollers", "rollers"],
          ["metal cylinders", "cylinders"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "gap",
        title: "Practice 3: notes with a word box",
        instructions:
          "In some IELTS completion tasks, especially summaries, you choose from a box of words instead of copying from the passage. Use “How paper is recycled” and choose ONE word from the box for each gap. There are more words than gaps.",
        text: "Why paper is sorted\n- different grades contain fibres of different {{0}}\n- mixing grades reduces the {{1}} of the final paper\n\nThe limits of recycling\n- each time paper is processed, its fibres become shorter and {{2}}\n- fibres that are too short are {{3}} out of the system\n- mills add new {{4}} fibre to keep the paper strong",
        answers: [["lengths"], ["quality"], ["weaker"], ["washed"], ["wood"]],
        wordBank: ["lengths", "colours", "quality", "cost", "weaker", "stronger", "washed", "burned", "wood", "cotton"],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Read the instructions for every set of questions: the word limit can change from one set to the next. NO MORE THAN TWO WORDS AND/OR A NUMBER allows answers such as *2 kilometres* or *wire mesh*, but never three words.",
    },
    {
      exam: "ielts",
      body: "Answers must be spelled correctly and copied from the passage. Do not change *chemically* into *chemical* to make the table look neater. If a word is already printed next to the gap, do not write it again.",
    },
    {
      exam: "ielts",
      body: "The same layouts appear in IELTS Listening, especially in Part 4. The skill of predicting the word type from the headings works in both tests.",
    },
  ],
  vocabulary: [
    { word: "particle", meaning: "a very small piece of something", example: "Fine particles of soil make the water look cloudy.", topic: "science" },
    { word: "sediment", meaning: "solid material that sinks to the bottom of a liquid", example: "A layer of sediment had formed at the bottom of the tank.", topic: "science" },
    { word: "disinfection", meaning: "the process of killing bacteria and viruses", example: "Disinfection is the last stage of water treatment.", topic: "health" },
    { word: "deliberately", meaning: "on purpose, not by accident", example: "A little chlorine is deliberately left in the water.", topic: "everyday" },
    { word: "surplus", meaning: "more than is needed", example: "Surplus electricity is used to pump water uphill.", topic: "environment" },
    { word: "renewable", meaning: "coming from a source that does not run out, such as wind or sunlight", example: "The country gets half its power from renewable sources.", topic: "environment" },
    { word: "capacity", meaning: "the amount that something can hold or produce", example: "The new plant has a huge storage capacity.", topic: "science" },
    { word: "efficiency", meaning: "how well something uses energy, time or money without waste", example: "Capturing the heat improves the system's efficiency.", topic: "science" },
    { word: "facility", meaning: "a building or place used for a particular activity", example: "The paper is taken to a recycling facility.", topic: "business" },
    { word: "mesh", meaning: "material made of threads or wires with small spaces between them", example: "Water drains through the wire mesh.", topic: "science" },
    { word: "stage", meaning: "one step or period in a process", example: "The final stage is drying the paper.", topic: "academic" },
  ],
  keyPoints: [
    "Notes, tables and flow-charts summarise one section of the passage; use their headings to find it.",
    "Predict the type of word for each gap: noun, plural, verb form, number.",
    "Copy words exactly from the passage, spelled correctly, without changing the word form.",
    "Keep to the word limit and do not repeat words already printed next to the gap.",
    "Flow-charts follow the order of a process; arrows show you what comes next.",
  ],
};

export default lesson;
