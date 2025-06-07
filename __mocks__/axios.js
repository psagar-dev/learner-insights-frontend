const axiosMock = {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
};

module.exports = {
  __esModule: true,
  default: axiosMock,
  ...axiosMock,
};
