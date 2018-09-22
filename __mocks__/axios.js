const axios = {
  get: jest.fn(() =>
    Promise.resolve({
      todos: []
    })
  )
};

export default axios;
