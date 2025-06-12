// TODO: Add custom icon option
// TODO: Only constuct elements if used
// TODO: Animation options (Top, Bottom, Left, Right)
// TODO: Support multiple toasts in container

const icon = {
  success:
    '<span class="success-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#2ecc71" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></span>',
  danger:
    '<span class="danger-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#e74c3c" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></span>',
  warning:
    '<span class="warning-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#f1c40f" d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg></span>',
  info: '<span class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#3498db" d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/></svg></span>',
};

function CloseToast(toastId) {
  const target = document.getElementById(toastId);
  target.classList.add("closing");
}

/**
 * Constructs a toast notification using Javascript and the given parameters. Toast is appended to the DOM body.
 * @param {string} message - A short message
 * @param {string} [title] - Title of the toast
 * @param {string} [toastType=info] Type of toast (info, success, warning, danger)
 * @param {string} [duration=5000] Duration of the toast in milliseconds. Can be set "Static" to require the user to close the toast.
 */
function ShowToast(
  message,
  title,
  toastType = "info",
  duration = 5000
) {
  // Validate parameters
  if (message.length <= 0) {
    return;
  }

  toastType = toastType.toLowerCase();
  if (!Object.keys(icon).includes(toastType)) toastType = "info";

  if (duration != "static" && duration.length <= 0) {
    duration = 5000;
  }

  // Start construction
  let box = document.createElement("div");
  box.id = `toast${Math.floor(Math.random() * 1000).toString()}`;
  box.classList.add(
    "toast",
    `toast-${toastType}`,
    `${duration == "static" ? "static" : "animated"}`
  );

  let toastContentWrapper = document.createElement("div");
  toastContentWrapper.className = "toast-content-wrapper";

  let toastMessageWrapper = document.createElement("div");
  toastMessageWrapper.className = "toast-message-wrapper";

  let closeBtn = document.createElement("div");
  closeBtn.className = "close-btn";

  let button = document.createElement("button");
  button.type = "button";
  button.id = "closeToast";

  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 384 512");

  let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
  );

  svg.appendChild(path);
  button.appendChild(svg);
  closeBtn.appendChild(button);

  let toastTitle;

  if (title.length > 0) {
    toastTitle = document.createElement("div");
    toastTitle.className = "toast-title";
    toastTitle.textContent = title;
  }

  let toastIcon = document.createElement("div");
  toastIcon.className = "toast-icon";
  toastIcon.innerHTML = icon[toastType];

  let toastMessage = document.createElement("div");
  toastMessage.className = "toast-message";
  toastMessage.textContent = message;

  let toastProgress = document.createElement("div");
  toastProgress.className = "toast-progress";

  toastContentWrapper.appendChild(closeBtn);
  if (title) toastContentWrapper.appendChild(toastTitle);
  toastMessageWrapper.appendChild(toastIcon);
  toastMessageWrapper.appendChild(toastMessage);
  toastContentWrapper.appendChild(toastMessageWrapper);
  toastContentWrapper.appendChild(toastProgress);

  box.appendChild(toastContentWrapper);

  if (duration > 0) {
    box.querySelector(".toast-progress").style.animationDuration = `${
      duration / 1000
    }s`;

    box.style.animationDelay = `0s, ${duration / 1000}s`;
  }

  const toastAlready = document.body.querySelector(".toast");
  if (toastAlready) toastAlready.remove();

  document.body.appendChild(box);

  closeBtn.addEventListener("click", (e) => {
    CloseToast(box.id);
  });
}
