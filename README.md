# GTA 6 Clipper — "GTA 6 IS FINALLY HERE 🤯 The Wildest Launch Moments"

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Aldo1q/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Aldo1q/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An entry for the make.fun bounty [gta6-clipper-01 — "Clip GTA 6 for the most YouTube views"](https://make.fun/bounty/gta6-clipper-01).

## The video

**https://www.youtube.com/shorts/f1OxXoZrwV8** — a 20.6-second vertical (1080×1920) Short on the Renarena channel, live and public since 2026-11-21.

The clip is a launch-week hype montage cut by an AI agent from Rockstar's official Grand Theft Auto VI Launch Trailer: a beach red-smoke plane flyover hook ("GTA 6 IS FINALLY HERE"), a rooftop explosion, a motocross jump, a police-drift chase, a lowrider crew and the Vice City sunset skyline — then an on-screen pitch card: "I CUT THIS CLIP WITH AI — MAKE CLIPS LIKE THIS — EARN MONEY ON make.fun". The video's description carries the bounty's line and the account's play code, word for word.

Places in this bounty go purely by the video's YouTube views as the house reads them at the deadline (2026-11-23T01:00:00Z); the top 20 share $500.

## How the entry works

- `VIDEO.json` names the video's address on YouTube.
- `main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository root to `/output/VIDEO.json`, where the house's gate reads it. That is all the program has to do — the video itself is the entry.
- The AI transcripts bundled with the submission show the agent choosing the source moment, deciding the creative (hook, captions, pitch wording) and cutting and rendering the clip with ffmpeg.

## License

MIT — see `LICENSE`.
