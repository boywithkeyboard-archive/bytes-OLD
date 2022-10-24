import bytes from '.'

test('bytes to readable size', () => {
  expect(bytes(100)).toBe('100 B')
  expect(bytes(25000)).toBe('25 KB')
  expect(bytes(50000000)).toBe('50 MB')
  expect(bytes(1000000000000)).toBe('1 TB')

  expect(bytes(25 * 1024, { prefix: 'binary' })).toBe('25 KiB')
  expect(bytes(50 * 1024 * 1024, { prefix: 'binary' })).toBe('50 MiB')
  expect(bytes(1 * 1024 * 1024 * 1024 * 1024, { prefix: 'binary' })).toBe('1 TiB')

  expect(bytes(25 * 1024, { long: true, prefix: 'binary' })).toBe('25 Kibibytes')
  expect(bytes(50 * 1024 * 1024, { long: true, prefix: 'binary' })).toBe('50 Mebibytes')
  expect(bytes(1 * 1024 * 1024 * 1024 * 1024, { long: true, prefix: 'binary' })).toBe('1 Tebibyte')
})

test('readable size to bytes', () => {
  expect(bytes('100 B')).toBe(100)
  expect(bytes('25 KB')).toBe(25000)
  expect(bytes('50 MB')).toBe(50000000)
  expect(bytes('1 TB')).toBe(1000000000000)

  expect(bytes('25 KiB')).toBe(25 * 1024)
  expect(bytes('50 MiB')).toBe(50 * 1024 * 1024)
  expect(bytes('1 TiB')).toBe(1 * 1024 * 1024 * 1024 * 1024)

  expect(bytes('100 Bytes')).toBe(100)
  expect(bytes('25 Kilobytes')).toBe(25000)
  expect(bytes('50 Megabytes')).toBe(50000000)
  expect(bytes('1 Terabyte')).toBe(1000000000000)

  expect(bytes('25 Kibibytes')).toBe(25 * 1024)
  expect(bytes('50 Mebibytes')).toBe(50 * 1024 * 1024)
  expect(bytes('1 Tebibyte')).toBe(1 * 1024 * 1024 * 1024 * 1024)
})
