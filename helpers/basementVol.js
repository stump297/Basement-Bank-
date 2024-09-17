function calculateBasementVolume(length, width, height) {
  if (length <= 0 || width <= 0 || height <= 0) {
    return "All dimensions must be greater than zero.";
  }
  return length * width * height;
}

const volume = calculateBasementVolume(length, width, height);
console.log(`The volume of the basement is ${volume} cubic meters.`);
