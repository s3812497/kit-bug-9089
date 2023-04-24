export async function handleError({ error, event }) {
  const errorId = crypto.randomUUID();
  // example integration with https://sentry.io/
  console.log(errorId, error);
}