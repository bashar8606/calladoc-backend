export default ({ env }) => ({
  host: env('HOST', '40.172.190.110'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://40.172.190.110:1337'),
  proxy: true, // <— important for Render / Heroku
  app: {
    keys: env.array('APP_KEYS', ['key1', 'key2']),
  },
});
