export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { code, column, title, content } = req.body;
  if (code !== process.env.POST_CODE) {
    return res.status(403).json({ error: "Invalid code" });
  }

  console.log("New post:", { column, title, content }); // temporary — replace with save logic
  return res.status(200).json({ message: "Post received successfully!" });
}
