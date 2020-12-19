input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Target)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
    }
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
