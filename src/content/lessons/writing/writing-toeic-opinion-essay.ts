import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-toeic-opinion-essay",
  title: "TOEIC opinion essay at a high level",
  summary:
    "Write a TOEIC opinion essay of 300+ words in 30 minutes at a high level: handle agree/disagree, preference and “most important” prompts, justify your choice against the alternatives, and develop extended workplace examples in a clear, professional style.",
  skill: "writing",
  level: "C1",
  order: 11,
  minutes: 45,
  exams: [{ exam: "toeic", task: "Writing – Write an opinion essay" }],
  objectives: [
    "Recognise the common TOEIC opinion prompt types and write a thesis that answers each precisely",
    "Justify a choice comparatively: explain why your option is better than the alternatives, not just why it is good",
    "Develop an extended, specific workplace example with a clear consequence",
    "Plan, write and check a well-organised essay of 300+ words in 30 minutes",
  ],
  warmUp: [
    "What makes someone a good manager or team leader in your experience?",
    "Would you rather be promoted within your company or move to a new company for a better job? Why?",
  ],
  learn: [
    {
      type: "text",
      title: "The task",
      body: "The last question of the TOEIC Writing test is **Write an opinion essay**: you have **30 minutes** to give and support your opinion on an issue, and ETS says that an effective essay typically contains **at least 300 words**. Raters consider whether your opinion is supported with reasons and/or examples, and the quality of your grammar, vocabulary and organisation.\n\nTopics usually come from work, study or everyday life, and prompts are often framed in one of three ways:\n\n- **Agree or disagree** with a statement\n- **Preference**: *Some people prefer X. Others prefer Y. Which do you prefer?*\n- **Most important**: *What is the most important quality / factor / skill…?*\n\nAt a high level, the difference is rarely the ideas themselves. It is how **precisely** the thesis answers the prompt, how **fully** each reason is developed, and how **clearly** the essay is organised.",
    },
    {
      type: "table",
      title: "What each prompt type requires",
      headers: ["Prompt type", "Your thesis must…", "Body paragraphs should…"],
      rows: [
        ["Agree or disagree", "state how far you agree, and why", "develop two or three reasons; one may answer the opposing view"],
        ["Preference (X or Y)", "choose one option clearly", "show why your choice is **better than** the other, not just that it is good"],
        ["Most important (one of several)", "name **one** quality or factor", "explain why it matters **more than** the obvious alternatives"],
      ],
    },
    {
      type: "example",
      title: "Comparative justification",
      items: [
        "Weak: *Listening is important for leaders because it is useful.* (Why is it **more** important than anything else?)",
        "Strong: **Expertise is certainly useful, but it can be supplied by experienced team members; listening, however, cannot be delegated.**",
        "Strong: **Whereas** a large company offers more formal training, a small firm gives employees **far broader** responsibilities from the start.",
        "Strong: **A high salary matters, but it is far less important than** the people you work with, since a supportive team makes a modest salary worthwhile.",
      ],
    },
    {
      type: "text",
      title: "Extended workplace examples",
      body: "A short example (*for example, my company does this*) supports a point; an **extended example** proves it. An extended example has four parts:\n\n1. **Situation**: a specific workplace, role or event (*a logistics firm*, *a junior colleague*, *a new booking form*).\n2. **Action**: what someone did or did not do.\n3. **Result**: a concrete consequence (*complaints fell sharply*, *the issue was settled in thirty minutes*).\n4. **Link back**: one sentence that connects the result to your thesis.\n\nThe example can come from your own experience or be a realistic, typical case (*Take, for instance, a firm that…*). Do not invent statistics or studies.",
    },
    {
      type: "table",
      title: "A 30-minute plan for 300+ words",
      headers: ["Time", "Stage", "Target"],
      rows: [
        ["0–4 min", "Choose the position you can support best; note two or three reasons and one extended example", "A plan of about 6 lines"],
        ["4–26 min", "Introduction → two or three body paragraphs → conclusion", "Intro about 50 words, body paragraphs 80–110 words each, conclusion about 40 words"],
        ["26–30 min", "Check: thesis and conclusion match; verb forms, articles, plurals; spelling", "Fix errors; do not start new paragraphs"],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: prompts and theses",
        questions: [
          {
            prompt: "Prompt: “What is the most important quality for a team leader to have?” Which thesis is strongest?",
            options: [
              "Team leaders need many qualities, such as honesty, intelligence, patience and confidence.",
              "In my view, the most important quality for a leader is the ability to listen, because it leads to better-informed decisions and a team that is genuinely committed to them.",
              "A team leader is a person who leads a team.",
              "Some people think confidence is important, and others think expertise is important.",
            ],
            answer: 1,
            explanation: "It names one quality and previews the reasons. A lists several qualities, which ignores *most important*; C and D give no opinion.",
          },
          {
            prompt: "In a preference essay (“Large company or small business?”), what makes a body paragraph most effective?",
            options: [
              "Describing every advantage of the option you chose, without mentioning the other",
              "Explaining why your chosen option is better than the alternative on a specific point",
              "Giving equal space to both options without choosing",
              "Repeating the question in different words",
            ],
            answer: 1,
            explanation: "A preference prompt asks you to compare. Showing why your choice is better on a specific point answers the question directly.",
          },
          {
            prompt: "You have 30 minutes. Which time plan is most realistic for a 300+ word essay?",
            options: [
              "10 minutes planning, 20 minutes writing, no checking",
              "No planning, 30 minutes writing",
              "About 4 minutes planning, 22 minutes writing, 4 minutes checking",
              "15 minutes writing a draft, 15 minutes copying it out neatly",
            ],
            answer: 2,
            explanation: "A short plan keeps the essay organised, and a few minutes at the end catch errors. Long planning or rewriting leaves too little time to reach 300 words.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*What is the most important quality for a team leader to have? Use specific reasons and examples to support your opinion.*",
    },
    {
      type: "passage",
      title: "Model essay (high level)",
      paragraphs: [
        "Team leaders are often chosen for their technical expertise or their confidence in meetings, but in my view the most important quality a leader can have is the ability to listen. A leader who genuinely listens makes better decisions, and the members of their team are far more likely to commit to those decisions.",
        "The first reason is that good decisions depend on information that leaders rarely have themselves. The people closest to a problem, whether they are sales staff talking to customers every day or engineers testing a product, usually notice difficulties long before managers do. A leader who invites their views and takes them seriously therefore learns about problems while they are still small. I saw this clearly in a previous job, where our manager held a short weekly meeting in which anyone could raise a concern. When a junior colleague pointed out that customers were confused by a new online booking form, the manager had it redesigned within a week, and complaints fell sharply. A less attentive leader might have discovered the problem only when sales began to drop.",
        "Listening also builds commitment. Employees who feel that their opinions are heard are much more willing to support a decision, even one they initially disagreed with, because they understand the reasoning behind it and know that their concerns were considered. In contrast, a leader who announces decisions without consultation may get agreement in the meeting but little real effort afterwards.",
        "Some would argue that technical expertise matters more, since a leader who does not understand the work cannot guide others. Expertise is certainly useful, but it can be supplied by experienced team members, and a leader who listens will draw on it. Expertise without listening, on the other hand, often produces a manager who assumes they already know the answer and overlooks warnings from their team.",
        "In conclusion, although knowledge and confidence are valuable, listening is the quality that allows a leader to make well-informed decisions and to gain the genuine support of their team. For this reason, I believe it should be the first thing organisations look for when they choose a team leader.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **The thesis answers the exact prompt**: one quality (*the ability to listen*), with two reasons previewed (*better decisions*, *commitment*).\n- **Each body paragraph has one reason** and opens with a clear topic sentence (*The first reason is that…*, *Listening also builds commitment.*).\n- **An extended example** in paragraph 2: situation (weekly meeting), action (form redesigned), result (complaints fell sharply), and a link back (*A less attentive leader might have discovered the problem only when…*).\n- **Comparative justification** in paragraph 4: the writer explains why listening matters **more than** expertise, the most obvious alternative, rather than ignoring it.\n- **A professional, readable style**: precise vocabulary (*consultation*, *well-informed*, *draw on*) and a mix of complex sentences, without over-formal academic language.\n\nLength: about 360 words. This is realistic in 30 minutes with a four-minute plan.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Match the prompt and the thesis",
        instructions: "Match each prompt with the thesis that answers it most precisely. There is one extra thesis.",
        left: [
          "Do you agree or disagree with the following statement? Employees should be allowed to listen to music while they work.",
          "Some people prefer to work for a large international company. Others prefer to work for a small local business. Which do you prefer?",
          "What is the most important factor when choosing a job: the salary, the location or the people you work with?",
          "Do you agree or disagree with the following statement? Most meetings are a waste of time.",
        ],
        right: [
          "I disagree: many meetings are run badly, but a short, well-prepared meeting remains the fastest way to reach a decision that several people must support.",
          "Large companies and small businesses both have advantages and disadvantages for employees.",
          "Of these three factors, the people I work with matter most to me, since a supportive team makes even a modest salary or a long commute worthwhile.",
          "I largely agree, provided that the work does not involve dealing with customers, because music helps many people concentrate on repetitive tasks.",
          "I would rather work for a small local business, because I would have broader responsibilities and a closer connection to the people my work serves.",
        ],
        answer: [3, 4, 2, 0],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Language for comparing and exemplifying",
        instructions: "Complete the sentences with words from the box. There are two extra words.",
        text: "1. I would {{0}} work for a small company than for a large one.\n2. {{1}}, for instance, a logistics firm that promotes its warehouse supervisor to operations manager.\n3. Salary matters, but it is {{2}} less important than the people you work with.\n4. {{3}} large companies usually offer more formal training, small firms give employees broader responsibilities.\n5. Had the manager ignored the complaint, sales {{4}} have fallen.\n6. This is {{5}} why I believe listening matters more than expertise.\n7. Expertise can be supplied by others; listening, {{6}}, cannot be delegated.",
        answers: [
          ["rather"],
          ["Take", "Consider"],
          ["far", "much"],
          ["Whereas", "While", "Although", "Though"],
          ["would", "might", "could"],
          ["precisely", "exactly"],
          ["however", "by contrast", "in contrast", "on the other hand"],
        ],
        wordBank: ["rather", "Take", "far", "Whereas", "would", "precisely", "however", "despite", "more"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "order",
        mode: "lines",
        title: "Order a developed body paragraph",
        instructions: "This body paragraph comes from an essay that disagrees with the statement “Most meetings are a waste of time.” Put the sentences in order.",
        items: [
          "The most important reason meetings remain valuable is that some decisions need the agreement of several people at once.",
          "When a decision is made by email, each person replies separately, and disagreements can continue for days without being resolved.",
          "In a meeting, by contrast, objections are raised and answered immediately, so the group can reach a conclusion that everyone understands.",
          "Last year, for example, my department spent two weeks exchanging emails about a new holiday rota without reaching agreement.",
          "When our manager finally called a thirty-minute meeting, the issue was settled before the end of it.",
          "This shows that a short, focused meeting can save far more time than it costs.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: Write an opinion essay (30 minutes)",
        instructions: "Set a timer for 30 minutes: about 4 minutes to plan, 22 to write and 4 to check.",
        prompt:
          "Do you agree or disagree with the following statement?\n\nIt is better for a company to promote its own employees to senior positions than to hire managers from outside the company.\n\nUse specific reasons and examples to support your opinion. An effective essay will typically contain at least 300 words.",
        minWords: 300,
        minutes: 30,
        rubric: [
          "Opinion: my thesis states clearly how far I agree, and my conclusion states the same position.",
          "Support: each body paragraph develops one reason with explanation, and at least one reason is supported by an extended, specific example (situation, action, result, link back).",
          "Comparison: I explained why my position is stronger than the opposing view, not only why it has advantages.",
          "Organisation: introduction, two or three body paragraphs with clear topic sentences, and a conclusion; ideas are linked logically.",
          "Vocabulary: I used precise workplace vocabulary (vacancy, promote from within, workforce, retain staff) accurately and in a professional register.",
          "Grammar: I used a variety of sentence structures (conditionals, relative clauses, concessive clauses) with very few errors.",
          "Length and time: at least 300 words in 30 minutes, with time left to check.",
        ],
        modelAnswer:
          "When a senior position becomes vacant, a company faces a choice between rewarding someone who already knows the organisation and bringing in a fresh perspective from outside. Although external hires can be valuable in certain situations, I agree that, in most cases, it is better to promote from within, because internal candidates bring knowledge that takes years to acquire, and their promotion strengthens the loyalty of the whole workforce.\n\nThe first advantage of internal promotion is that the new manager already understands how the company really works. An outsider may arrive with an impressive record, but they still need months to learn the company's products, its clients and, above all, its informal networks: who actually makes decisions and which procedures exist only on paper. Take, for instance, a logistics firm that appoints a warehouse supervisor with ten years' experience as its operations manager. From her first day, she knows which suppliers are unreliable and which shift patterns cause delays, so she can make improvements immediately rather than spending her first few months gathering information.\n\nA second, and perhaps more important, benefit is the effect on everyone else in the organisation. When employees see colleagues rise to senior roles, they have a concrete reason to stay and develop their skills. If, by contrast, every attractive vacancy is filled from outside, ambitious staff soon conclude that they will need to leave in order to advance, and the company loses precisely the people it has spent years training. Replacing them is expensive, and the knowledge they take with them is often impossible to recover.\n\nAdmittedly, there are situations in which an external candidate is the better choice. A company that is struggling, or that needs expertise it has never had, such as its first move into online sales, may benefit from someone who is not attached to old habits. However, these are exceptions rather than the rule, and even then, an outside appointment works best when it is combined with clear development paths for existing staff.\n\nIn conclusion, while external hiring has its place, promoting from within usually gives companies managers who can be effective at once and a workforce with good reason to stay. For these reasons, I believe it should be a company's first option whenever a senior position becomes available.",
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "The opinion essay gives you 30 minutes, and ETS says an effective essay typically has at least 300 words. Choose the side you can support best, not necessarily the one you feel most strongly about, and decide within the first two or three minutes.",
    },
    {
      exam: "toeic",
      body: "Raters consider whether your opinion is supported with reasons and/or examples, and the quality of your grammar, vocabulary and organisation. One extended example with a clear result is more convincing than several one-line examples.",
    },
    {
      exam: "toeic",
      body: "Keep a clear, professional register. TOEIC topics come from work and everyday life, so plain, precise business English is more effective than very academic or literary language. Avoid padding to reach 300 words: develop a reason or an example instead.",
    },
  ],
  vocabulary: [
    { word: "vacancy", meaning: "a job that is available for someone to do", example: "The company filled the vacancy within a month.", topic: "work" },
    { word: "promote from within", meaning: "to give senior jobs to people who already work in the organisation", example: "The firm prefers to promote from within.", topic: "business" },
    { word: "workforce", meaning: "all the people who work for an organisation", example: "The policy improved the loyalty of the workforce.", topic: "business" },
    { word: "advance", meaning: "to make progress in your career", example: "Staff need to see opportunities to advance.", topic: "work" },
    { word: "consultation", meaning: "discussing something with people before making a decision", example: "The change was made without any consultation.", topic: "work" },
    { word: "commit to", meaning: "to give your full support and effort to something", example: "People commit to decisions they helped to shape.", topic: "work" },
    { word: "attentive", meaning: "listening or watching carefully", example: "An attentive manager notices problems early.", topic: "work" },
    { word: "delegate", meaning: "to give part of your work or responsibility to someone else", example: "Good leaders know which tasks to delegate.", topic: "work" },
    { word: "well-informed", meaning: "having a lot of knowledge or the right information", example: "Listening leads to well-informed decisions.", topic: "business" },
    { word: "rota", meaning: "a list showing when each person must do a job (UK)", example: "We agreed a new holiday rota in the meeting.", topic: "work" },
    { word: "development path", meaning: "a planned way for an employee to gain skills and move to higher roles", example: "Clear development paths help companies keep good staff.", topic: "business" },
  ],
  keyPoints: [
    "TOEIC opinion essay: 30 minutes; an effective essay typically has at least 300 words.",
    "Answer the exact prompt type: agree/disagree, preference, or one most important factor.",
    "Justify comparatively: show why your choice is better than the obvious alternative.",
    "Develop at least one extended example: situation, action, result, link back to the thesis.",
    "Plan for about 4 minutes, write for about 22 and keep about 4 minutes to check.",
  ],
};

export default lesson;
