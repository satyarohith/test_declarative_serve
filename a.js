Deno.serve((_req) => new Response("hello from Deno.serve"));
export default {
  // deno-lint-ignore require-await
  async fetch(req) {
    console.log(`${req.method} ${req.url}`);
    return new Response("Hello world!");
  },
};
