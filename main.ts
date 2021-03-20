function get_distance () {
    pins.setPull(DigitalPin.P2, PinPullMode.PullNone)
    pins.digitalWritePin(DigitalPin.P2, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P2, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P2, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High)
    distance = Math.idiv(distance, 58)
}
let distance = 0
distance = 0
basic.forever(function () {
    get_distance()
    basic.showNumber(distance)
    basic.pause(100)
})
