/**
 * @type {import('@remix-run/dev').AppConfig}
 */
// module.exports = {
//   appDirectory: "app",
//   browserBuildDirectory: "public/build",
//   publicPath: "/build/",
//   serverBuildDirectory: "netlify/functions/server/build",
//   devServerPort: 8888,
// };
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "build",
  serverBuildTarget: "vercel",
  devServerPort: 8888,
};
