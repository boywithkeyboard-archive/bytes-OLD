type Unit =
  | 'B'
  | 'Byte'
  | 'Bytes'
  | 'KB'
  | 'Kilobyte'
  | 'Kilobytes'
  | 'MB'
  | 'Megabyte'
  | 'Megabytes'
  | 'GB'
  | 'Gigabyte'
  | 'Gigabytes'
  | 'TB'
  | 'Terabyte'
  | 'Terabytes'
  | 'PB'
  | 'Petabyte'
  | 'Petabytes'
  | 'EB'
  | 'Exabyte'
  | 'Exabytes'
  | 'ZB'
  | 'Zettabyte'
  | 'Zettabytes'
  | 'YB'
  | 'Yottabyte'
  | 'Yottabytes'

const kb = 1000
, mb = kb * 1000
, gb = mb * 1000
, tb = gb * 1000
, pb = tb * 1000
, eb = pb * 1000
, zb = eb * 1000
, yb = zb * 1000

const units: [string, string, number][] = [
  ['B', 'Byte', 1],
  ['KB', 'Kilobyte', kb],
  ['MB', 'Megabyte', mb],
  ['GB', 'Gigabyte', gb],
  ['TB', 'Terabyte', tb],
  ['PB', 'Petabyte', pb],
  ['EB', 'Exabyte', eb],
  ['ZB', 'Zettabyte', zb],
  ['YB', 'Yottabyte', yb]
]

/**
 * Parse or format the given value.
 * 
 * @param value - The string or number to convert.
 * @param config - The configuration for the conversion.
 */
function bytes(value: number, config?: { long?: boolean, format?: 'string' }): `${number} ${Unit}`
function bytes(value: number, config?: { long?: boolean, format?: 'array' }): [number, Unit]
function bytes(value: `${number} ${Unit}`): number
function bytes(
  value: `${number} ${Unit}` | number,
  config?: {
    long?: boolean
    format?: 'string' | 'array'
  }
): `${number} ${Unit}` | [number, Unit] | number {
  if (typeof value === 'number') {
    const stringifiedSize: string = value.toString()
    , length = stringifiedSize.length
    
    , round = (
      number: number,
      decimalPlaces: number
    ) => Number(
      Math.round(
        Number(number + 'e' + decimalPlaces)
      ) + 'e' + -decimalPlaces
    )

    , bytes = (
      divisor: number,
      longName: Unit,
      shortName: Unit
    ): `${number} ${Unit}` | [number, Unit] => {
      const roundedValue = round(value / divisor, 2)
      , name = (config?.long ? `${longName}${roundedValue > 1 ? 's' : ''}` : shortName) as Unit

      return config?.format === 'array' ? [roundedValue, name] : `${roundedValue} ${name}`
    }

    return (length >= 4 && length < 7) ? (
      bytes(kb, 'Kilobyte', 'KB')
    ) : (length >= 7 && length < 10) ? (
      bytes(mb, 'Megabyte', 'MB')
    ) : (length >= 10 && length < 13) ? (
      bytes(gb, 'Gigabyte', 'GB')
    ) : (length >= 13 && length < 16) ? (
      bytes(tb, 'Terabyte', 'TB')
    ) : (length >= 16 && length < 19) ? (
      bytes(pb, 'Petabyte', 'PB')
    ) : (length >= 19 && length < 22) ? (
      bytes(eb, 'Exabyte', 'EB')
    ) : (length >= 22 && length < 25) ? (
      bytes(zb, 'Zettabyte', 'ZB')
    ) : (length >= 25) ? (
      bytes(yb, 'Yottabyte', 'YB')
    ) : (
      bytes(1, 'Byte', 'B')
    )
  } else {
    const array = value.split(' ')

    if (array.length !== 2)
      return -1

    if (array[1].endsWith('s'))
      array[1] = array[1].slice(0, -1)

    const length = units.length
    let i = 0
    , bytes = -1

    while (i < length) {
      if (array[1] === units[i][0] || array[1] === units[i][1])
        bytes = parseInt(array[0]) * units[i][2]

      i++
    }

    return bytes
  }
}

export default bytes
