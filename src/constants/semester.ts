export const semesterNameOptions = [
  {
    value: "Autumn",
    label: "Autumn",
  },
  {
    value: "Summer",
    label: "Summer",
  },
  {
    value: "Fall",
    label: "Fall",
  },
];

export const semesterCode = {
  Autumn: "01",
  Summer: "02",
  Fall: "03",
};

export const currentYear = new Date().getFullYear();
export const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

export const prevYearOptions = [0, 1, 2, 3].map((number) => ({
  value: String(currentYear - (4 - number)),
  label: String(currentYear - (4 - number)),
}));
