module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '35e87751fe090db6d9e5e60585c2200e'),
  },
});
