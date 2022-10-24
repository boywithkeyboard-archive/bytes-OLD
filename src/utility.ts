export const KB = 1000
, MB = KB * 1000
, GB = MB * 1000
, TB = GB * 1000
, PB = TB * 1000
, EB = PB * 1000
, ZB = EB * 1000
, YB = ZB * 1000

, KiB = 1024
, MiB = KiB * 1024
, GiB = MiB * 1024
, TiB = GiB * 1024
, PiB = TiB * 1024
, EiB = PiB * 1024
, ZiB = EiB * 1024
, YiB = ZiB * 1024

, units: [string, string, number][] = [
  ['B', 'Byte', 1],

  ['KB', 'Kilobyte', KB],
  ['MB', 'Megabyte', MB],
  ['GB', 'Gigabyte', GB],
  ['TB', 'Terabyte', TB],
  ['PB', 'Petabyte', PB],
  ['EB', 'Exabyte', EB],
  ['ZB', 'Zettabyte', ZB],
  ['YB', 'Yottabyte', YB],

  ['KiB', 'Kibibyte', KiB],
  ['MiB', 'Mebibyte', MiB],
  ['GiB', 'Gibibyte', GiB],
  ['TiB', 'Tebibyte', TiB],
  ['PiB', 'Pebibyte', PiB],
  ['EiB', 'Exbibyte', EiB],
  ['ZiB', 'Zebibyte', ZiB],
  ['YiB', 'Yobibyte', YiB]
]
