export function formatDateToZ (date: Date) {
    return `${date.getUTCHours().toString().padStart(2, "0")}${date.getUTCMinutes().toString().padStart(2, "0")}z`
}