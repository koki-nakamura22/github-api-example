const settingGitHubJson = require("../github-setting.json");
const json = require("../Utils/json");
const { Octokit } = require("@octokit/core");

const main = async () => {
  const octokit = new Octokit({
    auth: settingGitHubJson.personalAccessToken,
  });

  // const githubUser = "koki-nakamura22";
  // const codeQuery = '"module require.main"';
  // const query = `user:${githubUser} ${codeQuery}`;

  const query = "hoge";

  const reqOptions = {
    q: query,
    order: "desc",
    per_page: 50,
    page: 2,
  };
  const res = await octokit.request("GET /search/code", reqOptions);
  console.info(res);
  json.writeJsonFileSync(
    res.data,
    __dirname,
    `SearchResult-${githubUser}.json`
  );
};

if (module === require.main) {
  main().catch(console.error);
}
