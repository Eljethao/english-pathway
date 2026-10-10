import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-multi-speaker-discussions",
  title: "Following multi-speaker discussions",
  summary:
    "Keep track of three voices at once: who proposes each idea, who sides with whom, and how alliances shift until the group reaches a decision, as in IELTS Part 3 and three-speaker TOEIC Part 3 conversations.",
  skill: "listening",
  level: "C1",
  order: 7,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Listening Part 3" },
    { exam: "toeic", task: "Listening Part 3 – Conversations" },
  ],
  objectives: [
    "Identify which speaker proposes, supports or rejects each idea in a three-way discussion",
    "Recognise language that links one speaker to another: siding with, disagreeing with both, partial agreement and referring back",
    "Follow alliances that change from one topic to the next and identify the final decision",
    "Answer “which person…?” and “what does the group decide?” questions accurately",
  ],
  warmUp: [
    "Think of the last time you planned something with two other people. Did the same two people always agree, or did it change from one decision to the next?",
    "If someone in a meeting says “Well, that's two against one”, what has just happened?",
  ],
  learn: [
    {
      type: "text",
      title: "Three voices, shifting alliances",
      body: "With two speakers, every view belongs to *the other person*. With three, you have to track **who said what** and **who is agreeing with whom**, and the answer often changes from one decision to the next. Two students may outvote the third on the topic, and then the tutor may side with that third student on the method.\n\nIn the B2 course you learnt the basic language of agreement and disagreement. At C1 the challenge is **reference**: speakers rarely repeat an idea in full. They point back to it:\n\n- *I'm with Aisha on this one.* (I agree with what Aisha said, not with you)\n- *Ben's got a point there.* (the last thing Ben said is right)\n- *I don't think either of you has thought about the cost.* (both other speakers are wrong)\n- *As Kofi was saying earlier…* (an earlier idea is coming back)\n\nTo answer correctly, you need to know **whose idea is being referred to** at each moment. Names help enormously: speakers in a group use each other's names far more often than two people do, because they need to show who they are talking to.",
    },
    {
      type: "table",
      title: "Language that links one speaker to another",
      headers: ["Move", "What you hear", "What to note"],
      rows: [
        ["Siding with someone", "I'm with Aisha on this one; I'd go along with what Kofi said; Exactly what Ben said", "Draw a line between the two names"],
        ["Against both others", "I don't think either of you…; Neither of those options really works", "A third position is coming"],
        ["Partial agreement with one", "Kofi's right about the timing, but not the budget", "Split the point: + timing, − budget"],
        ["Referring back", "As Ben was saying earlier…; Going back to Aisha's idea…", "Find the earlier note and link it"],
        ["Joining in", "Can I just come in here?; If I could jump in…", "A new voice, often with a new objection"],
        ["Counting votes", "That's two against one; I'm outnumbered; I'll go with the majority", "The decision is made, whatever the third person thinks"],
        ["Giving way", "Fine, I'll let it go; I can live with that; I won't fight you on it", "The speaker accepts but may not agree"],
        ["Proposing a compromise", "What if we did a bit of both?; Here's a thought…; How about a middle ground?", "Often the final answer"],
      ],
    },
    {
      type: "example",
      title: "Who agrees with whom?",
      items: [
        "Aisha: Let's survey online. Ben: Too slow. Let's interview people. Kofi: **I'm with Aisha.** → Aisha and Kofi agree; Ben is outvoted.",
        "Kofi: The data's too old. Ben: And too small. Aisha: **Ben's right about the size, but** the age doesn't matter. → Aisha agrees with **Ben** on one point and disagrees with **Kofi** on the other.",
        "Aisha: Interviews or a survey? Ben: Interviews. Kofi: **Neither, to be honest.** Let's use the council's figures. → Kofi rejects **both** options.",
        "Ben: OK, **I'm outnumbered.** We'll do the survey. → Ben gives way, but Ben's opinion has not changed. A question about the *decision* = the survey; a question about *Ben's view* = interviews are still Ben's preference.",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "In Part 3, the instructions and the start of the recording tell you who the speakers are. Write their initials above the questions straight away. When you hear a name inside a turn (*Sorry, Ben, but…*), that name usually tells you whose idea is being challenged.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Quick check: what is the speaker doing?",
        instructions: "Match each remark from a three-person discussion to what the speaker is doing. There is one description you do not need.",
        left: [
          "I'm with Aisha on this one.",
          "I don't think either of you has considered the cost.",
          "Kofi's right about the timing, but not about the budget.",
          "Sorry, can I just come in here?",
          "So that's two against one, then.",
          "Fine, I'll let it go.",
          "What if we did a bit of both?",
          "As Ben was saying earlier, the data's already out of date.",
        ],
        right: [
          "agreeing in part with one other speaker",
          "noting that the majority has decided",
          "referring back to another speaker's point",
          "siding with another speaker",
          "asking someone to repeat what they said",
          "proposing a compromise",
          "disagreeing with both other speakers",
          "dropping an objection",
          "interrupting to join the discussion",
        ],
        answer: [3, 6, 0, 8, 1, 7, 5, 2],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model: three students choose a case study",
      voice: "uk",
      transcript:
        "Aisha: Right, Ben, Kofi, we need to choose our case study today. I'd like to propose the coastal town. There's loads of data on visitor numbers, and the council has just published its tourism plan.\nBen: I'm not against it, Aisha, but nearly every group did a seaside town last year. I'd rather do the mountain village. It's a more unusual angle.\nKofi: Can I just come in here? I've been looking into the village, and the trouble is that almost nothing has been written about it. We'd be starting from scratch.\nBen: That's exactly what would make it original, though.\nKofi: Original, yes. Doable in five weeks, no. Sorry, Ben, I'm with Aisha on this one.\nBen: Fine. Two against one. But can we at least avoid just describing visitor numbers? That's what made last year's presentations so dull.\nAisha: Actually, Ben's got a point there. What if we focused on one problem, like housing? A lot of homes in the town have become holiday lets.\nKofi: I'd go along with that. Housing gives us a clear argument.\nBen: Now we're getting somewhere. And the village could still come in as a comparison at the end. Just a slide or two.\nKofi: I'm not sure about that, Ben. A comparison needs data from both places, and we've just agreed there isn't any for the village.\nAisha: I think Kofi's right. Let's keep it to the town.\nBen: OK, OK. I'll let it go. So who's doing what?\nAisha: Kofi, you're good with spreadsheets. Could you take the housing figures?\nKofi: Happy to. And Ben, you should do the interviews. You're much better at getting people to talk than either of us.\nBen: Flattery will get you everywhere. All right, interviews it is. Aisha?\nAisha: I'll pull everything together and write the introduction and the conclusion.\nBen: As long as the conclusion isn't longer than the rest of the presentation, like last time.\nAisha: That was one time, Ben!",
    },
    {
      type: "table",
      title: "How a strong listener tracks the alliances",
      headers: ["Decision", "Aisha", "Ben", "Kofi", "Outcome"],
      rows: [
        ["Which place?", "coastal town (proposes)", "mountain village", "town: “I'm with Aisha”", "Town, two against one"],
        ["What focus?", "housing: “Ben's got a point”", "not just visitor numbers (raises the problem)", "agrees: “I'd go along with that”", "Housing, all three agree"],
        ["Compare with the village?", "against: “Kofi's right”", "for (proposes)", "against: no data", "No comparison; Ben gives way"],
        ["Who does what?", "introduction and conclusion", "interviews (Kofi's suggestion)", "housing figures (Aisha's suggestion)", "Agreed"],
      ],
    },
    {
      type: "text",
      title: "What to notice",
      body: "**Alliances change with the topic.** Aisha and Kofi outvote Ben on the place, but Aisha then agrees with Ben about the focus. A question such as *Who supports Ben's suggestion?* has a different answer for each decision.\n\n**Names tell you who is being challenged.** *Sorry, Ben, I'm with Aisha* contains both the person Kofi disagrees with and the person Kofi agrees with.\n\n**Giving way is not agreeing.** *Two against one* and *I'll let it go* show that Ben accepts the decision, but never says the town is the better choice. If a question asks what Ben *thinks*, the village is still Ben's preference; if it asks what the group *decides*, the answer is the town.\n\n**Who suggests a task is not always who does it.** Kofi suggests that Ben does the interviews, and Aisha suggests that Kofi does the figures. Questions on roles often test exactly this.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice 1: designing a music experiment",
      voice: "uk",
      cast: { "Dr Hughes": "female", Jun: "male" },
      transcript:
        "Dr Hughes: So, Marta, Jun, where have you got to with the design of your music experiment?\nMarta: Well, we agree on the basic idea. Participants do a reading task while music is playing, and we measure how well they do. Where we don't quite agree is what kind of music to use.\nJun: I think we should compare music with lyrics and music without. That's the comparison that matters to students, because most people study with songs on.\nMarta: And I'd rather compare fast and slow music. There's much less research on speed.\nDr Hughes: Can I suggest something, Marta? Less research isn't always a good sign. Sometimes it means the effect is too small to find. Jun's comparison is the one people actually care about.\nMarta: Fair enough. I hadn't thought of it like that. Lyrics it is.\nJun: Great. Then there's the question of participants. I was thinking we'd just ask people on our course.\nMarta: I'm not keen on that, Jun. They all know what we're testing.\nDr Hughes: I agree with Marta. If they can guess what you're looking for, it could change how they behave. Try the first-year psychology students instead. Taking part in studies is part of their course.\nJun: OK, that makes sense.\nMarta: And the room? Jun wanted to use the library.\nJun: It's quiet, and we wouldn't have to book it.\nDr Hughes: It's also full of other people, and you can't control the noise. I'd book one of the testing rooms in this building.\nMarta: That's what I said.\nJun: All right, I'm outnumbered. Testing room.\nDr Hughes: Now, how will you measure performance?\nJun: A comprehension test after each text. Ten multiple-choice questions.\nMarta: I'd also like to time each person, so we know how long they take to read.\nDr Hughes: Both are useful, but don't let the session get too long. Forty minutes at most. After that, people get tired, and tiredness becomes the thing you're measuring.\nMarta: So should we drop one of the texts?\nDr Hughes: I'd keep all three, but make each one shorter.\nJun: That works for me.\nMarta: Me too. And how will they hear the music? I assumed we'd use speakers.\nJun: I'd much prefer headphones. Then everyone hears the music at the same volume, wherever they sit.\nDr Hughes: Jun's right, and headphones will also block out noise from the corridor.\nMarta: OK, headphones. Last thing: do we tell participants what the study is about?\nDr Hughes: You must give them a general description, for ethical reasons, but you don't need to mention lyrics. Just say it's about reading and background sound.\nJun: Perfect. We'll draft the consent form this week.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Which person first suggests each idea? (IELTS Part 3)",
        instructions: "Listen to Marta, Jun and their tutor, Dr Hughes. Who first suggests each idea? You may use any person more than once.",
        left: [
          "comparing music with and without lyrics",
          "comparing fast and slow music",
          "recruiting first-year psychology students",
          "holding the sessions in the library",
          "timing how long each participant takes",
          "making the reading texts shorter",
          "using headphones",
        ],
        right: ["Marta", "Jun", "Dr Hughes"],
        answer: [1, 0, 2, 1, 0, 2, 1],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Alliances and decisions",
        instructions: "Choose the correct answer. Think about who agrees with whom, and whether the group's decision matches each person's view.",
        questions: [
          {
            prompt: "Why does Marta agree to compare music with and without lyrics?",
            options: [
              "Jun shows that most students listen to songs.",
              "The tutor points out that a lack of research may mean the effect is very small.",
              "Marta discovers that studies of musical speed have already been done.",
            ],
            answer: 1,
            explanation: "Dr Hughes says “Less research isn't always a good sign. Sometimes it means the effect is too small to find.” Marta replies “I hadn't thought of it like that.” Jun's point about students came earlier and did not persuade Marta.",
          },
          {
            prompt: "Who objects to using people from the students' own course?",
            options: [
              "Marta, and the tutor supports Marta",
              "The tutor, and Marta supports the tutor",
              "Jun and Marta, but the tutor disagrees",
            ],
            answer: 0,
            explanation: "Marta raises the objection (“I'm not keen on that, Jun”), and Dr Hughes follows: “I agree with Marta.” Jun made the original suggestion.",
          },
          {
            prompt: "What does Jun mean by saying “I'm outnumbered”?",
            options: [
              "Too few people have agreed to take part.",
              "The library has too many students in it.",
              "The other two both prefer the testing room, so Jun accepts it.",
            ],
            answer: 2,
            explanation: "Marta (“That's what I said”) and Dr Hughes both prefer a testing room. *Outnumbered* means the other side has more people, so Jun gives way.",
          },
          {
            prompt: "Why does the tutor want the sessions to last no more than forty minutes?",
            options: [
              "Participants' tiredness could affect the results.",
              "The testing room is only available for forty minutes.",
              "Ten questions per text is too many.",
            ],
            answer: 0,
            explanation: "“After that, people get tired, and tiredness becomes the thing you're measuring.”",
          },
          {
            prompt: "Which statement about the headphones is correct?",
            options: [
              "Marta suggests them, and Jun disagrees.",
              "Jun suggests them, the tutor agrees, and Marta accepts the idea.",
              "The tutor suggests them because they are cheaper than speakers.",
            ],
            answer: 1,
            explanation: "Marta expected speakers; Jun prefers headphones; Dr Hughes says “Jun's right” and adds a second reason (noise from the corridor); Marta then says “OK, headphones.”",
          },
          {
            prompt: "What will participants be told about the study?",
            options: [
              "Nothing, until the experiment is over",
              "That it compares music with and without lyrics",
              "That it is about reading and background sound",
            ],
            answer: 2,
            explanation: "“You don't need to mention lyrics. Just say it's about reading and background sound.”",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice 2: a meeting about new scheduling software",
      voice: "us",
      transcript:
        "Grace: Hiro, Lucas, thanks for staying behind. I wanted to talk about our scheduling software. The licence for the current system runs out at the end of March, and I've been looking at a program called Planwell as a replacement.\nHiro: I've seen the demo, Grace, and honestly, I'm sold. Clients can book their own appointments online, which would save the front desk hours every week.\nLucas: I can see the appeal, Hiro, but we've only just trained everyone on the current system. Switching in March means another round of training in our busiest quarter.\nGrace: That's a fair point, Lucas. The training is the part that worries me too.\nHiro: But Planwell is supposed to be really easy to use. Most people pick it up in an afternoon.\nLucas: Supposed to be. That's what the sales team always says.\nGrace: Here's a thought. What if we extended the current licence for three months and ran Planwell alongside it at one branch? If the staff there are happy with it, we roll it out everywhere in the summer, when things are quieter.\nHiro: A three-month trial? Personally, I'd rather just go for it now, but I can live with that.\nLucas: Now that's something I could support. As long as the trial branch isn't ours. We've got the annual audit in April.\nGrace: Agreed. I was thinking of the Eastfield branch. Their manager has already asked about online booking.\nHiro: Makes sense. Shall I contact the supplier about a price for the trial?\nGrace: Please do. And Lucas, could you find out what it would cost to extend the current licence?\nLucas: Sure. I'll call them first thing tomorrow.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "TOEIC Part 3: a conversation with three speakers",
        instructions: "Choose the best answer to each question. The real test asks three questions per conversation; there are five here for extra practice.",
        questions: [
          {
            prompt: "What are the speakers mainly discussing?",
            options: [
              "Whether to replace a computer system",
              "How to train new front-desk staff",
              "Which branch should be audited",
              "How to attract more online customers",
            ],
            answer: 0,
            explanation: "Grace opens the topic: the current licence runs out and Grace has been looking at Planwell “as a replacement”.",
          },
          {
            prompt: "Why is Lucas concerned about switching in March?",
            options: [
              "The new software is too expensive.",
              "Clients prefer to book by phone.",
              "Staff would need training at a very busy time.",
              "The current licence cannot be extended.",
            ],
            answer: 2,
            explanation: "“Switching in March means another round of training in our busiest quarter.”",
          },
          {
            prompt: "What does Lucas imply by saying “Supposed to be”?",
            options: [
              "Lucas has already tried the software.",
              "Lucas doubts that the software is as easy as claimed.",
              "Lucas thinks the training should take a whole afternoon.",
              "Lucas agrees that the software is easy to use.",
            ],
            answer: 1,
            explanation: "Lucas repeats Hiro's words and adds “That's what the sales team always says”: Lucas does not trust the claim.",
          },
          {
            prompt: "Why is the Eastfield branch chosen for the trial?",
            options: [
              "It is the busiest branch.",
              "Its manager has shown interest in online booking.",
              "It has the newest computers.",
              "Its audit has already been completed.",
            ],
            answer: 1,
            explanation: "“Their manager has already asked about online booking.” The audit belongs to Lucas's branch, which is why it is not chosen.",
          },
          {
            prompt: "What will Lucas do next?",
            options: [
              "Ask the supplier for a trial price",
              "Visit the Eastfield branch",
              "Find out the cost of extending the current licence",
              "Prepare the training materials",
            ],
            answer: 2,
            explanation: "Grace asks Lucas to “find out what it would cost to extend the current licence”. Contacting the supplier is Hiro's job.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "match",
        title: "Final positions",
        instructions: "What is each person's final position on Planwell? There are two positions you do not need.",
        left: ["Grace", "Hiro", "Lucas"],
        right: [
          "would rather switch at once, but accepts a trial",
          "wants to keep the current system permanently",
          "proposes the compromise of a trial",
          "supports a trial on one condition",
          "has no strong opinion either way",
        ],
        answer: [2, 0, 3],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Part 3 matching questions sometimes ask *which person* holds a view or makes a suggestion, and the same person can be the answer more than once. Listen for who says it **first** if the question asks who *suggests* or *proposes*, and for the final agreement if it asks what they *decide*.",
    },
    {
      exam: "ielts",
      body: "When a tutor is in the discussion, notice whose side the tutor takes. A student who is “outnumbered” usually gives way, so the decision follows the other two, but a question about that student's own opinion may still have a different answer.",
    },
    {
      exam: "toeic",
      body: "Part 3 includes conversations between two or three people, each with three questions. With three speakers, some questions ask about one person and some about all of them (*What are the speakers discussing?*). Read the three questions first and note which person each one is about.",
    },
  ],
  vocabulary: [
    { word: "side with", meaning: "to support one person or group in a disagreement", example: "The tutor sided with Marta on the choice of participants.", topic: "everyday" },
    { word: "outnumbered", meaning: "in a smaller group than the people who disagree with you", example: "Jun was outnumbered two to one, so Jun accepted the testing room.", topic: "everyday" },
    { word: "outvote", meaning: "to defeat someone by having more votes", example: "Ben was outvoted on the choice of case study.", topic: "society" },
    { word: "give way", meaning: "to stop arguing and accept what other people want", example: "After a long discussion, Ben finally gave way.", topic: "everyday" },
    { word: "go along with", meaning: "to agree with or accept an idea or plan", example: "I'd go along with that, as long as we finish on time.", topic: "work" },
    { word: "can live with", meaning: "can accept something, although it is not what you would choose", example: "A three-month trial isn't ideal, but I can live with it.", topic: "work" },
    { word: "middle ground", meaning: "a position between two opposing views that both sides can accept", example: "Running the two systems side by side was a sensible middle ground.", topic: "business" },
    { word: "come in (on a discussion)", meaning: "to start speaking in a discussion, often to add or object", example: "Can I just come in here before we decide?", topic: "work" },
    { word: "be sold (on something)", meaning: "to be fully convinced that something is good", example: "After the demo, Hiro was completely sold on the new software.", topic: "business" },
    { word: "roll out", meaning: "to introduce a new system or product to everyone, often in stages", example: "If the trial goes well, they will roll the software out to every branch.", topic: "business" },
    { word: "consensus", meaning: "agreement among everyone in a group", example: "After twenty minutes the group reached a consensus on the topic.", topic: "society" },
  ],
  keyPoints: [
    "In a three-way discussion, alliances change with each decision: track who agrees with whom for every point separately.",
    "Speakers point back to each other's ideas (*I'm with Aisha*, *Ben's got a point*, *neither of you*): know whose idea is being referred to.",
    "Names inside a turn often show who is being challenged or supported.",
    "*Two against one*, *I'm outnumbered* and *I can live with that* show that someone accepts a decision, not that they agree with it.",
    "The person who suggests a task or idea is often not the person who carries it out, and questions test this difference.",
  ],
};

export default lesson;
