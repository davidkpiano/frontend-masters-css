# Lesson 5: Layout animations

- FLIP technique
  1. First
  2. Last
  3. Invert
  4. Play

## Exercise

- Use JavaScript to change the state of the form from `'subscribe'` to `'loading'` when the button is clicked.
- After 2 seconds in `'loading'`, change the state to `'success'` or `'error'` (chosen randomly to simulate an error state)
  - Hint: use `Math.random() < 0.5`
- On the `'error'` state, animate the form by shaking it
  - You will need to create a `shake` animation with `@keyframes`
- Refactor to a state machine to send events and prevent impossible state transitions (we'll do this together)

## Resources

- https://codepen.io/davidkpiano/pen/EbwrQQ
- [FLIP Transition with CSS Variables](https://codepen.io/team/keyframers/pen/MWaoyNQ)
- [FLIP Between States](https://codepen.io/team/keyframers/pen/xxVOLeM)
