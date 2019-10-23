const createCorrectDurationPart = (part) => (String(part).length > 1 ? part : `0${part}`);

const parseDuration = (time) => {
  const date = new Date(time);
  return `${createCorrectDurationPart(date.getMinutes())}:${createCorrectDurationPart(date.getSeconds())}`;
};

const parseDateRelease = (date) => new Date(date).toDateString().slice(4);

const parseName = (name = '') => (name.length > 15 ? `${name.slice(0, 15)}...` : name);

const createReducer = (handleReducer, defaultState) => (state = defaultState, action) => {
  const handler = handleReducer[action.type];
  return handler ? handler(state, action) : state;
};

export default {
  parseDuration,
  parseDateRelease,
  createCorrectDurationPart,
  parseName,
  createReducer
};
