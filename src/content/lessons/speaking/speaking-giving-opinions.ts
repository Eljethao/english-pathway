import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-giving-opinions",
  title: "Giving and supporting opinions",
  summary:
    "Give a clear opinion, back it up with a reason and a real example, and finish strongly: the core skill for the TOEFL interview and the TOEIC opinion task.",
  skill: "speaking",
  level: "B2",
  order: 3,
  minutes: 20,
  exams: [
    { exam: "toefl", task: "Speaking – Take an Interview" },
    { exam: "toeic", task: "Speaking – Express an opinion" },
  ],
  objectives: [
    "State an opinion clearly in the first sentence of your answer",
    "Support an opinion with a reason and a specific example",
    "Agree or disagree politely, including partial agreement",
    "Organise a 45–60 second answer so it has a clear ending",
  ],
  warmUp: [
    "Think of something you have changed your mind about in the last few years. What made you change it?",
    "Is it better to have a few close friends or lots of friends? Give one reason, out loud, in two sentences.",
  ],
  learn: [
    {
      type: "text",
      title: "Why “I think so” is not enough",
      body: "In opinion tasks the examiner is listening for two things: **a clear position** and **support**. Many learners give a good opinion and then stop, or they talk around the topic for a minute without ever saying what they think.\n\nA simple pattern keeps you on track. Call it **O-R-E-C**:\n\n1. **Opinion**: answer the question directly in your first sentence.\n2. **Reason**: say *why* you think so.\n3. **Example**: make the reason real with a specific situation, a person you know or something you have seen.\n4. **Conclude**: come back to your opinion in a few words, so the listener knows you have finished.\n\nIn a 60-second answer you can often fit **two reasons**, each with a short example. In a 45-second answer, one well-developed reason is usually better than three thin ones.",
    },
    {
      type: "table",
      title: "Useful phrases for each step",
      headers: ["Step", "Instead of…", "Try…"],
      rows: [
        ["Opinion", "I think…", "Personally, I'd say… / As far as I'm concerned… / I'm fairly convinced that…"],
        ["Partial agreement", "Yes and no.", "I agree up to a point, but… / I can see why people say that, but…"],
        ["Polite disagreement", "That's wrong.", "I'm not totally convinced that… / I'd have to disagree with that, actually."],
        ["Reason", "Because…", "The main reason is that… / For one thing… / What I mean is…"],
        ["Example", "For example…", "Take my sister, for instance… / A good example of this is… / I saw this first-hand when…"],
        ["Conclude", "That's all.", "So, all in all, … / That's why I'd say… / So for me, the answer is clearly…"],
      ],
    },
    {
      type: "example",
      title: "Thin answer vs. supported answer",
      items: [
        "Question: Should students have part-time jobs while they are at university?",
        "Thin: “Yes, I think it's good. Jobs are good for students. They can learn things. So yes.”",
        "Supported: “**Personally, I'd say** yes, as long as it's only a few hours a week. **The main reason is that** a job teaches things you can't learn in a lecture, like dealing with difficult customers. **Take my cousin, for instance.** She worked in a café during her degree, and she says it gave her much more confidence in interviews. **So, all in all,** I think a small job is worth it.”",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check",
        questions: [
          {
            prompt: "Question: “Do you think people should be allowed to use their phones on public transport?” Which first sentence is best?",
            options: [
              "Well, phones are a very big part of modern life, and public transport is used by many people every day.",
              "As far as I'm concerned, yes, people should be allowed, but they should keep their voices down.",
              "That's a really interesting question. I've never thought about it before.",
            ],
            answer: 1,
            explanation: "It gives a clear position immediately, and even adds a condition. The first option is just background, and the third one wastes time.",
          },
          {
            prompt: "Which sentence is the strongest example to support the opinion “Online classes can be just as effective as face-to-face ones”?",
            options: [
              "Online classes are good for many people in many situations.",
              "Last year I did an online accounting course, and my exam result was actually better than in my classroom courses.",
              "Some people like online classes and some people don't.",
            ],
            answer: 1,
            explanation: "A good example is specific: a real course, a real result. The other options are general and add no evidence.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model answer: TOEIC Express an opinion",
      voice: "us",
      cast: { narrator: "female" },
      transcript:
        "Personally, I'd say that letting employees choose their own working hours is a really good idea, at least for office jobs. The main reason is that people work best at different times of day. Some people are full of energy at seven in the morning, while others don't wake up until ten. Take my brother, for instance. His company introduced flexible hours, and now he starts at six thirty and finishes at three. He says he gets far more done in those quiet early hours. On top of that, flexible hours mean fewer people travel in the rush hour, so commuting is less stressful. Of course, it wouldn't work for everyone, for example nurses or shop staff. But for office workers, all in all, I think the benefits are clear.",
    },
    {
      type: "text",
      title: "How a strong speaker does it",
      body: "**Task:** “Some people think companies should let employees choose their own working hours. Do you agree or disagree? Give reasons and examples.” (45 seconds to prepare, 60 seconds to speak.)\n\n- **Opinion in sentence one.** “Personally, I'd say… is a really good idea, at least for office jobs.” The small limit (*at least for office jobs*) makes the opinion sound thoughtful, not extreme.\n- **Reason 1 + example.** People work best at different times → a specific person (*my brother*), specific times (*six thirty to three*) and a specific result (*gets far more done*).\n- **Reason 2, shorter.** “On top of that…” adds a second point about the rush hour without a long example. This is a good way to manage time.\n- **Shows the other side.** “Of course, it wouldn't work for everyone…” Acknowledging a limit shows a B2+ range of ideas.\n- **Clear ending.** “All in all, I think the benefits are clear.” The listener knows the answer is finished.\n\nDuring the 45 seconds of preparation, the speaker only needs to plan a few key words: *agree, office jobs / different energy times → brother / rush hour / not nurses*. That is enough.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "What is the speaker doing?",
        instructions: "Match each phrase to its function. There is one extra function you do not need.",
        left: [
          "As far as I'm concerned,",
          "I agree up to a point, but",
          "I'm not totally convinced that",
          "The main reason is that",
          "Take my neighbour, for instance.",
          "So, all in all,",
        ],
        right: [
          "giving a reason",
          "concluding",
          "giving an opinion",
          "asking for clarification",
          "introducing an example",
          "disagreeing politely",
          "partly agreeing",
        ],
        answer: [2, 6, 5, 0, 4, 1],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "order",
        title: "Build the answer",
        instructions: "Question: “Is it a good idea for children to learn to cook at school?” Put the parts of the answer in a logical order.",
        mode: "lines",
        items: [
          "I'm fairly convinced that it's a great idea, especially for teenagers.",
          "The main reason is that cooking is a basic life skill, and lots of young people leave home without it.",
          "A good example of this is my flatmate at university, who lived on instant noodles for the whole first term.",
          "If he'd had a few cooking lessons at school, he would have eaten much better and saved money too.",
          "So, all in all, I think every school should offer at least a short cooking course.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "TOEFL: Take an Interview",
        instructions: "You will not have preparation time. Answer the interviewer's question as if in a real conversation. Speak for about 45 seconds.",
        prompt:
          "Interviewer: Thanks for taking part in our study about how people learn. Some universities now record all their lectures and put them online, so students don't have to attend in person. Do you think this is a good idea? Why or why not?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "It's a good idea up to a point, but I don't think recordings should replace going to class. The main reason is that they're brilliant for reviewing. If you miss something, you can listen again. The problem is that a lot of students stop going if everything's online. Take my friend Leo, for instance. All his economics lectures were recorded, so he planned to watch them later, and of course he never did. He ended up cramming the week before the exam. So, all in all, recordings are a great extra, but students still need the routine of being there.",
        targetPhrases: ["up to a point", "the main reason is", "for instance", "all in all"],
        checklist: [
          "I gave my opinion in the first one or two sentences.",
          "I gave at least one clear reason.",
          "My example was specific: a real person, place, time or result.",
          "I used at least two phrases from this lesson.",
          "I finished with a short conclusion before the time ran out.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "TOEIC: Express an opinion",
        instructions: "You have 45 seconds to prepare and 60 seconds to speak. Use the O-R-E-C pattern and try to include two reasons.",
        prompt:
          "Do you agree or disagree with the following statement? “It is better to buy a few expensive, high-quality items than many cheap ones.” Give specific reasons and examples to support your opinion.",
        prepSeconds: 45,
        speakSeconds: 60,
        modelAnswer:
          "Personally, I agree with that statement, especially when it comes to things you use every day. For one thing, high-quality items usually last much longer, so in the end cheap ones don't really save you money. A good example of this is shoes. I used to buy cheap trainers, and they fell apart every few months. Then I spent quite a lot on one good pair of walking shoes, and I'm still wearing them two years later. On top of that, buying fewer things is better for the environment, because less ends up in landfill. Of course, there are exceptions: if you're on a really tight budget, cheap might be the only option. But for most people, it's worth paying more for fewer, better things, and that's why I agree.",
        targetPhrases: ["personally", "for one thing", "a good example of this is", "on top of that", "that's why"],
        checklist: [
          "I clearly said whether I agree or disagree.",
          "I gave two reasons, and at least one had a specific example.",
          "I mentioned an exception or the other side briefly.",
          "I linked my ideas with phrases like “for one thing” and “on top of that”.",
          "I spoke for most of the 60 seconds without long pauses.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toefl",
      body: "In **Take an Interview** you answer several questions from an interviewer on one topic, with about 45 seconds for each answer and no preparation time. Start with your opinion straight away, then use the rest of the time for one well-developed reason and example. If you finish early, add a short “so for me…” conclusion rather than stopping in silence.",
    },
    {
      exam: "toeic",
      body: "In **Express an opinion** you get 45 seconds to prepare and 60 seconds to speak. Use the preparation time to plan key words, not full sentences: your position, two reasons and one example. Raters judge the relevance and completeness of what you say as well as your language, so a clear opinion with relevant support is worth more than complex vocabulary you are unsure of.",
    },
    {
      exam: "ielts",
      body: "The same O-R-E-C pattern works for IELTS Speaking Part 3. The only difference is that Part 3 answers usually discuss people in general, so use examples from society as well as from your own life.",
    },
  ],
  vocabulary: [
    { word: "as far as I'm concerned", meaning: "in my opinion (used to give a personal view firmly)", example: "As far as I'm concerned, the new timetable is much better.", topic: "everyday" },
    { word: "up to a point", meaning: "partly, but not completely", example: "I agree with you up to a point, but the cost is a real problem.", topic: "everyday" },
    { word: "first-hand", meaning: "from your own direct experience", example: "I saw first-hand how stressful the job can be.", topic: "everyday" },
    { word: "flexible hours", meaning: "a system where workers can choose when they start and finish", example: "Flexible hours make it easier for parents to collect their children.", topic: "work" },
    { word: "rush hour", meaning: "the busy time when most people travel to or from work", example: "I try to avoid driving during the rush hour.", topic: "travel" },
    { word: "cram", meaning: "to study a lot in a very short time before an exam", example: "He crammed for the test the night before.", topic: "education" },
    { word: "fall apart", meaning: "to break into pieces because of poor quality or age", example: "My cheap umbrella fell apart after one storm.", topic: "everyday" },
    { word: "landfill", meaning: "a place where rubbish is buried in the ground", example: "Millions of old phones end up in landfill.", topic: "environment" },
    { word: "life skill", meaning: "a practical ability you need in everyday adult life", example: "Managing money is an important life skill.", topic: "education" },
    { word: "exception", meaning: "a person or thing that a general statement does not include", example: "Most shops close at six, but the supermarket is an exception.", topic: "everyday" },
  ],
  keyPoints: [
    "Say what you think in your first sentence, then support it.",
    "Use O-R-E-C: Opinion, Reason, Example, Conclude.",
    "Specific examples (a person, a time, a result) are far more convincing than general statements.",
    "Partial agreement and a short mention of the other side make your answer sound mature.",
    "End with a short conclusion so the listener knows you have finished.",
  ],
};

export default lesson;
