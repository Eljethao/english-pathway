import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-charts-timetables-forms",
  title: "Timetables, tables and forms",
  summary:
    "Read timetables, price lists and forms quickly and accurately: use headings, rows and columns, check symbols and notes, and move information from an email to a form.",
  skill: "reading",
  level: "B1",
  order: 7,
  minutes: 25,
  exams: [
    { exam: "toeic", task: "Reading Part 7 – Reading Comprehension" },
    { exam: "toefl", task: "Reading – Read in Daily Life" },
    { exam: "ielts", task: "Reading – Short-answer questions" },
  ],
  objectives: [
    "Find information in a timetable or table by reading across a row and down a column",
    "Use symbols, notes and abbreviations to check an answer",
    "Understand form instructions such as BLOCK CAPITALS, date formats and required fields",
    "Compare a form with an email and find information that does not match",
  ],
  warmUp: [
    "When did you last read a timetable (bus, train, school or TV)? What information did you need?",
    "What information do forms usually ask for? Make a list (for example, *date of birth*).",
  ],
  learn: [
    {
      type: "text",
      title: "Reading information in boxes",
      body: "Timetables, price lists and tables don't have paragraphs. The information is in **rows** (across) and **columns** (down). You don't read them from beginning to end. You **find the right row, find the right column, and read the box where they meet**.\n\nBefore you answer any questions, spend 20–30 seconds on the layout:\n\n1. Read the **title**: what is the table about?\n2. Read the **column headings** and the **row labels**.\n3. Check the **units**: minutes or hours? Per person or per family?\n4. Look for **symbols and notes**, such as † or ‡, and read the small print under the table. Many exam questions depend on these notes.",
    },
    {
      type: "table",
      title: "Common abbreviations in timetables and forms",
      headers: ["Abbreviation", "Meaning"],
      rows: [
        ["dep. / arr.", "departs / arrives"],
        ["Mon–Fri", "Monday to Friday (weekdays)"],
        ["approx.", "approximately (about)"],
        ["incl. / excl.", "including / excluding (not including)"],
        ["N/A", "not applicable (this does not apply to you), or not available"],
        ["DOB", "date of birth"],
        ["ext.", "extension (a phone number inside a company)"],
        ["no.", "number"],
      ],
    },
    {
      type: "text",
      title: "Forms",
      body: "Forms ask for information in **fields**: boxes with labels. Read the instructions at the top. They often say things like:\n\n- *Please write in BLOCK CAPITALS* → use capital letters: ANNA SILVA.\n- *Fields marked ✱ are required* → you must complete them.\n- *Tick one box only.*\n- *Date format: DD/MM/YYYY* → day first, so 05/09/2026 is 5 September, not 9 May.\n- *For office use only* → do not write here. The organisation completes it.\n\nIn TOEIC Part 7, a form can appear together with an email or a notice. Some questions then check whether the details in the two texts match.",
    },
    {
      type: "tip",
      exam: "toeic",
      body: "When a Part 7 question mentions a time, a price or a date, find it in the table and read across the whole row. The answer may depend on a note under the table, such as *not on Fridays* or *booking required*.",
    },
  ],
  model: [
    {
      type: "table",
      title: "Lakeside Ferries: weekday timetable (Monday to Friday)",
      headers: ["Departs Northport", "Arrives Kessel Island", "Arrives Brook Bay", "Notes"],
      rows: [
        ["07:15", "07:50", "08:20", ""],
        ["09:30", "10:05", "10:35", "†"],
        ["12:00", "12:35", "—", "Kessel Island only"],
        ["14:45", "15:20", "15:50", "†"],
        ["17:30", "18:05", "18:35", "‡"],
      ],
    },
    {
      type: "passage",
      title: "Lakeside Ferries: notes and fares",
      paragraphs: [
        "† Bicycles are carried free of charge on these sailings only.",
        "‡ This sailing does not run on Fridays.",
        "Single fares: adults £6.50; children aged 5–15 £3.20; children under 5 travel free. A return ticket costs twice the single fare.",
        "Tickets can be bought on board, but passengers who book online save 10%.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader uses the timetable",
      body: "**Question:** Ana works on Kessel Island. On Wednesday she must arrive by 10:30. What is the latest ferry she can take from Northport?\n\nFind the column *Arrives Kessel Island*. 10:05 is before 10:30; 12:35 is too late. So she takes the ferry that leaves at **09:30**.\n\n**Question:** Can Tom take his bike on the 12:00 ferry?\n\nBikes are in the notes: only sailings marked † carry bicycles. The 12:00 has no †. **No.**\n\n**Question:** It's Friday. What is the last ferry to Brook Bay?\n\nThe 17:30 is marked ‡: *does not run on Fridays*. So the last one is the **14:45**.\n\n**Question:** How much is a return ticket, bought on board, for an adult and a four-year-old child?\n\nAdult single £6.50, so a return is £13.00. Children under 5 travel free. **£13.00.**\n\nNotice that three of the four questions needed the **notes**, not only the times. A strong reader always checks them.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Read the ferry timetable",
        instructions: "Use “Lakeside Ferries: weekday timetable (Monday to Friday)” and “Lakeside Ferries: notes and fares”. Choose the correct answer.",
        questions: [
          {
            prompt: "How long does the journey from Northport to Brook Bay take?",
            options: ["35 minutes", "30 minutes", "1 hour 5 minutes", "The timetable does not say."],
            answer: 2,
            explanation: "For example, the 07:15 arrives at Brook Bay at 08:20: that is 65 minutes. Every sailing to Brook Bay takes the same time.",
          },
          {
            prompt: "Which sailing does not go to Brook Bay?",
            options: ["07:15", "09:30", "12:00", "17:30"],
            answer: 2,
            explanation: "The 12:00 row has a dash (—) under Brook Bay, and the note says “Kessel Island only”.",
          },
          {
            prompt: "A family wants to take their bikes and arrive at Brook Bay before 11:00. Which ferry should they take?",
            options: ["07:15", "09:30", "12:00", "14:45"],
            answer: 1,
            explanation: "The 07:15 arrives earlier, but it has no † so it does not carry bikes. The 09:30 has † and arrives at Brook Bay at 10:35.",
          },
          {
            prompt: "How much is a single ticket for a 12-year-old?",
            options: ["Nothing", "£3.20", "£6.40", "£6.50"],
            answer: 1,
            explanation: "Children aged 5–15 pay £3.20 for a single. £6.40 would be a child's return ticket.",
          },
          {
            prompt: "How long is the journey from Kessel Island to Brook Bay?",
            options: ["30 minutes", "35 minutes", "65 minutes", "The timetable does not say."],
            answer: 0,
            explanation: "Read across one row: the 07:15 arrives at Kessel Island at 07:50 and at Brook Bay at 08:20. That is 30 minutes.",
          },
          {
            prompt: "What is the cheapest way for an adult to buy a return ticket?",
            options: ["On board, for £6.50", "On board, for £13.00", "Online, for £11.70", "Online, for £13.00"],
            answer: 2,
            explanation: "A return is twice the single fare (£13.00), and booking online saves 10%: £13.00 − £1.30 = £11.70.",
          },
        ],
      },
    },
    {
      type: "table",
      title: "Greenfield Language School: evening courses (autumn)",
      headers: ["Course", "Level", "Day and time", "Starts", "Weeks", "Fee"],
      rows: [
        ["Spanish for Travel", "Beginner", "Mon 18:30–20:00", "14 Sept", "10", "£150"],
        ["Business English", "Intermediate", "Tue 19:00–20:30", "15 Sept", "12", "£195 †"],
        ["Italian Conversation", "Intermediate", "Wed 18:00–19:30", "23 Sept", "8", "£120"],
        ["Japanese", "Beginner", "Thu 18:30–20:30", "17 Sept", "10", "£210 ‡"],
        ["French Grammar Review", "Advanced", "Thu 19:00–20:30", "17 Sept", "6", "£90"],
      ],
    },
    {
      type: "passage",
      title: "Greenfield Language School: fees and dates",
      paragraphs: [
        "† The fee includes the course book.",
        "‡ The fee includes the course book and online practice.",
        "Students and people over 65 get 15% off all course fees. Please show your student card or proof of age when you enrol.",
        "There are no classes in the week of 26 October (half-term).",
        "To enrol, complete the registration form and pay the full fee.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Short answers",
        instructions:
          "Use the course table and the notes. Answer the questions with NO MORE THAN THREE WORDS AND/OR A NUMBER.",
        text: "1. Which course has the most weeks? {{0}}\n2. On which day of the week is the Italian course? {{1}}\n3. Which beginner course costs the most? {{2}}\n4. How many weeks does the shortest course last? {{3}}\n5. What is included in the Business English fee? {{4}}\n6. What must students show to get 15% off? {{5}}\n7. There are no classes in the week of which date? {{6}}",
        answers: [
          ["Business English", "Business English course"],
          ["Wednesday", "Wednesdays", "Wed"],
          ["Japanese", "Japanese course"],
          ["6", "six", "6 weeks", "six weeks"],
          ["course book", "the course book", "a course book", "coursebook", "the coursebook"],
          ["student card", "their student card", "a student card", "your student card", "a student's card"],
          ["26 October", "26th October", "26th of October", "October 26", "October 26th", "26 Oct", "Oct 26", "26/10"],
        ],
      },
    },
    {
      type: "table",
      title: "Text 1: Greenfield registration form",
      headers: ["Field (write in BLOCK CAPITALS; ✱ = required)", "Entry"],
      rows: [
        ["Family name ✱", "OKONJO"],
        ["First name ✱", "AMARA"],
        ["Date of birth (DD/MM/YYYY) ✱", "04/11/1998"],
        ["Email ✱", "A.OKONJO@EXAMPLE.COM"],
        ["Phone", "07700 900 318"],
        ["Course and day ✱", "JAPANESE (THURSDAY)"],
        ["Level", "BEGINNER"],
        ["Student or over 65?", "YES – STUDENT CARD NO. 55102"],
        ["How did you hear about us?", "FROM A FRIEND"],
        ["Amount paid ✱", "£178.50 (CARD)"],
        ["For office use only", "Received 2 Sept – K.L."],
      ],
    },
    {
      type: "passage",
      title: "Text 2: Email from Amara",
      paragraphs: [
        "To: Karen Lewis, Greenfield Language School",
        "From: Amara Okonjo",
        "Subject: My registration – two problems",
        "Dear Ms Lewis,",
        "I sent my registration form for the Japanese course on Monday, but I have noticed a mistake. I wrote my date of birth with the month first, as we do in the country where I grew up. My birthday is on 11 April, so the date should be 11/04/1998.",
        "Also, I have just found out that I will have to work late on Thursdays this term. Could I move to a beginner course on a different evening? I would be happy to try Spanish instead. If it is cheaper, please refund the difference to my card.",
        "Best regards,",
        "Amara Okonjo",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "A form and an email",
        instructions:
          "Read Text 1 and Text 2. You will also need “Greenfield Language School: evening courses (autumn)” and the 15% discount in the notes.",
        questions: [
          {
            prompt: "What mistake did Amara make on the form?",
            options: ["She wrote her date of birth in the wrong order.", "She chose the wrong level.", "She paid the wrong amount.", "She forgot her student card number."],
            answer: 0,
            explanation: "Text 2: “I wrote my date of birth with the month first.” The form asks for DD/MM/YYYY: day first.",
          },
          {
            prompt: "What is Amara's real date of birth?",
            options: ["4 November 1998", "11 November 1998", "11 April 1998", "4 April 1998"],
            answer: 2,
            explanation: "“My birthday is on 11 April.” The school would read 04/11/1998 as 4 November, which is wrong.",
          },
          {
            prompt: "Why did Amara pay £178.50 and not £210?",
            options: ["She booked online.", "She paid by card.", "A friend told her about the school.", "She is a student."],
            answer: 3,
            explanation: "The form shows a student card number, and students get 15% off: £210 − £31.50 = £178.50.",
          },
          {
            prompt: "Why does Amara want to change course?",
            options: ["She finds Japanese too difficult.", "She will be working on Thursday evenings.", "The Spanish course is shorter.", "She wants a higher level."],
            answer: 1,
            explanation: "Text 2: “I will have to work late on Thursdays this term.” The Japanese course is on Thursdays.",
          },
          {
            prompt: "If Amara moves to Spanish for Travel, how much money should the school give back to her?",
            options: ["£22.50", "£51.00", "£60.00", "£127.50"],
            answer: 1,
            explanation: "Spanish costs £150, and with 15% off a student pays £127.50. She has paid £178.50, so the difference is £178.50 − £127.50 = £51.00. (£60.00 forgets the discount; £127.50 is the new price.)",
          },
          {
            prompt: "Who probably wrote “Received 2 Sept – K.L.” on the form?",
            options: ["Amara", "Amara's friend", "A member of the school's staff", "Amara's employer"],
            answer: 2,
            explanation: "It is in the box “For office use only”, which the school completes. K.L. may be Karen Lewis, but the important point is that it was written by school staff.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Email: booking at the Harbour Hotel",
      paragraphs: [
        "From: Daniel Ferreira",
        "To: Harbour Hotel reservations",
        "Subject: Booking in October",
        "Hello,",
        "I'd like to book a double room for my wife and me from Friday 16 October to Sunday 18 October, so two nights. We are driving from Leeds, so we will need a parking space, and we expect to arrive at about 9 pm.",
        "My wife doesn't eat meat or fish, so could you please make a note of that for breakfast?",
        "Please send the confirmation to my work email, d.ferreira@example.com, rather than my personal address. My mobile number is 07700 900 146.",
        "Many thanks,",
        "Daniel Ferreira",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "Complete the booking form",
        instructions:
          "You work at the hotel. Read Daniel's email and complete the booking form. Write ONE WORD AND/OR A NUMBER in each gap.",
        text: "HARBOUR HOTEL – BOOKING FORM\nSurname: {{0}}\nRoom type (single / double / family): {{1}}\nCheck-in date: Friday {{2}} October\nNumber of nights: {{3}}\nParking space needed (yes / no): {{4}}\nSpecial request: {{5}} breakfast for one guest\nExpected arrival time: about {{6}} pm\nSend confirmation to (work / personal) email: {{7}}",
        answers: [
          ["Ferreira"],
          ["double"],
          ["16", "16th", "sixteenth"],
          ["2", "two"],
          ["yes"],
          ["vegetarian", "veggie", "meat-free"],
          ["9", "nine", "9:00", "9.00"],
          ["work"],
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "Part 7 includes forms, schedules and price lists, sometimes together with an email. When two texts appear together, compare the details: a date, a price or a name that is different in the two texts is often what a question is about.",
    },
    {
      exam: "toefl",
      body: "Read in Daily Life uses short texts such as schedules and menus, each with two or three questions. Read the question first, then go straight to the right row and column. You don't need to read every box.",
    },
    {
      exam: "ielts",
      body: "General Training Reading begins with everyday texts such as notices, adverts and timetables. In short-answer questions, copy words and numbers exactly from the text and keep to the word limit.",
    },
  ],
  vocabulary: [
    { word: "timetable", meaning: "a list of the times when buses, trains, classes, etc. start or leave", example: "Check the timetable for the last bus home.", topic: "travel" },
    { word: "sailing", meaning: "a journey by ship or ferry that leaves at a particular time", example: "The 9.30 sailing was cancelled because of the wind.", topic: "travel" },
    { word: "fare", meaning: "the money you pay to travel by bus, train, plane or boat", example: "Children under five travel without paying a fare.", topic: "travel" },
    { word: "return (ticket)", meaning: "a ticket for a journey to a place and back again (British English)", example: "A return to the island costs £13.", topic: "travel" },
    { word: "on board", meaning: "on a ship, plane, train or bus", example: "You can buy snacks on board.", topic: "travel" },
    { word: "row", meaning: "a line of information that goes across a table", example: "Read across the row to find the price.", topic: "academic" },
    { word: "column", meaning: "a line of information that goes down a table", example: "The last column shows the arrival times.", topic: "academic" },
    { word: "enrol", meaning: "to officially join a course or school (US: enroll)", example: "I enrolled on an evening Spanish course.", topic: "education" },
    { word: "registration", meaning: "the act of putting your name on an official list, for example for a course", example: "Registration closes on Friday.", topic: "education" },
    { word: "block capitals", meaning: "capital letters written separately, LIKE THIS", example: "Please write your name in block capitals.", topic: "everyday" },
    { word: "required", meaning: "necessary; that you must give or do", example: "Fields marked with a star are required.", topic: "everyday" },
    { word: "half-term", meaning: "a short school holiday in the middle of a term (British English)", example: "We're going to the coast during half-term.", topic: "education" },
  ],
  keyPoints: [
    "Before answering, read the title, the column headings, the row labels and the units.",
    "Find the right row and the right column, and read the box where they meet.",
    "Always check symbols and notes under the table: they often change the answer.",
    "On forms, follow the instructions (BLOCK CAPITALS, date format, required fields) and check that the details match any other text.",
  ],
};

export default lesson;
