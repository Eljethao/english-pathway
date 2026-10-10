import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-signposting-lecture-structure",
  title: "Signposting and lecture structure",
  summary:
    "Use a lecturer's signposting language to predict what comes next, follow digressions and returns, and keep your place in long academic talks such as IELTS Part 4 and TOEFL Academic Talk.",
  skill: "listening",
  level: "C1",
  order: 1,
  minutes: 20,
  exams: [
    { exam: "ielts", task: "Listening Part 4" },
    { exam: "toefl", task: "Listening – Academic Talk" },
  ],
  objectives: [
    "Recognise signposts that introduce, sequence, contrast, exemplify, digress, return, emphasise and summarise",
    "Build a mental outline of a lecture from its opening overview",
    "Distinguish central points from digressions and qualifications",
    "Answer questions about the function of a phrase and the organisation of a talk",
  ],
  warmUp: [
    "Think of the best lecture or presentation you have ever attended. What did the speaker do that made it easy to follow?",
    "If a speaker says “Incidentally…”, what do you expect to hear next? Is it likely to be tested?",
  ],
  learn: [
    {
      type: "text",
      title: "Why signposts matter at C1",
      body: "Academic speakers rarely say “Point number two is…”. Instead, they use **signposting language**: words and phrases that tell you where the talk is going, how ideas relate to each other, and how important each part is.\n\nAt C1 level, signposts do three jobs for you:\n\n- **Navigation.** In IELTS Part 4 there is no break in the middle. Signposts such as *moving on to* or *that brings me to* tell you that the next set of questions is about to start.\n- **Prediction.** An overview like *I'll look at X, then Y, and finally Z* gives you the outline before the content arrives.\n- **Weighting.** Phrases such as *what I want to stress here* or *the heart of the matter* mark what will probably be tested, while *incidentally* or *as an aside* mark material that probably will not be.",
    },
    {
      type: "table",
      title: "Signposting language by function",
      headers: ["Function", "Typical phrases"],
      rows: [
        ["Outlining the talk", "I'll start by… then turn to… and finish by…; There are three aspects I'd like to cover"],
        ["Moving on", "Moving on to…; Turning now to…; That brings me to…; Let's now consider…"],
        ["Adding a point", "What's more…; On top of that…; Another factor is…"],
        ["Contrasting", "By contrast…; Having said that…; That's not to say…; Conversely…"],
        ["Giving examples", "Take the case of…; A case in point is…; To illustrate this…"],
        ["Emphasising", "What I want to stress here is…; This is really the crux of it; I can't overstate…"],
        ["Rephrasing", "In other words…; Put another way…; What I mean by that is…"],
        ["Qualifying", "I should stress, though, that…; This is only one interpretation…"],
        ["Digressing", "Incidentally…; As an aside…; That's a story for another day"],
        ["Returning", "Anyway, back to…; Getting back to the main point…; As I was saying…"],
        ["Referring back", "As I mentioned earlier…; I said I'd come back to…"],
        ["Summarising", "To recap…; To sum up…; So, to pull these threads together…"],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "When you hear the overview at the start of Part 4, glance at the headings in the notes. They usually match the sections the speaker announces, in the same order. Now you know which heading each part of the talk belongs to.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Quick check: what does each signpost do?",
        instructions: "Match each phrase to its function. There is one function you do not need.",
        left: [
          "Let me put that another way.",
          "That's a bit of a digression, but…",
          "Getting back to the main point…",
          "A case in point is…",
          "Having said that…",
          "What I want to stress here is…",
          "That brings me to my final point.",
          "To recap…",
        ],
        right: [
          "summarising",
          "giving an example",
          "inviting questions from the audience",
          "returning to the main topic",
          "emphasising a key point",
          "rephrasing an idea",
          "moving to the last section",
          "introducing a contrasting idea",
          "leaving the main topic briefly",
        ],
        answer: [5, 8, 3, 1, 7, 4, 6, 0],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model lecture: citizen science",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Right, let's make a start. Today's lecture is about citizen science, that is, research in which members of the public, rather than professional scientists, collect or analyse data. I'm going to do three things: first, give you a brief history; then look at what makes these projects work; and finally, consider some of the criticisms.\n\nTo begin with, then, the history. Although the term itself is only a few decades old, the practice is much older. Amateur astronomers and birdwatchers were recording observations long before science became a profession. What's changed recently is the scale. Smartphones mean that hundreds of thousands of volunteers can now submit a photograph or a sound recording in seconds.\n\nMoving on to what makes a project succeed. The key factor, it seems, is that the task has to be simple enough to do without training, yet meaningful enough that people feel they're contributing. Take the case of projects that ask volunteers to classify galaxies from telescope images. Each task takes seconds, but the cumulative result is a data set that no research team could produce alone.\n\nIncidentally, some of these volunteers have gone on to make genuine discoveries in their own right, though that's a story for another day.\n\nAnyway, back to the main thread. The third issue I want to address is criticism, and the most common one concerns data quality. If untrained people are collecting data, how far can we trust it? Now, this is a legitimate concern, but it's often overstated. Most well-designed projects build in checks, for instance by having several volunteers classify the same item and only accepting answers they agree on.\n\nSo, to sum up: citizen science isn't new, but technology has transformed its scale; it works best when tasks are simple but meaningful; and while data quality is a fair question, it can largely be managed through careful design. Next week, we'll look at the ethical side, in particular who gets the credit for discoveries.",
    },
    {
      type: "table",
      title: "How a strong listener maps the lecture",
      headers: ["Signpost heard", "Function", "What the listener does"],
      rows: [
        ["I'm going to do three things: first… then… and finally…", "Outline", "Writes three headings: history, success factors, criticisms"],
        ["To begin with, then, the history", "Start of section 1", "Starts notes under heading 1"],
        ["What's changed recently is…", "Contrast with the past", "Notes the key change: scale, because of smartphones"],
        ["Moving on to what makes a project succeed", "Start of section 2", "Moves to heading 2"],
        ["The key factor, it seems, is…", "Emphasis", "Underlines: simple but meaningful tasks"],
        ["Take the case of…", "Example", "Writes e.g. classifying galaxies"],
        ["Incidentally… a story for another day", "Digression", "Writes nothing, or a small note in brackets"],
        ["Anyway, back to the main thread", "Return", "Gets ready for heading 3"],
        ["Now, this is a legitimate concern, but…", "Concession, then the speaker's real view", "Notes: concern is real but overstated"],
        ["So, to sum up", "Summary", "Checks the notes against the three points"],
      ],
    },
    {
      type: "text",
      title: "What to notice",
      body: "The lecturer's **opening overview** gives the whole structure in one sentence. A strong listener writes the three headings before the content arrives.\n\nThe **digression** about volunteers making discoveries is interesting, but the speaker clearly marks it as outside the main argument (*Incidentally… a story for another day*). Questions rarely target material like this.\n\nThe sentence “this is a legitimate concern, **but** it's often overstated” is a typical C1 pattern: the speaker first **concedes** a point and then gives their own view. If a question asks for the lecturer's opinion about data quality, the answer comes after *but*.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice lecture: what Roman concrete can teach engineers",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Good morning. Today I'd like to turn to a question that has puzzled engineers for a long time: why have so many Roman concrete structures survived for two thousand years, when modern concrete often starts to crack within a few decades? I'll start by outlining what made Roman concrete different, then look at a recent explanation for its durability, and finish by considering what this might mean for construction today.\n\nLet's begin with the ingredients. Roman concrete was made from lime, water and pieces of rock, but what really set it apart was the volcanic ash the Romans added, which reacts chemically with the lime. Harbour walls are particularly interesting in this respect, because seawater, which usually damages modern concrete, actually seems to have made the Roman material stronger over time.\n\nThat brings me to the second point, and this is really the heart of today's lecture. For years, researchers assumed that the small white lumps of lime found throughout Roman concrete were simply a sign of poor mixing. In other words, careless workmanship. I'll come back to the question of mixing in a moment. However, a study published in twenty twenty-three suggested something quite different. The lumps, it argued, are there for a reason. When a crack forms and water gets in, the water reaches these lumps and dissolves some of the lime, and that solution then hardens again, filling the crack. In effect, the concrete repairs itself.\n\nI should stress, though, that this is one hypothesis among several, and not everyone in the field is convinced.\n\nNow, I said I'd come back to the question of mixing, and it's relevant here. The researchers believe the lumps formed because the Romans used a method called hot mixing, in which quicklime is added directly rather than first being combined with water. This produces very high temperatures during mixing, and it's that heat which leaves the lime lumps behind.\n\nFinally, what are the implications? Cement production is responsible for around eight per cent of global carbon dioxide emissions, so concrete that lasts longer and needs fewer repairs could bring a real environmental benefit. Several companies are already experimenting with self-healing mixtures, although it's too early to say whether they'll be commercially viable.\n\nTo recap, then: volcanic ash made Roman concrete chemically different; lime lumps may allow it to heal its own cracks; and if that's right, it could help reduce the carbon footprint of building. For next week, please read the article on the reading list about concrete that contains bacteria, which takes the idea of self-healing in a rather different direction.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Questions about structure and function",
        instructions: "Listen to the lecture and choose the best answer. These questions are about how the lecture is organised and what the signposts mean.",
        questions: [
          {
            prompt: "According to the lecturer's overview, what will the final part of the lecture deal with?",
            options: [
              "The ingredients of Roman concrete",
              "A recent explanation for the concrete's durability",
              "What Roman concrete might mean for modern construction",
              "The history of Roman harbour building",
            ],
            answer: 2,
            explanation: "The overview ends: “and finish by considering what this might mean for construction today.”",
          },
          {
            prompt: "Why does the lecturer say “this is really the heart of today's lecture”?",
            options: [
              "To show that the topic is changing completely",
              "To signal that the next section is the most important",
              "To admit that the previous section was too long",
              "To introduce a personal opinion that is not supported by evidence",
            ],
            answer: 1,
            explanation: "“The heart of” something is its most central part. This is a weighting signpost: the self-repair explanation is the main focus.",
          },
          {
            prompt: "What is the purpose of “I should stress, though, that this is one hypothesis among several”?",
            options: [
              "To warn that the self-repair explanation is not universally accepted",
              "To emphasise that the 2023 study proved the theory",
              "To return to a point made at the start of the lecture",
              "To introduce an example from another field",
            ],
            answer: 0,
            explanation: "This is a qualifying signpost: “not everyone in the field is convinced”.",
          },
          {
            prompt: "When the lecturer says “Now, I said I'd come back to the question of mixing”, what is the lecturer doing?",
            options: [
              "Correcting an earlier mistake",
              "Summarising the whole lecture",
              "Returning to a topic raised earlier in the talk",
              "Starting a digression that will not be tested",
            ],
            answer: 2,
            explanation: "The lecturer mentioned mixing earlier (the lumps were thought to show “poor mixing”) and promised to come back to it. Now the lecturer keeps that promise.",
          },
          {
            prompt: "What does the lecturer imply about self-healing concrete made by companies today?",
            options: [
              "It is already widely used in construction",
              "Its commercial success is still uncertain",
              "It is less effective than Roman concrete",
              "It produces more carbon dioxide than normal concrete",
            ],
            answer: 1,
            explanation: "“It's too early to say whether they'll be commercially viable.”",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Complete the lecture notes",
        instructions: "Listen to the lecture again if you need to. Complete the notes. Write ONE WORD ONLY for each answer.",
        text: "Roman concrete\n\n1. Ingredients\n- key difference: volcanic {{0}} reacts with the lime\n- seawater made harbour walls {{1}} over time\n\n2. Self-repair hypothesis\n- white lime lumps previously seen as a sign of careless {{2}}\n- water enters a {{3}}, dissolves lime, solution hardens again\n- lumps probably caused by high {{4}} during hot mixing\n\n3. Implications\n- cement: approx. 8% of global CO2 emissions\n- reading for next week: concrete containing {{5}}",
        answers: [
          ["ash"],
          ["stronger"],
          ["workmanship", "mixing"],
          ["crack"],
          ["temperatures", "temperature", "heat"],
          ["bacteria"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "dictation",
        title: "Dictation: signposts at natural speed",
        instructions: "Listen and type each sentence. Pay attention to the small words that are easy to miss in fast speech.",
        voice: "uk",
        sentences: [
          "That brings me to the second point, which is really the heart of the matter.",
          "I should stress, though, that this is only one interpretation.",
          "Incidentally, that's a story for another day.",
          "Anyway, getting back to what I was saying about the costs.",
          "So, to pull these threads together, there are three things to remember.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Part 4 questions follow the order of the talk, and the note headings follow the speaker's sections. If you hear “that brings me to…” or “turning now to…” and you are still waiting for an answer in the previous section, move on immediately: that answer has passed.",
    },
    {
      exam: "toefl",
      body: "Academic Talk questions cover main ideas, details, organisation and inference, so some ask *why* the professor mentions something or how one part of the talk relates to another. Signposts tell you the function: an example, a qualification, a digression or a return to an earlier point.",
    },
    {
      exam: "toefl",
      body: "Digressions are rarely tested, but the main point that comes after “anyway” or “back to…” is much more likely to be. Use digressions as a moment to tidy your notes.",
    },
  ],
  vocabulary: [
    { word: "signpost", meaning: "a word or phrase that shows the structure or direction of a talk or text", example: "Phrases like “moving on” are signposts that help listeners follow a lecture.", topic: "academic" },
    { word: "digression", meaning: "a temporary move away from the main subject", example: "After a short digression about his own research, the professor returned to the main topic.", topic: "academic" },
    { word: "the crux / the heart of the matter", meaning: "the most important or central part of a problem or argument", example: "The crux of the debate is who pays for the repairs.", topic: "academic" },
    { word: "qualify (a statement)", meaning: "to limit a statement or make it less absolute", example: "She qualified her claim by saying the evidence was still limited.", topic: "academic" },
    { word: "hypothesis", meaning: "an idea that is suggested as an explanation but has not yet been proved", example: "The self-healing hypothesis is still being tested.", topic: "science" },
    { word: "durability", meaning: "the ability to last a long time without breaking or getting weaker", example: "Engineers are studying the durability of ancient buildings.", topic: "science" },
    { word: "cumulative", meaning: "increasing gradually as more is added", example: "The cumulative effect of thousands of small tasks was a huge data set.", topic: "academic" },
    { word: "overstated", meaning: "described as larger or more serious than it really is", example: "Concerns about data quality are often overstated.", topic: "academic" },
    { word: "commercially viable", meaning: "able to make enough money to succeed as a business", example: "It is not yet clear whether the new material is commercially viable.", topic: "business" },
    { word: "carbon footprint", meaning: "the amount of carbon dioxide produced by an activity, person or organisation", example: "Longer-lasting materials could reduce the carbon footprint of construction.", topic: "environment" },
    { word: "recap", meaning: "to repeat the main points briefly", example: "To recap, there are three main causes.", topic: "academic" },
  ],
  keyPoints: [
    "The opening overview gives you the structure of the lecture: write the headings before the content arrives.",
    "Signposts show navigation (moving on), weighting (the heart of the matter) and relationships (by contrast, in other words).",
    "Digressions are clearly marked and rarely tested; the point after “anyway” or “back to” usually is.",
    "After a concession (“this is a legitimate concern, but…”) the speaker's real view comes after “but”.",
    "In IELTS Part 4, a new signpost means a new section: if you missed an answer, move on.",
  ],
};

export default lesson;
