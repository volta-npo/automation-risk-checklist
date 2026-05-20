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


## Comprehensive SaaS operating system

The expanded console models the product as a full SaaS business system, not only a checklist UI:

- **Tenant operating system:** local-first tenancy rules, plan limits, tenant data fields, and privacy boundaries.
- **Onboarding command center:** milestone ownership, status, evidence, blockers, and stage mapping from discovery through expansion.
- **Role and permission matrix:** operating personas, approval duties, artifact access, and workflow responsibility.
- **Integration health:** configured, verified, and planned integration status with owners, data-model coverage, and verification dates.
- **Success plans and KPI board:** baseline/target metrics, cadence, KPI source, retention signals, and customer-success ownership.
- **Support queue:** severity, SLA, owner, playbook, and launch-blocking guardrails for operational follow-through.
- **Governance log:** human-reviewed audit events, rollback ownership, reviewer evidence, and product guard coverage.
- **Expansion motions:** packaged upsell/renewal motions, readiness scoring, triggers, and owner assignment.
- **Operations CSV export:** onboarding, integration, support, and expansion records for customer-success tracking outside the app.

## SaaS readiness scorecard

The launch score now blends activation, playbook evidence, automation coverage, onboarding completion, integration readiness, governance review, account health, retention, and expansion readiness. A workspace is launch-ready only when operational governance is also reviewed; high-risk unresolved support items reduce the score even when the checklist is otherwise complete.

## Standalone product expectations

To run as a standalone SaaS, each product should keep the local-first default and add hosted services only behind explicit owner approval:

1. Authentication and tenant records for multi-user accounts.
2. Role-based access mapped to the role matrix in this repo.
3. Append-only audit logging for governance events and rollback decisions.
4. Optional billing/subscription provider tied to the modeled tiers.
5. Import/export connectors that preserve the product-specific data model and privacy boundary.
6. Customer-success dashboards based on the KPI board and success plans.
7. Support workflows based on the queue and guardrails already modeled in the console.

## Expanded product-specific operating blueprint

### Personas
- Automation builder
- Risk reviewer
- Data owner
- Rollback approver
- Client acceptance tester
- Implementation pod lead

### KPIs
- Automations risk-cleared
- Rollback coverage
- Client acceptance tests passed
- High-risk gaps closed
- Human-review coverage
- Failure-mode evidence depth

### Onboarding milestones
- Inventory automation triggers and actions
- Score risk across customer/money/PII/public domains
- Document rollback and owner approval
- Attach test-case evidence
- Run client acceptance test
- Package safety review for launch

### Data model
- Automation trigger
- Action surface
- Risk domain
- Rollback plan
- Test evidence
- Owner acceptance

### Success signals
- Every high-risk automation has rollback
- Client acceptance test is recorded
- Human review exists for risky actions
- Failure modes are explicit

### Expansion motions
- Quarterly automation recertification
- Incident drill templates
- Vendor integration risk review
- Cross-client automation policy library
