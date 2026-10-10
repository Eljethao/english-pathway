import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-diagram-labelling",
  title: "Diagram labelling and scientific texts",
  summary:
    "Label a technical diagram from a scientific description: read the diagram before the text, follow the language of position and process, and copy exact words within the word limit. Practised with an IELTS-style passage on traditional windcatchers.",
  skill: "reading",
  level: "C1",
  order: 8,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Reading – Diagram label completion" },
    { exam: "ielts", task: "Reading – True/False/Not Given" },
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
  ],
  objectives: [
    "Interpret the language of position, shape and movement used in technical descriptions",
    "Use a diagram's arrows, labels and layout to predict and locate the information needed",
    "Complete diagram labels with exact words from the text, within the word limit",
    "Follow a multi-stage physical process across several paragraphs",
  ],
  warmUp: [
    "How did people keep buildings cool before electricity? Think of any traditional methods you know from your own country.",
    "When you look at a technical diagram, what do you look at first: the title, the arrows, the labels or the shape of the object?",
  ],
  learn: [
    {
      type: "text",
      title: "What diagram labelling really tests",
      body: "In IELTS Academic Reading, a diagram label completion task gives you a drawing of a machine, a building, a natural feature or a process, with some labels missing. You complete each label with words taken from the passage, keeping to the word limit (for example, *NO MORE THAN TWO WORDS*).\n\nThe vocabulary is rarely the main difficulty. What makes the task hard at C1 is **translating a verbal description into a spatial one**: the text says *the outlet is set into the leeward face, just below the parapet*, and you must find that point on the drawing. Success depends on three things:\n\n- understanding **position and shape** language (*adjacent to, beneath, tapering, concentric*)\n- following **movement** through a system (*is drawn, channelled, expelled*)\n- copying the **exact form** of the word that fits the label grammatically",
    },
    {
      type: "table",
      title: "The language of technical description",
      headers: ["Function", "Typical language", "What to look for on the diagram"],
      rows: [
        ["Position", "adjacent to, beneath, at the base of, flush with, housed within, set into, protruding from", "Where the label line points: inside, outside, above or below another part"],
        ["Shape and structure", "tapering, cylindrical, concentric, slatted, hollow, divided into, perpendicular to", "Outlines, internal walls, narrowing shapes"],
        ["Movement", "is drawn in, is channelled, is forced down, rises, is expelled, escapes", "Arrows: their direction tells you the order of the stages"],
        ["Change of state", "evaporates, condenses, is absorbed, is released", "Water, steam or heat symbols; changes of colour or shading"],
        ["Function", "serves to, allows… to, prevents… from, so that", "Labels often name a part by what it does, not by a technical term"],
      ],
    },
    {
      type: "text",
      title: "A method for diagram labels",
      body: "1. **Read the diagram first (30–60 seconds).** What is it: a cross-section, a cycle, a device? Which labels are already given? Follow the arrows from start to finish.\n2. **Predict each gap.** Is it a part (noun), a material, a position? Does the label before or after the gap limit the grammar (*a thin ______ divides the tower*)?\n3. **Locate the description.** Diagram labels usually come from one or two paragraphs, but they are not always in the same order as the text, so use the given labels as anchors.\n4. **Trace the text along the drawing.** Move your eye along the diagram as you read each sentence about position or movement.\n5. **Copy exactly.** Use the words as they appear in the passage, spelled correctly, and count them.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: position and shape",
        instructions: "Choose the meaning of each description.",
        questions: [
          {
            prompt: "*The filter is housed within the outer casing.*",
            options: [
              "The filter is inside the casing.",
              "The filter is attached to the outside of the casing.",
              "The filter is next to the casing.",
              "The filter replaces the casing.",
            ],
            answer: 0,
            explanation: "*Housed within* = contained inside.",
          },
          {
            prompt: "*The pipe tapers towards its outlet.*",
            options: [
              "It becomes narrower near its end.",
              "It becomes wider near its end.",
              "It bends sharply near its end.",
              "It divides into two near its end.",
            ],
            answer: 0,
            explanation: "To *taper* is to become gradually narrower towards one end.",
          },
          {
            prompt: "*The valve is mounted flush with the surface of the tank.*",
            options: [
              "It does not stick out from the surface.",
              "It stands well above the surface.",
              "It is hidden deep below the surface.",
              "It is fixed at an angle to the surface.",
            ],
            answer: 0,
            explanation: "*Flush with* = at exactly the same level as the surface, not protruding.",
          },
          {
            prompt: "*Exhaust gases are expelled through a vent at the apex of the chamber.*",
            options: [
              "The gases leave through an opening at the highest point.",
              "The gases enter through an opening at the bottom.",
              "The gases leave through an opening in the side wall.",
              "The gases are trapped at the top of the chamber.",
            ],
            answer: 0,
            explanation: "*Expelled* = forced out; *apex* = the top or highest point.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "passage",
      title: "Model text: the solar still",
      paragraphs: [
        "A solar still is a simple device that uses the sun's energy to extract drinkable water from damp ground. To build one, a shallow pit is dug and a container is placed at its centre. The pit is then covered with a sheet of clear plastic, whose edges are held down with heavy stones so that moist air cannot escape. A small stone placed in the middle of the sheet pulls it down into an inverted cone, with its lowest point directly above the container.",
        "During the day, sunlight passes through the plastic and heats the soil, causing moisture in the ground to evaporate. The water vapour then condenses on the cooler underside of the sheet, forming droplets that run down the slope of the cone and drip into the container. A drinking tube, running from the container to the edge of the pit, allows water to be drunk without the sheet being lifted. The quantity collected is small, but in an emergency it can make a significant difference.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader labels the diagram",
      body: "Imagine a cross-section of the still: a pit in the ground, a plastic sheet over it pulled down in the middle, a container at the bottom and a tube leading out. A strong reader works like this:\n\n- **Diagram first.** The labels to find are things *at the edges of the sheet*, *the shape of the sheet*, *what forms under the sheet*, *the object at the bottom* and *the thing leading out of the pit*.\n- **Position language as a map.** *Placed at its centre* → the object in the middle of the pit is the **container**. *Edges are held down with heavy stones* → the objects on the edges are **heavy stones**. *Running from the container to the edge of the pit* → the **drinking tube**.\n- **Process language for the arrows.** The sequence *heats → evaporate → condenses on the underside → droplets → run down → drip* matches arrows going up from the soil and drops running down the sheet.\n- **Grammar check.** A label reading *a small stone creates an inverted ______* needs a noun: **cone**, not *inverted cone*, because *inverted* is already printed.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Your turn: labels for the solar still",
        instructions:
          "These are the labels on a cross-section diagram of the solar still. Complete each label. Choose NO MORE THAN TWO WORDS from the model text for each answer.",
        text: "1. {{0}} holding down the edges of the plastic sheet\n2. a small stone that pulls the sheet into an inverted {{1}}\n3. {{2}} forming on the underside of the sheet\n4. a {{3}} directly below the lowest point of the sheet\n5. a {{4}} running to the edge of the pit",
        answers: [
          ["heavy stones", "stones"],
          ["cone"],
          ["droplets"],
          ["container"],
          ["drinking tube", "tube"],
        ],
      },
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Catching the wind: the cooling towers of the desert",
      labelled: true,
      timerMinutes: 12,
      paragraphs: [
        "Long before the invention of electric air conditioning, builders in the hot, dry regions of Iran and around the Persian Gulf had developed an ingenious way of keeping houses habitable through the summer. Rising above the flat roofs of older desert cities, such as Yazd in central Iran, are tall rectangular towers known in Persian as *bâdgir*, or ‘windcatchers’. To a visitor, they may look like decorative chimneys; in fact, they are carefully engineered ventilation systems that move and cool air using nothing more than wind, gravity and water.",
        "A typical windcatcher is a hollow tower of brick or mud brick, rising several metres above the roof of the building beneath it. Near the top, on the side facing the prevailing wind, there are tall slatted openings, which admit moving air while keeping out birds and larger debris. Inside, the tower is divided by a thin partition into two or more vertical shafts. This internal division is the key to the design, because it allows air to travel down one shaft while it rises up another.",
        "When the wind blows, it is forced into the openings on the windward side and pushed down the shaft. At the same time, the wind flowing over and around the tower creates an area of low pressure on the opposite, leeward side. Air inside the house is therefore drawn upwards through the second shaft and out of the tower, so that warm, stale air is continuously replaced by fresh air from outside. Even on still days, the tower is not useless: its walls, heated by the sun, warm the air inside it, and this warm air rises and escapes, pulling air up through the house behind it in what engineers call the stack effect.",
        "Moving air alone makes people feel cooler, but the most sophisticated systems went further by combining the tower with water. In some houses, the incoming air was led down into a basement containing a small pool, fed by a qanat: an underground channel that carries water by gravity, sometimes over many kilometres, from distant hills. As the dry air passed over the water, some of the water evaporated. Because evaporation absorbs heat, the air lost much of its warmth before it rose through an opening in the floor into the summer room, the part of the house that families used during the hottest months.",
        "The buildings themselves added to the effect. Thick walls of brick and earth absorb heat slowly during the day and release it slowly at night, so interiors stay relatively cool through the afternoon. Basements, surrounded by earth, remain cooler still, and in many households it was customary to rest underground during the hottest part of the day.",
        "Windcatchers are not without limitations. They work best in dry climates, since evaporation cools air far less effectively when the air is already humid. Their openings can admit dust and insects, and without regular maintenance the shafts may become blocked. Nonetheless, as cooling accounts for a growing share of the world's electricity demand, architects have begun to look again at these traditional towers. A number of modern buildings now use wind towers, often fitted with sensors and adjustable vents, to reduce their reliance on mechanical cooling. Their designers argue that a technology refined over centuries in the desert may have something to teach the cities of the future.",
      ],
    },
    {
      type: "image",
      src: "/images/reading-diagram-labelling-windcatcher.svg",
      alt: "Cross-section of a house with a windcatcher tower. Wind enters openings near the top of the tower on the windward side (label 1). A wall inside the tower (label 2) divides it into two shafts. Air flows down the windward shaft into a basement, passes over a pool of water (label 5) and rises through the floor into a room above ground (label 4). Air from the room rises through the second shaft and leaves the tower on the leeward side (label 3). An underground tunnel (label 6) brings water into the basement from distant hills.",
      caption: "Cross-section of a house cooled by a windcatcher (labels 1–6)",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Questions 1–6: Diagram label completion",
        instructions:
          "Label the diagram. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        text: "1. {{0}} on the windward side, which let the wind into the tower\n2. a thin {{1}} that divides the tower into two shafts\n3. warm, {{2}} air leaving the tower on the leeward side\n4. the {{3}}, which receives the cooled air through an opening in the floor\n5. a small {{4}} in the basement, where water evaporates and cools the air\n6. a {{5}}, which carries water by gravity from distant hills",
        answers: [
          ["slatted openings", "openings"],
          ["partition"],
          ["stale"],
          ["summer room"],
          ["pool"],
          ["qanat", "underground channel"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "order",
        title: "Follow the airflow",
        instructions:
          "Put the stages in order to describe how air moves through the house in the diagram, from the moment the wind reaches the tower.",
        mode: "lines",
        items: [
          "The wind is forced into the openings on the windward side of the tower.",
          "The air is pushed down the first shaft towards the basement.",
          "The air passes over the pool, and some of the water evaporates.",
          "The cooled air rises through an opening in the floor into the summer room.",
          "Low pressure on the leeward side draws air from the house up the second shaft.",
          "Warm, stale air leaves through the opening on the leeward side.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "tfng",
        title: "Questions 7–12: True / False / Not Given",
        instructions: "Do the following statements agree with the information in the passage? Choose True, False or Not Given.",
        statements: [
          {
            text: "7. Windcatchers were originally built mainly for decoration.",
            answer: "F",
            explanation: "Paragraph A: they “may look like decorative chimneys; in fact, they are carefully engineered ventilation systems”.",
          },
          {
            text: "8. The internal partition makes it possible for air to move downwards and upwards at the same time.",
            answer: "T",
            explanation: "Paragraph B: it “allows air to travel down one shaft while it rises up another”.",
          },
          {
            text: "9. A windcatcher provides no ventilation when there is no wind.",
            answer: "F",
            explanation: "Paragraph C: “Even on still days, the tower is not useless”: the stack effect still pulls air through the house.",
          },
          {
            text: "10. The first qanats were built in the region around Yazd.",
            answer: "NG",
            explanation: "Paragraph D describes what a qanat is, but says nothing about where the first ones were built.",
          },
          {
            text: "11. The walls of these houses heat up quickly in the morning sun.",
            answer: "F",
            explanation: "Paragraph E: thick walls of brick and earth “absorb heat slowly during the day”.",
          },
          {
            text: "12. Modern wind towers are cheaper to build than conventional air-conditioning systems.",
            answer: "NG",
            explanation: "Paragraph F says modern buildings use wind towers to reduce their reliance on mechanical cooling, but it does not compare building costs.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Diagram label completion usually asks for words *from the passage*, with a limit such as NO MORE THAN TWO WORDS. Read the diagram before the text, use the labels that are already printed as anchors, and remember that the answers usually come from one part of the passage but are not always in text order. Never add words that are already printed on the label (*a thin ______*: write **partition**, not *thin partition*).",
    },
    {
      exam: "ielts",
      body: "Passages with diagrams are often descriptions of processes, so they may also be tested with True/False/Not Given or flow-chart questions. Mark the stages of the process in the margin (1, 2, 3…) on your first reading: it saves time on every question that follows.",
    },
    {
      exam: "toefl",
      body: "In Read an Academic Passage, short science texts often describe how something works. Questions on the connection between ideas often depend on cause-and-effect language such as *because, therefore* and *so that*: in the windcatcher text, low pressure on the leeward side is the reason stale air is *drawn upwards*.",
    },
  ],
  vocabulary: [
    { word: "ingenious", meaning: "clever, original and effective", example: "The engineers found an ingenious solution to the drainage problem.", topic: "science" },
    { word: "habitable", meaning: "suitable for people to live in", example: "Without insulation, the attic would not be habitable in winter.", topic: "environment" },
    { word: "ventilation", meaning: "the movement of fresh air into and through a building", example: "Poor ventilation can lead to damp and mould.", topic: "science" },
    { word: "prevailing wind", meaning: "the wind that blows most often in a particular place", example: "The runway is aligned with the prevailing wind.", topic: "environment" },
    { word: "windward / leeward", meaning: "facing the wind / sheltered from the wind", example: "Rain falls mainly on the windward slopes, while the leeward side stays dry.", topic: "environment" },
    { word: "partition", meaning: "a thin wall that divides a space into separate parts", example: "A glass partition separates the kitchen from the dining area.", topic: "everyday" },
    { word: "shaft", meaning: "a long, narrow vertical passage, for air or a lift", example: "Air is pumped down the ventilation shaft into the mine.", topic: "science" },
    { word: "debris", meaning: "small pieces of waste or broken material", example: "A grille keeps leaves and other debris out of the drain.", topic: "environment" },
    { word: "evaporate", meaning: "to change from a liquid into a gas", example: "In hot weather, the water in the bowl evaporates within hours.", topic: "science" },
    { word: "condense", meaning: "to change from a gas into a liquid, usually by cooling", example: "Steam condenses on the cold bathroom mirror.", topic: "science" },
    { word: "humid", meaning: "(of air) containing a lot of water vapour", example: "Evaporative coolers work poorly in humid climates.", topic: "environment" },
    { word: "reliance on", meaning: "the state of depending on something", example: "The city aims to reduce its reliance on imported energy.", topic: "environment" },
  ],
  keyPoints: [
    "Study the diagram first: its type, the labels already given and the direction of the arrows.",
    "Position, shape and movement language (housed within, tapering, is drawn up) is the bridge between the text and the drawing.",
    "Labels usually come from one or two paragraphs but not always in text order; use printed labels as anchors.",
    "Copy the exact words from the passage, do not repeat words already on the label, and keep to the word limit.",
  ],
};

export default lesson;
