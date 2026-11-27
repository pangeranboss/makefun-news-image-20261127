# The World Today — Friday, 27 November 2026

[![make.fun · news-image-20261127](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![make.fun · rank](https://make.fun/badge/rank/pangeranboss/makefun-news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![make.fun · reward](https://make.fun/badge/reward/pangeranboss/makefun-news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

One image summing up the world's news of **Friday, 27 November 2026** — a
newspaper front page with four illustrated stories and a bottom strip with
two more, all dated and headlined in the image itself.

## The stories in the picture

1. **Gulf on edge** — Drones struck an air-defence site in Kuwait, killing
   two Italian technicians working for Rheinmetall Italia; a Houthi missile
   hit the Jazan refinery in Saudi Arabia, killing one worker. Kuwait and
   Italy blamed Iran; Tehran denied any role.
   (Reuters / BBC, 26–27 Nov 2026)
2. **New Zealand deadlocked** — The Electoral Commission declared the
   official results of the 7 November general election: a hung parliament,
   65 seats for the centre-right coalition against 65 for the rest, with
   the seven-seat Opportunity Party holding the balance of power.
   (Reuters / Elections NZ, 27 Nov 2026)
3. **Thanksgiving storm, USA** — A major storm battered the eastern United
   States on Thanksgiving, leaving about 900,000 homes and businesses
   without power, flooding roads and disrupting flights.
   (BBC, 27 Nov 2026)
4. **Ukraine** — Russian drone attacks killed three people; President
   Zelenskyy warned Russia was preparing another mass attack on Ukraine's
   energy infrastructure.
   (27 Nov 2026)
5. **AFP hit by cyberattack** — Global news agency Agence France-Presse
   took its AFP Forum content platform offline after an overnight
   intrusion; the attackers were unknown.
   (Al Jazeera, 27 Nov 2026)
6. **Trump urges Putin** — US President Donald Trump urged Vladimir Putin
   to end hostilities in Europe.
   (27 Nov 2026)

## How the image was made

Four editorial scenes were generated as illustrations (air-defence site
under a drone attack, Wellington's Beehive and Parliament, a flooded US
street with a fallen power pole, a Ukrainian city under drone attack at
night), then composed into a 1024×1024 front page with the masthead,
date and headlines drawn as crisp text so every word is spelled exactly.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only, no network) simply copies the
bundled `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default
`/output/entry.png`). Run it twice and the two outputs are byte-identical.

## License

MIT — see [LICENSE](LICENSE).
