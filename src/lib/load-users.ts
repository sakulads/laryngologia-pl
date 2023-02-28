export async function loadUsers() {
  // Call an external API endpoint to get posts
  const res = await fetch("/api/users");
  const users = await res.json();

  return users;
}
