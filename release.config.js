const sharedConfig = require("@govbr-ds/release-config");

module.exports = {
  branches: [...sharedConfig.branches],
  plugins: [
    sharedConfig.plugins.commitAnalyzer,
    sharedConfig.plugins.releaseNotes,
    sharedConfig.plugins.changelog,
    sharedConfig.plugins.gitlab,
    sharedConfig.plugins.npm,
    sharedConfig.plugins.git,
  ],
};
