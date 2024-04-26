import useSWR from "swr";

export default function gasFetch(apiRoute, body = {}) {
  const productionURL =
    "https://script.google.com/macros/s/AKfycbwk4uZviJmPHK-Plkfy0B6asc8hHKkMYh-ZE71gF76pJzicxpF7qKUsOVjb5XwekKRYQg/exec";

  const devURL =
    "https://script.google.com/macros/s/AKfycbyP4yI1eUltwIoNxbwjwmGRaj4qYdrLl9M7KtScK5y_rXQVIPNkMfNsaRJuOdU000xByg/exec";

  const url =
    process.env.NODE_ENV === "production"
      ? `${devURL}?insertLogs=true`
      : `${devURL}?debug=1`;

  let token = "";

  if (!apiRoute.includes("/login")) {
    let type = apiRoute.split("/")[1];

    let tokenInfo = localStorage.getItem(`${type}TokenInfo`);

    if (!tokenInfo) {
      window.location = `/${type}/login`;
      return Promise.reject("Token not found. Please login again.");
    }

    let tokenInfoJSON = JSON.parse(tokenInfo);

    if (tokenInfoJSON.expire < new Date().getTime()) {
      window.location = `/${type}/login`;
      return Promise.reject("Token expired. Please login again.");
    }

    token = tokenInfoJSON.token;
  }

  // route

  let options = {
    method: "POST",
    body: JSON.stringify(body),
  };

  return fetch(
    `${url}${token ? `&token=${token}` : ""}&route=${apiRoute}`,
    options
  );
}

const fetcher = ([apiRoute, body]) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await gasFetch(apiRoute, body);

      let reponseJSON = await response.json();

      if (reponseJSON.status) {
        resolve(reponseJSON.data);
      } else {
        reject(reponseJSON.error);
      }
    } catch (err) {
      reject(err.message ?? err);
    }
  });
};

export function useGASFetch(apiRoute, body) {
  const { data, error, isLoading } = useSWR([apiRoute, body], fetcher, {
    revalidateOnFocus: false,
  });

  return {
    data,
    isLoading,
    error: error,
  };
}
