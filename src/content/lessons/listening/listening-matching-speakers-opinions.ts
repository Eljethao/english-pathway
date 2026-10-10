import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-matching-speakers-opinions",
  title: "Matching speakers and opinions",
  summary:
    "Follow two speakers as they agree, disagree and change their minds, and match each person or item to the right opinion in IELTS Part 3 matching tasks and short TOEFL conversations.",
  skill: "listening",
  level: "B2",
  order: 5,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Listening Part 3" },
    { exam: "toefl", task: "Listening – Conversation" },
  ],
  objectives: [
    "Keep track of who says what when two speakers discuss several ideas",
    "Recognise how speakers agree, partly agree, disagree and change their minds",
    "Match items to opinions in IELTS Part 3, including “who says it?” questions",
    "Identify a speaker's opinion or reason in a short TOEFL conversation",
  ],
  warmUp: [
    "When two friends argue about where to go on holiday, how can you tell who wins? What do people say when they agree or give in?",
    "Think of three ways to disagree politely in English without saying “No”.",
  ],
  learn: [
    {
      type: "text",
      title: "How speaker-matching tasks work",
      body: "In IELTS Listening Part 3, two or three people (often students and a tutor) discuss a study topic, and they rarely agree about everything. One common task is **matching**. You see a numbered list of items, such as sources, methods or stages of a project, and a box of options labelled A, B, C… Each option is an opinion or a feature. The items are in the same order as the recording, but the options in the box are not. There are usually more options than items, so some letters are never used.\n\nAnother version asks **who** holds an opinion: one speaker, the other speaker, or both of them.\n\nThe TOEFL Conversation task tests a similar skill on a smaller scale: a short conversation between two people, usually about campus or daily life, followed by two questions. One of them may ask what a speaker thinks, or why someone says something.\n\nIn every case the challenge is the same. You will hear several opinions about each item, and you need the one that the right person **finally** holds.",
    },
    {
      type: "table",
      title: "How speakers show their position",
      headers: ["Position", "What you might hear"],
      rows: [
        ["Full agreement", "Absolutely. / I couldn't agree more. / That's exactly what I thought. / Exactly."],
        ["Partial agreement", "Up to a point. / I see what you mean, but… / That's true, although… / In theory, yes, but…"],
        ["Polite disagreement", "I'm not so sure. / I don't really see it that way. / Really? I'd have said… / Maybe, but…"],
        ["Changing your mind", "Actually, you've persuaded me. / When you put it like that… / I've thought about it since, and… / OK, I take that back."],
        ["Doubt or a weak opinion", "I suppose so. / I doubt it'll work. / We'll see. / I'm not convinced."],
      ],
    },
    {
      type: "text",
      title: "A method for tracking speakers",
      body: "1. **Before you listen, shorten each option.** Turn “It is out of date” into a quick note such as *old*, and think of paraphrases: *published years ago*, *things have changed since then*.\n2. **Write the speakers' names** above the questions as soon as you hear them. In “who says it?” tasks, every answer depends on knowing which voice is which.\n3. **Don't answer after the first comment.** One speaker gives a view, and the other usually reacts. Agreement makes it a shared view. *Maybe, but…* or *Really?* usually means it is not.\n4. **Watch for a change of mind.** If someone says *I've thought about it since*, the new view replaces the old one.\n5. **Listen for the move to the next item.** Phrases like *Right, what about…?* or *Next, there's…* tell you to move your eyes to the next question.",
    },
    {
      type: "audio",
      title: "Quick reactions: five short exchanges",
      voice: "uk",
      transcript:
        "Narrator: Exchange one.\nLeah: Owen, I think the library should stay open all night during the exam period.\nOwen: Absolutely, Leah. That's exactly what I said at the student meeting.\nNarrator: Exchange two.\nOwen: The new timetable is so much better than the old one.\nLeah: Up to a point, Owen. The mornings are better, but the afternoons are still far too long.\nNarrator: Exchange three.\nLeah: Let's do our survey online. It'll be much quicker.\nOwen: I'm not so sure. Lots of people just ignore online surveys.\nNarrator: Exchange four.\nOwen: I don't think the field trip is worth the money.\nLeah: Have you seen the programme, though? They visit three research centres in one day.\nOwen: Really? Well, in that case, I take it back. It sounds like good value.\nNarrator: Exchange five.\nLeah: Shall we ask Dr Patel for more time to finish the report?\nOwen: I suppose we could, but I doubt she'll say yes.",
      cast: { Narrator: "male" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: agree, disagree or change your mind?",
        instructions: "Listen to five short exchanges between Leah and Owen. Choose the best description of the second speaker's reaction.",
        questions: [
          {
            prompt: "Exchange 1: How does Owen react to Leah's idea?",
            options: ["Complete agreement", "Partial agreement", "Disagreement", "A change of mind"],
            answer: 0,
            explanation: "“Absolutely… That's exactly what I said” shows complete agreement.",
          },
          {
            prompt: "Exchange 2: How does Leah react to Owen's comment about the timetable?",
            options: ["Complete agreement", "Partial agreement", "Disagreement", "A change of mind"],
            answer: 1,
            explanation: "“Up to a point” means she agrees only partly: the mornings are better, but the afternoons are not.",
          },
          {
            prompt: "Exchange 3: How does Owen react to the idea of an online survey?",
            options: ["Complete agreement", "Partial agreement", "Disagreement", "A change of mind"],
            answer: 2,
            explanation: "“I'm not so sure” is a polite way to disagree, and Owen gives a reason: people ignore online surveys.",
          },
          {
            prompt: "Exchange 4: Which best describes Owen's reaction after Leah mentions the programme?",
            options: ["Complete agreement", "Partial agreement", "Disagreement", "A change of mind"],
            answer: 3,
            explanation: "Owen first says the trip isn't worth the money, then says “I take it back… It sounds like good value.” His final view is the opposite of his first one.",
          },
          {
            prompt: "Exchange 5: What is Owen's attitude to asking Dr Patel for more time?",
            options: [
              "Owen is keen to ask her.",
              "Owen thinks the request will probably fail.",
              "Owen refuses to ask her.",
              "Owen has already asked her.",
            ],
            answer: 1,
            explanation: "“I suppose we could” accepts the idea, but “I doubt she'll say yes” shows that Owen expects it to fail. He doesn't refuse.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "Listen to two students, Jasmine and Felix, planning how to collect data for a project. Before the audio, a strong listener reads these opinions and gets ready to write **J** (Jasmine), **F** (Felix) or **both** next to each one.\n\n1. Questionnaire answers may not be accurate.\n2. Many volunteers would stop keeping a diary before the week ends.\n3. People are more patient than expected.\n4. Photographing the bins would give the most accurate data.",
    },
    {
      type: "audio",
      title: "Model discussion: collecting data on food waste",
      voice: "uk",
      transcript:
        "Felix: So, Jasmine, we need to decide how to collect data for our project on food waste in the student halls.\nJasmine: Well, Felix, an online questionnaire seems the obvious place to start. We could send it to everyone in the halls and get hundreds of replies in a few days.\nFelix: Maybe, but I doubt the answers would be honest. Nobody likes admitting they throw away half their shopping.\nJasmine: That's a fair point. People do try to look good in surveys, so the figures might not be very reliable.\nFelix: Which is why I'd like to add a waste diary. A small group of volunteers write down everything they throw away for a week.\nJasmine: I like the idea in theory, but a whole week is a long time. I think most people would give up after two or three days.\nFelix: Not if we explain why it matters. People are more patient than you think.\nJasmine: Hmm, we'll see. And what about photographing the bins? Professor Grant suggested it.\nFelix: I wasn't keen at first, to be honest. It felt a bit like spying on people.\nJasmine: But we'd never photograph anyone, only what's in the bins. And it's the only method that shows what people actually throw away, not what they say they throw away.\nFelix: I know. I've thought about it since, and I agree with you now. It'll give us the most accurate data of all.\nJasmine: Great. I'll email the hall manager today and ask for permission.",
    },
    {
      type: "text",
      title: "How a strong listener matches the opinions",
      body: "1. **Both.** Felix doubts that the answers would be honest, and Jasmine replies *That's a fair point… the figures might not be very reliable.* “Fair point” followed by her own reason shows real agreement.\n2. **Jasmine.** She says most people *would give up after two or three days*. Felix disagrees: *Not if we explain why it matters.*\n3. **Felix.** *People are more patient than you think.* Jasmine's *Hmm, we'll see* is doubt, not agreement, so this is not a shared view.\n4. **Both.** This is the trap. Felix *wasn't keen at first* because it felt like spying, so a listener who answers too early writes *Jasmine*. But Felix then says *I've thought about it since, and I agree with you now*. His final view is the one that counts.\n\nNotice that Jasmine's first comment about getting *hundreds of replies* is not tested at all. Not everything you hear is in the questions, so don't let it distract you.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice 1: reviewing sources for a presentation",
      voice: "uk",
      transcript:
        "Daniel: OK, Maya, let's go through the sources for our presentation on remote working and agree what to say about each one.\nMaya: Good idea, Daniel. Let's start with the government report. It's very detailed, but it was published nine years ago, before most companies had even tried working from home.\nDaniel: True. So much has changed since then. We can mention it, but we can't rely on its figures.\nMaya: Agreed. Next, the podcast interview with the company director.\nDaniel: I enjoyed listening to it, but she spent the whole time praising her own company's policy. She never mentioned a single problem.\nMaya: No, she was hardly neutral. Then there's the newspaper article. I expected it to be quite shallow, but it had some figures I'd never have guessed, like the number of people who now work from cafés.\nDaniel: Same here. I had no idea it was so high. Now, the textbook chapter. Dr Evans recommended it in the first lecture, didn't she?\nMaya: No, she recommended the one by Clarke. I found this one in the library myself. It's very long, though. Forty pages!\nDaniel: Long doesn't bother me if it's useful. The trouble is, it's about working life in general. It hardly mentions remote working at all.\nMaya: That's my main complaint too. It's just too broad for our topic.\nDaniel: And finally, the video lecture from the business school. I was worried it would be too technical.\nMaya: So was I, but the speaker explains everything so clearly. Even my flatmate, who studies music, could follow it.\nDaniel: I found it really clear too. Let's definitely show a short clip from it.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Matching (IELTS Part 3)",
        instructions: "What do Maya and Daniel agree about each source? Choose the correct option, A–G, for each source. There are two options you do not need.",
        left: ["the government report", "the podcast interview", "the newspaper article", "the textbook chapter", "the video lecture"],
        right: [
          "It is out of date.",
          "It is too general for their topic.",
          "It contains some surprising data.",
          "It was recommended by their tutor.",
          "It presents only one point of view.",
          "It is easy to understand.",
          "It is too long to be useful.",
        ],
        answer: [0, 4, 2, 1, 5],
      },
    },
    {
      type: "audio",
      title: "Practice 2: the new library study area",
      voice: "uk",
      transcript:
        "Tariq: So, Ines, what do you think of the new open-plan study area in the library?\nInes: Honestly, Tariq, I've given up on it. With no walls, you can hear every conversation, and I just can't concentrate on anything difficult in there.\nTariq: Really? I quite like the background noise. It's like working in a café. It actually helps me focus.\nInes: Lucky you. What annoys me more is the system for booking the group rooms.\nTariq: Oh, don't get me started. The same few people book them every single day, and the rest of us never get a chance.\nInes: Exactly. There should be a limit, say two bookings a week per person.\nTariq: On the positive side, have you noticed the new lighting? It used to be so gloomy in there, and now it's much brighter. I don't get headaches any more.\nInes: I can't say I've noticed, to be honest. I always sit by the window.\nTariq: And the opening hours. It's ridiculous that it doesn't open until ten on Sundays.\nInes: I couldn't agree more. Half my friends are waiting outside by nine.\nTariq: What about all the plants they've put in? Someone told me they cost a fortune.\nInes: I think they were worth every penny. They make the whole place feel calmer.\nTariq: Hmm. I'd rather they'd spent the money on more desks. It's impossible to find a seat after eleven.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Who says it? (IELTS Part 3)",
        instructions: "Who expresses each opinion? Choose A if only Ines says it, B if only Tariq says it, or C if they both agree. You may use any letter more than once.",
        left: [
          "It is hard to concentrate in the open-plan area.",
          "A small number of students use the group rooms too much.",
          "The library is brighter than it used to be.",
          "The library should open earlier on Sundays.",
          "The plants were a good use of money.",
          "The library needs more places to sit.",
        ],
        right: ["Ines", "Tariq", "both Ines and Tariq"],
        answer: [0, 2, 1, 2, 0, 1],
      },
    },
    {
      type: "audio",
      title: "Practice 3: two campus conversations",
      voice: "us",
      transcript:
        "Narrator: Conversation one.\nMarco: Professor Lin, have you got a minute? It's about the field trip to the wetlands next week.\nProfessor Lin: Of course, Marco. Is there a problem?\nMarco: Not exactly. I've been reading the list of activities, and the bird survey at six in the morning seems very early. Couldn't we start a bit later?\nProfessor Lin: I know it's early. But most birds are at their most active just after sunrise. If we arrive at ten, there'll be very little to count.\nMarco: Oh, I see. I hadn't thought of that. In that case, six it is. Should I arrange my own transport?\nProfessor Lin: No need. The department has booked a minibus. It leaves from the main gate at a quarter past five.\nMarco: A quarter past five. I'd better set two alarms.\nNarrator: Conversation two.\nHana: Thanks for seeing me, Mr Okafor. I'd like your opinion on my application for the summer internship at the city museum.\nMr Okafor: Happy to help, Hana. I've read your covering letter, and to be honest, it's far too modest.\nHana: Modest? In what way?\nMr Okafor: You organised a music festival for two thousand people, but you mention it in one line at the very end. That's your strongest experience. Put it first.\nHana: Oh. I didn't want to sound like I was showing off.\nMr Okafor: It isn't showing off if it's true. Employers want evidence of what you can do.\nHana: OK. I'll rewrite the first paragraph tonight and send it to you tomorrow.",
      cast: { Narrator: "female", "Professor Lin": "female" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Opinions in conversations (TOEFL)",
        instructions: "Listen to two short conversations. Each one has two questions. Choose the best answer.",
        questions: [
          {
            prompt: "Conversation 1: Why does Marco go to see Professor Lin?",
            options: [
              "To complain about the cost of the trip",
              "To ask if an activity could start later",
              "To ask permission to miss the bird survey",
              "To offer to organise the transport",
            ],
            answer: 1,
            explanation: "Marco says the survey “seems very early” and asks, “Couldn't we start a bit later?”",
          },
          {
            prompt: "Conversation 1: How does Marco feel after Professor Lin's explanation?",
            options: [
              "Marco still thinks the start time is unreasonable.",
              "Marco is annoyed that the trip has been cancelled.",
              "Marco accepts that there is a good reason for the early start.",
              "Marco decides to travel to the wetlands alone.",
            ],
            answer: 2,
            explanation: "“Oh, I see. I hadn't thought of that. In that case, six it is.” Marco changes his mind once he hears the reason. The trip is not cancelled, and a minibus has been booked.",
          },
          {
            prompt: "Conversation 2: What does Mr Okafor think of Hana's covering letter?",
            options: [
              "It does not give enough attention to her best experience.",
              "It is too long and repeats her CV.",
              "It exaggerates what she has achieved.",
              "It contains too many mistakes.",
            ],
            answer: 0,
            explanation: "He says the letter is “far too modest”: the festival is her “strongest experience” but appears in one line at the end. *Exaggerates* is the opposite of modest.",
          },
          {
            prompt: "Conversation 2: Why does Hana say, “I didn't want to sound like I was showing off”?",
            options: [
              "To suggest that the festival was not very successful",
              "To disagree with Mr Okafor's advice",
              "To ask whether she should remove the festival from the letter",
              "To explain why she mentioned the festival so briefly",
            ],
            answer: 3,
            explanation: "She is explaining her choice to give the festival only one line. She then accepts the advice and plans to rewrite the letter, so she is not disagreeing.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "dictation",
        title: "Dictation: phrases that show a speaker's position",
        instructions: "Listen and type each sentence exactly as you hear it. Then decide: does the speaker agree, partly agree, disagree or change their mind?",
        voice: "uk",
        sentences: [
          "I see what you mean, but I'm not convinced it would work.",
          "That's a fair point, so the figures might not be reliable.",
          "I wasn't keen at first, but you've persuaded me.",
          "Really? I don't see it that way at all.",
          "Up to a point, although the afternoons are still too long.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In Part 3 matching, the questions follow the order of the recording, but the options in the box do not. Before you listen, read every option and write a one-word note or paraphrase next to it. Check the instructions too: sometimes each letter can be used only once, and sometimes you may use a letter more than once.",
    },
    {
      exam: "ielts",
      body: "When a question asks what the speakers *agree* about, or what one named speaker thinks, an idea that is suggested and then rejected is a distractor. Wait for the other speaker's reaction before you choose, and listen for the final view.",
    },
    {
      exam: "toefl",
      body: "Each TOEFL conversation is short and is followed by two questions, which you may not see until it ends. Listen for the moment when one person reacts to a problem or a suggestion. Phrases like *Oh, I see* or *I hadn't thought of that* often mark a change of opinion that a question will test.",
    },
  ],
  vocabulary: [
    { word: "up to a point", meaning: "partly, but not completely", example: "I agree with you up to a point, but the cost is still a problem.", topic: "academic" },
    { word: "fair point", meaning: "a reasonable argument that you accept", example: "That's a fair point: the sample was very small.", topic: "academic" },
    { word: "persuade", meaning: "to make someone agree or change their mind by giving reasons", example: "Jasmine persuaded Felix to photograph the bins.", topic: "academic" },
    { word: "neutral", meaning: "not supporting either side in a discussion", example: "The director was hardly neutral about her own company.", topic: "society" },
    { word: "biased", meaning: "unfairly favouring one side or point of view", example: "A report paid for by the company may be biased.", topic: "academic" },
    { word: "reliable", meaning: "able to be trusted to be accurate", example: "Figures from online surveys are not always reliable.", topic: "science" },
    { word: "out of date", meaning: "no longer current or useful because things have changed", example: "The government report is nine years old and out of date.", topic: "academic" },
    { word: "show off", meaning: "to try to impress people with your abilities or achievements", example: "Hana didn't want to show off in her covering letter.", topic: "everyday" },
    { word: "covering letter", meaning: "a letter you send with your CV when you apply for a job (American English: cover letter)", example: "Put your strongest experience at the start of your covering letter.", topic: "work" },
    { word: "fair share", meaning: "the amount that it is reasonable for one person to have", example: "Some students book more than their fair share of the group rooms.", topic: "society" },
    { word: "gloomy", meaning: "dark in a way that feels unpleasant", example: "The library used to be gloomy, but now it's much brighter.", topic: "everyday" },
  ],
  keyPoints: [
    "In matching tasks, the items follow the recording, but the options in the box do not, and some options are never used.",
    "Wait for the second speaker's reaction: agreement makes a view shared, while “Maybe, but…” or “Really?” usually signals disagreement.",
    "A speaker's final view counts. Listen for phrases like “I've thought about it since” or “I take it back”.",
    "Write the speakers' names on your question paper so that you can track who says what.",
    "Correct options are usually paraphrases: “published nine years ago” becomes “out of date”.",
  ],
};

export default lesson;
