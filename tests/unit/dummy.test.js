test("calculates order total", () => {
  const price = 5.0;
  const quantity = 2;
  expect(price * quantity).toEqual(10);
});
