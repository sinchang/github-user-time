const githubUserTime = require('../src')

const API_TOKEN = '6753c641fa1530'

test('main', () => {
  expect(typeof githubUserTime).toBe('function')
})

test('username is valid', async () => {
  jest.setTimeout(50000)
  try {
    await githubUserTime(12, API_TOKEN)
  } catch (error) {
    expect(error.message).toEqual('Expected username to be string')
  }
})

test('the location is empty', async () => {
  jest.setTimeout(50000)
  try {
    await githubUserTime('knewzen', API_TOKEN)
  } catch (error) {
    expect(error.message).toEqual('Error: The location is empty')
  }
})

test('sinchang', async () => {
  jest.setTimeout(50000)
  const res = await githubUserTime('sinchang', API_TOKEN)
  expect(res.timezone).toEqual('Asia/Shanghai')
})
