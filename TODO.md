# Fix AuthModal Export Error - TODO

## Steps:
- [x] 1. Fix src/components/AuthModal.jsx: Create proper modal component with Login/Register toggle, default export.
- [x] 2. Complete src/context/AuthContext.js: Add login, logout, init user from token.
- [x] 3. Update src/app/layout.js: Ensure AuthProvider wraps the app. (Already present ✅)
- [x] 4. Fix form API imports (LoginForm/RegisterForm): Refactored to use useAuth context ✅
- [ ] 5. Test: npm run build && npm run dev. Verify modal works.

**Progress: All steps 1-4 ✅. Now step 5 (test build/dev).**
