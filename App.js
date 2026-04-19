// ─── App Root ─────────────────────────────────────────────────────────────────
// Depends on: React (global), AuthCtx (AuthContext.js), LS (storage.js),
//             Navbar, LoginPage, StudentDashboard, ExamRoom, AdminDashboard

const { useState } = React;
const h = React.createElement;

function App() {
  const [user,       setUser]       = useState(() => LS.get('oex_current_user'));
  const [page,       setPage]       = useState(() => {
    const u = LS.get('oex_current_user');
    return u ? (u.role === 'admin' ? 'admin' : 'student') : 'login';
  });
  const [activeExam, setActiveExam] = useState(null);

  function login(u) {
    setUser(u);
    LS.set('oex_current_user', u);
    setPage(u.role === 'admin' ? 'admin' : 'student');
  }

  function logout() {
    setUser(null);
    LS.set('oex_current_user', null);
    setPage('login');
  }

  const auth = { user, login, logout };

  return h(AuthCtx.Provider, { value: auth },
    h('div', { style: { minHeight: '600px', background: '#0f172a' } },
      user && h(Navbar, { page, setPage }),

      page === 'login'
        ? h(LoginPage, { setPage })
        : page === 'student'
          ? h(StudentDashboard, { setPage, setActiveExam })
          : page === 'exam' && activeExam
            ? h(ExamRoom, { exam: activeExam, setPage })
            : page === 'admin'
              ? h(AdminDashboard)
              : h('div', { style: { padding: '2rem', color: '#94a3b8' } }, '404 - Page not found')
    )
  );
}

ReactDOM.render(h(App), document.getElementById('app'));
