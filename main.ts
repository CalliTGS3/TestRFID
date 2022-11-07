serial.redirectToUSB()
// Initialize RFID module
MFRC522.Init(
DigitalPin.C9,
DigitalPin.C8,
DigitalPin.C7,
DigitalPin.P0
)
basic.forever(function () {
    // Get ID of RFID card
    serial.writeLine("" + (MFRC522.getID().toString()))
})
