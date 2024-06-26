export default function fn() {
  const rootEl = document.getElementById("root");
  const queryParams = new URLSearchParams(document.location.search);
  const input = queryParams.get("input");
  const redirectUrl = queryParams.get("url");

  rootEl.innerHTML = input;

  const regex = RegExp(req.query.regex);

  if (regex.test(req.query.data)) {
    console.log("It's a Match!");
  } else {
    console.log("Not a Match!");
  }

  document.location = redirectUrl;

  // var db = window.openDatabase(
  //   "myDb",
  //   "1.0",
  //   "Personal secrets stored here",
  //   2 * 1024 * 1024,
  // ); // Noncompliant

  location.href = "javascript:void(0)"; // Sensitive
  location.href = "javascript:void(0)"; // Sensitive
  // AZBURwZy83ztCUnc4EG7
}
