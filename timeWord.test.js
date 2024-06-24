const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  
  test('handles midnight', () => {
    expect(timeWord('00:00').toBe('midnight'))
  })

  test('handles noon', () => {
    expect(timeWord('12:00').toBe('noon'))
  })

  test('handles a new hour', () => {
    expect(timeWord('04:00').toBe("four o'clock am"))
  })

  test('handles a teen minute', () => {
    expect(timeWord('09:13').toBe("nine thirteen am"))
  })

  test('handles a new tens place', () => {
    expect(timeWord('10:30').toBe("ten thirty am"))
  })

  test('handles combining tens and ones place', () => {
    expect(timeWord('00:25').toBe("twelve twenty five am"))
  })

  test('handles PM times', () => {
    expect(timeWord('12:25').toBe("twelve twenty five pm"))
  })

  test('handles a new hour', () => {
    expect(timeWord('16:00').toBe("four o'clock pm"))
  })
});