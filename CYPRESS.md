# Cypress tests

## Prerequisites

Before launching cypress, some data will have to be inserted in the chosen environment database

- Open .env.local (Not commited file, if you don't have it, create it) 
- Add an entry `MONGODB_URL=THE_MONGO_CONNECTION_STRING` (You can find the connection string in vault `secrets/smatch-back/$ENV/spring.data.mongodb.uri`)
- In the `cypress.config.ts` update the part 

```ts
on('before:run', async () => {
  await fetch('https://smatch-back-xyqssy-uat1.gke-pdp-nprd-wsaa.priv.manawa.adeo.cloud/nomenclature-counters/all', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-user-buid': '1',
    },
  })
})
```
- In `cypress/support/step_definitions/proposalsSteps.ts` do the same
The fetch url must be the BFF used environment

## Launch tests

- Run `pnpm test:cypress-dev-ui` for the visual version or `pnpm test:cypress-run` for the CLI version

## Additional informations

The front and the bff have to be launched (Check docs to know how to launch them)

You have to insert data in the environment DB used by the BFF (SIT/DEV or UAT)

