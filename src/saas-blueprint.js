export const PRODUCT_ROLES = [
    'Automation builder',
    'Risk reviewer',
    'Data owner',
    'Rollback approver',
];
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
export const PRODUCT_WORKFLOWS = [
    'Risk scoring matrix',
    'Required rollback fields',
    'Test-case evidence workflow',
    'Owner acceptance gate',
];
export const PRODUCT_GUARDS = [
    'Block high-risk automation without rollback',
    'Require human review for money/data/public posts',
    'Flag missing failure-mode tests',
];
export function createProductSaasBlueprint(config, domain) {
    return {
        product: config.title,
        northStar: config.metric,
        roles: PRODUCT_ROLES,
        integrations: PRODUCT_INTEGRATIONS,
        analytics: PRODUCT_ANALYTICS,
        workflows: PRODUCT_WORKFLOWS,
        guards: PRODUCT_GUARDS,
        modules: config.modules,
        artifacts: domain.artifacts
    };
}
//# sourceMappingURL=saas-blueprint.js.map