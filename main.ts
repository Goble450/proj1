input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # . # .
        . # . # .
        . # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # . # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . . .
        . # . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.A, function () {
    music.playMelody("B A G A G F A C5 ", 120)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . . # # .
        . # . # .
        . . # # .
        . . . # #
        . . . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # . .
        . # . # .
        . # . # .
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Duck)
})
basic.showLeds(`
    . # . # .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `)
basic.pause(100)
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    `)
