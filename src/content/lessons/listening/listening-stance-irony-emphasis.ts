import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-stance-irony-emphasis",
  title: "Stance, irony and emphasis",
  summary:
    "Recognise how speakers distance themselves from claims, stress what really matters, play things down and say the opposite of what they mean, using the words and context that carry the meaning even when the tone of voice does not help.",
  skill: "listening",
  level: "C1",
  order: 10,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Listening Part 3" },
    { exam: "ielts", task: "Listening Part 4" },
    { exam: "toefl", task: "Listening – Listen and Choose a Response" },
    { exam: "toefl", task: "Listening – Academic Talk" },
  ],
  objectives: [
    "Recognise distancing words (*so-called*, *supposedly*, *in theory*) and what they show about a speaker's view of a claim",
    "Identify a speaker's main point from emphasis structures such as *What really matters is…* and *if anything*",
    "Interpret understatement and irony from the mismatch between the words and the situation",
    "Choose replies and answers that respond to what the speaker really means",
  ],
  warmUp: [
    "Your friend arrives soaked and says, “Lovely weather today.” How do you know what they really mean, even without hearing their voice?",
    "What is the difference between “the so-called experts” and “the experts”?",
  ],
  learn: [
    {
      type: "text",
      title: "Stance lives in the words",
      body: "In earlier lessons you tracked opinions, concessions and implied meaning. This lesson focuses on four smaller signals that show a speaker's **stance**: their attitude to what they are saying.\n\n- **Distancing**: the speaker reports a claim but does not fully accept it: *supposedly*, *so-called*, *allegedly*, *in theory*, *on paper*.\n- **Emphasis**: the speaker marks the point that matters most or corrects an expectation: *What really matters is…*, *It's X, not Y, that…*, *by no means*, *if anything*, and stressed *do* (*the reminders do work*).\n- **Understatement**: the words are weaker than the reality: *not exactly ideal*, *hardly a triumph*, *to put it mildly*.\n- **Irony**: the words say the opposite of what is meant: *Oh, brilliant* when something goes wrong.\n\nIn real life, tone of voice helps a lot. But exams test meaning that you can **check in the words and the situation**, and that is the skill to train. The recordings in this lesson use synthetic voices with fairly flat intonation, so every answer can be worked out from what is said.",
    },
    {
      type: "table",
      title: "Signals and what they show",
      headers: ["Signal", "Examples", "What it tells you"],
      rows: [
        ["Distancing", "supposedly; so-called; allegedly; in theory; on paper; what's described as", "The speaker reports a claim but doubts it, or expects reality to differ"],
        ["Cleft emphasis", "What really bothers me is…; It's the timing, not the cost, that…", "This is the speaker's main point, often a correction"],
        ["Emphatic do", "The reminders do work; I did warn you", "The speaker insists, often against an expected objection"],
        ["Strong negatives", "by no means; not in the slightest; far from", "A firm rejection of an idea"],
        ["if anything", "It didn't help. If anything, it made things worse.", "The truth is the opposite of what you might expect"],
        ["Understatement", "not exactly ideal; hardly a success; a bit of a setback; to put it mildly", "Negative, and stronger than the words suggest"],
        ["Irony", "Oh, wonderful. / Brilliant timing. / That went well. (after a disaster)", "The opposite of the literal meaning"],
      ],
    },
    {
      type: "example",
      title: "How the words reveal irony",
      items: [
        "“Oh, **brilliant**. The one day I forget my umbrella.” → **Mismatch**: forgetting an umbrella on a rainy day is bad news, so *brilliant* means the opposite.",
        "“**Wonderful** piece of software. It took me twenty minutes to book a room.” → **The follow-up gives it away**: the facts that come next contradict the praise.",
        "“The new car park has been a **huge** success. On Monday there were three cars in it.” → **Exaggerated praise** for an obviously poor result.",
        "“Well, **that** went smoothly,” said after the projector failed twice and the fire alarm went off. → **The situation** makes the literal meaning impossible.",
      ],
    },
    {
      type: "tip",
      exam: "toefl",
      body: "In Listen and Choose a Response, a remark that sounds positive may be ironic. Before choosing, ask: does the situation the speaker describes (a cancelled lecture, a two-hour queue) fit the positive words? If not, choose the reply that responds to the complaint.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Quick check: what is the speaker doing?",
        instructions: "Match each remark to what the speaker is doing. There is one description you do not need.",
        left: [
          "The so-called improvements have made the website slower.",
          "Oh, perfect. The lift is broken and my office is on the tenth floor.",
          "Well, it wasn't exactly a triumph.",
          "What really matters isn't the price, it's the reliability.",
          "The new rule hasn't reduced complaints. If anything, there are more.",
          "In theory, the whole system is automatic.",
          "Say what you like, but the data do support the hypothesis.",
        ],
        right: [
          "insisting on a point against expected doubts",
          "saying something went badly by playing it down",
          "suggesting that reality is different from the plan",
          "doubting that something deserves its name",
          "asking for confirmation",
          "using irony to show annoyance",
          "saying the effect was the opposite of what was expected",
          "emphasising the most important factor",
        ],
        answer: [3, 5, 1, 7, 6, 2, 0],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model: two students discuss a new booking app",
      voice: "uk",
      transcript:
        "Theo: So, Lena, have you tried the new room-booking app yet?\nLena: Oh, I have. Wonderful piece of software. It took me twenty minutes to book a room, and when I got there, someone else was already in it.\nTheo: Ah. So not quite the time-saver they promised.\nLena: Not quite, no. The so-called smart calendar double-booked half the rooms in the building on the first day.\nTheo: To be fair, Lena, the old system wasn't exactly perfect either. Remember queuing at the desk at eight in the morning?\nLena: I do. But at least when you got a room, it was actually yours. What really annoys me isn't the bugs. It's that nobody asked students what they wanted.\nTheo: They did send a survey.\nLena: In the last week of the exam period. Brilliant timing.\nTheo: Fair point. I'll admit the reminder emails are useful, though. I'd have missed two bookings without them.\nLena: That's true, Theo. The reminders do work. And I suppose the map's quite handy.\nTheo: Quite handy? It's the only reason I can find anything in that building.\nLena: All right, the map is genuinely good. If anything, it's the best part of the whole thing.\nTheo: Mind you, the app crashed twice while I was showing it to visitors on the open day.\nLena: I bet that impressed them.\nTheo: Oh, enormously. Two of them left before I'd finished.\nLena: So would you go back to the old system, Theo?\nTheo: Not a chance. Would you?\nLena: Honestly? No. The idea's right; it's the way they've introduced it that's let it down. Once they fix the calendar, it'll probably be fine.",
    },
    {
      type: "table",
      title: "How a strong listener reads the stance",
      headers: ["What is said", "Signal", "Real meaning", "Clue in the words"],
      rows: [
        ["“Wonderful piece of software.”", "Irony", "It is badly designed", "The facts that follow: twenty minutes, room already taken"],
        ["“not quite the time-saver they promised”", "Understatement", "It wasted time", "*they promised* sets up the contrast"],
        ["“The so-called smart calendar”", "Distancing", "It is not smart", "It “double-booked half the rooms”"],
        ["“wasn't exactly perfect either”", "Understatement", "The old system had real problems", "The example: queuing at eight"],
        ["“What really annoys me isn't the bugs. It's that…”", "Cleft emphasis", "Lena's main complaint: students weren't consulted", "*isn't X, it's Y*"],
        ["“Brilliant timing.”", "Irony", "Very bad timing", "The survey came during exams"],
        ["“The reminders do work.”", "Emphatic do", "Lena fully accepts this point", "Lena is agreeing with Theo's defence"],
        ["“Quite handy?”", "Challenge to an understatement", "Theo thinks the map is excellent", "“the only reason I can find anything”"],
        ["“I bet that impressed them.” / “Oh, enormously.”", "Irony from both speakers", "The crash made a bad impression", "“Two of them left before I'd finished”"],
        ["“The idea's right; it's the way they've introduced it…”", "Contrast emphasis", "Overall: supports the idea, criticises the introduction", "Lena would not go back"],
      ],
    },
    {
      type: "text",
      title: "What to notice",
      body: "**Irony is proved by what comes next.** *Wonderful piece of software* could be sincere on its own. The next sentence (twenty minutes, someone else in the room) makes it impossible. When you suspect irony, listen for the facts that follow.\n\n**Emphasis marks the answer.** If a question asks *What is Lena's main criticism?*, the cleft sentence gives it: not the bugs, but the lack of consultation with students.\n\n**Overall stance is mixed, and that is the point.** Lena is ironic about the software, yet says plainly that going back to the old system is not the answer. An option such as *Lena wants the university to stop using the app* reads the irony as Lena's whole view, which it is not.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice 1: reviewing a pilot survey",
      voice: "uk",
      cast: { "Dr Lowe": "female" },
      transcript:
        "Dr Lowe: So, Ravi, Sofia, how did the pilot survey in the pedestrian zone go?\nRavi: Well, it was certainly an experience. We chose the one Saturday this month when it rained from nine till five.\nSofia: Which did wonders for our response rate. We got eleven questionnaires back in six hours.\nDr Lowe: Eleven. That's not a lot to work with.\nRavi: No. But to be honest, the weather wasn't the main problem. What really held us back was the questionnaire itself. It was far too long.\nDr Lowe: How long?\nSofia: Four pages. Ravi's masterpiece.\nRavi: It was a joint effort, Sofia! But yes, I'll admit it was by no means short. People started reading, saw the second page and just handed it back.\nDr Lowe: So what are you planning to change?\nSofia: Cut it down to one page, ten questions at the most. And use a tablet instead of paper, so people don't have to hold a clipboard in the rain.\nDr Lowe: Sensible. What about the answers you did get? Anything useful?\nRavi: Supposedly, the zone has made the town centre more attractive to families. That's what the council's press release says, anyway.\nSofia: But our eleven respondents weren't exactly families. Nine of them were over sixty.\nDr Lowe: Which tells you something about who's in town on a wet Saturday, rather than about the zone. I wouldn't read anything into it yet.\nRavi: No. The one thing that did come through clearly was cyclists. Every single person mentioned them.\nSofia: And not in a good way. Cyclists are meant to get off and walk in the zone. In theory.\nDr Lowe: In theory. I take it that's not happening in practice?\nSofia: Let's just say the signs aren't having much effect.\nDr Lowe: That could be a really interesting angle, actually. Conflict between people walking and cycling in shared spaces hasn't been studied much. If anything, it might be more original than your first research question.\nRavi: You mean change the focus of the whole project?\nDr Lowe: Not the whole project, but make it one of your main questions. And do the full survey on two different days, a weekday and a weekend, so you get a broader range of people.\nSofia: Oh, great. Twice the fun.\nDr Lowe: I did warn you that fieldwork is the hard part.\nRavi: You did. Repeatedly.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "IELTS Part 3: what do the speakers mean?",
        instructions: "Choose the correct answer. Use the words and the situation, not the tone of voice.",
        questions: [
          {
            prompt: "What does Sofia mean by “Which did wonders for our response rate”?",
            options: [
              "The rain brought more people into the covered areas.",
              "The bad weather meant very few people responded.",
              "The response rate was better than they had expected.",
            ],
            answer: 1,
            explanation: "Irony: the next sentence gives the real result, “eleven questionnaires back in six hours”, and Dr Lowe confirms “That's not a lot.”",
          },
          {
            prompt: "According to Ravi, what was the main problem with the pilot?",
            options: ["the weather", "the length of the questionnaire", "the choice of location"],
            answer: 1,
            explanation: "“The weather wasn't the main problem. What really held us back was the questionnaire itself. It was far too long.” The cleft sentence marks the main point and rejects the weather.",
          },
          {
            prompt: "Why does Sofia call the questionnaire “Ravi's masterpiece”?",
            options: [
              "To praise the quality of Ravi's work",
              "To suggest that Ravi should finish it alone",
              "To tease Ravi for the questionnaire's length",
            ],
            answer: 2,
            explanation: "A four-page questionnaire that people handed back is not a masterpiece. Ravi's reply (“It was a joint effort… I'll admit it was by no means short”) shows that Ravi understands the teasing.",
          },
          {
            prompt: "How does Ravi present the claim that the zone attracts families?",
            options: [
              "As a fact confirmed by their survey",
              "As the council's claim, which Ravi does not necessarily accept",
              "As something most respondents agreed with",
            ],
            answer: 1,
            explanation: "*Supposedly* and “That's what the council's press release says, anyway” distance Ravi from the claim. Their survey found mostly people over sixty.",
          },
          {
            prompt: "What does the tutor say about the age of the respondents?",
            options: [
              "It probably reflects the day and the weather, so it means little yet.",
              "It shows the zone is mainly used by older people.",
              "It is the most useful finding of the pilot.",
            ],
            answer: 0,
            explanation: "“Which tells you something about who's in town on a wet Saturday, rather than about the zone. I wouldn't read anything into it yet.”",
          },
          {
            prompt: "What do the speakers suggest about cyclists in the zone?",
            options: [
              "Most of them follow the rule to walk.",
              "Many of them ignore the rule to get off and walk.",
              "They are not allowed to enter the zone at all.",
            ],
            answer: 1,
            explanation: "*In theory* and the understatement “the signs aren't having much effect” both mean the rule is not being followed.",
          },
          {
            prompt: "How does Sofia feel about doing the survey on two days?",
            options: [
              "Sofia is pleased to collect more data.",
              "Sofia is not looking forward to the extra work.",
              "Sofia thinks one day would be more reliable.",
            ],
            answer: 1,
            explanation: "“Oh, great. Twice the fun.” is ironic: doing difficult fieldwork twice is not fun. The tutor's reply, “I did warn you that fieldwork is the hard part”, confirms it.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice 2: does brain training work?",
      voice: "us",
      cast: { narrator: "male" },
      transcript:
        "Today's topic is the so-called brain-training industry: the apps and online games that promise to make you sharper, more focused and, supposedly, less likely to have memory problems in old age. It's a large market, and what I want to do today is ask a simple question: does it work?\n\nLet me be clear from the start about what isn't in dispute. People who practise these games do get better at them, often much better. Nobody, not even the harshest critic, denies that. The question that really matters is a different one: does getting better at the game make you better at anything else? Researchers call this transfer. If I spend a month on a memory game on my phone, will I be any better at remembering where I parked the car, or at following a lecture like this one?\n\nAnd here the evidence is, to put it mildly, not overwhelming. The more careful studies tend to find what's called near transfer: improvement on tasks that are very similar to the game itself. Far transfer, to everyday life, is a different story. Some studies report it; many larger ones don't. If anything, the better designed a study is, the smaller the effect it tends to find.\n\nAdmittedly, there are some promising results, particularly with certain kinds of speed training in older adults, and I don't want to dismiss those. But promising is the right word. It is by no means the same as proven.\n\nIn twenty fourteen, a large group of scientists signed an open letter warning that the industry's claims went well beyond the evidence. A few months later, another group replied that the critics had overlooked a substantial body of research. So the field is hardly united. What is harder to dispute is that some of the marketing ran ahead of the science. In twenty sixteen, one well-known company agreed to pay two million dollars to settle a complaint from the US consumer protection regulator about its advertising.\n\nSo, should you delete the apps? Not necessarily. If you enjoy them, carry on. Just don't expect them to do what physical exercise, sleep and an active social life have far stronger evidence for. It's those, not the games, that I'd put my money on.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Lecture: the speaker's stance",
        instructions: "Choose the best answer to each question.",
        questions: [
          {
            prompt: "Why does the professor use the words “so-called” and “supposedly” at the start?",
            options: [
              "To show doubt about the industry's claims",
              "To explain technical terms used by researchers",
              "To show that the apps are very popular",
              "To introduce a quotation from an advertisement",
            ],
            answer: 0,
            explanation: "Both words distance the professor from the claims: the talk then asks whether the games actually work.",
          },
          {
            prompt: "According to the professor, what is not in dispute?",
            options: [
              "Brain training improves memory in everyday life.",
              "People improve at the games they practise.",
              "Speed training prevents memory problems.",
              "Most studies of brain training are well designed.",
            ],
            answer: 1,
            explanation: "“People who practise these games do get better at them… Nobody, not even the harshest critic, denies that.”",
          },
          {
            prompt: "What does the professor mean by saying the evidence is “to put it mildly, not overwhelming”?",
            options: [
              "The evidence is strong but not yet published.",
              "The evidence clearly supports transfer to daily life.",
              "The evidence for benefits in everyday life is weak.",
              "The evidence is too complicated to summarise.",
            ],
            answer: 2,
            explanation: "*To put it mildly* signals understatement: the evidence for far transfer is much weaker than *not overwhelming* suggests.",
          },
          {
            prompt: "What does the professor say about well-designed studies?",
            options: [
              "They usually find larger effects.",
              "They tend to find smaller effects.",
              "They have only studied older adults.",
              "They have stopped being funded.",
            ],
            answer: 1,
            explanation: "“If anything, the better designed a study is, the smaller the effect it tends to find.” *If anything* introduces the opposite of what supporters would hope.",
          },
          {
            prompt: "Why does the professor mention the two groups of scientists?",
            options: [
              "To show that scientists now fully support brain training",
              "To show that experts disagree about the evidence",
              "To explain how open letters are written",
              "To show that the critics have been proved wrong",
            ],
            answer: 1,
            explanation: "One group said the claims went beyond the evidence; the other said the critics had overlooked research. “So the field is hardly united”: *hardly united* is an understatement for real disagreement. The professor never says either side has been proved right.",
          },
          {
            prompt: "What does the professor recommend?",
            options: [
              "Deleting brain-training apps immediately",
              "Using the apps instead of physical exercise",
              "Relying more on exercise, sleep and social life than on the games",
              "Waiting for better apps to be developed",
            ],
            answer: 2,
            explanation: "“It's those, not the games, that I'd put my money on.” The cleft structure (*It's those, not the games*) marks the main recommendation. The professor says *not necessarily* to deleting the apps.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "respond",
        title: "TOEFL-style: Listen and Choose a Response",
        instructions: "Listen to each remark once. Some are ironic or understated. Choose the reply that responds to what the speaker really means.",
        items: [
          {
            audio: "Oh, fantastic. The printer's jammed again, and my essay's due in ten minutes.",
            options: [
              "Great, I'm glad it's working again.",
              "Try the one in the library. It's usually free.",
              "My essay isn't due until next week.",
              "The printer is on the second floor.",
            ],
            answer: 1,
            explanation: "*Fantastic* is ironic: a jammed printer before a deadline is bad news. The best reply offers a solution.",
          },
          {
            audio: "Well, that lecture wasn't exactly gripping, was it?",
            options: [
              "No, it was fascinating from start to finish.",
              "It's in room four, I think.",
              "Not really. I nearly fell asleep halfway through.",
              "Yes, I'll hold on to my notes.",
            ],
            answer: 2,
            explanation: "*Not exactly gripping* is an understatement for *boring*. The reply agrees with that meaning. The first option contradicts itself (*No* agrees, but *fascinating* disagrees).",
          },
          {
            audio: "The so-called express bus took fifty minutes this morning.",
            options: [
              "Fifty minutes? You'd almost be quicker walking.",
              "Great, so it really is fast.",
              "Yes, it's an express service.",
              "I usually catch the eight o'clock bus.",
            ],
            answer: 0,
            explanation: "*So-called* shows the bus did not deserve the name *express*. The reply shares the complaint.",
          },
          {
            audio: "It's not the cost that bothers me. It's how long the whole thing will take.",
            options: [
              "I can lend you some money if you need it.",
              "Yes, it's far too expensive.",
              "It cost me about twenty dollars.",
              "How long are we talking about?",
            ],
            answer: 3,
            explanation: "The cleft structure (*not the cost… it's how long*) puts the focus on time. The other replies respond to cost, which the speaker has just set aside.",
          },
          {
            audio: "I'd hardly call two pages of notes a finished report.",
            options: [
              "Thanks, I'm glad you like it.",
              "OK, I'll write it up properly tonight.",
              "Two pages is the maximum length.",
              "I've finished reading the report.",
            ],
            answer: 1,
            explanation: "*I'd hardly call…* means *it is not* a finished report. The reply accepts the criticism and offers to finish it.",
          },
          {
            audio: "The new timetable was supposed to cut waiting times. If anything, they've got longer.",
            options: [
              "Great, so the waits are shorter now.",
              "So it's actually made things worse.",
              "The timetable is on the website.",
              "I don't usually have to wait long.",
            ],
            answer: 1,
            explanation: "*Supposed to* + *if anything* = the timetable had the opposite of its intended effect. The reply sums this up.",
          },
          {
            audio: "Oh, brilliant. Another meeting about why we have too many meetings.",
            options: [
              "Yes, I really enjoy meetings too.",
              "How many meetings did you have today?",
              "I know. Couldn't they just send an email?",
              "It's in the main hall at three.",
            ],
            answer: 2,
            explanation: "The irony is in the situation: holding a meeting about having too many meetings. The reply shares the speaker's frustration.",
          },
          {
            audio: "Your presentation did go well, you know, whatever you might think.",
            options: [
              "Really? I felt so nervous the whole time.",
              "Yes, I'll go to it next week.",
              "I didn't think about it at all.",
              "It went to the wrong address.",
            ],
            answer: 0,
            explanation: "Emphatic *did* + *whatever you might think* reassures someone who doubts themselves. The reply shows that doubt.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In Part 3, students often joke or use irony about their own project (*which did wonders for our response rate*). Questions may ask what a speaker *means* or *feels*. Check the facts that come next: they almost always show whether the words are sincere.",
    },
    {
      exam: "ielts",
      body: "In Part 4, words such as *so-called*, *supposedly* and *in theory* tell you that the lecturer is reporting a claim, not agreeing with it. An option that states the claim as the lecturer's own view is a common wrong answer.",
    },
    {
      exam: "toefl",
      body: "Academic Talk questions about the professor's attitude are often answered by small words: *admittedly* (a concession), *by no means* (a firm no), *to put it mildly* (an understatement) and cleft sentences such as *It's those, not the games, that…* (the main point).",
    },
    {
      exam: "toefl",
      body: "In Listen and Choose a Response, wrong options often take an ironic or understated remark literally (*Great, I'm glad it's working*). If a reply would sound odd given the problem the speaker describes, it is probably wrong.",
    },
  ],
  vocabulary: [
    { word: "so-called", meaning: "used to show you think a name or description is wrong or does not deserve to be used", example: "The so-called express bus took fifty minutes.", topic: "everyday" },
    { word: "supposedly", meaning: "according to what people say, although you may doubt it", example: "The zone has supposedly made the centre more attractive to families.", topic: "academic" },
    { word: "in theory", meaning: "according to the rules or plan, although reality may be different", example: "In theory, cyclists get off and walk.", topic: "everyday" },
    { word: "to put it mildly", meaning: "used to show that the reality is much stronger or worse than your words", example: "The evidence is, to put it mildly, not overwhelming.", topic: "academic" },
    { word: "if anything", meaning: "used to suggest that the truth may be the opposite of what was expected", example: "It didn't cut waiting times. If anything, they got longer.", topic: "academic" },
    { word: "by no means", meaning: "not at all; certainly not", example: "Promising is by no means the same as proven.", topic: "academic" },
    { word: "hardly", meaning: "almost not, or not at all; often used to criticise", example: "Two pages of notes is hardly a finished report.", topic: "everyday" },
    { word: "irony", meaning: "saying the opposite of what you mean, often to show annoyance or humour", example: "“Brilliant timing,” Lena said, with heavy irony, when the survey arrived during exams.", topic: "everyday" },
    { word: "read into", meaning: "to find more meaning in something than is really there", example: "Eleven responses is too few to read much into.", topic: "academic" },
    { word: "let down", meaning: "to make something less good or successful than it should be", example: "A good idea was let down by the way it was introduced.", topic: "work" },
    { word: "run ahead of", meaning: "to go further or faster than something else can support", example: "The marketing ran ahead of the science.", topic: "business" },
    { word: "put your money on", meaning: "to feel confident that something is the right choice or will succeed", example: "For a healthy brain, I'd put my money on exercise and sleep.", topic: "health" },
  ],
  keyPoints: [
    "Distancing words (*so-called*, *supposedly*, *in theory*) show that a speaker reports a claim without accepting it.",
    "Cleft sentences (*What really matters is…*, *It's X, not Y, that…*), emphatic *do* and *if anything* mark the speaker's main point or a correction.",
    "Understatement (*not exactly*, *hardly*, *to put it mildly*) means something stronger and usually more negative than the words.",
    "Irony shows in a mismatch between positive words and a bad situation; the facts that follow almost always confirm it.",
    "Don't rely on tone of voice: check every interpretation against the words and the situation.",
  ],
};

export default lesson;
