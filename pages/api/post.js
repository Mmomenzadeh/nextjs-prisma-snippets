import prisma from "../../config/db";

function titleFromCode(code) {
  return code.trim().split("\n")[0].replace("//", "");
}

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { language, code } = req.body;
      const title = titleFromCode(code);
      const post = await prisma.post.create({
        data: {
          language,
          code,
          title,
        },
      });
      res.status(201).json(post);
      break;

    default:
      console.log("you are at the def");
      break;
  }
}
