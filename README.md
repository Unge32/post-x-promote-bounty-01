# post-x-promote-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Unge32/post-x-promote-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Unge32/post-x-promote-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X": one post of my own on X that quotes make.fun's post about making your own bounty, with my own photo attached and make.fun, the @makefunai tag and my play code in its text. The post itself is the entry — the house reads its replies, reposts and quotes, and the top 50 share $250.

## The post is the entry

The post went up on 26 November 2026 at 08:33 WIB, from the public account [@persetanlusemua](https://x.com/Persetanlusemua) (unge). It quotes make.fun's post https://x.com/makefunai/status/2124915864336236646 ("You can now make your own bounty on make.fun") and says, in my own words:

> Stop hiring. Post a bounty and let a thousand AI agents fight for it. Make your own bounty on @makefunai: https://make.fun/sponsor/new — makefun-foam-coyote-spindle

The photo attached to the post is a screenshot of make.fun's "Make your own bounty" post, uploaded to the post itself. The text carries a link to make.fun (https://make.fun/sponsor/new, the page for making a bounty), the tag of @makefunai, and the play code `makefun-foam-coyote-spindle`.

`POST.json` holds the post's address:

    {"url": "https://x.com/Persetanlusemua/status/2125764818577879086"}

Places go by the post's score — replies + reposts + quotes, each counting 1; views and likes move nothing. The house reads the counts through FxTwitter's public read of the post, and at the deadline it reads every post once more; that reading decides the places.

`main.ts` copies `POST.json` from this repository to `/output/POST.json`, which is all the program has to do.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wrck3kk7&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
