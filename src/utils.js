import moment from "moment";

const DEFAULT_FORMAT = "DDMMYYYY";

export const formatCurrentDate = (format = DEFAULT_FORMAT) => {
  return moment().format(format);
};

export const formatDate = (date, input, output) => {
  return moment(date, input).format(output);
};

export const timestamp = () => {
  return moment().valueOf();
};

export const getTime = (date = {}) => {
  return moment(date).format("HH:mm:ss");
};

export const nextDayFormatted = date => {
  return moment(date, DEFAULT_FORMAT)
    .add(1, "days")
    .format(DEFAULT_FORMAT);
};

export const prevDayFormatted = date => {
  return moment(date, DEFAULT_FORMAT)
    .subtract(1, "days")
    .format(DEFAULT_FORMAT);
};
