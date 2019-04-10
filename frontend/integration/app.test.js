describe('app', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000/flag')
  })

  it('should be titled "Tell us your cybercrime story"', async () => {
    await expect(page.title()).resolves.toMatch('Tell us your cybercrime story')
  })

  it('should match an input with a "textInput" name then fill it with email', async () => {
    await expect(page).toFill(
      'textarea[name="identifier"]',
      'suspisiuis@gmail.com',
    )
  })
})
