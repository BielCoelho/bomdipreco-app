const commonColors = {
  white: "#ffffff",
  black: "#000000",
  red: "#ef5350",
  warn: "#ff9800",
  success: "#4caf50",
  info: "#03a9f4",
  male: "#2e9bf8",
  female: "#ff4181",
} as const;

export const colors = {
  background: "#f7f4f3",
  background_highlight: "#fefefe",
  title: "#0c0c0c",
  paragraph: "#1f1f1f",
  main: "#e94f37",
  main_highlight: "#e96f37",
  ...commonColors,
} as const;
