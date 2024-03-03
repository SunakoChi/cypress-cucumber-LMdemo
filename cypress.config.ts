import { resolve } from 'path'
import { defineConfig } from 'cypress'
import webpack from '@cypress/webpack-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config)

  // const { output: outputOptions, ...inputOptions } = rollupConfig
  on(
    'file:preprocessor',
    webpack({
      webpackOptions: {
        resolve: {
          extensions: ['.ts', '.js'],
          alias: {
            '~': resolve(__dirname, 'cypress'),
            '&': resolve(__dirname, 'tests'),
          },
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: 'ts-loader',
                  options: {
                    transpileOnly: true,
                    configFile: 'cypress/tsconfig.json',
                  },
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                  options: config,
                },
              ],
            },
          ],
        },
      },
    }),
  )
  // on('file:preprocessor', tagify(config))

  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
  e2e: {
    specPattern: '**/*.feature',
    chromeWebSecurity: false,
    experimentalInteractiveRunEvents: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents,
    responseTimeout: 180000,
    defaultCommandTimeout: 10000,
  },
})