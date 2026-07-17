# Codex Working Instructions

## Required task header

Before analyzing or changing files for every new task, begin with:

Recommended model: [Luna | Terra | Sol]
Reasoning effort: [Low | Medium | High | Extra High]
Why: [one concise sentence]

Do not begin implementation before providing this header.

Use:

- Luna for small, mechanical, repetitive, or tightly scoped tasks.
- Terra for normal feature development, debugging, testing, and refactoring.
- Sol for architecture, security, difficult bugs, production incidents,
  major migrations, and high-risk changes.
- Default to Terra with Medium effort when uncertain.

Do not repeat the header for minor follow-up instructions in the same task unless
the recommended model or effort changes.

## Safety rules

- Inspect relevant existing files before editing.
- Prefer simple and maintainable solutions.
- Do not push to Git, deploy, delete files, reset databases, or modify production
  resources unless explicitly requested.
- Warn before destructive, expensive, security-sensitive, or difficult-to-reverse
  actions.
- Never expose secrets or commit environment-variable values.
- Preserve existing behavior unless the task requires changing it.

## Implementation workflow

For substantial work:

1. Inspect the relevant code.
2. State assumptions and identify uncertainty.
3. Create a brief plan.
4. Implement the smallest complete solution.
5. Run relevant tests, linting, type checks, or builds.
6. Report:
   - files changed;
   - tests run;
   - unresolved problems;
   - risks or manual steps.

When debugging, investigate the root cause before applying speculative fixes.
Do not repeatedly make unrelated changes hoping one will work.

## Communication

- Be direct and truthful.
- Explain unfamiliar concepts in beginner-friendly language.
- Clearly distinguish facts, assumptions, recommendations, and uncertainties.
- Keep responses focused and avoid repeating information.