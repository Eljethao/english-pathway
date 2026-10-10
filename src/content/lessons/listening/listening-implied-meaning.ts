import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-implied-meaning",
  title: "Implied meaning and pragmatics",
  summary:
    "Work out what speakers mean but do not say: indirect answers, hints, polite refusals and tactful criticism. Then choose replies that respond to the real message in TOEFL Listen and Choose a Response, TOEFL conversations and IELTS Part 3.",
  skill: "listening",
  level: "C1",
  order: 6,
  minutes: 25,
  exams: [
    { exam: "toefl", task: "Listening – Listen and Choose a Response" },
    { exam: "toefl", task: "Listening – Conversation" },
    { exam: "ielts", task: "Listening Part 3" },
  ],
  objectives: [
    "Interpret indirect answers to yes/no and wh- questions",
    "Recognise hints, polite refusals and tactful criticism, and what the speaker expects to happen next",
    "Use context and small words such as *some*, *well* and *I'd have thought* to infer meaning",
    "Choose the reply that responds to what a speaker means, not only to what they say",
  ],
  warmUp: [
    "A friend asks, “Are you coming to the party tonight?” and you answer, “I've got an exam at nine tomorrow.” What have you actually said, and how does your friend know?",
    "How might a tutor tell you that your essay has a serious problem without saying so directly?",
  ],
  learn: [
    {
      type: "text",
      title: "Meaning beyond the words",
      body: "In the lesson on attitude and opinion you learnt to track what speakers think. This lesson goes one step further: understanding **what a speaker is doing** with a remark, even when the words seem to answer a different question.\n\nListeners understand indirect remarks because they assume the speaker is being **relevant**. If you ask “Is the library open?” and someone replies “It's a public holiday”, you assume the reply is connected to your question, so you infer: *probably not*.\n\nFour kinds of implied meaning appear again and again in exams:\n\n- **Indirect answers**: the reply gives a reason or a fact instead of *yes* or *no*.\n- **Hints and requests**: *If you're going past the post office…* (= could you post something for me?).\n- **Polite refusals and criticism**: *I'm not sure I'm the best person to ask*, *You might want to look at the second section again*.\n- **What the words leave out**: *Some of the results were useful* suggests that **not all** of them were.",
    },
    {
      type: "table",
      title: "Typical patterns and what they imply",
      headers: ["What you hear", "Context", "What it implies"],
      rows: [
        ["“It's a public holiday.”", "Q: Is the library open today?", "Probably not open"],
        ["“Have you tried the IT help desk?”", "Q: Can you fix my laptop?", "No, I can't, but here's another option"],
        ["“I'd have thought you'd already registered.”", "A student asks how to register", "Surprise: you may be late, or registration may have closed"],
        ["“Some of the references are fine.”", "A tutor's feedback", "Others are not fine"],
        ["“You might want to check the dates again.”", "A colleague reads your report", "The dates are probably wrong"],
        ["“I'm not sure I'm the best person to ask.”", "Q: Can you explain the statistics?", "Polite refusal: ask someone else"],
        ["“Don't you have a seminar at two?”", "A friend is relaxing at 1.55", "A reminder: you should leave now"],
        ["“If only I'd known earlier.”", "News of a free workshop that has already started", "Regret: it's too late to go now"],
        ["“That's one way of doing it.”", "Reaction to a method", "It isn't the best way"],
      ],
    },
    {
      type: "tip",
      exam: "toefl",
      body: "In Listen and Choose a Response, the best reply often contains no *yes* or *no*. Ask yourself what the speaker wants from you: information, help, agreement, sympathy or an apology. Then choose the reply that gives them that.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Quick check: what does the reply imply?",
        instructions: "Each reply answers the question before it. Match each exchange to what the reply implies. There is one meaning you do not need.",
        left: [
          "Q: Did you enjoy the conference? A: Well, the coffee was excellent.",
          "Q: Can I borrow your notes from Monday? A: I'm still typing them up.",
          "Q: Should I catch the eight o'clock train? A: I'd allow a bit more time than that.",
          "Q: Have you finished the report? A: I've finished the introduction.",
          "Q: Could you help me move flats on Saturday? A: Saturday's my sister's wedding.",
          "Q: Was the exam difficult? A: Nobody left early, put it that way.",
        ],
        right: [
          "No, most of it is still to do.",
          "Yes, and I'd recommend it.",
          "Take an earlier train.",
          "No, I'm not available.",
          "Not really: the talks were disappointing.",
          "Yes, it was hard.",
          "Not yet, but possibly later.",
        ],
        answer: [4, 6, 2, 0, 3, 5],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model: a student visits a professor's office hours",
      voice: "us",
      cast: { Student: "female", Professor: "male" },
      transcript:
        "Student: Hi, Professor Lang. Do you have a few minutes? It's about my research proposal.\nProfessor: Of course, come in. I read it over the weekend, actually.\nStudent: Oh, great. So, is it ready to submit?\nProfessor: Well, the topic's certainly ambitious. How many schools were you planning to visit?\nStudent: Twelve, across three regions. I thought a bigger sample would make the findings stronger.\nProfessor: It would. And the deadline for the fieldwork is the end of March, isn't it?\nStudent: Yes. Oh. You think that's too many.\nProfessor: I think twelve schools in eight weeks would leave you very little time for anything else. What about the interview questions? Have you shown them to anyone?\nStudent: Not yet. I was going to ask the writing centre, but they're fully booked until April.\nProfessor: Dr Osei ran a very similar study a couple of years ago.\nStudent: Right. I'll send Dr Osei an email this afternoon.\nProfessor: Good idea. And in the literature review, you've included some excellent recent sources.\nStudent: Some?\nProfessor: Well, there are one or two from the nineteen-nineties that the field has rather moved on from.\nStudent: OK. I'll replace those and cut the number of schools. Could I bring you a revised version next week?\nProfessor: My office hours are on Thursdays.\nStudent: Thursday it is, then. Thanks so much.",
    },
    {
      type: "table",
      title: "How a strong listener reads between the lines",
      headers: ["What the professor says", "What it implies", "How we know"],
      rows: [
        ["“Well, the topic's certainly ambitious.”", "The proposal isn't ready; the plan may be too big", "*Well* + praise for one feature avoids the student's yes/no question"],
        ["“And the deadline… is the end of March, isn't it?”", "There isn't time to visit twelve schools", "Why mention the deadline unless it matters? The student says it aloud: “You think that's too many.”"],
        ["“Dr Osei ran a very similar study…”", "Ask Dr Osei to look at the questions", "It follows the problem that the writing centre is fully booked"],
        ["“some excellent recent sources”", "Not all the sources are good or recent", "The student picks up *Some?* and the professor confirms it"],
        ["“My office hours are on Thursdays.”", "Yes: bring it on Thursday", "An indirect answer to “Could I bring you a revised version?”"],
      ],
    },
    {
      type: "text",
      title: "What to notice",
      body: "The professor never says *no*, *too many* or *ask Dr Osei*. Each meaning comes from **relevance**: the student assumes every remark is connected to the plan, and works out the connection. Notice that the student checks some implications aloud (“You think that's too many”, “Some?”). An exam question asks you to do this silently.\n\nThe small word **some** in “some excellent recent sources” does a lot of work. In IELTS Part 3, a tutor's comment such as *some of your charts are clear* almost always means **others need work**, and a question may ask what the tutor *suggests* or *implies* about them.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice 1: feedback on a presentation plan",
      voice: "uk",
      cast: { Tutor: "male" },
      transcript:
        "Tutor: Come in, Hana. So, you wanted to talk about your group's presentation plan.\nHana: Yes. We've got the structure, and we've divided up the topics. I just wanted to check we're on the right track before we start on the slides.\nTutor: Right, let me have a look. Hmm. Eight sections in fifteen minutes.\nHana: Well, there are four of us, so two sections each. Is that a problem?\nTutor: How long did you say the introduction would take?\nHana: About three minutes. Oh, I see. That leaves less than two minutes per section.\nTutor: It's your call, of course. Now, the survey results. You've got twelve slides of charts.\nHana: We thought the audience would want to see all the data.\nTutor: The markers will certainly see that you've worked hard on it.\nHana: But they'd rather see what it means. OK, we could choose the three most important charts and put the rest in a handout.\nTutor: That sounds like a plan. And who's presenting the conclusion?\nHana: Tom, probably. He's the most confident speaker.\nTutor: Has Tom seen the results yet? I gather he missed the last two meetings.\nHana: Ah. He has been a bit hard to get hold of. Maybe I should do the conclusion myself, and Tom could present the background instead.\nTutor: Mm. And what about questions at the end? Have you thought about what you might be asked?\nHana: Not really. We assumed people would mostly ask about the results.\nTutor: Last year, almost every question was about how the groups had chosen their participants.\nHana: Right, so we'd better be ready to explain our sampling. Could we do a practice run in front of you next week?\nTutor: I'm away at a conference all next week, I'm afraid. But Dr Price has offered to watch rehearsals for anyone who'd like that.\nHana: Great, I'll email Dr Price today. Thanks, this has been really helpful.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "IELTS Part 3: what does the tutor mean?",
        instructions: "Listen to Hana and her tutor. Choose the correct answer.",
        questions: [
          {
            prompt: "Why does the tutor ask how long the introduction will take?",
            options: [
              "To suggest the introduction should be longer",
              "To show that the group is planning too much for the time available",
              "To find out when the group will start on the slides",
            ],
            answer: 1,
            explanation: "Fifteen minutes minus three for the introduction leaves under two minutes for each of eight sections. Hana works this out herself: “That leaves less than two minutes per section.”",
          },
          {
            prompt: "What does the tutor suggest by saying “It's your call, of course”?",
            options: [
              "The group should phone the tutor to confirm the plan.",
              "The tutor fully supports the plan.",
              "The tutor has doubts but leaves the decision to the group.",
            ],
            answer: 2,
            explanation: "*It's your call* means *it's your decision*. After pointing out the timing problem, the tutor lets the group decide, which implies doubt. The first option is a literal misreading of *call*.",
          },
          {
            prompt: "What does the tutor mean by “The markers will certainly see that you've worked hard on it”?",
            options: [
              "The amount of data shows effort but is not what the markers want.",
              "Hard work is the main thing the markers reward.",
              "The markers will check the charts for mistakes.",
            ],
            answer: 0,
            explanation: "The tutor praises the effort, not the content. Hana understands the hint: “But they'd rather see what it means.”",
          },
          {
            prompt: "Why does Hana decide to present the conclusion herself?",
            options: [
              "Tom is a less confident speaker.",
              "Tom may not know the findings well enough.",
              "The tutor asks her to do it.",
            ],
            answer: 1,
            explanation: "The tutor's question “Has Tom seen the results yet?” and the comment that Tom missed two meetings imply that he may not be ready. Hana says Tom is “the most confident speaker”, so the first option is wrong.",
          },
          {
            prompt: "What does the tutor imply about the questions at the end of the presentation?",
            options: [
              "They will mostly be about the results.",
              "They are not assessed.",
              "The group should be ready to explain how they chose participants.",
            ],
            answer: 2,
            explanation: "“Last year, almost every question was about how the groups had chosen their participants.” Hana draws the conclusion: “we'd better be ready to explain our sampling.”",
          },
          {
            prompt: "How does the tutor respond to Hana's request for a practice run?",
            options: [
              "The tutor cannot help, but suggests someone who can.",
              "The tutor agrees to watch it next week.",
              "The tutor thinks a practice run is unnecessary.",
            ],
            answer: 0,
            explanation: "“I'm away at a conference all next week” is an indirect no, followed by an alternative: “Dr Price has offered to watch rehearsals.”",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "respond",
        title: "TOEFL-style: Listen and Choose a Response",
        instructions: "Listen to each question or remark once. Choose the best reply. The best reply responds to what the speaker means.",
        items: [
          {
            audio: "Is the printer on the second floor working again?",
            options: [
              "It's on the second floor, next to the lifts.",
              "I printed my essay there an hour ago.",
              "Yes, I work on the second floor.",
              "No, I haven't got a printer at home.",
            ],
            answer: 1,
            explanation: "An indirect yes: if the speaker printed there an hour ago, the printer works. The other replies repeat *second floor* or *printer* without answering.",
          },
          {
            audio: "I can't believe the bookstore wants forty dollars for a used textbook.",
            options: [
              "Yes, I bought mine there last week.",
              "The bookstore closes at six today.",
              "Have you checked whether the library has a copy?",
              "I'm sure they'll give you forty dollars for it.",
            ],
            answer: 2,
            explanation: "The remark is a complaint about the price. A helpful reply offers a cheaper alternative.",
          },
          {
            audio: "Weren't you supposed to hand in your lab report this morning?",
            options: [
              "I got an extension until Friday.",
              "Yes, the lab opens at nine.",
              "No, I'd rather go in the afternoon.",
              "It was a really interesting experiment.",
            ],
            answer: 0,
            explanation: "The negative question shows surprise that the student is not busy or worried. The reply explains why: the deadline has moved.",
          },
          {
            audio: "If you're going past the post office, I've got a parcel that needs sending.",
            options: [
              "No, I sent mine yesterday.",
              "The post office is just past the bank.",
              "What's in the parcel?",
              "Sure, give it to me and I'll drop it off.",
            ],
            answer: 3,
            explanation: "This is an indirect request: please post my parcel. The best reply accepts it.",
          },
          {
            audio: "Some of the questions on the quiz were from chapters we haven't covered yet.",
            options: [
              "Great, so it was easy, then.",
              "You should mention that to the professor.",
              "We cover a new chapter every week.",
              "I haven't taken a quiz in ages.",
            ],
            answer: 1,
            explanation: "The remark is a complaint that the quiz was unfair. The reply suggests a way to deal with it.",
          },
          {
            audio: "I'd have thought the library would be quieter during the holidays.",
            options: [
              "Yes, it's always this quiet in the holidays.",
              "The library opens at half past eight.",
              "So would I. Maybe everyone's studying for the retakes.",
              "I'm going on holiday next week.",
            ],
            answer: 2,
            explanation: "*I'd have thought* expresses surprise: the library is busy. The reply agrees and offers a reason. The first option misreads the remark.",
          },
          {
            audio: "Do you happen to know if Professor Ruiz is in today?",
            options: [
              "The light's on in that office.",
              "Yes, I'm in all day today.",
              "I happen to know the answer.",
              "Professor Ruiz teaches history.",
            ],
            answer: 0,
            explanation: "An indirect answer: a light on in the office suggests the professor is in. The other replies repeat words (*in today*, *happen to know*, *Professor Ruiz*) without answering.",
          },
          {
            audio: "That's an interesting choice of colour for the poster.",
            options: [
              "Thanks, I'm so glad you love it.",
              "I've printed fifty copies.",
              "The poster is for the jazz concert.",
              "Too bright? I can tone it down a bit.",
            ],
            answer: 3,
            explanation: "*An interesting choice of…* is a tactful way of showing doubt. The best reply recognises the criticism. The speaker never says they love it.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice 2: a conversation at the housing office",
      voice: "us",
      cast: { Student: "male", Officer: "female" },
      transcript:
        "Student: Hi. I'd like to ask about moving to a different room. My room's right above the music practice rooms, and I can hear drums until eleven most nights.\nOfficer: I'm sorry to hear that. Have you filled in a room change form before?\nStudent: No, this is the first time.\nOfficer: OK. Well, I can give you the form, but I should tell you there are about forty students ahead of you on the list, and we don't usually get many rooms free until the end of the semester.\nStudent: Oh. So I'd basically be waiting until January.\nOfficer: I couldn't promise even that. Have you spoken to your resident adviser about the noise?\nStudent: No. I didn't think it was really their job.\nOfficer: The practice rooms are supposed to close at nine on weeknights. If they're being used after that, it's a building issue, not a housing one.\nStudent: Wait, so the noise after nine shouldn't be happening at all?\nOfficer: That's how I read the rules. Your adviser can report it directly to building services.\nStudent: Then that might solve the problem without me moving at all.\nOfficer: Take the form anyway, just in case. But I'd start with your adviser.\nStudent: Thanks. I'll go and find them this afternoon.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "TOEFL-style conversation questions",
        instructions: "Choose the best answer to each question.",
        questions: [
          {
            prompt: "What does the officer imply about the room change?",
            options: [
              "The student is not allowed to apply.",
              "The form must be handed in before January.",
              "A new room is unlikely to become available soon.",
              "The student should choose a room near the practice rooms.",
            ],
            answer: 2,
            explanation: "Forty students ahead and few rooms free until the end of the semester, and “I couldn't promise even that”: the officer is preparing the student for a long wait.",
          },
          {
            prompt: "Why does the officer mention the closing time of the practice rooms?",
            options: [
              "To suggest that the noise problem might be solved another way",
              "To explain why the student's request will be refused",
              "To recommend a quieter time for the student to study",
              "To show that music students have also complained",
            ],
            answer: 0,
            explanation: "If the rooms should close at nine, the late noise breaks the rules and can be reported. The student draws the conclusion: “that might solve the problem without me moving at all.”",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice 3: an invitation to a study group",
      voice: "us",
      transcript:
        "Jonas: Maya, a few of us are setting up a study group for the statistics exam. We're meeting on Tuesday evenings in the library. Do you want to join?\nMaya: Tuesday evenings? That's when I do my shift at the café.\nJonas: Ah, of course. What about weekends?\nMaya: Honestly, Jonas, I've found I get more done on my own with this subject. Last term I was in a group, and we spent most of the time talking about other things.\nJonas: That's fair. Our group's quite focused, though. Lena's organizing it, and she's already drawn up a schedule with a topic for every session.\nMaya: Lena's organizing it? Well, that's different. She's the one who explained regression to me in about five minutes when I'd been stuck on it for a week.\nJonas: Exactly. So, should I ask if we can move it to Wednesdays?\nMaya: I'm free on Wednesdays after six.\nJonas: Great. I'll message the others tonight.\nMaya: Could you check whether they're doing practice papers too? That's what I really need.\nJonas: I'm pretty sure that's the plan for the last three sessions.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "mcq",
        title: "TOEFL-style conversation questions",
        instructions: "Choose the best answer to each question.",
        questions: [
          {
            prompt: "What does Maya imply when she talks about her experience last term?",
            options: [
              "She would prefer to study with different people.",
              "She doubts that a study group would help her.",
              "She failed the statistics exam last term.",
              "She thinks the group should meet less often.",
            ],
            answer: 1,
            explanation: "“I get more done on my own… we spent most of the time talking about other things.” This is a polite way of saying no to the group.",
          },
          {
            prompt: "What makes Maya more interested in joining the group?",
            options: [
              "The group has already moved its meetings to Wednesdays.",
              "Jonas offers to explain regression to her.",
              "She has a high opinion of the person organizing it.",
              "The group will meet in the library.",
            ],
            answer: 2,
            explanation: "“Lena's organizing it? Well, that's different.” Maya then explains why: Lena once helped her understand regression quickly. The meeting day has not changed yet, and it was Lena, not Jonas, who explained regression.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toefl",
      body: "In Listen and Choose a Response you hear the question or statement once, and it is not shown on screen. Catch the speaker's purpose from the first few words: are they asking, complaining, requesting, reminding or inviting? Wrong replies often repeat a word you heard (*printer*, *second floor*) without responding to that purpose.",
    },
    {
      exam: "toefl",
      body: "Each conversation is followed by only two questions, so they tend to target the turning point: a hint, a suggestion or a reason that changes what someone will do. Questions such as *Why does the officer mention…?* or *What does the student imply…?* are about the purpose of a remark.",
    },
    {
      exam: "ielts",
      body: "In Part 3, tutors often give criticism indirectly: *You might want to…*, *Have you thought about…?*, *Some of your…*. When a student then changes the plan, the new plan is usually what the question is testing.",
    },
  ],
  vocabulary: [
    { word: "imply", meaning: "to suggest something without saying it directly", example: "By mentioning the deadline, the professor implied that the plan was too big.", topic: "academic" },
    { word: "infer", meaning: "to reach a conclusion from what you hear or see", example: "From the reply, I inferred that the library was closed.", topic: "academic" },
    { word: "hint", meaning: "something you say that suggests what you mean without stating it", example: "The tutor's question about timing was a hint that the plan was too long.", topic: "everyday" },
    { word: "tactful", meaning: "careful not to upset people when giving bad news or criticism", example: "She gave tactful feedback on the weak conclusion.", topic: "work" },
    { word: "read between the lines", meaning: "to understand a meaning that is not stated directly", example: "If you read between the lines, the email is a refusal.", topic: "everyday" },
    { word: "it's your call", meaning: "it's your decision", example: "You can present the data either way. It's your call.", topic: "work" },
    { word: "ambitious", meaning: "needing a lot of effort, time or skill; sometimes more than is realistic", example: "Visiting twelve schools in eight weeks is an ambitious plan.", topic: "education" },
    { word: "on the right track", meaning: "doing something in a way that is likely to succeed", example: "Check with your tutor that you're on the right track.", topic: "education" },
    { word: "extension", meaning: "extra time allowed to finish work after the deadline", example: "I asked for an extension because I was ill.", topic: "education" },
    { word: "hard to get hold of", meaning: "difficult to contact", example: "Tom has been hard to get hold of all week.", topic: "everyday" },
    { word: "tone down", meaning: "to make something less strong, bright or extreme", example: "Could you tone down the colours on the poster?", topic: "everyday" },
  ],
  keyPoints: [
    "Speakers expect you to assume that their words are relevant: a reply that seems off-topic usually carries a yes, a no or a reason.",
    "Limiting words such as *some*, *one or two* and *certainly ambitious* often imply criticism.",
    "Hints and polite refusals are often followed by what the speaker expects you to do, sometimes said aloud by the other person.",
    "In Listen and Choose a Response, reply to the speaker's purpose, and be suspicious of options that only repeat words you heard.",
    "In IELTS Part 3, an indirect comment from the tutor often leads to a change of plan, and the new plan is usually the answer.",
  ],
};

export default lesson;
