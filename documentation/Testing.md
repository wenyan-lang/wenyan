[Back to README](../README.md)

## Testing

This project uses [Jest](https://jestjs.io/) for unit testing and snapshot testing.

You can run all the tests by

```bash
npm test
```

### Snapshot Testing

There are some articles about snapshot testing:

 - https://jest-bot.github.io/jest/docs/snapshot-testing.html
 - https://scotch.io/tutorials/writing-snapshot-tests-for-react-components-with-jest

This prevents you from accidentally changes the things that affects the output.

**If you made changes by purpose, you may need to update the snapshoot by**

```bash
npm run test:update
```