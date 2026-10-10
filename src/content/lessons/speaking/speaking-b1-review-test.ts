import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-b1-review-test",
  title: "B1 speaking review test",
  summary:
    "Review the whole B1 speaking course in one timed test: IELTS Part 1 questions, TOEFL Listen and Repeat and Take an Interview, and three TOEIC Speaking tasks, with model answers and checklists.",
  skill: "speaking",
  level: "B1",
  order: 12,
  minutes: 35,
  exams: [
    { exam: "ielts", task: "Speaking Part 1" },
    { exam: "toefl", task: "Speaking – Listen and Repeat" },
    { exam: "toefl", task: "Speaking – Take an Interview" },
    { exam: "toeic", task: "Speaking – Respond to questions" },
    { exam: "toeic", task: "Speaking – Respond to questions using information provided" },
    { exam: "toeic", task: "Speaking – Describe a picture" },
  ],
  objectives: [
    "Answer IELTS Part 1 questions in about 20–30 seconds with a direct answer and a reason or example",
    "Repeat campus sentences accurately, with natural stress and rhythm",
    "Answer TOEFL and TOEIC questions within the real time limits",
    "Find your strongest and weakest areas and choose which lessons to review",
  ],
  warmUp: [
    "Which lesson in this course helped you most? What do you still find difficult when you speak English?",
  ],
  learn: [
    {
      type: "text",
      title: "How to do this review test",
      body: "This test reviews all eleven lessons of the B1 speaking course. Do it **in one sitting**, in a quiet place, and record every answer.\n\n- Don't pause the timer or start an answer again. In the real test you can't.\n- Don't read the model answers until you have finished a whole section.\n- After each section, listen to your recordings and tick the checklist. Then compare with the model answer.\n\nThe model answers show one good way to answer, not the only way. Your ideas can be different. What matters is that you answer the question, give a reason or an example, and keep speaking until the time ends.",
    },
    {
      type: "table",
      title: "What's in the test",
      headers: ["Section", "Tasks", "Preparation", "Speaking time", "Lessons to review"],
      rows: [
        ["Part A: Quick checks", "3 short exercises", "None", "None", "All lessons"],
        ["IELTS Part 1", "4 questions about friends", "None", "About 20–30 seconds each", "Talking about yourself; Daily routine and free time; Talking about past experiences; Simple opinions with reasons"],
        ["TOEFL Listen and Repeat", "7 sentences", "None", "About 8–12 seconds each", "Listen and repeat; Sentence stress and rhythm"],
        ["TOEFL Take an Interview", "1 question", "None", "45 seconds", "Simple opinions with reasons"],
        ["TOEIC Respond to questions", "3 questions about parks", "About 3 seconds", "15, 15 and 30 seconds", "Simple opinions with reasons; Describing your home and hometown"],
        ["TOEIC Respond to questions using information provided", "3 questions about a timetable", "45 seconds to read, then about 3 seconds", "15, 15 and 30 seconds", "Answering from a schedule"],
        ["TOEIC Describe a picture", "1 picture", "45 seconds", "30 seconds", "Describing a picture"],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Part A1: know the tasks",
        instructions: "Choose the best answer. These questions review the test formats and strategies from the course.",
        questions: [
          {
            prompt: "How long should a typical IELTS Speaking Part 1 answer be?",
            options: [
              "One or two words, because the examiner has many questions",
              "About 20–30 seconds: a direct answer plus a reason, an example or a detail",
              "About two minutes, like a Part 2 talk",
            ],
            answer: 1,
            explanation: "Part 1 questions are about familiar topics. Answer directly, add one or two details, then stop.",
          },
          {
            prompt: "In TOEIC Describe a picture, how much time do you have?",
            options: [
              "45 seconds to prepare and 30 seconds to speak",
              "No preparation and 15 seconds to speak",
              "1 minute to prepare and 2 minutes to speak",
            ],
            answer: 0,
            explanation: "You have 45 seconds to prepare and 30 seconds to describe the photo, so focus on the place, the main people and their actions.",
          },
          {
            prompt: "In IELTS Part 1, you hear the question again but you still aren't sure what one word means. What is the best thing to do?",
            options: [
              "Say nothing and wait for the next question.",
              "Ask the examiner to explain the word in different words.",
              "Say what you think it means and answer: “If you mean…, then…”.",
            ],
            answer: 2,
            explanation: "In Part 1 the examiner can repeat the question but normally won't explain it. Showing your understanding and answering keeps the conversation going.",
          },
          {
            prompt: "In TOEFL Listen and Repeat, how many times do you hear each sentence?",
            options: ["Once", "Twice", "As many times as you want"],
            answer: 0,
            explanation: "You hear each sentence once and repeat it straight away, so listen for the meaning and the stressed words.",
          },
          {
            prompt: "In TOEIC Respond to questions using information provided, a caller says something that is wrong. What should you do?",
            options: [
              "Agree with the caller, because the customer is always right.",
              "Correct the information politely: “Actually, I'm afraid…”.",
              "Read the whole schedule aloud from the beginning.",
            ],
            answer: 1,
            explanation: "Sometimes the caller has the wrong information. Correct it politely and give the right information from the document.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Part A2: language check",
        instructions: "Complete each sentence with a word or phrase from the box. Use each one once. There are three extra words you don't need.",
        text: "1. When I was a child, I {{0}} play football every day after school.\n2. I {{1}} been to Japan, but I'd love to go one day.\n3. I prefer studying in the library {{2}} it's quiet.\n4. I really like cooking. {{3}}, last night I made soup for my whole family.\n5. I'm tired tonight, so {{4}} stay at home than go out.\n6. {{5}} say that again, please?\n7. In the picture, a woman {{6}} at a desk and talking on the phone.\n8. The workshop isn't in the morning. It's {{7}} the afternoon, at two o'clock.",
        answers: [
          ["used to"],
          ["have never", "'ve never"],
          ["because"],
          ["For example"],
          ["I'd rather"],
          ["Sorry, could you", "Sorry, can you", "Could you", "Can you"],
          ["is sitting"],
          ["in"],
        ],
        wordBank: ["used to", "have never", "because", "For example", "I'd rather", "Sorry, could you", "is sitting", "in", "so", "sits", "on"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Part A3: stress and pausing",
        instructions: "Say each word or sentence aloud before you choose.",
        questions: [
          {
            prompt: "Which syllable is stressed in “restaurant”?",
            options: ["RES-taurant", "res-TAU-rant", "restau-RANT"],
            answer: 0,
            explanation: "Restaurant is stressed on the first syllable: RES-tuh-ront.",
          },
          {
            prompt: "Which syllable is stressed in “important”?",
            options: ["IM-portant", "im-POR-tant", "impor-TANT"],
            answer: 1,
            explanation: "The stress is on the second syllable: im-POR-tant.",
          },
          {
            prompt: "A: “Is your English class on Monday?” B: “No, it's on Wednesday.” Which word in B's answer gets the strongest stress?",
            options: ["it's", "on", "Wednesday"],
            answer: 2,
            explanation: "Wednesday is the new, corrected information, so it gets the main stress.",
          },
          {
            prompt: "In “I can't come tomorrow”, how is “can't” usually said?",
            options: [
              "Weak and short, like “kn”",
              "Strong and clear, because it is negative",
              "It isn't said at all",
            ],
            answer: 1,
            explanation: "Negatives are content words, so can't is stressed. Positive can is usually weak: I kn come.",
          },
          {
            prompt: "Where is the most natural place to pause? “When I finish work I usually go to the gym.”",
            options: [
              "After “When I”",
              "After “I usually go”",
              "After “When I finish work”",
            ],
            answer: 2,
            explanation: "Pause between the two parts of the sentence: When I finish work | I usually go to the gym.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "table",
      title: "Check your recordings: the four IELTS criteria in simple words",
      headers: ["Criterion", "Ask yourself", "Lessons that help"],
      rows: [
        ["Fluency and Coherence", "Did I keep going without long silences? Did I link ideas with words like because, but, so and for example?", "Simple opinions with reasons; Asking for help and clarifying"],
        ["Lexical Resource", "Did I use words for my topic, not only good, nice and bad? When I didn't know a word, did I explain it another way?", "Daily routine and free time; Describing your home and hometown"],
        ["Grammatical Range and Accuracy", "Did I use the right tense: present simple for habits, past simple for finished events, present continuous for a picture?", "Talking about past experiences; Describing a picture"],
        ["Pronunciation", "Were my word stress and sentence stress clear? Did I pause between groups of words, not in the middle of them?", "Pronunciation basics; Sentence stress and rhythm"],
      ],
    },
    {
      type: "text",
      title: "How a strong B1 candidate approaches the test",
      body: "The public IELTS band descriptors describe a band 6 speaker as “able to keep going and demonstrates a willingness to produce long turns”. Band 6 is above B1, but it is a good goal to work towards: keep talking, even if your English isn't perfect.\n\n- **IELTS Part 1:** a direct answer first (*Just a few close ones, really.*), then one or two details or a reason, then stop.\n- **Listen and Repeat:** listen for the meaning and the stressed words, then repeat the whole sentence with the same rhythm.\n- **TOEFL interview:** start at once with your answer, give a reason and a short example, and finish with one sentence that sums up.\n- **TOEIC information questions:** find the answer in the table, then say it in a full, polite sentence. Don't read the table aloud word for word.\n- **TOEIC picture:** the place first, then the people and what they are doing, then a guess (*It looks like…*).",
    },
  ],
  practice: [
    {
      type: "text",
      title: "IELTS Speaking Part 1: Interview",
      body: "The examiner will ask you about **friends**. There is no preparation time. Answer each question in about **20–30 seconds**: a direct answer, then a reason, an example or a detail.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "Part 1, question 1",
        prompt: "Let's talk about friends. Do you have a lot of friends, or just a few close ones?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Just a few close ones, really. I know lots of people from work and from my English class, but there are only three or four friends I can talk to about anything. I've known most of them since secondary school, so we have a lot of shared memories. For me, that's much more important than having a big group of friends who don't really know me.",
        targetPhrases: ["just a few", "I've known… since", "shared memories", "for me"],
        checklist: [
          "My first sentence answered the question directly.",
          "I added a reason or a detail.",
          "I used the present perfect correctly (I've known them since…).",
          "I spoke for about 20–30 seconds and then stopped.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "Part 1, question 2",
        prompt: "Where do you usually meet your friends?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "We usually meet at a small, friendly café near the city centre, because it's halfway between our homes. It's quite cheap, and the staff don't mind if we stay for hours. In summer we sometimes go to the park instead and have a picnic by the river. And when someone has a birthday, we normally go out for dinner together, usually somewhere a bit special.",
        targetPhrases: ["we usually", "halfway between", "sometimes… instead", "normally"],
        checklist: [
          "I used the present simple for habits (we usually meet, we go).",
          "I used words for how often (usually, sometimes, normally).",
          "I gave a reason with because.",
          "My answer sounded natural, not like a list.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex6",
        kind: "speak",
        title: "Part 1, question 3",
        prompt: "Did you have a best friend when you were a child?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Yes, I did. Her name was Mia, and she lived in the flat next to ours. We used to walk to school together every morning, and after school we played outside until our parents called us in for dinner. Sadly, her family moved to another city when we were eleven, but we still send each other messages on our birthdays, and we met up again last year.",
        targetPhrases: ["used to", "after school", "sadly", "we still"],
        checklist: [
          "I used past tenses correctly (was, lived, played, moved).",
          "I used used to for a past habit.",
          "I gave a detail or a short story, not only “yes”.",
          "I connected the past to now at the end (we still…).",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex7",
        kind: "speak",
        title: "Part 1, question 4",
        prompt: "Do you think it's easy for adults to make new friends? Why or why not?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Not really, to be honest. At school you see the same people every day, so friendships just happen. But adults are often busy with work and family, so they don't have much free time. In my opinion, the best way is to join a club or a class, like a sports team or a dance class, because then you meet people who enjoy the same things.",
        targetPhrases: ["to be honest", "in my opinion", "the best way is", "because"],
        checklist: [
          "I gave my opinion in the first sentence.",
          "I explained why with a clear reason.",
          "I gave an example or a suggestion.",
          "I finished in about 30 seconds.",
        ],
      },
    },
    {
      type: "text",
      title: "TOEFL Speaking: Listen and Repeat",
      body: "You have just started a part-time job at the university sports centre. Your manager is showing you around. Listen to each sentence **once**, then repeat it exactly. In the real test you have about 8–12 seconds to repeat each sentence, and the sentences get longer.\n\nTry to repeat each sentence **without reading it**: cover the text or look away from the screen.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex8",
        kind: "shadow",
        voice: "us",
        title: "Listen and Repeat: the sports centre",
        instructions: "Listen once, then record yourself. Keep the stressed words strong and the small words (to, the, at, of) weak. Don't stop in the middle of a group of words.",
        sentences: [
          "Welcome to the sports centre.",
          "The main gym is on the first floor.",
          "Please check every student's card at the door.",
          "Clean towels are kept in the cupboard behind the desk.",
          "If someone forgets their card, ask them to show some photo ID.",
          "The swimming pool closes at eight, but the gym stays open until ten.",
          "Before you leave tonight, make sure all the lights in the changing rooms are switched off.",
        ],
      },
    },
    {
      type: "text",
      title: "TOEFL Speaking: Take an Interview",
      body: "An interviewer is asking students about their study habits. There is **no preparation time**. Start answering straight away and speak for **45 seconds**: your answer, a reason, an example and a short conclusion.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex9",
        kind: "speak",
        title: "TOEFL interview question",
        prompt: "Interviewer: We're doing a survey about where students study. Do you prefer to study at home or in the library? Why?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "I prefer to study in the library, mainly because I can concentrate much better there. At home there are too many distractions. My family is always talking, the TV is on, and I'm tempted to check my phone or lie on the sofa. In the library, everyone around me is working, so I feel I should work too. For example, last month I had an important exam, and I went to the library every afternoon for two weeks. I studied for three hours at a time, which I never manage at home. So for me, the library is definitely the better choice.",
        targetPhrases: ["I prefer… mainly because", "too many distractions", "for example", "so for me"],
        checklist: [
          "I answered the question in my first sentence.",
          "I gave a clear reason and explained it.",
          "I gave a real example from my life, using the past simple.",
          "I finished with a short conclusion before 45 seconds.",
        ],
      },
    },
    {
      type: "text",
      title: "TOEIC Speaking: Respond to questions (questions 5–7)",
      body: "Imagine that a local newspaper is doing research in your area. You have agreed to take part in a telephone interview about **parks**. You have about 3 seconds before each answer. You have **15 seconds** for questions 5 and 6 and **30 seconds** for question 7.",
    },
    {
      type: "audio",
      title: "Question 5 (15 seconds)",
      voice: "us",
      cast: { narrator: "female" },
      transcript: "How often do you go to a park, and who do you usually go with?",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex10",
        kind: "speak",
        title: "Question 5: how often and who with",
        prompt: "How often do you go to a park, and who do you usually go with?",
        prepSeconds: 3,
        speakSeconds: 15,
        modelAnswer:
          "I go to a park about once a week, usually on Sunday mornings. I normally go with my sister, and we walk around the lake and then have a coffee at the little café there.",
        targetPhrases: ["about once a week", "usually", "I normally go with"],
        checklist: [
          "I answered both parts of the question: how often and who with.",
          "I used full sentences, not just “once a week”.",
          "I finished within 15 seconds.",
        ],
      },
    },
    {
      type: "audio",
      title: "Question 6 (15 seconds)",
      voice: "us",
      cast: { narrator: "female" },
      transcript: "Is there a park near your home, and how do you get there?",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex11",
        kind: "speak",
        title: "Question 6: near your home",
        prompt: "Is there a park near your home, and how do you get there?",
        prepSeconds: 3,
        speakSeconds: 15,
        modelAnswer:
          "Yes, there's a small park about ten minutes from my home. I usually walk there, because it's close and there isn't much parking nearby. Sometimes I cycle there if I'm in a hurry or it's sunny.",
        targetPhrases: ["there's a… about ten minutes from", "I usually walk", "because"],
        checklist: [
          "I answered both parts of the question.",
          "I gave a reason with because.",
          "I spoke clearly and finished within 15 seconds.",
        ],
      },
    },
    {
      type: "audio",
      title: "Question 7 (30 seconds)",
      voice: "us",
      cast: { narrator: "female" },
      transcript: "What would make the parks in your area better? Why?",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex12",
        kind: "speak",
        title: "Question 7: your opinion",
        prompt: "What would make the parks in your area better? Why?",
        prepSeconds: 3,
        speakSeconds: 30,
        modelAnswer:
          "I think the parks in my area would be much better with more benches and more trees. At the moment there are only a few places to sit, so older people can't stay very long. More trees would also give shade in summer, when it gets really hot. Another good idea would be a small playground, because lots of young families live near me and their children have nowhere to play.",
        targetPhrases: ["I think… would be much better with", "at the moment", "another good idea would be"],
        checklist: [
          "I gave at least two ideas.",
          "I explained why each idea would help.",
          "I used would to talk about something that isn't real yet.",
          "I kept speaking for most of the 30 seconds.",
        ],
      },
    },
    {
      type: "text",
      title: "TOEIC Speaking: Respond to questions using information provided (questions 8–10)",
      body: "1. Read the timetable below for **45 seconds**. Use a timer.\n2. Before each task, play the question. In the real test you only hear it, so try not to read it first.\n3. You have about 3 seconds before you speak, then 15 or 30 seconds to answer. You work at the community centre and the caller is a customer, so be polite and helpful.",
    },
    {
      type: "table",
      title: "Riverside Community Centre · Cooking classes · March",
      headers: ["Class", "Day and time", "Teacher", "Price"],
      rows: [
        ["Easy family meals", "Mondays, 6:00–8:00 p.m.", "Ana Lopez", "$40"],
        ["Baking bread", "Wednesdays, 10:00 a.m.–12:00 p.m.", "Sam Kerr", "$45"],
        ["Healthy lunches for work", "Thursdays, 6:30–8:00 p.m.", "Ana Lopez", "$35"],
        ["Cakes for beginners", "Saturdays, 9:00–11:00 a.m.", "Joy Park", "$50 (FULL)"],
        ["Note", "All classes run for four weeks. Prices include all ingredients. Please bring an apron.", "", ""],
      ],
    },
    {
      type: "audio",
      title: "Question 8 (15 seconds)",
      voice: "us",
      cast: { narrator: "male" },
      transcript:
        "Hi, I'm interested in your cooking classes in March. How long do the classes run, and do I need to buy my own ingredients?",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex13",
        kind: "speak",
        title: "Question 8: find the details",
        prompt: "“How long do the classes run, and do I need to buy my own ingredients?”",
        prepSeconds: 3,
        speakSeconds: 15,
        modelAnswer:
          "All of our classes run for four weeks, and you don't need to buy any ingredients, because they're included in the price. The only thing you need to bring with you is an apron.",
        targetPhrases: ["all of our classes", "they're included in the price", "the only thing you need to bring"],
        checklist: [
          "I answered both questions: how long and the ingredients.",
          "I found the answer in the note at the bottom of the table.",
          "I spoke in full, polite sentences.",
        ],
      },
    },
    {
      type: "audio",
      title: "Question 9 (15 seconds)",
      voice: "us",
      cast: { narrator: "male" },
      transcript: "I'd really like to join the cake class on Saturday morning. I can still sign up for that, right?",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex14",
        kind: "speak",
        title: "Question 9: correct the caller politely",
        prompt: "“I'd really like to join the cake class on Saturday morning. I can still sign up for that, right?”",
        prepSeconds: 3,
        speakSeconds: 15,
        modelAnswer:
          "Cakes for Beginners is on Saturday mornings, from nine to eleven, but I'm afraid that class is already full. If you're free on Wednesday mornings, you could try Baking Bread with Sam Kerr instead.",
        targetPhrases: ["I'm afraid", "already full", "you could try… instead"],
        checklist: [
          "I noticed the problem: the class is full.",
          "I gave the bad news politely (I'm afraid…, I'm sorry, but…).",
          "I suggested another class.",
        ],
      },
    },
    {
      type: "audio",
      title: "Question 10 (30 seconds)",
      voice: "us",
      cast: { narrator: "male" },
      transcript:
        "I work during the day, so I can only come in the evenings. Could you tell me about all the classes that are in the evening?",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex15",
        kind: "speak",
        title: "Question 10: list the details",
        prompt: "“I work during the day, so I can only come in the evenings. Could you tell me about all the classes that are in the evening?”",
        prepSeconds: 3,
        speakSeconds: 30,
        modelAnswer:
          "Sure. There are two evening classes. The first one is Easy Family Meals, on Mondays from six to eight p.m. It's taught by Ana Lopez, and it costs forty dollars. The second one is Healthy Lunches for Work, on Thursdays from six thirty to eight. Ana Lopez teaches that one too, and it costs thirty-five dollars. Both classes run for four weeks.",
        targetPhrases: ["there are two", "the first one is", "the second one is", "it costs"],
        checklist: [
          "I found both evening classes.",
          "I gave the day, time, teacher and price for each one.",
          "I organised my answer with “the first one… the second one…”.",
          "I said the times and prices clearly, not as symbols.",
        ],
      },
    },
    {
      type: "text",
      title: "TOEIC Speaking: Describe a picture",
      body: "You described this picture in the lesson *Describing a picture*. This time, do it as a **progress check** under test conditions: 45 seconds to prepare and 30 seconds to speak. Afterwards, compare this recording with your first one. Is it clearer, smoother and more complete?",
    },
    {
      type: "image",
      src: "/images/speaking-describing-a-picture-office.svg",
      alt: "A simple drawing of an office. On the left, a man in a dark blue jacket is standing next to a whiteboard and pointing at a bar chart. The chart has three blue bars that get taller from left to right. In the middle, three colleagues are sitting behind a long wooden meeting table and listening to him. The woman on the left has a laptop open in front of her, the man in the middle has some papers, and the woman on the right has a coffee mug. On the right, a woman in an orange top is sitting at a separate desk with a computer and talking on the phone. Behind her, a large window shows tall city buildings. A clock on the wall shows ten o'clock, and there is a plant in a pot in the left corner.",
      caption: "Describe this picture.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex16",
        kind: "speak",
        title: "TOEIC Describe a picture: progress check",
        prompt: "Describe the picture in as much detail as you can.",
        prepSeconds: 45,
        speakSeconds: 30,
        modelAnswer:
          "This picture shows a meeting in a modern office, probably in the morning. On the left, a man in a dark jacket is giving a presentation. He's pointing at a chart on the whiteboard. In the middle, three colleagues are sitting at a long table and listening to him. On the right, a woman is sitting at her desk and making a phone call. It looks like a busy working day.",
        targetPhrases: ["This picture shows", "On the left", "In the middle", "On the right", "It looks like"],
        checklist: [
          "My first sentence said what kind of place it is.",
          "I described the main people and actions in the present continuous.",
          "I used position words to organise my description.",
          "I ended with a guess or an impression.",
          "This recording was better than my first one in at least one way.",
        ],
      },
    },
    {
      type: "table",
      title: "After the test: what to review",
      headers: ["If this was difficult…", "…review this lesson"],
      rows: [
        ["My Part 1 answers were too short, or I stopped after one sentence", "Talking about yourself; Daily routine and free time"],
        ["I made mistakes with past tenses or used to", "Talking about past experiences"],
        ["I couldn't give a clear reason or example quickly", "Simple opinions with reasons"],
        ["I didn't understand a question and didn't know what to say", "Asking for help and clarifying"],
        ["I forgot words in the long Listen and Repeat sentences", "Listen and repeat; Sentence stress and rhythm"],
        ["I read the timetable aloud instead of answering the question", "Answering from a schedule"],
        ["My picture description was a list of objects", "Describing a picture"],
        ["Some words were hard to understand in my recording", "Pronunciation basics"],
      ],
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In Part 1, the examiner may stop you and move to the next question. This is normal and doesn't mean your answer was bad. Aim for about 20–30 seconds: a direct answer, then a reason, an example or a detail.",
    },
    {
      exam: "toefl",
      body: "In **Take an Interview** you have no preparation time and 45 seconds for each answer. Start straight away with your answer, then give a reason and an example. A short conclusion (*So for me…*) shows that you planned your time.",
    },
    {
      exam: "toeic",
      body: "In **Respond to questions using information provided**, you can see the document while you answer. Use the 45 seconds of reading time to check the title, times, prices and notes, such as *FULL* or *CANCELLED*. These small notes are often used in the questions.",
    },
  ],
  vocabulary: [
    { word: "close friend", meaning: "a friend you know very well and trust", example: "I only told my close friends about the new job.", topic: "everyday" },
    { word: "shared memories", meaning: "things that you and another person remember doing together", example: "Old photos remind us of our shared memories.", topic: "everyday" },
    { word: "halfway", meaning: "in the middle, at an equal distance from two places", example: "The café is halfway between my home and the station.", topic: "everyday" },
    { word: "distraction", meaning: "something that stops you thinking about what you are doing", example: "My phone is the biggest distraction when I study.", topic: "education" },
    { word: "concentrate", meaning: "to give all your attention to something", example: "I can't concentrate when the TV is on.", topic: "education" },
    { word: "be tempted to", meaning: "to want to do something, often something you shouldn't do", example: "I was tempted to stay in bed all morning.", topic: "everyday" },
    { word: "shade", meaning: "an area that is cooler and darker because the sun can't reach it", example: "We sat in the shade of a big tree.", topic: "environment" },
    { word: "ingredients", meaning: "the foods you use to make a dish", example: "You only need four ingredients for this cake.", topic: "everyday" },
    { word: "sign up for", meaning: "to put your name on a list to join a class or activity", example: "I've signed up for a Spanish class.", topic: "education" },
    { word: "full", meaning: "(of a class or event) with no places left", example: "Sorry, the Saturday class is full.", topic: "everyday" },
    { word: "give a presentation", meaning: "to talk to a group of people about a subject, often with pictures or charts", example: "She's giving a presentation to her team.", topic: "work" },
  ],
  keyPoints: [
    "Do review tests in one sitting, record every answer, and check your recordings before you read the model answers.",
    "IELTS Part 1: a direct answer plus a reason, an example or a detail, in about 20–30 seconds.",
    "TOEFL: repeat each Listen and Repeat sentence with the same stress and rhythm; in Take an Interview, start at once and use the full 45 seconds.",
    "TOEIC: answer every part of each question, correct wrong information politely, and describe pictures in the present continuous.",
    "Use the table at the end to choose two or three lessons to review before you start the B2 course.",
  ],
};

export default lesson;
