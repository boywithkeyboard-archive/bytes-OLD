import { EB, EiB, GB, GiB, KB, KiB, MB, MiB, PB, PiB, TB, TiB, units, YB, YiB, ZB, ZiB } from './utility'
import type { Unit } from './unit'

/**
 * parse or format the given value.
 */
function bytes(value: number, options?: { long?: boolean, format?: 'string', prefix?: 'metric' | 'binary' }): `${number} ${Unit}`
function bytes(value: number, options?: { long?: boolean, format?: 'array', prefix?: 'metric' | 'binary' }): [number, Unit]
function bytes(value: `${number} ${Unit}`): number
function bytes(
  value: `${number} ${Unit}` | number,
  options?: {
    long?: boolean
    format?: 'string' | 'array'
    prefix?: 'metric' | 'binary'
  }
): `${number} ${Unit}` | [number, Unit] | number {
  const long = options?.long ?? false
  , array = options?.format === 'array'
  , binary = options?.prefix === 'binary'

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
      , name = (long ? `${longName}${roundedValue > 1 ? 's' : ''}` : shortName) as Unit

      return array ? [roundedValue, name] : `${roundedValue} ${name}`
    }

    return (length >= 4 && length < 7) ? (
      binary ? bytes(KiB, 'Kibibyte', 'KiB') : bytes(KB, 'Kilobyte', 'KB')
    ) : (length >= 7 && length < 10) ? (
      binary ? bytes(MiB, 'Mebibyte', 'MiB') : bytes(MB, 'Megabyte', 'MB')
    ) : (length >= 10 && length < 13) ? (
      binary ? bytes(GiB, 'Gibibyte', 'GiB') : bytes(GB, 'Gigabyte', 'GB')
    ) : (length >= 13 && length < 16) ? (
      binary ? bytes(TiB, 'Tebibyte', 'TiB') : bytes(TB, 'Terabyte', 'TB')
    ) : (length >= 16 && length < 19) ? (
      binary ? bytes(PiB, 'Pebibyte', 'PiB') : bytes(PB, 'Petabyte', 'PB')
    ) : (length >= 19 && length < 22) ? (
      binary ? bytes(EiB, 'Exbibyte', 'EiB') : bytes(EB, 'Exabyte', 'EB')
    ) : (length >= 22 && length < 25) ? (
      binary ? bytes(ZiB, 'Zebibyte', 'ZiB') : bytes(ZB, 'Zettabyte', 'ZB')
    ) : (length >= 25) ? (
      binary ? bytes(YiB, 'Yobibyte', 'YiB') : bytes(YB, 'Yottabyte', 'YB')
    ) : (
      bytes(1, 'Byte', 'B')
    )
  } else {
    const p = value.split(' ')

    if (p.length !== 2)
      return -1

    if (p[1].endsWith('s'))
      p[1] = p[1].slice(0, -1)

    const length = units.length
    let i = 0
    , bytes = -1

    while (i < length) {
      if (p[1] === units[i][0] || p[1] === units[i][1])
        bytes = parseInt(p[0]) * units[i][2]

      i++
    }

    return bytes
  }
}

export default bytes
