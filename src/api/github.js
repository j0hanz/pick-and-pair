import axios from 'axios';

const GITHUB_API_URL =
  'https://api.github.com/repos/j0hanz/pick-and-pair/commits';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Fetches the latest commits from the repository
export const fetchLatestCommits = async () => {
  try {
    const response = await axios.get(GITHUB_API_URL, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
      params: {
        per_page: 5, // Fetch 5 latest commits
      },
    });
    return response.data.map((commit) => ({
      message: commit.commit.message,
      date: commit.commit.author.date,
      url: commit.html_url,
      author: commit.author ? commit.author.login : 'Unknown',
    }));
  } catch (error) {
    console.error('Error fetching latest commits:', error);
    return [];
  }
};
