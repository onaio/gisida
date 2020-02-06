/* eslint-disable @typescript-eslint/no-var-requires */
const { createReporter } = require('istanbul-api');
const istanbulCoverage = require('istanbul-lib-coverage');

const map = istanbulCoverage.createCoverageMap();
const reporter = createReporter();

const coverage = require(`./coverage/coverage-final.json`);
map.addFileCoverage(coverage);

reporter.addAll(['json', 'lcov', 'text']);
reporter.write(map);