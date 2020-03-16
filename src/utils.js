import moment from "moment";

export const formatCurrentDate = (format = "DDMMYYYY") => {
  return moment().format(format);
};

export const timestamp = () => {
  return moment().valueOf();
};
