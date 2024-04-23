export default function gasFetch(apiRoute, body = {}, token) {
  const productionURL =
    "https://script.google.com/macros/s/AKfycbwk4uZviJmPHK-Plkfy0B6asc8hHKkMYh-ZE71gF76pJzicxpF7qKUsOVjb5XwekKRYQg/exec";

  const devURL =
    "https://script.google.com/macros/s/AKfycbyP4yI1eUltwIoNxbwjwmGRaj4qYdrLl9M7KtScK5y_rXQVIPNkMfNsaRJuOdU000xByg/exec";

  const url =
    process.env.NODE_ENV === "production"
      ? `${productionURL}?insertLogs=true`
      : `${devURL}?debug=1`;

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
