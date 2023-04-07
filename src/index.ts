import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// Create an object of MatchReader and pass DataReader implementation
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
