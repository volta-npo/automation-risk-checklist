export const domain = {
    "kind": "risk-register",
    "title": "Automation Risk Checklist",
    "purpose": "A purpose-built risk register interface for a preflight safety checklist for automations that touch customers, money, personal data, or public posts.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Failure mode register",
    "metricLabels": [
        "Risk Tier",
        "Mitigation Coverage",
        "Signoff Readiness"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "BrightPath Tutoring Studio",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "automations shipped with rollback and owner signoff",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "input-asset",
            "label": "Input asset",
            "type": "text",
            "sample": "Trigger/actions documented",
            "placeholder": "Enter input asset"
        },
        {
            "id": "output-format",
            "label": "Output format",
            "type": "text",
            "sample": "Risk report",
            "placeholder": "Enter output format"
        },
        {
            "id": "review-threshold",
            "label": "Review threshold",
            "type": "number",
            "sample": 85,
            "placeholder": "Enter review threshold"
        },
        {
            "id": "approved-channel",
            "label": "Approved channel",
            "type": "text",
            "sample": "Owner handoff packet",
            "placeholder": "Enter approved channel"
        }
    ],
    "rows": [
        "Trigger/actions documented",
        "Systems touched listed",
        "Data sensitivity classified",
        "Failure modes entered",
        "Severity/likelihood scored",
        "Rollback plan written",
        "Test cases passed",
        "Owner signoff captured"
    ],
    "artifacts": [
        "Risk report",
        "Acceptance checklist",
        "Rollback plan"
    ],
    "checks": [
        "Rollback plan required",
        "Sensitive automations need signoff",
        "Test data before production"
    ],
    "sampleClient": "BrightPath Tutoring Studio"
};
//# sourceMappingURL=domain.js.map