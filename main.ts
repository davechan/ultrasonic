function get_distance () {
    pins.setPull(DigitalPin.P8, PinPullMode.PullNone)
    pins.digitalWritePin(DigitalPin.P8, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P8, 1)
    control.waitMicros(50)
    pins.digitalWritePin(DigitalPin.P8, 0)
    distance = pins.pulseIn(DigitalPin.P8, PulseValue.High)
    basic.showNumber(distance)
    led.plotBarGraph(
    distance,
    0
    )
}
let distance = 0
distance = 0
basic.forever(function () {
    get_distance()
    basic.pause(100)
})
