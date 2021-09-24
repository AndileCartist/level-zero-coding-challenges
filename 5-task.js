function findAreaOfTriangle(leg, base, height) {
  const semiPerimeter = (leg + base + height) / 2;
  const area = Math.sqrt(
    // Heron’s formula
    semiPerimeter *
      (semiPerimeter - leg) *
      (semiPerimeter - base) *
      (semiPerimeter - height)
  );
  return area;
}
