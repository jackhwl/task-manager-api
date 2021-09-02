const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
})

test('Should convert total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('Should convert -40 F to -40 C', () => {
    const total = fahrenheitToCelsius(-40)
    expect(total).toBe(-40)
})

test('Should convert 32 F to 0 C', () => {
    const total = fahrenheitToCelsius(32)
    expect(total).toBe(0)
})

test('Should convert -40 C to -40 F', () => {
    const total = celsiusToFahrenheit(-40)
    expect(total).toBe(-40)
})

test('Should convert 0 C to 32 F', () => {
    const total = celsiusToFahrenheit(0)
    expect(total).toBe(32)
})

