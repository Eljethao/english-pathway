import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-processes-maps",
  title: "Describing processes and maps",
  summary:
    "Describe a process diagram with the passive voice and clear sequencing, and compare two maps using the language of change and location, for IELTS Academic Writing Task 1.",
  skill: "writing",
  level: "B2",
  order: 2,
  minutes: 35,
  exams: [{ exam: "ielts", task: "Writing Task 1 (Academic)" }],
  objectives: [
    "Describe every stage of a process in a logical order using the passive voice",
    "Use a range of sequencing words and clauses (Once…, After being…, …, where…)",
    "Describe changes between two maps with verbs such as convert, replace and demolish",
    "Write an overview for a process (stages, start and end) and for a map (the main changes)",
  ],
  warmUp: [
    "Think of something you make often, such as coffee or a sandwich. What are the stages, from start to finish?",
    "How has a street or area in your town changed in the last ten years? What was built, removed or changed?",
  ],
  learn: [
    {
      type: "text",
      title: "Processes: what is different?",
      body: "A process diagram has **no numbers to compare**. Instead, you describe each stage in order, from the first to the last. Some processes are **man-made** (making a product in a factory) and some are **natural** (the life cycle of a frog). Some are **linear** (they have a clear start and end) and some are **cycles** (they repeat).\n\nUse the same four-paragraph structure as for charts:\n\n1. **Introduction**: paraphrase what the diagram shows.\n2. **Overview**: how many stages there are, where the process starts and where it ends.\n3. **Details 1**: the first half of the stages.\n4. **Details 2**: the second half of the stages.\n\nUse the **present simple**, because the process happens regularly.",
    },
    {
      type: "table",
      title: "The passive voice in process descriptions",
      headers: ["Active (who does it is not important)", "Passive (focus on the product)"],
      rows: [
        ["Workers pick the olives by hand or by machine.", "The olives **are picked** by hand or by machine."],
        ["A machine crushes the olives.", "The olives **are crushed** by a machine."],
        ["They store the oil in steel tanks.", "The oil **is stored** in steel tanks."],
        ["Someone must filter the oil.", "The oil **must be filtered**."],
        ["Once they have washed the olives, …", "Once the olives **have been washed**, …"],
      ],
    },
    {
      type: "example",
      title: "Sequencing language: avoid starting every sentence with ‘Then’",
      items: [
        "**First,** / **To begin with,** the olives are harvested.",
        "**Next,** / **After that,** / **Subsequently,** they are washed.",
        "**Once** the paste has been mixed, it is passed through a centrifuge.",
        "**After being** washed, the olives are crushed.",
        "**Before** the oil is bottled, it is filtered.",
        "The olives are taken to a mill, **where** they are washed. (relative clause)",
        "**Finally,** / **In the final stage,** the bottles are labelled.",
      ],
    },
    {
      type: "text",
      title: "Maps: describing change over time",
      body: "Map tasks usually show the same place at two (or three) different times. Your overview should sum up the **general change**, for example *the area became more residential* or *the village developed into a town*.\n\nChoose your tense carefully:\n\n- Both maps in the past (*1990 and 2010*): use the **past simple passive**: *The factory **was demolished**.*\n- Past and **today / now**: use the **present perfect passive**: *The factory **has been demolished**.*\n- A plan for the future: use *will be* or *is going to be*: *A new road **will be built**.*\n\nOrganise your details by **area** (the north and the south, or the land and the coast) or by **time** (the first map, then the changes).",
    },
    {
      type: "table",
      title: "Map language",
      headers: ["Type of change", "Example sentence"],
      rows: [
        ["Something new", "A sports centre **was built** / **was constructed** next to the school."],
        ["Something removed", "The old cinema **was demolished** / **was knocked down**."],
        ["New use, same building", "The post office **was converted into** a restaurant."],
        ["One thing instead of another", "The bus station **was replaced by** a shopping centre."],
        ["Bigger or smaller", "The airport runway **was extended**. / The forest **was reduced in size**."],
        ["Moved", "The library **was relocated to** the north of the town."],
        ["No change", "The church **remained unchanged**. / The church **is still there**."],
        ["Location", "**to the north of** the river, **in the south-east corner**, **opposite** the station, **alongside** the road, **between** A and B"],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "You can use words from the diagram labels, but change their form where you can: *Harvesting* → *the olives are harvested*; *Storage* → *the oil is stored*. This shows lexical and grammatical range.",
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*The diagram below shows how olive oil is produced.*\n\n*Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.*",
    },
    {
      type: "image",
      src: "/images/writing-processes-maps-olive-oil.svg",
      alt: "Process diagram with eight stages of olive oil production. Stage 1, on the farm: harvesting, olives picked from trees between October and December. Then at the mill: 2 washing, leaves and dirt removed with water; 3 crushing, olives and stones crushed into a paste; 4 mixing, paste stirred slowly for 30 to 40 minutes; 5 separating, a centrifuge separates oil, water and solids, and the solid waste by-product is used as fuel or fertiliser; 6 storing, oil kept in steel tanks for 4 to 6 weeks so that sediment settles; 7 filtering, oil filtered to make it clear; 8 bottling, oil bottled, labelled and transported to shops.",
      caption: "How olive oil is produced",
    },
    {
      type: "passage",
      title: "Model answer (200 words)",
      paragraphs: [
        "The diagram illustrates the stages involved in the production of olive oil, from the harvesting of the olives to the moment the bottled oil is sent to shops.",
        "Overall, there are eight main stages in the process. Only the first stage takes place on the farm, while the other seven are carried out at a mill, ending with the bottling of the oil. The process also creates a solid by-product that can be reused.",
        "To begin with, the olives are picked from the trees between October and December. They are then taken to the mill, where they are washed to remove any leaves and dirt. Next, the olives are crushed, together with their stones, to form a paste. This paste is slowly mixed for 30 to 40 minutes.",
        "In the next stage, a machine called a centrifuge is used to separate the oil from the water and the solid waste. The waste is used as fuel or fertiliser, while the oil is stored in steel tanks for four to six weeks so that any sediment can settle. After that, the oil is filtered to make it clear. Finally, it is poured into bottles, which are labelled and transported to shops.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **Overview**: it gives the number of stages, where the process starts and ends (farm → mill), and one key feature (the by-product). No stage is described in detail here.\n- **Every stage is included**: examiners check that nothing is missing.\n- **Passive voice** throughout: *are picked, are washed, is used, are labelled*.\n- **Varied sequencing**: *To begin with, then, Next, In the next stage, After that, Finally*. There is no long chain of *Then… Then… Then…*\n- **Relative clauses** join stages: *the mill, where they are washed* / *bottles, which are labelled*.\n- **Purpose**: *to remove any leaves*, *so that any sediment can settle* explain why a stage happens, using only information from the diagram.\n- **Present simple**, because the process happens every year.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "order",
        mode: "lines",
        title: "Put the process in order",
        instructions: "These sentences describe how plastic bottles are recycled into T-shirts. Put them in the correct order.",
        items: [
          "To begin with, used plastic bottles are collected from recycling bins.",
          "They are then taken to a factory, where they are sorted by colour.",
          "Next, the labels and caps are removed, and the bottles are washed.",
          "The clean plastic is cut into small flakes.",
          "These flakes are melted and formed into tiny pellets.",
          "The pellets are heated again and stretched into long, thin fibres.",
          "After that, the fibres are spun into yarn, which is knitted into fabric.",
          "Finally, the fabric is cut and sewn to make T-shirts.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Use the passive",
        instructions: "This text describes how black tea is produced. Complete it with the correct passive form of the verb in brackets. Use the present simple passive unless the sentence needs another form.",
        text: "First, the young tea leaves {{0}} (pick) by hand. They {{1}} (spread) out on large trays so that they lose some of their water. Next, the leaves {{2}} (roll) by machines, which breaks them open. After that, they {{3}} (leave) in a warm room for a few hours, where they turn dark brown. Once the leaves {{4}} (dry) in hot air, they {{5}} (sort) by size. Finally, the tea {{6}} (pack) into boxes and {{7}} (send) to shops around the world.",
        answers: [
          ["are picked"],
          ["are spread"],
          ["are rolled"],
          ["are left"],
          ["have been dried", "are dried"],
          ["are sorted"],
          ["is packed"],
          ["sent", "is sent"],
        ],
      },
    },
    {
      type: "image",
      src: "/images/writing-processes-maps-harbour.svg",
      alt: "Two maps of Kelby harbour. In 2000: open land north of Harbour Road; south of the road, from west to east, a fish market, a car park and a row of warehouses; a pier with a lighthouse at the end, and fishing boats moored to the east of the pier. Today: a multi-storey car park on the former open land north of Harbour Road; the fish market is now a food hall; the car park is now a public square with trees and a fountain; the warehouses are now apartments and cafés; a promenade runs along the seafront; a marina for yachts has been built to the west of the pier; the pier and lighthouse are unchanged and there are no fishing boats.",
      caption: "Kelby harbour in 2000 and today",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Read the maps",
        instructions: "Look at the maps of Kelby harbour and answer the questions.",
        questions: [
          {
            prompt: "What happened to the fish market?",
            options: [
              "It has been demolished.",
              "It has been converted into a food hall.",
              "It has been moved to the north of Harbour Road.",
              "It has remained unchanged.",
            ],
            answer: 1,
            explanation: "The building is in the same place, but it now has a different use.",
          },
          {
            prompt: "Which sentence correctly describes the car parking?",
            options: [
              "The car park has been extended.",
              "The car park has been converted into apartments.",
              "The car park has been replaced by a public square, and a multi-storey car park has been built north of Harbour Road.",
              "The car park is still in the same place.",
            ],
            answer: 2,
          },
          {
            prompt: "Which features have not changed?",
            options: ["the warehouses", "the open land", "the pier and the lighthouse", "the fishing boats"],
            answer: 2,
          },
          {
            prompt: "Where has the marina been built?",
            options: [
              "to the east of the pier",
              "to the west of the pier",
              "to the north of Harbour Road",
              "in the centre of the public square",
            ],
            answer: 1,
          },
          {
            prompt: "Choose the best overview.",
            options: [
              "Overall, the fish market has been converted into a food hall.",
              "Overall, the harbour was better in 2000 because there were more jobs for local people.",
              "Overall, the harbour has changed from a working fishing port into an area for living and leisure, although the pier and lighthouse remain.",
              "Overall, nothing has changed apart from the car park.",
            ],
            answer: 2,
            explanation: "A is a detail, not an overview. B gives an opinion and a reason that are not on the map. D is wrong.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "write",
        title: "Writing Task 1: the Kelby harbour maps",
        prompt:
          "The maps above show the harbour area of the town of Kelby in 2000 and today.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
        minWords: 150,
        minutes: 20,
        rubric: [
          "Task achievement: my introduction paraphrases the task, and my overview sums up the general change and what stayed the same.",
          "Task achievement: I described all the main changes accurately and did not add opinions or information that is not on the maps.",
          "Coherence and cohesion: I organised the details logically (for example, the area in 2000, then the changes) and used linkers such as since then, while and in addition.",
          "Lexical resource: I used a range of change verbs (converted into, replaced by, built, constructed) and location phrases (to the west of, north of, alongside).",
          "Grammatical range and accuracy: I used the present perfect passive for changes up to today (has been converted) and the past simple for 2000, with few errors.",
        ],
        modelAnswer:
          "The two maps compare the harbour area of Kelby in 2000 with the same area today.\n\nOverall, the harbour has been transformed from a working fishing port into a residential and leisure area. The old buildings south of Harbour Road now have new uses, while the road itself, the pier and the lighthouse have stayed the same.\n\nIn 2000, there were three main features south of Harbour Road: a fish market in the west, a car park in the centre and a row of warehouses in the east. Fishing boats were moored to the east of the pier, and the land north of the road was open and undeveloped.\n\nSince then, the fish market has been converted into a food hall, and the warehouses have become apartments with cafés. The car park has been replaced by a public square with trees and a fountain, and a multi-storey car park has been built on the open land north of Harbour Road. In addition, a promenade now runs along the seafront, and a marina for yachts has been constructed to the west of the pier. The fishing boats, however, have disappeared.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "For a process, do not skip any stage and do not add information that is not in the diagram. If the diagram does not say who does something, use the passive and leave it out.",
    },
    {
      exam: "ielts",
      body: "For maps, look for the **big picture** first: did the area become more modern, more residential, better for tourists or better for traffic? Put this in your overview, then give the details.",
    },
    {
      exam: "ielts",
      body: "Check the dates on the maps before you write. *1995 and 2015* → past simple. *2000 and now* → present perfect. *Present and planned* → future passive (*will be built*).",
    },
  ],
  vocabulary: [
    { word: "stage", meaning: "one step in a process", example: "The process consists of eight main stages.", topic: "academic" },
    { word: "by-product", meaning: "something produced while making something else", example: "Sawdust is a by-product of furniture making.", topic: "science" },
    { word: "harvest", meaning: "to collect crops from the fields or trees", example: "The grapes are harvested in September.", topic: "environment" },
    { word: "crush", meaning: "to press something so hard that it breaks or becomes flat", example: "The olives are crushed to form a paste.", topic: "science" },
    { word: "subsequently", meaning: "after that; later (formal)", example: "The fibres are subsequently spun into yarn.", topic: "academic" },
    { word: "demolish", meaning: "to completely destroy a building", example: "The old cinema was demolished in 2010.", topic: "society" },
    { word: "convert into", meaning: "to change something so it can be used in a different way", example: "The warehouses have been converted into flats.", topic: "society" },
    { word: "replace", meaning: "to put something new in the place of something else", example: "The car park was replaced by a public square.", topic: "society" },
    { word: "relocate", meaning: "to move to a new place", example: "The bus station was relocated to the edge of town.", topic: "society" },
    { word: "residential", meaning: "having houses or flats where people live", example: "The area has become much more residential.", topic: "society" },
    { word: "alongside", meaning: "next to and along the side of something", example: "A cycle path runs alongside the river.", topic: "travel" },
    { word: "transform", meaning: "to change something completely", example: "The old port has been transformed into a leisure area.", topic: "society" },
  ],
  keyPoints: [
    "Processes: give an overview with the number of stages and the start and end; then describe every stage in order.",
    "Use the passive voice (is picked, are washed, has been dried) and varied sequencing (Once…, After being…, where…).",
    "Maps: give an overview of the general change, then describe changes by area or by time.",
    "Use change verbs (built, demolished, converted into, replaced by, extended, relocated) and location phrases (to the north of, alongside).",
    "Match your tense to the dates: past simple for two past dates, present perfect for past to now.",
  ],
};

export default lesson;
