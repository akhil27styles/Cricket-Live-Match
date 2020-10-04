const API_KEY='7cuQBWcMCefaRmj98Nom4oPHyjQ2';
export const getMatches = () => {
  const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
  console.log("URL", url);
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};

//get the score of the cuurent match

export const getMatchDetail = (id) => {
  const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

//Match Scheduled
export const getScheduled = () => {
  const url = `https://cricapi.com/api/matchCalendar?apikey=${API_KEY}`;
  console.log("URL", url);
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};

// Sports News
const NEWS_API_KEY='c7509427056f4b628f43dbb5e9d0e1fa';
export const getSportsDetail = () => {
  const url = `http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${NEWS_API_KEY}`;
  console.log("URL", url);
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};