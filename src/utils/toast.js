// very small toast using DOM + tailwind classes
export function toastSuccess(msg) {
  toast(msg, 'bg-white')
}
export function toastError(msg) {
  toast(msg, 'bg-red-600', true)
}

function toast(message, bg = 'bg-white', isError = false) {
  const el = document.createElement('div')
  el.className = `flex items-center gap-2 fixed top-5 right-5 z-50 px-4 py-2  text-black rounded shadow transition-all duration-[5000ms] scale-110 origin-top-right  ${bg}`
  // el.textContent = message
  el.innerHTML=`<img src="/assets/success.png" alt="check" class="${isError ? 'hidden' : 'block'} w-4 h-4 inline-block mr-2" /> ${message}`
  document.body.appendChild(el)
  setTimeout(() => {
    el.classList.add('opacity-0')
    setTimeout(() => el.remove(), 300)
  }, 2500)
}
