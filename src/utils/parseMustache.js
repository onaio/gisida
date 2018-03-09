import Mustache from 'mustache';

export default (spec, datum) => Mustache.render(spec, datum);
