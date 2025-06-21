/** @type {import('@lingui/conf').LinguiConfig} */

module.exports = {
  locales: ['en', 'cs'],
  sourceLocale: 'en',
  catalogs: [
    {
      path: 'src/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  format: 'po',
};
// export default defineConfig({
//   sourceLocale: 'en',
//   locales: ['cs', 'en'],
//   catalogs: [
//     {
//       path: '<rootDir>/src/shared/locales/{locale}/messages',
//       include: ['src'],
//     },
//   ],
// });

//Build service could not create build operation: unknown error while handling message: MsgHandlingError(message: "unable to initiate PIF transfer session //////(operation in progress?)")
