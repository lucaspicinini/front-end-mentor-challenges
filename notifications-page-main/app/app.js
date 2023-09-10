let allNotifications = Array.from(document.getElementsByClassName("block-notifications__type01"));

let allRedMarks = Array.from(document.getElementsByClassName("red-mark"));

let notificationCounter = + document.querySelector(".block-header__notifications-number").textContent;

let markAllButton = document.querySelector(".block-header__markall");

allNotifications.forEach((notification, i) => {

    checkRedMarks(notification, i);

    notification.addEventListener("click", () => {
        
        switchState(notification);
        feedingCounter(notification);
        checkRedMarks(notification, i);

    })

})

markAllButton.addEventListener("click", () => {

    allNotifications.forEach((notification, i) => {

        notification.className = "block-notifications__type01 block-notifications--read";
        notificationCounter = 0;
        document.querySelector(".block-header__notifications-number").textContent = notificationCounter;

        checkRedMarks(notification, i);

    })

})

function checkRedMarks(notification, i) {

    if (notification.className == "block-notifications__type01 block-notifications--read") {
    
        allRedMarks[i].style.display = "none";
    
    } else if (notification.className == "block-notifications__type01 block-notifications--notread") {
    
        allRedMarks[i].style.display = "inline-block";
    
    }

}

function switchState(notification) {

    if (notification.className == "block-notifications__type01 block-notifications--read") {

        notification.className = "block-notifications__type01 block-notifications--notread";

    } else if (notification.className == "block-notifications__type01 block-notifications--notread") {

        notification.className = "block-notifications__type01 block-notifications--read";

    }

}

function feedingCounter(notification) {

    if (notification.className == "block-notifications__type01 block-notifications--read") {

        notificationCounter -= 1;
        document.querySelector(".block-header__notifications-number").textContent = notificationCounter;

    } else if (notification.className == "block-notifications__type01 block-notifications--notread") {

        notificationCounter += 1;
        document.querySelector(".block-header__notifications-number").textContent = notificationCounter;

    }

}