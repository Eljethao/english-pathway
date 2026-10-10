import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-verb-tenses-accuracy",
  title: "Verb tenses in your writing",
  summary:
    "Choose the right tense when you write about the past, your experiences and the future, and learn to find and correct the tense mistakes that readers and examiners notice most.",
  skill: "writing",
  level: "B1",
  order: 7,
  minutes: 30,
  exams: [
    { exam: "ielts", task: "Writing Task 1 (General Training)" },
    { exam: "toefl", task: "Writing – Write an Email" },
    { exam: "toeic", task: "Writing – Respond to a written request" },
  ],
  objectives: [
    "Use the past simple and the past continuous together to tell a story",
    "Choose between the past simple and the present perfect",
    "Use will, be going to and the present continuous to talk about the future",
    "Find and correct common tense mistakes in your own writing",
  ],
  warmUp: [
    "Finish these two sentences about yourself: “Last year, I…” and “Since last year, I…”. How are the verbs different?",
    "What are you doing this weekend? Write one sentence. Which tense did you use?",
  ],
  learn: [
    {
      type: "text",
      title: "Why tenses matter in writing",
      body: "When you speak, people can ask you what you mean. When you write, they cannot. The tense tells the reader **when** something happened and **whether it is finished**.\n\nTense mistakes are some of the most common errors in B1 writing. In IELTS they affect your **Grammatical Range and Accuracy** score, and in work emails they can confuse the reader: *Did you send the file, or will you send it?*",
    },
    {
      type: "table",
      title: "Three past tenses",
      headers: ["Tense", "Use it for", "Example"],
      rows: [
        [
          "Past simple",
          "finished actions at a finished time (yesterday, last week, in 2022, two days ago)",
          "I ordered the shoes two weeks ago.",
        ],
        ["Past continuous", "an action in progress at a time in the past; the background to a story", "I was walking home when it started to rain."],
        [
          "Present perfect",
          "past actions with no finished time (ever, never, already, yet, just) and situations that started in the past and continue now (for, since)",
          "I have lived here since 2019. / The parcel has not arrived yet.",
        ],
      ],
    },
    {
      type: "text",
      title: "Past simple or present perfect?",
      body: "Ask yourself: **Does the sentence have a finished time?**\n\n- Yes (*yesterday, last month, in May, when I was a child*) → **past simple**: *I **called** your office yesterday.*\n- No time, a time that is not finished (*today, this week*), or *for / since* up to now → **present perfect**: *I **have called** your office three times this week.*\n\nDo not use the present perfect with a finished time: *I have called yesterday* is wrong.",
    },
    {
      type: "text",
      title: "Telling a story: past simple + past continuous",
      body: "Use the **past continuous** for the longer background action and the **past simple** for the short action that interrupts it.\n\n- *While I **was cooking**, the lights **went** out.*\n- *I **was waiting** for the bus when I **saw** an old friend.*\n\n*While* usually goes with the longer action (past continuous). *When* often goes with the short action (past simple).",
    },
    {
      type: "table",
      title: "Talking about the future",
      headers: ["Form", "Use it for", "Example"],
      rows: [
        ["will", "decisions you make now, offers and promises", "I'll call you back in five minutes. / I will send you the report tomorrow."],
        ["be going to", "plans and intentions you already have", "I'm going to look for a new job next year."],
        ["present continuous", "arrangements with a fixed time or place", "I'm meeting the manager at 3 p.m. on Friday."],
      ],
    },
    {
      type: "example",
      title: "Common tense mistakes",
      items: [
        "Wrong: I am living here since 2020. → Right: I **have lived** here since 2020.",
        "Wrong: I have seen the film last night. → Right: I **saw** the film last night.",
        "Wrong: When you called, I cook dinner. → Right: When you called, I **was cooking** dinner.",
        "Wrong: He didn't went to work. → Right: He **didn't go** to work.",
        "Wrong: I will going to visit my aunt. → Right: I **am going to** visit my aunt.",
        "Wrong: I buyed a new phone. → Right: I **bought** a new phone.",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "A General Training letter often moves between times: background (*I **have been** a customer for five years*), a past event (*Last week I **ordered**…*) and the future (*I **am moving** house next month*). After writing, check each verb and ask: *Is this finished, still true now, or in the future?*",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: which tense?",
        questions: [
          {
            prompt: "We ___ to Spain in 2023.",
            options: ["have gone", "went", "go", "have been going"],
            answer: 1,
            explanation: "*In 2023* is a finished time, so we use the past simple.",
          },
          {
            prompt: "I ___ my keys. I can't open the door.",
            options: ["lose", "have lost", "was losing", "am losing"],
            answer: 1,
            explanation: "There is no finished time, and the result is important now (I can't open the door), so we use the present perfect.",
          },
          {
            prompt: "I ___ TV when the phone rang.",
            options: ["watched", "was watching", "have watched", "am watching"],
            answer: 1,
            explanation: "Watching TV is the longer background action, so it is in the past continuous. The phone call interrupted it.",
          },
          {
            prompt: "I've decided what to do. I ___ for the job at the bank next week.",
            options: ["am going to apply", "applied", "have applied", "was applying"],
            answer: 0,
            explanation: "It is a plan for the future that the speaker has already decided, so we use *be going to*.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*Write an email to a friend. Tell them about a problem you had on a recent journey, what has happened since then, and your plans for your next trip.*",
    },
    {
      type: "text",
      title: "Model email (verbs in bold)",
      body: "Hi Sam,\n\nSorry I **haven't replied** to your message yet. I**'ve had** a very busy week!\n\nLast Friday I **flew** back from Lisbon, and it **was** a disaster. While I **was waiting** at the airport, the airline **announced** that my flight was delayed by five hours. Then, when we finally **landed**, my suitcase **didn't arrive**. I**'ve called** the airline three times since then, and they **have** already **found** the bag, but they **haven't delivered** it yet.\n\nAnyway, I**'m going to** be more careful next time. I**'m flying** to Berlin on 12 June, and this time I**'m** only **taking** hand luggage! I think I**'ll** also **buy** travel insurance before I go.\n\nTalk soon,\nNina",
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **Present perfect** for recent news with no finished time: *I haven't replied*, *I've had a very busy week*, *I've called… three times since then*, *they have already found the bag*.\n- **Past simple** for the finished story (*Last Friday*): *flew, was, announced, landed, didn't arrive*.\n- **Past continuous** for the background: *While I was waiting at the airport…* The short action (*the airline announced*) is in the past simple.\n- **Future**: *I'm going to be more careful* (a plan), *I'm flying to Berlin on 12 June* (an arrangement with a date), *I'll also buy travel insurance* (a decision Nina makes while she writes).\n\nEvery verb matches its time, so the reader can follow the story easily.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Complete the letter",
        instructions:
          "Complete the letter with the correct form of the verbs in brackets. Use the past simple, the past continuous or the present perfect.",
        text: "Dear Ms Ford,\n\nI {{0}} (be) a customer of Green Line Bikes for six years, and until now I {{1}} (never / have) a problem with your products.\n\nOn 3 April, I {{2}} (buy) a new electric bike from your shop in Mill Street. Two weeks later, I {{3}} (ride) to work when the battery suddenly {{4}} (stop) working, and I {{5}} (have to) push the bike for three kilometres.\n\nSince then, I {{6}} (take) the bike back to the shop twice, but the shop {{7}} (not / repair) it yet. Could you please arrange a replacement battery?\n\nYours sincerely,\nAlex Grant",
        answers: [
          ["have been", "'ve been"],
          ["have never had", "'ve never had"],
          ["bought"],
          ["was riding"],
          ["stopped"],
          ["had to"],
          ["have taken", "'ve taken"],
          ["has not repaired", "hasn't repaired"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Correct the mistake",
        instructions: "Each sentence has one wrong verb form (in bold). Write the correct form in the gap.",
        text: "1. I **have visited** Rome last summer. → I {{0}} Rome last summer.\n2. She **works** here since 2021. → She {{1}} here since 2021.\n3. We **were play** tennis when it started to rain. → We {{2}} tennis when it started to rain.\n4. Did you **finished** the report? → Did you {{3}} the report?\n5. I **didn't knew** the answer. → I {{4}} the answer.\n6. I **have went** to that restaurant many times. → I {{5}} to that restaurant many times.\n7. I **going to** start a new course in September. → I {{6}} start a new course in September.\n8. Wait, I **help** you with those heavy bags! → Wait, I {{7}} you with those heavy bags!",
        answers: [
          ["visited"],
          ["has worked", "has been working", "'s worked", "'s been working"],
          ["were playing"],
          ["finish"],
          ["didn't know", "did not know"],
          ["have been", "'ve been", "have gone", "'ve gone", "went"],
          ["am going to", "'m going to", "will", "'ll"],
          ["will help", "'ll help", "can help"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Choose the best tense",
        questions: [
          {
            prompt: "I ___ for this company since I left university.",
            options: ["work", "am working", "have worked", "worked"],
            answer: 2,
            explanation: "*Since* + a starting point, and the situation continues now, so we use the present perfect.",
          },
          {
            prompt: "A: The printer isn't working again. B: Don't worry, I ___ the IT team now.",
            options: ["call", "'ll call", "am going to calling", "called"],
            answer: 1,
            explanation: "B decides at the moment of speaking and offers to help, so we use *will*.",
          },
          {
            prompt: "We ___ a new office in Leeds next spring. The building work has already started.",
            options: ["are going to open", "opened", "have opened", "were opening"],
            answer: 0,
            explanation: "It is a plan for the future with evidence now (the building work has started), so *be going to* is correct. The other options are past forms.",
          },
          {
            prompt: "Which sentence is correct?",
            options: [
              "I have finished the report yesterday.",
              "I finished the report yesterday.",
              "I am finishing the report yesterday.",
              "I have finish the report yesterday.",
            ],
            answer: 1,
            explanation: "*Yesterday* is a finished time, so we use the past simple, not the present perfect.",
          },
          {
            prompt: "Which version keeps the tenses consistent?",
            options: [
              "Yesterday I go to the bank, and the cashier was very helpful.",
              "Yesterday I went to the bank, and the cashier was very helpful.",
              "Yesterday I went to the bank, and the cashier has been very helpful.",
              "Yesterday I have gone to the bank, and the cashier was very helpful.",
            ],
            answer: 1,
            explanation: "Both actions happened at a finished time (*yesterday*), so both verbs are in the past simple.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: news for your teacher",
        prompt:
          "You studied English at a language school last year. Write an email to your former teacher, Ms Taylor.\n\nIn your email:\n\n- tell her what you have done since you finished the course\n- describe one interesting or difficult experience you had in the last year\n- explain your plans for the next few months\n\nWrite at least 120 words.",
        minWords: 120,
        minutes: 15,
        rubric: [
          "Task: I covered all three points: what I have done, one past experience and my plans.",
          "Grammatical accuracy: I used the present perfect for my news, with for / since / already / yet and no finished time.",
          "Grammatical accuracy: I used the past simple for the story (with the past continuous for the background where it was useful).",
          "Grammatical range: I used at least two different future forms (will, be going to, the present continuous).",
          "Accuracy: my irregular verbs are correct (went, bought, taken), and I used did / didn't + the base form.",
          "Organisation and tone: my email is polite and semi-formal, with one paragraph for each point.",
        ],
        modelAnswer:
          "Dear Ms Taylor,\n\nI hope you are well. It has been almost a year since I finished your course, so I wanted to tell you my news.\n\nSince the course ended, I have found a job as a receptionist at a hotel in the city centre. I have used my English every day, and I have become much more confident on the phone.\n\nThe most difficult moment came in my second week. I was working alone at the front desk when a large group of tourists arrived without a booking. They were tired and upset, but I stayed calm and found rooms for all of them in another hotel nearby. My manager was very pleased with me.\n\nNext month, I am starting an online business course, and in the summer I am going to take the IELTS test. I will let you know my result!\n\nBest wishes,\nCarla",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In **General Training Task 1**, many letters describe a past problem (past simple), its result now (present perfect) and what you want to happen next (future forms or polite requests). Accurate tenses are part of your **Grammatical Range and Accuracy** score, so keep two minutes at the end to check every verb.",
    },
    {
      exam: "toefl",
      body: "In **Write an Email** you only have 7 minutes. Use your last 30 seconds to check the verbs: past simple after finished times (*yesterday*, *last week*) and present perfect with *already*, *yet*, *for* and *since*.",
    },
    {
      exam: "toeic",
      body: "In **Respond to a written request**, you often need to give an update (*I **have checked** the schedule*) or describe future arrangements (*The technician **is coming** on Thursday*). Correct, consistent tenses make your reply clear and professional.",
    },
  ],
  vocabulary: [
    { word: "tense", meaning: "the form of a verb that shows when something happens", example: "The past simple is the most common tense in stories.", topic: "academic" },
    { word: "irregular verb", meaning: "a verb that does not make its past form with -ed", example: "Go is an irregular verb: go, went, gone.", topic: "academic" },
    { word: "past participle", meaning: "the verb form used after have in the present perfect", example: "The past participle of take is taken.", topic: "academic" },
    { word: "consistent", meaning: "staying the same and not changing without a reason", example: "Keep your tenses consistent when you tell a story.", topic: "academic" },
    { word: "interrupt", meaning: "to stop something while it is happening", example: "A phone call interrupted our dinner.", topic: "everyday" },
    { word: "arrangement", meaning: "a plan that you have made with someone for a fixed time", example: "We made an arrangement to meet outside the cinema at seven.", topic: "work" },
    { word: "intention", meaning: "something that you plan to do", example: "My intention is to study abroad next year.", topic: "everyday" },
    { word: "delay", meaning: "a time when something happens later than planned", example: "There was a two-hour delay at the airport.", topic: "travel" },
    { word: "luggage", meaning: "the bags and suitcases you take on a journey", example: "I only took hand luggage, so I didn't have to wait.", topic: "travel" },
    { word: "insurance", meaning: "an agreement where you pay a company and it pays you if something bad happens", example: "Always buy travel insurance before a long trip.", topic: "travel" },
    { word: "confident", meaning: "sure that you can do something well", example: "I feel more confident when I write emails in English now.", topic: "work" },
  ],
  keyPoints: [
    "Past simple for finished actions at a finished time: yesterday, last week, in 2022, two days ago.",
    "Past continuous for the longer background action; past simple for the short action that interrupts it.",
    "Present perfect for experiences, recent news with no finished time, and situations with for / since that continue now.",
    "Future: will for decisions and offers, be going to for plans, the present continuous for fixed arrangements.",
    "After did / didn't, use the base form: Did you finish? I didn't know.",
  ],
};

export default lesson;
