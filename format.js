export const Reset = "\x1b[0m"
export const Bright = "\x1b[1m"
export const Dim = "\x1b[2m"
export const Italic = "\x1b[3m"
export const Underscore = "\x1b[4m"
export const Blink = "\x1b[5m"
export const Reverse = "\x1b[7m"
export const Hidden = "\x1b[8m"

export const FgBlack = "\x1b[30m"
export const FgRed = "\x1b[31m"
export const FgGreen = "\x1b[32m"
export const FgYellow = "\x1b[33m"
export const FgBlue = "\x1b[34m"
export const FgMagenta = "\x1b[35m"
export const FgCyan = "\x1b[36m"
export const FgWhite = "\x1b[37m"
export const FgOrange = "\x1b[38;5;208m"
export const FgOrangeBold = "\x1b[38;5;202m"

export const BgBlack = "\x1b[40m"
export const BgRed = "\x1b[41m"
export const BgGreen = "\x1b[42m"
export const BgYellow = "\x1b[43m"
export const BgBlue = "\x1b[44m"
export const BgMagenta = "\x1b[45m"
export const BgCyan = "\x1b[46m"
export const BgWhite = "\x1b[47m"


export function c(s, style) {
    return `${style}${s}${Reset}`
}

export function r(s) { return c(s, FgRed) }
export function g(s) { return c(s, FgGreen) }
export function b(s) { return c(s, FgBlue) }
export function y(s) { return c(s, FgYellow) }
export function o(s) { return c(s, FgOrange) }

export function rb(s) { return c(s, FgRed+Bright) }
export function gb(s) { return c(s, FgGreen+Bright) }
export function bb(s) { return c(s, FgBlue+Bright) }
export function yb(s) { return c(s, FgYellow+Bright) }
export function ob(s) { return c(s, FgOrangeBold+Bright) }

export function url(s) { return c(s, FgGreen+Bright+Italic+Underscore) }
export function t(n) { return '\t'.repeat(n) }
export function w(n) { return ' '.repeat(n) }

export function unformat(s) {
    let arr = [...s]
    let res = []
    let i = false
    for (const x of arr) {
        if (x == '\x1b') { i = true }
        if (!i) { res.push(x) }

        if (i && x == 'm') { i = false }
    }

    return res.join("")
}

export function center(s) {
    let t_s = unformat(s)
    let l = t_s.length
    let n = ~~( (80-l)/2 )

    return `${w(n)}${s}${t(n)}`
    
}

export function lalign(n, s) {
    return `${t(n)}${s}`
}