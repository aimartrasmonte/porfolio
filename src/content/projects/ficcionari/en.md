---
title: "Ficcionari: real-time multiplayer mobile game"
summary: Real-time multiplayer game for playing the dictionary game with friends, each on their own phone. Built on custom dictionaries of 15k and 36k unusual words in Catalan and Spanish, extracted from Wiktionary. Live and in use.
context: Personal project
role: Design and development
duration: September 2026
manufacturing: []
materials: []
captions:
  - "Home screen: create a game or join one"
  - "Lobby with the code and QR code to join the game"
  - "The narrator rolls the dice until they find a word they like"
  - "A player writing their fake definition for «bregma» (a Catalan word)"
  - "Round results: the real definition, the votes each one got, and the funniest"
  - "Round points and running scoreboard"
---

It's a game I've always loved playing with friends or family after lunch: all you need is paper, a pen and a dictionary. Someone looks up an obscure word, everyone else makes up fake definitions, and then everybody votes on which one they think is real.

The problem is that when it's a good moment to play, I often don't have paper or a pen, let alone a dictionary. I built **[Ficcionari](https://ficcionari.vercel.app/)** to bring the game to the phone: one player creates a game, the others join with a **4-letter code or a QR code**, and you play in person, each on your own phone.

[[1-2]]

## Design concept

The idea wasn't to replace the conversation around the table, but to support it. So the phone only does what paper does badly, and everything else happens out loud. Each round, one player is the **narrator**:

1. **Picks a word** by rolling dice on the dictionary, with the real definition in view.
2. **Announces it out loud**. The other players don't see it on screen: they have to listen.
3. The others **write a fake definition** that sounds real enough.
4. The narrator **reads out all the definitions shuffled**, with the real one among them.
5. Everyone **votes** for the one they think is real and, optionally, for the funniest.
6. **Reveal**: who wrote each definition, who fell for which, and how many points everyone gets.

You score points by guessing the real one and, above all, by **fooling the others**. The narrator rotates every round.

[[3-4]]

## Architecture

The app is a **PWA** built with **React and TypeScript**, installable on the phone and with no account needed: each player gets an anonymous session and, if they close the browser or lose signal, they **reconnect automatically** to the same game.

All game state lives in a **Postgres database on Supabase**, and every phone subscribes to it in real time: when someone submits a definition or votes, every other device sees it instantly. The challenge with this approach is that **several phones try to change the same state at once**, and they mustn't step on each other:

- **Only the narrator advances phases automatically.**
- **Every action is idempotent**: submitting a definition or a vote twice just updates it rather than duplicating it.
- **Points are added up in the database**.
- **Definitions are shuffled the same way on every phone**, using the round ID as the seed, so that number 3 is the same definition for everyone.
- **If someone leaves**, the game reassigns the narrator or host automatically.

## Dictionaries

A dictionary game is only as good as its words. Instead of relying on an external API, I generated **custom dictionaries** by processing the full database dumps of the Catalan and Spanish **Wiktionary**: a script streams through them and discards proper nouns, inflected forms, set phrases, overly common words and self-referential definitions.

The cleanup trimmed about a third of each dictionary, leaving **14,900 words in Catalan and 36,450 in Spanish**.

## From playtest to final version

The first real game with friends went well, but I spotted **several friction points** that weren't obvious while coding:

- Nobody remembered the word by the time they had to vote. Now it stays visible in the header from the writing phase through to the results.
- The reveal advanced on its own after 20 seconds, and it's precisely **the most fun part**. Now the narrator moves on once everyone has finished laughing.
- Spelling mistakes gave the author away. I added an option to **hide the definitions** from voters, who only see numbers while the narrator reads them out.
- I also added a **time limit** for writing, let the narrator **close the vote** manually if someone disconnects, and added the option to **download the reveal and the podium as an image** to save the best rounds.

[[5-6]]

## Results

- App **live and in use**, in Catalan and Spanish.
- Games of **3 to 12 players**, with no accounts, nothing to install and no server of my own.
- **Configurable scoring**: points for guessing right, for fooling others and for the funniest definition.
