module.exports = {
  apps: [
    {
      name: 'web',
      script: 'node_modules/.bin/vite',
      args: 'preview --port 3000',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
