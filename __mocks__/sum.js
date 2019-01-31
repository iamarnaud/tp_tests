const two = jest.fn()
    two.mockReturnValue(2)


module.exports = {two: two()};