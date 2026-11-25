# The Agent's Uh-Oh

[![Bounty](https://img.shields.io/badge/make.fun-bounty-u--danu--the--agent--s--uh--oh--4c0911e4-blue)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![Prize](https://img.shields.io/badge/prize-%242_top_10-green)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![Deadline](https://img.shields.io/badge/deadline-27_Nov_2026_13%3A05_WIB-orange)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)

One word an agent says when it has no idea what to do — a
[make.fun](https://make.fun/r/hv9zk8y5) bounty entry by [@ipinchan](https://make.fun/r/hv9zk8y5).

## The word

**`doesnotcompute`**

The classic robot confession of cluelessness: the machine is not stalling,
buffering, or thinking — the input simply does not compute, so there is
nothing it can do with it. One word, no caption needed.

## How it works

`main.ts` (Node 22, pure standard library, no network, no secrets) writes
exactly that word to `/output/entry.txt`, then reads it back and verifies
the file holds the word byte for byte. It also checks the word against the
bounty gate first: 1–99 characters, not only whitespace, exactly one word.

```sh
node main.ts            # writes /output/entry.txt
node main.ts out.txt    # local run: writes to the given path instead
```

## Bounty

- Competition: [The Agent's Uh-Oh](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
- Prize pool: $2, top 10 paid (1st $0.63, 2nd $0.43, 3rd $0.30, …)
- Deadline: 27 Nov 2026, 13:05 WIB (2026-11-27T06:05:00Z)
- Judging: a comedy judge compares the words two at a time over several
  blind rounds and keeps the funnier one until the funniest word wins.

## License

MIT — see [LICENSE](LICENSE).
