# Deploy Application

## Objective

Deploy a verified application to its configured deployment environment.

## Required Inputs

- Project directory
- Deployment target
- Deployment configuration
- Required environment variables
- Deployment command or existing deployment tool

## Preconditions

Before deployment:

1. Check `git status`.
2. Review the current changes.
3. Ensure no secrets are tracked.
4. Verify that `.env`, credentials, tokens, and private keys are excluded.
5. Run the project's test workflow.
6. Confirm that tests pass.
7. Verify that the deployment configuration exists.
8. Verify that required environment variables are available.
9. Check for an existing deployment tool in `tools/`.
10. Use the existing tool instead of creating a new deployment script.

## Steps

1. Identify the configured deployment platform.
2. Read the relevant deployment configuration.
3. Check the current Git branch and commit.
4. Run the required validation/tests.
5. Build the application if a build step is required.
6. Execute the deployment command or deployment tool.
7. Monitor the deployment result.
8. Verify that the deployment completed successfully.
9. If a health-check URL or verification command exists, run it.
10. Report the deployment result.

## Safety Rules

- Never expose API keys, passwords, tokens, or secrets.
- Never commit `.env`, `credentials.json`, `token.json`, or private keys.
- Never force-push as part of deployment.
- Never deploy known failing tests.
- Never delete production data unless explicitly requested.
- Never modify production configuration unnecessarily.
- Do not deploy if the target environment is ambiguous.
- Do not claim deployment succeeded without verifying the result.

## Failure Handling

If deployment fails:

1. Capture the complete error.
2. Identify whether the failure occurred during:
   - Build
   - Authentication
   - Dependency installation
   - Deployment
   - Health check
3. Determine whether the issue can be safely fixed.
4. If a paid deployment/API operation must be repeated, ask the user before retrying.
5. Do not repeatedly retry a failed deployment without understanding the failure.
6. Report the failure and the recommended next action.

## Success Criteria

Deployment succeeds only when:

- The application builds successfully.
- Deployment reports success.
- Post-deployment verification succeeds when available.
- No critical errors are detected.

## Final Report

Return:

- Deployment target
- Git commit/branch
- Build status
- Deployment status
- Verification/health-check status
- Any warnings or important notes