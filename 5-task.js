function findAreaOfTriangle(leg, base, height) {
  let semiPerimeter = (leg + base + height) / 2,
    area = Math.sqrt(               // Heron’s formula
      semiPerimeter *
        (semiPerimeter - leg) *
        (semiPerimeter - base) *
        (semiPerimeter - height)
    );
  return area;
}
