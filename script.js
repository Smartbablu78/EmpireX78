// ==========================================
// TELEGRAM CHANNEL SETTINGS
// ==========================================

const TELEGRAM_LINK = "https://t.me/+t_LaDm-ORS84NGQ1";


// ==========================================
// TELEGRAM BUTTON CLICK
// ==========================================

function joinTelegram() {

    // Meta Pixel - Lead event
    if (typeof fbq === "function") {
        fbq("track", "Lead");

        // Meta Pixel - Subscribe event
        fbq("track", "Subscribe");
    }

    // Open Telegram
    window.location.href = TELEGRAM_LINK;
}