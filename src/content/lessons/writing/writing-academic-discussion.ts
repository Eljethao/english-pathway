import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-academic-discussion",
  title: "Academic discussion posts",
  summary:
    "Write a focused 100+ word post for the TOEFL Academic Discussion task: answer the professor's question, respond to a classmate and add a new idea of your own in about 10 minutes.",
  skill: "writing",
  level: "B2",
  order: 4,
  minutes: 25,
  exams: [{ exam: "toefl", task: "Writing – Academic Discussion" }],
  objectives: [
    "Understand what the TOEFL Academic Discussion task asks you to do and how long you have",
    "Use a simple four-part plan for a post of 100–150 words",
    "Refer to a classmate's idea politely and add a new idea of your own",
    "Write a complete, well-supported post in about 10 minutes",
  ],
  warmUp: [
    "Have you ever posted in an online class forum or discussion group? How was it different from writing an essay?",
    "How can you disagree with someone politely in writing?",
  ],
  learn: [
    {
      type: "text",
      title: "The task",
      body: "In TOEFL Writing – Academic Discussion, you see a short post by a professor on an online class discussion board. The professor asks a question about a topic from the course. Two students have already replied, and they usually have different opinions. Your job is to write your own reply.\n\n- You have about **10 minutes**.\n- ETS recommends **at least 100 words**. Strong posts are often 120–150 words.\n- You do not need special knowledge of the subject. The question is about general issues or everyday experience.\n- Your post should **contribute** to the discussion: give your opinion, support it, and add something the other students did not say.",
    },
    {
      type: "table",
      title: "A four-part plan",
      headers: ["Part", "What to write", "Useful language"],
      rows: [
        ["1. Opinion", "Answer the professor's question clearly in your first sentence", "In my view, … / I'd argue that …"],
        ["2. Link to a classmate", "Agree or disagree with one student, briefly", "I see why Maya thinks …, but … / Like Daniel, I believe …"],
        ["3. New reason + example", "Your own reason, explained with a specific example", "The main reason is that … / For instance, …"],
        ["4. Wrap-up", "One sentence that returns to your opinion", "That is why I believe … / For these reasons, …"],
      ],
    },
    {
      type: "text",
      title: "Add a new idea",
      body: "The most common weakness in this task is repeating what the two students already said. Before you write, read both posts and ask yourself: *What did they not mention?*\n\nNew ideas often come from a different angle:\n\n- **cost** or **time**\n- **fairness**: who wins and who loses?\n- **long-term effects** rather than short-term ones\n- **a different group of people**: children, older people, small businesses, teachers\n- **a personal experience** that shows the issue in real life",
    },
    {
      type: "example",
      title: "Phrases for responding to classmates",
      items: [
        "**I see where** Lena **is coming from**, but I think she overlooks the cost.",
        "**Building on** Omar's point, I'd add that the change would also help teachers.",
        "**While it's true that** online classes are flexible, many students need more structure.",
        "**From my own experience**, group projects work best when everyone has a clear role.",
        "**What neither of my classmates mentioned is** the effect on local businesses.",
      ],
    },
    {
      type: "tip",
      exam: "toefl",
      body: "The style is semi-formal, like a thoughtful classmate rather than a formal essay. Contractions such as *I'd* and *don't* are fine. Do not start with “Dear Professor”, and do not write a separate conclusion paragraph.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "Discussion board: Urban planning",
      paragraphs: [
        "Professor Hall: This week we've been looking at how cities can reduce traffic. Some cities have made public transport completely free to encourage people to leave their cars at home. Do you think free public transport is a good use of city money? Why or why not?",
        "Sofia: I think it's a great idea. If buses and trains were free, more people would use them, and there would be less traffic and pollution. It would also help people on low incomes who struggle to pay for travel.",
        "Kenji: I'm not so sure. Making transport free costs a lot of money, and cities would have to raise taxes or cut other services. I think it would be better to spend the money on improving the service, for example by running buses more often.",
      ],
    },
    {
      type: "passage",
      title: "Model response",
      paragraphs: [
        "Like Kenji, I don't think free public transport is the best use of city money, because the quality of the service matters more than the price. Sofia is right that free travel helps people on low incomes, but cost is rarely the main reason people choose to drive. In my experience, people avoid buses because they are slow and unreliable. In my hometown, for example, a ticket costs very little, yet most commuters still drive, because the bus to the city centre is often stuck in the same traffic as the cars. If the city used the money to create bus-only lanes, journeys would become faster than driving, and people would switch without being paid to do so. Cheaper fares for students and low-income residents could still protect those who really need help. That way, the city would reduce traffic without spending a fortune.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **Opinion and link in one sentence.** The first sentence answers the professor's question and names a classmate (*Like Kenji, I don't think…*).\n- **Fair to the other student.** *Sofia is right that…, but…* shows the writer has read both posts.\n- **A new idea.** Neither student talked about speed or reliability. The writer adds this angle and a new solution: bus-only lanes.\n- **A specific example.** The hometown example makes the argument real.\n- **A compromise.** Cheaper fares for some groups answers Sofia's concern about people on low incomes.\n- **A one-sentence wrap-up.** *That way…* returns to the main point.\n\nLength: about 140 words, which is realistic in 10 minutes.",
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Discussion board: Assessing students",
      paragraphs: [
        "Professor Okafor: In our unit on learning, we've discussed different ways of assessing students. Some educators argue that schools should replace traditional exams with projects and coursework, which students complete over several weeks. Which approach do you think gives a better picture of what students have learned, and why?",
        "Amira: I prefer projects. Exams only test what you can remember on one day, and many good students do badly because they get nervous. A project shows what you can actually do with your knowledge.",
        "Lucas: I think exams are fairer. With projects, it's hard to know whether students did the work themselves, especially now that people can get help online or from their parents. In an exam, everyone has the same conditions.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Planning a strong post",
        instructions: "Use the discussion board “Assessing students” above.",
        questions: [
          {
            prompt: "Which idea would add something NEW to the discussion, rather than repeat Amira or Lucas?",
            options: [
              "Exams make some students nervous, so they do not show their real ability.",
              "In an exam, all students work under the same conditions.",
              "Projects teach skills such as time management and research, which students need at university and at work.",
              "Projects show what students can do with their knowledge.",
            ],
            answer: 2,
            explanation: "The first and last options repeat Amira, and the second repeats Lucas. Neither student mentioned time management or research skills.",
          },
          {
            prompt: "Which opening sentence is best for this task?",
            options: [
              "Dear Professor Okafor, thank you for this interesting question.",
              "Exams and projects are two ways to assess students, and both have advantages and disadvantages.",
              "Although Lucas makes a fair point about cheating, I believe a mix of projects and short exams gives the most accurate picture.",
              "In this essay, I am going to discuss exams and projects.",
            ],
            answer: 2,
            explanation: "It gives a clear opinion and refers to a classmate. The others are too formal, give no opinion, or sound like an essay.",
          },
          {
            prompt: "Which sentence disagrees with a classmate politely?",
            options: [
              "Lucas is wrong because he does not understand projects.",
              "I see where Lucas is coming from, but teachers can check students' work by asking them to explain it in class.",
              "Amira's idea is bad.",
              "Everyone knows that exams are better.",
            ],
            answer: 1,
            explanation: "It accepts that Lucas has a reason, then gives a counter-argument. The other options are rude or unsupported.",
          },
          {
            prompt: "Which is the most effective supporting example?",
            options: [
              "Many people think projects are good.",
              "Projects are useful in a lot of ways for a lot of students.",
              "Last year my history class did a four-week project on our town's past, and I still remember far more of it than anything I memorised for exams.",
              "Some experts have said things about exams.",
            ],
            answer: 2,
            explanation: "It is specific (a history project, four weeks, our town) and clearly supports the idea that projects lead to deeper learning.",
          },
          {
            prompt: "How long should your post be?",
            options: [
              "About 50 words",
              "At least 100 words",
              "Exactly 300 words",
              "As long as possible, even if it has many mistakes",
            ],
            answer: 1,
            explanation: "ETS recommends at least 100 words. About 120–150 well-developed words is a realistic target in 10 minutes and leaves time to check.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Discussion phrases",
        instructions: "Complete each sentence with a word or phrase from the box. Two items are not used.",
        text: "1. {{0}} Lucas's point about fairness, I'd add that exams also save teachers a lot of marking time.\n2. I see where Amira is {{1}} from, but nervous students can learn to manage stress.\n3. {{2}} it's true that projects take longer to mark, they show deeper understanding.\n4. What {{3}} of my classmates mentioned is the cost of each approach.\n5. From my own {{4}}, group projects can be unfair when one person does all the work.",
        answers: [["Building on"], ["coming"], ["While", "Although", "Though", "Even though"], ["neither"], ["experience"]],
        wordBank: ["Building on", "coming", "While", "neither", "experience", "Despite", "either"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "order",
        mode: "lines",
        title: "Put the post in order",
        instructions: "Put these sentences in a logical order to make a response to Professor Okafor's question.",
        items: [
          "In my view, projects give a better picture of learning, although Lucas raises a fair concern about cheating.",
          "However, teachers can reduce this problem by asking students to present their work and answer questions about it.",
          "What neither of my classmates mentioned is that projects also build skills that exams cannot measure, such as planning and research.",
          "For example, when I wrote a report on local water quality, I had to organise interviews, manage my time and check my sources carefully.",
          "That is why I think projects prepare students much better for university and work than a single exam.",
        ],
      },
    },
    {
      type: "passage",
      title: "Discussion board: Business studies",
      paragraphs: [
        "Dr Reyes: Several companies have recently tested a four-day working week, in which employees work fewer hours for the same salary. Supporters say it makes staff happier and more productive. Critics worry that it may not work for every type of business. Should more companies adopt a four-day week? Why or why not?",
        "Hannah: Yes, definitely. People who have a three-day weekend come back to work rested and focused. I read that in some trials, companies produced the same amount of work even though staff worked fewer hours.",
        "Marcus: I don't think it suits every business. Hospitals, shops and restaurants need staff every day, so they would have to hire more people, which would be very expensive.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "write",
        title: "Your turn: Academic Discussion",
        instructions: "Set a timer for 10 minutes: about 2 minutes to read and plan, 7 minutes to write and 1 minute to check.",
        prompt:
          "Read Dr Reyes's question and the posts by Hannah and Marcus in “Discussion board: Business studies” above. Write a post that responds to the professor's question. Express and support your opinion and make a contribution to the discussion. An effective response will contain at least 100 words.",
        minWords: 100,
        minutes: 10,
        rubric: [
          "Task: My post answers the professor's question directly, and my opinion is clear from the first sentence.",
          "Contribution: I added at least one reason, angle or example that Hannah and Marcus did not mention.",
          "Development: My main reason is explained and supported with a specific example or detail.",
          "Coherence: I referred to at least one classmate by name, and my sentences are connected with clear linking phrases.",
          "Language: I used a variety of sentence structures and precise vocabulary rather than very general words like good, bad and thing.",
          "Accuracy: My post has few grammar or spelling errors, and none of them make my meaning unclear.",
          "Length and time: I wrote at least 100 words in about 10 minutes.",
        ],
        modelAnswer:
          "Marcus makes an important point, but I still think more companies should adopt a four-day week, as long as they introduce it flexibly. Businesses that need staff every day could use rotating schedules, so that each employee works four days while the shop or clinic stays open all week. This might mean hiring a few extra people, but the cost could be balanced by a benefit that neither classmate mentioned: it becomes much easier to attract and keep good staff. Many young workers now value free time as much as salary. My cousin, for example, turned down a better-paid job because a smaller firm offered a four-day week. Keeping experienced employees also saves companies the cost of recruiting and training replacements. That is why I believe more companies should at least try this model and adapt it to the needs of their industry.",
      },
    },
  ],
  examTips: [
    {
      exam: "toefl",
      body: "Manage your 10 minutes: about 2 minutes to read and plan, 7 to write and 1 to check. A plan can be just three quick notes: my opinion, my new idea, my example.",
    },
    {
      exam: "toefl",
      body: "Quality matters more than length. 120–150 well-developed words are better than 250 words that repeat the same idea. Never copy whole sentences from the students' posts.",
    },
    {
      exam: "toefl",
      body: "If you agree with one student, do not just write “I agree with Hannah.” Explain *why*, and then add a reason or example that she did not give.",
    },
  ],
  vocabulary: [
    { word: "contribute", meaning: "to add your own ideas to a discussion", example: "Try to contribute something new to the discussion.", topic: "academic" },
    { word: "perspective", meaning: "a particular way of thinking about something", example: "Her post looked at the issue from a teacher's perspective.", topic: "academic" },
    { word: "overlook", meaning: "to fail to notice or consider something", example: "I think Lucas overlooks the cost of the change.", topic: "academic" },
    { word: "build on (a point)", meaning: "to use someone's idea as a starting point and develop it further", example: "Building on Amira's point, projects also teach research skills.", topic: "academic" },
    { word: "unreliable", meaning: "not able to be trusted to work or arrive as expected", example: "Commuters stopped using the bus because it was so unreliable.", topic: "travel" },
    { word: "fare", meaning: "the money you pay to travel on a bus, train or plane", example: "Students pay a reduced fare on city buses.", topic: "travel" },
    { word: "assess", meaning: "to judge someone's ability or the quality of something", example: "Teachers assess students through projects and exams.", topic: "education" },
    { word: "adopt", meaning: "to start using a new method, idea or plan", example: "Several firms have adopted a four-day week.", topic: "business" },
    { word: "productive", meaning: "producing a lot of good work", example: "Rested employees tend to be more productive.", topic: "work" },
    { word: "compromise", meaning: "a solution in which each side accepts part of what the other wants", example: "A mix of exams and projects is a sensible compromise.", topic: "society" },
  ],
  keyPoints: [
    "TOEFL Academic Discussion: read a professor's question and two student posts, then write 100+ words in about 10 minutes.",
    "Give your opinion in the first sentence and refer to at least one classmate by name.",
    "Add something new: a reason, angle or example that the students did not mention.",
    "Support your main idea with a specific example, then finish with one sentence that returns to your opinion.",
    "Use a semi-formal style: polite, clear and natural, not a formal letter or essay.",
  ],
};

export default lesson;
