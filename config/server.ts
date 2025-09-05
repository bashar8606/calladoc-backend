export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://admin.calladoc.ae'),
  proxy: true, // <— important for Render / Heroku
  app: {
    keys: env.array('APP_KEYS', ['key1', 'key2']),
  },
});
