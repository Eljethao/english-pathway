import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-complaint-request-letters",
  title: "Complaint and request letters",
  summary:
    "Write clear, polite letters that complain about a problem or ask for something: give the facts, say exactly what you want, and cover every point in the task.",
  skill: "writing",
  level: "B1",
  order: 5,
  minutes: 35,
  exams: [
    { exam: "ielts", task: "Writing Task 1 (General Training)" },
    { exam: "toeic", task: "Writing – Respond to a written request" },
    { exam: "toefl", task: "Writing – Write an Email" },
  ],
  objectives: [
    "Plan a complaint or request letter in four clear paragraphs",
    "Describe a problem with facts: what happened, when and where",
    "Say exactly what you want the reader to do, in a polite but firm way",
    "Find every request in an email or task and answer all of them",
  ],
  warmUp: [
    "Have you ever had a problem with something you bought or a service you paid for? What did you do?",
    "Is it better to complain by phone, by email or in person? Why?",
  ],
  learn: [
    {
      type: "text",
      title: "Complaint or request?",
      body: "Many exam letters and work emails have one of two purposes:\n\n- A **complaint** tells the reader about a problem and asks them to fix it.\n- A **request** asks the reader for information, help or permission.\n\nIn both cases, the reader must understand two things very quickly: **why you are writing** and **what you want them to do**. If your letter does not say what you want, the reader cannot help you.",
    },
    {
      type: "table",
      title: "A four-paragraph plan",
      headers: ["Paragraph", "Complaint letter", "Request letter"],
      rows: [
        [
          "1. Reason for writing",
          "I am writing to complain about the laptop I bought from your website.",
          "I am writing to ask whether I could change the date of my course.",
        ],
        [
          "2. Details",
          "Give the facts: what you bought or used, when, where, the order number. Then describe the problem.",
          "Give the background: who you are and why you need this.",
        ],
        [
          "3. Action",
          "Say how the problem has affected you and what you want: a refund, a repair, a replacement or an explanation.",
          "Make your request clearly and ask any questions you have.",
        ],
        [
          "4. Closing",
          "I hope you can solve this problem quickly. / I look forward to your reply.",
          "Thank you in advance for your help. / I look forward to hearing from you.",
        ],
      ],
    },
    {
      type: "text",
      title: "Polite but firm",
      body: "A good complaint is **polite but firm**. *Polite* means no rude words, no CAPITAL LETTERS for shouting and no insults. *Firm* means you state the facts clearly and say exactly what you want.\n\n- Use facts, not angry feelings: *The heater stopped working after two days.* (not *Your heater is rubbish!*)\n- Use softening words: *Unfortunately, …* / *I was disappointed to find that…* / *I am afraid that…*\n- Be specific about the action: *I would like a full refund of £85.* (not *Do something!*)\n- Give a time if it matters: *Could you please reply by the end of next week?*",
    },
    {
      type: "table",
      title: "Asking for action",
      headers: ["You want…", "Useful phrase"],
      rows: [
        ["your money back", "I would like a full refund."],
        ["a new product", "I would like you to replace it with a new one."],
        ["someone to fix it", "Could you please arrange for someone to repair it?"],
        ["information", "Could you let me know whether…? / I would be grateful if you could tell me…"],
        ["permission", "Would it be possible for me to…?"],
        ["a quick answer", "I would appreciate a reply by Friday."],
      ],
    },
    {
      type: "example",
      title: "Too rude, too weak, just right",
      items: [
        "Too rude: Your delivery service is useless. Send my sofa NOW.",
        "Too weak: Maybe, if it's not too much trouble, you could perhaps look at my order some time?",
        "Just right: My sofa was due on 3 May, but it has not arrived. **Could you please tell me** when it will be delivered?",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "In **General Training Task 1**, the task usually gives you three bullet points. Give each bullet point its own paragraph (or a clear part of one), so the examiner can see that you have covered them all. A missing bullet point lowers your **Task Achievement** score.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: polite but firm",
        questions: [
          {
            prompt: "Which is the best first sentence for a complaint letter to a hotel?",
            options: [
              "I hope you are well and the weather is nice.",
              "I am writing to complain about the room I stayed in from 4 to 6 June.",
              "Hotels are very important for tourists.",
              "My name is Ana, and I like travelling.",
            ],
            answer: 1,
            explanation: "It gives the reason for writing (to complain) and the key facts (the room and the dates) in one sentence.",
          },
          {
            prompt: "Which sentence is polite but firm?",
            options: [
              "You are the worst shop in the city.",
              "I would like a full refund for the broken printer.",
              "Perhaps you could maybe think about helping me.",
              "SEND ME A NEW PRINTER IMMEDIATELY.",
            ],
            answer: 1,
            explanation: "It is polite (no insults or shouting) and firm (it says exactly what the writer wants).",
          },
          {
            prompt: "Which sentence asks for a clear action?",
            options: [
              "I was very unhappy.",
              "The bus was late again.",
              "Could you please send me a replacement by Friday?",
              "I have used your company for many years.",
            ],
            answer: 2,
            explanation: "It tells the reader exactly what to do (send a replacement) and when (by Friday). The other sentences give feelings or facts, but no action.",
          },
          {
            prompt: "Which closing line suits a formal request letter?",
            options: [
              "Thank you in advance for your help.",
              "Hope to catch up soon!",
              "Take care and lots of love,",
              "Speak soon!",
            ],
            answer: 0,
            explanation: "The other three are informal phrases for friends and family.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*You recently bought a coffee machine from an online shop, but there is a problem with it.*\n\n*Write a letter to the shop. In your letter:*\n\n- *describe what you bought and when*\n- *explain what the problem is*\n- *say what you would like the shop to do*\n\n*Write at least 150 words. You do not need to write any addresses. Begin your letter: Dear Sir or Madam,*",
    },
    {
      type: "passage",
      title: "Model letter",
      paragraphs: [
        "Dear Sir or Madam,",
        "I am writing to complain about a coffee machine that I ordered from your website on 12 March. The order number is CM4471, and the machine cost £120.",
        "The machine arrived on 15 March, and at first it worked well. Unfortunately, after only one week it started to leak water. Every time I make a coffee, there is a small pool of water on the kitchen counter. I have followed all the instructions in the manual and cleaned the machine carefully, but the problem has not stopped.",
        "As you can imagine, this is very disappointing, because the machine is almost new. I would like you to replace it with a new one. If this is not possible, I would like a full refund. I still have the original box and the receipt. Could you please also tell me how to send the faulty machine back to you?",
        "I look forward to your reply.",
        "Yours faithfully,",
        "Daniel Moreno",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **Paragraph 1** covers bullet point 1. It gives the reason for writing and the key facts: the date, the order number and the price. The shop can find the order quickly.\n- **Paragraph 2** covers bullet point 2. It describes the problem with facts (*after only one week*, *a small pool of water*) and shows that the writer has tried to solve it.\n- **Paragraph 3** covers bullet point 3. The writer describes his feelings calmly (*this is very disappointing*) and then asks for clear actions: a replacement, or a refund if that is not possible, and information about returning the machine.\n- **Closing**: *Dear Sir or Madam* → *Yours faithfully*, because the writer does not know the reader's name.\n\nThe tone is polite but firm. There are no rude words, but the reader knows exactly what to do.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "What is each sentence doing?",
        instructions:
          "These sentences come from different complaint and request letters. Match each sentence with its job. There is one extra option.",
        left: [
          "I am writing to ask about the evening classes at your college.",
          "The lamp I bought from your shop on 2 October has stopped working.",
          "Because of the noise, I have not been able to sleep properly for a week.",
          "Could you please send someone to repair it as soon as possible?",
          "Thank you in advance for your help.",
        ],
        right: [
          "closing politely",
          "asking for action",
          "giving the reason for writing",
          "describing the problem",
          "explaining the effect on you",
          "giving your opinion of the company",
        ],
        answer: [2, 3, 4, 1, 0],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Complete the complaint",
        instructions: "Complete the letter with words from the box. There are two extra words.",
        text: "Dear Mr Harris,\n\nI am writing to {{0}} about the repairs to my flat at 14 Park Road. On 5 May, I told your office that the kitchen window was broken. {{1}}, nobody has come to repair it yet, and the room is now very cold at night.\n\nI was {{2}} to hear that your workers are busy until next month. I am {{3}} that I cannot wait that long, because my young children use the kitchen every day.\n\nCould you please {{4}} for someone to repair the window this week? I would also {{5}} it if you could call me on 07700 900123 to confirm the day.\n\nI look forward to your {{6}}.\n\nYours sincerely,\nLaura Kent",
        answers: [
          ["complain"],
          ["Unfortunately"],
          ["disappointed"],
          ["afraid"],
          ["arrange"],
          ["appreciate"],
          ["reply", "response"],
        ],
        wordBank: ["complain", "Unfortunately", "disappointed", "afraid", "arrange", "appreciate", "reply", "useless", "demand"],
      },
    },
    {
      type: "passage",
      title: "Email from a customer",
      paragraphs: [
        "Subject: Desk order 58213",
        "Hello,",
        "Last week I ordered a white office desk (order 58213) from your website. Yesterday I received an email saying that it will arrive two weeks late. I am moving into a new flat on 1 June, and I need the desk by then.",
        "Could you tell me if there is a faster delivery option? Also, do you have the same desk in another colour that you can send now?",
        "Thank you,",
        "Mei Chen",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Respond to a written request",
        instructions:
          "You work in customer service at the furniture company. Read Mei's email and plan your reply. Choose the best answer to each question.",
        questions: [
          {
            prompt: "What does Mei ask for? Choose TWO.",
            options: [
              "a faster delivery option",
              "a refund",
              "the same desk in another colour",
              "a cheaper desk",
              "help to build the desk",
            ],
            answer: [0, 2],
            explanation: "Mei asks two questions: *Could you tell me if there is a faster delivery option?* and *do you have the same desk in another colour…?*",
          },
          {
            prompt: "Which is the best opening for your reply?",
            options: [
              "Dear Ms Chen, Thank you for your email about your desk order (58213).",
              "Hi Mei! What's up?",
              "Dear Ms Chen, Our company started selling furniture in 1998.",
              "Dear Ms Chen, We are not responsible for delivery problems.",
            ],
            answer: 0,
            explanation: "It is polite and professional, and it shows which order you are writing about. The second is too informal, the third is not relevant, and the fourth is rude.",
          },
          {
            prompt: "Which sentence answers Mei's first question?",
            options: [
              "We sell many kinds of desks and chairs.",
              "We can offer express delivery for £15, so the desk would arrive on 28 May.",
              "I hope you enjoy your new flat.",
              "Our white desk is very popular.",
            ],
            answer: 1,
            explanation: "It gives a faster option, the price and a date before 1 June, when Mei needs the desk.",
          },
          {
            prompt: "Which is the best final sentence before your sign-off?",
            options: [
              "Please let me know which option you prefer, and I will update your order straight away.",
              "Thanks a lot, mate. Cheers!",
              "We hope you will not complain again.",
              "Your order number is 58213.",
            ],
            answer: 0,
            explanation: "It ends with a clear next step for the customer, in a polite and professional tone.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: a General Training letter",
        prompt:
          "You are a member of a sports centre. For the last three weeks, the swimming pool has been closed, and the centre has not explained why.\n\nWrite a letter to the manager of the sports centre. In your letter:\n\n- tell the manager how long you have been a member and how you use the centre\n- describe the problem and how it has affected you\n- say what you would like the centre to do\n\nWrite at least 150 words. You do not need to write any addresses.\n\nBegin your letter: *Dear Mr Lewis,*",
        minWords: 150,
        minutes: 20,
        rubric: [
          "Task achievement: I covered all three bullet points, and my purpose (to complain) is clear in the first paragraph.",
          "Task achievement: I said exactly what I want the centre to do (for example, an explanation, a reopening date or a partial refund).",
          "Tone: my letter is polite but firm, with no rude words, and I ended with ‘Yours sincerely’ because I know the manager's name.",
          "Coherence and cohesion: I used clear paragraphs (reason, details, action, closing) and linking words such as because, however and as a result.",
          "Lexical resource: I used useful words such as membership, refund, explanation and inconvenience, and my spelling is correct.",
          "Grammatical range and accuracy: I used the present perfect correctly (I have been a member for…, the pool has been closed since…) and my sentences are complete.",
        ],
        modelAnswer:
          "Dear Mr Lewis,\n\nI am writing to complain about the swimming pool at the Riverside Sports Centre, which has been closed for the last three weeks.\n\nI have been a member of the centre for four years. I pay £45 a month, and I usually swim three mornings a week before work. Swimming is the main reason I joined, because I have a back problem and my doctor advised me to swim regularly.\n\nUnfortunately, the pool has been closed since 2 March, and there is no notice to explain why or when it will open again. The staff at reception could not give me any information. As a result, I have had to pay to use another pool in town, which is expensive and a long way from my home.\n\nI would like you to tell members why the pool is closed and when it will reopen. I would also like a partial refund for the weeks when I could not use it.\n\nI look forward to your reply.\n\nYours sincerely,\nHannah Price",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In **General Training Task 1**, write at least 150 words in about 20 minutes. The task tells you who you are writing to, so use it to choose your tone: a letter to a manager or a company is formal or semi-formal. Plan one paragraph for each bullet point before you start, and always say clearly what you want the reader to do.",
    },
    {
      exam: "toeic",
      body: "In **Respond to a written request** you have 10 minutes to reply to an email. The directions tell you who you are and what your reply must include, for example two pieces of information and one question. Make a quick list of these points and check that you have covered each one before you finish.",
    },
    {
      exam: "toefl",
      body: "**Write an Email** tasks can ask you to make a request or propose a solution to a problem. You only have 7 minutes, so use a short version of this plan: one or two sentences about the problem, then a polite, specific request or suggestion, then a closing line.",
    },
  ],
  vocabulary: [
    { word: "complaint", meaning: "a statement that you are not happy with something", example: "I sent a complaint to the airline about my lost bag.", topic: "business" },
    { word: "refund", meaning: "money that is paid back to you", example: "The shop gave me a full refund for the broken headphones.", topic: "business" },
    { word: "replacement", meaning: "a new thing that takes the place of a broken or wrong one", example: "They sent me a replacement the next day.", topic: "business" },
    { word: "faulty", meaning: "not working correctly", example: "The charger was faulty, so I took it back to the shop.", topic: "everyday" },
    { word: "inconvenience", meaning: "a problem that causes you extra trouble or difficulty", example: "We are sorry for any inconvenience caused by the delay.", topic: "business" },
    { word: "disappointed", meaning: "unhappy because something was not as good as you hoped", example: "I was disappointed with the service at the hotel.", topic: "everyday" },
    { word: "arrange", meaning: "to plan or organise something", example: "Could you arrange for an engineer to visit on Monday?", topic: "work" },
    { word: "solve", meaning: "to find a way to end a problem", example: "I hope we can solve this problem quickly.", topic: "business" },
    { word: "membership", meaning: "being a member of a club or group", example: "My gym membership costs £30 a month.", topic: "everyday" },
    { word: "order number", meaning: "the number a shop gives to something you have ordered", example: "Please include your order number in your email.", topic: "business" },
    { word: "delivery", meaning: "the act of bringing goods to someone's home or office", example: "The delivery was two days late.", topic: "business" },
  ],
  keyPoints: [
    "Say why you are writing in the first sentence: I am writing to complain about… / to ask whether…",
    "Describe the problem with facts (dates, order numbers, what happened), not with angry words.",
    "Say exactly what you want: a refund, a replacement, a repair, information or permission.",
    "Be polite but firm: Unfortunately… / I would like… / Could you please…?",
    "In exam tasks, cover every bullet point or every request in the email.",
  ],
};

export default lesson;
