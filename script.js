"use strict";

$(document).ready(function () {
  // Display the current date in the header
  $("#currentDay").text(dayjs().format("MMMM D, YYYY"));

  // Time blocks for standard business hours
  const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  // Update past, present, and future classes
  const currentHour = dayjs().hour();

  hours.forEach((hour) => {
    const timeBlock = $(`#hour-${hour}`);
    const textarea = timeBlock.find(".description");

    // Load saved events from local storage
    const savedEvent = localStorage.getItem(`hour-${hour}`);
    if (savedEvent) {
      textarea.val(savedEvent);
    }

    if (hour < currentHour) {
      textarea.addClass("past");
    } else if (hour === currentHour) {
      textarea.addClass("present");
    } else {
      textarea.addClass("future");
    }

    // Add click event listener for the save button
    const button = timeBlock.find(".saveBtn");
    button.on("click", function () {
      localStorage.setItem(`hour-${hour}`, textarea.val());
    });
  });
});
