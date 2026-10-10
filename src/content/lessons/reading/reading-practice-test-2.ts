import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-practice-test-2",
  title: "Full reading practice test 2",
  summary:
    "A full-length, 60-minute IELTS Academic-style reading test: three passages and 40 questions in nine question types, with full answer explanations and a review plan.",
  skill: "reading",
  level: "C1",
  order: 12,
  minutes: 60,
  exams: [
    { exam: "ielts", task: "Mock test" },
    { exam: "ielts", task: "Reading – True/False/Not Given" },
    { exam: "ielts", task: "Reading – Note, table and flow-chart completion" },
    { exam: "ielts", task: "Reading – Matching headings" },
    { exam: "ielts", task: "Reading – Matching features" },
    { exam: "ielts", task: "Reading – Yes/No/Not Given" },
    { exam: "ielts", task: "Reading – Multiple choice" },
    { exam: "ielts", task: "Reading – Summary completion" },
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
  ],
  objectives: [
    "Complete a full-length test of three passages and 40 questions in 60 minutes",
    "Apply every strategy from the C1 course, from previewing and time budgets to stance vocabulary and argument structure",
    "Analyse your mistakes by question type and by cause (reading or timing) to plan further study",
  ],
  warmUp: [
    "Compare this with your first practice test: which question type do you most want to improve this time?",
    "What will you do if you reach the end of your time budget for a passage with three questions unanswered?",
  ],
  learn: [
    {
      type: "text",
      title: "How this test works",
      body: "This is a **full-length** mock test: **three passages**, **40 questions** and **60 minutes**, the same as IELTS Academic Reading. The topics and question types are different from the first practice test.\n\n- The passages get harder: Passage 1 is mainly factual, Passage 2 reports a scientific debate, and Passage 3 is an argument with a clear authorial position.\n- Each passage has a timer. Start it when you begin the passage and move on when it ends.\n- Answer every question; there is no penalty for wrong answers.\n- Keep to the word limits exactly, and copy spelling from the passage.\n- Don't check any answers until you have finished all three passages.",
    },
    {
      type: "table",
      title: "Your time plan",
      headers: ["Passage", "Questions", "Time", "Question types"],
      rows: [
        ["1. Lights on the rocks", "1–13", "17 minutes", "True/False/Not Given, note completion"],
        ["2. Letting nature take its course", "14–26", "20 minutes", "Matching headings, matching features, multiple choice"],
        ["3. The myth of the shrinking attention span", "27–40", "23 minutes", "Yes/No/Not Given, multiple choice, summary completion"],
      ],
    },
    {
      type: "table",
      title: "After the test: what your score suggests",
      headers: ["Score (out of 40)", "What it suggests", "Next step"],
      rows: [
        ["35–40", "Strong C1 reading under full exam conditions", "Keep taking full tests; work on any single question type you missed"],
        ["28–34", "Around C1, with one or two weak areas", "Review the lesson for the question type where you lost most marks"],
        ["20–27", "Upper B2, not yet consistently C1", "Repeat the C1 lessons on Yes/No/Not Given, argument structure and time management"],
        ["0–19", "Core skills or timing need work", "Review the B2 course, then the C1 lessons on long passages and reading speed"],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "This guide is only approximate. Real IELTS band scores are calculated from the number of correct answers out of 40, and the conversion varies slightly between test versions.",
    },
  ],
  model: [
    {
      type: "text",
      title: "Before you start: a checklist by question type",
      body: "Spend one minute reading this checklist. Each point comes from a lesson in the C1 course.\n\n- **True/False/Not Given and Yes/No/Not Given:** False or No must **contradict** the text; if the text is silent, the answer is Not Given. In Passage 3, decide whose view each sentence expresses.\n- **Note completion:** check the word limit, and don't repeat words already printed in the notes.\n- **Matching headings:** a heading must cover the **whole** paragraph, not one sentence in it. Do the paragraphs you are sure of first.\n- **Matching features:** find each group or person in the passage first, then read what is said about them.\n- **Multiple choice:** find the answer in the text, then cross out each wrong option for a reason. Purpose questions ask what a sentence *does*.\n- **Summary completion with a box:** use grammar, then collocation, then meaning.\n- **Timing:** preview each passage for about a minute; if one question takes more than 90 seconds, guess, mark it and move on.",
    },
    {
      type: "passage",
      title: "Warm-up extract: the first weather forecasts",
      paragraphs: [
        "Public weather forecasts became possible only when information could travel faster than the weather itself. Once telegraph networks linked distant observing stations in the nineteenth century, forecasters could see a storm approaching hours before it arrived. Early forecasts were often wrong, and some critics argued that publishing them did more harm than good. Nonetheless, the practice spread, and by the end of the century many countries had established national weather services.",
      ],
    },
    {
      type: "text",
      title: "Apply the checklist",
      body: "**Not Given or False?** *Statement: The first forecasts were more accurate than critics claimed.* The extract says forecasts were *often wrong* and that critics thought they did harm, but it never compares their accuracy with the critics' claims → **Not Given**.\n\n**Heading for the whole paragraph.** *Criticism of early forecasts* covers one sentence only. *How a new technology made forecasting possible* covers the whole extract better.\n\n**Purpose.** *Why does the writer mention the telegraph?* Not to describe telegraphs, but **to explain why forecasts became possible** at that time.\n\nNow start Passage 1 and its timer.",
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Passage 1: Lights on the rocks",
      labelled: true,
      timerMinutes: 17,
      paragraphs: [
        "For as long as people have travelled by sea, they have needed ways of finding a safe route to the shore at night. The earliest aids were simply fires lit on hilltops or headlands, and for centuries most coastal lights remained little more than this. The most famous lighthouse of the ancient world, the Pharos of Alexandria in Egypt, was completed in the third century BCE and is thought to have been more than 100 metres tall. Although accounts of how its light worked are uncertain, it became so celebrated that the word for lighthouse in several European languages, including French *phare* and Italian *faro*, derives from its name.",
        "For many centuries afterwards, progress was slow. Most lights were wood or coal fires burning in open iron baskets, which consumed enormous quantities of fuel and were easily obscured by their own smoke. Candles and, later, oil lamps were cleaner, but they produced a weak light that could not be seen from far out at sea. A navigator approaching a dangerous coast in poor weather could easily miss a light altogether, or mistake one light for another.",
        "The second problem was structural. Many of the most dangerous hazards lay not on the coast but offshore, on isolated reefs and rocks where building was extraordinarily difficult. The Eddystone rocks, south of the English port of Plymouth, illustrate the challenge. The first lighthouse there, a wooden structure completed in 1698, was swept away in a great storm only five years later, and its successor was eventually destroyed by fire. The third tower, designed by the engineer John Smeaton and completed in 1759, took a different approach. Smeaton built it from blocks of granite cut so that they locked into one another and into the rock itself, and he developed a type of lime mortar that would set even under water. His tower stood for well over a century and was dismantled only because the rock beneath it was being eroded by the sea; its upper part was rebuilt on land in Plymouth, where it can still be visited.",
        "The decisive advance in lighting came in the 1820s from the French physicist Augustin Fresnel. A conventional lens powerful enough to focus a lighthouse beam would have been impractically thick and heavy. Fresnel's solution was to divide the lens into a series of concentric rings of glass, each angled to bend the light in the same direction. The result was far thinner and lighter than a conventional lens, yet able to gather most of the light from a lamp and concentrate it into a powerful horizontal beam. Lights fitted with Fresnel lenses could be seen from much greater distances, and the design was soon adopted around the world.",
        "Because ships could now see several lights along the same stretch of coast, it became essential to tell them apart. Engineers therefore gave each lighthouse its own signature. Some lights were fixed, while others flashed in a particular pattern, produced by rotating the lens or by moving screens around the lamp. Towers were also painted with distinctive stripes or bands so that they could be identified in daylight. Navigators carried published lists of these characteristics, which allowed them to work out their position from the pattern of a single light.",
        "For most of their history, lighthouses depended on keepers, who lived at the station to maintain the lamp, wind the clockwork that turned the lens and keep watch through the night. On remote rock stations, keepers usually worked in small teams and spent weeks at a time away from their families. During the twentieth century, however, electricity and remote monitoring made their presence increasingly unnecessary. In the United Kingdom, the last lighthouses with resident keepers were automated in 1998.",
        "Today, satellite navigation allows ships to establish their position with an accuracy that the keepers of the past could hardly have imagined, and some authorities have switched off lights that are no longer considered necessary. Yet many lighthouses continue to operate, since electronic systems can fail and a visible light remains a simple and reliable backup. Others have found new lives as museums, holiday accommodation or stations for monitoring weather and wildlife.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "tfng",
        title: "Questions 1–6",
        instructions: "Do the following statements agree with the information in Passage 1? Choose True, False or Not Given.",
        statements: [
          {
            text: "1. The Pharos of Alexandria was the first lighthouse ever built.",
            answer: "NG",
            explanation: "Paragraph A calls it the “most famous” lighthouse of the ancient world, not the first; nothing says which lighthouse came first.",
          },
          {
            text: "2. Open fires used as lights were sometimes hidden by the smoke they produced.",
            answer: "T",
            explanation: "Paragraph B: they “were easily obscured by their own smoke”.",
          },
          {
            text: "3. The first Eddystone lighthouse was destroyed by fire.",
            answer: "F",
            explanation: "Paragraph C: it “was swept away in a great storm”; it was the second tower that was destroyed by fire.",
          },
          {
            text: "4. Smeaton's tower was taken down because its design had failed.",
            answer: "F",
            explanation: "Paragraph C: it was dismantled “only because the rock beneath it was being eroded”, after standing for well over a century.",
          },
          {
            text: "5. Fresnel lenses were more expensive to produce than conventional lenses.",
            answer: "NG",
            explanation: "Paragraph D compares thickness, weight and performance, but says nothing about cost.",
          },
          {
            text: "6. A navigator could identify a lighthouse at night from the way its light flashed.",
            answer: "T",
            explanation: "Paragraph E: lights flashed in particular patterns, and navigators could “work out their position from the pattern of a single light”.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Questions 7–13",
        instructions: "Complete the notes. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        text: "Notes on the development of lighthouses\n\nSmeaton's Eddystone tower (1759)\n- built of {{0}} blocks that locked together and into the rock\n- used a lime mortar that could {{1}} under water\n\nFresnel's lens (1820s)\n- made of concentric {{2}} of glass\n- concentrated the light into a powerful horizontal {{3}}\n\nTelling lights apart\n- by day: towers painted with stripes or {{4}}\n\nKeepers\n- duties included winding the {{5}} that turned the lens\n- in the UK, the last stations with resident keepers were {{6}} in 1998",
        answers: [
          ["granite"],
          ["set"],
          ["rings"],
          ["beam"],
          ["bands"],
          ["clockwork"],
          ["automated"],
        ],
      },
    },
    {
      type: "passage",
      title: "Passage 2: Letting nature take its course",
      labelled: true,
      timerMinutes: 20,
      paragraphs: [
        "Conservation has traditionally been an exercise in careful management. Nature reserves are mown, grazed, cleared and replanted according to detailed plans designed to maintain particular habitats and the species associated with them. Over the past few decades, however, a different philosophy has gained ground. Rewilding, as it is generally known, aims to restore natural processes, such as grazing by large animals, the seasonal flooding of rivers and the natural spread of woodland, and then to step back and allow ecosystems to develop with minimal human intervention. Its advocates argue that this approach is not only cheaper in the long term but also better suited to a world in which climate change makes it impossible to keep habitats exactly as they are.",
        "Perhaps the most frequently cited example comes from Yellowstone National Park in the United States, where grey wolves were reintroduced in 1995 after an absence of around seventy years. In the years that followed, researchers reported that the wolves had reduced the number of elk and changed where the remaining elk grazed, allowing willow and aspen trees to recover along some riverbanks. A chain of effects of this kind, in which a predator at the top of a food web influences plants several levels below, is known as a trophic cascade, and the Yellowstone story became a powerful symbol of what rewilding might achieve.",
        "More recent research has complicated this picture. Some ecologists argue that the recovery of trees was patchier than early reports suggested, and that other factors, including drought, hunting by people outside the park and the growing numbers of other predators such as bears, also affected elk populations. Separating the effect of a single species from everything else that is changing in a large ecosystem is extremely difficult, and there is still no consensus on how much of the change can be attributed to wolves. Few scientists dispute that the wolves have had some effect; the disagreement concerns its size and consistency.",
        "In densely populated regions such as much of Europe, rewilding projects usually operate on a smaller scale and with less dramatic species. On some former farmland, for example, landowners have removed internal fences, stopped using fertilisers and introduced hardy breeds of cattle, ponies and pigs as substitutes for the wild grazing animals that once shaped the landscape. The results can be striking: scrub, wetland and grassland form a shifting patchwork, and some declining species of birds and insects have returned in numbers that surprised even the projects' organisers.",
        "Rewilding nonetheless remains controversial. Farmers and rural communities sometimes see it as a threat to their livelihoods and to landscapes that have been shaped by agriculture for centuries. The return of predators raises understandable fears for livestock, while taking land out of farming may be viewed as a loss of food production. Some conservationists also worry that a hands-off approach could harm species that depend on particular managed habitats, such as certain meadow flowers that disappear if grassland is no longer cut or grazed.",
        "In response, many practitioners now describe rewilding as a spectrum rather than a single method. At one end lies the reintroduction of large predators across vast areas; at the other, modest measures such as allowing a straightened river to meander again or leaving part of a farm unmanaged. What unites these projects is a shift in emphasis from controlling outcomes to restoring processes. Whether that shift can deliver lasting benefits at the scale required, and whether it can win the support of the people who live alongside it, are questions that only time and careful monitoring will answer.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Questions 14–19",
        instructions:
          "Passage 2 has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings (i–viii). There are two headings you do not need.",
        labels: "roman",
        left: ["14. Paragraph A", "15. Paragraph B", "16. Paragraph C", "17. Paragraph D", "18. Paragraph E", "19. Paragraph F"],
        right: [
          "A celebrated case of a predator reshaping an ecosystem",
          "Doubts about how much one species can explain",
          "A move away from detailed management",
          "Domestic animals standing in for wild ones",
          "Opposition from several directions",
          "One approach that takes many forms",
          "The financial cost of reintroducing predators",
          "Why wolves disappeared from Yellowstone",
        ],
        answer: [2, 0, 1, 3, 4, 5],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "match",
        title: "Questions 20–24",
        instructions:
          "Look at the following statements and the list of groups below. Match each statement with the correct group, according to Passage 2. You may use any group more than once, and some groups are not needed.",
        left: [
          "20. A hands-off approach may endanger species that need particular habitats.",
          "21. Rewilding is well suited to a changing climate.",
          "22. Factors other than wolves contributed to changes in elk numbers.",
          "23. Rewilding may threaten the way they earn a living.",
          "24. Rewilding should be understood as a range of approaches.",
        ],
        right: [
          "advocates of rewilding",
          "some ecologists",
          "landowners on former farmland",
          "farmers and rural communities",
          "some conservationists",
          "many practitioners",
        ],
        answer: [4, 0, 1, 3, 5],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "mcq",
        title: "Questions 25–26",
        instructions: "Choose the correct answer.",
        questions: [
          {
            prompt: "25. What does the writer say about the scientific disagreement over Yellowstone?",
            options: [
              "Most scientists now believe the wolves had no real effect.",
              "It concerns how large and consistent the wolves' effect was, not whether there was one.",
              "It was caused by poor-quality data from early studies.",
              "It has been settled by recent research on drought.",
            ],
            answer: 1,
            explanation: "Paragraph C: “Few scientists dispute that the wolves have had some effect; the disagreement concerns its size and consistency.” A contradicts this; D contradicts “there is still no consensus”.",
          },
          {
            prompt: "26. According to paragraph D, what surprised the organisers of some European projects?",
            options: [
              "How quickly the farm animals adapted to the conditions",
              "The number of declining birds and insects that returned",
              "The cost of removing fences and fertilisers",
              "The support they received from local farmers",
            ],
            answer: 1,
            explanation: "“some declining species of birds and insects have returned in numbers that surprised even the projects' organisers”. D is contradicted by paragraph E.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Passage 3: The myth of the shrinking attention span",
      labelled: true,
      timerMinutes: 23,
      paragraphs: [
        "It has become one of the most repeated claims of the digital age: that human attention spans are shrinking, and that we can now concentrate for less time than a goldfish. The figure usually quoted, eight seconds, has appeared in newspapers, conference talks and training courses around the world. Yet attempts to trace it to its source have found no study that actually measured it, and psychologists who study attention have pointed out that the idea of a single attention span, measurable in seconds, makes little sense in the first place.",
        "The difficulty lies partly in what the term is taken to mean. Researchers distinguish between several kinds of attention: the ability to sustain focus on a monotonous task, the ability to select relevant information while ignoring distractions, and the ability to switch efficiently between tasks. These capacities are measured in different ways, and performance on each depends heavily on the task, the person's motivation and how tired they are. Someone who abandons a dull article after a few seconds may concentrate for hours on a video game, a novel or a difficult piece of music. To speak of a fixed span is therefore to confuse a property of the person with a property of the situation.",
        "None of this means that digital technology has no effect on how we attend. There is reasonable evidence that people switch between tasks very frequently when working on computers, and that interruptions, whether they come from notifications or from our own impulse to check something, carry a cost: after switching, it takes time to re-engage fully with the original task, and errors become more likely. What is far less clear is whether these habits have produced any lasting change in our underlying capacity to concentrate. A person who checks their phone every few minutes may simply be responding to an environment designed to capture their attention, rather than suffering from a diminished ability to focus.",
        "This distinction matters, because it shapes the remedies we choose. If the problem were a decline in capacity, the solution might lie in training programmes intended to strengthen concentration, of which there is no shortage on the market. The evidence that such programmes improve attention in everyday life, as opposed to performance on the particular exercises they contain, is, however, weak. If, on the other hand, the problem lies largely in our surroundings, the more effective responses are environmental: turning off notifications, setting aside periods free of interruption, and designing workplaces and classrooms that make sustained focus easier rather than harder.",
        "It is worth asking why the myth has proved so durable. Part of the answer is that it confirms a widespread intuition. Many people do feel more distracted than they used to, and a precise-sounding statistic lends that feeling an air of scientific authority, while the comparison with a goldfish supplies a memorable image. There is also a long tradition of anxiety about new media: similar fears were expressed about cheap novels, radio and television, each of which was accused in its time of eroding the public's capacity for serious thought. This is not to dismiss present concerns, but it should make us cautious about assuming that, this time, the damage is permanent.",
        "The more useful question, then, is not how many seconds we can concentrate for, but under what conditions we concentrate well. Framed in this way, the issue becomes one that individuals, employers and educators can do something about. A myth that tells us our minds have been irreversibly damaged invites resignation; an accurate account of how attention responds to its environment invites change.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex6",
        kind: "tfng",
        variant: "ynng",
        title: "Questions 27–32",
        instructions: "Do the following statements agree with the claims of the writer in Passage 3? Choose Yes, No or Not Given.",
        statements: [
          {
            text: "27. There is reliable scientific evidence that the average human attention span is eight seconds.",
            answer: "F",
            explanation: "Paragraph A: attempts to trace the figure “have found no study that actually measured it”. The writer rejects the claim → No.",
          },
          {
            text: "28. The idea of a single, fixed attention span is misleading.",
            answer: "T",
            explanation: "Paragraphs A and B: the idea “makes little sense”, and speaking of a fixed span confuses a property of the person with a property of the situation → Yes.",
          },
          {
            text: "29. Video games damage concentration more than reading does.",
            answer: "NG",
            explanation: "Paragraph B mentions video games only as an example of something people may concentrate on for hours; the writer does not compare their effects with reading.",
          },
          {
            text: "30. Frequent interruptions can reduce the quality of a person's work.",
            answer: "T",
            explanation: "Paragraph C: after an interruption “errors become more likely” → Yes.",
          },
          {
            text: "31. Commercial concentration-training programmes have been shown to improve attention in daily life.",
            answer: "F",
            explanation: "Paragraph D: the evidence for this “is, however, weak” → No.",
          },
          {
            text: "32. Earlier fears about radio and television were completely unjustified.",
            answer: "NG",
            explanation: "Paragraph E reports these fears to show a pattern of anxiety about new media, but the writer does not judge whether they were justified.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex7",
        kind: "mcq",
        title: "Questions 33–36",
        instructions: "Choose the correct answer.",
        questions: [
          {
            prompt: "33. Why does the writer mention video games, novels and music in paragraph B?",
            options: [
              "To show that the ability to concentrate depends on the situation",
              "To suggest that some activities improve attention",
              "To compare digital and traditional forms of entertainment",
              "To argue that people should read fewer dull articles",
            ],
            answer: 0,
            explanation: "The examples show the same person concentrating for seconds or for hours depending on the activity, which supports the point about “a property of the situation”.",
          },
          {
            prompt: "34. According to paragraph C, what remains uncertain?",
            options: [
              "Whether people switch tasks often when using computers",
              "Whether interruptions make errors more likely",
              "Whether digital habits have changed people's basic ability to concentrate",
              "Whether phones are designed to capture attention",
            ],
            answer: 2,
            explanation: "“What is far less clear is whether these habits have produced any lasting change in our underlying capacity to concentrate.” A and B are described as supported by reasonable evidence.",
          },
          {
            prompt: "35. Why does the writer believe the distinction discussed in paragraphs C and D is important?",
            options: [
              "It explains why training programmes are so popular.",
              "It determines which solutions are likely to be effective.",
              "It shows that technology companies are responsible for the problem.",
              "It proves that attention has not changed at all.",
            ],
            answer: 1,
            explanation: "Paragraph D: “This distinction matters, because it shapes the remedies we choose.” D is too strong: the writer only says a lasting change is unclear.",
          },
          {
            prompt: "36. What is the writer's main purpose in Passage 3?",
            options: [
              "To explain how attention is measured in psychology laboratories",
              "To warn readers about the dangers of digital technology",
              "To challenge a popular belief and propose a more useful way of thinking about attention",
              "To compare modern anxieties with those of earlier generations",
            ],
            answer: 2,
            explanation: "The passage begins by questioning the eight-second claim and ends by reframing the issue as “under what conditions we concentrate well”. D describes only paragraph E.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex8",
        kind: "gap",
        title: "Questions 37–40",
        instructions:
          "Complete the summary of paragraphs E and F using the list of words in the box. There are more words than gaps.",
        text: "The belief that attention spans have fallen to eight seconds has lasted partly because it supports a common {{0}}, and a precise figure makes it sound scientific. Similar worries about new {{1}} have been expressed many times in the past. The writer suggests that, instead of measuring attention in seconds, we should ask about the {{2}} in which people concentrate well, because an accurate understanding encourages {{3}} rather than resignation.",
        answers: [["intuition"], ["media"], ["conditions"], ["change"]],
        wordBank: ["intuition", "statistics", "media", "experts", "conditions", "capacity", "change", "decline", "distraction"],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "When you review this test, compare your results with the first practice test by question type. If the same type caused problems both times, return to that lesson before you take another full test.",
    },
    {
      exam: "ielts",
      body: "Passage 3 had the most questions and the most demanding text, as the last passage often does in the real test. If you ran out of time there, look at your timings for Passages 1 and 2: saving even three minutes on the earlier passages makes a large difference to Passage 3.",
    },
    {
      exam: "toefl",
      body: "Passage 3 practises the same skills as TOEFL Read an Academic Passage questions on purpose, inference and the connection between ideas, although TOEFL passages are much shorter (about 200 words with 5 questions).",
    },
  ],
  vocabulary: [
    { word: "headland", meaning: "a narrow piece of high land that sticks out into the sea", example: "A lighthouse stands on the headland above the bay.", topic: "travel" },
    { word: "obscure", meaning: "to make something difficult to see", example: "Low cloud obscured the top of the mountain.", topic: "environment" },
    { word: "dismantle", meaning: "to take a structure apart piece by piece", example: "The old bridge was dismantled and rebuilt downstream.", topic: "technology" },
    { word: "concentric", meaning: "(of circles) having the same centre", example: "The target was made of five concentric rings.", topic: "science" },
    { word: "intervention", meaning: "action taken to change or control a situation", example: "The wetland recovered with very little human intervention.", topic: "environment" },
    { word: "consensus", meaning: "general agreement among a group", example: "There is no consensus among historians on the cause of the collapse.", topic: "academic" },
    { word: "patchy", meaning: "uneven; good in some places or parts and poor in others", example: "The evidence for the treatment is patchy.", topic: "academic" },
    { word: "meander", meaning: "(of a river) to follow a winding course", example: "The stream meanders slowly through the meadow.", topic: "environment" },
    { word: "monotonous", meaning: "boring because it never changes", example: "Data entry can be monotonous work.", topic: "work" },
    { word: "diminished", meaning: "made smaller or weaker", example: "After the injury, he played with diminished confidence.", topic: "health" },
    { word: "erode", meaning: "to gradually damage or reduce something", example: "Repeated scandals eroded public trust in the company.", topic: "society" },
    { word: "resignation", meaning: "acceptance of something unpleasant that you feel you cannot change", example: "She accepted the delay with resignation.", topic: "society" },
  ],
  keyPoints: [
    "A full IELTS Academic Reading test has three passages and 40 questions in 60 minutes; the passages usually get harder.",
    "Budget time by passage (about 17, 20 and 23 minutes here) and keep to it.",
    "Not Given means the text is silent; False and No need a contradiction.",
    "Headings must cover whole paragraphs; matching features starts by locating each group in the text.",
    "Review by question type and by cause (reading or timing), then return to the matching C1 lesson.",
  ],
};

export default lesson;
