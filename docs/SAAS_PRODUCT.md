# SaaS Product Blueprint

This repository now includes a standalone SaaS operating layer in addition to the local-first Volta workbench. The goal is to let the product behave like a complete SaaS offering without forcing hosted persistence or external AI calls.

## SaaS capabilities

- Customer account roster with lifecycle stage, tier, owner, renewal, health, and risk fields.
- Subscription-style plan modeling mapped to the product's core artifacts.
- Implementation playbooks generated from the domain workflow rows.
- Human-reviewed automation recipes generated from product safety checks.
- Executive SaaS brief export for operators, mentors, sponsors, and owners.
- Account CSV export for customer-success and implementation tracking.
- Launch-score metrics for activation, playbook readiness, automation coverage, account health, and modeled MRR.

## Local-first product boundary

The SaaS console is still browser-local by default. It stores workspace data in `localStorage` and exports Markdown/CSV only when the operator asks for it. No billing system, database, telemetry service, or external AI provider is required.

## Production expansion path

1. Replace modeled accounts with authenticated tenant records if hosted persistence is approved.
2. Add role-based access for operator, mentor, student pod, and client owner personas.
3. Promote playbooks into reusable templates with versioned evidence requirements.
4. Add optional backend validators for batch scoring and import checks.
5. Add hosted audit logs only after privacy review and owner-facing retention rules are documented.

## Product-specific SaaS blueprint

### Roles
- Automation builder
- Risk reviewer
- Data owner
- Rollback approver

### Integrations
- Zapier/Make risk notes
- Rollback-plan export
- Acceptance-test evidence
- Owner signoff packet

### Analytics
- Residual risk score
- Rollback readiness
- Test evidence coverage
- Human-review coverage

### Workflows
- Risk scoring matrix
- Required rollback fields
- Test-case evidence workflow
- Owner acceptance gate

### Guards
- Block high-risk automation without rollback
- Require human review for money/data/public posts
- Flag missing failure-mode tests

