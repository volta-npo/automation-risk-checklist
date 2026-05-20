export const PRODUCT_ROLES = ['Automation builder', 'Risk reviewer', 'Data owner', 'Rollback approver'];
export const PRODUCT_PERSONAS = ['Automation builder', 'Risk reviewer', 'Data owner', 'Rollback approver', 'Client acceptance tester', 'Implementation pod lead'];
export const PRODUCT_INTEGRATIONS = [
    'Zapier/Make risk notes',
    'Rollback-plan export',
    'Acceptance-test evidence',
    'Owner signoff packet',
];
export const PRODUCT_ANALYTICS = [
    'Residual risk score',
    'Rollback readiness',
    'Test evidence coverage',
    'Human-review coverage',
];
export const PRODUCT_KPIS = ['Automations risk-cleared', 'Rollback coverage', 'Client acceptance tests passed', 'High-risk gaps closed', 'Human-review coverage', 'Failure-mode evidence depth'];
export const PRODUCT_WORKFLOWS = [
    'Risk scoring matrix',
    'Required rollback fields',
    'Test-case evidence workflow',
    'Owner acceptance gate',
];
export const PRODUCT_ONBOARDING = ['Inventory automation triggers and actions', 'Score risk across customer/money/PII/public domains', 'Document rollback and owner approval', 'Attach test-case evidence', 'Run client acceptance test', 'Package safety review for launch'];
export const PRODUCT_GUARDS = [
    'Block high-risk automation without rollback',
    'Require human review for money/data/public posts',
    'Flag missing failure-mode tests',
];
export const PRODUCT_EXPANSION = ['Quarterly automation recertification', 'Incident drill templates', 'Vendor integration risk review', 'Cross-client automation policy library'];
export const PRODUCT_DATA_MODEL = ['Automation trigger', 'Action surface', 'Risk domain', 'Rollback plan', 'Test evidence', 'Owner acceptance'];
export const PRODUCT_SUCCESS_SIGNALS = ['Every high-risk automation has rollback', 'Client acceptance test is recorded', 'Human review exists for risky actions', 'Failure modes are explicit'];
export function createProductSaasBlueprint(config, domain) {
    return {
        product: config.title,
        northStar: config.metric,
        roles: PRODUCT_ROLES,
        personas: PRODUCT_PERSONAS,
        integrations: PRODUCT_INTEGRATIONS,
        analytics: PRODUCT_ANALYTICS,
        kpis: PRODUCT_KPIS,
        workflows: PRODUCT_WORKFLOWS,
        onboarding: PRODUCT_ONBOARDING,
        guards: PRODUCT_GUARDS,
        expansion: PRODUCT_EXPANSION,
        dataModel: PRODUCT_DATA_MODEL,
        successSignals: PRODUCT_SUCCESS_SIGNALS,
        modules: config.modules,
        artifacts: domain.artifacts
    };
}
//# sourceMappingURL=saas-blueprint.js.map