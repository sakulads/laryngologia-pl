export async function loadZabiegi() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://laryngologia.vercel.app/api/zabiegi");
  const zabiegi = await res.json();

  return { zabiegi };
}
