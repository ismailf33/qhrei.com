import { toast } from "react-hot-toast"

export const showErr = err => {

    err?.email && toast
        .error(`${err.email.message}`)
    err?.phone && toast
        .error(`${err.phone.message}`)
    err?.textarea && toast
        .error(`${err.textarea.message}`)
    err?.text && toast
        .error(`${err.text.message}`)

}