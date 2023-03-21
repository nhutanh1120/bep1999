// Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");

        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when clicked
        toast.onclick = function (e) {
            if (e.target.closest(".toast-close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: "bx bx-check-circle bx-sm",
            info: "bx bx-info-circle bx-sm",
            warning: "bx bx-error-circle bx-sm",
            error: "bx bx-error-circle bx-sm",
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add("toast", `toast-${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
                    <div class="toast-icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast-body">
                        <h3 class="toast-title">${title}</h3>
                        <p class="toast-msg">${message}</p>
                    </div>
                    <div class="toast-close">
                        <i class='bx bx-x bx-sm'></i>
                    </div>
                `;
        main.appendChild(toast);
    }
}

export function showErrorToast(message) {
    toast({
        title: "Thất bại!",
        message,
        type: "error",
        duration: 5000,
    });
}
export function showSuccessToast(message) {
    toast({
        title: "Thành công!",
        message,
        type: "error",
        duration: 5000,
    });
}
export function showWarningToast(message) {
    toast({
        title: "Cảnh báo!",
        message,
        type: "warning",
        duration: 5000,
    });
}
