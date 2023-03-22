"use strict";

$(document).ready(function () {
  // Show the current date in the header
  $("#currentDay").text(dayjs().format("MMMM D, YYYY"));

  // Time
  const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  // Add past, present, and future classes
  const currentHour = dayjs().hour();

  hours.forEach((hour) => {
    const timeBlock = $(`#hour-${hour}`);
    const textarea = timeBlock.find(".description");

    // Load saved info from local storage
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
    button.click(function () {
      localStorage.setItem(`hour-${hour}`, textarea.val());
    });
  });
});
