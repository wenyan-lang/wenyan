module.exports = async () => {
  const warn = console.warn;
  console.warn = () => 0;
  require("set-tz")("UTC");
  console.warn = warn;
};
