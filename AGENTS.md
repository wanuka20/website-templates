# Codex Working Instructions

## Required task approval

For every new task, first briefly assess the user's request and recommend a model and reasoning effort in this format:

Recommended model: [Luna | Terra | Sol]  
Reasoning effort: [Low | Medium | High | Extra High]  
Why: [one concise sentence]

Use:

- Luna for small, mechanical, repetitive, or tightly scoped work.
- Terra for normal feature development, debugging, testing, and refactoring.
- Sol for architecture, security, difficult bugs, production incidents, major migrations, and high-risk changes.
- Default to Terra with Medium effort when uncertain.

After giving the recommendation, ask the user to confirm it or choose a different model and/or reasoning effort. Do not continue with any task activity until the user responds, including:

- file inspection or other read-only commands;
- questions, explanations, reviews, diagnosis, or planning;
- editing or creating project files;
- running commands that change project, system, production, or external-service state;
- installing or updating dependencies;
- deploying, pushing to Git, sending messages, or changing connected services;
- deleting data or performing irreversible actions.

The user can confirm by saying "Go", "Confirm", or equivalent clear approval, or can provide a different model and/or reasoning effort.

After the user confirms, continue with the task. Do not repeat this approval step for minor follow-up instructions in the same task unless the recommended model or effort needs to change.

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

## TODO.md

- Read the full TODO before editing it.
- Keep versions newest-first.
- Add new work under a new `(In progress)` version at the top.
- Move finished work to `Completed`; do not leave it under `Next steps`.
- Keep planned and in-progress work under `Next steps`.
- Only mark a version `(Pushed)` after it is actually pushed.
- Update `version.txt` when a version is pushed.

## Communication

- Be direct and truthful.
- Explain unfamiliar concepts in beginner-friendly language.
- Clearly distinguish facts, assumptions, recommendations, and uncertainties.
- Keep responses focused and avoid repeating information.
