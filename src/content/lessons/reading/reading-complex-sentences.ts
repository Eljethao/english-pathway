import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-complex-sentences",
  title: "Decoding complex academic sentences",
  summary:
    "Break long academic sentences down to their core: find the main clause, unpack nominalisations and reduced clauses, read inversions correctly, and use this to judge paraphrases and True/False/Not Given statements.",
  skill: "reading",
  level: "C1",
  order: 6,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Reading – True/False/Not Given" },
    { exam: "ielts", task: "Reading – Multiple choice" },
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
  ],
  objectives: [
    "Find the subject and main verb of a long sentence quickly",
    "Unpack nominalisations into plain statements of who did what",
    "Recognise reduced relative clauses, participle clauses, clefts and inversions",
    "Use sentence structure to judge paraphrases and True/False/Not Given statements precisely",
  ],
  warmUp: [
    "Read this: “The decline in bee populations observed over the past decade has prompted concern.” What exactly has prompted concern?",
    "Why do you think academic writers so often use long noun phrases (the introduction of…, the failure of…) instead of verbs?",
  ],
  learn: [
    {
      type: "text",
      title: "Find the core first",
      body: "Long academic sentences are rarely difficult because of individual words. They are difficult because the **subject is far from its verb**, because actions are **packed into nouns**, and because clauses **drop their verbs** or change the normal word order.\n\nA reliable way in:\n\n1. Find the **main verb**: a verb with a tense that is not inside a clause beginning with *who, which, that, because, although, if, when* and so on.\n2. Find its **subject**. In a long noun phrase, the key word (the head noun) usually comes before *of*, a participle or a relative clause: *The **assumption**, widely held among economists, that growth would continue…*\n3. Say the **core** to yourself: subject + verb + object or complement. *The assumption… proved mistaken.*\n4. Add the extras one at a time and ask what each does: time, cause, contrast, condition, or which one?",
    },
    {
      type: "table",
      title: "Six structures that hide the core",
      headers: ["Structure", "Example", "Unpacked"],
      rows: [
        ["Long subject", "**The rapid growth** of cities in regions with little planning capacity **has created** new risks.", "Cities have grown rapidly, and this has created new risks."],
        ["Nominalisation", "**The introduction** of the tax **led to a reduction in** consumption.", "When the tax was introduced, people consumed less."],
        ["Reduced relative clause", "Samples **collected** in winter showed higher levels.", "Samples **that were collected** in winter showed higher levels."],
        ["Participle clause", "**Having failed** to secure funding, the team abandoned the project.", "**Because** the team had failed to secure funding, it abandoned the project."],
        ["Inversion after a limiting word", "**Only later did** researchers realise the error.", "Researchers realised the error only later, not at first."],
        ["Cleft sentence", "**It was** the cost, **not** the design, **that** caused the delay.", "The cost caused the delay; the design did not."],
      ],
    },
    {
      type: "example",
      title: "Small words that reverse or limit the meaning",
      items: [
        "“**Far from** reducing traffic, the new road increased it.” → the road did **not** reduce traffic",
        "“The effect was **not insignificant**.” → the effect was real and fairly important",
        "“**Had** the warning been heeded, the damage would have been limited.” → the warning was **not** heeded",
        "“**Not until** 1990 **was** the law changed.” → the law changed in 1990, and not before",
        "“**Since** the method is cheap, it is widely used.” → *since* = because, not a time",
        "“**Such was** the demand **that** tickets sold out within an hour.” → demand was extremely high",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "In True/False/Not Given and multiple choice, the question often **unpacks** a sentence for you: a noun in the passage (*the expansion of*) becomes a verb in the statement (*expanded*), or a passive becomes active. If you unpack the sentence yourself first, the match, or the contradiction, becomes much easier to see.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Find the core",
        instructions: "Choose the option that best expresses the core meaning of each sentence.",
        questions: [
          {
            prompt:
              "“The assumption, widely held among economists in the decades that followed the war, that growth would continue indefinitely proved to be mistaken.”",
            options: [
              "Economists proved that growth would continue after the war.",
              "The belief that growth would never stop turned out to be wrong.",
              "Growth continued for several decades after the war.",
              "The war caused economists to make a mistake about growth.",
            ],
            answer: 1,
            explanation:
              "Subject: *The assumption* (… *that growth would continue indefinitely*). Main verb: *proved*. Core: the assumption proved mistaken.",
          },
          {
            prompt:
              "“Among the factors that researchers have identified as contributing to the decline is the loss of hedgerows.”",
            options: [
              "Researchers are one of the causes of the decline.",
              "The decline has led to the loss of hedgerows.",
              "The loss of hedgerows is one of the causes of the decline.",
              "Hedgerows have helped researchers to identify the decline.",
            ],
            answer: 2,
            explanation:
              "The order is inverted. In normal order: *The loss of hedgerows is among the factors… contributing to the decline.*",
          },
          {
            prompt:
              "“Not until the samples had been re-examined using more sensitive equipment did the contamination become apparent.”",
            options: [
              "The contamination was obvious from the start.",
              "The more sensitive equipment caused the contamination.",
              "The contamination was noticed only after the samples were checked again.",
              "The samples were never examined a second time.",
            ],
            answer: 2,
            explanation: "*Not until X did Y* means Y happened only after X.",
          },
          {
            prompt:
              "“Participants who reported sleeping fewer than six hours a night, a group that made up nearly a third of the sample, performed worse on every task.”",
            options: [
              "The participants who slept less than six hours did worse on all the tasks.",
              "All the participants slept fewer than six hours a night.",
              "Most participants performed worse on a third of the tasks.",
              "Participants slept less because the tasks were difficult.",
            ],
            answer: 0,
            explanation:
              "The phrase between the commas only describes the group. Core: *Participants who reported sleeping fewer than six hours… performed worse on every task.*",
          },
          {
            prompt:
              "“The failure of the first trials to produce lasting immunity, rather than any shortage of funding, explains the delay.”",
            options: [
              "A shortage of funding caused the delay.",
              "The trials failed because there was not enough funding.",
              "The delay happened because the early trials did not give long-term protection.",
              "The first trials produced lasting immunity after a delay.",
            ],
            answer: 2,
            explanation:
              "Subject: *The failure of the first trials…*; verb: *explains*. *Rather than any shortage of funding* rules funding out.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "passage",
      title: "The slow work of soil",
      labelled: true,
      paragraphs: [
        "Of all the resources on which human societies depend, few are as widely overlooked as the thin layer of soil that covers much of the land surface. Formed over centuries by the gradual breakdown of rock and the accumulation of decaying plant and animal matter, topsoil supports almost all of the crops that feed the world's population, yet it is routinely treated as little more than dirt. The assumption, rarely stated but widely shared, that soil will simply be there for the next harvest has shaped farming practices for generations.",
        "Only in recent decades have scientists begun to appreciate the extent to which soil is a living system rather than an inert medium. A single handful of healthy topsoil contains billions of microorganisms, many of which have never been formally described. These organisms, interacting with plant roots in ways that are still poorly understood, break down organic matter, release nutrients and bind mineral particles into the crumbly structure that allows water and air to move through the ground. Earthworms play their part too, dragging dead leaves below the surface and opening channels through which rain can drain. It is this structure, rather than the minerals themselves, that largely determines how well a soil can hold water during a drought.",
        "The pressures on this system are considerable. Repeated ploughing, by exposing soil to wind and rain, accelerates erosion; heavy machinery compacts the ground, reducing the space available for water and roots; and the removal of crop residues after harvest deprives soil organisms of the material on which they feed. Estimates of the rate at which soil is being lost vary widely, depending on the region and the methods used, but there is broad agreement that in many intensively farmed areas it is being eroded considerably faster than it is being formed. Since the formation of a few centimetres of topsoil can take centuries, losses of this kind are, on any human timescale, effectively permanent.",
        "Not all the news is discouraging, however. Farmers who have adopted practices designed to protect soil structure, such as reducing ploughing, keeping the ground covered with plants between harvests and rotating a wider range of crops, have in many cases reported better water retention and, after an initial period of adjustment, yields comparable to those achieved by conventional methods. Such results, though encouraging, are not universal: what works on the clay soils of one region may fail on the sandy soils of another, and the transition can be costly for farmers who cannot afford a temporary fall in income. Some governments now pay farmers to adopt these practices, treating healthy soil as a public good rather than a purely private concern.",
        "What emerges from this research is a picture of soil not as a fixed asset but as something closer to a bank account, from which withdrawals can be made only for as long as deposits continue. A field that has lost much of its topsoil may go on producing harvests for years, sustained by fertilisers, but it does so on borrowed time. Had this been understood earlier, much of the damage done to farmland over the last century might have been avoided. Whether it is understood widely enough now, and whether the costs of protecting soil will be shared fairly between farmers and the societies that depend on them, remains to be seen.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader decodes it",
      body: "**Paragraph A:** *The assumption, rarely stated but widely shared, that soil will simply be there for the next harvest has shaped farming practices for generations.*\n\nMain verb: *has shaped*. Subject: *The assumption*. The phrase between commas is a reduced clause (*which is rarely stated but widely shared*), and *that soil will simply be there…* tells us **what** the assumption is. Core: **a common belief that soil will always be available has influenced how people farm.**\n\n**Paragraph B:** *Only in recent decades have scientists begun to appreciate the extent to which soil is a living system…*\n\n*Only* + time phrase at the start causes inversion (*have scientists begun*). In normal order: *Scientists have begun to appreciate this only in recent decades*, which tells you that **earlier scientists did not**. *The extent to which* means *how far* or *how much*. A True/False/Not Given statement such as “Scientists have long recognised that soil is alive” would be **False**.\n\n**Paragraph B:** *It is this structure, rather than the minerals themselves, that largely determines how well a soil can hold water…*\n\nA cleft sentence: *It is X that…* puts the focus on X. Core: **soil structure, not mineral content, mainly controls water-holding.** *Rather than* rules the minerals out as the main factor.\n\n**Paragraph C:** *Since the formation of a few centimetres of topsoil can take centuries…*\n\nHere *since* means *because*, and *the formation of* is a nominalisation: *because a few centimetres of topsoil can take centuries to form*, losses are effectively permanent.\n\n**Paragraph E:** *Had this been understood earlier, much of the damage… might have been avoided.*\n\nAn inverted conditional (*If this had been understood earlier…*). It tells you that **this was not understood early enough**, so the damage happened.",
    },
  ],
  practice: [
    {
      type: "passage",
      title: "The problem of longitude",
      labelled: true,
      paragraphs: [
        "For centuries, sailors who ventured beyond sight of land faced a problem that no amount of courage could solve. Latitude, a ship's position north or south of the equator, could be calculated with reasonable accuracy from the height of the sun at midday or of certain stars at night. Longitude, its position east or west, could not. Lacking any reliable means of determining it, navigators relied on 'dead reckoning', an estimate based on the ship's speed, direction and time at sea, in which small errors could grow, over a long voyage, into mistakes of hundreds of kilometres.",
        "The consequences of such mistakes were frequently fatal. Ships ran aground on coasts they believed to be far away, and voyages were prolonged by weeks as captains, uncertain of their position, sailed along a known line of latitude until they reached land, a cautious strategy that made their routes predictable to pirates and left crews short of fresh food. So serious had the problem become by the early eighteenth century that in 1714 the British Parliament offered a reward of up to £20,000, an enormous sum at the time, to anyone who could devise a practical method of finding longitude at sea.",
        "The principle behind a solution had been understood for some time. Because the Earth turns through 360 degrees in twenty-four hours, every hour of difference between local time on board a ship and the time at a reference point, such as the port of departure, corresponds to fifteen degrees of longitude. Local time could be established by observing the sun; what was missing was a clock capable of keeping the time of the reference point accurately throughout a voyage of many weeks, despite the rolling of the ship, changes in temperature and humidity, and the salt-laden air. Pendulum clocks, which kept excellent time on land, were rendered useless by the motion of the sea.",
        "Not everyone believed that a mechanical solution was possible. Many leading astronomers favoured the 'lunar distance' method, in which the angle between the moon and a particular star, measured with a precise instrument, was compared with tables predicting that angle at a reference location at different times. The method was sound in principle but demanding in practice, requiring accurate tables, clear skies and calculations that could take an experienced navigator several hours.",
        "It was a self-taught carpenter and clockmaker from rural England, John Harrison, who eventually proved the sceptics wrong. Over more than three decades, Harrison built a series of timekeepers, each more refined than the last. The fourth, a large pocket watch completed in 1759, was tested on a voyage to Jamaica in 1761 and reportedly lost only about five seconds in more than two months at sea, a performance far exceeding what the Act required. Yet the board responsible for the prize, suspicious of so remarkable a result, demanded further trials, and not until 1773, when Harrison was around eighty, did Parliament grant him a substantial payment, though he was never formally awarded the prize itself.",
        "Even then, the marine chronometer, as such timekeepers came to be called, did not immediately transform navigation. Early instruments were expensive, and it was several decades before improved designs and cheaper methods of manufacture made them affordable for ordinary merchant ships. For much of that period, lunar distances and chronometers were used side by side, each serving as a check on the other. By the middle of the nineteenth century, however, a ship that left port without a chronometer would have been regarded as poorly equipped.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Which sentence means the same?",
        instructions:
          "Each sentence comes from “The problem of longitude”. Choose the option that is closest in meaning.",
        questions: [
          {
            prompt:
              "Paragraph A: “Lacking any reliable means of determining it, navigators relied on 'dead reckoning'…”",
            options: [
              "Navigators preferred dead reckoning even though they had more reliable methods.",
              "Navigators used dead reckoning because they had no dependable way of finding longitude.",
              "Dead reckoning was the reason why navigators could not find latitude.",
              "Navigators did not trust dead reckoning, so they avoided long voyages.",
            ],
            answer: 1,
            explanation:
              "The participle clause *Lacking any reliable means…* gives the reason: *Because they lacked* a reliable method, they relied on dead reckoning.",
          },
          {
            prompt:
              "Paragraph B: “So serious had the problem become by the early eighteenth century that in 1714 the British Parliament offered a reward…”",
            options: [
              "The problem became serious because of the reward.",
              "Parliament offered the reward because the problem had become very serious.",
              "The reward was offered before the problem became serious.",
              "Parliament made the problem more serious in 1714.",
            ],
            answer: 1,
            explanation: "*So serious had the problem become… that…* = the problem had become so serious that Parliament acted.",
          },
          {
            prompt: "Paragraph C: “Pendulum clocks, which kept excellent time on land, were rendered useless by the motion of the sea.”",
            options: [
              "Pendulum clocks worked well on land but could not work properly on a moving ship.",
              "Pendulum clocks were useful at sea but inaccurate on land.",
              "The sea made pendulum clocks more accurate.",
              "Pendulum clocks were only used on land because they were expensive.",
            ],
            answer: 0,
            explanation: "*Rendered useless by* = made useless by. The relative clause adds that they were excellent on land.",
          },
          {
            prompt: "Paragraph D: “The method was sound in principle but demanding in practice…”",
            options: [
              "The method was based on a mistaken idea but was easy to use.",
              "The method was correct in theory but difficult to carry out.",
              "The method was popular with sailors but not with astronomers.",
              "The method could only be used on land.",
            ],
            answer: 1,
            explanation: "*Sound* = correct, reliable; *demanding* = requiring a lot of skill and effort.",
          },
          {
            prompt:
              "Paragraph E: “…not until 1773, when Harrison was around eighty, did Parliament grant him a substantial payment, though he was never formally awarded the prize itself.”",
            options: [
              "Harrison received the full prize in 1773.",
              "Harrison received a large sum only late in life, but not the official prize.",
              "Parliament paid Harrison regularly from 1761 until 1773.",
              "Harrison refused the prize because the payment was too small.",
            ],
            answer: 1,
            explanation:
              "*Not until 1773… did Parliament grant* = Parliament granted the payment only in 1773. *Though he was never formally awarded the prize* rules out the full prize.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Unpack the nominalisations",
        instructions:
          "Rewrite each idea with a verb or adjective instead of the noun in bold. Write ONE word in each gap, in the correct form.",
        text: "1. The **determination** of longitude at sea was impossible without an accurate clock.\n→ Sailors could not {{0}} longitude at sea without an accurate clock.\n\n2. The **accumulation** of small errors over a long voyage led to large mistakes.\n→ Small errors {{1}} over a long voyage and led to large mistakes.\n\n3. The **reliance** of navigators on dead reckoning was dangerous.\n→ Navigators {{2}} on dead reckoning, which was dangerous.\n\n4. The **failure** of pendulum clocks at sea was caused by the ship's motion.\n→ Pendulum clocks {{3}} at sea because of the ship's motion.\n\n5. The **suspicion** of the board delayed Harrison's reward.\n→ The board was {{4}}, so Harrison's reward was delayed.\n\n6. The **affordability** of chronometers for merchant ships came only decades later.\n→ Chronometers became {{5}} for merchant ships only decades later.",
        answers: [["determine"], ["accumulated"], ["relied"], ["failed"], ["suspicious"], ["affordable"]],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "tfng",
        title: "True / False / Not Given",
        instructions:
          "Do the following statements agree with the information in “The problem of longitude”? Unpack each long sentence before you decide.",
        statements: [
          {
            text: "1. Sailors in the past were unable to calculate latitude with any accuracy.",
            answer: "F",
            explanation: "Paragraph A: latitude “could be calculated with reasonable accuracy”. It was longitude that could not.",
          },
          {
            text: "2. On a long voyage, small errors in dead reckoning could lead to large errors in a ship's estimated position.",
            answer: "T",
            explanation:
              "Paragraph A: an estimate “in which small errors could grow, over a long voyage, into mistakes of hundreds of kilometres”.",
          },
          {
            text: "3. Sailing along a known line of latitude made ships easier for pirates to find.",
            answer: "T",
            explanation: "Paragraph B: the strategy “made their routes predictable to pirates”.",
          },
          {
            text: "4. The 1714 reward was the largest sum Parliament had ever offered.",
            answer: "NG",
            explanation:
              "Paragraph B calls it “an enormous sum at the time”, but does not compare it with any other reward offered by Parliament.",
          },
          {
            text: "5. The lunar distance method could be used without a clear view of the sky.",
            answer: "F",
            explanation: "Paragraph D: the method required “clear skies”.",
          },
          {
            text: "6. Harrison's fourth timekeeper was smaller than the earlier ones.",
            answer: "NG",
            explanation:
              "Paragraph E describes the fourth as “a large pocket watch” but says nothing about the size of the earlier timekeepers. Do not use outside knowledge.",
          },
          {
            text: "7. Harrison eventually received the full prize described in the 1714 Act.",
            answer: "F",
            explanation: "Paragraph E: he received a substantial payment, “though he was never formally awarded the prize itself”.",
          },
          {
            text: "8. For a time, navigators used both lunar distances and chronometers to check their results.",
            answer: "T",
            explanation: "Paragraph F: the two methods “were used side by side, each serving as a check on the other”.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Sentences that begin with a limiting or negative word (*Only…, Not until…, Rarely…, Never…*) are easy to read as their opposite. Rewrite them in normal word order in your head before you compare them with a True/False/Not Given statement.",
    },
    {
      exam: "ielts",
      body: "Commas, dashes and brackets often mark extra information inside a sentence. Mentally remove it to find the core, then decide whether the question is about the core or about the extra information.",
    },
    {
      exam: "toefl",
      body: "Read an Academic Passage texts are short (about 200 words), so each sentence tends to carry a lot of information and several questions can depend on one long sentence. When an option seems close to the text, check that it keeps the same subject, the same verb and the same relationship (cause, contrast, condition).",
    },
  ],
  vocabulary: [
    { word: "nominalisation", meaning: "using a noun to express an action or quality, e.g. 'the failure of' instead of 'failed'", example: "Academic texts use nominalisation to pack a lot of information into one sentence.", topic: "academic" },
    { word: "main clause", meaning: "the part of a sentence that contains the main subject and verb and can stand alone", example: "Find the main clause before you read the rest of the sentence.", topic: "academic" },
    { word: "inert", meaning: "not active, or not reacting with other substances", example: "Soil was once seen as an inert medium for plant roots.", topic: "science" },
    { word: "erosion", meaning: "the gradual removal of soil or rock by wind, water or ice", example: "Repeated ploughing accelerates erosion.", topic: "environment" },
    { word: "compact (verb)", meaning: "to press something together so that it becomes firm and dense", example: "Heavy machinery compacts the ground.", topic: "environment" },
    { word: "retention", meaning: "the ability to keep or hold something", example: "Healthy soil structure improves water retention.", topic: "science" },
    { word: "devise", meaning: "to invent or plan a new method or system", example: "Parliament offered a reward to anyone who could devise a method.", topic: "academic" },
    { word: "render", meaning: "to cause something to be in a particular state", example: "The motion of the sea rendered pendulum clocks useless.", topic: "academic" },
    { word: "demanding", meaning: "needing a lot of skill, time or effort", example: "The method was sound in principle but demanding in practice.", topic: "academic" },
    { word: "prolong", meaning: "to make something last longer", example: "Uncertainty about their position prolonged many voyages.", topic: "travel" },
  ],
  keyPoints: [
    "Find the main verb and its subject first; everything else adds detail to that core.",
    "Unpack nominalisations into who did what: the introduction of the tax → the tax was introduced.",
    "Reduced and participle clauses hide words such as which was, because or after; put them back.",
    "Inversions (Only later did…, Not until…, Had this been…) and clefts (It was X that…) change the focus or reverse the meaning: read them carefully.",
  ],
};

export default lesson;
