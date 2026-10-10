import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-multiple-choice-distractors",
  title: "Beating multiple-choice distractors",
  summary:
    "In listening multiple choice, most wrong options are mentioned in the recording. Learn the main types of distractor and a method for tracking which option the speakers finally confirm.",
  skill: "listening",
  level: "B2",
  order: 2,
  minutes: 20,
  exams: [
    { exam: "ielts", task: "Listening Part 2" },
    { exam: "ielts", task: "Listening Part 3" },
    { exam: "toeic", task: "Listening Part 3 – Conversations" },
  ],
  objectives: [
    "Recognise the main types of distractor in multiple-choice listening questions",
    "Follow a speaker's reasoning when ideas are suggested and then rejected",
    "Answer “choose TWO” and matching questions by tracking which options are confirmed",
  ],
  warmUp: [
    "Have you ever chosen an answer in a listening test just because you heard the same word in the recording? Was it correct?",
    "How do people politely reject an idea in a discussion? Think of three phrases.",
  ],
  learn: [
    {
      type: "text",
      title: "Why the wrong options sound right",
      body: "In a multiple-choice listening question, you will usually hear something about **every** option. The question writers do this on purpose. A wrong option that is mentioned in the recording is called a **distractor**.\n\nSo the question is never “Which option did I hear?” but “Which option did the speaker **confirm**?”",
    },
    {
      type: "table",
      title: "Six common distractors",
      headers: ["Type", "What happens", "Example"],
      rows: [
        ["Suggested, then rejected", "An idea is mentioned, but someone says no to it", "We thought about a picnic, but the forecast is awful, so we're going to the museum."],
        ["Correction", "A speaker changes a detail", "It starts on the fifth. No, sorry, the sixth."],
        ["Past vs present", "The option was true before, but isn't now", "It used to be a cinema. Now it's a gym."],
        ["Someone else's view", "The option is true for a different person", "My tutor loves the idea, but I'm not convinced."],
        ["Word match", "The option repeats words from the audio but changes the meaning", "Audio: Parking isn't a problem. Option: Parking is difficult."],
        ["Partly true", "Half of the option is right", "Audio: The tour includes the castle but not the museum. Option: The tour includes the castle and the museum."],
      ],
    },
    {
      type: "example",
      title: "Language that often signals a distractor",
      items: [
        "We **were going to** hire a van, **but** …",
        "**At first** I thought it was the cost, **but actually** …",
        "That **would have been** ideal, **except** …",
        "**Some people say** …, **but in my experience** …",
        "**It used to be** …, **whereas now** …",
        "**That's not really an option**, because …",
      ],
    },
    {
      type: "text",
      title: "A method for each question",
      body: "1. **Read the question stem carefully**, not just the options. Ask: Whose opinion? Which time, past or present? *The main* reason or *one* reason?\n2. **Don't choose at the first match.** When you hear an option, wait for the speaker to confirm or reject it.\n3. **Cross out options as they are rejected.** The option that is still standing at the end is often the answer.\n4. **For “choose TWO”**, expect to hear something about all five options. Tick only the two that the speaker clearly agrees with.\n5. **Expect paraphrase.** The correct option usually uses different words from the recording. An option that uses the exact same words should make you suspicious.",
    },
    {
      type: "tip",
      exam: "ielts",
      body: "In Part 3, two or more speakers (for example, two students and a tutor) discuss a study topic and often disagree. The answer is what they finally decide, or what the speaker named in the question thinks. Underline names in the questions so you know whose view you need.",
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model discussion: choosing a presentation topic",
      voice: "uk",
      transcript:
        "Lena: So, we need to choose a topic for our group presentation. Any ideas?\nOmar: Well, I was thinking about fast fashion, you know, how cheap clothes affect the environment.\nLena: That's interesting, but didn't a group last term do almost exactly that? Professor Hart might think we're just repeating it.\nOmar: Hmm, you're right. What about food waste in supermarkets?\nLena: I like that. There's loads of recent research on it, and the supermarket near campus might even let us interview the manager.\nOmar: True. Although I'm a bit worried about time. Interviews take ages to arrange.\nLena: We don't have to do interviews. We could just use the published reports.\nOmar: OK, food waste it is, then. Now, what about the format? I'd quite like to make a short video.\nLena: A video would look great, but none of us knows how to edit one. I think slides with a few charts would be safer.\nOmar: Fair enough. Slides it is.",
    },
    {
      type: "text",
      title: "How a strong listener does it",
      body: "**Question 1: Which topic do they choose?** A fast fashion B food waste C supermarket management\n\n- A is *suggested, then rejected*: a group did it last term.\n- C is a *word match*: “supermarket” and “manager” are in the audio, but they are about a possible interview, not the topic.\n- **B** is confirmed: “food waste it is, then.”\n\n**Question 2: Why is Omar worried about the food waste topic?** A There is not enough research. B Interviews take a long time to organise. C The professor may not like it.\n\n- A is the *opposite* of what Lena says (“loads of recent research”).\n- C is the reason for rejecting **fast fashion**, not food waste.\n- **B** is a paraphrase of “Interviews take ages to arrange.”\n\n**Question 3: What format will they use?** A a video B slides C a written report\n\n- A is *suggested, then rejected*: nobody can edit video. C is a *word match*: “published reports” are only a source of information, not the format. **B** is confirmed: “Slides it is.”",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice audio 1: four short extracts",
      voice: "uk",
      cast: { Narrator: "female" },
      transcript:
        "Narrator: Extract one.\nMan: I was going to take the train to the conference, but the tickets were so expensive that I'm driving instead.\nNarrator: Extract two.\nWoman: My sister thinks the new library is ugly. Personally, I love the design.\nNarrator: Extract three.\nMan: The Thursday yoga class used to start at six, but since September it's been at half past six.\nNarrator: Extract four.\nWoman: The hotel was fine. The room was a bit small, but that didn't bother me, and it was spotless. The breakfast, though, was really disappointing.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Spot the distractor",
        instructions: "Listen to four short extracts. Choose the correct answer. Then read the explanation to see which type of distractor was used.",
        questions: [
          {
            prompt: "1. How will the man travel to the conference?",
            options: ["By train", "By car", "By plane"],
            answer: 1,
            explanation: "Suggested, then rejected: the train was his first plan, but “I'm driving instead.”",
          },
          {
            prompt: "2. What is the woman's opinion of the new library?",
            options: ["She dislikes the design.", "She likes the design.", "She hasn't seen it yet."],
            answer: 1,
            explanation: "Someone else's view: her sister thinks it's ugly, but “Personally, I love the design.”",
          },
          {
            prompt: "3. What time does the Thursday class start now?",
            options: ["6.00", "6.30", "7.00"],
            answer: 1,
            explanation: "Past vs present: it “used to start at six”, but now it is at half past six.",
          },
          {
            prompt: "4. What did the woman complain about?",
            options: ["The size of the room", "How clean the room was", "The breakfast"],
            answer: 2,
            explanation: "The room was small, but “that didn't bother me”, and it was spotless (very clean). Her only real complaint is the breakfast.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 2: a local radio report",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Good morning, and welcome to What's On. Today I'm talking about the reopening of the Old Mill Arts Centre, which has been closed for two years. Many listeners will know that the building was originally a flour mill, and for a long time after that it was used as a furniture warehouse. The council bought it in the nineteen nineties and turned it into an arts centre.\n\nThe recent building work cost far more than planned. The original budget was about two million pounds, and in the end it came to just over three million, mainly because the roof needed replacing. Interestingly, the new heating system, which many people expected to be expensive, actually came in under budget.\n\nSo what's new? The theatre is the same size as before, with around three hundred seats, but they're now much more comfortable. The biggest change is the gallery on the top floor, in the space that used to be offices. It will show work by local artists, and the exhibition will change every month.\n\nFor the opening weekend, tickets for the theatre shows are already sold out, I'm afraid. But there's no need to book for the gallery, which is free all weekend. The café will also be open, though only until four, not in the evening as was first announced.\n\nParking near the centre is very limited, so the organisers are asking visitors to come by public transport. There's a bus stop right outside, and the number twelve runs every ten minutes.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Multiple choice (IELTS Part 2)",
        instructions: "Listen to the radio report. Choose the correct letter, A, B or C.",
        questions: [
          {
            prompt: "1. What was the building used for just before the council bought it?",
            options: ["A flour mill", "A furniture warehouse", "Council offices"],
            answer: 1,
            explanation: "It was originally a flour mill, then “for a long time after that” a furniture warehouse, and then the council bought it. “Offices” are mentioned later, but only as the old use of the top-floor space that is now the gallery.",
          },
          {
            prompt: "2. Why did the building work cost more than expected?",
            options: ["The roof had to be replaced.", "The heating system was expensive.", "The theatre was made bigger."],
            answer: 0,
            explanation: "“Mainly because the roof needed replacing.” The heating system came in under budget, and the theatre is the same size.",
          },
          {
            prompt: "3. What is the biggest change to the building?",
            options: ["The theatre has more seats.", "There is a new gallery.", "The offices have moved to the top floor."],
            answer: 1,
            explanation: "“The biggest change is the gallery on the top floor.” The seats are more comfortable, not more numerous, and the top floor used to be offices.",
          },
          {
            prompt: "4. During the opening weekend, visitors can",
            options: ["buy theatre tickets on the day.", "visit the gallery without paying.", "have dinner in the café."],
            answer: 1,
            explanation: "The gallery “is free all weekend”. Theatre tickets are sold out, and the café closes at four.",
          },
          {
            prompt: "5. Visitors are advised to",
            options: ["park in the street outside.", "travel by bus.", "book a parking space in advance."],
            answer: 1,
            explanation: "Organisers ask visitors “to come by public transport”, and there is a bus stop right outside. Parking is very limited.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 3: a tutorial about a work placement",
      voice: "uk",
      cast: { Tutor: "female" },
      transcript:
        "Tutor: So Ravi, how was your work placement at the design company?\nRavi: Really useful, thanks. I was worried I'd just be making coffee, but they gave me real projects from the first week.\nTutor: That's great. What did you find most valuable?\nRavi: Definitely working with clients. I had to present ideas to them, which was scary at first, but I got much more confident. And I learned a lot about deadlines. At university we can sometimes get an extension, but at the company a deadline was a deadline.\nTutor: What about the software? You were looking forward to learning some new design programs.\nRavi: Well, actually, they used the same software we use here, so there wasn't much new there.\nTutor: I see. Were there any difficulties?\nRavi: The commute was tiring. It was nearly an hour each way. But the main problem was that my manager was often travelling, so it was hard to get feedback on my work. My colleagues were friendly, though, and helped when they could.\nTutor: Would you recommend the company to next year's students?\nRavi: Yes, but I'd tell them to ask for regular meetings with their manager right from the start. And maybe to find somewhere to live closer to the office.\nTutor: Good advice. Thanks, Ravi.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Choose TWO (IELTS Part 3)",
        instructions: "Listen to the conversation. For each question, choose TWO answers.",
        questions: [
          {
            prompt: "Which TWO things does Ravi say he gained from the placement?",
            options: [
              "confidence in presenting to clients",
              "skills in new design software",
              "experience of leading a project",
              "an understanding of strict deadlines",
              "useful contacts in the industry",
            ],
            answer: [0, 3],
            explanation: "He “got much more confident” presenting to clients, and learned that “a deadline was a deadline”. The software was the same as at university, and he worked on projects but never says he led one.",
          },
          {
            prompt: "Which TWO difficulties does Ravi mention?",
            options: [
              "unfriendly colleagues",
              "the long journey to work",
              "too much routine work",
              "difficult clients",
              "a lack of feedback from his manager",
            ],
            answer: [1, 4],
            explanation: "“The commute was tiring … nearly an hour each way” and “it was hard to get feedback”. His colleagues were friendly, and he got real projects instead of routine work like making coffee.",
          },
          {
            prompt: "Which TWO pieces of advice does Ravi give to future students?",
            options: [
              "learn the software before they start",
              "live closer to the office",
              "ask for deadline extensions when needed",
              "set up regular meetings with their manager",
              "avoid presenting to clients in the first week",
            ],
            answer: [1, 3],
            explanation: "He says they should “ask for regular meetings with their manager” and “find somewhere to live closer to the office”.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 4: choosing a venue",
      voice: "us",
      transcript:
        "Mia: OK, we need to pick a venue for the end-of-year party. I've made a list of four places.\nJack: Go on.\nMia: First, the Riverside Hotel. It has a lovely big room, but it's really expensive. Way over our budget.\nJack: That's a shame. What about the Blue Door? Everyone loves that place.\nMia: They do, but the only evening it's free in December is a Monday, and nobody wants a party on a Monday.\nJack: Fair point. What's next?\nMia: The Sports Club. It's cheap, and there's plenty of room. The only thing is, it's a long way out of town, and there are no buses late at night.\nJack: We could hire a coach to take people home.\nMia: True, but that adds to the cost. And then there's the Garden Café. It's quite small, but they've said they'd close to the public just for us, and the food is excellent.\nJack: Is it big enough, though? There'll be about sixty of us.\nMia: They can fit seventy if they take out a few tables.\nJack: Then I'd go for the café. The Sports Club would work, but getting people home would be a headache.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "match",
        title: "Matching (IELTS Part 3)",
        instructions: "What do the speakers say about each venue? Choose the correct comment for each one. There are two comments you do not need.",
        left: ["Riverside Hotel", "Blue Door", "Sports Club", "Garden Café"],
        right: [
          "It is not available on a suitable day.",
          "It is too small for the group.",
          "It costs too much.",
          "It will close to the public for the group.",
          "It is too far from the town centre.",
          "It has to be booked a year in advance.",
        ],
        answer: [2, 0, 4, 3],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "The correct option is usually a paraphrase of what you hear, while distractors often repeat the exact words from the recording. If an option “sounds exactly” like the audio, check the meaning very carefully.",
    },
    {
      exam: "ielts",
      body: "For “Choose TWO letters” questions, the order of your two letters does not matter. Write two letters only, and don't leave either one blank.",
    },
    {
      exam: "toeic",
      body: "In Part 3, a question like “What does the man suggest?” often has an option that the **woman** suggested. Check who the question is about before the conversation starts.",
    },
    {
      exam: "toefl",
      body: "In Conversation tasks, questions about what a student decides to do are common. Students often consider one option and then change their mind, so listen until the end before deciding.",
    },
  ],
  vocabulary: [
    { word: "distractor", meaning: "a wrong option in a test that is designed to seem correct", example: "Two of the options were distractors that repeated words from the audio.", topic: "education" },
    { word: "reject", meaning: "to decide not to accept or use something", example: "They rejected the first topic because another group had used it.", topic: "academic" },
    { word: "confirm", meaning: "to say or show that something is definitely true or decided", example: "Wait for the speaker to confirm the final choice.", topic: "academic" },
    { word: "venue", meaning: "the place where an event, such as a party or concert, happens", example: "We need a venue for sixty people.", topic: "business" },
    { word: "budget", meaning: "the amount of money available for something", example: "The hotel was way over our budget.", topic: "business" },
    { word: "work placement", meaning: "a period of work in a company as part of a course of study", example: "She did a three-month work placement at a design company.", topic: "work" },
    { word: "extension", meaning: "extra time to finish a piece of work", example: "I asked my tutor for an extension on my essay.", topic: "education" },
    { word: "feedback", meaning: "comments about how well someone has done something", example: "It was hard to get feedback from my manager.", topic: "work" },
    { word: "spotless", meaning: "completely clean", example: "The hotel room was small but spotless.", topic: "travel" },
    { word: "sold out", meaning: "with no tickets or items left to buy", example: "The opening night is already sold out.", topic: "everyday" },
    { word: "headache", meaning: "(informal) a problem that is difficult or annoying to deal with", example: "Getting everyone home late at night would be a headache.", level: "B2", topic: "everyday" },
  ],
  keyPoints: [
    "Most options are mentioned in the recording. The answer is the one the speaker confirms.",
    "Watch for ideas that are suggested then rejected, corrected, or only true in the past.",
    "Check whose opinion the question asks about.",
    "Exact word matches are often traps; correct answers are usually paraphrased.",
  ],
};

export default lesson;
