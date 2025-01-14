import axios from 'axios';

const GITHUB_API_URL =
  'https://api.github.com/repos/j0hanz/pick-and-pair/commits';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const fetchLatestCommit = async () => {
  try {
    const response = await axios.get(GITHUB_API_URL, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const latestCommit = response.data[0];
    return {
      message: latestCommit.commit.message,
      date: latestCommit.commit.author.date,
      url: latestCommit.html_url,
    };
  } catch (error) {
    console.error('Error fetching latest commit:', error);
    return null;
  }
};
