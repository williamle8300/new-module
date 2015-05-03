
SOLVE THE PROBLEM

# new-module

Boilerplate for starting new npm modules

# Steps

1. what? read, play, draw, write like a madman
2. abstract
3. what dependencies are needed? what modules to author myself?
4. make.
5. solved: is it simutaneously powerful and utterly trivial? yay.
6. test.
7. npm run publish.

# substack's approach

> Now SUBSTACK doesn't do that. He just wants the most dependable, easy to understand and smallest module he can find (or make) to fulfil his objective.
> In other words, he subscribes to the UNIX philosophy.

> [...]

> To him, it's about taking the time to understand the abstractions.

# Making a new npm module

- Abstractify the problem: draw ––>write nonJS ––>write pseudoJS ––>?
- SUBSTACK codes as usual:
  - Uses console.dir alot to inspect & debug
  - DIDN'T TDD - CREATES AN EXAMPLE.JS THAT REQUIRES THE MODULE AND TESTS ITS FUNCTIONALITY
  - Codes in vim & switches to a terminal every so often to run the example.js script
- IF HE NOTICES AN OPPORTUNITY TO MODULARISE, HE IMMEDIATELY MOVES THE FUNCTION INTO A NEW FILE & CHANGES THE FUNCTION DECLARATION TO MODULE.EXPORTS = ... (WHEN I SAY IMMEDIATELY, I REALLY DO MEAN IMMEDIATELY).
- When he's happy with the module, `npm install tape tap --save-dev`
- Refactors the example.js file as a set of tests (see below).
- Writes README.markdown from scratch with introduction, API documentation & license (API documentation is quick & easy to write when you have small modules).

- Runs pkginit to create package.json.
- Create GitHub repo and npm publish
- Add travis and/or testling-ci github hooks as appropriate

# 1 + 2 = 3 philosophy and mathematics are agreed on this proof

## PARAMETERS CODE 1/4 2 YEARS!!! TURTLES ALL THE WAY UP LOST


- explore and get inspired; do a lot of online reading
- design stuff
  -	think of cool, new things to make
  -	draw & write
  -	spec ideas
  -	seek opinions of others
- cobble and ship code prodigiously
- read books on
  -	javascript
  -	programming
  -	math; number theory
- take math classes at OCC

- i can do anything i want using npm!
- but study how "they" do "the" anything
- at infinite

- real world thing
- philsophically modeled
- with mathematical precision
- proofed in javascript

- you want it
- does 1 thing
- completely open-sourceable

  "turtle"
 learn  do

- quickest path to a README

- events
- streams
- url
- path
- querystring