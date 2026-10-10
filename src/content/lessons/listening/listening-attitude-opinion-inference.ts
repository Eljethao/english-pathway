import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-attitude-opinion-inference",
  title: "Speaker attitude, opinion and inference",
  summary:
    "Work out what speakers really think when they do not say it directly: track concessions, hedges, partial agreement and changes of mind in academic discussions and conversations.",
  skill: "listening",
  level: "C1",
  order: 2,
  minutes: 20,
  exams: [
    { exam: "ielts", task: "Listening Part 3" },
    { exam: "toefl", task: "Listening – Conversation" },
    { exam: "toefl", task: "Listening – Listen and Choose a Response" },
  ],
  objectives: [
    "Identify a speaker's attitude from stance language, hedging and evaluative words",
    "Separate a concession from the speaker's real position",
    "Follow agreement, partial agreement and changes of mind between two speakers",
    "Infer the intended meaning of indirect remarks and choose an appropriate reply",
  ],
  warmUp: [
    "If a friend says “Well, it wasn't the worst film I've ever seen”, did they enjoy it? How do you know?",
    "In discussions, how do you politely disagree with someone without saying “I disagree”?",
  ],
  learn: [
    {
      type: "text",
      title: "Opinions are rarely stated directly",
      body: "In IELTS Listening Part 3 and TOEFL conversations, speakers seldom say “I think X is good” or “I disagree”. Instead, attitude is spread across the conversation in small signals. Questions then ask you what a speaker *feels*, *believes*, *agrees about* or *decides*.\n\nThe key skill is to listen for the **final position**, not the first reaction. Speakers often:\n\n- **concede** a point before disagreeing: *That's true, but…*, *I'll give you that…*\n- **hedge** to soften a view: *I'm not entirely convinced*, *I'd be a bit wary of…*\n- **change their mind** after hearing a good argument: *Fair enough, I hadn't thought of that.*\n- **agree only partly**: *I wouldn't go that far*, *Up to a point.*",
    },
    {
      type: "table",
      title: "What they say and what they mean",
      headers: ["What you hear", "Likely meaning"],
      rows: [
        ["I'll give you that. / Fair enough.", "I accept this point (but may still disagree overall)"],
        ["I wouldn't go that far.", "I partly agree, but your view is too strong"],
        ["I'm not entirely convinced.", "I doubt it (polite disagreement)"],
        ["I'd be wary of relying on that.", "I don't trust it enough"],
        ["That's hardly a model of…", "It's a bad example of…"],
        ["Let's just say it wasn't my favourite.", "I didn't like it (understatement)"],
        ["I was going to…, but…", "I've changed my plan"],
        ["Now that I like.", "Strong approval after earlier doubts"],
        ["Exactly what I was going to say.", "Full agreement"],
      ],
    },
    {
      type: "example",
      title: "Concession or real opinion?",
      items: [
        "“The sample was small, **but** the results were consistent across every group.” → Overall attitude: **positive** about the results.",
        "“The results were consistent, **but** the sample was tiny.” → Overall attitude: **doubtful**. Same facts, different order, opposite opinion.",
        "“I **suppose** it was useful, in a way.” → Weak, reluctant approval.",
        "“It's **not that** I object to the idea; it's the timing that worries me.” → The speaker accepts the idea but is concerned about the timing.",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "In Part 3, the first opinion you hear is often a distractor. One speaker suggests something, the other objects, and they settle on something else. Wait for signals like “So let's…”, “OK, so we'll…” or “Now that I like” before choosing the answer.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: what is the attitude?",
        instructions: "Read each comment and choose the speaker's attitude.",
        questions: [
          {
            prompt: "“The design is clever, I'll give you that. But who's actually going to pay for it?”",
            options: [
              "Enthusiastic about the project",
              "Impressed by the design but doubtful about funding",
              "Critical of the design",
            ],
            answer: 1,
            explanation: "“I'll give you that” concedes the design point; “but” introduces the real concern: money.",
          },
          {
            prompt: "“I wouldn't go as far as calling it a failure.”",
            options: [
              "The speaker thinks it was a complete success",
              "The speaker thinks it was a complete failure",
              "The speaker thinks it was not entirely successful, but not a failure",
            ],
            answer: 2,
            explanation: "“I wouldn't go as far as…” rejects the strong word (failure) but accepts there were problems.",
          },
          {
            prompt: "“Let's just say the second half of the book didn't exactly keep me awake at night.”",
            options: [
              "The second half was boring",
              "The second half was frightening",
              "The speaker read the book very quickly",
            ],
            answer: 0,
            explanation: "This is an understatement: the second half was not exciting.",
          },
          {
            prompt: "“Hmm, I hadn't looked at it that way. Maybe the online version isn't such a bad idea after all.”",
            options: [
              "The speaker still rejects the online version",
              "The speaker is starting to change their mind",
              "The speaker preferred the online version from the start",
            ],
            answer: 1,
            explanation: "“I hadn't looked at it that way” and “after all” show a change of mind.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model: two students discuss a lecture",
      voice: "uk",
      transcript:
        "Priya: So what did you make of Dr Hale's lecture on the four-day working week?\nDaniel: Honestly? I thought the data were impressive, but I'm not sure they tell us as much as she claimed.\nPriya: How do you mean?\nDaniel: Well, the companies in the trial chose to take part. They were presumably the ones most likely to succeed.\nPriya: That's a fair point, although she did say the results held across very different sectors.\nDaniel: She did, I'll give her that. And I suppose the drop in sick days is hard to argue with.\nPriya: For me, that was the most convincing part, actually. Productivity is so hard to measure, whereas absence is just a number.\nDaniel: True. What I found less persuasive was the bit about customer satisfaction. Surveys like that are notoriously unreliable.\nPriya: I wouldn't go that far. They used the same survey before and after, so at least the comparison is fair.\nDaniel: Hmm, maybe. And the claim that firms found it easier to recruit staff? That was the weakest part, if you ask me. It was based on what managers said, not on any actual hiring figures.\nPriya: I'll grant you that one.\nDaniel: Anyway, are you going to use the study for your essay?\nPriya: I was planning to, but I'd rather find something with a longer time frame. Six months isn't really enough to see whether the effect lasts.\nDaniel: That's exactly what I was going to say.",
    },
    {
      type: "text",
      title: "How a strong listener tracks attitude",
      body: "**What is Daniel's overall view of the lecture?** His first words sound positive (“the data were impressive”), but *but* introduces his real view: the study proves less than the lecturer claimed. He then makes two **concessions** (“I'll give her that”, “I suppose the drop in sick days is hard to argue with”). Overall attitude: **interested but sceptical**.\n\n**Which evidence does Priya find most convincing?** “For me, that was the most convincing part” refers back to *the drop in sick days*. A question might paraphrase this as *the fall in staff absence*.\n\n**Do they agree about the customer survey?** No. Daniel says surveys are “notoriously unreliable”. Priya answers “I wouldn't go that far”, which is **partial disagreement**: she thinks the comparison is fair. Daniel's “Hmm, maybe” shows he is not fully persuaded.\n\n**Will Priya use the study?** “I was planning to, **but**…” signals a **change of plan**. She will probably look for a study with a longer time frame. Daniel's final line shows that on this point they **fully agree**.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice 1: discussing a case study",
      voice: "uk",
      transcript:
        "Mia: Have you finished reading the case study on the beaver reintroduction?\nOwen: Just about. I have to say, I went into it expecting another success story, and came out a bit less sure.\nMia: Really? I thought the results were pretty remarkable. Flooding downstream dropped noticeably once the dams were built.\nOwen: Oh, I'm not disputing that. The flood data is solid. It's more that the report skates over the farmers' side of things. A couple of them lost quite a lot of grazing land when the fields became waterlogged.\nMia: They did get compensation, though.\nOwen: Eventually. After two years of arguing. That's hardly a model of good planning.\nMia: Fair enough, I hadn't picked up on how long it took. Still, I'd argue that's a problem with how the project was managed, not with the idea of bringing beavers back.\nOwen: Maybe. I suppose my worry is that people will read this and assume it'll work the same way anywhere.\nMia: Well, the authors are quite careful about that. There's a whole section saying the site was unusually well suited.\nOwen: Is there? I must have skimmed past it.\nMia: It's near the end. Anyway, what should we focus on in the presentation? I was thinking the water quality findings.\nOwen: Hmm. They're interesting, but the sample was tiny, wasn't it? Three measuring points? I'd be wary of building a whole presentation around that.\nMia: OK, so what's your suggestion?\nOwen: The relationship with the local community. That's what's most likely to decide whether projects like this happen elsewhere.\nMia: I can see the logic. But won't everyone else do that? Dr Patel practically told us it was the obvious angle.\nOwen: Ah, that's true. Well, how about combining things? We could present the flooding results and then ask whether they'd be enough to win over a sceptical farmer.\nMia: Now that I like. It's a bit different, and we've got proper data to work with.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Attitude and opinion questions",
        instructions: "Listen to Mia and Owen and choose the correct answer.",
        questions: [
          {
            prompt: "How did Owen feel after reading the case study?",
            options: [
              "Less positive than he had expected to be",
              "Convinced that the project had failed",
              "Surprised that it was a success story",
            ],
            answer: 0,
            explanation: "“I went into it expecting another success story, and came out a bit less sure.”",
          },
          {
            prompt: "What is Owen's opinion of the flood data?",
            options: ["It is exaggerated", "It is reliable", "It is incomplete"],
            answer: 1,
            explanation: "“I'm not disputing that. The flood data is solid.” His criticism is about the farmers, not the data.",
          },
          {
            prompt: "What does Mia think about the delay in paying compensation?",
            options: [
              "It shows that reintroducing beavers is a bad idea",
              "It was reasonable, given the size of the losses",
              "It was a failure of organisation, not a reason to reject the scheme",
            ],
            answer: 2,
            explanation: "“That's a problem with how the project was managed, not with the idea of bringing beavers back.”",
          },
          {
            prompt: "What does Owen mean when he says “I must have skimmed past it”?",
            options: [
              "He thinks that section of the report is unimportant",
              "He admits that he missed some information",
              "He doubts that Mia has read the report carefully",
            ],
            answer: 1,
            explanation: "He did not notice the section about the site being unusually well suited, because he read too quickly.",
          },
          {
            prompt: "Why does Owen reject Mia's first idea for the presentation?",
            options: [
              "The findings are based on too little data",
              "The topic is too obvious",
              "The findings are not relevant to farmers",
            ],
            answer: 0,
            explanation: "“The sample was tiny… Three measuring points? I'd be wary of building a whole presentation around that.” The “too obvious” objection is Mia's, about Owen's idea.",
          },
          {
            prompt: "What do they finally decide to focus on?",
            options: [
              "The water quality findings",
              "The project's relationship with the local community",
              "The flooding results, and whether they would convince a doubtful farmer",
            ],
            answer: 2,
            explanation: "Owen suggests combining the flooding results with the farmers' point of view, and Mia approves: “Now that I like.”",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice 2: four students talk about online lectures",
      voice: "uk",
      transcript:
        "Kenji: When they announced it, I was furious, honestly. But I've come round to it. Being able to pause a lecture and go back when I lose the thread has made a real difference, and I'd hate to go back to the old way now. I do miss chatting to people after lectures, but that's a small price to pay.\nSara: People keep asking whether I mind. I suppose I would if I lived miles away, but I'm five minutes from campus, so it makes very little difference to me either way. I watch them, I take notes, same as before. Honestly, I've got bigger things to think about this year, like finding a part-time job.\nTom: Everyone says it's more flexible, and I'm sure it is for some people. But I came here to be part of something, and watching a screen on my own isn't that. Given what we're paying, I can't help feeling we've been short-changed. A recording is fine for revision, but it's no substitute for being in the room.\nLeah: I can see why they did it, and the recordings are useful. Whether it's the right decision in the long run, though, I think it's too early to say. Let's see what the exam results look like at the end of the year. If students do just as well, then fair enough. If not, the university will need to rethink.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Match the speaker to the attitude",
        instructions: "The university has moved all first-year lectures online. Listen to four students. What is each student's attitude to the decision? There are two attitudes you do not need.",
        left: ["Kenji", "Sara", "Tom", "Leah"],
        right: [
          "believes the decision was made to save money",
          "has changed their mind in favour of it",
          "wants more evidence before judging it",
          "is worried about failing exams",
          "does not feel strongly either way",
          "feels students are not getting value for money",
        ],
        answer: [1, 4, 5, 2],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "respond",
        title: "Understand the implied meaning",
        instructions: "Listen to each remark. What is the speaker really saying? Choose the most appropriate reply.",
        items: [
          {
            audio: "I've read your draft. Let's just say the conclusion could do with a bit more work.",
            options: [
              "Great, so I can submit it today.",
              "OK, I'll take another look at the ending tonight.",
              "I haven't started the draft yet.",
              "Thanks, I spent ages on the introduction.",
            ],
            answer: 1,
            explanation: "“Could do with a bit more work” is a polite way of saying the conclusion is weak.",
          },
          {
            audio: "You're not seriously thinking of driving there in this weather, are you?",
            options: [
              "Maybe you're right. I'll take the train instead.",
              "Yes, it's a lovely day for a drive.",
              "No, I've never been there before.",
              "It's about two hours by car.",
            ],
            answer: 0,
            explanation: "The question is really a warning: the speaker thinks driving is a bad idea.",
          },
          {
            audio: "I wouldn't say no to another coffee, if you're making one.",
            options: [
              "Sorry, I didn't realise you'd stopped drinking coffee.",
              "Sure. Milk, no sugar, like before?",
              "I'm not sure what you'd like to say.",
              "No, thanks. I've just had one.",
            ],
            answer: 1,
            explanation: "“I wouldn't say no” means “I'd like one”. The double negative is a polite yes.",
          },
          {
            audio: "If I were you, I'd double-check those figures before the meeting.",
            options: [
              "The meeting went very well, thanks.",
              "Thanks. Do you think there's a mistake somewhere?",
              "I'm afraid I can't attend the meeting.",
              "Sure, I'd be happy to check them for you.",
            ],
            answer: 1,
            explanation: "The advice suggests the speaker has noticed a possible problem with the figures.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In Part 3 multiple choice, all three options are often mentioned. The wrong ones are suggested and then rejected, or belong to the other speaker. For each option, ask: *Who said it, and did they keep that view?*",
    },
    {
      exam: "ielts",
      body: "For matching questions about opinions (for example, “What does the tutor think about each source?”), the opinion is often expressed with evaluative words such as *solid*, *dated*, *tiny* or *hardly a model of*. Write a quick + or − next to each item as you listen.",
    },
    {
      exam: "toefl",
      body: "Conversation questions can ask what a speaker *implies* or *means* by a phrase. The answer is rarely the literal meaning. Think about why the speaker chose those words in that situation.",
    },
    {
      exam: "toefl",
      body: "In Listen and Choose a Response, indirect remarks are common: advice disguised as “If I were you…”, warnings disguised as questions, requests disguised as “I wouldn't say no…”. Choose the reply that responds to the intended meaning.",
    },
  ],
  vocabulary: [
    { word: "concede", meaning: "to admit that something is true, often unwillingly", example: "He conceded that the flood data was reliable.", topic: "academic" },
    { word: "sceptical", meaning: "doubting that something is true or useful", example: "The farmers were sceptical about the project at first.", topic: "society" },
    { word: "skate over", meaning: "to deal with a problem too quickly, without proper attention", example: "The report skates over the costs to local businesses.", level: "C1", topic: "academic" },
    { word: "hardly", meaning: "almost not; used to say something is not true at all", example: "Two years of arguing is hardly good planning.", topic: "everyday" },
    { word: "come round to", meaning: "to change your opinion and accept something you disagreed with", example: "She didn't like the idea at first, but she's come round to it.", topic: "everyday" },
    { word: "short-changed", meaning: "treated unfairly by being given less than you deserve", example: "Students felt short-changed when classes moved online.", topic: "education" },
    { word: "notoriously", meaning: "in a way that is well known for being bad", example: "Self-reported surveys are notoriously unreliable.", topic: "academic" },
    { word: "wary of", meaning: "careful because you do not completely trust something", example: "I'd be wary of drawing conclusions from three measurements.", topic: "academic" },
    { word: "win over", meaning: "to persuade someone to support you", example: "The data might win over some of the critics.", topic: "society" },
    { word: "understatement", meaning: "saying something is less important or extreme than it really is", example: "“It was a bit wet” was an understatement: the whole street flooded.", topic: "everyday" },
    { word: "the obvious angle", meaning: "the approach to a topic that most people would choose", example: "Everyone will take the obvious angle, so let's try something different.", topic: "education" },
  ],
  keyPoints: [
    "Listen for the speaker's final position, not their first reaction.",
    "After a concession (“I'll give you that”, “that's true”), the real opinion follows “but”, “still” or “though”.",
    "Partial agreement (“I wouldn't go that far”, “up to a point”) is different from full agreement or disagreement.",
    "Changes of plan are signalled by “I was going to…, but…” and approval by phrases like “Now that I like”.",
    "Indirect remarks (understatement, advice, polite requests) carry a meaning you must infer.",
  ],
};

export default lesson;
