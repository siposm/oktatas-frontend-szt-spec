"use strict"

doWork(finished)

function doWork(callback) {
    console.log("some work in progress...")
    callback()
}

function finished() {
    console.log("work is finished")
}