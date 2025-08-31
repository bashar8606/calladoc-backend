export default ({ env }) => ({
  host: env('HOST', '3.91.65.86'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://3.91.65.86:1337'),
  proxy: true, // <— important for Render / Heroku
  app: {
    keys: env.array('APP_KEYS', ['key1', 'key2']),
  },
});
