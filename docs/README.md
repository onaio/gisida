# Gisida Docs

This directory contains documentation on Gisida, Gisida React, and Gisida Clients best practices, protocols, and procedures.

[Getting Started with Gisida](gettingStarted.md)

## Contributing

Gisida and Gisida React repositories use the following branches:

- `master` containing the latest versioned code published to npm
- `staging` containing the latest code in development
- `<feature branch>` containing new code as it is being developed

### Feature Branches

When developing new code, from new features to bug fixes to refactors, this work is do done in a feature branch. Ideally, each feature branch should:

1. be branched off of `staging`
2. contain code-changes specific to a specific work item
3. have a Pull Request
4. be merged into `staging`

### Pull Requests

Pull Requests (PRs) should be opened as soon as progress has been made on a feature branch, this is for the sake of transparency and collaboration. PRs must include the following before merging:

1. A reference to the Github issue ([preferably with keywords](https://help.github.com/en/enterprise/2.18/user/managing-your-work-on-github/closing-issues-using-keywords))
2. A **summary** of what is included in the PR (bullets are fine)
3. Up-to-date code from `staging` / `master`
4. **Tests** for new code and for existing code effected by your changes
5. **Passing Tests** on CircleCI
6. **Documentation** for new features and for existing features effected by your changes
7. **Approval** via PR reviews

### Tests and Documentation

There will be times when adding tests and documentation will be a stand-alone task, this is fine and should not often block PRs. In these cases, start with basic tests/docs and simply create a new ticket describing the tests/docs still needed and reference these new tickets in the PR.

### Code Reviews

When your code is ready for feedback request Reviews from at least two engineers, and alert them to your request via Slack (or verbally). Reviewers are able to Approve, Request Changes, or simply comment on the PR. If there are changes requested which you feel do not belong in the PR, simply respond in the PR and make sure the requested changes are documented in a ticket before dismissing the review. At least one Approval is required before merging.

## Versioning

Gisida and Gisida React use [Semantic Versioning](https://semver.org/) schema, a few examples might be:

- `v2.0.0` A **major** release which is incompatible with prior releases
- `v1.4.0` A **minor** release which is compatible with prior minor releases
- `v1.2.23` A **patch** release which are small / backward-compatible code releases
- `v1.4.0-rc.1` A **release candidate** pre-release which are useful for deploying releases for QA before publishing the new release to npm
- `v1.2.3-reveal.1` A **tagged** release which may or may standardized and included in future releases (we try not to do this but can be useful in a time-crunch)

_Note: Release candidates and tagged releases are the only time releases should be made from feature branches._

### Release Process

All major, minor, and patch releases should be tagged from `staging`, release candidate and tagged releases may use feature branches. When tagging and publishing a new release, take the following steps:

1. Merge your feature branch to `staging`
2. Go to the [Github Releases page](https://github.com/onaio/gisida/releases) and click `Draft a new release`
3. Name the Tag version according to the Semantic Versioning described above
4. Select `staging` for the Target branch
5. Use the Tag version as the Release title
6. Include in the description a list of all merged PRs since the last release
7. Click Publish release
8. Merge `staging` into `master`
9. Publish the release by locally running: `git fetch --tags origin && npm login && npm publish --tag=<version>`
10. Verify the release was published to npm
