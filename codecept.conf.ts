import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://practice.automationtesting.in/',
      show: true,
      chrome: {
        args: ['--no-sandbox', '--disable-dev-shm-usage', '--start-maximized', '--single-process', '--ignore-certificate-errors', '--ignore-certificate-errors-spki-list',],
        defaultViewport: null,
      },

    }
  },
  include: {
    I: './steps_file'
  },
  name: 'TestDemo',
  fullPromiseBased: false
}