## @azury/bytes

### Installation

```bash
npm i @azury/bytes
```

### Usage

```js
import bytes from '@azury/bytes'

/*
 * Convert bytes to a readable size.
 */

bytes(100) // '100 B'
bytes(25000) // '25 KB'
bytes(50000000) // '50 MB'
bytes(1000000000000) // '1 TB'

bytes(100, { long: true }) // '100 Bytes'
bytes(25000, { long: true }) // '25 Kilobytes'
bytes(50000000, { long: true }) // '50 Megabytes'
bytes(1000000000000, { long: true }) // '1 Terabyte'

bytes(100, { format: 'array' }) // [100, 'B']
bytes(25000, { format: 'array' }) // [25, 'KB']
bytes(50000000, { long: true, format: 'array' }) // [50, 'Megabytes']
bytes(1000000000000, { long: true, format: 'array' }) // [1, 'Terabyte']

/*
 * Convert a readable size to bytes.
 */

bytes('100 B') // 100
bytes('25 KB') // 25000
bytes('50 MB') // 50000000
bytes('1 TB') // 1000000000000

bytes('100 Bytes') // 100
bytes('25 Kilobytes') // 25000
bytes('50 Megabytes') // 50000000
bytes('1 Terabyte') // 1000000000000
```

### Configuration

* **long**
* **format:** `string` | `array` *(only available when converting bytes to a readable size)*
