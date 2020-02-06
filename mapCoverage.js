import { createReporter } from 'istanbul-api';
import { istanbulCoverage } from 'istanbul-lib-coverage';

const map = istanbulCoverage.createCoverageMap();
const reporter = createReporter();

const coverage = require(`./coverage/coverage-final.json`);
map.addFileCoverage(coverage);

reporter.addAll(['json', 'lcov', 'text']);
reporter.write(map);