# Run Tests

## Objective

Run the project's tests and verify that the current changes do not introduce errors.

## Required Inputs

- Project directory
- Python environment
- Test framework or test command
- Optional: specific test file or test scope

## Steps

1. Inspect the project structure.
2. Check whether a virtual environment exists.
3. If `.venv/` exists, use it.
4. Check the project's testing configuration:
   - `pytest.ini`
   - `pyproject.toml`
   - `setup.cfg`
   - `tox.ini`
   - `requirements.txt`
5. Look for an existing test tool in `tools/`.
6. If an appropriate testing tool exists, use it instead of creating a new one.
7. Run the project's existing test suite.
8. Capture the complete test result.
9. If tests fail:
   - Read the full error message.
   - Identify the failing test or dependency.
   - Determine whether the failure is caused by the current change.
   - Fix the issue only if the workflow or user request permits modifications.
   - Re-run the affected tests.
10. Report:
   - Tests executed
   - Number of tests passed
   - Number of tests failed
   - Important warnings
   - Final status

## Dependency Changes

When testing changes to `requirements.txt`:

1. Verify that the dependency is installed in the active environment.
2. Check for dependency conflicts.
3. Run the relevant application or test suite.
4. Do not modify unrelated dependencies.
5. Do not use `pip freeze > requirements.txt` unless explicitly requested.

## Edge Cases

- If no tests exist, do not create tests automatically unless requested.
- If the project cannot be executed because a dependency is missing, report the missing dependency.
- If the test command is unclear, inspect project configuration before asking the user.
- Do not ignore test failures.
- Do not claim success when tests were not actually executed.

## Success Criteria

The workflow succeeds when:

- The relevant tests execute successfully.
- No unexplained test failures remain.
- The final result is clearly reported.

## Failure Handling

If testing cannot be completed:

1. Preserve the original error.
2. Explain what prevented testing.
3. Do not claim the project is verified.
4. Ask the user for clarification only when required.