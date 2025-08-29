export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('RENDER_EXTERNAL_URL', 'https://calladoc-backend.onrender.com'),
  proxy: true, // <— important for Render / Heroku
  app: {
    keys: env.array('APP_KEYS', ['key1', 'key2']),
  },
});
