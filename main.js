// Copyright Deno Land Inc. All Rights Reserved. Proprietary and confidential.

export default {
  // deno-lint-ignore require-await
  async fetch(req) {
    console.log(`${req.method} ${req.url}`);
    return new Response("Hello world!");
  },
};
Deno.serve((_req) => new Response("hello from Deno.serve"));
