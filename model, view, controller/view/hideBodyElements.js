export function hideBodyItems() {
    const all = document.querySelectorAll(".body-item");

    all.forEach(item => item.classList.add('hidden'));
}