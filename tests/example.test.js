const { calculateFinalAmount } = require("../src/pricing");

test("no coupon case", () => {
  expect(calculateFinalAmount(500)).toBe(500)
})

test("SAVE10 coupon", () => {
  expect(calculateFinalAmount(500, "SAVE10")).toBe(450)
})

test("FLAT50 boundary case", () => {
  expect(calculateFinalAmount(30, "FLAT50")).toBe(0)
})

test("invalid subtotal throws error", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal"
  )
})

test("case-insensitive coupon", () => {
  expect(calculateFinalAmount(500, "save10")).toBe(450)
})
