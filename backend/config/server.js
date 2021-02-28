module.exports = ({env}) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: `http://vps-c8ffb20c.vps.ovh.net/api`,
  admin: {
    url: 'http://vps-c8ffb20c.vps.ovh.net/dashboard',
    auth: {
      secret: env('ADMIN_JWT_SECRET', '122df5c206c9f431698d4c329d1a7cb5'),
    },
  }
});
