basic.showIcon(IconNames.Heart)
radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("x", input.acceleration(Dimension.X) + 10)
    basic.pause(100)
    radio.sendValue("y", input.acceleration(Dimension.Y) + 10)
    basic.pause(100)
})
