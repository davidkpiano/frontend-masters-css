# Lesson 4: States

- Determining states for animation
- [Data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
- Creating simple state machines

## Exercise

- Use JavaScript to change the state of the form from `'subscribe'` to `'loading'` when the button is clicked.
- After 2 seconds in `'loading'`, change the state to `'success'` or `'error'` (chosen randomly to simulate an error state)
  - Hint: use `Math.random() < 0.5`
- On the `'error'` state, animate the form by shaking it
  - You will need to create a `shake` animation with `@keyframes`
- Refactor to a state machine to send events and prevent impossible state transitions (we'll do this together)

## Resources

- [Expanding Video Player](https://codepen.io/team/keyframers/pen/dLjZEO)
- [Contact Form Transitions](https://codepen.io/team/keyframers/pen/YzwGZwN)
- [Password Modal](https://codepen.io/davidkpiano/pen/WKvPBP)
