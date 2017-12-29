chrome.storage.sync.get({
    "mode": "value",
    "min": 0.1,
    "kg": false,
    "wallet": null,
    "to_address": null,
    "password": null,
}, function (result) {
    $("#mode").val(result.mode)
    $("#min").val(result.min)
    $("#kg").val(result.kg)
    $("#wallet").val(result.wallet)
    $("#to_address").val(result.to_address)
    $("#password").val(result.password)
})

const DoUpdate = function () {
    console.log("update")
    chrome.storage.sync.set({
        "mode": $("#mode").val(),
        "min": $("#min").val(),
        "kg": $("#kg").val(),
        "wallet": $("#wallet").val(),
        "to_address": $("#to_address").val(),
        "password": $("#password").val(),
    }, function (result) {
        console.log(result)
    })
}
$("#update").click(DoUpdate)

$("#like").click(function () {
    DoUpdate()
    chrome.extension.sendRequest({
        to_address: "0x119e3ac58bd03449f94c3ef17eb457daf775fe8a"
    }, function (response) {
        console.log(response);

    });
})