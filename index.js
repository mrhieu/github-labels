// Source: https://github.com/jvandemo/copy-github-labels

// Instantiate
var copyGitHubLabels = require('copy-github-labels')();

// Optionally use credentials
copyGitHubLabels.authenticate({
  type: 'oauth',
  token: 'your-github-personal-access-token'
});

// Copy labels from one repository to another
copyGitHubLabels.copy('github-username/src-repo', 'github-username/dest-repo');
