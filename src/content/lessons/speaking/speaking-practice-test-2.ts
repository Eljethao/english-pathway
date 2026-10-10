import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-practice-test-2",
  title: "Full speaking practice test 2",
  summary:
    "A second complete, timed IELTS Speaking mock at C1 level on new topics (reading, gifts and advice), plus a TOEFL interview question and a TOEIC opinion task, with model answers and band 7–8 self-assessment.",
  skill: "speaking",
  level: "C1",
  order: 12,
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
    "Complete a second full IELTS Speaking test under real timing, on new topics",
    "Sustain a two-minute long turn and five developed Part 3 answers at C1 level",
    "Answer a TOEFL interview question and a TOEIC opinion task within the official time limits",
    "Compare your performance with the first practice test, using the public band 7 and band 8 descriptors",
  ],
  warmUp: [
    "Look back at your recordings from the first practice test. Which criterion was your weakest, and what will you do differently this time?",
  ],
  learn: [
    {
      type: "text",
      title: "How to use this second test",
      body: "This test has the same structure as *Full speaking practice test*, but every topic is new. Treat it as a measure of progress across the C1 course.\n\n- Do it **in one sitting**, in a quiet room, and record every answer. Don't pause the timer or restart.\n- Only write notes in Part 2. For every other task, plan in your head.\n- Choose **one focus** from your first test (for example, more precise vocabulary, or fewer restarts) and keep it in mind throughout.\n- Don't read any model answer until you have finished the whole test.\n\nAfterwards, listen to your recordings once for each criterion, using the descriptor table in the Model section, and compare them with your recordings from the first test.",
    },
    {
      type: "table",
      title: "What's in this test",
      headers: ["Section", "Tasks", "Preparation", "Speaking time"],
      rows: [
        ["IELTS Part 1: Introduction and interview", "6 questions: reading and gifts", "None", "About 20–30 seconds each"],
        ["IELTS Part 2: Long turn", "1 cue card about advice", "1 minute (notes allowed)", "Up to 2 minutes"],
        ["IELTS Part 3: Discussion", "5 questions about advice", "None", "About 45–60 seconds each"],
        ["TOEFL: Take an Interview", "1 interview question", "None", "45 seconds"],
        ["TOEIC: Express an opinion", "1 opinion question", "45 seconds", "60 seconds"],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Before you start: C1 test habits",
        questions: [
          {
            prompt: "Part 1. The examiner asks a question you find dull or have no strong feelings about. What is the best approach?",
            options: [
              "Give a short, honest answer with one natural detail, even if the answer is “Not really”.",
              "Change the subject to a topic you have prepared.",
              "Give a long, formal answer to show your range.",
            ],
            answer: 0,
            explanation: "Part 1 is about familiar topics. A natural, personal answer of two or three sentences works best; a prepared speech on another topic does not answer the question.",
          },
          {
            prompt: "Part 2. What should your notes look like at the end of the minute of preparation?",
            options: [
              "Full sentences for the first two bullet points only",
              "A few key words for each bullet point, plus one spare idea in case you run out",
              "Nothing: notes make you sound less fluent",
            ],
            answer: 1,
            explanation: "Key words keep you on track without reading aloud, and a spare idea (a reflection, or what you'd do differently) helps you speak for the full two minutes.",
          },
          {
            prompt: "Part 3. The examiner asks, “Why are people today less interested in reading?” You don't think that is true. What can you do?",
            options: [
              "Accept the claim, because the examiner is always right.",
              "Refuse to answer the question.",
              "Question the claim politely and explain: “I'm not sure that's entirely the case. People may read just as much, but…”",
            ],
            answer: 2,
            explanation: "You are assessed on your language, not on agreeing. Politely challenging a premise and justifying your view shows exactly the kind of discussion Part 3 is for.",
          },
          {
            prompt: "What is the most useful way to assess your recordings afterwards?",
            options: [
              "Listen once and give yourself an overall band.",
              "Listen once for each criterion and note one specific example of a strength and a weakness each time.",
              "Count how many advanced words you used.",
            ],
            answer: 1,
            explanation: "Each criterion needs a different kind of listening. Specific examples show you exactly what to work on next.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "table",
      title: "Rate yourself: band 7 and band 8 in the public IELTS descriptors",
      headers: ["Criterion", "Band 7 (key sentences)", "Band 8 (key sentences)"],
      rows: [
        [
          "Fluency and Coherence",
          "“Able to keep going and readily produce long turns without noticeable effort.” “Flexible use of spoken discourse markers, connectives and cohesive features.”",
          "“Fluent with only very occasional repetition or self-correction.” “Hesitation may occasionally be used to find words or grammar, but most will be content related.” “Topic development is coherent, appropriate and relevant.”",
        ],
        [
          "Lexical Resource",
          "“Resource flexibly used to discuss a variety of topics.” “Some ability to use less common and idiomatic items and an awareness of style and collocation is evident though inappropriacies occur.”",
          "“Wide resource, readily and flexibly used to discuss all topics and convey precise meaning.” “Skilful use of less common and idiomatic items despite occasional inaccuracies in word choice and collocation.”",
        ],
        [
          "Grammatical Range and Accuracy",
          "“A range of structures flexibly used. Error-free sentences are frequent.” “Both simple and complex sentences are used effectively despite some errors.”",
          "“Wide range of structures, flexibly used.” “The majority of sentences are error free.”",
        ],
        [
          "Pronunciation",
          "“Displays all the positive features of band 6, and some, but not all, of the positive features of band 8.”",
          "“Uses a wide range of phonological features to convey precise and/or subtle meaning.” “Can sustain appropriate rhythm. Flexible use of stress and intonation across long utterances, despite occasional lapses.” “Can be easily understood throughout.”",
        ],
      ],
    },
    {
      type: "text",
      title: "How a strong C1 candidate approaches the test",
      body: "- **Part 1:** short, natural and personal. Strong candidates often add a small twist (*That said…*, *what made it special was less… than…*) instead of a list of facts.\n- **Part 2:** a clear opening, the story in a logical order, and the *explain* point used for genuine reflection. Notice how the model answer saves its most precise idea for the end.\n- **Part 3:** a position in the first sentence, then development: a reason, an example, the other side, and a conclusion that answers the question again. Several of the model answers question or narrow the premise (*Not necessarily*, *I suspect it already is*).\n- **TOEFL and TOEIC:** one clear opinion, one fully developed reason with a specific example, a brief concession and a one-line conclusion, all within the time.\n- **Throughout:** the descriptors for band 8 talk about conveying **precise meaning** and hesitation that is mostly **content related**. Pausing to choose the right idea is fine; long searches for basic words are not.",
    },
  ],
  practice: [
    {
      type: "text",
      title: "IELTS Speaking Part 1: Introduction and interview (4–5 minutes)",
      body: "The examiner will ask you about **reading** and then about **gifts**. There is no preparation time. Give a direct answer, then add a reason, a detail or an example. Aim for about **20–30 seconds** per answer.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "speak",
        title: "Part 1, question 1",
        prompt: "Let's talk about reading. Do you read much for pleasure these days?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Not as much as I'd like, to be honest. During the week most of my reading is for work, so by the evening I'm not really in the mood for more words on a page. But I make up for it on holiday. I'll usually get through three or four novels in a week, mostly crime fiction, because I like a strong plot that I can lose myself in.",
        targetPhrases: ["not as much as I'd like", "make up for it", "get through", "lose myself in"],
        checklist: [
          "I answered the question directly in my first sentence.",
          "I contrasted two situations (the working week and holidays).",
          "I used at least one natural phrasal verb or idiom accurately.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "speak",
        title: "Part 1, question 2",
        prompt: "Do you prefer reading on paper or on a screen?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Paper, without a doubt, at least for anything longer than an article. I find I remember what I've read much better when I can physically feel where I am in the book. That said, I've become a convert to e-readers for travelling, simply because they weigh next to nothing, and you can carry a whole library around in your bag without paying for extra luggage.",
        targetPhrases: ["without a doubt", "that said", "a convert to", "next to nothing"],
        checklist: [
          "I gave a clear preference straight away.",
          "I explained why, with a precise reason.",
          "I added a qualification (that said…) to show a balanced view.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex15",
        kind: "speak",
        title: "Part 1, question 3",
        prompt: "Did you read a lot when you were a child?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Yes, a huge amount, mostly because my mother took me to the local library every Saturday. I'd come home with a pile of adventure stories and work my way through them by Wednesday. Looking back, I think those weekly trips did more for my writing at school than any lesson, although at the time I just saw them as an escape.",
        targetPhrases: ["a huge amount", "work my way through", "looking back", "at the time"],
        checklist: [
          "I used would or used to for a past habit.",
          "I added a reflection from today's point of view (looking back…).",
          "I kept it to about 30 seconds.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "Part 1, question 4",
        prompt: "Now let's talk about gifts. Do you enjoy choosing presents for other people?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "I do, although my success rate is a bit hit and miss. I enjoy thinking about what someone would genuinely like, rather than grabbing a voucher at the last minute. For close friends I usually get it right, but with relatives I only see once a year it's much harder, and I've definitely bought a few things that ended up at the back of a cupboard.",
        targetPhrases: ["hit and miss", "genuinely", "at the last minute", "ended up"],
        checklist: [
          "I answered yes or no, then explained.",
          "I used a contrast between two groups of people.",
          "My answer sounded spontaneous, not memorised.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "Part 1, question 5",
        prompt: "What's the best present you've ever received?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Probably a camera my grandfather gave me when I turned sixteen. It wasn't new. In fact, it was the one he'd used for decades, and he spent a whole afternoon showing me how it worked. I still use it now and then, and I think what made it special was less the camera itself than the fact that he trusted me with something he cared about.",
        targetPhrases: ["in fact", "he'd used for decades", "now and then", "less the camera itself than"],
        checklist: [
          "I used past tenses accurately, including the past perfect.",
          "I explained why the present mattered, not only what it was.",
          "I used at least one complex structure (what made it special was…).",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex6",
        kind: "speak",
        title: "Part 1, question 6",
        prompt: "Is it better to give someone money or a physical gift?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "It depends on the person, I think. For teenagers, or people saving for something big, money is often more useful, and there's no risk of getting it wrong. But for most people I'd go for a physical gift, because it shows you've put some thought into it. Money can feel a bit impersonal, even a little lazy, as if you've handed over a payment rather than a present.",
        targetPhrases: ["it depends on", "I'd go for", "put some thought into", "as if"],
        checklist: [
          "I gave a clear position, even though I said “it depends”.",
          "I compared the two options with reasons.",
          "I kept it to about 30 seconds.",
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
        id: "ex7",
        kind: "speak",
        title: "Part 2: cue card",
        prompt: "Describe a piece of advice you received that turned out to be useful.",
        cueCard: [
          "who gave you the advice",
          "what the advice was",
          "when you received it",
          "and explain why it turned out to be useful",
        ],
        prepSeconds: 60,
        speakSeconds: 120,
        modelAnswer:
          "The piece of advice I'd like to talk about came from my first manager, a woman called Elena, who ran the customer service team at a delivery company where I worked the summer after I left school.\n\nOn my first morning, she took me aside and said something like: “Ask all your stupid questions in the first two weeks. After that, people will expect you to know, and you'll be too embarrassed to ask.” At the time, to be honest, I thought it was just a kind thing to say to a nervous eighteen-year-old, and I didn't take it particularly seriously.\n\nBut it turned out to be remarkably useful. For the first fortnight I took her at her word and asked about everything: how the booking system worked, who to contact when a parcel went missing, even where the spare paper was kept. Nobody minded, because I was obviously new. In fact, most people seemed quite pleased to be asked. Then, in my third week, another new colleague started who'd decided to work everything out on his own so that he'd look competent, and within a month he'd made a couple of fairly costly mistakes that a two-minute conversation would have prevented.\n\nSince then, I've used the same approach whenever I've started something new: at university, in my current job, even when I joined a climbing club. So why was it so useful? I think because it reframed asking questions as something strategic rather than a sign of weakness. It's a small piece of advice, but it's probably saved me more time and embarrassment than anything I learned in a classroom.",
        targetPhrases: ["took me aside", "at the time", "it turned out to be", "I took her at her word", "would have prevented", "reframed asking questions as"],
        checklist: [
          "I covered all four points on the cue card in a logical order.",
          "I spoke for close to two minutes, with no long searches for words.",
          "I used a range of past forms (past perfect, would have + past participle).",
          "I used less common vocabulary and idioms naturally (took me aside, took her at her word).",
          "My reflection at the end was precise, not just “it was very useful”.",
        ],
      },
    },
    {
      type: "text",
      title: "IELTS Speaking Part 3: Discussion (4–5 minutes)",
      body: "The examiner will now ask you some more general questions about **advice**. There is no preparation time. Give a clear position, develop it, and consider other views. Aim for about **45–60 seconds** per answer.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex8",
        kind: "speak",
        title: "Part 3, question 1",
        prompt: "Who do young people tend to go to for advice nowadays? Has this changed?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "I'd say there's been a real shift. A generation ago, young people would mostly have turned to their parents, or perhaps a teacher or an older relative, simply because those were the people around them. Nowadays the first port of call is often the internet, whether that's a forum, a video or a chatbot, which would have been unthinkable twenty years ago. That's partly convenience and partly, I think, because it's anonymous: you can ask something embarrassing without anyone knowing. That said, I don't think family has been replaced so much as supplemented. For big decisions, like choosing a degree, most young people I know still talk to their parents or close friends. It's more that they arrive at that conversation having already done a lot of research online, which arguably makes it a better-informed conversation.",
        targetPhrases: ["a real shift", "would mostly have turned to", "the first port of call", "replaced so much as supplemented", "arguably"],
        checklist: [
          "I answered both parts of the question: who, and whether it has changed.",
          "I compared past and present with precise structures.",
          "I explained the reasons for the change.",
          "I qualified my answer (I don't think X has been replaced so much as supplemented).",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex9",
        kind: "speak",
        title: "Part 3, question 2",
        prompt: "Is advice from professionals, such as financial advisers, always more reliable than advice from friends and family?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "Not necessarily. Professionals obviously have expertise that friends lack, and for something technical, like a tax problem or a medical issue, I'd always trust a qualified person over my uncle's opinion. But professionals aren't always neutral. A financial adviser, for instance, may earn commission on certain products, which can colour their recommendations, whereas a friend has nothing to gain and will usually tell you honestly if they think you're making a mistake. Friends and family also know you, your personality and your circumstances, in a way a stranger simply can't. They'll know, for example, whether you'd actually stick to a budget. So I think the ideal is to combine the two: get the facts from someone qualified, and then talk it through with someone who knows you well before you actually make a decision.",
        targetPhrases: ["not necessarily", "for instance", "colour their recommendations", "whereas", "the ideal is to"],
        checklist: [
          "I responded to the word “always” in the question.",
          "I gave a strength and a weakness of professional advice.",
          "I used a precise example (commission).",
          "I ended with a clear, balanced recommendation.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex10",
        kind: "speak",
        title: "Part 3, question 3",
        prompt: "Some people now get advice from online influencers. What are the risks of this?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "The biggest risk, I'd say, is that popularity gets mistaken for expertise. Someone with a million followers can sound extremely confident about nutrition or investing without any real qualifications, and confidence is very persuasive, especially to younger viewers. The second problem is that a lot of advice online is, in effect, advertising. The influencer may be paid to recommend a product, and that isn't always obvious. And thirdly, online advice is generic by nature. A diet that suits a twenty-five-year-old athlete could be harmful for someone with a health condition, and the influencer will never know, because they aren't talking to you personally. To be fair, some influencers are genuinely knowledgeable, but viewers need to be quite critical about where the advice comes from and who benefits from it.",
        targetPhrases: ["gets mistaken for", "in effect", "generic by nature", "to be fair", "who benefits from it"],
        checklist: [
          "I named the most important risk first.",
          "I organised several risks clearly (the second problem, thirdly).",
          "I gave a concrete illustration.",
          "I acknowledged the other side before concluding.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex11",
        kind: "speak",
        title: "Part 3, question 4",
        prompt: "Should schools teach practical life skills, such as managing money, rather than leaving this to parents?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "Yes, I think they should, at least to some extent. The argument for leaving it to parents assumes that all parents have the knowledge and the time, and that's simply not the case. Some families talk openly about money and budgeting; others never do, and their children are often the ones who struggle later with debt or with paying bills on time. If schools taught the basics, things like how interest works, how to read a payslip or how to budget for rent, it would help to level the playing field. I wouldn't want it to replace academic subjects, though. There's already a lot of pressure on the timetable. Even an hour a week in the last couple of years of school would make a real difference, and parents could still build on it at home.",
        targetPhrases: ["at least to some extent", "assumes that", "level the playing field", "I wouldn't want it to", "build on it"],
        checklist: [
          "I gave a clear position and limited it (at least to some extent).",
          "I challenged the assumption behind the other view.",
          "I used a conditional to describe the benefits.",
          "I gave a realistic suggestion, not an extreme one.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex12",
        kind: "speak",
        title: "Part 3, question 5",
        prompt: "Do you think artificial intelligence will become a major source of personal advice in the future?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "I suspect it already is, to a greater extent than people admit. Plenty of people ask AI tools about everything from recipes to career decisions, and I can only see that growing as the tools improve. The appeal is obvious: it's available at three in the morning, it's patient, and it doesn't judge you. For a lot of people, especially those who feel awkward asking friends, that's a big advantage. Where I'd be more cautious is with decisions that involve values or emotions. An AI can lay out the options very clearly, but it doesn't really know you, and it can sound authoritative even when it's wrong. So my guess is that it'll become the default for factual or practical questions, while the genuinely personal decisions will still be talked through with people.",
        targetPhrases: ["I suspect", "to a greater extent than", "where I'd be more cautious", "lay out the options", "my guess is that"],
        checklist: [
          "I made a clear prediction and hedged it appropriately.",
          "I explained why the trend is likely to continue.",
          "I identified a limitation precisely.",
          "My conclusion distinguished between two kinds of advice.",
        ],
      },
    },
    {
      type: "text",
      title: "TOEFL Speaking: Take an Interview",
      body: "An interviewer is asking students how they use their summer breaks. There is **no preparation time**. Start answering straight away and speak for **45 seconds**.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex13",
        kind: "speak",
        title: "TOEFL interview question",
        prompt:
          "Interviewer: Some students spend their summer break on an unpaid internship in their field, while others take a paid job that isn't related to their studies. Which do you think is more valuable, and why?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "I think a paid job can actually be more valuable, which might sound surprising. Unpaid internships do give you relevant experience, but they're only realistic for students whose families can support them, so they're not a fair option for everyone. A paid job, even in a café, teaches skills employers really value: reliability, dealing with difficult customers and working under pressure. My sister worked in a hotel kitchen every summer, and in her first graduate interview, that's what they asked about most. So overall, any job where you take real responsibility is valuable, whether it's linked to your degree or not.",
        targetPhrases: ["which might sound surprising", "do give you", "even in a café", "so overall"],
        checklist: [
          "I gave a clear choice in my first sentence.",
          "I acknowledged the advantage of the other option.",
          "I supported my view with a specific example.",
          "I finished with a conclusion within 45 seconds.",
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
        id: "ex14",
        kind: "speak",
        title: "TOEIC opinion question",
        prompt:
          "Which is a more effective way for a company to train new employees: having them work alongside an experienced colleague, or sending them on a formal training course? Give specific reasons and examples to support your opinion.",
        prepSeconds: 45,
        speakSeconds: 60,
        modelAnswer:
          "In my opinion, working alongside an experienced colleague is more effective, although formal courses have a role too. The main reason is that it shows you how the job is actually done, rather than how it's supposed to be done. Every workplace has its own systems and unwritten rules, and you only really learn those by watching someone deal with real situations. For example, when I started at my current company, I spent my first week sitting next to a senior colleague, and I learned more about handling clients in those five days than in a two-day course I attended later. On top of that, it helps new staff build relationships from day one. That said, a formal course is useful for things like safety rules. But overall, learning from a colleague works better.",
        targetPhrases: ["in my opinion", "the main reason is", "unwritten rules", "for example", "on top of that", "that said"],
        checklist: [
          "I stated my choice clearly in the first sentence.",
          "I developed one main reason with a specific example.",
          "I added a second, shorter point.",
          "I briefly acknowledged the other option.",
          "I concluded before the 60 seconds ran out.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "The examiner rates your **average performance across the whole test**, so a weaker Part 1 answer can be balanced by strong Parts 2 and 3. Don't let one difficult question affect the rest: treat every new question as a fresh start.",
    },
    {
      exam: "toefl",
      body: "In **Take an Interview**, a short concession (*Unpaid internships do give you relevant experience, but…*) shows range without using up your 45 seconds. Keep it to one sentence and return to your main point straight away.",
    },
    {
      exam: "toeic",
      body: "In **Express an opinion**, choice questions (*Which is more effective: A or B?*) need a clear choice. You can mention that the other option has a role, but your first and last sentences should both name the option you chose.",
    },
  ],
  vocabulary: [
    { word: "hit and miss", meaning: "sometimes successful and sometimes not", example: "The restaurant's service is a bit hit and miss.", topic: "everyday" },
    { word: "a convert to", meaning: "someone who has changed their opinion and now likes or supports something", example: "I was sceptical, but I'm now a convert to audiobooks.", topic: "everyday" },
    { word: "take someone aside", meaning: "to speak to someone privately, away from others", example: "My manager took me aside after the meeting.", topic: "work" },
    { word: "take someone at their word", meaning: "to believe that someone means exactly what they say and act on it", example: "She said I could call any time, so I took her at her word.", topic: "everyday" },
    { word: "reframe", meaning: "to think about something in a different way", example: "Try to reframe mistakes as chances to learn.", topic: "academic" },
    { word: "first port of call", meaning: "the first person or place you go to for help or information", example: "For most students, the library website is the first port of call.", topic: "education" },
    { word: "colour (someone's judgement)", meaning: "to influence someone's opinion, often unfairly", example: "His personal experience coloured his view of the policy.", topic: "society" },
    { word: "generic", meaning: "general, not designed for a particular person or situation", example: "The advice was too generic to be useful.", topic: "academic" },
    { word: "level the playing field", meaning: "to give everyone an equal chance", example: "Free tutoring could help to level the playing field.", topic: "education" },
    { word: "authoritative", meaning: "sounding confident and as if it can be trusted", example: "The report sounds authoritative, but the data is weak.", topic: "academic" },
    { word: "unwritten rules", meaning: "rules that everyone in a group follows but that are not officially stated", example: "Every office has its unwritten rules about lunch breaks.", topic: "work" },
  ],
  keyPoints: [
    "Use a second mock to measure progress: same timing, new topics, one personal focus taken from your first test.",
    "Part 1: short, natural and personal. Part 2: key words for each bullet plus a spare idea. Part 3: a position, development, the other side and a conclusion.",
    "At C1 you can question or narrow the premise of a Part 3 question, as long as you explain why.",
    "TOEFL and TOEIC: a clear opinion, one developed reason with a specific example, a brief concession and a conclusion within the time.",
    "Assess yourself with the exact band 7 and band 8 descriptors, one criterion at a time, and compare with your first test.",
  ],
};

export default lesson;
