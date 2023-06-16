
const root = document.documentElement;

let brandHueValue, accentHueValue, successHueValue, failureHueValue, warningHueValue, infoHueValue;

// Buttons
const brandHueBtn = document.querySelector("#brand-btn");
const accentHueBtn = document.querySelector("#accent-btn");
const successHueBtn = document.querySelector("#success-btn");
const failureHueBtn = document.querySelector("#failure-btn");
const warningHueBtn = document.querySelector("#warning-btn");
const infoHueBtn = document.querySelector("#info-btn");

// Inputs
const brandHueInput = document.querySelector("#brand");
const accentHueInput = document.querySelector("#accent");
const successHueInput = document.querySelector("#success");
const failureHueInput = document.querySelector("#failure");
const warningHueInput = document.querySelector("#warning");
const infoHueInput = document.querySelector("#info");


// EventListener
window.addEventListener("load", () => {
    // Changeable Hue-Values
    brandHueValue = getComputedStyle(root).getPropertyValue("--hue-brand");
    accentHueValue = getComputedStyle(root).getPropertyValue("--hue-accent");
    successHueValue = getComputedStyle(root).getPropertyValue("--hue-success");
    failureHueValue = getComputedStyle(root).getPropertyValue("--hue-failure");
    warningHueValue = getComputedStyle(root).getPropertyValue("--hue-warning");
    infoHueValue = getComputedStyle(root).getPropertyValue("--hue-info");

    brandHueInput.value = brandHueValue;
    accentHueInput.value = accentHueValue;
    successHueInput.value = successHueValue;
    failureHueInput.value = failureHueValue;
    warningHueInput.value = warningHueValue;
    infoHueInput.value = infoHueValue;
});

brandHueBtn.addEventListener("click", () => {
    brandHueValue = brandHueInput.value;
    document.documentElement.style.setProperty("--hue-brand", brandHueValue);
});

accentHueBtn.addEventListener("click", () => {
    accentHueValue = accentHueInput.value;
    document.documentElement.style.setProperty("--hue-accent", accentHueValue);
});

successHueBtn.addEventListener("click", () => {
    successHueValue = successHueInput.value;
    document.documentElement.style.setProperty("--hue-success", successHueValue);
});

failureHueBtn.addEventListener("click", () => {
    failureHueValue = failureHueInput.value;
    document.documentElement.style.setProperty("--hue-failure", failureHueValue);
});

warningHueBtn.addEventListener("click", () => {
    warningHueValue = warningHueInput.value;
    document.documentElement.style.setProperty("--hue-warning", warningHueValue);
});

infoHueBtn.addEventListener("click", () => {
    infoHueValue = infoHueInput.value;
    document.documentElement.style.setProperty("--hue-info", infoHueValue);
});