import React, { useEffect, useState } from 'react';
import { fetchLatestCommit } from '../api/github';

const CommitStatus = () => {
  const [commit, setCommit] = useState(null);

  useEffect(() => {
    const getCommitData = async () => {
      const data = await fetchLatestCommit();
      setCommit(data);
    };
    getCommitData();
  }, []);

  if (!commit) return <div>Loading...</div>;
};

export default CommitStatus;
