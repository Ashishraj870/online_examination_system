// ─── Auth Context ─────────────────────────────────────────────────────────────
// Depends on: React (global), LS (storage.js)

const { createContext, useContext } = React;

const AuthCtx = createContext(null);

function useAuth() {
  return useContext(AuthCtx);
}
