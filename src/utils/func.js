const parseDuration = (time) => {
    const date = new Date(time);
    return `${createCorrectDurationPart(date.getMinutes())}:${createCorrectDurationPart(date.getSeconds())}`;
};

const createCorrectDurationPart = (part) => String(part).length > 1 ? part : `0${part}`;

const parseDateRelease = (date) => new Date(date).toDateString().slice(4);

const parseTrackName = (trackName) => trackName.length > 20 ? `${trackName.slice(0, 20)}...` : trackName;

export default {
    parseDuration,
    parseDateRelease,
    createCorrectDurationPart,
    parseTrackName
}