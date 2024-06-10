import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
});

export async function POST(req: Request) {
  const { imageUrl, theme, room } = await req.json();

  const output = await replicate.run(
    "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
    {
      input: {
        image: imageUrl,
        prompt: `A photo of a ${theme} ${room}, 4k photo, highly detailed`,
      },
    }
  );

  return NextResponse.json(output);
}
