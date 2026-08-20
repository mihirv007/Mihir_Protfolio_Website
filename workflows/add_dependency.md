# Add Python Dependency

## Objective
Add a required Python dependency to the project and update requirements.txt.

## Inputs
- Package name
- Version requirement, if specified
- Reason the package is required

## Steps

1. Inspect the existing project and requirements.txt.
2. Check whether the dependency is already present.
3. Determine the appropriate version constraint.
4. Install the dependency in the project's environment.
5. Run the relevant tests or application checks.
6. Update requirements.txt.
7. Verify that requirements.txt contains the dependency exactly once.
8. Show the changed files and validation results.

## Edge Cases

- If the package is already present, do not add a duplicate.
- If installation fails, inspect the error before retrying.
- If the dependency conflicts with existing packages, report the conflict.
- Do not modify unrelated dependencies.
- Do not commit or push unless the GitHub workflow is explicitly requested.