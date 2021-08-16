function findAreaOfTriangle(a, b, c) {
  let s = (a + b + c) / 2,
    area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}
