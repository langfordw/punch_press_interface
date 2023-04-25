# Automated Punch-Press Interface
## Javascript machine controller for an automated desktop punch press

I built an automated small-scale punch press in order to stamp out fiberglass parts for my electronic digital materials research.

This machine was a first project to get to know our new Wire-EDM machine. Everything except for the large steel uprights were cut on the Wire-EDM.

The machine uses a force amplifying linkage to translate the large displacement of the input handle into a small, but strong, displacement of the punch. 

<img src="images/punch_press/automated_punch_press.png" width=500>

An additional stepper motor is positioned to automatically advance the strip of material between each punch operation. 

<img src="images/punch_press/punch_press_close.jpg" width=500>
<img src="images/punch_press/punch_press_part.jpg" width=500>

## Interface

For the touchscreen interface I used a Raspberry Pi (v2) with a little 2.8" capactive touchscreen. The interface is just javascript in the browser and the Pi runs a node server to talk between the browser and an attached A-star microcontroller which controls the stepper motors.

The touchscreen isn't quite as nice as a touchscreen you'd find on a smartphone (for one, it's not multi-touch) but it's remarkably capable given how inexpensive it is. The Pi is hooked up to the wifi so this setup also allows me to control the machine remotely from anywhere.

<div align="center">
    <iframe width="100%" height="600px" src="https://www.youtube.com/embed/YzUhlqh1Msk" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

