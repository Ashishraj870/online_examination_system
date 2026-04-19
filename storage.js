// ─── Storage helpers ─────────────────────────────────────────────────────────
const LS = {
  get: (k) => { try { return JSON.parse(localStorage.getItem(k)) || null } catch { return null } },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v))
};

// ─── Seed default data ────────────────────────────────────────────────────────
function seedData() {
  if (LS.get('oex_seeded')) return;

  LS.set('oex_users', [
    { id: 'u1', name: 'Admin User',    email: 'admin@exam.com',   password: 'admin123', role: 'admin'   },
    { id: 'u2', name: 'Ashish Kumar',  email: 'student@exam.com', password: 'test123',  role: 'student' }
  ]);

  LS.set('oex_exams', [
    {
      id: 'e1', title: 'JavaScript Fundamentals', subject: 'Web Dev', duration: 10,
      questions: [
        { id: 'q1', text: 'Which keyword declares a block-scoped variable?',          opts: ['var','let','const','function'],      correct: 1 },
        { id: 'q2', text: 'What does typeof null return?',                            opts: ['null','undefined','object','string'], correct: 2 },
        { id: 'q3', text: 'Which method adds an element to the end of an array?',     opts: ['push()','pop()','shift()','unshift()'],correct: 0 },
        { id: 'q4', text: 'What is the output of 0.1 + 0.2 === 0.3 in JS?',          opts: ['true','false','NaN','undefined'],     correct: 1 },
        { id: 'q5', text: 'Which of these is NOT a JavaScript data type?',            opts: ['string','float','boolean','symbol'],  correct: 1 }
      ],
      createdAt: Date.now() - 86400000 * 3
    },
    {
      id: 'e2', title: 'Data Structures & Algorithms', subject: 'CS Core', duration: 15,
      questions: [
        { id: 'q6',  text: 'What is the time complexity of binary search?',           opts: ['O(n)','O(n²)','O(log n)','O(1)'],         correct: 2 },
        { id: 'q7',  text: 'Which data structure uses LIFO order?',                   opts: ['Queue','Stack','Heap','Tree'],             correct: 1 },
        { id: 'q8',  text: 'Which sorting algorithm has worst-case O(n log n)?',      opts: ['Bubble Sort','Quick Sort','Merge Sort','Selection Sort'], correct: 2 },
        { id: 'q9',  text: 'In a linked list, accessing an element by index is:',    opts: ['O(1)','O(log n)','O(n)','O(n²)'],         correct: 2 },
        { id: 'q10', text: 'Which tree is balanced by definition?',                   opts: ['BST','AVL Tree','Trie','Segment Tree'],    correct: 1 }
      ],
      createdAt: Date.now() - 86400000 * 2
    },
    {
      id: 'e3', title: 'Java OOP Concepts', subject: 'Java', duration: 12,
      questions: [
        { id: 'q11', text: 'Which pillar of OOP restricts direct access to object data?',   opts: ['Inheritance','Polymorphism','Encapsulation','Abstraction'], correct: 2 },
        { id: 'q12', text: 'What keyword prevents a class from being subclassed in Java?',  opts: ['static','final','abstract','sealed'],                      correct: 1 },
        { id: 'q13', text: 'Which of these is used to achieve runtime polymorphism?',       opts: ['Method overloading','Constructor overloading','Method overriding','Static binding'], correct: 2 },
        { id: 'q14', text: 'An interface in Java can have:',                                opts: ['Only abstract methods','Only default methods','Both abstract and default methods','Constructors'], correct: 2 },
        { id: 'q15', text: 'Which access modifier makes a member accessible only within its class?', opts: ['public','protected','default','private'], correct: 3 }
      ],
      createdAt: Date.now() - 86400000
    }
  ]);

  LS.set('oex_results', [
    {
      id: 'r1', userId: 'u2', examId: 'e1', score: 4, total: 5, pct: 80,
      answers: { q1: 1, q2: 2, q3: 0, q4: 0, q5: 1 },
      timeTaken: 420, submittedAt: Date.now() - 3600000
    }
  ]);

  LS.set('oex_seeded', true);
}

seedData();
