/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jet Lu
 * Created on: Mar 2026
 * This program controls an RGB LED.
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
pause(500)
pins.digitalWritePin(DigitalPin.P13, 0) // blue
pins.digitalWritePin(DigitalPin.P14, 0) // green
pins.digitalWritePin(DigitalPin.P15, 0) // red

// program
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    pause(1000)
    basic.clearScreen()

    // show red
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("Red")
    pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // show green
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString("Green")
    pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)

    // show blue
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("Blue")
    pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)

    // show magenta
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("Magenta")
    pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)

    // show cyan
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("Cyan")
    pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)

    // show yellow
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString("Yellow")
    pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)

    // show white
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("White")
    pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)

    // reset
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
