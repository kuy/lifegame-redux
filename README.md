# Lifegame Redux ⚡

Conway's lifegame using Redux + various middlewares for comparison.

## Middlewares

+ [redux-saga](https://github.com/yelouafi/redux-saga) - [saga](https://github.com/kuy/lifegame-redux/tree/master/src/saga): Saga written in generator/yield
+ [redux-logic](https://github.com/jeffbski/redux-logic) - [logic](https://github.com/kuy/lifegame-redux/tree/master/src/logic): Logic written in [VanillaJS](http://vanilla-js.com/)
+ [redux-logic](https://github.com/jeffbski/redux-logic) - [logic-rx](https://github.com/kuy/lifegame-redux/tree/master/src/logic-rx): Logic written in [RxJS](https://github.com/ReactiveX/rxjs)
+ [redux-logic](https://github.com/jeffbski/redux-logic) - [logic-aa](https://github.com/kuy/lifegame-redux/tree/master/src/logic-aa): Logic written in async/await
+ [redux-observable](https://github.com/redux-observable/redux-observable) - [observable](https://github.com/kuy/lifegame-redux/tree/master/src/observable): Observable written in [RxJS](https://github.com/ReactiveX/rxjs)
+ [redux-ship](https://github.com/clarus/redux-ship) - [ship](https://github.com/kuy/lifegame-redux/tree/master/src/ship): Controller written in Generators, Effect runner written in async/await
+ redux-effects - *Comming Soon...*
+ redux-loop - *Comming Soon...*

## Side Effects

+ Interval timer (`setInterval()` and `clearInterval()`)
+ Firebase integration - *Comming Soon...*
+ Browser features ([Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API), [`window.alert()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) method, ...) - *Comming Soon...*

## Getting Started

```
$ npm install
$ npm start
```

Open `http://localhost:8080` in your browser.

## Contributing

Are you using redux-xxx middleware heavily?
Please send PRs or open issues to improve a quality of the code.

## License

MIT

## Author

Yuki Kodama / [@kuy](https://twitter.com/kuy)
