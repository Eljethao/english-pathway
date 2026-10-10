import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-practice-test",
  title: "Full speaking practice test",
  summary:
    "A complete timed IELTS Speaking mock (Parts 1, 2 and 3) plus a TOEFL interview question and a TOEIC opinion task, with model answers and self-assessment checklists for each.",
  skill: "speaking",
  level: "C1",
  order: 4,
  minutes: 35,
  exams: [
    { exam: "ielts", task: "Mock test" },
    { exam: "ielts", task: "Speaking Part 1" },
    { exam: "ielts", task: "Speaking Part 2" },
    { exam: "ielts", task: "Speaking Part 3" },
    { exam: "toefl", task: "Speaking – Take an Interview" },
    { exam: "toeic", task: "Speaking – Express an opinion" },
  ],
  objectives: [
    "Complete a full IELTS Speaking test under real timing conditions",
    "Adjust answer length and style to each part: short and personal, long turn, then abstract discussion",
    "Answer a TOEFL interview question and a TOEIC opinion task within the official time limits",
    "Assess your own recordings against the four IELTS criteria",
  ],
  warmUp: [
    "Which part of a speaking test makes you most nervous, and why?",
  ],
  learn: [
    {
      type: "text",
      title: "How to use this test",
      body: "Do the test **in one sitting**, in a quiet room, and record every answer. Treat it like the real thing:\n\n- Don't pause the timer or restart an answer. In the exam you can't.\n- Don't read the model answers until you have finished the whole test.\n- Speak to an imaginary examiner, not to a script. Only write notes in IELTS Part 2, where you are given paper and a pencil; for the other tasks, plan in your head.\n\nWhen you have finished, listen to your recordings, tick the checklist for each task, and only then compare with the model answers. The models show *one* strong way to answer, not the only one.",
    },
    {
      type: "table",
      title: "What's in this mock test",
      headers: ["Section", "Tasks", "Preparation", "Speaking time"],
      rows: [
        ["IELTS Part 1: Interview", "6 short questions on familiar topics", "None", "About 20–30 seconds each"],
        ["IELTS Part 2: Long turn", "1 cue card", "1 minute (notes allowed)", "Up to 2 minutes"],
        ["IELTS Part 3: Discussion", "4 abstract questions linked to Part 2", "None", "About 45–60 seconds each"],
        ["TOEFL: Take an Interview", "1 interview question", "None", "About 45 seconds"],
        ["TOEIC: Express an opinion", "1 opinion question", "45 seconds", "60 seconds"],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Before you start: know the format",
        questions: [
          {
            prompt: "In IELTS Part 2, what should you do if you finish speaking after one minute?",
            options: [
              "Stop and wait for the next question.",
              "Keep going: add detail, an example or a reflection, because you are expected to speak for up to two minutes.",
              "Ask the examiner for a different cue card.",
            ],
            answer: 1,
            explanation: "The examiner will stop you at two minutes. Finishing at one minute gives much less language to assess.",
          },
          {
            prompt: "In IELTS Part 3, the examiner asks a question about a topic you know nothing about. What is the best strategy?",
            options: [
              "Say “I don't know” and wait.",
              "Change the subject to something you know well.",
              "Admit it briefly, then speculate: “I'm not an expert, but I imagine…”.",
            ],
            answer: 2,
            explanation: "You are assessed on your language, not your knowledge. Speculating aloud shows a wide range of language.",
          },
          {
            prompt: "How much preparation time do you get for a TOEFL Take an Interview question?",
            options: ["None", "15 seconds", "45 seconds", "1 minute"],
            answer: 0,
            explanation: "You answer each interview question straight away, like a real conversation.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "table",
      title: "How you will assess yourself: the four IELTS criteria",
      headers: ["Criterion", "What band 7+ sounds like", "Warning signs"],
      rows: [
        ["Fluency and Coherence", "Keeps going and produces long turns without noticeable effort; some hesitation or self-correction, but it does not affect coherence; uses discourse markers and linking devices flexibly", "Long silences; repeating the same linker (“and… and… so…”); losing the thread"],
        ["Lexical Resource", "Uses some less common and idiomatic vocabulary, with awareness of style and collocation; paraphrases effectively when a word is missing", "Repeating general words (good, nice, thing); idioms that don't fit; obvious memorised phrases"],
        ["Grammatical Range and Accuracy", "Frequent error-free sentences; flexible use of complex structures (conditionals, relative clauses, modals)", "Only simple sentences; errors that change meaning; avoiding past or future forms"],
        ["Pronunciation", "Easy to understand throughout; natural stress, rhythm and intonation; connected speech", "Flat intonation; every word stressed equally; words the listener has to guess"],
      ],
    },
    {
      type: "text",
      title: "How a strong candidate approaches the test",
      body: "- **Part 1:** answers directly, adds one reason or detail, and stops. Two or three sentences is ideal. Over-long Part 1 answers can sound memorised.\n- **Part 2:** uses the minute to write key words for each bullet point, not full sentences. Begins confidently (“I'd like to talk about…”), follows the bullets in order, and keeps the final “explain” point for a reflective ending.\n- **Part 3:** zooms out from personal experience to society, gives a clear position, develops one or two ideas in depth, and qualifies them (“That said…”).\n- **TOEFL and TOEIC:** states an opinion in the first sentence, supports it with a specific reason and example, and finishes with a short conclusion before time runs out.",
    },
  ],
  practice: [
    {
      type: "text",
      title: "IELTS Speaking Part 1: Interview (4–5 minutes)",
      body: "The examiner will ask you some questions about yourself and familiar topics. There is no preparation time. Give a direct answer, then add a reason or an example. Aim for about 20–30 seconds per answer.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "speak",
        title: "Part 1, question 1",
        prompt: "Let's talk about where you live. Do you live in a house or an apartment? What do you like most about it?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "I live in a flat on the fourth floor of a fairly old building, right in the centre of town. What I like most is probably the light. It's got big windows facing south, so even in winter it feels bright and quite cheerful. The only downside is that there's no lift, so carrying the shopping up is a bit of a workout.",
        targetPhrases: ["what I like most", "the only downside"],
        checklist: [
          "I answered both questions directly.",
          "I added a reason or detail, not just a one-word answer.",
          "I stopped naturally after 20–30 seconds.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "speak",
        title: "Part 1, question 2",
        prompt: "Now let's talk about mornings. Would you describe yourself as a morning person?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Not really, no, although I wish I were. I'm much more alert in the evening, and it takes me a good half hour and a strong coffee before I can hold a proper conversation. That said, I've noticed that when I do manage to get up early, I get far more done, so I keep trying.",
        targetPhrases: ["not really", "that said", "far more"],
        checklist: [
          "I gave a clear answer in the first sentence.",
          "I used at least one natural expression rather than just “yes” or “no”.",
          "My answer had a reason or an example.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "Part 1, question 3",
        prompt: "What do you usually do in the first hour after you wake up?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "On weekdays it's pretty much the same routine. I check my messages, which I know I shouldn't do straight away, then I have a quick shower and make breakfast, usually just toast and fruit. If I've got time, I like to listen to a podcast while I'm eating. It's a gentle way to ease into the day.",
        targetPhrases: ["pretty much", "if I've got time", "ease into"],
        checklist: [
          "I used present simple for habits and routines correctly.",
          "I linked actions with words like “then”, “while” or “if”.",
          "I sounded natural, not as if I was reading a list.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "Part 1, question 4",
        prompt: "Is your morning routine different now from when you were a child?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Yes, completely. When I was a child, my mum used to wake me up and practically drag me out of bed, and we'd all have breakfast together before school. These days it's much more rushed and I usually eat on my own. I suppose I took those family breakfasts for granted at the time.",
        targetPhrases: ["used to", "we'd", "these days", "took for granted"],
        checklist: [
          "I compared past and present clearly.",
          "I used “used to” or “would” for past habits.",
          "I kept the answer short and personal.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex12",
        kind: "speak",
        title: "Part 1, question 5",
        prompt: "Let's move on to music. What kind of music do you listen to most?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Mostly indie and a bit of jazz, although it really depends on my mood. When I'm working, I need something without lyrics, so I'll put on a jazz playlist in the background. But on the way home I tend to go for something more upbeat, just to switch off after a long day.",
        targetPhrases: ["depends on my mood", "tend to go for", "switch off"],
        checklist: [
          "I answered the question directly in the first sentence.",
          "I said when or why I listen to it, not just what I listen to.",
          "I used a natural expression such as “tend to” or “it depends on…”.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex13",
        kind: "speak",
        title: "Part 1, question 6",
        prompt: "Did you learn to play a musical instrument when you were a child?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "I did, actually. My parents made me take piano lessons from about the age of seven, and to be honest I didn't enjoy them much, because I hated practising scales. I gave up when I was twelve, which I slightly regret now. If I had more free time, I'd love to pick it up again.",
        targetPhrases: ["to be honest", "gave up", "slightly regret", "pick it up again"],
        checklist: [
          "I used past tenses accurately to talk about my childhood.",
          "I added a reason or a feeling, not just “yes” or “no”.",
          "I kept the answer to about 20–30 seconds.",
        ],
      },
    },
    {
      type: "text",
      title: "IELTS Speaking Part 2: Long turn (3–4 minutes)",
      body: "Read the cue card. You have **one minute** to prepare and you can make notes. Then speak for **up to two minutes**. The examiner will stop you when the time is up.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex6",
        kind: "speak",
        title: "Part 2: cue card",
        prompt: "Describe a public place in your town or city that you think could be improved.",
        cueCard: [
          "where it is",
          "what it is like now",
          "what problems it has",
          "and explain how you would improve it",
        ],
        prepSeconds: 60,
        speakSeconds: 120,
        modelAnswer:
          "I'd like to talk about the main square in my hometown, which is right in front of the old town hall. It's the kind of place everyone passes through, because the bus station is on one side and the main shopping street starts on the other. At the moment, to be honest, it's a bit of a missed opportunity. It's a huge space, but it's almost entirely grey concrete, with hardly any trees, so in summer it gets unbearably hot, and in winter it's just windy and bleak. There are a few benches, but they face the traffic, so nobody really wants to sit there. And the biggest problem is that cars are still allowed to drive across one side of it, which makes it noisy and not particularly safe for kids. So people tend to hurry through it rather than spend time there. If I were in charge, the first thing I'd do is close it to traffic completely. Then I'd plant a lot more trees, partly for shade and partly to soften the look of the place. I'd also add a couple of cafés with outdoor seating, and maybe a small fountain, because children always gravitate towards water. If you gave people a reason to stay, the square could become the heart of the town again, which is what it was when my grandparents were young. Apparently it used to host a weekly market, and I'd bring that back too. It wouldn't cost a fortune, and it would make a real difference to how the town feels.",
        targetPhrases: ["a missed opportunity", "hardly any", "If I were in charge", "partly for", "gravitate towards", "make a real difference"],
        checklist: [
          "I covered all four points on the cue card, in a logical order.",
          "I spoke for close to two minutes without long pauses.",
          "I used descriptive vocabulary beyond “nice”, “big” and “bad”.",
          "I used a conditional (“If I were…, I'd…”) to explain my improvements.",
          "I ended with a reflection rather than just stopping.",
        ],
      },
    },
    {
      type: "text",
      title: "IELTS Speaking Part 3: Discussion (4–5 minutes)",
      body: "The examiner will now ask you some more general questions connected to the Part 2 topic. There is no preparation time. Give a clear position, develop your ideas and think about society, not only your own experience. Aim for about 45–60 seconds per answer.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex7",
        kind: "speak",
        title: "Part 3, question 1",
        prompt: "Who should be responsible for looking after public spaces such as parks and squares: local governments or the people who live nearby?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "I'd say the main responsibility has to lie with local government, simply because things like maintenance, lighting and safety cost money and need long-term planning, which residents can't realistically provide. That said, I don't think it should be left entirely to the council. Where residents feel some sense of ownership, public spaces tend to be far better looked after. You see this with community gardens, for instance, where volunteers plant and water things, and as a result there's much less litter and vandalism. So ideally it's a partnership: the authorities provide the funding and the infrastructure, and local people are given a genuine say in how the space is used. If people are consulted, they're much more likely to care about it.",
        targetPhrases: ["has to lie with", "that said", "a sense of ownership", "a partnership", "a genuine say"],
        checklist: [
          "I gave a clear position in my first sentence.",
          "I considered both sides of the question.",
          "I supported my view with a general example, not only a personal one.",
          "I ended with a balanced conclusion.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex8",
        kind: "speak",
        title: "Part 3, question 2",
        prompt: "How have public spaces in cities changed compared with a few decades ago?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "I think the biggest change, at least in many European cities, is that they've been reclaimed from cars. A few decades ago, city planning was very much centred on traffic, whereas now a lot of main streets have been pedestrianised and there's far more emphasis on cycle lanes and greenery. Another shift is that public spaces have become more commercial. Many areas that used to be genuinely public are now privately owned plazas next to shopping centres, where you're welcome as long as you're spending money. That's arguably a step backwards. And of course, people use these spaces differently now. You see far fewer people simply chatting on a bench, and far more people on their phones, although I suspect that's true pretty much everywhere.",
        targetPhrases: ["whereas", "far more emphasis", "another shift", "arguably", "I suspect"],
        checklist: [
          "I compared the past with the present using clear structures.",
          "I described at least two different changes.",
          "I evaluated the changes, not just described them.",
          "I hedged where I wasn't sure (“arguably”, “I suspect”).",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex9",
        kind: "speak",
        title: "Part 3, question 3",
        prompt: "Do you think public spaces will become more or less important in the future? Why?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "More important, I'd say, and possibly much more. As cities get denser and more people live in small flats, often without a garden, shared outdoor spaces become an extension of your home. On top of that, if remote working continues to grow, people will spend less time in offices and more time in their own neighbourhoods, so the quality of local parks and squares will matter a lot more. There's also climate change to consider. Chances are that cities will need many more trees and green spaces simply to cope with extreme heat. The only thing that might work against this is the cost of land. Developers will always be tempted to build on open space, so I suspect it'll come down to how much political will there is to protect it.",
        targetPhrases: ["I'd say", "on top of that", "chances are", "work against", "come down to"],
        checklist: [
          "I made a clear prediction.",
          "I gave at least two reasons, each explained in some depth.",
          "I used language of speculation (“chances are”, “might”, “I suspect”).",
          "I mentioned something that could make my prediction wrong.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex14",
        kind: "speak",
        title: "Part 3, question 4",
        prompt: "What can be done to make public spaces feel safer, especially at night?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "I think the most obvious step is better lighting, because poorly lit areas put people off straight away, particularly women and older people. But lighting on its own isn't enough. In my view, the single biggest factor is simply having more people around. A square with cafés, a late-opening shop or even a food stall feels safer, because there are always eyes on the street, as planners sometimes put it. So encouraging activity in the evenings probably does more than installing extra cameras. That said, design matters too. Spaces with clear sightlines and several exits feel much less threatening than ones full of hidden corners. Ideally, I'd say cities should combine all three: light, activity and good design.",
        targetPhrases: ["put people off", "on its own", "in my view", "that said", "ideally"],
        checklist: [
          "I suggested more than one solution.",
          "I explained why each solution would work.",
          "I compared the solutions (“does more than…”), not just listed them.",
          "I ended by bringing my ideas together.",
        ],
      },
    },
    {
      type: "text",
      title: "TOEFL Speaking: Take an Interview",
      body: "An interviewer is asking you questions for a research project about city life. Answer straight away, with no preparation time, and speak for about 45 seconds.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex10",
        kind: "speak",
        title: "TOEFL interview question",
        prompt:
          "Interviewer: Some cities have started turning car parks into small parks and green areas, even though this makes it harder for drivers to find parking. Do you think this is the right decision? Why or why not?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "Yes, I think it's the right decision in most cases. The main reason is that green space benefits everybody, whereas a car park only benefits the people who drive into the centre. In my city, they turned a small car park next to the library into a garden last year, and now it's full of people eating lunch outside. Of course, it's a problem for some people, especially older residents who can't walk far. So cities should keep a few parking spaces for people who really need them. But overall, I'd say the benefits clearly outweigh the drawbacks.",
        targetPhrases: ["the main reason is", "whereas", "of course", "outweigh the drawbacks"],
        checklist: [
          "I gave my opinion in the first sentence.",
          "I supported it with a reason and a specific example.",
          "I acknowledged the other side briefly.",
          "I finished with a conclusion within about 45 seconds.",
        ],
      },
    },
    {
      type: "text",
      title: "TOEIC Speaking: Express an opinion",
      body: "You will have **45 seconds** to prepare and **60 seconds** to speak. Give your opinion and support it with reasons and examples.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex11",
        kind: "speak",
        title: "TOEIC opinion question",
        prompt:
          "Do you agree or disagree with the following statement? “It is better to work for a large company than for a small company.” Use specific reasons and examples to support your answer.",
        prepSeconds: 45,
        speakSeconds: 60,
        modelAnswer:
          "Personally, I disagree. I think a small company is often a better place to work, especially at the start of your career. For one thing, you usually get much more responsibility early on. In a big organisation, you might spend years doing one narrow task, whereas in a small team you're involved in everything. A good example is my friend who joined a small design agency after university. Within a year she was meeting clients and managing her own projects, which would never have happened so quickly at a large firm. On top of that, small companies tend to be friendlier, because everyone knows each other. That's why I'd say a small company is the better choice, even though large companies often pay more.",
        targetPhrases: ["personally", "for one thing", "a good example is", "on top of that", "that's why I'd say"],
        checklist: [
          "I clearly said whether I agree or disagree.",
          "I gave two reasons, at least one with a specific example.",
          "I briefly mentioned the opposite view.",
          "I used my 45 seconds of preparation to plan key words, not full sentences.",
          "I finished with a conclusion before the 60 seconds ran out.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "The whole IELTS Speaking test takes 11–14 minutes. The examiner controls the timing, so being interrupted in Part 1 or Part 3 is normal. Use your recordings to check one thing at a time: first fluency, then vocabulary, then grammar, then pronunciation.",
    },
    {
      exam: "toefl",
      body: "In **Take an Interview**, the questions on one topic often move from personal experience to opinion. Treat each question as a fresh start: a clear first sentence, one developed reason, and a short conclusion.",
    },
    {
      exam: "toeic",
      body: "In **Express an opinion**, a clear position with two relevant reasons scores better than a complicated answer that runs out of time. Practise finishing a full answer in 55 seconds so you always have a margin.",
    },
  ],
  vocabulary: [
    { word: "a missed opportunity", meaning: "a chance to do something good that was not used", example: "The empty riverside is a missed opportunity for the city.", topic: "society" },
    { word: "bleak", meaning: "cold, empty and unwelcoming", example: "The car park looks bleak in winter.", topic: "everyday" },
    { word: "gravitate towards", meaning: "to be naturally attracted to something", example: "Teenagers tend to gravitate towards the skate park.", topic: "society" },
    { word: "reclaim", meaning: "to take back something that was lost or used for another purpose", example: "The city reclaimed the riverbank from industry.", topic: "environment" },
    { word: "vandalism", meaning: "deliberate damage to public or private property", example: "The bus shelter was closed after repeated vandalism.", topic: "society" },
    { word: "a sense of ownership", meaning: "a feeling that something partly belongs to you, so you care for it", example: "Involving residents gives them a sense of ownership.", topic: "society" },
    { word: "infrastructure", meaning: "the basic systems a place needs, such as roads, power and water", example: "The town's infrastructure needs serious investment.", topic: "society" },
    { word: "political will", meaning: "the determination of politicians to make something happen", example: "There is no political will to raise taxes.", topic: "society" },
    { word: "outweigh", meaning: "to be greater or more important than something else", example: "The advantages outweigh the costs.", topic: "academic" },
    { word: "ease into", meaning: "to start something slowly and gently", example: "I like to ease into the week with a light Monday.", topic: "everyday" },
  ],
  keyPoints: [
    "Do mock tests in one sitting, under real timing, and record every answer.",
    "Part 1: short, direct and personal. Part 2: use all the time and follow the cue card. Part 3: abstract, developed and balanced.",
    "TOEFL and TOEIC opinion tasks reward a clear first sentence, a specific example and a conclusion.",
    "Assess yourself against all four criteria, one at a time, before reading the model answers.",
  ],
};

export default lesson;
