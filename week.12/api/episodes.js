const API_ENDPOINT = `http://localhost:3000`;

const getAll = async () => {
  const response = await fetch(API_ENDPOINT);
  const json = await response.json();
  return json.data.episodes;
};

const getById = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/${id}`);
  const json = await response.json();
  return json.data.episode;
};

const addToDownloads = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/downloads`, {
    method: "POST",
    body: JSON.stringify({
      episodeId: id,
    }),
  });
  const json = await response.json();
  return json.data;
};

export { getAll, getById, addToDownloads };
