## Run the Dev Server

```bash
# clone this repository
git clone git@github.com:microlinkhq/react-json-view.git && cd react-json-view
# install dependencies
npm install --save-dev
# run the dev server with hot reloading
npm run dev
```

Webpack Dev Server should automatically open up http://localhost:2000 in your web browser. If it does not, open a browser and navigate to port 2000. The hot reloader will automatically reload when files are modified in the `/src/` directory.

## Run the Production Build

```bash
# run the build (note: you may need to use `sudo` priveledges to run the build successfully)
npm run build
```

Please add tests for your code before posting a pull request.

You can run the test suite with `npm run test` or `npm run test:watch` to automatically reload when files are modified.

## Docker Tools

I recommend using docker for development because it enforces environmental consistency.

For information about contributing with Docker, see the [README in ./docker](https://github.com/microlinkhq/react-json-view/blob/master/docker/README.md#contributing-to-this-project-using-docker).
