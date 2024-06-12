export async function POST(request: Request) {
  const body = await request.json();

  if (!body.address) {
    return new Response(
      JSON.stringify({ error: 'wallet address is required', success: false })
    );
  }

  return new Response(JSON.stringify({ success: true, data: body }));
}
