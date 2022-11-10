input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    // Write data to card
    MFRC522.write("Raik")
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    leseID = !(leseID)
    if (leseID) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.setLedColor(0xff0000)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    data = MFRC522.read()
    serial.writeLine("DATA:" + data)
})
let data = ""
let leseID = false
serial.redirectToUSB()
serial.writeLine("Start")
// Initialize RFID module
MFRC522.Init(
DigitalPin.C9,
DigitalPin.C8,
DigitalPin.C7,
DigitalPin.P0
)
serial.writeLine("Initialisiert")
leseID = true
if (leseID) {
    basic.setLedColor(0x00ff00)
} else {
    basic.setLedColor(0xff0000)
}
basic.forever(function () {
    if (leseID) {
        let id = MFRC522.getID().toString()
serial.writeLine("ID:" + id)
    }
})
