import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-table-flowchart-completion",
  title: "Table and flow-chart completion",
  summary:
    "Use the structure of a table or flow-chart to predict answers, follow a speaker row by row or stage by stage, and complete IELTS table and flow-chart tasks accurately.",
  skill: "listening",
  level: "B2",
  order: 6,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Listening Part 1" },
    { exam: "ielts", task: "Listening Part 4" },
  ],
  objectives: [
    "Read a table before you listen and use its headings and completed cells to predict each answer",
    "Follow a speaker through a table row by row, using row labels as signposts",
    "Track the stages of a process, including sentences where “before” or “once” changes the order",
    "Complete flow-charts by writing words from the recording or by choosing options from a box",
  ],
  warmUp: [
    "Think of a process you know well, such as making coffee or applying for a passport. What are its main stages?",
    "When you compare three phone contracts or three hotels, what information would you put in a table?",
  ],
  learn: [
    {
      type: "text",
      title: "How table and flow-chart tasks work",
      body: "**Tables** often appear in IELTS Part 1, when someone compares a few options (courses, tours, flats), and in Part 4, when a lecturer compares methods, places or periods. A **flow-chart** shows the stages of a process, with arrows from one stage to the next. It is common in Part 4 lectures about how something is made, tested or developed.\n\nBoth are really notes with a strong structure, and that structure helps you. The column headings tell you what kind of word each gap needs, the row labels tell you when the speaker has moved on, and the arrows of a flow-chart show the order of events.\n\nSome flow-charts ask you to write words from the recording. Others give you a box of options (A, B, C…), and you choose a letter for each gap. In that case the options are usually paraphrases, so you match meaning, not sound.",
    },
    {
      type: "table",
      title: "Read the table before you listen",
      headers: ["Look at…", "It tells you…", "Example"],
      rows: [
        ["The column headings", "the type of information in each gap", "A gap under *Cost* needs a price; a gap under *Day* needs a day of the week."],
        ["The completed cells", "the form and length of the answer", "If the other cells in the column say *£45*, the gap needs a number only."],
        ["The row labels", "the signpost the speaker will use", "When you hear *the Spanish course*, you know you are on that row."],
        ["The gap numbers", "the order of the answers", "The numbers usually run across each row, so the speaker deals with one row at a time."],
      ],
    },
    {
      type: "text",
      title: "Following a process",
      body: "In a flow-chart, the stages are in time order, but a speaker does not always describe them in that order inside one sentence. Watch out for **before**, **after**, **once** and **only after**:\n\n- *Before the fabric is dyed, it is washed in hot water.* → Washing comes **first**, even though you hear it second.\n- *Once the beans have dried, they are packed into sacks.* → Drying comes first.\n- *The samples are frozen, but only after they have been labelled.* → Labelling comes first.\n\nAlso listen for stages that the speaker says are **not** part of the process any more (*We used to boil the leaves as well, but we've dropped that step*). They are distractors.",
    },
    {
      type: "example",
      title: "Sequence language in processes",
      items: [
        "**The process starts with** the raw material.",
        "**Once that's done**, the mixture is heated.",
        "**At this point**, the liquid is filtered.",
        "**Before** it can be sold, it has to be tested.",
        "**It's only then that** the product is packed.",
        "**The final stage is** quality control.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: which comes first?",
        instructions: "Read what a lecturer says about a process. Choose the stage that happens FIRST. The last question is about reading a table.",
        questions: [
          {
            prompt: "“Before the clay is fired in the kiln, it's left to dry for several days.”",
            options: ["Firing the clay", "Drying the clay"],
            answer: 1,
            explanation: "*Before X, Y* means Y happens first. The clay dries, and then it is fired.",
          },
          {
            prompt: "“The bottles are filled, and it's only then that the labels are put on.”",
            options: ["Filling the bottles", "Putting on the labels"],
            answer: 0,
            explanation: "*Only then* means the labels come after the filling.",
          },
          {
            prompt: "“The wool is spun into thread once it has been washed and combed.”",
            options: ["Spinning the wool", "Washing and combing the wool"],
            answer: 1,
            explanation: "*Once it has been washed and combed* describes the earlier stage, even though you hear it second.",
          },
          {
            prompt: "“The samples are frozen, but not until they've been weighed.”",
            options: ["Weighing the samples", "Freezing the samples"],
            answer: 0,
            explanation: "*Not until* they've been weighed means weighing comes first.",
          },
          {
            prompt: "A table has the column *Price per person*. The other cells in that column say “£35” and “£60”. The gap is “£ ______”. What should you write?",
            options: ["A number only, such as 40", "A number and the word “pounds”", "A word such as “cheap”"],
            answer: 0,
            explanation: "The £ sign is already printed, and the other cells contain numbers, so write the number only.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "table",
      title: "Model task: Greenfield Community Centre evening courses",
      headers: ["Course", "Day", "About the tutor", "Cost (10 weeks)"],
      rows: [
        ["Digital photography", "Monday", "works as a **(1)** ______ for the local paper", "£95"],
        ["Conversational Spanish", "**(2)** ______", "grew up in Madrid", "£110"],
        ["Furniture restoration", "Thursday", "has owned an antique **(3)** ______ for 20 years", "£**(4)** ______, materials included"],
      ],
    },
    {
      type: "text",
      title: "Before you listen",
      body: "The instructions say: Write ONE WORD AND/OR A NUMBER for each answer. A strong listener reads across each row and predicts:\n\n1. a job (*works as a…*)\n2. a day of the week\n3. a noun for a business (*an antique…*)\n4. a number: the other cells in the column are prices without the word *pounds*",
    },
    {
      type: "audio",
      title: "Model call: evening courses",
      voice: "uk",
      transcript:
        "Nadia: Greenfield Community Centre, Nadia speaking.\nTom: Hi Nadia, my name's Tom. I'm interested in your evening courses, and I wondered if you could tell me a bit about them.\nNadia: Of course, Tom. We've got three starting next month. The first is digital photography, which runs on Mondays. The tutor, Sara, works as a journalist, so she takes photos for the local paper every day. It's ninety-five pounds for the ten weeks.\nTom: Sounds good. What about the Spanish course?\nNadia: Conversational Spanish used to be on Tuesdays, but this term it's moved to Wednesdays, because the hall is being painted. The tutor grew up in Madrid, so you'll hear a real accent. That one's a hundred and ten pounds.\nTom: And the third course?\nNadia: Furniture restoration, on Thursdays. It's taught by Mike, who's owned an antique shop for twenty years, so he really knows his stuff. It's a bit more expensive, a hundred and forty pounds, but that includes all the materials.\nTom: That's the one I'm most interested in, actually.",
    },
    {
      type: "text",
      title: "How a strong listener completes the table",
      body: "1. **journalist**. The speaker gives the tutor's name and job together. *Sara* is not the answer, because the cell asks what she does.\n2. **Wednesday**. *Tuesday* is the old day: *used to be… but this term it's moved* is the past-versus-present trap.\n3. **shop**. The printed words around the gap (*antique… for 20 years*) tell you exactly when to listen. The answer is the only new word.\n4. **140**. *Including all the materials* matches the words already in the cell, which confirms that you are in the right place.\n\nNotice how the row labels worked as signposts: *the Spanish course*, *the third course*. If you miss an answer, the next row label tells you where the speaker is, so you can carry on.",
    },
  ],
  practice: [
    {
      type: "table",
      title: "Practice table 1: Valley Cycle Tours",
      headers: ["Tour", "Distance", "Highlight", "Price per person"],
      rows: [
        ["Riverside Ride", "**(1)** ______ km", "a visit to a **(2)** ______ farm", "£35"],
        ["Castle Loop", "38 km", "lunch in the castle **(3)** ______", "£**(4)** ______"],
        ["Hill Challenge", "55 km", "views of the **(5)** ______ from Mount Brae", "£60; cycling **(6)** ______ not included"],
      ],
    },
    {
      type: "audio",
      title: "Practice 1: booking a cycle tour",
      voice: "uk",
      transcript:
        "Lucy: Good morning, Valley Cycle Tours, Lucy speaking.\nBen: Oh, hello Lucy. My name's Ben. A few friends and I would like to do one of your guided tours next month, and I'd like some details.\nLucy: Of course, Ben. We have three tours. The easiest is the Riverside Ride. It's completely flat, and it's twenty-two kilometres in total. Halfway round, you stop at a cheese farm, where you can see how the cheese is made and try some.\nBen: That sounds lovely. How much is it?\nLucy: Thirty-five pounds per person. Then there's the Castle Loop, which is thirty-eight kilometres. Most people choose it because of the lunch. You eat in the castle gardens, not inside the castle itself, which is closed for repairs at the moment.\nBen: And the price?\nLucy: It was forty-five pounds, but we've just reduced it to forty, because the castle is closed.\nBen: Right. And the third tour?\nLucy: That's the Hill Challenge, fifty-five kilometres, for experienced cyclists only. The best part is the view from the top of Mount Brae. On a clear day, you can see the sea.\nBen: How much is that one?\nLucy: Sixty pounds. Bikes and helmets are included on all our tours, but for the Hill Challenge you'll need to bring your own cycling shoes.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Table completion (IELTS Part 1)",
        instructions: "Read the table above and predict each answer. Then listen and write your answers. Write ONE WORD AND/OR A NUMBER for each answer.",
        text: "Riverside Ride: distance {{0}} km\nRiverside Ride: a visit to a {{1}} farm\nCastle Loop: lunch in the castle {{2}}\nCastle Loop: price £{{3}}\nHill Challenge: views of the {{4}} from Mount Brae\nHill Challenge: cycling {{5}} not included",
        answers: [
          ["22", "twenty-two"],
          ["cheese"],
          ["gardens"],
          ["40", "forty", "40.00"],
          ["sea"],
          ["shoes"],
        ],
      },
    },
    {
      type: "audio",
      title: "Practice 2: how chocolate is made",
      voice: "uk",
      transcript:
        "Today we're following the journey of chocolate, from a tree in the tropics to the bar in your hand. Most people never think about the early stages, but that's where much of the flavour is created.\n\nCacao grows in large pods on the trunk and branches of the tree. When the pods are ripe, farm workers cut them down, usually with a long knife called a machete. The pods are then split open to reveal the seeds, which we call beans, surrounded by a sweet white pulp.\n\nNext comes fermentation, and this is the stage that surprises most students. The beans and pulp are piled into heaps or wooden boxes and covered with banana leaves. They're left for several days, and during this time the bitter taste of the beans begins to change. Without fermentation, chocolate simply wouldn't taste like chocolate.\n\nOnce fermentation is complete, the beans are spread out to dry in the sun for about a week. Then they're packed into sacks and shipped to factories around the world.\n\nAt the factory, the beans are roasted, which deepens their flavour. The thin shells are then removed, leaving small pieces called nibs, and these nibs are ground into a thick paste.\n\nTo make eating chocolate, the paste is mixed with sugar, and for milk chocolate, milk powder as well. Then comes a stage called conching, when the mixture is stirred and heated for hours, sometimes days, to make it smooth. Finally, the chocolate is tempered, which means it's carefully heated and cooled. This gives it a shine and that satisfying snap when you break it.",
      cast: { narrator: "male" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Flow-chart completion (IELTS Part 4)",
        instructions: "Complete the flow-chart. Write ONE WORD ONLY for each answer.",
        text: "From cacao pod to chocolate bar\n\nRipe pods are cut from the tree, usually with a {{0}}\n↓\nBeans and pulp are covered with banana {{1}} for several days (fermentation)\n↓\nBeans are dried in the {{2}} for about a week\n↓\nDried beans are packed into {{3}} and shipped to factories\n↓\nAt the factory, the beans are {{4}} to deepen the flavour\n↓\nShells are removed, and the nibs are ground into a thick {{5}}\n↓\nThe mixture is stirred and heated for hours to make it {{6}} (conching)\n↓\nCareful heating and cooling gives the chocolate a {{7}} and a snap (tempering)",
        answers: [
          ["machete", "knife"],
          ["leaves"],
          ["sun"],
          ["sacks"],
          ["roasted"],
          ["paste"],
          ["smooth"],
          ["shine"],
        ],
      },
    },
    {
      type: "audio",
      title: "Practice 3: restoring a coral reef",
      voice: "us",
      transcript:
        "In the last part of today's lecture, I'd like to describe how one coral restoration project I've worked on helps damaged reefs to recover. The method is often called coral gardening, and it works in a series of clear stages.\n\nThe process starts with small pieces of living coral. In our project, divers never break pieces off healthy coral. Instead, they collect fragments that have already broken off, for example after a storm.\n\nThese fragments are taken to an underwater nursery. There, they're attached to frames, which are often shaped a little like trees and hang in the water above the sea floor. That keeps them away from sand and from many of the animals that feed on coral.\n\nThe fragments are then left to grow, usually for several months. During this time, volunteers dive down regularly to clean the frames, because seaweed grows very quickly and can block the light that the coral needs.\n\nOnce the corals are big enough, they're moved to the damaged reef. Each one is fixed in place, either with a special cement that's safe for marine life, or with cable ties.\n\nBut the work doesn't end there. For at least a year afterwards, the team takes photographs of each coral at regular intervals, so that they can measure how well it's growing. We also tried recording the water temperature at every site, but that turned out to be too expensive, so now we only do it at a few locations.",
      cast: { narrator: "female" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "match",
        title: "Flow-chart completion with a box of options (IELTS Part 4)",
        instructions: "Complete the flow-chart. Choose the correct option, A–I, for each gap. There are three options you do not need.",
        left: [
          "Stage 1: Divers collect coral fragments that are already ______.",
          "Stage 2: In the nursery, the fragments are attached to ______.",
          "Stage 3: The fragments grow there for several ______.",
          "Stage 4: Volunteers clean off ______ so that the coral gets enough light.",
          "Stage 5: Corals are fixed to the damaged reef with cement or ______.",
          "Stage 6: For at least a year, the team measures growth using ______.",
        ],
        right: ["broken", "cable ties", "frames", "healthy", "months", "photographs", "sand", "seaweed", "temperature"],
        answer: [0, 2, 4, 7, 1, 5],
      },
    },
    {
      type: "table",
      title: "Practice table 2: keeping food cold before refrigerators",
      headers: ["Method", "How it worked", "Main advantage", "Main limitation"],
      rows: [
        ["Ice house", "ice from frozen lakes stored underground and covered with **(1)** ______", "ice could last into the **(2)** ______", "only the **(3)** ______ could afford one"],
        ["Root cellar", "a cool room dug into the ground", "kept vegetables and apples fresh through the winter", "not cold enough to keep **(4)** ______ safe for long"],
        ["Pot-in-pot cooler", "a small clay pot inside a larger one, with wet **(5)** ______ between them", "needs no **(6)** ______", "works best when the air is **(7)** ______"],
      ],
    },
    {
      type: "audio",
      title: "Practice 4: keeping food cold",
      voice: "uk",
      transcript:
        "Good morning. Today we're looking at how people kept food cold before the electric refrigerator, and I'll focus on three methods.\n\nThe first is the ice house. In winter, blocks of ice were cut from frozen lakes and rivers and stored in a building that was mostly underground. The ice was packed tightly together and then covered with a thick layer of straw, which acted as insulation. The great advantage was that a well-built ice house could keep ice right through into the summer. The drawback was cost. Building one was expensive, so only the wealthy, people with large country estates, could afford them.\n\nThe second method was far more common, the root cellar. This was simply a room dug into the ground, where the temperature stays cool and fairly steady all year. Families used cellars to keep potatoes, carrots and apples fresh through the winter. But a cellar was never cold enough to keep meat safe for long, so meat usually had to be salted or smoked instead.\n\nThe third method is still used today in some parts of the world, the pot-in-pot cooler. You place a small clay pot inside a larger one and fill the space between them with wet sand. As the water evaporates through the outer pot, it carries heat away, and the inner pot stays cool. It's cheap, and the key point is that it needs no electricity at all. However, evaporation works best when the air is dry, so these coolers are much less useful in humid places.",
      cast: { narrator: "male" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "gap",
        title: "Table completion (IELTS Part 4)",
        instructions: "Read the table above. Then listen to the lecture and write your answers. Write ONE WORD ONLY for each answer.",
        text: "Ice house: covered with {{0}}\nIce house: ice could last into the {{1}}\nIce house: only the {{2}} could afford one\nRoot cellar: not cold enough to keep {{3}} safe for long\nPot-in-pot cooler: wet {{4}} between the pots\nPot-in-pot cooler: needs no {{5}}\nPot-in-pot cooler: works best when the air is {{6}}",
        answers: [["straw"], ["summer"], ["wealthy"], ["meat"], ["sand"], ["electricity"], ["dry"]],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In table tasks, the question numbers usually run across the rows, so the speaker talks about one row at a time. Before you listen, read across each row and tell yourself what is missing, for example: *Riverside Ride: distance, then the kind of farm.*",
    },
    {
      exam: "ielts",
      body: "Flow-chart questions may ask you to write words from the recording or to choose letters from a box. With a box, there are more options than gaps, and the options are often paraphrases of what you hear. Check that your choice fits the grammar of the stage, too.",
    },
    {
      exam: "ielts",
      body: "Check the word limit for every task. If it says ONE WORD ONLY, write *straw*, not *a layer of straw*. Words and symbols already printed in the table, such as *km* or *£*, do not need to be written again.",
    },
  ],
  vocabulary: [
    { word: "stage", meaning: "one part of a process", example: "Fermentation is the stage that surprises most students.", topic: "academic" },
    { word: "ferment", meaning: "to change chemically over time because of bacteria or yeast, often improving the flavour", example: "The beans are left to ferment for several days.", topic: "science" },
    { word: "roast", meaning: "to cook something with dry heat, for example in an oven", example: "The beans are roasted to deepen their flavour.", topic: "everyday" },
    { word: "grind (ground, ground)", meaning: "to crush something into very small pieces or a powder", example: "The nibs are ground into a thick paste.", topic: "everyday" },
    { word: "fragment", meaning: "a small piece that has broken off something", example: "Divers collect coral fragments after storms.", topic: "environment" },
    { word: "nursery", meaning: "a place where young plants (or corals) are grown before being moved", example: "The fragments grow in an underwater nursery.", topic: "environment" },
    { word: "insulation", meaning: "material that stops heat from passing through", example: "Straw was used as insulation in ice houses.", topic: "science" },
    { word: "evaporate", meaning: "(of a liquid) to change into a gas", example: "As the water evaporates, the inner pot stays cool.", topic: "science" },
    { word: "humid", meaning: "(of air) warm and containing a lot of water", example: "Pot-in-pot coolers work badly in humid places.", topic: "environment" },
    { word: "drawback", meaning: "a disadvantage or problem", example: "The main drawback of ice houses was the cost.", topic: "academic" },
    { word: "highlight", meaning: "the best or most interesting part of something", example: "The highlight of the tour is the view of the sea.", topic: "travel" },
  ],
  keyPoints: [
    "Column headings and completed cells tell you the type and form of each answer.",
    "Answers usually come row by row: row labels are signposts that tell you where the speaker is.",
    "Flow-charts follow time order, but “before”, “once” and “only after” can change the order inside one sentence.",
    "Steps or options that the speaker rejects, or says were dropped, are distractors.",
    "Obey the word limit and don't repeat words or symbols that are already printed.",
  ],
};

export default lesson;
