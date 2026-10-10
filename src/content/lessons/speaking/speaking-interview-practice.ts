import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-interview-practice",
  title: "TOEFL interview: extended practice",
  summary:
    "Practise a complete TOEFL Take an Interview task: four questions on one topic, no preparation time and 45 seconds for each answer, moving from your own experience to opinions on wider issues.",
  skill: "speaking",
  level: "B2",
  order: 10,
  minutes: 25,
  exams: [{ exam: "toefl", task: "Speaking – Take an Interview" }],
  objectives: [
    "Recognise how the four interview questions move from personal experience to wider issues",
    "Start every answer immediately with a direct response, with no preparation time",
    "Fill 45 seconds with one well-developed point instead of several thin ones",
    "Keep four answers on one topic fresh, with a new example each time",
  ],
  warmUp: [
    "Imagine a researcher asks you, “How do you usually get to work or class?” What could you say for 45 seconds without stopping?",
  ],
  learn: [
    {
      type: "text",
      title: "How the task works",
      body: "In **Take an Interview**, a recorded interviewer asks you **four questions on one topic**, often as part of an imaginary research study (*Thanks for taking part in our study about…*). There is **no preparation time**: you start speaking when the question ends, and you have **45 seconds** for each answer.\n\nThe questions follow a path. **Early questions are about your own experience**; **later questions ask for your opinion on wider issues**. You practised giving one supported opinion in *Giving and supporting opinions*. This lesson is about handling the whole set of four: changing your answer style as the questions change, and keeping going for four answers in a row.",
    },
    {
      type: "table",
      title: "A typical path through the four questions",
      headers: ["Question", "Usually asks about", "Example (topic: public libraries)", "A good answer shape"],
      rows: [
        ["1", "Your experience or habits", "How often do you use a library, and what do you use it for?", "Direct answer → details of your habit → why"],
        ["2", "A preference or a specific experience", "Tell me about a time a library was useful to you.", "What happened → one or two details → what you learned or felt"],
        ["3", "Your opinion on a wider issue", "Some people say libraries are less important now that information is online. What do you think?", "Opinion → reason → example from society or your life → short conclusion"],
        ["4", "A policy, the future or pros and cons", "Should cities spend more money on libraries or on other services?", "Position → main reason → the other side → conclusion"],
      ],
    },
    {
      type: "text",
      title: "Five habits for 45 seconds with no preparation",
      body: "- **First sentence = direct answer.** Echoing a few words of the question is natural and gives you a second or two to think: *How often? Probably once a week…*\n- **One point, well developed.** At a natural pace of 130–150 words a minute, 45 seconds is roughly 100 words: enough for one reason with a specific example, or two short reasons.\n- **Zoom out in questions 3 and 4.** Move from *I* to *people*, *students* or *cities*: *For a lot of students… / In my city… / In general…*. A personal example is still useful, but the point is about society.\n- **A new example every time.** You can refer back briefly (*As I said, I study at home…*), but bring fresh material to each answer, or the four answers start to sound the same.\n- **Land the ending.** Aim to finish your last sentence at about 40 seconds. A clear final line sounds more controlled than being cut off in the middle of an idea.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: know the task",
        questions: [
          {
            prompt: "Interviewer: “How do you usually get to your classes or your workplace?” What kind of question is this?",
            options: [
              "An opinion on a wider issue",
              "A question about your own experience or habits",
              "A policy question about what governments should do",
              "A prediction about the future",
            ],
            answer: 1,
            explanation: "It asks what you usually do. This is typical of the early questions in the interview.",
          },
          {
            prompt: "Interviewer: “Some people think cities should ban cars from their centres. Do you agree?” Which first sentence is best?",
            options: [
              "Cars are a very interesting topic, and there are many different kinds of cars.",
              "Well, let me think about that for a moment… hmm…",
              "Partly, yes. I'd ban most cars from the very centre, but not from the whole city.",
              "In my country there are a lot of cars.",
            ],
            answer: 2,
            explanation: "It gives a clear, slightly qualified position straight away. The others are background, silence or off the point.",
          },
          {
            prompt: "Roughly how many words can you say in 45 seconds at a natural speaking pace?",
            options: ["About 30–40", "About 95–110", "About 200", "About 300"],
            answer: 1,
            explanation: "At 130–150 words a minute, 45 seconds is roughly 100 words: room for one reason with a specific example.",
          },
          {
            prompt: "Question 4 is on the same topic as question 1. What should you do with the example you used in question 1?",
            options: [
              "Refer to it briefly if it helps, but add a new example or a wider point",
              "Repeat it in full, because it worked well",
              "Never mention anything from your earlier answers",
              "Ask the interviewer to repeat question 1",
            ],
            answer: 0,
            explanation: "A quick reference back is natural, but each answer should bring something new.",
          },
          {
            prompt: "You have said everything you planned, and about 8 seconds are left. What is the best move?",
            options: [
              "Stop and wait in silence",
              "Start a completely new topic",
              "Say “That's all, thank you”",
              "Add a short concluding sentence that returns to your answer",
            ],
            answer: 3,
            explanation: "A short conclusion (So for me, … / So overall, …) uses the time well and ends the answer clearly.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The interview topic: getting around",
      body: "*Interviewer: Thanks for taking part in our research project on transport in cities. I'm going to ask you four questions.*",
    },
    {
      type: "audio",
      title: "Model: a complete interview (four answers of about 45 seconds)",
      voice: "us",
      cast: { Interviewer: "female", Student: "male" },
      transcript:
        "Interviewer: First, how do you usually travel around your town or city?\nStudent: Mostly by bus, to be honest. I live about four kilometres from the university, and there's a bus that goes almost door to door, so it's the easiest option. It takes around twenty minutes, and I usually use the time to listen to podcasts or go over my notes. When the weather's nice, I sometimes walk part of the way, because it clears my head before class. I don't have a car, and I don't really want one, because parking near campus is expensive and almost impossible to find.\nInterviewer: Can you tell me about a journey that didn't go as planned?\nStudent: Sure. Last winter I was going to a job interview in another city, and I'd booked a train that left at seven in the morning. When I got to the station, there was a sign saying the train was cancelled because of snow on the line. Honestly, I was panicking. In the end, I found a bus that left twenty minutes later, and I called the company to explain that I might be late. Luckily, they were really understanding, and I actually got there just in time. Since then, I always plan a backup route for important trips.\nInterviewer: Many cities are trying to get more people to cycle. Why do you think this is difficult?\nStudent: I think the main problem is safety. In a lot of cities, cyclists have to share the road with buses and trucks, and that's pretty scary, especially for beginners. My sister bought a bike last year, but she stopped using it after a few weeks, because she had a couple of near misses with cars. Another issue is distance. If people live far from the centre, cycling every day just isn't realistic. So I'd say cities need proper, separate bike lanes first. Until people feel safe, most of them won't switch from their cars.\nInterviewer: Finally, should public transport be free for everyone? Why or why not?\nStudent: I don't think it should be free for everyone, but it should definitely be much cheaper. The main reason is that free public transport costs a huge amount of money, and that money has to come from taxes, so someone still pays. Also, if it's free, the service might get worse, because there's less money for new buses. Having said that, I'd make it free for some groups, like students, older people and people on low incomes, because they depend on it most. So overall, I'd go for lower fares, and free travel for the people who really need it.",
    },
    {
      type: "text",
      title: "How a strong speaker does it",
      body: "- **Question 1 (habit):** *Mostly by bus, to be honest.* The answer comes in the first three words, then details (distance, time, what the speaker does on the bus) and a reason (*parking… is expensive*).\n- **Question 2 (experience):** a mini-story in past tenses, with a problem (*the train was cancelled*), a solution (*I found a bus*) and a lesson (*Since then, I always plan a backup route*).\n- **Question 3 (wider issue):** the speaker **zooms out** (*In a lot of cities, cyclists…*). The sister's near misses support a general point, and the conclusion is about cities, not about the speaker.\n- **Question 4 (policy):** a nuanced position (*not free for everyone, but much cheaper*), a reason, the other side (*Having said that, I'd make it free for some groups*) and a clear conclusion.\n- **Four answers, four different kinds of support**: a habit, a story, a family example, and an argument about money. Nothing is repeated.\n- **Length:** each answer is about 100 words, which fits 45 seconds at a natural pace.",
    },
  ],
  practice: [
    {
      type: "text",
      title: "Your interview: food and eating habits",
      body: "*Interviewer: Thanks for taking part in our research project on food and eating habits. I'm going to ask you four questions.*\n\nAnswer the four questions **in a row**, without stopping between them and without reading the model answers until you have finished all four. Each answer has **no preparation time** and **45 seconds** to speak.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "speak",
        title: "Question 1: your habits",
        instructions: "Start speaking straight away. Give a direct answer, then details and a reason.",
        prompt: "Interviewer: First, can you tell me what kinds of meals you usually make for yourself during the week?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "During the week I keep it pretty simple, because I don't usually get home until about seven. I make things that take less than half an hour, like pasta with vegetables, rice with eggs, or a big salad. On Sundays I try to cook something bigger, like a curry or a soup, and keep a few portions in the fridge for the next couple of days. That saves me a lot of time and money. I'm not a great cook, to be honest, but I've got about five dishes I can make without looking at a recipe.",
        targetPhrases: ["during the week", "like", "on Sundays", "to be honest"],
        checklist: [
          "My first sentence answered the question directly.",
          "I gave specific details (which meals, when, how long they take).",
          "I gave a reason for my habits.",
          "I spoke for most of the 45 seconds.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "speak",
        title: "Question 2: a specific experience",
        instructions: "Tell a short story in past tenses: set the scene, say what happened and why it was memorable.",
        prompt: "Interviewer: Tell me about a meal you remember sharing with other people. What made it memorable?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "The one that comes to mind is a dinner at my friend Mai's family home during the spring holidays. Her parents had cooked about ten different dishes, and we all sat around one low table on cushions. What made it memorable was the way everyone shared everything. Nobody had their own plate of food; you just reached for whatever you wanted and kept talking. Her grandfather told stories about the village where he grew up, and even though I didn't understand everything, I felt completely welcome. I've tried to cook one of those dishes since then, but it never tastes the same.",
        targetPhrases: ["comes to mind", "what made it memorable", "even though", "since then"],
        checklist: [
          "I chose one specific meal and set the scene quickly.",
          "I used past tenses accurately (past simple, past perfect).",
          "I explained clearly what made it memorable.",
          "I didn't repeat details from my first answer.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "Question 3: a wider issue",
        instructions: "Zoom out from your own life to people in general. Give a clear explanation, an example and a short conclusion.",
        prompt: "Interviewer: Many young adults now order takeaway food or use delivery apps instead of cooking. Why do you think this is happening?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "I think the biggest reason is convenience. Delivery apps make it incredibly easy: you press a button, and twenty minutes later dinner's at your door. When people are working long hours or studying late, that's very tempting. Another reason is that a lot of young people never really learned to cook at home, so cooking feels slow and stressful. I see this with some of my classmates. They spend more on delivery in a week than I spend on groceries. The apps also send constant discounts, which makes it even harder to resist. So it's partly lifestyle and partly marketing.",
        targetPhrases: ["the biggest reason", "another reason", "I see this with", "so it's partly"],
        checklist: [
          "I answered “why” directly in my first sentence.",
          "I talked about young people in general, not only about myself.",
          "I gave at least one example from people I know or from society.",
          "I finished with a short conclusion.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "Question 4: a policy question",
        instructions: "Take a clear position, give your main reason, mention the other side and conclude.",
        prompt: "Interviewer: Finally, some people think governments should put a special tax on unhealthy food and drinks, such as sugary soft drinks, to improve public health. Do you agree?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "I agree up to a point. A tax on sugary drinks makes sense to me, because there are healthy alternatives that are just as cheap, like water, so people can easily switch. And if the money from the tax went into sports facilities or health education, I think most people would accept it. But I'd be careful about taxing lots of everyday foods, because that would hit families on low incomes hardest, and they might not be able to afford better options. So overall, I'd support a small tax on a few products, as long as healthy food becomes cheaper at the same time.",
        targetPhrases: ["I agree up to a point", "makes sense", "but I'd be careful", "so overall", "as long as"],
        checklist: [
          "I gave a clear position in my first sentence.",
          "I supported it with a reason that applies to society, not just to me.",
          "I mentioned the other side or a limit.",
          "I ended with a clear conclusion before the time ran out.",
          "Across all four answers, I used a different example each time.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toefl",
      body: "There's no preparation time, so make your first sentence a short, direct answer that echoes the question (*What kinds of meals? Mostly quick ones…*). You can plan the rest of the answer while you are saying it.",
    },
    {
      exam: "toefl",
      body: "Because all four questions are on one topic, it is easy to repeat yourself. Give each answer a different kind of support: a habit, a specific memory, an example from people you know, and a general or social point.",
    },
    {
      exam: "toefl",
      body: "Record yourself and count your words. If your answers regularly stop at 30 seconds, add one more specific detail to your example. If you are always cut off, shorten your opening and get to the point faster.",
    },
  ],
  vocabulary: [
    { word: "door to door", meaning: "from the place where you start directly to your destination", example: "The airport shuttle takes you door to door.", topic: "travel" },
    { word: "backup (plan / route)", meaning: "a second option you can use if the first one fails", example: "I always have a backup route for important journeys.", topic: "everyday" },
    { word: "near miss", meaning: "a situation in which an accident almost happens", example: "I had a near miss with a taxi on my bike this morning.", topic: "travel" },
    { word: "switch (from / to)", meaning: "to change from one thing to another", example: "Many drivers have switched to electric cars.", topic: "everyday" },
    { word: "fare", meaning: "the money you pay to travel on a bus, train or plane", example: "Bus fares went up again this year.", topic: "travel" },
    { word: "on a low income", meaning: "earning very little money", example: "Families on low incomes need more support.", topic: "society" },
    { word: "convenience", meaning: "the quality of being easy, quick and useful", example: "Many people pay extra for convenience.", topic: "everyday" },
    { word: "tempting", meaning: "attractive, and making you want to do or have something", example: "Ordering pizza is very tempting after a long day.", topic: "everyday" },
    { word: "portion", meaning: "an amount of food for one person", example: "I froze four portions of soup.", topic: "health" },
    { word: "public health", meaning: "the health of the population as a whole", example: "Clean water is essential for public health.", topic: "health" },
    { word: "come to mind", meaning: "to be the first thing you think of", example: "When I think of my childhood, the beach comes to mind.", topic: "everyday" },
  ],
  keyPoints: [
    "Take an Interview: four questions on one topic, no preparation time, 45 seconds for each answer.",
    "The questions move from your own experience to opinions on wider issues: zoom out as they do.",
    "Answer directly in your first sentence; echoing the question buys a second or two.",
    "45 seconds is about 100 words: one point, developed with a specific example.",
    "Use a fresh example in every answer and finish with a clear final sentence.",
  ],
};

export default lesson;
