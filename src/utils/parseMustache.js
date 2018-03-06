import Mustache from 'mustache';

export default (spec, datum) => {
  return Mustache.render(spec, datum);
}
