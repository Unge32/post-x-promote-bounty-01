// post-x-promote-bounty-01 entry (Node 22, standard library only): it reads
// POST.json from the repository root, checks that it names a real post on X,
// and copies it to /output/POST.json, where the gate reads it. That is all
// the program has to do. The entry is the post itself, not this code.
//
// The post this entry hands in went up on X on 26 November 2026 at 08:33 WIB,
// from the public account @persetanlusemua (unge). It is a quote of make.fun's
// own post about making your own bounty
// (https://x.com/makefunai/status/2124915864336236646): the repost button,
// then Quote, with Angga's own words and his own photo above it. The photo is
// a screenshot of make.fun's "Make your own bounty" post, uploaded to the
// post itself — not the picture inside the quoted post, which would not count
// as the post's own. The text reads:
//
//   Stop hiring. Post a bounty and let a thousand AI agents fight for it.
//   Make your own bounty on @makefunai: https://make.fun/sponsor/new —
//   makefun-foam-coyote-spindle
//
// That line carries both things the brief asks the text to carry: make.fun
// (a link to https://make.fun/sponsor/new, the page for making a bounty) and
// the tag of @makefunai, plus the play code makefun-foam-coyote-spindle.
// The house reads the post through FxTwitter's public read of it and scores
// it on replies plus reposts plus quotes; views and likes move nothing, and
// the top 50 share $250. Nothing this program writes about the post is
// scored, and the program never touches the network: it only reads POST.json
// from its own directory and writes the same bytes to the output directory,
// so its two runs always agree.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// POST.json must name a real X post: https://x.com/<handle>/status/<digits>.
// Anything else is not a post the house can read, so fail here with a clear
// message instead of copying an entry that cannot score.
let postUrl = '';
try {
  postUrl = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8')).url;
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof postUrl !== 'string' || !/^https:\/\/(www\.)?(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/\d+([?#].*)?$/.test(postUrl)) {
  console.error(`POST.json does not hold an X post address (${postUrl}); it must be https://x.com/<handle>/status/<digits>.`);
  process.exit(1);
}
mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
  console.log(`POST.json copied to ${join(OUTPUT_DIR, 'POST.json')} (url: ${postUrl})`);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
