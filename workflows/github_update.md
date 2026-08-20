# Update GitHub

## Objective
Commit and push verified project changes to the configured GitHub repository.

## Steps

1. Check git status.
2. Review the diff.
3. Ensure no secrets, .env files, credentials, or temporary files are included.
4. Run relevant tests.
5. Create a meaningful commit message.
6. Commit the changes.
7. Push the current branch to its configured remote.
8. Verify that the push succeeded.

## Safety

- Never commit .env, credentials.json, token.json, API keys, or secrets.
- Never force-push unless explicitly requested.
- Never push untested changes.
- If authentication fails, stop and report the error.
- If the remote is not configured, stop and report it.