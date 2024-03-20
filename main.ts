input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
})
basic.showLeds(`
    . # . # .
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    `)
basic.forever(function () {
	
})
