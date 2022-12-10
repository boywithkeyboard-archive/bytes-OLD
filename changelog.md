# Changelog

#### Archived Releases:

- [**v1**](https://github.com/azurystudio/bytes/blob/1b270d4013dba48e44b6cdb562d6c3371acdadb9/CHANGELOG.md)

## v2.1.0

### New Features

- **added support for Deno**

  ```ts
  import bytes from 'https://deno.gg/bytes'

  bytes('25 KB') // 25000
  ```

## v2.0.0

### Breaking Changes

- **you now need to use node.js v18.**

### New Features

- **you can now choose your desired prefix.**

  ```js
  import bytes from '@azury/bytes'

  bytes('25 KiB') // 25*1024
  bytes('25 Kibibytes') // 25*1024

  bytes(61217, { prefix: 'metric' }) // 61.22 KB
  bytes(61217, { prefix: 'binary' }) // 59.78 KiB
  bytes(61217) // 61.22 KB
  ```
