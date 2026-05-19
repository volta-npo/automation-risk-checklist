export const config = {
    "number": 36,
    "slug": "automation-risk-checklist",
    "title": "Automation Risk Checklist",
    "category": "AI & Automation",
    "tagline": "A preflight safety checklist for automations that touch customers, money, personal data, or public posts.",
    "persona": "CPG reviewers and student automation builders.",
    "gap": "Low-code automation can break quietly or leak data if reviewed casually.",
    "niche": "Safe automation in small-business consulting.",
    "metric": "automations shipped with rollback and owner signoff",
    "modules": [
        "Data sensitivity rubric",
        "Failure mode checklist",
        "Rollback plan",
        "Client acceptance test"
    ],
    "theme": {
        "accent": "#7c3aed",
        "accent2": "#c4b5fd",
        "emoji": "\u26a1",
        "metricLabel": "Automation safety",
        "workflow": [
            "Define workflow boundary",
            "Identify data and failure risks",
            "Require human review",
            "Export safe implementation plan"
        ],
        "privacy": "No external AI calls are made. Treat customer data, credentials, payments, and public posting as high risk."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "data-sensitivity-rubric",
            "label": "Data sensitivity rubric",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify data sensitivity rubric with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "failure-mode-checklist",
            "label": "Failure mode checklist",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify failure mode checklist with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "rollback-plan",
            "label": "Rollback plan",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify rollback plan with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "client-acceptance-test",
            "label": "Client acceptance test",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify client acceptance test with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Automation Risk Checklist and capture baseline evidence.",
            "Complete the data sensitivity rubric workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "BrightPath Tutoring Studio",
        "chapter": "El Paso",
        "studentLead": "Volta Student Lead",
        "notes": "Responsible automation project to reduce admin time without exposing student data. Automation Risk Checklist sample.",
        "evidencePrefix": "Automation Risk Checklist",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map