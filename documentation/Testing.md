[Back to README](../README.md)

## Testing

This project uses [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) for unit testing and snapshot testing.

You will need to build first

```bash
npm run build
```

Then you can run all the tests by

```bash
npm test
```

### Snapshot Testing

There are some articles about snapshot testing (*Most of them are for Jest, but they works the same for Mocha*):
 - https://jest-bot.github.io/jest/docs/snapshot-testing.html
 - https://scotch.io/tutorials/writing-snapshot-tests-for-react-components-with-jest

This prevents you from accidentally changes the things that affects the output.

**If you made changes by propuse, you may need to update the snapshoot by**

```bash
npm run test:update
```