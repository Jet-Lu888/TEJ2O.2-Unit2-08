"""
Created by: Jet Lu
Created on: Mar 2026
This module is a Micro:bit MicroPython program that controls an RGB LED.
"""

from microbit import *

# setup
display.clear()
display.show(Image.HAPPY)
pin13.write_digital(0)  # blue
pin14.write_digital(0)  # green
pin15.write_digital(0)  # red
sleep(500)

# program
while True:
    if button_a.was_pressed():
        display.show(Image.YES)
        sleep(500)
        display.clear()
        # red
        pin15.write_digital(1)
        display.scroll("Red")
        sleep(1000)
        pin15.write_digital(0)
        # green
        pin14.write_digital(1)
        display.scroll("Green")
        sleep(1000)
        pin14.write_digital(0)
        # blue
        pin13.write_digital(1)
        display.scroll("Blue")
        sleep(1000)
        pin13.write_digital(0)
        # magenta
        pin13.write_digital(1)
        pin15.write_digital(1)
        display.scroll("Magenta")
        sleep(1000)
        pin13.write_digital(0)
        pin15.write_digital(0)
        # cyan
        pin13.write_digital(1)
        pin14.write_digital(1)
        display.scroll("Cyan")
        sleep(1000)
        pin13.write_digital(0)
        pin14.write_digital(0)
        # yellow
        pin15.write_digital(1)
        pin14.write_digital(1)
        display.scroll("Yellow")
        sleep(1000)
        pin15.write_digital(0)
        pin14.write_digital(0)
        # white
        pin13.write_digital(1)
        pin14.write_digital(1)
        pin15.write_digital(1)
        display.scroll("White")
        sleep(1000)
        pin13.write_digital(0)
        pin14.write_digital(0)
        pin15.write_digital(0)
        # reset
        display.clear()
        display.show(Image.HAPPY)
