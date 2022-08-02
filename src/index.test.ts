import bytes from '.'

test('bytes to readable size', () => {
  expect(bytes(100)).toBe('100 B')
  expect(bytes(25000)).toBe('25 KB')
  expect(bytes(50000000)).toBe('50 MB')
  expect(bytes(1000000000000)).toBe('1 TB')

  expect(bytes(100, { long: true })).toBe('100 Bytes')
  expect(bytes(25000, { long: true })).toBe('25 Kilobytes')
  expect(bytes(50000000, { long: true })).toBe('50 Megabytes')
  expect(bytes(1000000000000, { long: true })).toBe('1 Terabyte')

  expect(bytes(100, { format: 'array' })).toEqual([100, 'B'])
  expect(bytes(25000, { format: 'array' })).toEqual([25, 'KB'])
  expect(bytes(50000000, { long: true, format: 'array' })).toEqual([50, 'Megabytes'])
  expect(bytes(1000000000000, { long: true, format: 'array' })).toEqual([1, 'Terabyte'])
})

test('readable size to bytes', () => {
  expect(bytes('100 B')).toBe(100)
  expect(bytes('25 KB')).toBe(25000)
  expect(bytes('50 MB')).toBe(50000000)
  expect(bytes('1 TB')).toBe(1000000000000)

  expect(bytes('100 Bytes')).toBe(100)
  expect(bytes('25 Kilobytes')).toBe(25000)
  expect(bytes('50 Megabytes')).toBe(50000000)
  expect(bytes('1 Terabyte')).toBe(1000000000000)
})
