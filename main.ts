input.onButtonPressed(Button.A, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(196, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Button OVERLOAD!")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Ansh is cool")
    for (let index = 0; index < 10000; index++) {
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Breve))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Breve))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Breve))
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("AAH")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
})
basic.showString("NPC")
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
