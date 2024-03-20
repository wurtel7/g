input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("F C - C5 E C5 G C5 ", 500), music.PlaybackMode.InBackground)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(200)
    leven += -10
})
input.onButtonPressed(Button.B, function () {
    leven += 10
})
basic.showLeds(`
    . # . # .
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    `)
let leven = 60
loops.everyInterval(1000, function () {
    leven += -1
})
basic.forever(function () {
    if (leven < 1) {
        basic.showIcon(IconNames.Skull)
        basic.pause(2000)
        game.gameOver()
    }
    if (leven < 10) {
        basic.showIcon(IconNames.Confused)
    } else if (leven < 30) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    }
})
basic.forever(function () {
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
