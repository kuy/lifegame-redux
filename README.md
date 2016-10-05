# Lifegame Redux ⚡

Conway's lifegame using Redux + various middlewares.

## Middlewares

+ [redux-saga](https://github.com/yelouafi/redux-saga) - [saga](https://github.com/kuy/lifegame-redux/tree/master/src/saga): Saga written in generator/yield
+ [redux-logic](https://github.com/jeffbski/redux-logic) - [logic](https://github.com/kuy/lifegame-redux/tree/master/src/logic) Logic written in VanillaJS
+ [redux-logic](https://github.com/jeffbski/redux-logic) - [logic-rxjs](https://github.com/kuy/lifegame-redux/tree/master/src/logic-rxjs) Logic written in RxJS
+ [redux-logic](https://github.com/jeffbski/redux-logic) - logic-aa Logic written in Async/Await (*Comming Soon...*)
+ redux-observable - *Comming Soon...*
+ redux-loop - *Comming Soon...*
+ redux-effects - *Comming Soon...*

## Side Effects

+ Interval timer
+ Firebase integration
+ Browser features ([Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API), [`window.alert()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) method, ...)

## Getting Started

```
$ npm install
$ npm start
```

Open `http://localhost:8080` in your browser.

## Contributing

Are you using redux-xxx middleware heavily?
Please send PRs or open issues to improve a quality of the code.

## Author

Yuki Kodama / [@kuy](https://twitter.com/kuy)
