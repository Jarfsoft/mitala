const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Jarfsoft-Simon/scores/';

export const postData = async (uName, uScore, uLevel) => {
  let s;
  if (uScore === 0) s = '0';
  else s = uScore;
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'Application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: uName, score: s, level: uLevel }),
  });

  try {
    const postRequest = await fetch(url, postData);
    const data = await postRequest.json();
    return data;
  } catch (error) {
    throw new Error(`The following error prevented the action: ${error}`);
  }
};

export const getData = async () => {
  const info = {
    method: 'Get',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  try {
    const req = await fetch(url, info);
    const data = await req.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default postData;